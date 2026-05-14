"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fromY?: number;
  duration?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  fromY = 16,
  duration = 700,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState<boolean>(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, reducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${fromY}px)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
