"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollProgressBar
 * ─────────────────
 * Thin horizontal bar at the very top of the viewport that fills
 * left→right as the user scrolls. Mirrors portal.sigmafy.co's
 * `.mk-scroll-progress` pattern byte-for-byte.
 *
 * Implementation:
 * - Fill width is updated via rAF-throttled `scroll` listener so
 *   we don't thrash on every event.
 * - Fill colour comes from `--color-accent`, so it stays right
 *   across both light and dark themes.
 * - `pointer-events: none` so the bar never blocks clicks.
 */
export default function ScrollProgressBar() {
  const fillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (fillRef.current) {
        fillRef.current.style.width = `${pct}%`;
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        update();
        rafId = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="mk-scroll-progress" aria-hidden>
      <div ref={fillRef} className="mk-scroll-progress-fill" />
    </div>
  );
}
