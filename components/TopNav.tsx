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
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl justify-center gap-10 py-5 text-sm uppercase tracking-wide text-white/90 font-semibold">
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
