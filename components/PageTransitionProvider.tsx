"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

type TransitionPhase = "idle" | "covering" | "revealing";

type PageTransitionContextValue = {
  navigate: (href: string) => void;
};

const TRANSITION_DURATION_SECONDS = 0.4;
const TRANSITION_DURATION_MS = TRANSITION_DURATION_SECONDS * 1000;

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const pushTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (pushTimerRef.current) {
      clearTimeout(pushTimerRef.current);
      pushTimerRef.current = null;
    }

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const navigate = useCallback(
    (href: string) => {
      if (!href || href === pathname || phase === "covering") {
        return;
      }

      clearTimers();
      setPendingPath(href);
      setPhase("covering");

      pushTimerRef.current = setTimeout(() => {
        router.push(href);
      }, TRANSITION_DURATION_MS);
    },
    [clearTimers, pathname, phase, router],
  );

  useEffect(() => {
    if (phase !== "covering" || !pendingPath || pathname !== pendingPath) {
      return;
    }

    const revealTimer = setTimeout(() => {
      setPhase("revealing");
      setPendingPath(null);
      resetTimerRef.current = setTimeout(() => {
        setPhase("idle");
        resetTimerRef.current = null;
      }, TRANSITION_DURATION_MS);
    }, 0);

    return () => clearTimeout(revealTimer);
  }, [pathname, pendingPath, phase]);

  const value = useMemo<PageTransitionContextValue>(() => ({ navigate }), [navigate]);

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[9999] pointer-events-none bg-black"
        initial={false}
        animate={{ opacity: phase === "covering" ? 1 : 0 }}
        transition={{ duration: TRANSITION_DURATION_SECONDS, ease: "easeInOut" }}
      />
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }

  return context;
}
