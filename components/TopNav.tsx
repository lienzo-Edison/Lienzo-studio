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
  const isHome = pathname === "/";

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${
        isHome
          ? "border-black/10 bg-[#e6e1d5]/70 text-black"
          : "border-black/10 bg-white/80 text-black"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.22em] font-semibold md:px-8 md:py-5 md:text-sm">
        <div className="flex items-center">
          <Image
            src="/Logos/Lienzo-compacto-black.svg"
            alt="Lienzo Studio logo"
            width={160}
            height={48}
            className="h-auto w-[120px] md:w-[150px]"
            priority
          />
        </div>
        <div className="flex flex-1 items-center justify-center gap-6 md:gap-10">
          {navItems.map((item, idx) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`transition hover:text-[#a61b00] ${
                pathname === "/" ? "nav-wave" : ""
              }`}
              style={{ "--wave-delay": `${idx * 180}ms` } as CSSProperties}
            >
              {item.label}
            </TransitionLink>
          ))}
        </div>
        <div className="flex items-center">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
