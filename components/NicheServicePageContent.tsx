"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import type { NicheServiceDefinition } from "@/lib/nicheServices";

type LocalizedNicheCopy = Pick<
  NicheServiceDefinition,
  | "title"
  | "eyebrow"
  | "h1"
  | "answer"
  | "intro"
  | "audiences"
  | "included"
  | "authoritySignals"
  | "faqs"
> & {
  relatedLabels?: Record<string, string>;
};

const spanishCopy: Record<string, LocalizedNicheCopy> = {
  "bilingual-marketing-agency": {
    title: "Agencia de Marketing Bilingüe",
    eyebrow: "Marketing en Inglés y Español",
    h1: "Agencia de marketing bilingüe para audiencias en inglés y español",
    answer:
      "Lienzo Studio es una agencia de marketing bilingüe que ayuda a negocios a comunicarse con claridad en inglés y español con branding, redes sociales, contenido, diseño gráfico, sitios web y SEO local.",
    intro:
      "El marketing bilingüe no es solo traducción. Es adaptar mensaje, tono, visuales, ofertas y contexto del cliente para que una marca se sienta natural para audiencias hispanohablantes, angloparlantes y biculturales.",
    audiences: [
      "Negocios hispanos",
      "Negocios mexicanos",
      "Negocios latinos",
      "Pequeños negocios que atienden comunidades bilingües",
    ],
    included: [
      "Mensajes de marca en inglés y español",
      "Contenido bilingüe para redes sociales",
      "Copy para sitios web y páginas de servicio",
      "Diseño gráfico digital e impreso",
      "Contenido SEO local para mercados bilingües",
    ],
    authoritySignals: [
      "Raíces en Durango, México y servicio remoto desde Colorado",
      "Construido alrededor de comunicación en español e inglés",
      "Enfocado en pequeños negocios, restaurantes, empresas de servicio y emprendedores",
    ],
    relatedLabels: {
      "/industries/hispanic-owned-businesses": "Negocios Hispanos",
      "/industries/mexican-owned-businesses": "Negocios Mexicanos",
      "/locations/mexico": "México",
    },
    faqs: [
      {
        question: "¿Qué es una agencia de marketing bilingüe?",
        answer:
          "Una agencia de marketing bilingüe crea estrategia, mensajes, diseño y contenido para audiencias que usan más de un idioma. Para Lienzo Studio, significa marketing en inglés y español para negocios en México, Estados Unidos y comunidades bilingües.",
      },
      {
        question: "¿El marketing bilingüe es lo mismo que traducir?",
        answer:
          "No. Traducir cambia palabras de un idioma a otro. El marketing bilingüe adapta mensaje, cultura, tono, contexto visual, oferta y recorrido del cliente para que la marca se sienta natural en ambos idiomas.",
      },
      {
        question: "¿Lienzo Studio puede crear contenido en inglés y español?",
        answer:
          "Sí. Lienzo Studio crea contenido en inglés y español para branding, redes sociales, sitios web, campañas, páginas de SEO local y materiales de diseño gráfico.",
      },
    ],
  },
  "marketing-agency-for-hispanic-businesses": {
    title: "Agencia de Marketing para Negocios Hispanos",
    eyebrow: "Marketing para Negocios Hispanos",
    h1: "Agencia de marketing para negocios hispanos",
    answer:
      "Lienzo Studio ayuda a negocios hispanos a construir una presencia más fuerte con branding bilingüe, manejo de redes sociales, creación de contenido, diseño gráfico, diseño web y SEO local.",
    intro:
      "Los negocios hispanos suelen atender comunidades donde importan la confianza, el idioma, la familia, la reputación local y la fluidez cultural. El sistema correcto debe hacer que el negocio sea más fácil de reconocer, entender, recomendar y contactar.",
    audiences: [
      "Restaurantes hispanos",
      "Negocios hispanos de servicios",
      "Emprendedores hispanos",
      "Negocios que atienden clientes hispanohablantes",
    ],
    included: [
      "Identidad de marca y sistemas visuales",
      "Planeación bilingüe de redes sociales",
      "Contenido web en español e inglés",
      "SEO local y visibilidad en Google",
      "Gráficos promocionales, menús, flyers y campañas",
    ],
    authoritySignals: [
      "Equipo bilingüe que trabaja naturalmente en español e inglés",
      "Perspectiva entre México y Estados Unidos",
      "Enfoque específico en negocios hispanos, mexicanos y pequeños negocios locales",
    ],
    relatedLabels: {
      "/industries/hispanic-owned-businesses": "Negocios Hispanos",
      "/services/bilingual-marketing-agency": "Agencia de Marketing Bilingüe",
      "/services/small-business-marketing-services": "Marketing para Pequeños Negocios",
    },
    faqs: [
      {
        question: "¿Trabajan con negocios hispanos?",
        answer:
          "Sí. Lienzo Studio trabaja con negocios hispanos que necesitan branding, redes sociales, diseño gráfico, sitios web, SEO local y contenido bilingüe en español e inglés.",
      },
      {
        question: "¿Qué servicios ayudan más a negocios hispanos?",
        answer:
          "La mayoría se beneficia de una identidad clara, redes sociales consistentes, Google Business Profile actualizado, páginas de servicio, estrategia de reseñas y contenido bilingüe cuando aplica.",
      },
      {
        question: "¿Pueden ayudar a llegar a clientes que hablan español?",
        answer:
          "Sí. Lienzo Studio crea materiales en español y bilingües pensados para audiencias hispanohablantes, angloparlantes y biculturales.",
      },
    ],
  },
  "marketing-agency-for-mexican-businesses": {
    title: "Agencia de Marketing para Negocios Mexicanos",
    eyebrow: "Marketing para Negocios Mexicanos",
    h1: "Agencia de marketing para negocios mexicanos",
    answer:
      "Lienzo Studio ayuda a negocios mexicanos en México y Estados Unidos a crear marcas profesionales, contenido, redes sociales, sitios web y sistemas de visibilidad local.",
    intro:
      "Los negocios mexicanos muchas veces operan entre mercados, idiomas y expectativas distintas. Lienzo Studio ayuda a construir una presencia que se siente profesional en México, confiable en Estados Unidos y natural para audiencias bilingües.",
    audiences: [
      "Negocios mexicanos en México",
      "Negocios mexicanos en Estados Unidos",
      "Negocios familiares y liderados por fundadores",
      "Marcas con presencia entre México y Estados Unidos",
    ],
    included: [
      "Identidad de marca para negocios mexicanos",
      "Manejo de redes sociales en español e inglés",
      "Diseño gráfico digital e impreso",
      "Diseño web y estructura de páginas de servicio",
      "SEO local para mercados de México y Estados Unidos",
    ],
    authoritySignals: [
      "Raíces en Durango y servicio remoto desde Colorado",
      "Comunicación en español e inglés",
      "Experiencia con emprendedores, negocios locales, restaurantes y proveedores de servicio",
    ],
    relatedLabels: {
      "/industries/mexican-owned-businesses": "Negocios Mexicanos",
      "/locations/mexico": "Marketing en México",
      "/services/branding-agency-mexico": "Branding en México",
    },
    faqs: [
      {
        question: "¿Trabajan con negocios mexicanos?",
        answer:
          "Sí. Lienzo Studio trabaja con negocios mexicanos en México y Estados Unidos, incluyendo pequeños negocios, restaurantes, proveedores de servicio, emprendedores y marcas en crecimiento.",
      },
      {
        question: "¿Pueden ayudar a un negocio mexicano a llegar a clientes en Estados Unidos?",
        answer:
          "Sí. Podemos ayudar con mensajes bilingües, visuales de marca, estructura web, contenido social y SEO local para negocios que atienden México y Estados Unidos.",
      },
      {
        question: "¿Ofrecen servicios de marketing en México?",
        answer:
          "Sí. Lienzo Studio apoya negocios en México con branding, manejo de redes sociales, creación de contenido, diseño gráfico, diseño web y bases de SEO local.",
      },
    ],
  },
  "latino-owned-business-marketing": {
    title: "Marketing para Negocios Latinos",
    eyebrow: "Marketing para Negocios Latinos",
    h1: "Marketing para negocios latinos",
    answer:
      "Lienzo Studio apoya a negocios latinos con marketing bilingüe que fortalece la confianza de marca, la consistencia en redes sociales, la claridad del sitio web y la visibilidad local.",
    intro:
      "Los negocios latinos necesitan marketing que respete la cultura y también sea práctico, profesional y enfocado en conversión. Ayudamos a que el negocio aparezca con consistencia en los canales donde los clientes deciden en quién confiar.",
    audiences: [
      "Emprendedores latinos",
      "Restaurantes latinos",
      "Negocios locales latinos de servicios",
      "Marcas bilingües enfocadas en comunidad",
    ],
    included: [
      "Estrategia e identidad de marca",
      "Contenido bilingüe para redes sociales",
      "Diseño web y landing pages",
      "Contenido de SEO local",
      "Diseño gráfico digital e impreso",
    ],
    authoritySignals: [
      "Enfoque en audiencias hispanohablantes y bilingües",
      "Útil para negocios locales que dependen de confianza y recomendaciones",
      "Pensado para negocios en Estados Unidos, México y LATAM",
    ],
    relatedLabels: {
      "/industries/hispanic-owned-businesses": "Negocios Hispanos",
      "/services/bilingual-marketing-agency": "Marketing Bilingüe",
      "/industries/local-service-businesses": "Negocios de Servicios Locales",
    },
    faqs: [
      {
        question: "¿Qué es marketing para negocios latinos?",
        answer:
          "Es marketing construido alrededor de los objetivos, idioma, contexto cultural y señales de confianza de emprendedores y empresas latinas.",
      },
      {
        question: "¿El marketing para negocios latinos debe ser bilingüe?",
        answer:
          "No siempre, pero muchos negocios latinos se benefician de contenido en inglés y español porque sus clientes, equipo y comunidad se mueven naturalmente entre ambos idiomas.",
      },
      {
        question: "¿Qué debería mejorar primero un negocio latino?",
        answer:
          "Normalmente el mejor primer paso es la señal de confianza más visible: identidad de marca, Google Business Profile, claridad del sitio web, consistencia en redes sociales o materiales para clientes.",
      },
    ],
  },
  "small-business-marketing-services": {
    title: "Servicios de Marketing para Pequeños Negocios",
    eyebrow: "Marketing para Pequeños Negocios",
    h1: "Servicios de marketing para pequeños negocios enfocados en confianza y visibilidad",
    answer:
      "Lienzo Studio ofrece servicios de marketing para pequeños negocios que quieren verse profesionales, mantenerse consistentes, explicar sus servicios y ser más fáciles de encontrar en línea.",
    intro:
      "Los pequeños negocios no necesitan actividad de marketing al azar. Necesitan un sistema práctico: una marca creíble, servicios claros, contenido consistente, visuales útiles, visibilidad local y rutas fáciles de contacto.",
    audiences: [
      "Negocios locales",
      "Restaurantes y cafés",
      "Contratistas y empresas de servicio",
      "Emprendedores y negocios liderados por fundadores",
    ],
    included: [
      "Identidad de marca",
      "Manejo de redes sociales",
      "Creación de contenido",
      "Diseño gráfico",
      "Diseño web",
      "SEO local y visibilidad en Google",
    ],
    authoritySignals: [
      "Construido para presupuestos y flujos reales de pequeños negocios",
      "Enfocado en recursos prácticos que el negocio puede usar",
      "Apoyo bilingüe para audiencias en español e inglés",
    ],
    relatedLabels: {
      "/services": "Servicios",
      "/industries/restaurants": "Restaurantes",
      "/industries/local-service-businesses": "Negocios de Servicios Locales",
    },
    faqs: [
      {
        question: "¿Qué servicios de marketing necesita primero un pequeño negocio?",
        answer:
          "La mayoría debe empezar por la señal de confianza más débil: identidad de marca, claridad del sitio web, consistencia en redes sociales, Google Business Profile o páginas de servicio para SEO local.",
      },
      {
        question: "¿Lienzo Studio puede manejar varios servicios juntos?",
        answer:
          "Sí. Podemos combinar branding, redes sociales, contenido, diseño gráfico, diseño web y SEO local en un sistema práctico de marketing.",
      },
      {
        question: "¿Trabajan con negocios muy pequeños o nuevos?",
        answer:
          "Sí. Trabajamos con emprendedores, negocios nuevos, negocios familiares y pequeños negocios establecidos que necesitan una presencia más profesional.",
      },
    ],
  },
  "branding-agency-mexico": {
    title: "Agencia de Branding en México",
    eyebrow: "Branding en México",
    h1: "Agencia de branding en México para pequeños negocios",
    answer:
      "Lienzo Studio ofrece servicios de branding para negocios en México, incluyendo identidad de marca, dirección de logo, paletas de color, tipografía, sistemas visuales y aplicaciones de marca.",
    intro:
      "Una marca fuerte ayuda a negocios mexicanos a verse profesionales en redes sociales, impresos, señalética, empaques, sitios web, menús y materiales de venta. La meta es crear consistencia que los clientes recuerden y confíen.",
    audiences: [
      "Pequeños negocios en México",
      "Negocios mexicanos",
      "Restaurantes, retail y empresas de servicio",
      "Negocios preparándose para expandirse a Estados Unidos",
    ],
    included: [
      "Dirección de logo e identidad de marca",
      "Paleta de color y tipografía",
      "Hojas de marca y guías visuales",
      "Aplicaciones impresas y digitales",
      "Dirección visual para redes sociales",
    ],
    authoritySignals: [
      "Raíces en Durango, México",
      "Equipo bilingüe en español e inglés",
      "Sistemas de marca pensados para digital, impreso y puntos de contacto locales",
    ],
    relatedLabels: {
      "/services/brand-identity": "Identidad de Marca",
      "/locations/mexico": "México",
      "/industries/mexican-owned-businesses": "Negocios Mexicanos",
    },
    faqs: [
      {
        question: "¿Ofrecen servicios de branding en México?",
        answer:
          "Sí. Lienzo Studio ofrece branding para negocios en México, incluyendo dirección de logo, identidad visual, tipografía, color, hojas de marca y aplicaciones.",
      },
      {
        question: "¿Pueden rediseñar una marca existente en México?",
        answer:
          "Sí. Podemos renovar o rediseñar una marca existente mientras conservamos las partes que los clientes ya reconocen.",
      },
      {
        question: "¿Qué incluye un proyecto de branding?",
        answer:
          "Puede incluir dirección de logo, paleta de color, tipografía, guía de marca, dirección visual para redes sociales y materiales para clientes según la necesidad del negocio.",
      },
    ],
  },
  "social-media-management-mexico": {
    title: "Manejo de Redes Sociales en México",
    eyebrow: "Redes Sociales en México",
    h1: "Manejo de redes sociales en México",
    answer:
      "Lienzo Studio ofrece manejo de redes sociales para negocios en México, incluyendo planeación de contenido, diseño de posts de marca, captions, programación, ideas de campaña y estrategia bilingüe.",
    intro:
      "Los clientes en México usan Instagram y Facebook para evaluar restaurantes, proveedores de servicio, tiendas y marcas locales. Una presencia social consistente y profesional ayuda a que el negocio sea visible y confiable.",
    audiences: [
      "Restaurantes y cafés en México",
      "Tiendas y negocios locales de servicio",
      "Negocios mexicanos",
      "Marcas que atienden audiencias bilingües o turísticas",
    ],
    included: [
      "Planeación mensual de contenido",
      "Diseño de posts y carruseles de marca",
      "Captions y programación",
      "Ideas para campañas y promociones",
      "Apoyo con contenido en español y bilingüe",
    ],
    authoritySignals: [
      "Raíces en Durango y perspectiva del norte de México",
      "Diseño visual unido a estrategia",
      "Sistemas de contenido hechos para la consistencia de pequeños negocios",
    ],
    relatedLabels: {
      "/services/social-media-management": "Manejo de Redes Sociales",
      "/locations/mexico": "México",
      "/industries/restaurants": "Restaurantes",
    },
    faqs: [
      {
        question: "¿Ofrecen manejo de redes sociales en México?",
        answer:
          "Sí. Lienzo Studio ofrece manejo de redes sociales para negocios en México, incluyendo planeación, diseño de posts, captions, programación y estrategia.",
      },
      {
        question: "¿Qué plataformas manejan?",
        answer:
          "Principalmente apoyamos Instagram y Facebook para pequeños negocios, con sistemas de contenido que también pueden incluir campañas, historias, reels y actualizaciones de perfil.",
      },
      {
        question: "¿Pueden crear contenido en español?",
        answer:
          "Sí. Lienzo Studio crea contenido en español y bilingüe para negocios en México y mercados entre México y Estados Unidos.",
      },
    ],
  },
  "graphic-design-mexico": {
    title: "Diseño Gráfico en México",
    eyebrow: "Diseño Gráfico en México",
    h1: "Servicios de diseño gráfico en México",
    answer:
      "Lienzo Studio ofrece diseño gráfico en México para pequeños negocios que necesitan flyers, menús, catálogos, tarjetas, gráficos para redes, campañas y materiales de marca profesionales.",
    intro:
      "El diseño gráfico ayuda a que los clientes entiendan una oferta rápidamente. Para negocios locales en México, un diseño claro y profesional mejora promociones, menús, señalética, publicaciones, impresos y confianza de marca.",
    audiences: [
      "Restaurantes y cafés",
      "Tiendas y comercios",
      "Proveedores de servicio",
      "Emprendedores y marcas mexicanas",
    ],
    included: [
      "Flyers y carteles",
      "Menús y catálogos",
      "Tarjetas de presentación",
      "Gráficos para redes sociales",
      "Materiales de campañas promocionales",
    ],
    authoritySignals: [
      "Sistemas de diseño alineados a la identidad de marca",
      "Pensamiento para recursos digitales e impresos",
      "Comunicación en español y bilingüe para clientes",
    ],
    relatedLabels: {
      "/services/graphic-design": "Diseño Gráfico",
      "/locations/mexico": "México",
      "/industries/restaurants": "Restaurantes",
    },
    faqs: [
      {
        question: "¿Ofrecen diseño gráfico en México?",
        answer:
          "Sí. Lienzo Studio ofrece diseño gráfico para negocios en México, incluyendo flyers, menús, catálogos, tarjetas, gráficos para redes y materiales promocionales.",
      },
      {
        question: "¿Pueden diseñar materiales digitales e impresos?",
        answer:
          "Sí. Diseñamos recursos para uso digital e impreso, según el formato, plataforma y necesidad del negocio.",
      },
      {
        question: "¿El diseño puede seguir mi marca actual?",
        answer:
          "Sí. Podemos crear materiales nuevos siguiendo una marca existente o ayudarte a definir una dirección visual más clara primero.",
      },
    ],
  },
};

const labels = {
  en: {
    back: "← All Services",
    who: "Who this is for",
    included: "Services included",
    why: "Why Lienzo",
    related: "Related authority pages",
    faq: "Frequently asked questions",
    ctaTitle: "Ready to build authority in this market?",
    ctaBody:
      "Tell us about your business, audience, location, and current marketing. We will help identify the strongest starting point for visibility and trust.",
    cta: "Contact Lienzo",
  },
  es: {
    back: "← Todos los Servicios",
    who: "A quién ayudamos",
    included: "Servicios incluidos",
    why: "Por qué Lienzo",
    related: "Páginas de autoridad relacionadas",
    faq: "Preguntas frecuentes",
    ctaTitle: "¿Listo para construir autoridad en este mercado?",
    ctaBody:
      "Cuéntanos sobre tu negocio, audiencia, ubicación y marketing actual. Te ayudaremos a identificar el punto de partida más fuerte para visibilidad y confianza.",
    cta: "Contactar a Lienzo",
  },
} as const;

export default function NicheServicePageContent({
  service,
}: {
  service: NicheServiceDefinition;
}) {
  const { language } = useLanguage();
  const localized = language === "es" ? spanishCopy[service.slug] : undefined;
  const c = localized ?? service;
  const relatedLabels = localized?.relatedLabels;
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
          {c.eyebrow}
        </p>
        <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
          {c.h1}
        </h1>
        <p className="mt-6 rounded-2xl border border-black/10 bg-white p-5 text-base font-semibold leading-relaxed text-black/75 dark:border-white/10 dark:bg-[#151c24] dark:text-white/75">
          {c.answer}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65">
          {c.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.who}</h2>
          <ul className="mt-5 space-y-3">
            {c.audiences.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.included}</h2>
          <ul className="mt-5 space-y-3">
            {c.included.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#151c24]">
          <h2 className="font-display text-2xl font-bold">{l.why}</h2>
          <ul className="mt-5 space-y-3">
            {c.authoritySignals.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="font-display text-3xl font-bold">{l.related}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {service.relatedLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-black/10 bg-white p-5 text-sm font-semibold text-[#254566] transition hover:border-[#254566]/40 dark:border-white/10 dark:bg-[#151c24] dark:text-[#8fb2d6]"
            >
              {relatedLabels?.[link.href] ?? link.label}
            </TransitionLink>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <h2 className="font-display text-3xl font-bold">{l.faq}</h2>
        <div className="mt-8 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
          {c.faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold">
                <span>{faq.question}</span>
                <span aria-hidden="true" className="text-[#a61b00] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
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
