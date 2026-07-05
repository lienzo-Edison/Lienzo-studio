"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import SpotlightCard from "@/components/SpotlightCard";
import TransitionLink from "@/components/TransitionLink";

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

const copy = {
  en: {
    eyebrow: "Start a Conversation",
    title: "Let’s turn your next business objective into a focused marketing system.",
    intro:
      "Tell us the growth objective, market opportunity, or constraint you are working through. Our bilingual team will help identify the highest-leverage next step across strategy, SEO, your website, campaigns, content, or brand.",
    availability: "Serving Colorado, the United States, Mexico, and LATAM",
    directTitle: "Choose the easiest way to reach us",
    directBody:
      "No complicated intake process. Start with a call, WhatsApp message, or email and we’ll take it from there.",
    phoneLabel: "Phone",
    phoneBody: "Best for a quick introduction or a direct conversation.",
    phoneCta: "Call Lienzo",
    whatsappLabel: "WhatsApp",
    whatsappBody: "Send a message when it is convenient. English and Spanish are welcome.",
    whatsappCta: "Message on WhatsApp",
    emailLabel: "Email",
    emailBody: "A good option for project details, links, timelines, or attachments.",
    revealEmail: "Reveal email address",
    emailCta: "Send an email",
    socialLabel: "Follow Our Work",
    socialBody:
      "See recent projects, design work, and updates from the studio on Instagram and Facebook.",
    prepareEyebrow: "Helpful, Not Required",
    prepareTitle: "What to include in your first message",
    prepareBody:
      "You do not need a finished brief. A little context simply helps us understand the right place to begin.",
    prompts: [
      "The business objective or market opportunity",
      "Your audience and sales process",
      "What is limiting visibility, demand, or trust",
      "Your ideal timing, launch date, or internal deadline",
    ],
    nextEyebrow: "What Happens Next",
    nextTitle: "A clear, low-pressure first step",
    steps: [
      {
        number: "01",
        title: "We understand the commercial context",
        body: "We ask focused questions about the objective, buyers, sales cycle, current performance, and internal capacity.",
      },
      {
        number: "02",
        title: "We identify the highest-leverage move",
        body: "We recommend the priorities, capabilities, and scope that make the strongest business case now.",
      },
      {
        number: "03",
        title: "You decide how to move forward",
        body: "You receive a clear next step without pressure to purchase services you do not need.",
      },
    ],
    browseTitle: "Still exploring?",
    browseBody:
      "Review our services or portfolio before reaching out. Both can help you see where Lienzo may fit into your business.",
    servicesCta: "Explore Services",
    portfolioCta: "View Portfolio",
  },
  es: {
    eyebrow: "Inicia una Conversación",
    title: "Convirtamos tu siguiente objetivo de negocio en un sistema de marketing enfocado.",
    intro:
      "Cuéntanos el objetivo de crecimiento, la oportunidad de mercado o la limitante que estás enfrentando. Nuestro equipo bilingüe identificará el siguiente paso de mayor impacto en estrategia, SEO, sitio web, campañas, contenido o marca.",
    availability: "Trabajamos en Colorado, Estados Unidos, México y LATAM",
    directTitle: "Elige la forma más fácil de contactarnos",
    directBody:
      "Sin procesos complicados. Empieza con una llamada, mensaje por WhatsApp o correo y nosotros te guiamos desde ahí.",
    phoneLabel: "Teléfono",
    phoneBody: "Ideal para una presentación rápida o una conversación directa.",
    phoneCta: "Llamar a Lienzo",
    whatsappLabel: "WhatsApp",
    whatsappBody: "Escríbenos cuando te sea conveniente. Atendemos en español e inglés.",
    whatsappCta: "Escribir por WhatsApp",
    emailLabel: "Correo",
    emailBody: "Una buena opción para detalles, enlaces, fechas o archivos de tu proyecto.",
    revealEmail: "Mostrar correo",
    emailCta: "Enviar correo",
    socialLabel: "Sigue Nuestro Trabajo",
    socialBody:
      "Conoce proyectos recientes, trabajo de diseño y novedades del estudio en Instagram y Facebook.",
    prepareEyebrow: "Útil, No Obligatorio",
    prepareTitle: "Qué puedes incluir en tu primer mensaje",
    prepareBody:
      "No necesitas tener un brief terminado. Un poco de contexto simplemente nos ayuda a entender por dónde empezar.",
    prompts: [
      "El objetivo de negocio o la oportunidad de mercado",
      "Tu audiencia y proceso de ventas",
      "Qué limita la visibilidad, demanda o confianza",
      "Tu fecha ideal, lanzamiento o límite interno",
    ],
    nextEyebrow: "Qué Sigue",
    nextTitle: "Un primer paso claro y sin presión",
    steps: [
      {
        number: "01",
        title: "Entendemos el contexto comercial",
        body: "Hacemos preguntas enfocadas sobre el objetivo, compradores, ciclo de ventas, desempeño actual y capacidad interna.",
      },
      {
        number: "02",
        title: "Identificamos el movimiento de mayor impacto",
        body: "Recomendamos las prioridades, capacidades y alcance con el mejor caso de negocio en este momento.",
      },
      {
        number: "03",
        title: "Tú decides cómo avanzar",
        body: "Recibes un siguiente paso claro, sin presión para contratar servicios que no necesitas.",
      },
    ],
    browseTitle: "¿Todavía estás explorando?",
    browseBody:
      "Revisa nuestros servicios o portafolio antes de contactarnos. Ambos pueden ayudarte a visualizar cómo Lienzo puede apoyar a tu negocio.",
    servicesCta: "Explorar Servicios",
    portfolioCta: "Ver Portafolio",
  },
} as const;

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const { language } = useLanguage();
  const c = copy[language];

  const fullEmail = language === "es" ? "ventas@lienzo.studio" : "sales@lienzo.studio";
  const phoneNumber = "+1 (720) 990-7795";
  const phoneHref = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;
  const whatsappLink = "https://wa.me/message/LVLY6STJJOM4K1";

  const trackContact = (method: "phone" | "whatsapp" | "email_reveal" | "email") => {
    if (typeof window === "undefined") return;

    const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Contact", { method });
    }

    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "contact", { method });
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <section className="px-6 pb-16 pt-32 md:pb-20 md:pt-40">
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
            className="mx-auto mt-5 max-w-4xl text-balance font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            {c.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg dark:text-white/65"
          >
            {c.intro}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 w-fit rounded-full border border-black/10 bg-black/[0.025] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/60 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60"
          >
            {c.availability}
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <motion.header
            className="mx-auto max-w-2xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl">{c.directTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.directBody}
            </p>
          </motion.header>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.article variants={fadeUp}>
              <SpotlightCard
                className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] dark:border-white/10 dark:bg-[#151c24]"
                spotlightColor="rgba(37, 69, 102, 0.12)"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#254566]/10 text-[#254566] dark:bg-[#8fb2d6]/10 dark:text-[#8fb2d6]">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.6 3.5h3.1l1.3 4-2 1.6a15.2 15.2 0 0 0 5.9 5.9l1.6-2 4 1.3v3.1a3.1 3.1 0 0 1-3.4 3.1A15.4 15.4 0 0 1 3.5 6.9 3.1 3.1 0 0 1 6.6 3.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-6 text-xs font-display font-bold uppercase tracking-[0.26em] text-[#254566] dark:text-[#8fb2d6]">
                    {c.phoneLabel}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{phoneNumber}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                    {c.phoneBody}
                  </p>
                  <a
                    href={phoneHref}
                    onClick={() => trackContact("phone")}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#254566] transition hover:text-[#1a3349] dark:text-[#8fb2d6] dark:hover:text-[#aecde8]"
                  >
                    {c.phoneCta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </SpotlightCard>
            </motion.article>

            <motion.article variants={fadeUp}>
              <SpotlightCard
                className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] dark:border-white/10 dark:bg-[#151c24]"
                spotlightColor="rgba(37, 211, 102, 0.12)"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366]/10 text-[#178c45] dark:text-[#65e190]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.3.1.4-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.5 1.9 2.6 2.4.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.4-.8 1.9-.5.5-1.3.8-2.1.7-1-.1-2.5-.5-4.3-2.1-2.1-1.9-3.3-4.2-3.4-5.5 0-.5.1-.8.2-1.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="mt-6 text-xs font-display font-bold uppercase tracking-[0.26em] text-[#178c45] dark:text-[#65e190]">
                    {c.whatsappLabel}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">WhatsApp</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                    {c.whatsappBody}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackContact("whatsapp")}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#178c45] transition hover:text-[#106c35] dark:text-[#65e190] dark:hover:text-[#91efae]"
                  >
                    {c.whatsappCta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </SpotlightCard>
            </motion.article>

            <motion.article variants={fadeUp}>
              <SpotlightCard
                className="flex h-full flex-col rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.055)] dark:border-white/10 dark:bg-[#151c24]"
                spotlightColor="rgba(166, 27, 0, 0.12)"
              >
                <div className="relative z-[1] flex h-full flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a61b00]/10 text-[#a61b00] dark:bg-[#ff8f7a]/10 dark:text-[#ff8f7a]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3.5"
                        y="5"
                        width="17"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="m5 7 7 5 7-5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-6 text-xs font-display font-bold uppercase tracking-[0.26em] text-[#a61b00] dark:text-[#ff8f7a]">
                    {c.emailLabel}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    {revealed ? fullEmail : c.revealEmail}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                    {c.emailBody}
                  </p>
                  {!revealed ? (
                    <button
                      type="button"
                      onClick={() => {
                        setRevealed(true);
                        trackContact("email_reveal");
                      }}
                      className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#a61b00] transition hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]"
                    >
                      {c.revealEmail}
                      <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <a
                      href={`mailto:${fullEmail}`}
                      onClick={() => trackContact("email")}
                      className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#a61b00] transition hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]"
                    >
                      {c.emailCta}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </motion.article>
          </motion.div>

          <motion.aside
            className="mt-6 flex flex-col gap-6 rounded-[1.6rem] border border-black/10 bg-black/[0.025] p-7 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/[0.04]"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-bold">{c.socialLabel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60">
                {c.socialBody}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="https://www.instagram.com/_lienzostudio/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-black/35 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/40"
                aria-label="Lienzo Studio on Instagram"
              >
                Instagram
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.facebook.com/people/Lienzo-Studio/61588545936546/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-black/35 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/40"
                aria-label="Lienzo Studio on Facebook"
              >
                Facebook
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="border-y border-black/5 bg-black/[0.025] px-6 py-24 dark:border-white/5 dark:bg-white/[0.025]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
              {c.prepareEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">{c.prepareTitle}</h2>
            <p className="mt-5 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              {c.prepareBody}
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-4 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {c.prompts.map((prompt, index) => (
              <motion.li
                key={prompt}
                variants={fadeUp}
                className="flex min-h-28 items-end rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#151c24]"
              >
                <div>
                  <p className="text-xs font-display font-bold tracking-[0.22em] text-[#254566] dark:text-[#8fb2d6]">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-display text-lg font-bold">{prompt}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
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
              {c.nextEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">{c.nextTitle}</h2>
          </motion.header>

          <motion.ol
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {c.steps.map((step) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                className="border-t border-white/25 pt-6"
              >
                <p className="text-xs font-display font-bold tracking-[0.24em] text-[#ffb09a]">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="px-6 py-24">
        <motion.div
          className="mx-auto max-w-5xl rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_60%,#eef2f4_100%)] px-8 py-12 text-center md:px-12 md:py-16 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111820_0%,#151c24_60%,#1b2631_100%)]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
            {c.browseTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65"
          >
            {c.browseBody}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <TransitionLink
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c02200]"
            >
              {c.servicesCta}
            </TransitionLink>
            <TransitionLink
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:border-black/45 dark:border-white/25 dark:hover:border-white/55"
            >
              {c.portfolioCta}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
