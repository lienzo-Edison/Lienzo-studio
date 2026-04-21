"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Forces a clean remount of all page content whenever the route changes.
 *
 * Without this, React 18's concurrent renderer can pre-render a new page's
 * component tree before the transition overlay is gone, causing Framer Motion's
 * IntersectionObserver (whileInView / once:true) to fire in a detached state.
 * The animation is marked "done" before the element is ever visible, so the
 * element stays at its initial state (opacity 0) when the overlay lifts.
 *
 * Adding key={pathname} here guarantees a new React tree on every navigation,
 * giving each page a fresh Framer Motion instance with clean animation state.
 */
export default function PageKey({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  // The key on this div is what does the work — when pathname changes,
  // React unmounts the old subtree and mounts a fresh one.
  return (
    <div key={pathname} className={className}>
      {children}
    </div>
  );
}
