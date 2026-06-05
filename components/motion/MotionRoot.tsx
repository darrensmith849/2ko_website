"use client";

import { useEffect } from "react";

/**
 * MotionRoot
 * ──────────
 * Single mount that wires up:
 *   • [data-reveal]    — fade + slide-up on intersection
 *   • [data-magnetic]  — pointer-pull on hover (configurable strength)
 *   • [data-counter]   — count-up to data-counter-target on first sight
 *
 * Pure vanilla DOM. No deps. Respects prefers-reduced-motion.
 * Mount once in app/layout.tsx — it scans the whole document.
 */
export default function MotionRoot() {
  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Reveal ───────────────────────────────────────────
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (reducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
    const revealObserver = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver?.unobserve(entry.target);
              }
            }
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
        );
    if (revealObserver) revealEls.forEach((el) => revealObserver.observe(el));

    // ── Magnetic ─────────────────────────────────────────
    const magneticEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const magneticCleanups: Array<() => void> = [];
    if (!reducedMotion) {
      for (const el of magneticEls) {
        const strength = Number(el.dataset.magnetic) || 6;
        const onMove = (e: PointerEvent) => {
          if (e.pointerType === "touch") return;
          const rect = el.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
        };
        const onLeave = () => {
          el.style.transform = "translate3d(0, 0, 0)";
        };
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        magneticCleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      }
    }

    // ── Counter (scroll-triggered count-up) ──────────────
    const counterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]"),
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          counterObserver.unobserve(el);
          // Only animate from-zero. If the element already shows the
          // final value (server-rendered as a static fallback), leave
          // it alone — saves a jarring 1,000+ → 0 → 1,000+ reset if
          // hydration or the observer fires late.
          const initial = (el.textContent || "").trim();
          if (initial !== "0" && initial !== "") continue;
          const target = Number(el.dataset.counterTarget) || 0;
          const suffix = el.dataset.counterSuffix || "";
          const prefix = el.dataset.counterPrefix || "";
          if (reducedMotion) {
            el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
            continue;
          }
          const duration = Number(el.dataset.counterDuration) || 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * target);
            el.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    counterEls.forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver?.disconnect();
      counterObserver.disconnect();
      magneticCleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
