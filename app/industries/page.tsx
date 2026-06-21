import TransitionLink from "@/components/TransitionLink";
import { industries } from "@/lib/industries";

export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Help",
    description:
      "Industry-specific marketing, branding, social media, website, and local SEO support from Lienzo Studio.",
    url: "https://lienzo.studio/industries",
    mainEntity: industries.map((industry) => ({
      "@type": "Service",
      name: industry.schemaName,
      url: `https://lienzo.studio/industries/${industry.slug}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Lienzo Studio",
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          Who We Help
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          Marketing for small businesses, local teams, and bilingual brands.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          Lienzo Studio supports restaurants, service businesses, contractors,
          Hispanic-owned businesses, Mexican-owned businesses, and entrepreneurs
          that need a more professional online presence.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2">
        {industries.map((industry) => (
          <article
            key={industry.slug}
            className="rounded-[1.5rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.045)] dark:border-white/10 dark:bg-[#151c24]"
          >
            <p className="text-[10px] font-display font-bold uppercase tracking-[0.28em] text-[#254566] dark:text-[#8fb2d6]">
              {industry.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold">{industry.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
              {industry.intro}
            </p>
            <TransitionLink
              href={`/industries/${industry.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-[#a61b00] transition hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]"
            >
              Explore {industry.title}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </TransitionLink>
          </article>
        ))}
      </section>
    </main>
  );
}
