"use client";

import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import { googleBusinessProfileUrl } from "@/lib/schema";

export default function SiteFooter() {
  const { language } = useLanguage();
  const label = language === "es" ? "Hecho con" : "Made with";
  const by = language === "es" ? "por" : "by";
  const services = language === "es" ? "Servicios" : "Services";
  const industries = language === "es" ? "Industrias" : "Industries";
  const locations = language === "es" ? "Ubicaciones" : "Locations";
  const about = language === "es" ? "Acerca" : "About";
  const bilingual = language === "es" ? "Marketing Bilingüe" : "Bilingual Marketing";
  const googleProfile = language === "es" ? "Perfil de Google" : "Google Profile";
  const phoneNumber = "+1 (720) 990-7795";
  const phoneHref = `tel:${phoneNumber.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="px-6 pb-24 pt-8 text-center md:pb-20">
      <div className="mx-auto max-w-6xl border-t border-black/10 pt-8 dark:border-white/10">
        <address className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold not-italic text-black/65 dark:text-white/65">
          <TransitionLink
            href="/"
            className="font-display font-bold transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]"
          >
            Lienzo Studio
          </TransitionLink>
          <span aria-hidden="true" className="text-black/25 dark:text-white/25">
            |
          </span>
          <a
            href={phoneHref}
            className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]"
          >
            {phoneNumber}
          </a>
        </address>
        <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium tracking-[0.08em] text-black/60 dark:text-white/65">
          <span>{label}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-[#a61b00] dark:text-[#ff8f7a]"
            aria-label={language === "es" ? "amor" : "love"}
            role="img"
          >
            <path d="M12 21s-7.2-4.5-9.5-8.8C.5 8.5 2.5 4 6.8 4c2.2 0 3.7 1.2 5.2 3 1.5-1.8 3-3 5.2-3 4.3 0 6.3 4.5 4.3 8.2C19.2 16.5 12 21 12 21Z" />
          </svg>
          <span>{by}</span>
          <TransitionLink
            href="/"
            className="font-display font-bold text-black/65 transition hover:text-[#a61b00] dark:text-white/65 dark:hover:text-[#ff8f7a]"
          >
            Lienzo Studio
          </TransitionLink>
        </p>
        <nav
          aria-label={language === "es" ? "Enlaces SEO" : "SEO links"}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/65 dark:text-white/65"
        >
          <TransitionLink href="/services" className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]">
            {services}
          </TransitionLink>
          <TransitionLink href="/industries" className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]">
            {industries}
          </TransitionLink>
          <TransitionLink href="/locations" className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]">
            {locations}
          </TransitionLink>
          <TransitionLink href="/about" className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]">
            {about}
          </TransitionLink>
          <TransitionLink href="/services/bilingual-marketing-agency" className="transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a]">
            {bilingual}
          </TransitionLink>
        </nav>
        <div className="mt-4 flex justify-center md:justify-end">
          <a
            href={googleBusinessProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={
              language === "es"
                ? "Lienzo Studio en Google"
                : "Lienzo Studio on Google"
            }
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/60 transition hover:text-[#a61b00] dark:text-white/65 dark:hover:text-[#ff8f7a]"
          >
            {googleProfile}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
