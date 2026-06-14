"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import { services, type ServiceAccent } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.12 };

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

const copy = {
  en: {
    eyebrow: "Services",
    title: "Creative and marketing services built for small businesses.",
    intro:
      "Lienzo Studio is a bilingual digital marketing studio that combines branding, content creation, social media management, website design, graphic design, and local SEO to help small businesses build a stronger digital presence. Whether you are starting from zero or ready to look more consistent and professional, we create systems that help customers trust you faster.",
    cardLabel: "Service",
    connectionTitle: "Built to work together.",
    connectionBody:
      "Brand identity gives your business a clear foundation. Social media keeps that identity active. Website pages explain your services. Local SEO and an optimized Google Business Profile help customers find you. Together, these pieces create a stronger online presence than any single post or design can achieve alone.",
    whoTitle: "Who we help",
    whoBody:
      "We work with small businesses and growing brands that need a more polished, consistent, and useful presence.",
    industries: [
      "Restaurants & cafés",
      "Beauty & wellness",
      "Contractors",
      "Real estate",
      "Clinics",
      "Retail shops",
      "Local service businesses",
      "Startups and new brands",
    ],
    marketTitle: "Bilingual support for Colorado, Mexico, and LATAM.",
    marketBody:
      "Lienzo Studio works in English and Spanish, making us a strong fit for businesses serving bilingual communities or operating across the United States, Mexico, and Latin America. Our bilingual marketing support keeps your message clear and culturally natural across markets.",
    ctaTitle: "Not sure where to start?",
    ctaBody:
      "Tell us about your business and we’ll help you choose the right starting point, whether that is branding, social media, your website, or local visibility.",
    contactCta: "Contact Lienzo",
    workCta: "View Our Work",
  },
  es: {
    eyebrow: "Servicios",
    title: "Servicios creativos y de marketing para pequeños negocios.",
    intro:
      "Lienzo Studio es un estudio bilingüe de marketing digital que combina branding, creación de contenido, manejo de redes sociales, diseño web, diseño gráfico y SEO local para ayudar a pequeños negocios a construir una presencia digital más fuerte. Ya sea que empieces desde cero o quieras verte más consistente y profesional, creamos sistemas que ayudan a tus clientes a confiar más rápido.",
    cardLabel: "Servicio",
    connectionTitle: "Creados para trabajar juntos.",
    connectionBody:
      "La identidad de marca da una base clara a tu negocio. Las redes sociales mantienen esa identidad activa. Las páginas web explican tus servicios. El SEO local y un Google Business Profile optimizado ayudan a que tus clientes te encuentren. Juntas, estas piezas crean una presencia más fuerte que cualquier publicación o diseño por separado.",
    whoTitle: "A quién ayudamos",
    whoBody:
      "Trabajamos con pequeños negocios y marcas en crecimiento que necesitan una presencia más pulida, consistente y útil.",
    industries: [
      "Restaurantes y cafés",
      "Belleza y bienestar",
      "Contratistas",
      "Bienes raíces",
      "Clínicas",
      "Tiendas",
      "Servicios locales",
      "Emprendimientos y marcas nuevas",
    ],
    marketTitle: "Soporte bilingüe para Colorado, México y LATAM.",
    marketBody:
      "Lienzo Studio trabaja en inglés y español, lo que nos permite apoyar a negocios que atienden comunidades bilingües u operan entre Estados Unidos, México y Latinoamérica. Nuestro soporte de marketing bilingüe mantiene tu mensaje claro y culturalmente natural en cada mercado.",
    ctaTitle: "¿No sabes por dónde empezar?",
    ctaBody:
      "Cuéntanos sobre tu negocio y te ayudaremos a elegir el mejor punto de partida, ya sea branding, redes sociales, tu sitio web o visibilidad local.",
    contactCta: "Contactar a Lienzo",
    workCta: "Ver Nuestro Trabajo",
  },
} as const;

export default function ServicesSection() {
  const { language } = useLanguage();
  const c = copy[language];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
            {c.eyebrow}
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-balance font-display text-3xl font-bold uppercase leading-tight text-foreground md:text-5xl"
          >
            {c.title}
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
            {c.intro}
          </p>
        </motion.header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const accent = accentStyles[service.accent];

            return (
              <motion.article
                key={service.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.06 }}
              >
                <SpotlightCard
                  className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.09)] dark:border-white/10 dark:bg-[#151c24]"
                  spotlightColor={accent.spotlight}
                >
                  <div className="relative z-[1] flex h-full flex-col">
                    <p className={`text-[10px] font-display font-bold uppercase tracking-[0.28em] ${accent.label}`}>
                      {c.cardLabel} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground">
                      {service.title[language]}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
                      {service.description[language]}
                    </p>
                    <ul className="mt-6 space-y-2.5" aria-label={`${service.title[language]} features`}>
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
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            className="rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_55%,#eef2f4_100%)] p-8 md:p-10 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111820_0%,#151c24_55%,#1b2631_100%)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground">
              {c.connectionTitle}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.connectionBody}
            </p>
          </motion.article>

          <motion.article
            className="rounded-[2rem] border border-black/10 bg-[#254566] p-8 text-white md:p-10 dark:border-white/10 dark:bg-[#1b344e]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <h3 className="font-display text-3xl font-bold">{c.marketTitle}</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/75 md:text-base">
              {c.marketBody}
            </p>
          </motion.article>
        </div>

        <motion.div
          className="mt-16 border-y border-black/10 py-12 dark:border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <h3 className="font-display text-3xl font-bold text-foreground">{c.whoTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-black/65 dark:text-white/65">
                {c.whoBody}
              </p>
            </div>
            <ul className="flex flex-wrap gap-3" aria-label={c.whoTitle}>
              {c.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-black/10 bg-black/[0.025] px-4 py-2 text-sm text-black/70 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 rounded-[2rem] bg-[#a61b00] px-8 py-10 text-white md:px-12 md:py-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl font-bold md:text-4xl">{c.ctaTitle}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                {c.ctaBody}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <TransitionLink
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#a61b00] transition hover:bg-[#f6f1e7]"
              >
                {c.contactCta}
              </TransitionLink>
              <TransitionLink
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10"
              >
                {c.workCta}
              </TransitionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

