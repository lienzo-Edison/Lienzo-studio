"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

const COLLAPSE_AFTER_MS = 2600;

type LanguageToggleProps = {
  compact?: boolean;
};

export default function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (compact) return;
    const timer = window.setTimeout(() => setCollapsed(true), COLLAPSE_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [compact]);

  const label = useMemo(() => (language === "en" ? t.toggle.en : t.toggle.es), [language, t]);

  return (
    <div
      className={
        compact
          ? "grid w-[92px] grid-cols-2 items-center rounded-full border border-black/15 bg-black/5 p-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/65 dark:border-white/25 dark:bg-white/10 dark:text-white/80"
          : "flex items-center gap-1 rounded-full border border-white/30 bg-black/75 p-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:text-xs dark:border-white/40 dark:bg-black/70 dark:text-white"
      }
      role="group"
      aria-label={t.toggle.ariaLabel}
      onMouseEnter={() => !compact && setCollapsed(false)}
      onFocus={() => !compact && setCollapsed(false)}
      onMouseLeave={() => !compact && setCollapsed(true)}
    >
      {!compact && collapsed ? (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-1 rounded-full px-2 py-1 text-white"
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
            className={`rounded-full px-2 py-1 text-center transition ${
              language === "en"
                ? compact
                  ? "bg-black/10 text-black dark:bg-white/20 dark:text-white"
                  : "bg-white/20 text-white"
                : compact
                  ? "text-black/45 hover:text-black dark:text-white/55 dark:hover:text-white"
                  : "text-white/80 hover:text-white"
            }`}
            aria-pressed={language === "en"}
          >
            {t.toggle.en}
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            className={`rounded-full px-2 py-1 text-center transition ${
              language === "es"
                ? compact
                  ? "bg-black/10 text-black dark:bg-white/20 dark:text-white"
                  : "bg-white/20 text-white"
                : compact
                  ? "text-black/45 hover:text-black dark:text-white/55 dark:hover:text-white"
                  : "text-white/80 hover:text-white"
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
