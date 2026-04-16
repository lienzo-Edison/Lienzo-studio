"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function LongsPeakPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const phoneNumber = "+1 (720) 990-7795";
  const email = language === "es" ? "ventas@lienzo.studio" : "sales@lienzo.studio";
  const whatsappLink = "https://wa.me/message/LVLY6STJJOM4K1";

  const trackContact = (method: "phone" | "whatsapp" | "email" | "instagram" | "facebook") => {
    if (typeof window === "undefined") return;

    const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Contact", { method, source: "longs-peak" });
    }

    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "contact", { method, source: "longs-peak" });
    }
  };

  return (
    <motion.main
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <section className="bg-[linear-gradient(180deg,#e9e1d3_0%,#f6f1e7_55%,#ffffff_100%)] px-6 pb-12 pt-24 md:px-10 md:pt-30 dark:bg-[linear-gradient(180deg,#161b20_0%,#111820_55%,#0f1418_100%)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#ece5d8] shadow-[0_28px_90px_rgba(0,0,0,0.14)] dark:border-white/10 dark:bg-[#151b21]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Image
                src="/campaigns/longs-peak/ad-1-pub.jpeg"
                alt={t.landing.adImageAlt}
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            <div className="relative">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/Logos/Lienzo-compacto-black.svg"
                  alt={t.home.heroLogoAlt}
                  width={200}
                  height={70}
                  className="w-[120px] dark:hidden"
                  priority
                />
                <Image
                  src="/Logos/Lienzo - completo-white.svg"
                  alt={t.home.heroLogoAlt}
                  width={220}
                  height={70}
                  className="hidden w-[160px] dark:block"
                  priority
                />
              </motion.div>

              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a61b00] dark:text-[#ff8f7a]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.04 }}
              >
                {t.landing.eyebrow}
              </motion.p>
              <motion.h1
                className="mt-5 max-w-3xl text-balance font-display text-4xl uppercase leading-[0.95] text-[#163a62] sm:text-5xl md:text-6xl dark:text-[#d8e6f2]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              >
                {t.landing.heroTitle}
              </motion.h1>
              <motion.p
                className="mt-6 max-w-2xl text-base leading-relaxed text-black/72 md:text-lg dark:text-white/72"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
              >
                {t.landing.heroBody}
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
              >
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#163a62]/15 bg-[#163a62] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1f4e83] dark:border-white/20 dark:bg-white dark:text-black dark:hover:bg-white/85"
                  onClick={() => trackContact("email")}
                >
                  {t.landing.primaryCta}
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition hover:border-black/35 hover:bg-black/5 dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/8"
                  onClick={() => trackContact("whatsapp")}
                >
                  {t.landing.contactWhatsappValue}
                </a>
                <TransitionLink
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:border-black/25 hover:bg-white dark:border-white/15 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
                >
                  {t.landing.homeCta}
                </TransitionLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-2 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#0f1418] px-7 py-10 text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-white/10 md:px-10">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              {t.landing.problemEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-white md:text-4xl">
              {t.landing.problemTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/72 md:text-base">
              {t.landing.problemIntro}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.landing.painPoints.map((point, idx) => (
              <motion.article
                key={point}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff8f7a]">
                  {t.landing.stepLabel} {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/72 md:text-base">{point}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-2 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            className="rounded-[1.9rem] border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#151c24]"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
              {t.landing.introEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-[#254566] dark:text-[#8fb2d6]">
              {t.landing.introTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/72 md:text-base dark:text-white/72">
              {t.landing.introBody}
            </p>
          </motion.article>

          <motion.article
            className="rounded-[1.9rem] border border-black/10 bg-[#f6f1e7] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#111820]"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
              {t.landing.whereEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-foreground">
              {t.landing.whereTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/72 md:text-base dark:text-white/72">
              {t.landing.whereBody}
            </p>
          </motion.article>
        </div>
      </section>

      <section className="px-6 pb-8 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
              {t.landing.whatEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-[#254566] md:text-4xl dark:text-[#8fb2d6]">
              {t.landing.whatTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/68 md:text-base dark:text-white/68">
              {t.landing.whatBody}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-10 pt-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
              {t.landing.servicesEyebrow}
            </p>
            <h2 className="font-display text-3xl uppercase text-foreground md:text-4xl">
              {t.landing.servicesTitle}
            </h2>
            <p className="max-w-2xl text-sm text-black/68 md:text-base dark:text-white/68">
              {t.landing.servicesIntro}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.landing.services.map((service, idx) => (
              <motion.article
                key={service.title}
                className="group rounded-[1.85rem] border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#151c24]"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
                  {t.landing.serviceLabel} {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
                  {service.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_55%,#eef2f4_100%)] p-7 shadow-[0_22px_50px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,#111820_0%,#151c24_55%,#1b2631_100%)] md:p-12">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
              {t.landing.integrationEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-foreground md:text-4xl">
              {t.landing.integrationTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
              {t.landing.integrationIntro}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.landing.integrationSteps.map((step, idx) => (
              <motion.article
                key={step.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
                  {t.landing.stepLabel} {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {step.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-22 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#101417] px-7 py-10 text-white shadow-[0_28px_90px_rgba(0,0,0,0.2)] dark:border-white/10 md:px-12 md:py-14">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              {t.landing.contactEyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase md:text-4xl">
              {t.landing.contactTitle}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              {t.landing.contactIntro}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <motion.a
              href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => trackContact("phone")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.landing.contactPhoneLabel}
              </p>
              <p className="mt-4 text-lg font-medium text-white">{phoneNumber}</p>
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              onClick={() => trackContact("email")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.landing.contactEmailLabel}
              </p>
              <p className="mt-4 text-lg font-medium text-white">{email}</p>
            </motion.a>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              onClick={() => trackContact("whatsapp")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.landing.contactWhatsappLabel}
              </p>
              <p className="mt-4 text-lg font-medium text-white">{t.landing.contactWhatsappValue}</p>
            </motion.a>

            <motion.div
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                {t.landing.contactSocialLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/_lienzostudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/8"
                  onClick={() => trackContact("instagram")}
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/Lienzo-Studio/61588545936546/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/8"
                  onClick={() => trackContact("facebook")}
                >
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
