"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export type MasonryItem = {
  id: string;
  img: string;
  url?: string;
  height?: number;
  title?: string;
  description?: string;
  alt?: string;
};

type AnimateFrom = "start" | "center" | "end" | "random";

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: AnimateFrom;
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  layoutIdPrefix?: string;
  onItemClick?: (item: MasonryItem, index: number) => void;
};

function orderTiles<T>(tiles: T[], animateFrom: AnimateFrom) {
  if (animateFrom === "end") return [...tiles].reverse();
  if (animateFrom === "center") {
    const center = (tiles.length - 1) / 2;
    return [...tiles].sort(
      (a, b) => Math.abs(tiles.indexOf(a) - center) - Math.abs(tiles.indexOf(b) - center),
    );
  }
  if (animateFrom === "random") {
    return [...tiles].sort(() => Math.random() - 0.5);
  }
  return tiles;
}

export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "start",
  scaleOnHover = false,
  hoverScale = 0.95,
  blurToFocus = false,
  colorShiftOnHover = false,
  layoutIdPrefix,
  onItemClick,
}: MasonryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>(".masonry-tile");
      const orderedTiles = orderTiles(tiles, animateFrom);
      const fromState: gsap.TweenVars = { opacity: 0, y: 28 };

      if (blurToFocus) fromState.filter = "blur(10px)";

      gsap.set(orderedTiles, fromState);
      gsap.to(orderedTiles, {
        opacity: 1,
        y: 0,
        filter: blurToFocus ? "blur(0px)" : undefined,
        duration,
        stagger,
        ease,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animateFrom, blurToFocus, duration, ease, items.length, stagger]);

  const hoverVar = { ["--hover-scale" as string]: String(hoverScale) } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className="columns-1 gap-3 md:gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
    >
      {items.map((item, index) => (
        <article
          key={item.id}
          className="masonry-tile mb-3 md:mb-4 break-inside-avoid"
          style={{ minHeight: item.height ?? 360 }}
        >
          <button
            type="button"
            onClick={() => {
              if (onItemClick) {
                onItemClick(item, index);
                return;
              }
              if (item.url) window.open(item.url, "_blank", "noopener,noreferrer");
            }}
            className="group relative block w-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            style={hoverVar}
          >
            <motion.div
              layoutId={layoutIdPrefix ? `${layoutIdPrefix}-${item.id}` : undefined}
              className="relative w-full"
              style={{ height: item.height ?? 360 }}
            >
              <Image
                src={item.img}
                alt={item.alt ?? item.title ?? `Project image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className={`object-cover transition-all duration-500 ${
                  scaleOnHover ? "group-hover:scale-[var(--hover-scale)]" : ""
                } ${
                  colorShiftOnHover
                    ? "grayscale saturate-75 group-hover:grayscale-0 group-hover:saturate-125 group-hover:hue-rotate-[6deg]"
                    : ""
                }`}
              />
            </motion.div>

            {(item.title || item.description) && (
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.title && (
                  <h3 className="text-xl font-bold font-display">{item.title}</h3>
                )}
                {item.description && <p className="mt-2 text-sm">{item.description}</p>}
              </div>
            )}
          </button>
        </article>
      ))}
    </div>
  );
}
