"use client";

import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";

export default function SiteFooter() {
  const { language } = useLanguage();
  const label = language === "es" ? "Hecho con" : "Made with";
  const by = language === "es" ? "por" : "by";

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
      </div>
    </footer>
  );
}
