import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import PortalSignOut from "@/components/PortalSignOut";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Client portal",
  robots: { index: false, follow: false },
};

function statusLabel(status: string) {
  return status.replaceAll("_", " ");
}

export default async function PortalPage() {
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (!userId) redirect("/portal/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name, email, role")
    .eq("id", userId)
    .single();
  if (!profile) redirect("/portal/login");

  const { data: projects } = await supabase
    .from("projects")
    .select("id, title, service_label, summary, status, progress, updated_at, organizations(name)")
    .order("updated_at", { ascending: false });
  const hasProjects = Boolean(projects?.length);
  const firstName = profile.display_name?.split(" ")[0] || "there";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <header className="flex flex-col gap-6 border-b border-black/10 pb-8 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
            Lienzo client portal
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl">
            Hello, {firstName}.
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {profile.role === "admin" && (
            <Link
              href="/portal/admin"
              className="rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#a61b00] dark:bg-[#f6f1e7] dark:text-black dark:hover:bg-[#ff8f7a]"
            >
              Administration
            </Link>
          )}
          <PortalSignOut />
        </div>
      </header>

      {!hasProjects ? (
        <section className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-black p-8 text-white dark:bg-[#f6f1e7] dark:text-black sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55 dark:text-black/50">
              Your account is ready
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] sm:text-5xl">
              Let&apos;s find the right next move.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 dark:text-black/65">
              Explore Lienzo&apos;s services or speak directly with the team about what you are building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#e6e1d5] dark:bg-black dark:text-white dark:hover:bg-[#a61b00]"
              >
                View catalog
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:border-white dark:border-black/25 dark:hover:border-black"
              >
                Contact Lienzo
              </Link>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-black/10 p-8 dark:border-white/10 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
              What happens next
            </p>
            <ol className="mt-6 grid gap-5 text-sm leading-6 text-black/65 dark:text-white/65">
              <li><span className="font-bold text-black dark:text-white">01.</span> Tell us what you need.</li>
              <li><span className="font-bold text-black dark:text-white">02.</span> We match your account to your Lienzo work.</li>
              <li><span className="font-bold text-black dark:text-white">03.</span> Project status appears here once work begins.</li>
            </ol>
          </aside>
        </section>
      ) : (
        <section className="mt-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
                Active work
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase">Your projects</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://billing.stripe.com/p/login/7sYdRa7Um9fObOrgSHfnO00"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#a61b00] hover:text-[#a61b00] dark:border-white/20 dark:hover:border-[#ff8f7a] dark:hover:text-[#ff8f7a]"
              >
                Billing & invoices ↗
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-black px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#a61b00] dark:bg-[#f6f1e7] dark:text-black dark:hover:bg-[#ff8f7a]"
              >
                Contact the team
              </Link>
            </div>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {projects?.map((project) => {
              const organization = Array.isArray(project.organizations)
                ? project.organizations[0]
                : project.organizations;
              return (
                <article key={project.id} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.6)] dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a61b00] dark:text-[#ff8f7a]">
                        {organization?.name ?? "Lienzo client"}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-bold uppercase">{project.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-black/60 dark:text-white/60">{project.service_label}</p>
                    </div>
                    <span className="rounded-full bg-[#a61b00]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a1804] dark:bg-[#ff8f7a]/15 dark:text-[#ffb9ad]">
                      {statusLabel(project.status)}
                    </span>
                  </div>
                  <p className="mt-6 max-w-xl text-sm leading-6 text-black/65 dark:text-white/65">{project.summary}</p>
                  <div className="mt-7">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.13em]">
                      <span>Project progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <div className="h-full rounded-full bg-[#a61b00] dark:bg-[#ff8f7a]" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
