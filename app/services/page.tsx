"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import SpotlightCard from "@/components/SpotlightCard";
import { services, type ServiceAccent } from "@/lib/services";

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
    eyebrow: "Creative & Digital Marketing Services",
    title: "Marketing services that make your business easier to find and trust.",
    subtitle:
      "Lienzo Studio helps small businesses build a professional, consistent online presence through social media management, brand identity, content creation, graphic design, website design, and local SEO. Our bilingual team supports businesses across Colorado, Mexico, and LATAM.",
    primaryCta: "Find the Right Service",
    secondaryCta: "View Our Work",
    servicesEyebrow: "What We Do",
    servicesTitle: "A stronger presence at every customer touchpoint",
    servicesIntro:
      "Choose one focused service or combine several into a connected marketing system. Each option is shaped around your business, audience, and current stage of growth.",
    serviceLabel: "Service",
    outcomesEyebrow: "What This Work Supports",
    outcomesTitle: "More than polished visuals",
    outcomesIntro:
      "Good creative work should help the business behind it. We build practical systems that strengthen how customers discover, understand, and remember your company.",
    outcomes: [
      {
        title: "Look professional",
        body: "Create a clear, credible brand image across social media, web, print, and customer-facing materials.",
      },
      {
        title: "Stay consistent",
        body: "Use repeatable visual and content systems instead of starting every post, promotion, or page from zero.",
      },
      {
        title: "Build customer trust",
        body: "Make it easier for potential customers to understand what you offer and feel confident contacting your business.",
      },
      {
        title: "Improve local visibility",
        body: "Support discovery through useful service pages, local SEO foundations, and a stronger Google Business Profile.",
      },
    ],
    connectionEyebrow: "One Connected System",
    connectionTitle: "Your services should support each other",
    connectionBody:
      "Brand identity creates recognition. Content creation gives you useful material to share. Social media management keeps your business active. Website design gives customers a clear place to learn and take action. Local SEO helps the right people find those pages. When these pieces share one strategy, your marketing becomes easier to manage and more convincing to customers.",
    processEyebrow: "How We Work",
    processTitle: "Clear enough for a busy business owner",
    processIntro:
      "You do not need to arrive with a finished strategy. We help organize the right starting point and keep the process practical.",
    process: [
      {
        step: "01",
        title: "Understand the business",
        body: "We learn what you sell, who you serve, what is already working, and where your current presence feels incomplete.",
      },
      {
        step: "02",
        title: "Set the direction",
        body: "We recommend the right service scope, priorities, visual direction, and customer actions to support.",
      },
      {
        step: "03",
        title: "Create the system",
        body: "Our team develops the brand, content, design, website, or visibility assets included in your project.",
      },
      {
        step: "04",
        title: "Put it to work",
        body: "You receive practical assets and guidance designed for consistent use across the channels your customers see.",
      },
    ],
    audienceEyebrow: "Who We Help",
    audienceTitle: "Built for local businesses and growing brands",
    audienceBody:
      "We work with restaurants and cafés, beauty and wellness businesses, contractors, real estate professionals, clinics, retail shops, local service providers, startups, and established companies ready for a more professional online presence.",
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
          "The right starting point depends on the gap customers notice first. A new business may need brand identity before content. An established local business may benefit most from social media management, a website refresh, or local SEO. We review your current presence and recommend a practical priority.",
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
      "Tell us what feels incomplete about your brand or online presence. We’ll help you identify the service that can make the clearest difference first.",
    ctaButton: "Contact Lienzo",
    ctaSecondary: "See Our Portfolio",
  },
  es: {
    eyebrow: "Servicios Creativos y de Marketing Digital",
    title: "Marketing que ayuda a que tu negocio sea más fácil de encontrar y confiar.",
    subtitle:
      "Lienzo Studio ayuda a pequeños negocios a construir una presencia profesional y consistente con manejo de redes sociales, identidad de marca, creación de contenido, diseño gráfico, diseño web y SEO local. Nuestro equipo bilingüe trabaja con negocios en Colorado, México y LATAM.",
    primaryCta: "Encontrar el Servicio Ideal",
    secondaryCta: "Ver Nuestro Trabajo",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Una presencia más fuerte en cada punto de contacto",
    servicesIntro:
      "Elige un servicio específico o combina varios en un sistema de marketing conectado. Cada opción se adapta a tu negocio, audiencia y etapa de crecimiento.",
    serviceLabel: "Servicio",
    outcomesEyebrow: "Lo Que Apoya Este Trabajo",
    outcomesTitle: "Más que visuales atractivos",
    outcomesIntro:
      "El buen trabajo creativo debe ayudar al negocio que está detrás. Construimos sistemas prácticos que fortalecen cómo tus clientes descubren, entienden y recuerdan tu empresa.",
    outcomes: [
      {
        title: "Verte profesional",
        body: "Crea una imagen de marca clara y confiable en redes sociales, web, impresos y materiales para clientes.",
      },
      {
        title: "Mantener consistencia",
        body: "Usa sistemas visuales y de contenido repetibles en lugar de empezar cada publicación, promoción o página desde cero.",
      },
      {
        title: "Generar confianza",
        body: "Facilita que clientes potenciales entiendan lo que ofreces y se sientan seguros al contactar tu negocio.",
      },
      {
        title: "Mejorar visibilidad local",
        body: "Apoya el descubrimiento con páginas de servicio útiles, bases de SEO local y un Google Business Profile más fuerte.",
      },
    ],
    connectionEyebrow: "Un Sistema Conectado",
    connectionTitle: "Tus servicios deben apoyarse entre sí",
    connectionBody:
      "La identidad de marca crea reconocimiento. La creación de contenido te da material útil para compartir. El manejo de redes mantiene activo tu negocio. El diseño web ofrece un lugar claro para aprender y tomar acción. El SEO local ayuda a que las personas correctas encuentren esas páginas. Cuando todo comparte una estrategia, tu marketing es más fácil de manejar y más convincente.",
    processEyebrow: "Cómo Trabajamos",
    processTitle: "Un proceso claro para dueños de negocio ocupados",
    processIntro:
      "No necesitas llegar con una estrategia terminada. Te ayudamos a organizar el punto de partida correcto y mantenemos el proceso práctico.",
    process: [
      {
        step: "01",
        title: "Entender el negocio",
        body: "Conocemos lo que vendes, a quién atiendes, qué ya funciona y dónde se siente incompleta tu presencia actual.",
      },
      {
        step: "02",
        title: "Definir la dirección",
        body: "Recomendamos el alcance, las prioridades, la dirección visual y las acciones del cliente que debemos apoyar.",
      },
      {
        step: "03",
        title: "Crear el sistema",
        body: "Nuestro equipo desarrolla los recursos de marca, contenido, diseño, sitio web o visibilidad incluidos en tu proyecto.",
      },
      {
        step: "04",
        title: "Ponerlo a trabajar",
        body: "Recibes recursos prácticos y guía para usarlos con consistencia en los canales que ven tus clientes.",
      },
    ],
    audienceEyebrow: "A Quién Ayudamos",
    audienceTitle: "Hecho para negocios locales y marcas en crecimiento",
    audienceBody:
      "Trabajamos con restaurantes y cafés, negocios de belleza y bienestar, contratistas, profesionales de bienes raíces, clínicas, tiendas, proveedores de servicios locales, emprendimientos y empresas establecidas que buscan una presencia más profesional.",
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
          "El mejor punto de partida depende de lo primero que tus clientes notan. Un negocio nuevo puede necesitar identidad de marca antes que contenido. Un negocio local establecido puede beneficiarse más del manejo de redes, una renovación web o SEO local. Revisamos tu presencia y recomendamos una prioridad práctica.",
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
      "Cuéntanos qué se siente incompleto en tu marca o presencia digital. Te ayudaremos a identificar el servicio que puede hacer la diferencia más clara primero.",
    ctaButton: "Contactar a Lienzo",
    ctaSecondary: "Ver Portafolio",
  },
} as const;

export default function ServicesPage() {
  const { language } = useLanguage();
  const c = pageCopy[language];

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
            {services.map((service, index) => {
              const accent = accentStyles[service.accent];

              return (
                <motion.article key={service.slug} variants={fadeUp}>
                  <SpotlightCard
                    className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#151c24]"
                    spotlightColor={accent.spotlight}
                  >
                    <div className="relative z-[1] flex h-full flex-col">
                      <p className={`text-[10px] font-display font-bold uppercase tracking-[0.28em] ${accent.label}`}>
                        {c.serviceLabel} {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-4 font-display text-2xl font-bold leading-tight">
                        {service.title[language]}
                      </h2>
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
            {c.outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                variants={fadeUp}
                className="bg-white p-7 dark:bg-[#151c24]"
              >
                <p className="text-xs font-display font-bold tracking-[0.22em] text-[#254566] dark:text-[#8fb2d6]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">{outcome.title}</h3>
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
            {services.map((service) => (
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

          <motion.ol
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {c.process.map((step) => (
              <motion.li
                key={step.step}
                variants={fadeUp}
                className="border-t border-white/25 pt-6"
              >
                <p className="text-xs font-display font-bold tracking-[0.24em] text-[#ffb09a]">
                  {step.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
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
