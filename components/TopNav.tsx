"use client";

import TransitionLink from "@/components/TransitionLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";
import { useState, useEffect, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function TopNav() {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = getTranslations(language);
  const isOpen = openPathname === pathname;

  const isLandingPage = pathname === "/longs-peak";

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/contact", label: t.nav.contact },
  ];

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#e6e1d5]/70 text-black backdrop-blur-md dark:border-white/10 dark:bg-black/60 dark:text-[#f6f1e7]">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-5">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <TransitionLink href="/">
              <Image
                src="/logos/lienzo-compacto-n.svg"
                alt="Lienzo Studio logo"
                width={160}
                height={48}
                className="h-auto w-[100px] sm:w-[110px] md:w-[150px] dark:hidden"
                priority
              />
              <Image
                src="/logos/lienzo-compacto-b.svg"
                alt="Lienzo Studio logo"
                width={160}
                height={48}
                className="hidden h-auto w-[100px] sm:w-[110px] md:w-[150px] dark:block"
                priority
              />
            </TransitionLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex min-w-0 flex-1 items-center justify-center gap-10 text-sm font-semibold uppercase tracking-[0.22em]">
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

          {/* Desktop Toggles */}
          {!isLandingPage && (
            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpenPathname((current) => (current === pathname ? null : pathname))}
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-4 w-6 text-black dark:text-[#f6f1e7]">
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-full bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Moved outside <nav> to prevent inheritance issues */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Overlay/Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPathname(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 flex w-full max-w-[300px] flex-col shadow-2xl"
            >
              {/* Solid Background Layer */}
              <div className="absolute inset-0 bg-[#f6f1e7] dark:bg-[#0d1117]" />
              
              {/* Content Layer */}
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex flex-col gap-10">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                      Menu
                    </p>
                    <button 
                      onClick={() => setOpenPathname(null)}
                      className="text-xs uppercase tracking-widest text-black/60 dark:text-white/60"
                    >
                      {language === "es" ? "Cerrar" : "Close"}
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                    {navItems.map((item) => (
                      <TransitionLink
                        key={item.href}
                        href={item.href}
                        className={`font-display text-3xl font-bold uppercase tracking-wider transition ${
                          pathname === item.href
                            ? "text-[#a61b00] dark:text-[#ff8f7a]"
                            : "text-black dark:text-white"
                        }`}
                      >
                        {item.label}
                      </TransitionLink>
                    ))}
                  </div>
                </div>

                {!isLandingPage && (
                  <div className="flex flex-col gap-8 border-t border-black/10 pt-8 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-3">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                          {language === "es" ? "Idioma" : "Language"}
                        </span>
                        <LanguageToggle />
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                          {language === "es" ? "Tema" : "Theme"}
                        </span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
