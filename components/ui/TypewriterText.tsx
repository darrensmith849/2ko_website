"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  hideCaret?: boolean;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 28,
  startDelay = 200,
  hideCaret = false,
  className = "",
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reducedMotion ? text : "");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(reducedMotion);
  const [caretOn, setCaretOn] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.intersectionRatio >= 0.5)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [text, reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion) return;
    let i = 0;
    let typeTimer: number | null = null;
    let fadeTimer: number | null = null;
    const startT = window.setTimeout(() => {
      typeTimer = window.setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (typeTimer) window.clearInterval(typeTimer);
          setFinished(true);
          fadeTimer = window.setTimeout(() => setCaretOn(false), 1400);
        }
      }, speed);
    }, startDelay);
    return () => {
      window.clearTimeout(startT);
      if (typeTimer) window.clearInterval(typeTimer);
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, [started, text, speed, startDelay, reducedMotion]);

  const showCaret =
    !reducedMotion && !hideCaret && (started || !finished) && caretOn;

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      {showCaret && (
        <span
          aria-hidden="true"
          className="typewriter-caret"
          style={{ display: "inline-block", width: "0.6ch", marginLeft: "1px" }}
        >
          |
        </span>
      )}
    </span>
  );
}
