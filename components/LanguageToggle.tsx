"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

const COLLAPSE_AFTER_MS = 2600;

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setCollapsed(true), COLLAPSE_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const label = useMemo(() => (language === "en" ? t.toggle.en : t.toggle.es), [language, t]);

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/20 bg-black/35 p-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 md:text-xs dark:border-white/30 dark:bg-white/10 dark:text-white"
      role="group"
      aria-label={t.toggle.ariaLabel}
      onMouseEnter={() => setCollapsed(false)}
      onFocus={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      {collapsed ? (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-1 rounded-full px-2 py-1 text-white/80 transition hover:text-white"
          aria-expanded={!collapsed}
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-white/70" aria-hidden="true" />
          <span>{label}</span>
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-2 py-1 transition ${
              language === "en" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
            aria-pressed={language === "en"}
          >
            {t.toggle.en}
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-2 py-1 transition ${
              language === "es" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
            aria-pressed={language === "es"}
          >
            {t.toggle.es}
          </button>
        </>
      )}
    </div>
  );
}
