"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import SpotlightCard from "@/components/SpotlightCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function ServicesPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "What We Offer",
          title: "Services Built for Real Businesses",
          subtitle:
            "Professional marketing and design for small and medium businesses in Northern Colorado and Mexico — at prices that actually make sense.",
          cards: [
            {
              eyebrow: "Primary Service",
              title: "Social Media Management",
              description:
                "Content creation, scheduling, and community management on Instagram and Facebook — handled end to end so you can focus on running your business.",
              href: "/services/social-media-management",
              cta: "See plans →",
              accent: "red" as const,
            },
            {
              eyebrow: "Core Service",
              title: "Brand Identity & Strategy",
              description:
                "Logo, color palette, typography, and brand guidelines — a complete visual identity that makes your business look professional on every platform.",
              href: "/services/brand-identity",
              cta: "See packages →",
              accent: "blue" as const,
            },
            {
              eyebrow: "Design Service",
              title: "Editorial & Marketing Design",
              description:
                "Menus, flyers, brochures, catalogs, and corporate materials designed to communicate your brand clearly and professionally.",
              href: "/contact",
              cta: "Request a quote →",
              accent: "red" as const,
            },
            {
              eyebrow: "Creative Service",
              title: "Custom Illustration & Assets",
              description:
                "Unique illustrations, iconography, brand characters, and graphic assets that set your brand apart from every competitor.",
              href: "/contact",
              cta: "Request a quote →",
              accent: "blue" as const,
            },
          ],
          whyEyebrow: "Our Advantage",
          whyTitle: "Agency Quality Without the Agency Price",
          whyBody:
            "Our team operates across Fort Lupton, Colorado and Durango, Mexico. That structure lets us deliver professional, strategy-led work at a fraction of what large Denver agencies charge — without cutting corners on quality.",
          ctaTitle: "Not Sure Where to Start?",
          ctaBody:
            "Call us, message us on WhatsApp, or send an email. We'll ask a few questions and point you to the service that fits your business best.",
          ctaButton: "Get in Touch",
        }
      : {
          eyebrow: "Lo Que Ofrecemos",
          title: "Servicios Para Negocios Reales",
          subtitle:
            "Marketing y diseño profesional para pequeñas y medianas empresas en México y el norte de Colorado — a precios que realmente tienen sentido.",
          cards: [
            {
              eyebrow: "Servicio Principal",
              title: "Manejo de Redes Sociales",
              description:
                "Creación de contenido, programación y gestión de comunidad en Instagram y Facebook — de principio a fin para que tú puedas enfocarte en tu negocio.",
              href: "/services/social-media-management",
              cta: "Ver planes →",
              accent: "red" as const,
            },
            {
              eyebrow: "Servicio Central",
              title: "Identidad de Marca y Estrategia",
              description:
                "Logo, paleta de color, tipografía y guía de marca — una identidad visual completa que hace que tu negocio se vea profesional en cualquier plataforma.",
              href: "/services/brand-identity",
              cta: "Ver paquetes →",
              accent: "blue" as const,
            },
            {
              eyebrow: "Servicio de Diseño",
              title: "Diseño Editorial y de Marketing",
              description:
                "Menús, volantes, folletos, catálogos y materiales corporativos diseñados para comunicar tu marca con claridad y profesionalismo.",
              href: "/contact",
              cta: "Solicitar cotización →",
              accent: "red" as const,
            },
            {
              eyebrow: "Servicio Creativo",
              title: "Ilustración y Activos Personalizados",
              description:
                "Ilustraciones únicas, iconografía, personajes de marca y activos gráficos que hacen destacar a tu marca de la competencia.",
              href: "/contact",
              cta: "Solicitar cotización →",
              accent: "blue" as const,
            },
          ],
          whyEyebrow: "Nuestra Ventaja",
          whyTitle: "Calidad de Agencia Sin el Precio de Agencia",
          whyBody:
            "Nuestro equipo opera entre Fort Lupton, Colorado y Durango, México. Esa estructura nos permite entregar trabajo profesional y estratégico a una fracción de lo que cobran las grandes agencias — sin comprometer la calidad.",
          ctaTitle: "¿No Sabes Por Dónde Empezar?",
          ctaBody:
            "Llámanos, escríbenos por WhatsApp o mándanos un correo. Te haremos algunas preguntas y te indicamos el servicio que mejor se adapta a tu negocio.",
          ctaButton: "Contáctanos",
        };

  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="mt-32 px-6 pb-16 text-center">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a] mb-4"
          >
            {c.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
          >
            {c.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-black/65 dark:text-white/65 leading-relaxed max-w-2xl mx-auto"
          >
            {c.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {c.cards.map((card) => (
              <motion.div key={card.href + card.title} variants={fadeUp}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5"
                  spotlightColor={
                    card.accent === "red"
                      ? "rgba(166, 27, 0, 0.12)"
                      : "rgba(37, 69, 102, 0.12)"
                  }
                >
                  <p
                    className={`text-[10px] font-display font-bold uppercase tracking-[0.28em] mb-3 ${
                      card.accent === "red"
                        ? "text-[#a61b00] dark:text-[#ff8f7a]"
                        : "text-[#254566] dark:text-[#8fb2d6]"
                    }`}
                  >
                    {card.eyebrow}
                  </p>
                  <h2 className="font-display text-2xl font-bold tracking-tight mb-3">
                    {card.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-black/65 dark:text-white/65 mb-6">
                    {card.description}
                  </p>
                  <TransitionLink
                    href={card.href}
                    className={`text-sm font-semibold transition-colors ${
                      card.accent === "red"
                        ? "text-[#a61b00] hover:text-[#c02200] dark:text-[#ff8f7a] dark:hover:text-[#ffb09a]"
                        : "text-[#254566] hover:text-[#1a3349] dark:text-[#8fb2d6] dark:hover:text-[#aecde8]"
                    }`}
                  >
                    {card.cta}
                  </TransitionLink>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Lienzo */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6] mb-3"
          >
            {c.whyEyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-5"
          >
            {c.whyTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-black/65 dark:text-white/65 leading-relaxed"
          >
            {c.whyBody}
          </motion.p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <motion.div
          className="mx-auto max-w-xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4"
          >
            {c.ctaTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-black/65 dark:text-white/65 leading-relaxed mb-8"
          >
            {c.ctaBody}
          </motion.p>
          <motion.div variants={fadeUp}>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c02200]"
            >
              {c.ctaButton}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
