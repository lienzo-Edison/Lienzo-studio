"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import { publicIndustries, getLocalizedIndustry } from "@/lib/industries";

const copy = {
  en: {
    eyebrow: "Who We Help",
    h1: "Marketing for small businesses, local teams, and bilingual brands.",
    intro:
      "Lienzo Studio supports restaurants, service businesses, contractors, Hispanic-owned businesses, Mexican-owned businesses, Latino-owned businesses, and entrepreneurs that need a more professional online presence.",
    explore: "Explore",
  },
  es: {
    eyebrow: "A Quién Ayudamos",
    h1: "Marketing para pequeños negocios, equipos locales y marcas bilingües.",
    intro:
      "Lienzo Studio apoya a restaurantes, negocios de servicios, contratistas, negocios hispanos, negocios mexicanos, negocios latinos y emprendedores que necesitan una presencia digital más profesional.",
    explore: "Explorar",
  },
} as const;

export default function IndustriesPageContent() {
  const { language } = useLanguage();
  const c = copy[language];

  return (
    <>
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          {c.eyebrow}
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {c.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {c.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2">
        {publicIndustries.map((industry) => {
          const localized = getLocalizedIndustry(industry, language);

          return (
            <article
              key={industry.slug}
              className="rounded-[1.5rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.045)] dark:border-white/10 dark:bg-[#151c24]"
            >
              <p className="text-[10px] font-display font-bold uppercase tracking-[0.28em] text-[#254566] dark:text-[#8fb2d6]">
                {localized.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold">{localized.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
                {localized.intro}
              </p>
              <TransitionLink
                href={`/industries/${industry.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-[#a61b00] transition hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]"
              >
                {c.explore} {localized.title}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </TransitionLink>
            </article>
          );
        })}
      </section>
    </>
  );
}
