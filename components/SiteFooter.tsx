"use client";

import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";

export default function SiteFooter() {
  const { language } = useLanguage();
  const label = language === "es" ? "Hecho con" : "Made with";
  const by = language === "es" ? "por" : "by";
  const services = language === "es" ? "Servicios" : "Services";
  const industries = language === "es" ? "Industrias" : "Industries";
  const locations = language === "es" ? "Ubicaciones" : "Locations";
  const about = language === "es" ? "Acerca" : "About";
  const bilingual = language === "es" ? "Marketing Bilingüe" : "Bilingual Marketing";

  return (
    <footer className="px-6 pb-24 pt-8 text-center md:pb-20">
      <div className="mx-auto max-w-6xl border-t border-black/10 pt-8 dark:border-white/10">
        <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium tracking-[0.08em] text-black/45 dark:text-white/45">
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
          className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45 dark:text-white/45"
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
      </div>
    </footer>
  );
}
