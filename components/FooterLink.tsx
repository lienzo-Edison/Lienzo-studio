"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import TransitionLink from "@/components/TransitionLink";

export default function FooterLink() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center justify-center md:bottom-6 md:left-6">
      <TransitionLink
        href="/privacy"
        className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-black/30 transition-colors duration-300 hover:text-[#a61b00] dark:text-white/20 dark:hover:text-[#ff8f7a]"
      >
        {t.privacy.footerLink}
      </TransitionLink>
    </div>
  );
}
