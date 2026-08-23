import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import PortalSignOut from "@/components/PortalSignOut";
import PortalAdminResetButton from "@/components/PortalAdminResetButton";
import { createClient } from "@/lib/supabase/server";
import {
  assignSampleProject,
  changeAccountType,
  changeProjectStatus,
} from "./actions";

export const metadata: Metadata = {
  title: "Portal administration",
  robots: { index: false, follow: false },
};

function labelForStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function PortalAdminPage() {
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (!userId) redirect("/portal/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();
  if (profile?.role !== "admin") redirect("/portal");

  const [{ data: accounts }, { data: projects }] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, email, display_name, role, created_at")
      .order("created_at", { ascending: false }),
    supabase
      .from("projects")
      .select("id, title, service_label, status, progress, organizations(name)")
      .order("updated_at", { ascending: false }),
  ]);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <header className="flex flex-col gap-6 border-b border-black/10 pb-8 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
            Lienzo internal
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl">
            Portal administration
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#a61b00] hover:text-[#a61b00] dark:border-white/20 dark:hover:border-[#ff8f7a] dark:hover:text-[#ff8f7a]"
          >
            View portal
          </Link>
          <PortalSignOut />
        </div>
      </header>

      <section className="mt-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
              Accounts
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase">New & existing</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-black/60 dark:text-white/60">
            Every signup begins as new. Assign the sample branding project to turn an
            account into an existing customer for this first test.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10">
          <table className="min-w-[800px] w-full text-left text-sm">
            <thead className="bg-black/[0.035] text-xs font-bold uppercase tracking-[0.12em] text-black/50 dark:bg-white/[0.05] dark:text-white/50">
              <tr>
                <th className="px-5 py-4">Account</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Created</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts?.map((account) => (
                <tr key={account.id} className="border-t border-black/10 dark:border-white/10">
                  <td className="px-5 py-5">
                    <p className="font-semibold">{account.display_name || "Unnamed account"}</p>
                    <p className="mt-1 text-black/55 dark:text-white/55">{account.email}</p>
                  </td>
                  <td className="px-5 py-5 capitalize">{account.role}</td>
                  <td className="px-5 py-5 text-black/60 dark:text-white/60">
                    {new Date(account.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-5">
                    {account.role === "admin" ? (
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-black/45 dark:text-white/45">
                        Administrator
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <PortalAdminResetButton userId={account.id} />
                        <form action={changeAccountType}>
                          <input type="hidden" name="userId" value={account.id} />
                          <input type="hidden" name="role" value="new" />
                          <button className="rounded-full border border-black/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] transition hover:border-[#a61b00] dark:border-white/20">
                            Mark new
                          </button>
                        </form>
                        <form action={assignSampleProject}>
                          <input type="hidden" name="userId" value={account.id} />
                          <button className="rounded-full bg-black px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#a61b00] dark:bg-[#f6f1e7] dark:text-black dark:hover:bg-[#ff8f7a]">
                            Assign sample project
                          </button>
                        </form>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
            Projects
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase">Status controls</h2>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {projects?.map((project) => {
            const organization = Array.isArray(project.organizations)
              ? project.organizations[0]
              : project.organizations;
            return (
              <form
                key={project.id}
                action={changeProjectStatus}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.6)] dark:border-white/10 dark:bg-white/[0.04]"
              >
                <input type="hidden" name="projectId" value={project.id} />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a61b00] dark:text-[#ff8f7a]">
                  {organization?.name ?? "Unassigned"}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase">{project.title}</h3>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">{project.service_label}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                    Status
                    <select
                      name="status"
                      defaultValue={project.status}
                      className="rounded-xl border border-black/15 bg-transparent px-3 py-3 text-sm font-medium normal-case tracking-normal dark:border-white/20"
                    >
                      {["planning", "in_progress", "review", "complete"].map((status) => (
                        <option key={status} value={status}>{labelForStatus(status)}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                    Progress
                    <input
                      name="progress"
                      type="number"
                      min="0"
                      max="100"
                      defaultValue={project.progress}
                      className="rounded-xl border border-black/15 bg-transparent px-3 py-3 text-sm font-medium normal-case tracking-normal dark:border-white/20"
                    />
                  </label>
                </div>
                <button className="mt-5 rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-[#a61b00] hover:text-[#a61b00] dark:border-white/20 dark:hover:border-[#ff8f7a] dark:hover:text-[#ff8f7a]">
                  Save status
                </button>
              </form>
            );
          })}
        </div>
      </section>
    </main>
  );
}
