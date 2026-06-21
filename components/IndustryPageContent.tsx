"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocalizedIndustry, type IndustryDefinition } from "@/lib/industries";

const copy = {
  en: {
    back: "← All Industries",
    challenges: "What gets in the way",
    services: "How we help",
    proof: "Why Lienzo",
    ctaTitle: "Ready to make your business easier to find and trust?",
    ctaBody:
      "Tell us about your business, location, audience, and current marketing. We will recommend the service mix that makes the clearest difference first.",
    cta: "Contact Lienzo",
  },
  es: {
    back: "← Todas las Industrias",
    challenges: "Qué lo complica",
    services: "Cómo ayudamos",
    proof: "Por qué Lienzo",
    ctaTitle: "¿Listo para hacer que tu negocio sea más fácil de encontrar y confiar?",
    ctaBody:
      "Cuéntanos sobre tu negocio, ubicación, audiencia y marketing actual. Te recomendaremos la mezcla de servicios que puede hacer la diferencia más clara primero.",
    cta: "Contactar a Lienzo",
  },
} as const;

export default function IndustryPageContent({
  industry,
}: {
  industry: IndustryDefinition;
}) {
  const { language } = useLanguage();
  const localized = getLocalizedIndustry(industry, language);
  const c = copy[language];

  return (
    <>
      <section className="mx-auto max-w-4xl">
        <TransitionLink
          href="/industries"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 transition hover:text-black/70 dark:text-white/45 dark:hover:text-white/70"
        >
          {c.back}
        </TransitionLink>
        <p className="mt-8 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          {localized.eyebrow}
        </p>
        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {localized.hero}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {localized.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.challenges}</h2>
          <ul className="mt-5 space-y-3">
            {localized.challenges.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.services}</h2>
          <ul className="mt-5 space-y-3">
            {localized.services.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.proof}</h2>
          <ul className="mt-5 space-y-3">
            {localized.proofPoints.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-5xl rounded-[1.5rem] bg-[#254566] p-8 text-white md:p-12">
        <h2 className="font-display text-3xl font-bold">{c.ctaTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {c.ctaBody}
        </p>
        <TransitionLink
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#254566] transition hover:bg-[#f6f1e7]"
        >
          {c.cta}
        </TransitionLink>
      </section>
    </>
  );
}
