"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme-override";
const LEGACY_KEY = "theme";
const THEME_EVENT = "themechange";

type Theme = "light" | "dark";
type Mode = "system" | Theme;

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

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const snapshot = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [mode, theme] = snapshot.split(":") as [Mode, Theme];

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

  const isDark = theme === "dark";
  const modeLabel = mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";

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
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <path
              d="M6.5 7.5h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 17.5v2h6v-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6.2 10.2c1.2-1.2 3.4-1.2 4.6 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.2 10.2c1.2-1.2 3.4-1.2 4.6 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : isDark ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <path
              d="M12 3.25c.5 0 .9.4.9.9v2.1a.9.9 0 1 1-1.8 0v-2.1c0-.5.4-.9.9-.9Z"
              fill="currentColor"
            />
            <path
              d="M12 17.65a5.65 5.65 0 1 1 0-11.3 5.65 5.65 0 0 1 0 11.3Zm0-1.8a3.85 3.85 0 1 0 0-7.7 3.85 3.85 0 0 0 0 7.7Z"
              fill="currentColor"
            />
            <path
              d="M12 18.85c.5 0 .9.4.9.9v2.1a.9.9 0 1 1-1.8 0v-2.1c0-.5.4-.9.9-.9Z"
              fill="currentColor"
            />
            <path
              d="M5.2 6.5a.9.9 0 0 1 1.27 0l1.49 1.49a.9.9 0 0 1-1.27 1.27L5.2 7.77a.9.9 0 0 1 0-1.27Z"
              fill="currentColor"
            />
            <path
              d="M16.04 16.04a.9.9 0 0 1 1.27 0l1.49 1.49a.9.9 0 0 1-1.27 1.27l-1.49-1.49a.9.9 0 0 1 0-1.27Z"
              fill="currentColor"
            />
            <path
              d="M3.25 12c0-.5.4-.9.9-.9h2.1a.9.9 0 1 1 0 1.8h-2.1c-.5 0-.9-.4-.9-.9Z"
              fill="currentColor"
            />
            <path
              d="M18.85 12c0-.5.4-.9.9-.9h2.1a.9.9 0 1 1 0 1.8h-2.1c-.5 0-.9-.4-.9-.9Z"
              fill="currentColor"
            />
            <path
              d="M5.2 17.5a.9.9 0 0 1 1.27 0l1.49 1.49a.9.9 0 0 1-1.27 1.27L5.2 18.77a.9.9 0 0 1 0-1.27Z"
              fill="currentColor"
            />
            <path
              d="M16.04 7.96a.9.9 0 0 1 1.27 0l1.49 1.49a.9.9 0 0 1-1.27 1.27l-1.49-1.49a.9.9 0 0 1 0-1.27Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-current"
          >
            <path
              d="M14.8 3.6a.9.9 0 0 1 .92 1.2A7.2 7.2 0 0 0 20 12a7.2 7.2 0 0 0-7.2 7.2.9.9 0 0 1-1.2.92A9.4 9.4 0 1 1 14.8 3.6Zm-2.4 2.2a7.6 7.6 0 1 0 6.9 11.3 9 9 0 0 1-6.9-11.3Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      {open ? (
        <div
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 mt-2 w-36 rounded-2xl border border-black/10 bg-[#f6f1e7]/95 p-1 text-xs uppercase tracking-[0.2em] text-black shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/15 dark:bg-[#151c24]/95 dark:text-[#f6f1e7]"
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
