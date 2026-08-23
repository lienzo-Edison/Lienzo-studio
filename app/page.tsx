"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import DeferredColorBends from "@/components/DeferredColorBends";
import SpotlightCard from "@/components/SpotlightCard";
import TransitionLink from "@/components/TransitionLink";
import ServicesSection from "@/components/ServicesSection";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

const lightHeroColors = ["#f6f1e7", "#e6e1d5", "#173957", "#a61b00"];
const darkHeroColors = ["#a81a02", "#1d3653", "#2b3425"];

const subscribeToDocumentTheme = (onStoreChange: () => void) => {
  if (typeof document === "undefined") return () => {};

  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });

  return () => observer.disconnect();
};

const getDocumentThemeSnapshot = () =>
  typeof document !== "undefined" && document.documentElement.classList.contains("dark");

const getServerThemeSnapshot = () => false;

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const isDarkTheme = useSyncExternalStore(
    subscribeToDocumentTheme,
    getDocumentThemeSnapshot,
    getServerThemeSnapshot,
  );

  const teamMembers = useMemo(
    () => {
      const memberImages: Record<string, string> = {
        "Edison Carrillo": "/pfp/edy.jpeg",
        "Eduardo Carrillo": "/pfp/eduardo.jpeg",
        "Michelle Portillo": "/pfp/mich.jpeg",
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 pb-12 pt-24 sm:px-6 md:px-10 md:pt-28 2xl:px-12">
        <div className="mx-auto w-full max-w-[104rem]">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_90px_rgba(0,0,0,0.18)] dark:border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(166,27,0,0.88)_0%,transparent_24%),radial-gradient(circle_at_76%_28%,rgba(23,57,87,0.98)_0%,transparent_46%),linear-gradient(135deg,#f6f1e7_0%,#f6f1e7_52%,#e6e1d5_100%)] dark:bg-[radial-gradient(circle_at_18%_20%,#a81a02_0%,transparent_42%),radial-gradient(circle_at_78%_28%,#1d3653_0%,transparent_45%),linear-gradient(135deg,#2b3425_0%,#111820_100%)]">
              <DeferredColorBends
                className="h-full w-full"
                rotation={0}
                speed={0.2}
                colors={isDarkTheme ? darkHeroColors : lightHeroColors}
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
            <div className="absolute inset-0 bg-white/5 dark:bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#f6f1e7]/80 via-transparent to-white/10 dark:from-black/80 dark:via-black/50 dark:to-black/30"></div>

            <div className="relative z-10 grid min-h-[60vh] grid-rows-[1fr_auto] px-7 py-10 md:min-h-[68vh] md:px-12 md:py-14">
              <div className="pointer-events-none flex items-center justify-center sm:items-start sm:pt-8 md:pt-10 lg:items-center lg:pt-0">
                <Image
                  src={isDarkTheme ? "/logos/logo-circular-02.svg" : "/logos/logo-circular-01.svg"}
                  alt={t.home.heroLogoAlt}
                  width={680}
                  height={680}
                  className="w-[260px] opacity-90 sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] 2xl:w-[560px]"
                  priority
                />
              </div>
              <h1 className="max-w-4xl text-balance font-display font-bold uppercase text-3xl leading-tight text-[#18344f] sm:text-4xl md:text-5xl dark:text-white">
                {t.home.heroSubtitle}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Who + What Section */}
      <section className="relative px-6 pb-12 pt-6 md:pt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-20">
          <article className="flex flex-col gap-6 border-b border-black/15 pb-12 pt-2 md:flex-row md:items-center md:justify-between md:gap-12 md:pt-4 dark:border-white/15">
            <h2 className="font-display font-bold uppercase text-3xl text-[#254566] md:text-4xl dark:text-[#8fb2d6]">
              {t.home.whoTitle}
            </h2>
            <p className="max-w-xl text-sm text-black/70 md:text-base dark:text-white/70">
              {t.home.whoBody}
            </p>
          </article>

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

      <ServicesSection />

      {/* Audience Segments Section */}
      <section className="relative px-6 pb-12 pt-2 md:pt-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="font-display font-bold uppercase text-3xl text-foreground md:text-4xl">
              {t.home.audiencesTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-black/60 md:text-base dark:text-white/60">
              {t.home.audiencesIntro}
            </p>
          </motion.div>

          <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
            {t.home.audiences.map((audience, idx) => {
              const eyebrowClass =
                idx === 0
                  ? "text-[#254566] dark:text-[#8fb2d6]"
                  : idx === 1
                    ? "text-[#a61b00] dark:text-[#ff8f7a]"
                    : "text-[#2b3425] dark:text-[#8db08a]";
              const ctaClass =
                idx === 0
                  ? "border-[#254566] text-[#254566] hover:bg-[#254566] hover:text-white dark:border-[#8fb2d6] dark:text-[#8fb2d6] dark:hover:bg-[#8fb2d6] dark:hover:text-[#111820]"
                  : idx === 1
                    ? "border-[#a61b00] text-[#a61b00] hover:bg-[#a61b00] hover:text-white dark:border-[#ff8f7a] dark:text-[#ff8f7a] dark:hover:bg-[#ff8f7a] dark:hover:text-[#111820]"
                    : "border-[#2b3425] text-[#2b3425] hover:bg-[#2b3425] hover:text-white dark:border-[#8db08a] dark:text-[#8db08a] dark:hover:bg-[#8db08a] dark:hover:text-[#111820]";

              const audienceImage: {
                src: string;
                alt: string;
                credit: { href: string; label: string } | null;
              } =
                idx === 0
                  ? { src: "/projects/P4/revista_sma_4.jpg", alt: "Revista San Miguel de Allende editorial design", credit: null }
                  : idx === 1
                    ? { src: "/projects/P1/WicFix_7.jpg", alt: "WicFix technology brand system", credit: null }
                    : { src: "/projects/P3/Dulce_01.webp", alt: "Dulce Michi brand identity", credit: null };

              return (
                <motion.article
                  key={audience.eyebrow}
                  className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:gap-16"
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={sectionViewport}
                  transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.08 }}
                >
                  <div className="flex flex-1 flex-col gap-5">
                    <p className={`text-xs font-display font-bold uppercase tracking-[0.28em] ${eyebrowClass}`}>
                      {audience.eyebrow}
                    </p>
                    <h3 className="font-display font-bold uppercase text-2xl text-foreground md:text-3xl">
                      {audience.headline}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/65 md:text-base dark:text-white/60">
                      {audience.body}
                    </p>
                    <TransitionLink
                      href="/services"
                      className={`inline-flex w-fit items-center justify-center rounded-full border px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${ctaClass}`}
                    >
                      {audience.cta}
                    </TransitionLink>
                  </div>

                  {audienceImage && (
                    <div className="relative w-full overflow-hidden rounded-2xl md:w-[44%]">
                      <div className="group relative h-64 md:h-80">
                        <Image
                          src={audienceImage.src}
                          alt={audienceImage.alt}
                          fill
                          sizes="(min-width: 768px) 44vw, 100vw"
                          className="object-cover object-center"
                        />
                        {audienceImage.credit && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <a
                              href={audienceImage.credit.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-white/70 transition-colors hover:text-white"
                            >
                              {audienceImage.credit.label}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
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

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
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
    </main>
  );
}
