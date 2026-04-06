"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import ColorBends from "@/components/ColorBends";
import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function LaunchCampaignPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const services = useMemo(() => t.landing.services, [t.landing.services]);

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <section className="px-6 pb-10 pt-24 md:px-10 md:pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_90px_rgba(0,0,0,0.18)]">
            <div className="absolute inset-0">
              <ColorBends
                className="h-full w-full"
                rotation={0}
                speed={0.2}
                colors={["#a81a02", "#1d3653", "#2b3425"]}
                transparent
                autoRotate={0.1}
                scale={1}
                frequency={2}
                warpStrength={1}
                mouseInfluence={1.4}
                parallax={0.9}
                noise={0.1}
              />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/15"></div>

            <div className="relative z-10 flex min-h-[60vh] flex-col justify-between px-7 py-10 md:min-h-[68vh] md:px-12 md:py-14">
              <div className="max-w-2xl">
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {t.landing.badge}
                </motion.p>
                <motion.h1
                  className="mt-4 text-balance font-display text-4xl uppercase text-white sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                  {t.landing.heroTitle}
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-white/85 md:text-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {t.landing.heroSubtitle}
                </motion.p>
                <motion.p
                  className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  {t.landing.heroBody}
                </motion.p>
              </div>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <TransitionLink
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur transition hover:border-white/60 hover:bg-white/20"
                >
                  {t.landing.homeCta}
                </TransitionLink>
                <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  {t.landing.scrollHint}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl uppercase text-[#254566] md:text-4xl">
              {t.landing.servicesTitle}
            </h2>
            <p className="max-w-2xl text-sm text-black/65 md:text-base">
              {t.landing.servicesIntro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.article
                key={service.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-7"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00]">
                  {t.landing.serviceLabel} {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-display uppercase text-black md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70 md:text-base">
                  {service.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 pt-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#f6f1e7] px-7 py-10 md:px-12 md:py-14">
          <motion.div
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/60">
                {t.landing.offerEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl uppercase text-black md:text-4xl">
                {t.landing.offerTitle}
              </h2>
              <p className="mt-4 text-sm text-black/70 md:text-base">
                {t.landing.offerBody}
              </p>
            </div>
            <TransitionLink
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:border-black/40 hover:bg-black hover:text-white"
            >
              {t.landing.secondaryCta}
            </TransitionLink>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
