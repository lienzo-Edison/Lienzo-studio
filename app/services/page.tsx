"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import SpotlightCard from "@/components/SpotlightCard";
import { publicNicheServices } from "@/lib/nicheServices";
import { positionedServices, type ServiceAccent } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const accentStyles: Record<
  ServiceAccent,
  { label: string; link: string; dot: string; spotlight: string }
> = {
  red: {
    label: "text-[#a61b00] dark:text-[#ff8f7a]",
    link: "text-[#a61b00] hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]",
    dot: "bg-[#a61b00] dark:bg-[#ff8f7a]",
    spotlight: "rgba(166, 27, 0, 0.12)",
  },
  blue: {
    label: "text-[#254566] dark:text-[#8fb2d6]",
    link: "text-[#254566] hover:text-[#1a3349] dark:text-[#8fb2d6] dark:hover:text-[#aecde8]",
    dot: "bg-[#254566] dark:bg-[#8fb2d6]",
    spotlight: "rgba(37, 69, 102, 0.12)",
  },
  green: {
    label: "text-[#2b3425] dark:text-[#8db08a]",
    link: "text-[#2b3425] hover:text-[#182016] dark:text-[#8db08a] dark:hover:text-[#b0cfad]",
    dot: "bg-[#2b3425] dark:bg-[#8db08a]",
    spotlight: "rgba(43, 52, 37, 0.12)",
  },
};

const pageCopy = {
  en: {
    eyebrow: "Marketing, SEO & Brand",
    title: "Build demand now. Build a stronger brand for what comes next.",
    subtitle:
      "Lienzo Studio helps established and growth-stage companies strengthen positioning, search visibility, digital experience, campaigns, and brand. Our bilingual team connects marketing performance with high-quality creative across the United States, Mexico, and LATAM.",
    primaryCta: "Find the Right Service",
    secondaryCta: "View Our Work",
    servicesEyebrow: "What We Do",
    servicesTitle: "A connected system for complex growth",
    servicesIntro:
      "Start with the constraint holding growth back or connect several capabilities around one commercial priority. Every scope is shaped around your buyers, sales cycle, market, and internal team.",
    serviceLabel: "Service",
    cardKickers: {
      "social-media-management": "Distribution / authority / consistency",
      "brand-identity": "Position / identity / systems",
      "content-creation": "Campaigns / thought leadership / demand",
      "graphic-design": "Sales / campaigns / communication",
      "website-design": "Positioning / conversion / experience",
      "local-seo": "Search strategy / content / visibility",
    },
    specialtyEyebrow: "Specialty Marketing Pages",
    specialtyTitle: "Focused support for bilingual, Spanish-speaking, cross-border, and Mexico-based companies",
    specialtyIntro:
      "These pages explain our most specific areas of expertise for businesses looking for bilingual marketing, Mexico-focused services, and culturally fluent support.",
    outcomesEyebrow: "What This Work Supports",
    outcomesTitle: "Marketing built around business outcomes",
    outcomesIntro:
      "Strong creative work matters, but it should serve a commercial purpose. We build systems that help the right buyers discover, understand, trust, and choose your company.",
    outcomes: [
      {
        title: "Create qualified visibility",
        body: "Earn attention around the services, expertise, and problems your best-fit buyers are actively researching.",
      },
      {
        title: "Clarify complex value",
        body: "Give buyers, partners, and internal teams a sharper way to understand what makes the company valuable.",
      },
      {
        title: "Support the sales cycle",
        body: "Equip marketing and sales with credible web, campaign, case-study, and presentation assets that work together.",
      },
      {
        title: "Strengthen brand value",
        body: "Build a distinctive, consistent system that increases confidence today and compounds recognition over time.",
      },
    ],
    connectionEyebrow: "One Connected System",
    connectionTitle: "Performance and brand should reinforce each other",
    connectionBody:
      "SEO and campaigns create demand. The website turns that attention into understanding. Content builds authority across a longer buying cycle. Brand identity and design make every interaction credible and memorable. When these capabilities share one strategy, marketing becomes a growth asset rather than a list of activities.",
    processEyebrow: "How We Work",
    processTitle: "Senior attention, clear decisions, practical execution",
    processIntro:
      "You bring the business context. We turn it into a focused direction, a realistic scope, and work your team can actually use.",
    process: [
      {
        title: "Diagnose the growth constraint",
        body: "We learn the offer, market, buyers, sales motion, current performance, and the gap creating the most friction.",
      },
      {
        title: "Set the strategic direction",
        body: "We define positioning, priorities, success signals, channel roles, and the focused scope required to move forward.",
      },
      {
        title: "Build the system",
        body: "Our team develops the search, website, campaign, content, brand, and design components included in the engagement.",
      },
      {
        title: "Activate and improve",
        body: "We launch practical assets, give your team clear guidance, and create a foundation that can be measured and expanded.",
      },
    ],
    audienceEyebrow: "Who We Help",
    audienceTitle: "Built for established and growth-stage companies",
    audienceBody:
      "We focus on professional services, technology, architecture and construction, healthcare, real estate and development, manufacturing, financial and advisory firms, multi-location companies, and cross-border brands with complex value to communicate.",
    marketTitle: "Bilingual marketing support across markets",
    marketBody:
      "Our team works in English and Spanish for businesses serving bilingual communities in Colorado, across the United States, in Mexico, and throughout LATAM. The goal is not simply to translate words. It is to keep the message clear, natural, and useful for the audience receiving it.",
    locationsCta: "Explore Our Service Areas",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Questions about working with Lienzo Studio",
    faqs: [
      {
        question: "Which marketing service should my business start with?",
        answer:
          "The right starting point is the constraint with the largest commercial effect. That may be weak search visibility, unclear positioning, an underperforming website, insufficient authority content, or a brand that no longer matches the company. We diagnose the gap before recommending scope.",
      },
      {
        question: "Can I hire Lienzo Studio for one service?",
        answer:
          "Yes. Services can be scoped individually or combined. You may begin with brand identity, graphic design, content creation, website design, social media management, or local SEO and add related support as the business grows.",
      },
      {
        question: "Do you work with businesses outside Colorado?",
        answer:
          "Yes. Lienzo Studio supports businesses in Colorado and across the United States, Mexico, and LATAM. Many branding, content, design, website, and strategy projects can be completed through a remote bilingual process.",
      },
      {
        question: "Do you provide services in English and Spanish?",
        answer:
          "Yes. Our bilingual team works in English and Spanish and can support brands that communicate with one market or bilingual audiences across the United States, Mexico, and Latin America.",
      },
      {
        question: "What does local SEO support include?",
        answer:
          "Local SEO support can include Google Business Profile optimization, local keyword direction, service page structure, review strategy guidance, and visibility-focused content. The exact scope depends on your current website and local presence.",
      },
    ],
    ctaTitle: "Not sure where to start?",
    ctaBody:
      "Tell us where growth, visibility, or market perception is getting stuck. We’ll identify the highest-leverage place to begin.",
    ctaButton: "Contact Lienzo",
    ctaSecondary: "See Our Portfolio",
  },
  es: {
    eyebrow: "Marketing, SEO y Marca",
    title: "Genera demanda hoy y construye una marca más fuerte para lo que sigue.",
    subtitle:
      "Lienzo Studio ayuda a empresas establecidas y en crecimiento a fortalecer posicionamiento, visibilidad en buscadores, experiencia digital, campañas y marca. Nuestro equipo bilingüe conecta desempeño de marketing con creatividad de alta calidad en Estados Unidos, México y LATAM.",
    primaryCta: "Encontrar el Servicio Ideal",
    secondaryCta: "Ver Nuestro Trabajo",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Un sistema conectado para el crecimiento complejo",
    servicesIntro:
      "Empieza con la limitante que frena el crecimiento o conecta varias capacidades alrededor de una prioridad comercial. Cada alcance se adapta a tus compradores, ciclo de ventas, mercado y equipo interno.",
    serviceLabel: "Servicio",
    cardKickers: {
      "social-media-management": "Distribución / autoridad / consistencia",
      "brand-identity": "Posición / identidad / sistemas",
      "content-creation": "Campañas / liderazgo / demanda",
      "graphic-design": "Ventas / campañas / comunicación",
      "website-design": "Posicionamiento / conversión / experiencia",
      "local-seo": "Estrategia / contenido / visibilidad",
    },
    specialtyEyebrow: "Páginas Especializadas",
    specialtyTitle: "Apoyo para empresas bilingües, hispanohablantes, binacionales y basadas en México",
    specialtyIntro:
      "Estas páginas explican nuestras áreas de experiencia más específicas para negocios que buscan marketing bilingüe, servicios enfocados en México y apoyo culturalmente natural.",
    outcomesEyebrow: "Lo Que Apoya Este Trabajo",
    outcomesTitle: "Marketing construido alrededor de resultados de negocio",
    outcomesIntro:
      "La buena creatividad importa, pero debe servir un propósito comercial. Construimos sistemas que ayudan a los compradores correctos a descubrir, entender, confiar y elegir tu empresa.",
    outcomes: [
      {
        title: "Crear visibilidad calificada",
        body: "Gana atención alrededor de los servicios, experiencia y problemas que investigan tus mejores compradores.",
      },
      {
        title: "Aclarar valor complejo",
        body: "Da a compradores, aliados y equipos internos una forma más clara de entender lo que hace valiosa a la empresa.",
      },
      {
        title: "Apoyar el ciclo de ventas",
        body: "Equipa a marketing y ventas con web, campañas, casos y presentaciones creíbles que trabajan en conjunto.",
      },
      {
        title: "Fortalecer el valor de marca",
        body: "Construye un sistema distintivo y consistente que aumente la confianza hoy y acumule reconocimiento con el tiempo.",
      },
    ],
    connectionEyebrow: "Un Sistema Conectado",
    connectionTitle: "El desempeño y la marca deben reforzarse",
    connectionBody:
      "El SEO y las campañas generan demanda. El sitio convierte atención en entendimiento. El contenido construye autoridad durante una decisión de compra más larga. La identidad y el diseño hacen cada interacción creíble y memorable. Cuando todo comparte una estrategia, el marketing se vuelve un activo de crecimiento.",
    processEyebrow: "Cómo Trabajamos",
    processTitle: "Atención senior, decisiones claras y ejecución práctica",
    processIntro:
      "Tú aportas el contexto del negocio. Nosotros lo convertimos en una dirección enfocada, un alcance realista y trabajo que tu equipo sí puede usar.",
    process: [
      {
        title: "Diagnosticar la limitante",
        body: "Conocemos la oferta, mercado, compradores, proceso de ventas, desempeño actual y la brecha que crea más fricción.",
      },
      {
        title: "Definir la dirección",
        body: "Definimos posicionamiento, prioridades, señales de éxito, rol de canales y el alcance necesario para avanzar.",
      },
      {
        title: "Crear el sistema",
        body: "Desarrollamos los componentes de búsqueda, web, campañas, contenido, marca y diseño incluidos en el proyecto.",
      },
      {
        title: "Activar y mejorar",
        body: "Lanzamos activos prácticos, damos guía clara al equipo y creamos una base que se puede medir y ampliar.",
      },
    ],
    audienceEyebrow: "A Quién Ayudamos",
    audienceTitle: "Hecho para empresas establecidas y en crecimiento",
    audienceBody:
      "Nos enfocamos en servicios profesionales, tecnología, arquitectura y construcción, salud, bienes raíces y desarrollo, manufactura, firmas financieras y consultoras, empresas con múltiples ubicaciones y marcas binacionales con valor complejo que comunicar.",
    marketTitle: "Marketing bilingüe para diferentes mercados",
    marketBody:
      "Nuestro equipo trabaja en inglés y español para negocios que atienden comunidades bilingües en Colorado, Estados Unidos, México y LATAM. La meta no es solamente traducir palabras, sino mantener el mensaje claro, natural y útil para la audiencia que lo recibe.",
    locationsCta: "Explorar Nuestras Ubicaciones",
    faqEyebrow: "Preguntas Frecuentes",
    faqTitle: "Preguntas sobre trabajar con Lienzo Studio",
    faqs: [
      {
        question: "¿Con qué servicio de marketing debe empezar mi negocio?",
        answer:
          "El mejor punto de partida es la limitante con mayor efecto comercial. Puede ser poca visibilidad, posicionamiento confuso, un sitio que no rinde, falta de contenido de autoridad o una marca que ya no representa a la empresa. Diagnosticamos la brecha antes de recomendar alcance.",
      },
      {
        question: "¿Puedo contratar a Lienzo Studio para un solo servicio?",
        answer:
          "Sí. Los servicios pueden contratarse por separado o combinarse. Puedes empezar con identidad de marca, diseño gráfico, creación de contenido, diseño web, manejo de redes o SEO local y agregar apoyo conforme crece el negocio.",
      },
      {
        question: "¿Trabajan con negocios fuera de Colorado?",
        answer:
          "Sí. Lienzo Studio trabaja con negocios en Colorado, otros estados de Estados Unidos, México y LATAM. Muchos proyectos de branding, contenido, diseño, web y estrategia pueden realizarse con un proceso remoto y bilingüe.",
      },
      {
        question: "¿Ofrecen servicios en inglés y español?",
        answer:
          "Sí. Nuestro equipo bilingüe trabaja en inglés y español y puede apoyar a marcas que se comunican con un mercado o con audiencias bilingües en Estados Unidos, México y Latinoamérica.",
      },
      {
        question: "¿Qué incluye el apoyo de SEO local?",
        answer:
          "El SEO local puede incluir optimización de Google Business Profile, dirección de palabras clave locales, estructura de páginas de servicio, guía para reseñas y contenido enfocado en visibilidad. El alcance depende de tu sitio y presencia actual.",
      },
    ],
    ctaTitle: "¿No sabes por dónde empezar?",
    ctaBody:
      "Cuéntanos dónde se está frenando el crecimiento, la visibilidad o la percepción del mercado. Identificaremos el punto de mayor impacto para comenzar.",
    ctaButton: "Contactar a Lienzo",
    ctaSecondary: "Ver Portafolio",
  },
} as const;

export default function ServicesPage() {
  const { language } = useLanguage();
  const c = pageCopy[language];
  const cardKickers: Record<string, string> = c.cardKickers;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="px-6 pb-20 pt-32 md:pb-24 md:pt-40">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]"
          >
            {c.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            {c.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65"
          >
            {c.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href="#service-options"
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c02200]"
            >
              {c.primaryCta}
            </a>
            <TransitionLink
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition hover:border-black/45 dark:border-white/25 dark:hover:border-white/55"
            >
              {c.secondaryCta}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="service-options"
        aria-labelledby="service-options-heading"
        className="scroll-mt-24 px-6 pb-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6]">
              {c.servicesEyebrow}
            </p>
            <h2
              id="service-options-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl"
            >
              {c.servicesTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.servicesIntro}
            </p>
          </motion.header>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
          >
            {positionedServices.map((service) => {
              const accent = accentStyles[service.accent];

              return (
                <motion.article key={service.slug} variants={fadeUp}>
                  <SpotlightCard
                    className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#151c24]"
                    spotlightColor={accent.spotlight}
                  >
                    <div className="relative z-[1] flex h-full flex-col">
                      <p className={`min-h-[2.1rem] text-[10px] font-display font-bold uppercase leading-relaxed tracking-[0.24em] ${accent.label}`}>
                        {cardKickers[service.slug] ?? service.title[language]}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                        {service.title[language]}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
                        {service.description[language]}
                      </p>
                      <ul
                        className="mt-6 space-y-2.5"
                        aria-label={`${service.title[language]} features`}
                      >
                        {service.features[language].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <TransitionLink
                        href={service.href}
                        aria-label={`${service.cta[language]}: ${service.title[language]}`}
                        className={`mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors ${accent.link}`}
                      >
                        {service.cta[language]}
                        <span aria-hidden="true">→</span>
                      </TransitionLink>
                    </div>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
              {c.specialtyEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              {c.specialtyTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.specialtyIntro}
            </p>
          </motion.header>

          <motion.div
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
          >
            {publicNicheServices.map((service) => (
              <motion.div key={service.slug} variants={fadeUp}>
                <TransitionLink
                  href={`/services/${service.slug}`}
                  className="block h-full rounded-2xl border border-black/10 bg-white p-5 transition hover:border-[#a61b00]/40 hover:shadow-sm dark:border-white/10 dark:bg-[#151c24] dark:hover:border-[#ff8f7a]/40"
                >
                  <p className="text-[10px] font-display font-bold uppercase tracking-[0.24em] text-[#254566] dark:text-[#8fb2d6]">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                    {service.answer}
                  </p>
                </TransitionLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-black/[0.025] px-6 py-20 dark:border-white/5 dark:bg-white/[0.025]">
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
              {c.outcomesEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              {c.outcomesTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.outcomesIntro}
            </p>
          </motion.header>

          <motion.div
            className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {c.outcomes.map((outcome) => (
              <motion.article
                key={outcome.title}
                variants={fadeUp}
                className="bg-white p-7 dark:bg-[#151c24]"
              >
                <h3 className="font-display text-xl font-bold">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {outcome.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#2b3425] dark:text-[#8db08a]">
              {c.connectionEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              {c.connectionTitle}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.connectionBody}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {positionedServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                className="flex min-h-28 items-end rounded-2xl border border-black/10 bg-black/[0.025] p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="font-display text-sm font-bold leading-tight">
                  {service.title[language]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#254566] px-6 py-24 text-white dark:bg-[#1b344e]">
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#aecde8]">
              {c.processEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              {c.processTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              {c.processIntro}
            </p>
          </motion.header>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {c.process.map((step) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="border-t border-white/25 pt-6"
              >
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <motion.article
            className="rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_70%)] p-8 md:p-10 dark:border-white/10 dark:bg-[linear-gradient(135deg,#151c24_0%,#1b2631_100%)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
              {c.audienceEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold">{c.audienceTitle}</h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.audienceBody}
            </p>
          </motion.article>

          <motion.article
            className="rounded-[2rem] border border-black/10 bg-white p-8 md:p-10 dark:border-white/10 dark:bg-[#151c24]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold">{c.marketTitle}</h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.marketBody}
            </p>
            <TransitionLink
              href="/locations"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#254566] transition hover:text-[#1a3349] dark:text-[#8fb2d6] dark:hover:text-[#aecde8]"
            >
              {c.locationsCta}
              <span aria-hidden="true">→</span>
            </TransitionLink>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-black/5 bg-black/[0.025] px-6 py-24 dark:border-white/5 dark:bg-white/[0.025]">
        <div className="mx-auto max-w-4xl">
          <motion.header
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
              {c.faqEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">{c.faqTitle}</h2>
          </motion.header>

          <motion.div
            className="mt-12 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
          >
            {c.faqs.map((faq) => (
              <motion.details key={faq.question} variants={fadeUp} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-xl text-[#a61b00] transition group-open:rotate-45 dark:text-[#ff8f7a]"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          className="mx-auto max-w-5xl rounded-[2rem] bg-[#a61b00] px-8 py-12 text-center text-white md:px-12 md:py-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-5xl">
            {c.ctaTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base"
          >
            {c.ctaBody}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#a61b00] transition hover:bg-[#f6f1e7]"
            >
              {c.ctaButton}
            </TransitionLink>
            <TransitionLink
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
            >
              {c.ctaSecondary}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
