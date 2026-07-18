"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "About Lienzo Studio",
    h1: "A bilingual marketing and creative studio built for companies with bigger ambitions.",
    intro:
      "Lienzo Studio helps established and growth-stage companies create demand, improve search visibility, sharpen their position, and build a brand ready for the next stage. We connect strategy, SEO, websites, campaigns, brand identity, and design in one bilingual team.",
    who: "Who we help",
    what: "What we do",
    where: "Where we work",
    whereBody:
      "Lienzo Studio has roots in Durango, Mexico and serves clients remotely. Our primary service areas are the Colorado Front Range and Mexico, and we are open to working with businesses across the United States, Mexico, and LATAM.",
    authorityTitle: "Built for complex offers, considered decisions, and cross-border markets.",
    authorityBody:
      "Business buyers need evidence, clarity, and consistency across a longer journey. We align search, messaging, content, web experience, sales materials, and brand around how decision-makers discover, evaluate, and choose a company in English, Spanish, or both.",
    bilingualCta: "Bilingual Marketing",
    contactCta: "Contact Lienzo",
    audiences: [
      "Established companies",
      "Growth-stage teams",
      "Professional service firms",
      "Technology companies",
      "Architecture and construction firms",
      "Healthcare organizations",
      "Industrial and manufacturing companies",
      "Cross-border brands",
    ],
    services: [
      "Marketing strategy",
      "SEO and search visibility",
      "Strategic websites",
      "Campaigns and content",
      "Brand strategy and identity",
      "Marketing and sales design",
      "Social distribution",
    ],
  },
  es: {
    eyebrow: "Acerca de Lienzo Studio",
    h1: "Un estudio bilingüe de marketing y creatividad para empresas con ambiciones más grandes.",
    intro:
      "Lienzo Studio ayuda a empresas establecidas y en crecimiento a generar demanda, mejorar visibilidad en buscadores, fortalecer su posición y construir una marca lista para la siguiente etapa. Conectamos estrategia, SEO, sitios web, campañas, identidad y diseño en un equipo bilingüe.",
    who: "A quién ayudamos",
    what: "Qué hacemos",
    where: "Dónde trabajamos",
    whereBody:
      "Lienzo Studio tiene raíces en Durango, México y trabaja con clientes de forma remota. Nuestras áreas principales de servicio son el Front Range de Colorado y México, y estamos abiertos a trabajar con negocios en Estados Unidos, México y LATAM.",
    authorityTitle: "Hecho para ofertas complejas, decisiones consideradas y mercados binacionales.",
    authorityBody:
      "Los compradores empresariales necesitan evidencia, claridad y consistencia durante un proceso más largo. Alineamos búsqueda, mensajes, contenido, experiencia web, materiales de ventas y marca alrededor de cómo las personas descubren, evalúan y eligen una empresa, en español, inglés o ambos.",
    bilingualCta: "Marketing Bilingüe",
    contactCta: "Contactar a Lienzo",
    audiences: [
      "Empresas establecidas",
      "Equipos en crecimiento",
      "Firmas de servicios profesionales",
      "Empresas de tecnología",
      "Firmas de arquitectura y construcción",
      "Organizaciones de salud",
      "Empresas industriales y manufactureras",
      "Marcas binacionales",
    ],
    services: [
      "Estrategia de marketing",
      "SEO y visibilidad en buscadores",
      "Sitios web estratégicos",
      "Campañas y contenido",
      "Estrategia e identidad de marca",
      "Diseño para marketing y ventas",
      "Distribución en redes",
    ],
  },
} as const;

export default function AboutPageContent() {
  const { language } = useLanguage();
  const c = copy[language];

  return (
    <>
      <section className="mx-auto max-w-4xl">
        <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
          {c.eyebrow}
        </p>
        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {c.h1}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {c.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.who}</h2>
          <ul className="mt-5 space-y-3">
            {c.audiences.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.what}</h2>
          <ul className="mt-5 space-y-3">
            {c.services.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{c.where}</h2>
          <p className="mt-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
            {c.whereBody}
          </p>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-5xl rounded-[1.5rem] bg-[#254566] p-8 text-white md:p-12">
        <h2 className="font-display text-3xl font-bold">{c.authorityTitle}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
          {c.authorityBody}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TransitionLink
            href="/services/bilingual-marketing-agency"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#254566] transition hover:bg-[#f6f1e7]"
          >
            {c.bilingualCta}
          </TransitionLink>
          <TransitionLink
            href="/contact"
            className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
          >
            {c.contactCta}
          </TransitionLink>
        </div>
      </section>
    </>
  );
}
