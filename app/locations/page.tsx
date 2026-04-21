"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import { cities } from "@/lib/cities";
import { mexicoRegions } from "@/lib/mexicoRegions";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const vp = { once: true, amount: 0.05 };

export default function LocationsPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Where We Work",
          title: "Colorado & Mexico",
          subtitle:
            "Our work spans two markets. Rooted in Durango, Mexico and based in Fort Lupton, CO, we bring the same quality and approach to businesses across the Front Range and throughout Northern Mexico.",

          usSectionEyebrow: "United States",
          usSectionTitle: "Colorado: The Front Range",
          usSectionSubtitle: "We serve small and medium businesses across Northern Colorado and the Denver metro. Select a city to see how we can help.",
          distanceLabel: "miles from Fort Lupton",
          viewCity: "View →",

          mxSectionEyebrow: "Mexico",
          mxSectionTitle: "Durango & Northern Mexico",
          mxSectionSubtitle: "This is where Lienzo was built. We have deep experience working with businesses in Durango and are open to working with clients throughout the surrounding northern states.",
          hqLabel: "Headquarters",
          homeBaseLabel: "Creative Roots",
          expandingLabel: "Serving This Region",

          whyTitle: "Two Markets. One Standard.",
          whyBody:
            "Whether you are in Fort Collins or Culiacan, you get the same bilingual team, the same design quality, and the same commitment to results. We built our experience in Mexico and are applying that same foundation to grow businesses here in Colorado.",

          ctaTitle: "Not Seeing Your Area?",
          ctaBody:
            "We are not limited to what is listed here. If your business is in Northern Colorado, the Denver metro, or anywhere in Northern Mexico, reach out and let's talk.",
          ctaButton: "Contact Us",
        }
      : {
          eyebrow: "Dónde Trabajamos",
          title: "Colorado y México",
          subtitle:
            "Nuestro trabajo abarca dos mercados. Con raíces en Durango, México y base en Fort Lupton, CO, llevamos la misma calidad y enfoque a negocios en el Front Range y en todo el norte de México.",

          usSectionEyebrow: "Estados Unidos",
          usSectionTitle: "Colorado: El Front Range",
          usSectionSubtitle: "Servimos a pequeñas y medianas empresas en el norte de Colorado y el metro de Denver. Selecciona una ciudad para ver cómo podemos ayudar.",
          distanceLabel: "millas de Fort Lupton",
          viewCity: "Ver →",

          mxSectionEyebrow: "México",
          mxSectionTitle: "Durango y el Norte de México",
          mxSectionSubtitle: "Aquí es donde nació Lienzo. Tenemos amplia experiencia trabajando con negocios en Durango y estamos abiertos a trabajar con clientes en los estados del norte que nos rodean.",
          hqLabel: "Sede Principal",
          homeBaseLabel: "Raíces Creativas",
          expandingLabel: "Sirviendo Esta Región",

          whyTitle: "Dos Mercados. Un Estándar.",
          whyBody:
            "Ya sea que estés en Fort Collins o en Culiacán, tienes el mismo equipo bilingüe, la misma calidad de diseño y el mismo compromiso con los resultados. Construimos nuestra experiencia en México y aplicamos esa misma base para hacer crecer negocios aquí en Colorado.",

          ctaTitle: "¿No Ves Tu Área?",
          ctaBody:
            "No estamos limitados a lo que aparece aquí. Si tu negocio está en el norte de Colorado, el metro de Denver o en cualquier parte del norte de México, contáctanos y platicamos.",
          ctaButton: "Contáctanos",
        };

  return (
    <main className="min-h-screen bg-background text-foreground">

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

      {/* US — Colorado section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6] mb-3"
            >
              {c.usSectionEyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold tracking-tight mb-2">
              {c.usSectionTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-black/55 dark:text-white/55 mb-10">
              {c.usSectionSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Fort Lupton — HQ card */}
              <motion.div variants={fadeUp}>
                <div className="rounded-2xl border border-[#254566]/30 bg-[#254566]/[0.04] p-5 dark:border-[#8fb2d6]/25 dark:bg-[#8fb2d6]/[0.04]">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      Fort Lupton, CO
                    </h3>
                    <span className="shrink-0 rounded-full bg-[#254566]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#254566] dark:bg-[#8fb2d6]/10 dark:text-[#8fb2d6]">
                      {c.hqLabel}
                    </span>
                  </div>
                  <p className="text-xs text-black/45 dark:text-white/45">Weld County</p>
                  <p className="text-xs text-black/30 dark:text-white/30 mt-0.5">Colorado, US</p>
                </div>
              </motion.div>

              {cities.map((city) => (
                <motion.div key={city.slug} variants={fadeUp}>
                  <TransitionLink href={`/locations/${city.slug}`}>
                    <div className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:border-[#a61b00]/40 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:border-[#ff8f7a]/30">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-[#a61b00] dark:group-hover:text-[#ff8f7a] transition-colors">
                          {city.name}, {city.state}
                        </h3>
                        <span className="text-sm text-[#a61b00] dark:text-[#ff8f7a] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          {c.viewCity}
                        </span>
                      </div>
                      <p className="text-xs text-black/50 dark:text-white/50 mb-1">{city.county}</p>
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

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-t border-black/8 dark:border-white/8" />
      </div>

      {/* Mexico — Durango section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={vp}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a] mb-3"
            >
              {c.mxSectionEyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold tracking-tight mb-2">
              {c.mxSectionTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-black/55 dark:text-white/55 mb-10 max-w-2xl">
              {c.mxSectionSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mexicoRegions.map((region) => (
                <motion.div key={region.slug} variants={fadeUp}>
                  <TransitionLink href={`/locations/${region.slug}`}>
                    <div
                      className={`group rounded-2xl border p-5 transition hover:shadow-sm ${
                        region.homeBase
                          ? "border-[#a61b00]/30 bg-[#a61b00]/[0.04] hover:border-[#a61b00]/50 dark:border-[#ff8f7a]/25 dark:bg-[#ff8f7a]/[0.04] dark:hover:border-[#ff8f7a]/40"
                          : "border-black/10 bg-white hover:border-[#a61b00]/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#ff8f7a]/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-bold tracking-tight group-hover:text-[#a61b00] dark:group-hover:text-[#ff8f7a] transition-colors">
                          {region.state}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {region.homeBase && (
                            <span className="rounded-full bg-[#a61b00]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#a61b00] dark:bg-[#ff8f7a]/10 dark:text-[#ff8f7a]">
                              {c.homeBaseLabel}
                            </span>
                          )}
                          <span className="text-sm text-[#a61b00] dark:text-[#ff8f7a] opacity-0 group-hover:opacity-100 transition-opacity">
                            {c.viewCity}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-black/45 dark:text-white/45">
                        {region.homeBase ? c.homeBaseLabel : c.expandingLabel}
                      </p>
                      <p className="text-xs text-black/30 dark:text-white/30 mt-0.5">México</p>
                    </div>
                  </TransitionLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-5"
          >
            {c.whyTitle}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-black/65 dark:text-white/65 leading-relaxed">
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
          viewport={vp}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-4"
          >
            {c.ctaTitle}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-black/65 dark:text-white/65 leading-relaxed mb-8">
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
    </main>
  );
}
