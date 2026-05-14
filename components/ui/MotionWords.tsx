"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

interface MotionWordsProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  staggerMs?: number;
  durationMs?: number;
  delay?: number;
}

export default function MotionWords({
  text,
  className = "",
  style,
  as: Tag = "span",
  staggerMs = 55,
  durationMs = 650,
  delay = 0,
}: MotionWordsProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(reducedMotion);

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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, reducedMotion]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(115%)",
              opacity: visible ? 1 : 0,
              transition: `transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${i * staggerMs}ms, opacity ${durationMs * 0.6}ms ease ${i * staggerMs}ms`,
              willChange: "transform",
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && (
            <span aria-hidden="true" style={{ display: "inline-block" }}>
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
}
