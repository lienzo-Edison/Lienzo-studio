"use client";

import TransitionLink from "@/components/TransitionLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function TopNav() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = getTranslations(language);
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#e6e1d5]/70 text-black backdrop-blur-md dark:border-white/10 dark:bg-black/60 dark:text-[#f6f1e7]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.18em] md:px-8 md:py-5 md:text-sm md:tracking-[0.22em]">
        <div className="flex items-center shrink-0">
          <Image
            src="/logos/lieno-compacto-n.svg"
            alt="Lienzo Studio logo"
            width={160}
            height={48}
            className="h-auto w-[88px] sm:w-[102px] md:w-[150px] dark:hidden"
            priority
          />
          <Image
            src="/logos/lienzo-compacto-b.svg"
            alt="Lienzo Studio logo"
            width={160}
            height={48}
            className="hidden h-auto w-[88px] sm:w-[102px] md:w-[150px] dark:block"
            priority
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-3 sm:gap-6 md:gap-10 flex-nowrap">
          {navItems.map((item, idx) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap font-display font-bold transition hover:text-[#a61b00] dark:hover:text-[#ff8f7a] ${
                pathname === "/" ? "nav-wave" : ""
              }`}
              style={{ "--wave-delay": `${idx * 180}ms` } as CSSProperties}
            >
              {item.label}
            </TransitionLink>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0 scale-90 sm:scale-100">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
