"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type CSSProperties } from "react";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
});

type DeferredColorBendsProps = {
  className?: string;
  style?: CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
};

export default function DeferredColorBends(props: DeferredColorBendsProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUseWebGlEffect = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canUseWebGlEffect || prefersReducedMotion) return;

    const enable = () => setEnabled(true);
    const passiveOnce = { once: true, passive: true } as const;

    window.addEventListener("pointermove", enable, passiveOnce);
    window.addEventListener("pointerdown", enable, passiveOnce);
    window.addEventListener("scroll", enable, passiveOnce);
    window.addEventListener("keydown", enable, { once: true });

    return () => {
      window.removeEventListener("pointermove", enable);
      window.removeEventListener("pointerdown", enable);
      window.removeEventListener("scroll", enable);
      window.removeEventListener("keydown", enable);
    };
  }, []);

  return enabled ? <ColorBends {...props} /> : null;
}
