"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function PremiumCursor() {
  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const previousRef = useRef({ x: 0, y: 0 });

  const activeRef = useRef(false);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch / coarse pointers
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const recompute = () => {
      const reduce = media.matches;
      setEnabled(!coarse && !reduce);
    };

    recompute();

    const onChange = () => recompute();

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Start from centre-ish to avoid a flash at (0,0)
    const startX = window.innerWidth * 0.5;
    const startY = window.innerHeight * 0.35;

    targetRef.current = { x: startX, y: startY };
    currentRef.current = { x: startX, y: startY };
    previousRef.current = { x: startX, y: startY };

    const applyVars = (
      x: number,
      y: number,
      angle: number,
      scale: number,
      opacity: number,
    ) => {
      root.style.setProperty("--pc-x", `${x}px`);
      root.style.setProperty("--pc-y", `${y}px`);
      root.style.setProperty("--pc-angle", `${angle}deg`);
      root.style.setProperty("--pc-scale", `${scale}`);
      root.style.setProperty("--pc-opacity", `${opacity}`);
    };

    applyVars(startX, startY, 0, 1, 0);

    if (!enabled) {
      root.classList.remove("premium-cursor-active");
      return;
    }

    root.classList.add("premium-cursor-active");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      targetRef.current = { x: e.clientX, y: e.clientY };
      activeRef.current = true;
    };

    const onLeave = () => {
      activeRef.current = false;
    };

    const onBlur = () => {
      activeRef.current = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onBlur);

    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const previous = previousRef.current;

      // Smooth follow
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      const vx = current.x - previous.x;
      const vy = current.y - previous.y;

      previousRef.current = { ...current };

      const speed = clamp(Math.hypot(vx, vy) * 0.18, 0, 1.35);
      const angle = speed > 0.02 ? (Math.atan2(vy, vx) * 180) / Math.PI : 0;

      const scale = 1 + speed * 0.9;
      const opacity = activeRef.current ? 0.95 : 0.35;

      applyVars(current.x, current.y, angle, scale, opacity);

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onBlur);
      root.classList.remove("premium-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="premium-cursor-layer">
      {/* Large soft orb */}
      <div className="premium-cursor-orb" />
      {/* Directional streak */}
      <div className="premium-cursor-streak" />
      {/* Core glow */}
      <div className="premium-cursor-core" />
      {/* Dot */}
      <div className="premium-cursor-dot" />
    </div>
  );
}
