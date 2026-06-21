"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme-override";
const LEGACY_KEY = "theme";
const THEME_EVENT = "themechange";

type Theme = "light" | "dark";
type Mode = "system" | Theme;
type MenuPlacement = "bottom" | "top";

type ThemeToggleProps = {
  menuPlacement?: MenuPlacement;
};

const getSystemTheme = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const getStoredOverride = (): Mode | null => {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light" || stored === "system") return stored;
  const legacy = window.localStorage.getItem(LEGACY_KEY);
  if (legacy === "dark" || legacy === "light") {
    window.localStorage.setItem(STORAGE_KEY, legacy);
    window.localStorage.removeItem(LEGACY_KEY);
    return legacy;
  }
  return null;
};

const resolveInitialMode = (): Mode => {
  const override = getStoredOverride();
  if (override) return override;
  return "system";
};

const syncDocumentTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.setAttribute("data-theme", theme);
};

const getThemeSnapshot = () => {
  const mode = resolveInitialMode();
  const theme = mode === "system" ? getSystemTheme() : mode;
  return `${mode}:${theme}` as const;
};

const getServerThemeSnapshot = () => "system:light" as const;

const subscribeToTheme = (onStoreChange: () => void) => {
  if (typeof window === "undefined") return () => {};

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => {
    const snapshot = getThemeSnapshot();
    const [, theme] = snapshot.split(":") as [Mode, Theme];
    syncDocumentTheme(theme);
    onStoreChange();
  };

  media.addEventListener("change", onChange);
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_EVENT, onChange);

  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_EVENT, onChange);
  };
};

export default function ThemeToggle({ menuPlacement = "bottom" }: ThemeToggleProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const snapshot = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [mode] = snapshot.split(":") as [Mode, Theme];

  const applyMode = (next: Mode, persistOverride = false) => {
    const resolved = next === "system" ? getSystemTheme() : next;
    syncDocumentTheme(resolved);
    if (typeof window !== "undefined") {
      if (persistOverride) {
        window.localStorage.setItem(STORAGE_KEY, next);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
      window.dispatchEvent(new Event(THEME_EVENT));
    }
  };

  const modeLabel = mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
  const menuPositionClass =
    menuPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2";

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-label={`Theme: ${modeLabel}. Click to choose theme mode.`}
        aria-haspopup="menu"
        aria-expanded={open}
        title={`Theme: ${modeLabel}`}
        onClick={() => setOpen((prev) => !prev)}
        className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-[#f6f1e7]/80 text-black shadow-sm transition hover:border-black/40 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-[#f6f1e7] dark:hover:border-white/40 dark:hover:bg-white/20 md:h-9 md:w-9"
      >
        {mode === "system" ? (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <path
              d="M5.25 6.75h13.5a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9 20.25h6M12 17.75v2.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        ) : mode === "light" ? (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 2.75v2.2M12 19.05v2.2M21.25 12h-2.2M4.95 12h-2.2M18.55 5.45l-1.55 1.55M7 17l-1.55 1.55M18.55 18.55 17 17M7 7 5.45 5.45"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <path
              d="M20.25 15.35A8.35 8.35 0 0 1 8.65 3.75a7 7 0 1 0 11.6 11.6Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {open ? (
        <div
          role="menu"
          aria-label="Theme options"
          className={`absolute right-0 z-10 w-36 rounded-2xl border border-black/10 bg-[#f6f1e7]/95 p-1 text-xs uppercase tracking-[0.2em] text-black shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/15 dark:bg-[#151c24]/95 dark:text-[#f6f1e7] ${menuPositionClass}`}
        >
          {(["system", "light", "dark"] as Mode[]).map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={mode === option}
              onClick={() => {
                applyMode(option, true);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-full px-3 py-2 transition ${
                mode === option
                  ? "bg-black/10 text-black dark:bg-white/15 dark:text-[#f6f1e7]"
                  : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
              }`}
            >
              <span>{option}</span>
              {mode === option ? <span aria-hidden="true">●</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
