"use client";

import TransitionLink from "@/components/TransitionLink";
import type { CSSProperties } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contact Us" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/55 backdrop-blur-md md:top-0 md:bottom-auto md:border-t-0 md:border-b md:bg-black/45">
      <div className="mx-auto flex max-w-7xl items-center justify-around px-4 py-3 text-[11px] uppercase tracking-wide text-white/90 font-semibold md:justify-center md:gap-10 md:px-0 md:py-5 md:text-sm">
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
    </nav>
  );
}
