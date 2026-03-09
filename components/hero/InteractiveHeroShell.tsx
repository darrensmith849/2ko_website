"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const initialVars = {
  "--trail-x": "50%",
  "--trail-y": "38%",
  "--trail-angle": "0deg",
  "--trail-scale": "1",
  "--trail-opacity": "0.5",
} as CSSProperties;

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function InteractiveHeroShell({ children, className, style }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const targetRef = useRef({ x: 50, y: 38 });
  const currentRef = useRef({ x: 50, y: 38 });
  const previousRef = useRef({ x: 50, y: 38 });
  const activeRef = useRef(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);

    onChange();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    // Safari fallback
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const applyVars = (
      x: number,
      y: number,
      angle: number,
      scale: number,
      opacity: number,
    ) => {
      element.style.setProperty("--trail-x", `${x}%`);
      element.style.setProperty("--trail-y", `${y}%`);
      element.style.setProperty("--trail-angle", `${angle}deg`);
      element.style.setProperty("--trail-scale", `${scale}`);
      element.style.setProperty("--trail-opacity", `${opacity}`);
    };

    applyVars(50, 38, 0, 1, 0.5);

    if (reducedMotion) return;

    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const previous = previousRef.current;

      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      const vx = current.x - previous.x;
      const vy = current.y - previous.y;

      previousRef.current = { ...current };

      const speed = clamp(Math.hypot(vx, vy) * 10, 0, 1.35);
      const angle = speed > 0.01 ? (Math.atan2(vy, vx) * 180) / Math.PI : 0;
      const scale = 1 + speed * 0.9;
      const opacity = activeRef.current ? 0.55 : 0.25;

      applyVars(current.x, current.y, angle, scale, opacity);

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);

  const updateTargetFromPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion) return;
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);

    targetRef.current = { x, y };
    activeRef.current = true;
  };

  const handlePointerLeave = () => {
    activeRef.current = false;
    targetRef.current = { x: 50, y: 38 };
  };

  return (
    <section
      ref={sectionRef}
      style={{ ...initialVars, ...style }}
      onPointerMove={updateTargetFromPointer}
      onPointerEnter={updateTargetFromPointer}
      onPointerLeave={handlePointerLeave}
      className={[
        "relative isolate overflow-hidden border-b border-white/10 bg-[#050913] text-white",
        className ?? "",
      ].join(" ")}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #07101d 0%, #050913 52%, #03060d 100%)",
          }}
        />

        {/* Soft top glow */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(900px 500px at 50% -12%, rgba(255,255,255,0.08), transparent 58%)",
          }}
        />


        {/* Mouse-follow soft orb */}
        <div
          className="absolute h-[540px] w-[540px] rounded-full blur-3xl"
          style={{
            left: "var(--trail-x)",
            top: "var(--trail-y)",
            opacity: "calc(var(--trail-opacity) * 0.45)",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(89,132,255,0.12) 0%, rgba(68,108,221,0.07) 28%, rgba(22,39,77,0.05) 48%, rgba(0,0,0,0) 72%)",
          }}
        />

        {/* Directional streak */}
        <div
          className="absolute h-[34px] w-[190px] rounded-full blur-xl"
          style={{
            left: "var(--trail-x)",
            top: "var(--trail-y)",
            opacity: "calc(var(--trail-opacity) * 0.4)",
            transform:
              "translate(-86%, -50%) rotate(var(--trail-angle)) scaleX(var(--trail-scale))",
            transformOrigin: "100% 50%",
            background:
              "linear-gradient(90deg, rgba(103,132,255,0.00) 0%, rgba(103,132,255,0.03) 28%, rgba(123,150,255,0.08) 58%, rgba(255,255,255,0.10) 100%)",
          }}
        />

        {/* Core glow */}
        <div
          className="absolute h-24 w-24 rounded-full blur-2xl"
          style={{
            left: "var(--trail-x)",
            top: "var(--trail-y)",
            opacity: "calc(var(--trail-opacity) * 0.5)",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(147,178,255,0.08) 40%, rgba(0,0,0,0) 74%)",
          }}
        />

        {/* Pointer dot */}
        <div
          className="absolute h-3 w-3 rounded-full"
          style={{
            left: "var(--trail-x)",
            top: "var(--trail-y)",
            opacity: "calc(var(--trail-opacity) * 0.6)",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.50) 0%, rgba(196,215,255,0.35) 45%, rgba(109,146,255,0.12) 72%, rgba(0,0,0,0) 100%)",
            boxShadow:
              "0 0 10px rgba(255,255,255,0.08), 0 0 28px rgba(93,125,255,0.06)",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
