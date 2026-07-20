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
    <main className="min-h-screen bg-[#e6e1d5] text-[#0f1418]">
      <div className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <header className="flex flex-col gap-6 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
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
              className="rounded-full bg-[#0f1418] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f6f1e7] transition hover:bg-black/80"
            >
              Administration
            </Link>
          )}
          <PortalSignOut />
        </div>
      </header>

      {!hasProjects ? (
        <section className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-[#0f1418] p-8 text-[#f6f1e7] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f6f1e7]/55">
              Your account is ready
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] sm:text-5xl">
              Let&apos;s find the right next move.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#f6f1e7]/70">
              Explore Lienzo&apos;s services or speak directly with the team about what you are building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-[#f6f1e7] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0f1418] transition hover:bg-[#e6e1d5]"
              >
                View catalog
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#f6f1e7]/35 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition hover:border-[#f6f1e7]"
              >
                Contact Lienzo
              </Link>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-black/15 bg-[#f6f1e7]/55 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
              What happens next
            </p>
            <ol className="mt-6 grid gap-5 text-sm leading-6 text-black/65">
              <li><span className="font-bold text-black">01.</span> Tell us what you need.</li>
              <li><span className="font-bold text-black">02.</span> We match your account to your Lienzo work.</li>
              <li><span className="font-bold text-black">03.</span> Project status appears here once work begins.</li>
            </ol>
          </aside>
        </section>
      ) : (
        <section className="mt-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                Active work
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase">Your projects</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://billing.stripe.com/p/login/7sYdRa7Um9fObOrgSHfnO00"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-black hover:bg-black/[0.04]"
              >
                Billing & invoices ↗
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-[#0f1418] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f6f1e7] transition hover:bg-black/80"
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
                <article key={project.id} className="rounded-[2rem] border border-black/15 bg-[#f6f1e7] p-7 shadow-[0_20px_60px_-52px_rgba(0,0,0,0.38)] sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                        {organization?.name ?? "Lienzo client"}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-bold uppercase">{project.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-black/60">{project.service_label}</p>
                    </div>
                    <span className="rounded-full border border-black/10 bg-black/[0.045] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/70">
                      {statusLabel(project.status)}
                    </span>
                  </div>
                  <p className="mt-6 max-w-xl text-sm leading-6 text-black/65">{project.summary}</p>
                  <div className="mt-7">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.13em]">
                      <span>Project progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                      <div className="h-full rounded-full bg-[#0f1418]" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
      </div>
    </main>
  );
}
