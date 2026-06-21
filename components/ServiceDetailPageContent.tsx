"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import type { ServiceDefinition } from "@/lib/services";

export type LocalizedServiceDetail = {
  headline: string;
  summary: string;
  bestFor: string[];
  deliverables: string[];
  outcomes: string[];
};

const labels = {
  en: {
    back: "← All Services",
    bestFor: "Best for",
    create: "What we create",
    outcomes: "Expected outcomes",
    ctaTitle: "Need this service in English and Spanish?",
    ctaBody:
      "Lienzo Studio works remotely with businesses in Colorado, Mexico, the United States, and LATAM. We can help shape a practical scope around your audience, market, and next growth priority.",
    cta: "Request a proposal",
  },
  es: {
    back: "← Todos los Servicios",
    bestFor: "Ideal para",
    create: "Qué creamos",
    outcomes: "Resultados esperados",
    ctaTitle: "¿Necesitas este servicio en español e inglés?",
    ctaBody:
      "Lienzo Studio trabaja de forma remota con negocios en Colorado, México, Estados Unidos y LATAM. Podemos ayudarte a definir un alcance práctico según tu audiencia, mercado y siguiente prioridad de crecimiento.",
    cta: "Solicitar propuesta",
  },
} as const;

export default function ServiceDetailPageContent({
  service,
  details,
}: {
  service: ServiceDefinition;
  details: Record<"en" | "es", LocalizedServiceDetail>;
}) {
  const { language } = useLanguage();
  const detail = details[language];
  const l = labels[language];

  return (
    <>
      <section className="mx-auto max-w-4xl">
        <TransitionLink
          href="/services"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 transition hover:text-black/70 dark:text-white/45 dark:hover:text-white/70"
        >
          {l.back}
        </TransitionLink>
        <p className="mt-8 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          {service.title[language]}
        </p>
        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {detail.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {detail.summary}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.bestFor}</h2>
          <ul className="mt-5 space-y-3">
            {detail.bestFor.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.create}</h2>
          <ul className="mt-5 space-y-3">
            {detail.deliverables.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.outcomes}</h2>
          <ul className="mt-5 space-y-3">
            {detail.outcomes.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-5xl rounded-[1.5rem] bg-[#a61b00] p-8 text-white md:p-12">
        <h2 className="font-display text-3xl font-bold">{l.ctaTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
          {l.ctaBody}
        </p>
        <TransitionLink
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#a61b00] transition hover:bg-[#f6f1e7]"
        >
          {l.cta}
        </TransitionLink>
      </section>
    </>
  );
}
