"use client";

import { useId, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import TransitionLink from "@/components/TransitionLink";
import styles from "./CornerIcon.module.css";

// The text follows the rectangle; the button itself stays still.
const orbitPath = "M22 12 H162 Q172 12 172 22 V102 Q172 112 162 112 H22 Q12 112 12 102 V22 Q12 12 22 12 Z";
const orbitLength = 503;

export default function CornerIcon() {
  const { language } = useLanguage();
  const pathId = `contact-orbit-${useId().replace(/:/g, "")}`;
  const orbitRef = useRef<SVGSVGElement>(null);
  const label = language === "es" ? "Contáctanos" : "Contact us";
  const orbitText = language === "es"
    ? "HABLEMOS · CREA CON LIENZO · HABLEMOS · CREA CON LIENZO · "
    : "LET’S TALK · START A PROJECT · LET’S TALK · START A PROJECT · ";
  const pauseOrbit = () => orbitRef.current?.pauseAnimations();
  const resumeOrbit = () => orbitRef.current?.unpauseAnimations();

  return (
    <TransitionLink
      href="/contact"
      className={styles.button}
      aria-label={label}
      onMouseEnter={pauseOrbit}
      onMouseLeave={resumeOrbit}
      onFocus={pauseOrbit}
      onBlur={resumeOrbit}
    >
      <svg ref={orbitRef} className={styles.orbit} viewBox="0 0 184 124" aria-hidden="true" focusable="false">
        <defs><path id={pathId} d={orbitPath} /></defs>
        <g className={styles.movingText}>
          {[0, -100].map((offset) => (
            <text key={offset}>
              <textPath href={`#${pathId}`} startOffset={`${offset}%`} textLength={orbitLength} lengthAdjust="spacing">
                {orbitText}
                <animate attributeName="startOffset" from={`${offset}%`} to={`${offset + 100}%`} dur="24s" repeatCount="indefinite" />
              </textPath>
            </text>
          ))}
        </g>
        <text className={styles.staticText}>
          <textPath href={`#${pathId}`} textLength={orbitLength} lengthAdjust="spacing">{orbitText}</textPath>
        </text>
      </svg>
      <span className={styles.center}>
        <span>{label}</span>
        <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </TransitionLink>
  );
}
