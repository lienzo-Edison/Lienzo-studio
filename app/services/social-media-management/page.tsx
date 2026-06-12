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

export default function SocialMediaPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Social Media Content System",
          title: "A More Professional, Consistent Social Presence",
          subtitle:
            "Strategic visual content designed to communicate clearly, build trust, and keep your audience connected to your business.",
          intro:
            "Every business has different goals. Our social media services are customized according to posting frequency, content type, visual style, business stage, and creative needs.",
          setupTitle: "Initial Setup",
          setupDescription:
            "Ideal for businesses that want to manage their own social media but need a clearer, more professional visual and strategic foundation that is easy to maintain.",
          setupIncludesTitle: "We build your foundation with:",
          setupIncludes: [
            "Content strategy",
            "Custom templates",
            "Visual guide",
            "Sample content calendar",
            "Creative direction aligned with your brand",
          ],
          monthlyTitle: "Monthly Social Media Content",
          monthlyDescription:
            "Monthly content designed to keep your brand active, professional, and consistent. The scope is tailored to the amount and type of content your business needs.",
          monthlyIncludesTitle: "Your customized content system can include:",
          monthlyIncludes: [
            "Static posts",
            "Carousels",
            "Reels or short videos",
            "Stories",
            "Monthly content planning",
            "Visual design",
            "Post scheduling",
            "Profile and cover photo updates",
            "Target audience identification",
            "Social media account creation, if needed",
          ],
          allIncludedTitle: "The Monthly Service Includes",
          allIncludedDescription:
            "Before we begin, we define the right scope for your rhythm, goals, and capacity for growth so the content has a clear direction and professional execution.",
          allIncluded: [
            "Monthly content capture",
            "Content strategy and planning",
            "Post scheduling",
            "Quarterly profile and cover photo updates",
            "Target audience identification",
            "Account creation, if needed",
          ],
          whyTitle: "Why Businesses Choose Lienzo",
          whyItems: [
            {
              title: "Customized Scope",
              body: "Frequency and content mix are defined around your real goals and resources, rather than a preset number of posts.",
            },
            {
              title: "Strategy and Execution Together",
              body: "Planning, creative direction, design, content capture, and scheduling work as one connected system.",
            },
            {
              title: "Aligned With Your Brand",
              body: "Every piece follows a visual direction designed to make your presence feel recognizable, consistent, and professional.",
            },
            {
              title: "Built to Grow With You",
              body: "The service adapts as your business, audience, and content needs evolve over time.",
            },
          ],
          ctaTitle: "Ready for a Clearer Content System?",
          ctaBody:
            "Tell us about your business, current social presence, and goals. We’ll recommend the right starting point and prepare a personalized scope.",
          ctaButton: "Request a Proposal",
          backLabel: "← All Services",
        }
      : {
          eyebrow: "Sistema de Contenido para Redes Sociales",
          title: "Una Presencia Más Profesional y Consistente",
          subtitle:
            "Contenido visual estratégico para comunicar mejor, generar confianza y mantener activa la relación con tu audiencia.",
          intro:
            "Cada negocio tiene objetivos diferentes. Nuestros servicios de redes sociales se personalizan según la frecuencia de publicación, tipo de contenido, estilo visual, etapa del negocio y necesidades creativas.",
          setupTitle: "Configuración Inicial",
          setupDescription:
            "Ideal para negocios que quieren administrar sus propias redes sociales, pero necesitan una base visual y estratégica más clara, profesional y fácil de mantener.",
          setupIncludesTitle: "Creamos tu base con:",
          setupIncludes: [
            "Estrategia de contenido",
            "Plantillas personalizadas",
            "Guía visual",
            "Calendario de contenido de muestra",
            "Dirección creativa alineada a la marca",
          ],
          monthlyTitle: "Contenido Mensual para Redes Sociales",
          monthlyDescription:
            "Contenido mensual diseñado para mantener tu marca activa, profesional y consistente. El alcance se adapta a la cantidad y tipo de contenido que necesita tu negocio.",
          monthlyIncludesTitle: "Tu sistema de contenido personalizado puede incluir:",
          monthlyIncludes: [
            "Posts estáticos",
            "Carruseles",
            "Reels o videos cortos",
            "Historias",
            "Planeación mensual de contenido",
            "Diseño visual",
            "Programación de publicaciones",
            "Actualizaciones de foto de perfil y portada",
            "Identificación de audiencia objetivo",
            "Creación de cuentas de redes sociales, si es necesario",
          ],
          allIncludedTitle: "El Servicio Mensual Incluye",
          allIncludedDescription:
            "Antes de iniciar, definimos el alcance ideal para el ritmo, objetivos y capacidad de crecimiento de tu negocio, asegurando una dirección clara y una ejecución profesional.",
          allIncluded: [
            "Toma de contenido mensual",
            "Estrategia y planificación de contenido",
            "Programación de publicaciones",
            "Actualización trimestral de foto de perfil y portada",
            "Identificación de audiencia objetivo",
            "Creación de cuentas, si es necesario",
          ],
          whyTitle: "Por Qué Los Negocios Eligen Lienzo",
          whyItems: [
            {
              title: "Alcance Personalizado",
              body: "Definimos la frecuencia y mezcla de contenido según tus objetivos y recursos reales, no por una cantidad predeterminada de publicaciones.",
            },
            {
              title: "Estrategia y Ejecución Unidas",
              body: "Planeación, dirección creativa, diseño, toma de contenido y programación funcionan como un solo sistema.",
            },
            {
              title: "Alineado Con Tu Marca",
              body: "Cada pieza sigue una dirección visual para que tu presencia se sienta reconocible, consistente y profesional.",
            },
            {
              title: "Preparado Para Crecer Contigo",
              body: "El servicio se adapta conforme evolucionan tu negocio, audiencia y necesidades de contenido.",
            },
          ],
          ctaTitle: "¿Listo Para Tener un Sistema de Contenido Más Claro?",
          ctaBody:
            "Cuéntanos sobre tu negocio, tu presencia actual y tus objetivos. Te recomendaremos el mejor punto de partida y prepararemos un alcance personalizado.",
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
            className="mb-4 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]"
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
              className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c02200]"
            >
              {c.ctaButton}
            </TransitionLink>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.p
            className="border-l-2 border-[#a61b00] pl-5 text-base leading-relaxed text-black/70 dark:text-white/70"
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
              title: c.setupTitle,
              description: c.setupDescription,
              includesTitle: c.setupIncludesTitle,
              includes: c.setupIncludes,
            },
            {
              title: c.monthlyTitle,
              description: c.monthlyDescription,
              includesTitle: c.monthlyIncludesTitle,
              includes: c.monthlyIncludes,
            },
          ].map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <SpotlightCard
                className="h-full rounded-2xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5"
                spotlightColor="rgba(166, 27, 0, 0.10)"
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
                      <span className="mt-0.5 font-bold leading-none text-[#a61b00] dark:text-[#ff8f7a]">
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
            {c.allIncludedTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-3xl text-sm leading-relaxed text-black/65 dark:text-white/65"
          >
            {c.allIncludedDescription}
          </motion.p>
          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2"
          >
            {c.allIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 font-bold leading-none text-[#254566] dark:text-[#8fb2d6]">
                  ✓
                </span>
                <span className="text-black/75 dark:text-white/75">{item}</span>
              </li>
            ))}
          </motion.ul>
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
                  spotlightColor="rgba(166, 27, 0, 0.10)"
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
