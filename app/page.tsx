"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Prism from "@/components/Prism";
import SplitText from "@/components/SplitText";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const showHeroTitle = true;

  const teamMembers = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        name: t.home.teamMemberName(i + 1),
        role: t.home.teamRole,
        bio: t.home.teamBio,
      })),
    [t.home],
  );

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden bg-[#eae5d9] text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="px-6 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-black/10 shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:aspect-[16/9]">
            <div className="absolute inset-0">
              <Prism
                animationType="hover"
                timeScale={0.6}
                height={4.6}
                baseWidth={5.5}
                scale={3.9}
                hueShift={0}
                colorFrequency={1}
                noise={0}
                glow={1}
              />
            </div>
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/15"></div>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
              {showHeroTitle ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mx-auto flex w-full max-w-4xl justify-center"
                  >
                    <Image
                      src="/Lienzo - Logotipo W-01.svg"
                      alt={t.home.heroLogoAlt}
                      width={640}
                      height={220}
                      priority
                      className="h-auto w-[340px] sm:w-[520px] md:w-[720px]"
                    />
                  </motion.div>
                </>
              ) : null}
              <div className="absolute bottom-8 left-0 right-0 px-6 md:bottom-12">
                <SplitText
                  text={t.home.heroSubtitle}
                  className="mx-auto max-w-2xl text-base font-medium tracking-[0.06em] text-white/90 md:text-xl"
                  delay={35}
                  duration={0.35}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 pb-28 pt-10 text-center md:pt-14">
          <motion.article
            className="space-y-6"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">{t.home.whoTitle}</h2>
            <p className="text-lg text-black/80">
              {t.home.whoBody}
            </p>
          </motion.article>

          <motion.article
            className="space-y-6 mt-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold">{t.home.whatTitle}</h2>
            <p className="text-lg text-black/80">
              {t.home.whatBody}
            </p>
          </motion.article>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-white/55 p-8 md:p-12">
          <motion.div
            className="text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">{t.home.teamTitle}</h2>
            <p className="mt-4 text-black/65">
              {t.home.teamSubtitle}
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                className="rounded-2xl border border-black/10 bg-white/75 p-6 text-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-black/20 bg-black/5 text-[10px] uppercase tracking-[0.2em] text-black/50">
                  {t.home.photoLabel}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
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
