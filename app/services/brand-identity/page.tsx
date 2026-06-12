"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import SpotlightCard from "@/components/SpotlightCard";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function BrandIdentityPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Brand Identity & Strategy",
          title: "A Brand Built to Communicate With Intention",
          subtitle:
            "Professional visual identities for businesses that want to build trust, stand apart, and present themselves with confidence.",
          intro:
            "This service is designed for new brands, businesses ready for a more professional image, and companies that need a clear, consistent identity that works across digital, print, and physical applications. Every proposal is tailored to the needs and stage of the business.",
          identityTitle: "Brand Identity & Strategy",
          identityDescription:
            "We create a strategic visual foundation that looks professional, communicates clearly, and strengthens how customers perceive your brand.",
          identityIncludesTitle: "Depending on the project scope, we can develop:",
          identityIncludes: [
            "Logo design",
            "Logo variations",
            "Color palette",
            "Typography selection",
            "Brand sheet",
            "Business materials",
            "Brand applications",
            "Visual direction",
            "Digital files ready to use",
          ],
          redesignTitle: "Brand Redesign",
          redesignDescription:
            "For businesses that already have a brand but need to update it, elevate its presentation, or align it with the current quality and stage of the business without losing its essence.",
          redesignIncludesTitle: "We focus on:",
          redesignIncludes: [
            "Logo redesign or refinement",
            "Updated color palette",
            "Updated typography",
            "Brand sheet",
            "Updated digital files",
          ],
          additionalTitle: "Additional Brand Services",
          additionalDescription:
            "We extend your visual identity into the touchpoints customers interact with, keeping your brand professional and consistent across digital, print, and physical spaces.",
          additionalServices: [
            "Social media templates",
            "Business cards",
            "Menus",
            "Flyers",
            "Brochures",
            "Letterheads",
            "Uniforms",
            "Signage",
            "Packaging",
            "Vehicle graphics",
            "Merchandise",
          ],
          additionalNote:
            "Contact us to define the right materials and receive a proposal tailored to your project.",
          whyTitle: "Why Businesses Trust Lienzo With Their Brand",
          whyItems: [
            {
              title: "Strategy-First Design",
              body: "Every decision is guided by your audience, your goals, and what your brand needs to communicate, not only by what looks good.",
            },
            {
              title: "A Scope Built Around You",
              body: "We define the right deliverables for your needs, priorities, and current stage so the investment stays focused on what your business will actually use.",
            },
            {
              title: "Files You Can Actually Use",
              body: "Final digital files are prepared for practical use so your identity can be applied consistently after launch.",
            },
            {
              title: "Built for Real Touchpoints",
              body: "We consider where customers encounter your brand, from a social profile to packaging, signage, uniforms, and printed materials.",
            },
          ],
          ctaTitle: "Let’s Build Your Brand",
          ctaBody:
            "Tell us about your business, what you need, and where your brand needs to show up. We’ll define the right scope and prepare a personalized proposal.",
          ctaButton: "Request a Proposal",
          backLabel: "← All Services",
        }
      : {
          eyebrow: "Identidad y Estrategia de Marca",
          title: "Una Marca Que Comunica Con Intención",
          subtitle:
            "Identidades visuales profesionales para negocios que quieren proyectar confianza, diferenciarse y presentarse con mayor solidez.",
          intro:
            "Este servicio es ideal para marcas que están comenzando, negocios que buscan una imagen más profesional o empresas que necesitan una identidad clara, consistente y fácil de aplicar en medios digitales, impresos y físicos. Cada propuesta se adapta a las necesidades y etapa del negocio.",
          identityTitle: "Identidad y Estrategia de Marca",
          identityDescription:
            "Creamos una base visual estratégica que se ve profesional, comunica con claridad y fortalece la percepción de tu marca ante tus clientes.",
          identityIncludesTitle: "Dependiendo del alcance del proyecto, podemos desarrollar:",
          identityIncludes: [
            "Diseño de logotipo",
            "Versiones del logotipo",
            "Paleta de colores",
            "Selección tipográfica",
            "Hoja de marca",
            "Materiales comerciales",
            "Aplicaciones de marca",
            "Dirección visual",
            "Archivos digitales listos para uso",
          ],
          redesignTitle: "Rediseño de Marca",
          redesignDescription:
            "Para negocios que ya cuentan con una marca, pero necesitan actualizarla, elevar su presentación o alinearla con la calidad y etapa actual del negocio sin perder su esencia.",
          redesignIncludesTitle: "Trabajamos en:",
          redesignIncludes: [
            "Rediseño o refinamiento de logotipo",
            "Actualización de paleta de colores",
            "Actualización tipográfica",
            "Hoja de marca",
            "Archivos digitales actualizados",
          ],
          additionalTitle: "Servicios Adicionales de Marca",
          additionalDescription:
            "Extendemos tu identidad visual a los puntos de contacto con tus clientes para mantener una imagen profesional y consistente en medios digitales, impresos y físicos.",
          additionalServices: [
            "Plantillas para redes sociales",
            "Tarjetas de presentación",
            "Menús",
            "Flyers",
            "Brochures",
            "Hojas membretadas",
            "Uniformes",
            "Señalética",
            "Empaques",
            "Gráficos para vehículos",
            "Merchandising",
          ],
          additionalNote:
            "Contáctanos para definir los materiales adecuados y recibir una propuesta adaptada a tu proyecto.",
          whyTitle: "Por Qué Los Negocios Confían Su Marca a Lienzo",
          whyItems: [
            {
              title: "Diseño Con Estrategia",
              body: "Cada decisión parte de tu audiencia, tus objetivos y lo que tu marca necesita comunicar, no solo de lo que se ve bien.",
            },
            {
              title: "Un Alcance Hecho Para Ti",
              body: "Definimos los entregables adecuados para tus necesidades, prioridades y etapa actual, enfocando la inversión en lo que tu negocio realmente va a utilizar.",
            },
            {
              title: "Archivos Que Sí Puedes Usar",
              body: "Preparamos los archivos digitales finales para su uso práctico y para que tu identidad pueda aplicarse con consistencia.",
            },
            {
              title: "Diseñada Para Puntos de Contacto Reales",
              body: "Consideramos dónde tus clientes encuentran tu marca: redes sociales, empaques, señalética, uniformes y materiales impresos.",
            },
          ],
          ctaTitle: "Construyamos Tu Marca",
          ctaBody:
            "Cuéntanos sobre tu negocio, qué necesitas y dónde debe presentarse tu marca. Definiremos el alcance ideal y prepararemos una propuesta personalizada.",
          ctaButton: "Solicitar Propuesta",
          backLabel: "← Todos los Servicios",
        };

  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="mt-32 px-6 pb-16">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <TransitionLink
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 transition-colors hover:text-black/70 dark:text-white/45 dark:hover:text-white/70"
            >
              {c.backLabel}
            </TransitionLink>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6]"
          >
            {c.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {c.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-2xl text-lg leading-relaxed text-black/65 dark:text-white/65"
          >
            {c.subtitle}
          </motion.p>
          <motion.div variants={fadeUp}>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#254566] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#1a3349]"
            >
              {c.ctaButton}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.p
            className="border-l-2 border-[#254566] pl-5 text-base leading-relaxed text-black/70 dark:text-white/70"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {c.intro}
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              title: c.identityTitle,
              description: c.identityDescription,
              includesTitle: c.identityIncludesTitle,
              includes: c.identityIncludes,
            },
            {
              title: c.redesignTitle,
              description: c.redesignDescription,
              includesTitle: c.redesignIncludesTitle,
              includes: c.redesignIncludes,
            },
          ].map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <SpotlightCard
                className="h-full rounded-2xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5"
                spotlightColor="rgba(37, 69, 102, 0.10)"
              >
                <h2 className="mb-3 font-display text-2xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {service.description}
                </p>
                <p className="mb-3 text-sm font-semibold">{service.includesTitle}</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 font-bold leading-none text-[#254566] dark:text-[#8fb2d6]">
                        ✓
                      </span>
                      <span className="text-black/75 dark:text-white/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-black/5 bg-black/[0.03] px-6 py-16 dark:border-white/5 dark:bg-white/[0.03]">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-3 font-display text-3xl font-bold tracking-tight"
          >
            {c.additionalTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-3xl text-sm leading-relaxed text-black/65 dark:text-white/65"
          >
            {c.additionalDescription}
          </motion.p>
          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {c.additionalServices.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#254566] dark:bg-[#8fb2d6]" />
                <span className="text-black/75 dark:text-white/75">{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            className="mt-8 border-l-2 border-[#254566] pl-4 text-sm italic leading-relaxed text-black/60 dark:text-white/60"
          >
            {c.additionalNote}
          </motion.p>
        </motion.div>
      </section>

      <section className="px-6 py-20">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-8 font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            {c.whyTitle}
          </motion.h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {c.whyItems.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <SpotlightCard
                  className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
                  spotlightColor="rgba(37, 69, 102, 0.10)"
                >
                  <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/65 dark:text-white/65">
                    {item.body}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-t border-black/5 bg-black/[0.03] px-6 py-20 text-center dark:border-white/5 dark:bg-white/[0.03]">
        <motion.div
          className="mx-auto max-w-xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            {c.ctaTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mb-8 text-base leading-relaxed text-black/65 dark:text-white/65"
          >
            {c.ctaBody}
          </motion.p>
          <motion.div variants={fadeUp}>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#254566] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#1a3349]"
            >
              {c.ctaButton}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  );
}
