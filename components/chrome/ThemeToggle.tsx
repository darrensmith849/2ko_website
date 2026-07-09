"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * ThemeToggle
 * ───────────
 * Flips `data-theme` on `<html>` between "light" (default) and
 * "dark". Every page reload lands back in light mode — the toggle
 * is for the current session only and the choice is deliberately
 * NOT persisted.
 *
 * Mounted in app/layout.tsx via Header.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
      style={{
        color: "var(--color-text)",
        border: "1px solid var(--chrome-border)",
        background: "transparent",
      }}
    >
      {/* Sun (visible in dark mode → click moves to light) */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
        style={{
          position: "absolute",
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.6)",
          transition:
            "opacity 220ms ease, transform 280ms cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="10" y1="1.6" x2="10" y2="3.6" />
          <line x1="10" y1="16.4" x2="10" y2="18.4" />
          <line x1="1.6" y1="10" x2="3.6" y2="10" />
          <line x1="16.4" y1="10" x2="18.4" y2="10" />
          <line x1="3.9" y1="3.9" x2="5.3" y2="5.3" />
          <line x1="14.7" y1="14.7" x2="16.1" y2="16.1" />
          <line x1="3.9" y1="16.1" x2="5.3" y2="14.7" />
          <line x1="14.7" y1="5.3" x2="16.1" y2="3.9" />
        </g>
      </svg>

      {/* Moon (visible in light mode → click moves to dark) */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden
        style={{
          position: "absolute",
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0.6)" : "rotate(0deg) scale(1)",
          transition:
            "opacity 220ms ease, transform 280ms cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        <path
          d="M16.5 12.5A6.6 6.6 0 0 1 7.5 3.5a6.6 6.6 0 1 0 9 9z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}
