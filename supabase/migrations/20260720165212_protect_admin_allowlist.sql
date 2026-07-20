create policy "No direct access to administrator allowlist"
  on public.admin_allowlist for all to authenticated using (false) with check (false);
