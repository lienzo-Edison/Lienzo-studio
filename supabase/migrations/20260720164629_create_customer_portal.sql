create schema if not exists private;

create type public.portal_role as enum ('new', 'customer', 'admin');
create type public.project_status as enum ('planning', 'in_progress', 'review', 'complete');

create table public.admin_allowlist (
  email text primary key,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text,
  role public.portal_role not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  title text not null,
  service_label text not null,
  summary text not null,
  status public.project_status not null default 'planning',
  progress integer not null default 0 check (progress between 0 and 100),
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index projects_organization_id_idx on public.projects (organization_id);
create index organization_members_user_id_idx on public.organization_members (user_id);

create or replace function private.is_admin()
returns boolean
language sql stable security definer
set search_path = public, auth
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and role = 'admin'
  );
$$;

create or replace function private.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = public, auth
as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id,
    lower(new.email),
    nullif(trim(coalesce(new.raw_user_meta_data ->> 'full_name', '')), ''),
    case when exists (
      select 1 from public.admin_allowlist where email = lower(new.email)
    ) then 'admin'::public.portal_role else 'new'::public.portal_role end
  );
  return new;
end;
$$;

create or replace function private.set_updated_at()
returns trigger
language plpgsql security definer
set search_path = public
as $$
begin new.updated_at = now(); return new; end;
$$;

create or replace function private.protect_profile_role()
returns trigger
language plpgsql security definer
set search_path = public, auth, private
as $$
begin
  if new.role is distinct from old.role and not private.is_admin() then
    raise exception 'Only an administrator can change an account role';
  end if;
  return new;
end;
$$;

revoke all on function private.is_admin() from public;
revoke all on function private.handle_new_user() from public;
revoke all on function private.set_updated_at() from public;
revoke all on function private.protect_profile_role() from public;
grant usage on schema private to authenticated;
grant execute on function private.is_admin() to authenticated;

create trigger on_auth_user_created
  after insert on auth.users for each row execute procedure private.handle_new_user();
create trigger profiles_set_updated_at
  before update on public.profiles for each row execute procedure private.set_updated_at();
create trigger organizations_set_updated_at
  before update on public.organizations for each row execute procedure private.set_updated_at();
create trigger projects_set_updated_at
  before update on public.projects for each row execute procedure private.set_updated_at();
create trigger profiles_protect_role
  before update on public.profiles for each row execute procedure private.protect_profile_role();

alter table public.admin_allowlist enable row level security;
alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.projects enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select to authenticated
  using ((select auth.uid()) = id or private.is_admin());
create policy "Users can update their own profile; admins can manage profiles"
  on public.profiles for update to authenticated
  using ((select auth.uid()) = id or private.is_admin())
  with check ((select auth.uid()) = id or private.is_admin());

create policy "Members can view their organization; admins can manage organizations"
  on public.organizations for select to authenticated
  using (private.is_admin() or exists (
    select 1 from public.organization_members
    where organization_id = organizations.id and user_id = (select auth.uid())
  ));
create policy "Admins can add organizations"
  on public.organizations for insert to authenticated with check (private.is_admin());
create policy "Admins can update organizations"
  on public.organizations for update to authenticated using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete organizations"
  on public.organizations for delete to authenticated using (private.is_admin());

create policy "Users can view their memberships; admins can manage memberships"
  on public.organization_members for select to authenticated
  using (user_id = (select auth.uid()) or private.is_admin());
create policy "Admins can add memberships"
  on public.organization_members for insert to authenticated with check (private.is_admin());
create policy "Admins can update memberships"
  on public.organization_members for update to authenticated using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete memberships"
  on public.organization_members for delete to authenticated using (private.is_admin());

create policy "Members can view their projects; admins can manage projects"
  on public.projects for select to authenticated
  using (private.is_admin() or exists (
    select 1 from public.organization_members
    where organization_id = projects.organization_id and user_id = (select auth.uid())
  ));
create policy "Admins can add projects"
  on public.projects for insert to authenticated with check (private.is_admin());
create policy "Admins can update projects"
  on public.projects for update to authenticated using (private.is_admin()) with check (private.is_admin());
create policy "Admins can delete projects"
  on public.projects for delete to authenticated using (private.is_admin());

revoke all on public.admin_allowlist from anon, authenticated;
revoke all on public.profiles from anon;
revoke all on public.organizations from anon;
revoke all on public.organization_members from anon;
revoke all on public.projects from anon;
grant select, update (display_name, role) on public.profiles to authenticated;
grant select, insert, update, delete on public.organizations to authenticated;
grant select, insert, update, delete on public.organization_members to authenticated;
grant select, insert, update, delete on public.projects to authenticated;

insert into public.admin_allowlist (email) values ('edison@lienzo.studio');
insert into public.organizations (name, slug) values ('Sample client', 'sample-client');
insert into public.projects (organization_id, title, service_label, summary, status, progress)
select id, 'Basic brand foundation', 'Brand identity',
  'A focused visual foundation: logo direction, color palette, and the first set of brand guidelines.',
  'in_progress'::public.project_status, 45
from public.organizations where slug = 'sample-client';
