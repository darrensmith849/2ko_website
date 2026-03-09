"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const REST = { x: 50, y: 36 };

export default function CursorGlowSection({ children, className, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({ ...REST });
  const currentRef = useRef({ ...REST });
  const activeRef = useRef(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const apply = (x: number, y: number, opacity: number) => {
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      el.style.setProperty("--glow-opacity", `${opacity}`);
    };

    apply(REST.x, REST.y, 0.45);

    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;

      cur.x += (tgt.x - cur.x) * 0.09;
      cur.y += (tgt.y - cur.y) * 0.09;

      const opacity = activeRef.current ? 0.9 : 0.45;

      apply(cur.x, cur.y, opacity);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: clamp(((e.clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((e.clientY - rect.top) / rect.height) * 100, 0, 100),
    };
    activeRef.current = true;
  };

  const onPointerLeave = () => {
    activeRef.current = false;
    targetRef.current = { ...REST };
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={
        {
          "--mx": `${REST.x}%`,
          "--my": `${REST.y}%`,
          "--glow-opacity": "0.45",
          ...style,
        } as CSSProperties
      }
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`relative isolate overflow-hidden ${className ?? ""}`}
    >
      {/* Cursor-following radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blur-3xl"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(22,163,74,0.15), transparent 60%)",
          opacity: "var(--glow-opacity)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
