"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import SpotlightCard from "@/components/SpotlightCard";
import { getCityBySlug } from "@/lib/cities";
import { getMexicoRegionBySlug } from "@/lib/mexicoRegions";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function CityPage() {
  const params = useParams();
  const slug = typeof params.city === "string" ? params.city : "";
  const { language } = useLanguage();

  const city = getCityBySlug(slug);
  const region = !city ? getMexicoRegionBySlug(slug) : undefined;

  if (!city && !region) notFound();

  const isMexico = !!region;

  // Unified translation object
  const t = city
    ? language === "en"
      ? city.en
      : city.es
    : language === "en"
    ? region!.en
    : region!.es;

  const nearby = city ? city.nearby : region!.nearby;
  const locationName = city ? city.name : region!.state;
  const locationStateOrCountry = city ? city.state : "Mexico";

  const shared =
    language === "en"
      ? {
          eyebrow: isMexico
            ? `Serving ${locationName}, Mexico`
            : `Serving ${locationName}, ${locationStateOrCountry}`,
          servicesTitle: "What We Offer",
          servicesSubtitle: `Everything your ${locationName} business needs to grow online.`,
          serviceCards: [
            {
              eyebrow: "Primary Service",
              title: "Social Media Management",
              description:
                "Content creation, scheduling, and community management on Instagram and Facebook. Handled end to end so you can focus on your business.",
              href: "/services/social-media-management",
              cta: "See plans",
              accent: "red" as const,
            },
            {
              eyebrow: "Core Service",
              title: "Brand Identity & Strategy",
              description:
                "Logo, color palette, typography, and brand guidelines. A complete visual identity that makes your business look professional on every platform.",
              href: "/services/brand-identity",
              cta: "See packages",
              accent: "blue" as const,
            },
          ],
          whyTitle: isMexico
            ? "Why Businesses in Northern Mexico Choose Lienzo"
            : "Why Northern Colorado Businesses Choose Lienzo",
          whyItems: isMexico
            ? [
                {
                  title: "Rooted in Durango",
                  body: "Lienzo was built in Durango. We understand northern Mexico's business culture, market dynamics, and what resonates with local audiences.",
                },
                {
                  title: `Experience in ${locationName}`,
                  body: `${t.proximityNote}`,
                },
                {
                  title: "Bilingual Team",
                  body: "We work in Spanish and English, which means seamless communication with your team and content that fits your audience perfectly.",
                },
                {
                  title: "Any Industry",
                  body: "Restaurants, retail, hospitality, construction, professional services: we've built content strategies across every category.",
                },
              ]
            : [
                {
                  title: "Bilingual Team",
                  body: "We work in English and Spanish, making us the right partner for any business and any community in Colorado.",
                },
                {
                  title: `Local to ${locationName}`,
                  body: `${t.proximityNote}`,
                },
                {
                  title: "Agency Quality, Accessible Price",
                  body: "Our team structure lets us deliver professional, strategy-led work at a fraction of what large Denver agencies charge.",
                },
                {
                  title: "Any Industry",
                  body: "Restaurants, retail, real estate, construction, healthcare: we've worked across every industry and we know how to make content that performs.",
                },
              ],
          nearbyTitle: isMexico ? "We Also Serve" : "We Also Serve",
          nearbyIntro: isMexico
            ? `In addition to ${locationName}, we work with businesses throughout Northern Mexico.`
            : `In addition to ${locationName}, we work with businesses across Northern Colorado.`,
          nearbyLabel: isMexico ? "Mexico" : "CO",
          ctaTitle: `Ready to Grow Your ${locationName} Business?`,
          ctaBody: isMexico
            ? "Message us on WhatsApp or send an email. We'll talk through your business and tell you exactly what makes sense."
            : "Call us, message us on WhatsApp, or send an email. We'll talk through your business and tell you exactly what makes sense.",
          ctaButton: "Contact Us",
          backLabel: "← All Locations",
          viewAll: "View all locations",
        }
      : {
          eyebrow: isMexico
            ? `Servicio en ${locationName}, México`
            : `Servicio en ${locationName}, ${locationStateOrCountry}`,
          servicesTitle: "Lo Que Ofrecemos",
          servicesSubtitle: `Todo lo que tu negocio en ${locationName} necesita para crecer en línea.`,
          serviceCards: [
            {
              eyebrow: "Servicio Principal",
              title: "Manejo de Redes Sociales",
              description:
                "Creación de contenido, programación y gestión de comunidad en Instagram y Facebook, de principio a fin para que tú te concentres en tu negocio.",
              href: "/services/social-media-management",
              cta: "Ver planes",
              accent: "red" as const,
            },
            {
              eyebrow: "Servicio Central",
              title: "Identidad de Marca y Estrategia",
              description:
                "Logo, paleta de color, tipografía y guía de marca. Una identidad visual completa que hace que tu negocio se vea profesional en cualquier plataforma.",
              href: "/services/brand-identity",
              cta: "Ver paquetes",
              accent: "blue" as const,
            },
          ],
          whyTitle: isMexico
            ? "Por Qué Negocios en el Norte de México Eligen Lienzo"
            : "Por Qué Negocios En El Norte de Colorado Eligen Lienzo",
          whyItems: isMexico
            ? [
                {
                  title: "Con Raíces en Durango",
                  body: "Lienzo nació en Durango. Entendemos la cultura empresarial del norte de México, la dinámica del mercado y lo que resuena con las audiencias locales.",
                },
                {
                  title: `Experiencia en ${locationName}`,
                  body: `${t.proximityNote}`,
                },
                {
                  title: "Equipo Bilingüe",
                  body: "Trabajamos en español e inglés, lo que significa comunicación fluida con tu equipo y contenido que encaja perfectamente con tu audiencia.",
                },
                {
                  title: "Cualquier Industria",
                  body: "Restaurantes, comercio, hospitalidad, construcción, servicios profesionales: hemos desarrollado estrategias de contenido en todas las categorías.",
                },
              ]
            : [
                {
                  title: "Equipo Bilingüe",
                  body: "Trabajamos en inglés y español, el socio ideal para cualquier negocio y comunidad en Colorado.",
                },
                {
                  title: `Cerca de ${locationName}`,
                  body: `${t.proximityNote}`,
                },
                {
                  title: "Calidad de Agencia, Precio Accesible",
                  body: "Nuestra estructura de equipo nos permite entregar trabajo profesional y estratégico a una fracción de lo que cobran las grandes agencias.",
                },
                {
                  title: "Cualquier Industria",
                  body: "Restaurantes, comercio, bienes raíces, construcción, salud: hemos trabajado en todas las industrias y sabemos cómo crear contenido que funciona.",
                },
              ],
          nearbyTitle: "También Servimos",
          nearbyIntro: isMexico
            ? `Además de ${locationName}, trabajamos con negocios en todo el norte de México.`
            : `Además de ${locationName}, trabajamos con negocios en todo el norte de Colorado.`,
          nearbyLabel: isMexico ? "México" : "CO",
          ctaTitle: `¿Listo Para Hacer Crecer Tu Negocio en ${locationName}?`,
          ctaBody: isMexico
            ? "Escríbenos por WhatsApp o mándanos un correo. Platicamos sobre tu negocio y te decimos exactamente qué tiene sentido."
            : "Llámanos, escríbenos por WhatsApp o mándanos un correo. Platicamos sobre tu negocio y te decimos exactamente qué tiene sentido.",
          ctaButton: "Contáctanos",
          backLabel: "← Todas las Ubicaciones",
          viewAll: "Ver todas las ubicaciones",
        };

  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="mt-32 px-6 pb-16">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <TransitionLink
              href="/locations"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 dark:text-white/45 hover:text-black/70 dark:hover:text-white/70 transition-colors"
            >
              {shared.backLabel}
            </TransitionLink>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className={`text-xs font-display font-bold uppercase tracking-[0.3em] mb-4 ${
              isMexico
                ? "text-[#a61b00] dark:text-[#ff8f7a]"
                : "text-[#a61b00] dark:text-[#ff8f7a]"
            }`}
          >
            {shared.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-black/65 dark:text-white/65 leading-relaxed max-w-2xl mb-8"
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c02200]"
            >
              {shared.ctaButton}
            </TransitionLink>
            <TransitionLink
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:border-black/40 dark:hover:border-white/40"
            >
              {shared.servicesTitle}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>

      {/* Local context */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-bold tracking-tight mb-4 md:text-3xl"
            >
              {t.localContextTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={`text-base leading-relaxed text-black/70 dark:text-white/70 border-l-2 pl-5 ${
                isMexico ? "border-[#a61b00]" : "border-[#a61b00]"
              }`}
            >
              {t.localContext}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold tracking-tight mb-2"
            >
              {shared.servicesTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/55 dark:text-white/55 mb-10"
            >
              {shared.servicesSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {shared.serviceCards.map((card) => (
                <motion.div key={card.title} variants={fadeUp}>
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
                    <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
                      {card.title}
                    </h3>
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
                      {card.cta} →
                    </TransitionLink>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Lienzo */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold tracking-tight mb-8 md:text-4xl"
            >
              {shared.whyTitle}
            </motion.h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {shared.whyItems.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <SpotlightCard
                    className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
                    spotlightColor={
                      isMexico
                        ? "rgba(166, 27, 0, 0.10)"
                        : "rgba(37, 69, 102, 0.10)"
                    }
                  >
                    <h3 className="font-display text-lg font-bold tracking-tight mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-black/65 dark:text-white/65">{item.body}</p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby cities / regions */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-xl font-bold tracking-tight mb-2"
            >
              {shared.nearbyTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/60 dark:text-white/60 mb-5"
            >
              {shared.nearbyIntro}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {nearby.map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-black/10 dark:border-white/10 px-4 py-1.5 text-sm text-black/60 dark:text-white/60"
                >
                  {place}, {shared.nearbyLabel}
                </span>
              ))}
              <TransitionLink
                href="/locations"
                className="rounded-full border border-[#a61b00]/30 px-4 py-1.5 text-sm text-[#a61b00] dark:text-[#ff8f7a] hover:border-[#a61b00] transition-colors"
              >
                {shared.viewAll} →
              </TransitionLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-black/[0.03] dark:bg-white/[0.03] border-t border-black/5 dark:border-white/5 text-center">
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
            {shared.ctaTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-black/65 dark:text-white/65 leading-relaxed mb-8"
          >
            {shared.ctaBody}
          </motion.p>
          <motion.div variants={fadeUp}>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c02200]"
            >
              {shared.ctaButton}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
