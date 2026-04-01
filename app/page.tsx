"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import ColorBends from "@/components/ColorBends";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const teamMembers = useMemo(
    () =>
      t.home.teamMembers.map((member) => ({
        name: member.name,
        role: member.role,
        bio: t.home.teamBio,
      })),
    [t.home],
  );

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="px-6 pb-12 pt-24 md:px-10 md:pt-28">
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
                  src="/Logos/Lienzo - completo-white.svg"
                  alt={t.home.heroLogoAlt}
                  width={680}
                  height={220}
                  className="w-[340px] opacity-85 sm:w-[460px] md:w-[620px] lg:w-[720px]"
                  priority
                />
              </div>
              <motion.p
                className="max-w-3xl text-balance font-display font-bold uppercase text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
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
            className="flex flex-col gap-6 border-b border-black/15 pb-12 pt-2 md:flex-row md:items-center md:justify-between md:gap-12 md:pt-4"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display font-bold uppercase text-3xl text-[#254566] md:text-4xl"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {t.home.whoTitle}
            </motion.h2>
            <motion.p
              className="max-w-xl text-sm text-black/70 md:text-base"
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
            className="flex flex-col gap-6 border-b border-black/15 pb-12 md:flex-row md:items-center md:justify-between md:gap-12"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <motion.h2
              className="font-display font-bold uppercase text-3xl text-[#a61b00] md:text-4xl"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {t.home.whatTitle}
            </motion.h2>
            <motion.p
              className="max-w-xl text-sm text-black/70 md:text-base"
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

      {/* Team Section */}
      <section className="relative px-6 pb-20 pt-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
          <motion.div
            className="text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="mt-3 font-display font-bold uppercase text-3xl text-black md:text-4xl">
              {t.home.teamTitle}
            </h2>
            <p className="mt-4 text-sm text-black/65 md:text-base">
              {t.home.teamSubtitle}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                className="rounded-[1.6rem] border border-black/10 bg-white p-6 text-left shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <div className="h-[180px] overflow-hidden rounded-[1.2rem] border border-black/10 bg-white/70">
                  <Image
                    src="/projects/sample-portfolio.jpg"
                    alt={`${member.name} profile placeholder`}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
            <h3 className="mt-6 text-lg font-bold font-display text-black">
              {member.name}
            </h3>
                <p className="mt-1 text-sm text-black/55">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
