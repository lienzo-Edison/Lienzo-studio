"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import ColorBends from "@/components/ColorBends";
import SpotlightCard from "@/components/SpotlightCard";
import TransitionLink from "@/components/TransitionLink";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const teamMembers = useMemo(
    () => {
      const memberImages: Record<string, string> = {
        "Edison Carrillo": "/pfp/edy.jpeg",
        "Eduardo Carrillo": "/pfp/eduardo.jpeg",
        "Michelle Portillo": "/pfp/mich.jpeg",
        "Reymundo Torres": "/pfp/rey.jpeg",
      };

      return t.home.teamMembers.map((member) => ({
        name: member.name,
        role: member.role,
        image: memberImages[member.name] ?? null,
      }));
    },
    [t.home],
  );

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="px-4 pb-12 pt-24 sm:px-6 md:px-10 md:pt-28 2xl:px-12">
        <div className="mx-auto w-full max-w-[104rem]">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_90px_rgba(0,0,0,0.18)] dark:border-white/10">
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
                mouseInfluence={1.6}
                parallax={0.9}
                noise={0.1}
              />
            </div>
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10"></div>

            <div className="relative z-10 grid min-h-[60vh] grid-rows-[1fr_auto] px-7 py-10 md:min-h-[68vh] md:px-12 md:py-14">
              <div className="pointer-events-none flex items-center justify-center sm:items-start sm:pt-8 md:pt-10 lg:items-center lg:pt-0">
                <Image
                  src="/logos/logo-circular-02.svg"
                  alt={t.home.heroLogoAlt}
                  width={680}
                  height={680}
                  className="w-[260px] opacity-85 sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] 2xl:w-[560px] dark:hidden"
                  priority
                />
                <Image
                  src="/logos/logo-circular-02.svg"
                  alt={t.home.heroLogoAlt}
                  width={680}
                  height={680}
                  className="hidden w-[260px] opacity-85 sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] 2xl:w-[560px] dark:block"
                  priority
                />
              </div>
              <motion.p
                className="max-w-4xl text-balance font-display font-bold uppercase text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              >
                {t.home.heroSubtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Who + What Section */}
      <section className="relative px-6 pb-12 pt-6 md:pt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-20">
          <motion.article
            className="flex flex-col gap-6 border-b border-black/15 pb-12 pt-2 md:flex-row md:items-center md:justify-between md:gap-12 md:pt-4 dark:border-white/15"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display font-bold uppercase text-3xl text-[#254566] md:text-4xl dark:text-[#8fb2d6]"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {t.home.whoTitle}
            </motion.h2>
            <motion.p
              className="max-w-xl text-sm text-black/70 md:text-base dark:text-white/70"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              {t.home.whoBody}
            </motion.p>
          </motion.article>

          <motion.article
            className="flex flex-col gap-6 border-b border-black/15 pb-12 md:flex-row md:items-center md:justify-between md:gap-12 dark:border-white/15"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display font-bold uppercase text-3xl text-[#a61b00] md:text-4xl dark:text-[#ff8f7a]"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {t.home.whatTitle}
            </motion.h2>
            <motion.p
              className="max-w-xl text-sm text-black/70 md:text-base dark:text-white/70"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              {t.home.whatBody}
            </motion.p>
          </motion.article>
        </div>
      </section>

      {/* Locations Teaser Section */}
      <section className="relative px-6 pb-20 pt-12">
        <div className="mx-auto max-w-6xl">
          <SpotlightCard className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#151c24]">
            <div className="flex flex-col gap-10 p-8 md:flex-row md:items-center md:gap-16 md:p-12">
              <motion.div
                className="flex-1"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <p className="mb-3 text-xs font-display font-bold uppercase tracking-[0.3em] text-[#a61b00] dark:text-[#ff8f7a]">
                  {t.home.locationsEyebrow}
                </p>
                <h2 className="font-display font-bold uppercase text-3xl text-foreground md:text-4xl">
                  {t.home.locationsTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-base dark:text-white/60">
                  {t.home.locationsBody}
                </p>
                <motion.div
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                  className="mt-8"
                >
                  <TransitionLink
                    href="/locations"
                    className="inline-flex items-center justify-center rounded-full bg-[#a61b00] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c02200]"
                  >
                    {t.home.locationsCta}
                  </TransitionLink>
                </motion.div>
              </motion.div>

            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-6 pb-20 pt-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_55%,#eef2f4_100%)] p-8 md:p-12 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111820_0%,#151c24_55%,#1b2631_100%)]">
          <motion.div
            className="text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="mt-3 font-display font-bold uppercase text-3xl text-foreground md:text-4xl">
              {t.home.teamTitle}
            </h2>
            <p className="mt-4 text-sm text-black/65 md:text-base dark:text-white/60">
              {t.home.teamSubtitle}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <SpotlightCard className="rounded-[1.6rem] border border-black/10 bg-white p-6 text-left shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#151c24]">
                  <div className="relative z-[1] aspect-square w-full overflow-hidden rounded-[1.2rem] border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} profile`}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <h3 className="mt-6 text-lg font-bold font-display text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/55 dark:text-white/55">{member.role}</p>
                </SpotlightCard>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
