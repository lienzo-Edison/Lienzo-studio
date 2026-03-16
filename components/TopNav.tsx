"use client";

import TransitionLink from "@/components/TransitionLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/55 backdrop-blur-md md:top-0 md:bottom-auto md:border-t-0 md:border-b md:bg-black/45">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-[11px] uppercase tracking-wide text-white/90 font-semibold md:px-0 md:py-5 md:text-sm">
        <div className="absolute left-0 hidden items-center md:flex">
          <Image
            src="/Lienzo - Logotipo W-02.svg"
            alt="Lienzo Studio logo"
            width={150}
            height={50}
            className="h-auto w-[140px]"
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {navItems.map((item, idx) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`transition hover:opacity-70 ${pathname === "/" ? "nav-wave" : ""}`}
              style={{ "--wave-delay": `${idx * 180}ms` } as CSSProperties}
            >
              {item.label}
            </TransitionLink>
          ))}
        </div>
        <div className="absolute right-4 md:right-0">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
