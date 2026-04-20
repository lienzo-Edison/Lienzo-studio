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

export default function SocialMediaPage() {
  const { language } = useLanguage();

  const c =
    language === "en"
      ? {
          eyebrow: "Social Media Management",
          title: "Your Business, Showing Up Every Day",
          subtitle:
            "Professional content, consistent posting, and community engagement — fully handled for small businesses in Northern Colorado and Mexico.",
          intro:
            "Managing social media takes time you don't have. We handle strategy, content creation, scheduling, and audience engagement so your brand stays visible and professional on Instagram and Facebook every single day — while you focus on running your business.",
          plansTitle: "Monthly Plans",
          plansSubtitle: "No contracts. Contact us for pricing — we'll find the right fit for your business.",
          plans: [
            {
              name: "Starter",
              posts: "16 posts / month",
              description: "Perfect for businesses just starting their social media presence.",
              features: ["4 static posts", "4 reels or short videos", "8 stories"],
            },
            {
              name: "Growth",
              posts: "22 posts / month",
              description: "For brands ready to post more consistently and grow their audience.",
              features: ["8 static posts", "6 reels or short videos", "8 stories"],
            },
            {
              name: "Premium",
              posts: "35 posts / month",
              description: "Maximum presence for businesses that want to lead their market.",
              features: ["13 static posts", "10 reels or short videos", "12 stories"],
            },
          ],
          allIncludedTitle: "Every Plan Includes",
          allIncluded: [
            "Monthly content production",
            "Content strategy and planning",
            "Post scheduling",
            "Quarterly profile and cover photo updates",
            "Target audience identification",
            "Social media account creation (if needed)",
          ],
          setupTitle: "Need a Foundation First?",
          setupDescription:
            "Our Initial Setup is ideal for businesses that want to manage their own social media but need a professional starting point.",
          setupIncludes: [
            "Custom content strategy",
            "Branded post templates",
            "Visual design guidelines",
            "Sample content calendar",
          ],
          addonsTitle: "Add-Ons Available",
          addons: [
            "4 extra static posts",
            "4 extra video posts (vertical format)",
          ],
          whyTitle: "Why Northern Colorado Businesses Choose Lienzo",
          whyItems: [
            {
              title: "Bilingual Team",
              body: "We work in English and Spanish — the right partner for businesses serving diverse communities across Colorado and Mexico.",
            },
            {
              title: "Local to Fort Lupton, CO",
              body: "We're in your market. We understand Northern Colorado — Fort Lupton, Greeley, Longmont, Brighton — and we create content that actually speaks to your local audience.",
            },
            {
              title: "Agency Quality, Accessible Price",
              body: "Denver agencies charge $2,000–$5,000/month for social media. Our team structure in Mexico lets us deliver the same quality at a price that works for small businesses.",
            },
            {
              title: "Any Industry",
              body: "Restaurants, retail, real estate, construction, healthcare — we've done it all. We adapt our strategy and content style to what works for your specific market.",
            },
          ],
          ctaTitle: "Ready to Get Social Media Off Your Plate?",
          ctaBody:
            "Call us, send a WhatsApp, or email us. We'll talk through your business and tell you exactly what plan makes sense.",
          ctaButton: "Contact Us",
          backLabel: "← All Services",
        }
      : {
          eyebrow: "Manejo de Redes Sociales",
          title: "Tu Negocio, Presente Todos Los Días",
          subtitle:
            "Contenido profesional, publicaciones consistentes y gestión de comunidad — completamente a cargo de nosotros para negocios en México y el norte de Colorado.",
          intro:
            "Gestionar redes sociales toma tiempo que no tienes. Nosotros nos encargamos de la estrategia, creación de contenido, programación y atención a tu comunidad para que tu marca se mantenga visible y profesional en Instagram y Facebook todos los días — mientras tú te concentras en tu negocio.",
          plansTitle: "Planes Mensuales",
          plansSubtitle: "Sin contratos. Contáctanos para precios — encontramos el plan ideal para tu negocio.",
          plans: [
            {
              name: "Starter",
              posts: "16 publicaciones / mes",
              description: "Ideal para negocios que comienzan su presencia en redes sociales.",
              features: ["4 posts estáticos", "4 reels o videos cortos", "8 historias"],
            },
            {
              name: "Growth",
              posts: "22 publicaciones / mes",
              description: "Para marcas listas para publicar con más consistencia y crecer su audiencia.",
              features: ["8 posts estáticos", "6 reels o videos cortos", "8 historias"],
            },
            {
              name: "Premium",
              posts: "35 publicaciones / mes",
              description: "Máxima presencia para negocios que quieren liderar su mercado.",
              features: ["13 posts estáticos", "10 reels o videos cortos", "12 historias"],
            },
          ],
          allIncludedTitle: "Todos los Planes Incluyen",
          allIncluded: [
            "Producción mensual de contenido",
            "Estrategia y planeación de contenido",
            "Programación de publicaciones",
            "Actualización trimestral de foto de perfil y portada",
            "Identificación de audiencia objetivo",
            "Creación de cuenta en redes sociales (si se necesita)",
          ],
          setupTitle: "¿Necesitas una Base Primero?",
          setupDescription:
            "Nuestra Configuración Inicial es ideal para negocios que quieren manejar sus propias redes sociales pero necesitan un punto de partida profesional.",
          setupIncludes: [
            "Estrategia de contenido personalizada",
            "Plantillas de publicación con tu marca",
            "Guía de diseño visual",
            "Calendario de contenido de muestra",
          ],
          addonsTitle: "Extras Disponibles",
          addons: [
            "4 publicaciones estáticas adicionales",
            "4 publicaciones en video adicionales (formato vertical)",
          ],
          whyTitle: "Por Qué Negocios En México Eligen Lienzo",
          whyItems: [
            {
              title: "Equipo Bilingüe",
              body: "Trabajamos en inglés y español — el socio ideal para negocios que atienden comunidades diversas en México y Colorado.",
            },
            {
              title: "Con Base en Durango, México",
              body: "Somos locales. Entendemos el mercado mexicano y creamos contenido que habla directamente a tu audiencia, sin importar la ciudad.",
            },
            {
              title: "Calidad de Agencia, Precio Accesible",
              body: "Ofrecemos el mismo nivel de calidad que las grandes agencias a precios que los pequeños y medianos negocios pueden pagar — sin comprometer resultados.",
            },
            {
              title: "Cualquier Industria",
              body: "Restaurantes, comercio, bienes raíces, construcción, salud — lo hemos hecho todo. Adaptamos estrategia y estilo de contenido a lo que funciona para tu negocio específico.",
            },
          ],
          ctaTitle: "¿Listo Para Delegar Tus Redes Sociales?",
          ctaBody:
            "Llámanos, mándanos un WhatsApp o un correo. Platicamos sobre tu negocio y te decimos exactamente qué plan tiene sentido para ti.",
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
            className="text-lg text-black/65 dark:text-white/65 leading-relaxed max-w-2xl mb-8"
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

      {/* Intro */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <motion.p
            className="text-base leading-relaxed text-black/70 dark:text-white/70 border-l-2 border-[#a61b00] pl-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {c.intro}
          </motion.p>
        </div>
      </section>

      {/* Plans */}
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
              {c.plansTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm text-black/55 dark:text-white/55 mb-10"
            >
              {c.plansSubtitle}
            </motion.p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {c.plans.map((plan) => (
                <motion.div key={plan.name} variants={fadeUp}>
                  <SpotlightCard
                    className="h-full rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/5"
                    spotlightColor="rgba(166, 27, 0, 0.10)"
                  >
                    <p className="font-display text-xl font-bold tracking-tight mb-1">{plan.name}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a] mb-3">
                      {plan.posts}
                    </p>
                    <p className="text-sm text-black/60 dark:text-white/60 mb-5 leading-relaxed">
                      {plan.description}
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-[#a61b00] dark:text-[#ff8f7a] font-bold leading-none">✓</span>
                          <span className="text-black/75 dark:text-white/75">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-black/8 dark:border-white/8">
                      <TransitionLink
                        href="/contact"
                        className="text-sm font-semibold text-[#a61b00] dark:text-[#ff8f7a] hover:text-[#c02200] dark:hover:text-[#ffb09a] transition-colors"
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

      {/* All Included + Add-ons */}
      <section className="px-6 py-16 bg-black/[0.03] dark:bg-white/[0.03] border-y border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* All plans include */}
          <motion.div
            className="md:col-span-2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-xl font-bold tracking-tight mb-5"
            >
              {c.allIncludedTitle}
            </motion.h2>
            <ul className="space-y-3">
              {c.allIncluded.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-[#254566] dark:text-[#8fb2d6] font-bold leading-none">✓</span>
                  <span className="text-black/75 dark:text-white/75">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-xl font-bold tracking-tight mb-5"
            >
              {c.addonsTitle}
            </motion.h2>
            <ul className="space-y-3">
              {c.addons.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 text-[#a61b00] dark:text-[#ff8f7a] font-bold leading-none">+</span>
                  <span className="text-black/75 dark:text-white/75">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Initial Setup */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="rounded-2xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-display font-bold uppercase tracking-[0.3em] text-[#254566] dark:text-[#8fb2d6] mb-3">
              {language === "en" ? "Also Available" : "También Disponible"}
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-3">{c.setupTitle}</h2>
            <p className="text-sm text-black/65 dark:text-white/65 leading-relaxed mb-6 max-w-xl">
              {c.setupDescription}
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.setupIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-[#254566] dark:text-[#8fb2d6] font-bold leading-none">✓</span>
                  <span className="text-black/75 dark:text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Lienzo */}
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
