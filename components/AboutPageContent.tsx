"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "About Lienzo Studio",
    h1: "A remote bilingual marketing and design agency for Mexico, the United States, and bilingual communities.",
    intro:
      "Lienzo Studio helps Hispanic-owned, Mexican-owned, Latino-owned, and small businesses build a clearer, more professional presence through branding, graphic design, social media management, content creation, marketing strategy, website design, and local SEO.",
    who: "Who we help",
    what: "What we do",
    where: "Where we work",
    whereBody:
      "Lienzo Studio has roots in Durango, Mexico and serves clients remotely. Our primary service areas are the Colorado Front Range and Mexico, and we are open to working with businesses across the United States, Mexico, and LATAM.",
    authorityTitle: "Built for businesses that move between language, culture, and local trust.",
    authorityBody:
      "We do not treat bilingual marketing as a simple translation task. We build messaging, design, content, websites, and local visibility around the way real customers discover, evaluate, and trust small businesses.",
    bilingualCta: "Bilingual Marketing",
    contactCta: "Contact Lienzo",
    audiences: [
      "Hispanic-owned businesses",
      "Mexican-owned businesses",
      "Latino-owned businesses",
      "Small businesses",
      "Restaurants",
      "Local service businesses",
      "Construction companies",
      "Entrepreneurs",
    ],
    services: [
      "Branding",
      "Graphic design",
      "Social media management",
      "Content creation",
      "Marketing strategy",
      "Website design",
      "Local SEO",
    ],
  },
  es: {
    eyebrow: "Acerca de Lienzo Studio",
    h1: "Una agencia bilingüe remota de marketing y diseño para México, Estados Unidos y comunidades bilingües.",
    intro:
      "Lienzo Studio ayuda a negocios hispanos, mexicanos, latinos y pequeños negocios a construir una presencia más clara y profesional con branding, diseño gráfico, manejo de redes sociales, creación de contenido, estrategia de marketing, diseño web y SEO local.",
    who: "A quién ayudamos",
    what: "Qué hacemos",
    where: "Dónde trabajamos",
    whereBody:
      "Lienzo Studio tiene raíces en Durango, México y trabaja con clientes de forma remota. Nuestras áreas principales de servicio son el Front Range de Colorado y México, y estamos abiertos a trabajar con negocios en Estados Unidos, México y LATAM.",
    authorityTitle: "Hecho para negocios que se mueven entre idioma, cultura y confianza local.",
    authorityBody:
      "No tratamos el marketing bilingüe como una simple traducción. Construimos mensajes, diseño, contenido, sitios web y visibilidad local alrededor de cómo clientes reales descubren, evalúan y confían en pequeños negocios.",
    bilingualCta: "Marketing Bilingüe",
    contactCta: "Contactar a Lienzo",
    audiences: [
      "Negocios hispanos",
      "Negocios mexicanos",
      "Negocios latinos",
      "Pequeños negocios",
      "Restaurantes",
      "Negocios de servicios locales",
      "Empresas de construcción",
      "Emprendedores",
    ],
    services: [
      "Branding",
      "Diseño gráfico",
      "Manejo de redes sociales",
      "Creación de contenido",
      "Estrategia de marketing",
      "Diseño web",
      "SEO local",
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
