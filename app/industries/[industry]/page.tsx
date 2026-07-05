import { notFound, redirect } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";
import {
  consolidatedAudienceIndustryRedirects,
  getIndustryBySlug,
} from "@/lib/industries";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const consolidatedTarget = consolidatedAudienceIndustryRedirects[slug];

  if (consolidatedTarget) redirect(consolidatedTarget);

  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.schemaName,
    description: industry.metaDescription,
    url: `https://lienzo.studio/industries/${industry.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Lienzo Studio",
      url: "https://lienzo.studio",
      areaServed: ["Colorado", "Mexico", "United States", "Latin America"],
    },
    serviceType: industry.title,
  };

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="mx-auto max-w-4xl">
        <TransitionLink
          href="/industries"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 transition hover:text-black/70 dark:text-white/45 dark:hover:text-white/70"
        >
          ← All Industries
        </TransitionLink>
        <p className="mt-8 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          {industry.eyebrow}
        </p>
        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {industry.hero}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {industry.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">What gets in the way</h2>
          <ul className="mt-5 space-y-3">
            {industry.challenges.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">How we help</h2>
          <ul className="mt-5 space-y-3">
            {industry.services.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">Why Lienzo</h2>
          <ul className="mt-5 space-y-3">
            {industry.proofPoints.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-5xl rounded-[1.5rem] bg-[#254566] p-8 text-white md:p-12">
        <h2 className="font-display text-3xl font-bold">Ready to make your business easier to find and trust?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          Tell us about your business, location, audience, and current marketing.
          We will recommend the service mix that makes the clearest difference first.
        </p>
        <TransitionLink
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#254566] transition hover:bg-[#f6f1e7]"
        >
          Contact Lienzo
        </TransitionLink>
      </section>
    </main>
  );
}
