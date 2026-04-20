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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function BrandIdentityPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Brand Identity & Strategy",
          title: "First Impressions That Actually Work",
          subtitle:
            "From a single logo to a complete visual identity system — crafted for small and medium businesses in Northern Colorado and Mexico.",
          intro:
            "Your brand is more than a logo. It's the color your clients recognize, the font that feels like you, and the consistency that builds trust over time. We design identities from the ground up — professional, strategic, and ready to use across every platform, print material, and channel you operate on.",
          packagesTitle: "Choose Your Package",
          packagesSubtitle: "Contact us for pricing — we'll walk you through the right fit for your business.",
          packages: [
            {
              name: "Basic",
              tag: "New businesses",
              description: "Everything you need to launch with a professional visual identity.",
              features: [
                "Logo (full color + black & white)",
                "Color palette",
                "Typography",
                "Brand sheet (ready-to-use digital formats)",
                "Up to 3 revisions",
              ],
            },
            {
              name: "Standard",
              tag: "Growing brands",
              description: "A more complete identity with materials for real-world use.",
              features: [
                "Logo system (primary + 2 variations)",
                "Color palette",
                "Typography",
                "2 elements: Business Materials or Brand Applications",
                "Brand sheet",
              ],
            },
            {
              name: "Full",
              tag: "Established brands",
              description: "A fully developed, adaptable identity for brands ready to scale.",
              features: [
                "Complete custom logo system",
                "Color palette and typography",
                "3 Business Materials",
                "3 Brand Applications",
                "Full brand sheet",
              ],
            },
            {
              name: "Redesign",
              tag: "Existing brands",
              description: "Already have a brand but it's time for a refresh.",
              features: [
                "Updated logo (full color + black & white)",
                "Refreshed color palette",
                "Updated typography",
                "New brand sheet",
              ],
            },
          ],
          materialsTitle: "Business Materials Include",
          materialsList: ["Business cards", "Menus", "Flyers", "Brochures", "Letterheads", "And more"],
          applicationsTitle: "Brand Applications Include",
          applicationsList: ["Uniforms", "Signage", "Packaging", "Vehicle graphics", "Merchandise", "And more"],
          addonsTitle: "Add-Ons Available",
          addons: [
            "2 social media templates",
            "Additional Business Materials (per item)",
            "Additional Brand Applications (per item)",
            "Extra revision rounds",
          ],
          whyTitle: "Why Businesses in Northern Colorado Trust Lienzo",
          whyItems: [
            {
              title: "Strategy-First Design",
              body: "Every design decision is rooted in who your audience is, what they expect, and how your brand needs to communicate to earn their trust — not just what looks nice.",
            },
            {
              title: "Source Files, Always",
              body: "Every package includes your final files in formats you can actually use. Your brand belongs to you — not us.",
            },
            {
              title: "Affordable Without Compromise",
              body: "Our team structure lets us offer design quality that competes with large agencies at a price that makes sense for small and medium businesses in Colorado and Mexico.",
            },
            {
              title: "Built for Any Industry",
              body: "Bakeries, law firms, tech companies, construction, restaurants — we've designed for every type of business and we know how to capture what makes each one unique.",
            },
          ],
          ctaTitle: "Let's Build Your Brand",
          ctaBody:
            "Tell us about your business — where you are, what you do, and what you need. We'll recommend the right package and answer every question.",
          ctaButton: "Contact Us",
          backLabel: "← All Services",
        }
      : {
          eyebrow: "Identidad de Marca y Estrategia",
          title: "Primeras Impresiones Que Sí Funcionan",
          subtitle:
            "Desde un logo hasta un sistema de identidad visual completo — diseñado para pequeñas y medianas empresas en México y el norte de Colorado.",
          intro:
            "Tu marca es más que un logo. Es el color que tus clientes reconocen, la tipografía que te representa y la consistencia que genera confianza con el tiempo. Diseñamos identidades desde cero — profesionales, estratégicas y listas para usar en cualquier plataforma, material impreso y canal en el que operas.",
          packagesTitle: "Elige Tu Paquete",
          packagesSubtitle: "Contáctanos para precios — te orientamos sobre cuál es el ideal para tu negocio.",
          packages: [
            {
              name: "Básico",
              tag: "Nuevos negocios",
              description: "Todo lo que necesitas para lanzar con una identidad visual profesional.",
              features: [
                "Logo (color completo + blanco y negro)",
                "Paleta de color",
                "Tipografía",
                "Hoja de marca (formatos digitales listos para usar)",
                "Hasta 3 revisiones",
              ],
            },
            {
              name: "Estándar",
              tag: "Marcas en crecimiento",
              description: "Una identidad más completa con materiales para uso real.",
              features: [
                "Sistema de logotipos (principal + 2 variaciones)",
                "Paleta de color",
                "Tipografía",
                "2 elementos: Materiales de Negocio o Aplicaciones de Marca",
                "Hoja de marca",
              ],
            },
            {
              name: "Completo",
              tag: "Marcas establecidas",
              description: "Una identidad totalmente desarrollada y adaptable para marcas listas para escalar.",
              features: [
                "Sistema de logotipos completo y personalizado",
                "Paleta de color y tipografía",
                "3 Materiales de Negocio",
                "3 Aplicaciones de Marca",
                "Hoja de marca completa",
              ],
            },
            {
              name: "Rediseño",
              tag: "Marcas existentes",
              description: "¿Ya tienes marca pero es hora de renovarla?",
              features: [
                "Logo actualizado (color completo + blanco y negro)",
                "Paleta de color renovada",
                "Tipografía actualizada",
                "Nueva hoja de marca",
              ],
            },
          ],
          materialsTitle: "Materiales de Negocio Incluyen",
          materialsList: ["Tarjetas de presentación", "Menús", "Volantes", "Folletos", "Membretados", "Y más"],
          applicationsTitle: "Aplicaciones de Marca Incluyen",
          applicationsList: ["Uniformes", "Señalética", "Empaques", "Gráficos vehiculares", "Mercancía", "Y más"],
          addonsTitle: "Extras Disponibles",
          addons: [
            "2 plantillas para redes sociales",
            "Materiales de negocio adicionales (por pieza)",
            "Aplicaciones de marca adicionales (por pieza)",
            "Rondas de revisión adicionales",
          ],
          whyTitle: "Por Qué Empresas En México Confían En Lienzo Para Su Marca",
          whyItems: [
            {
              title: "Diseño Con Estrategia",
              body: "Cada decisión de diseño parte de quién es tu audiencia, qué esperan y cómo tu marca necesita comunicarse para ganar su confianza — no solo de lo que se ve bien.",
            },
            {
              title: "Archivos Finales, Siempre",
              body: "Todos los paquetes incluyen tus archivos finales en formatos que puedes usar. Tu marca te pertenece a ti — no a nosotros.",
            },
            {
              title: "Accesible Sin Comprometer Calidad",
              body: "Nuestra estructura de equipo nos permite ofrecer calidad de agencia grande a precios que tienen sentido para pequeñas y medianas empresas en México y Colorado.",
            },
            {
              title: "Para Cualquier Industria",
              body: "Panaderías, despachos, empresas tech, construcción, restaurantes — hemos diseñado para todo tipo de negocio y sabemos cómo capturar lo que hace especial a cada uno.",
            },
          ],
          ctaTitle: "Construyamos Tu Marca",
          ctaBody:
            "Cuéntanos sobre tu negocio — dónde estás, qué haces y qué necesitas. Te recomendamos el paquete ideal y respondemos cada pregunta.",
          ctaButton: "Contáctanos",
          backLabel: "← Todos los Servicios",
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
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 dark:text-white/45 hover:text-black/70 dark:hover:text-white/70 transition-colors"
            >
              {c.backLabel}
            </TransitionLink>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6] mb-4"
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
            className="text-lg text-black/65 dark:text-white/65 leading-relaxed max-w-2xl mb-8"
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

      {/* Intro */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.p
            className="text-base leading-relaxed text-black/70 dark:text-white/70 border-l-2 border-[#254566] pl-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {c.intro}
          </motion.p>
        </div>
      </section>

      {/* Packages */}
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
              {c.packagesTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/55 dark:text-white/55 mb-10"
            >
              {c.packagesSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {c.packages.map((pkg) => (
                <motion.div key={pkg.name} variants={fadeUp}>
                  <SpotlightCard
                    className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
                    spotlightColor="rgba(37, 69, 102, 0.10)"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <p className="font-display text-xl font-bold tracking-tight">{pkg.name}</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#254566] dark:text-[#8fb2d6] border border-[#254566]/20 dark:border-[#8fb2d6]/20 rounded-full px-2 py-0.5 whitespace-nowrap">
                        {pkg.tag}
                      </span>
                    </div>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-5 leading-relaxed">
                      {pkg.description}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-[#254566] dark:text-[#8fb2d6] font-bold leading-none">✓</span>
                          <span className="text-black/75 dark:text-white/75">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-black/8 dark:border-white/8">
                      <TransitionLink
                        href="/contact"
                        className="text-sm font-semibold text-[#254566] dark:text-[#8fb2d6] hover:text-[#1a3349] dark:hover:text-[#aecde8] transition-colors"
                      >
                        {c.ctaButton} →
                      </TransitionLink>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials + Applications + Add-ons */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 md:grid-cols-3">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeUp} className="font-display text-lg font-bold tracking-tight mb-4">
              {c.materialsTitle}
            </motion.h3>
            <ul className="space-y-2">
              {c.materialsList.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                  <span className="w-1 h-1 rounded-full bg-black/30 dark:bg-white/30 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeUp} className="font-display text-lg font-bold tracking-tight mb-4">
              {c.applicationsTitle}
            </motion.h3>
            <ul className="space-y-2">
              {c.applicationsList.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                  <span className="w-1 h-1 rounded-full bg-black/30 dark:bg-white/30 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeUp} className="font-display text-lg font-bold tracking-tight mb-4">
              {c.addonsTitle}
            </motion.h3>
            <ul className="space-y-2">
              {c.addons.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-[#254566] dark:text-[#8fb2d6] font-bold leading-none">+</span>
                  <span className="text-black/70 dark:text-white/70">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Lienzo */}
      <section className="px-6 py-20">
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
              {c.whyTitle}
            </motion.h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {c.whyItems.map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <SpotlightCard
                    className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
                    spotlightColor="rgba(37, 69, 102, 0.10)"
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
