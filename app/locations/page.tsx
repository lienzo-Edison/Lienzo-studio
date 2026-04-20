"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import { cities } from "@/lib/cities";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function LocationsPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Where We Work",
          title: "Serving Northern Colorado & the Denver Metro",
          subtitle:
            "We work with small and medium businesses across the Front Range. Based in Fort Lupton, CO, we know this market and we create content that speaks to the communities you serve.",
          browseTitle: "Browse by City",
          browseSubtitle: "Select a city to see how we can help businesses in your area.",
          distanceLabel: "miles from Fort Lupton",
          countyLabel: "County",
          viewCity: "View →",
          whyTitle: "Local Knowledge. Professional Results.",
          whyBody:
            "Big agencies don't know your market. We're based in Fort Lupton, we serve the Front Range daily, and we understand what resonates with customers in Northern Colorado and the northern Denver suburbs. That local knowledge, combined with a skilled bilingual team and affordable pricing, is what sets Lienzo apart.",
          ctaTitle: "Don't See Your City?",
          ctaBody:
            "We're not limited to the cities listed here. If your business is within reach of Northern Colorado or the Denver metro, reach out and let's talk.",
          ctaButton: "Contact Us",
        }
      : {
          eyebrow: "Dónde Trabajamos",
          title: "Servicio en el Norte de Colorado y el Metro de Denver",
          subtitle:
            "Trabajamos con pequeñas y medianas empresas en todo el Front Range. Con base en Fort Lupton, CO, conocemos este mercado y creamos contenido que habla a las comunidades a las que sirves.",
          browseTitle: "Explorar por Ciudad",
          browseSubtitle: "Selecciona una ciudad para ver cómo podemos ayudar a negocios en tu área.",
          distanceLabel: "millas de Fort Lupton",
          countyLabel: "Condado",
          viewCity: "Ver →",
          whyTitle: "Conocimiento Local. Resultados Profesionales.",
          whyBody:
            "Las grandes agencias no conocen tu mercado. Estamos ubicados en Fort Lupton, servimos el Front Range diariamente y entendemos lo que resuena con los clientes en el norte de Colorado y los suburbios norte de Denver. Ese conocimiento local, combinado con un equipo bilingüe y precios accesibles, es lo que distingue a Lienzo.",
          ctaTitle: "¿No Ves Tu Ciudad?",
          ctaBody:
            "No estamos limitados a las ciudades que aparecen aquí. Si tu negocio está en el norte de Colorado o el metro de Denver, contáctanos y platicamos.",
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
            className="font-display text-4xl font-bold tracking-tight md:text-5xl mb-6"
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

      {/* City grid */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-bold tracking-tight mb-2"
            >
              {c.browseTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/55 dark:text-white/55 mb-10"
            >
              {c.browseSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <motion.div key={city.slug} variants={fadeUp}>
                  <TransitionLink href={`/locations/${city.slug}`}>
                    <div className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:border-[#a61b00]/40 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:border-[#ff8f7a]/30">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-[#a61b00] dark:group-hover:text-[#ff8f7a] transition-colors">
                          {city.name}, {city.state}
                        </h3>
                        <span className="text-sm text-[#a61b00] dark:text-[#ff8f7a] opacity-0 group-hover:opacity-100 transition-opacity">
                          {c.viewCity}
                        </span>
                      </div>
                      <p className="text-xs text-black/50 dark:text-white/50 mb-1">
                        {city.county}
                      </p>
                      <p className="text-xs text-black/40 dark:text-white/40">
                        {city.distanceMiles} {c.distanceLabel}
                      </p>
                    </div>
                  </TransitionLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why local */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
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
