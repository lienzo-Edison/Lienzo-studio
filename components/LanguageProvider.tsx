"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";

type LanguageContextValue = {
  language: Locale;
  setLanguage: (next: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lienzo-lang";

const detectBrowserLanguage = (): Locale => {
  if (typeof window === "undefined") return defaultLocale;
  const raw = navigator.languages?.[0] ?? navigator.language ?? defaultLocale;
  return raw.toLowerCase().startsWith("es") ? "es" : "en";
};

const normalizeLocale = (value: string | null): Locale | null => {
  if (value === "en" || value === "es") return value;
  return null;
};

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Locale;
}) {
  const [language, setLanguageState] = useState<Locale>(initialLanguage ?? defaultLocale);

  const setLanguage = useCallback((next: Locale) => {
    setLanguageState(next);
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, next);
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const stored = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    const detected = stored ?? detectBrowserLanguage();
    if (detected !== language) {
      setLanguageState(detected);
      window.localStorage.setItem(STORAGE_KEY, detected);
      document.cookie = `lang=${detected}; path=/; max-age=31536000`;
      document.documentElement.lang = detected;
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
