/**
 * AfricaMap — umbrella hero motif.
 *
 * A stylised Africa rendered as a *filled* constellation of dots, with
 * six "operating cities" pulsing as live points joined by route arcs.
 * Reads `var(--tint)` for the active points + arcs and `var(--motif-fg)`
 * for the land dots — so it works in any division scope.
 *
 * The dot field is generated from horizontal silhouette spans, so the
 * continent reads clearly (denser centre, fading edges) instead of the
 * flat grid it used to be. No external assets. SVG only.
 */
type City = { name: string; cx: number; cy: number; label: "JHB" | "CPT" | "PTA" | "NBO" | "LUS" | "DAR" };

const CITIES: City[] = [
  { name: "Nairobi",       cx: 430, cy: 275, label: "NBO" },
  { name: "Dar es Salaam", cx: 452, cy: 300, label: "DAR" },
  { name: "Lusaka",        cx: 362, cy: 358, label: "LUS" },
  { name: "Pretoria",      cx: 356, cy: 402, label: "PTA" },
  { name: "Johannesburg",  cx: 348, cy: 417, label: "JHB" },
  { name: "Cape Town",     cx: 338, cy: 498, label: "CPT" },
];

// Africa silhouette as horizontal spans: [y, [[xL,xR], ...]].
// A second range on a row is the Horn of Africa jutting east.
const SPANS: Array<[number, Array<[number, number]>]> = [
  [ 86, [[258, 438]]],
  [108, [[228, 474]]],
  [130, [[206, 500]]],
  [152, [[191, 520]]],
  [174, [[186, 534]]],
  [196, [[186, 512], [520, 560]]],
  [218, [[196, 470], [498, 562]]],
  [240, [[214, 460], [488, 544]]],
  [262, [[234, 474]]],
  [284, [[250, 470]]],
  [306, [[260, 466]]],
  [328, [[270, 460]]],
  [350, [[280, 454]]],
  [372, [[288, 448]]],
  [394, [[298, 441]]],
  [416, [[305, 432]]],
  [438, [[314, 421]]],
  [460, [[322, 409]]],
  [482, [[330, 399]]],
  [504, [[339, 389]]],
  [524, [[349, 379]]],
];

// Madagascar — a separate island cluster off the south-east coast.
const MADAGASCAR: Array<[number, number]> = [
  [512, 356], [524, 376], [530, 398], [528, 420], [519, 442],
];

const STEP = 23;
const FOCUS_X = 372;
const FOCUS_Y = 318;

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

type Dot = { x: number; y: number; o: number };

// Deterministic hash → small organic jitter (no Math.random, so the
// server and client render identically and React doesn't re-hydrate).
const hash = (a: number, b: number) => {
  const s = Math.sin(a * 91.17 + b * 47.53) * 43758.5453;
  return s - Math.floor(s);
};

const DOTS: Dot[] = (() => {
  const out: Dot[] = [];
  const push = (x: number, y: number) => {
    const X = x + (hash(x, y) - 0.5) * 7;
    const Y = y + (hash(y, x) - 0.5) * 7;
    const d = Math.hypot(X - FOCUS_X, Y - FOCUS_Y);
    out.push({ x: X, y: Y, o: clamp(0.5 - d / 760, 0.13, 0.5) });
  };
  for (const [y, ranges] of SPANS) {
    for (const [xL, xR] of ranges) {
      const span = xR - xL;
      const n = Math.max(1, Math.round(span / STEP));
      for (let k = 0; k <= n; k++) push(xL + (span * k) / n, y);
    }
  }
  for (const [x, y] of MADAGASCAR) push(x, y);
  return out;
})();

const ROUTES = [
  "M 348 417 Q 398 352 430 275", // JHB → NBO (spine)
  "M 338 498 Q 344 455 348 417", // CPT → JHB
  "M 348 417 Q 352 388 362 358", // JHB → LUS
  "M 430 275 Q 444 286 452 300", // NBO → DAR
  "M 362 358 Q 400 318 430 275", // LUS → NBO
];

export default function AfricaMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 560"
      role="img"
      aria-label="Pan-African operating footprint"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="africa-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.16" />
          <stop offset="62%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="372" cy="316" r="272" fill="url(#africa-glow)" />

      {/* Land — generated dot silhouette of Africa */}
      <g fill="rgb(var(--motif-fg))">
        {DOTS.map((d, i) => (
          <circle key={`d-${i}`} cx={d.x} cy={d.y} r={1.8} fillOpacity={d.o} />
        ))}
      </g>

      {/* Route arcs between operating cities */}
      <g stroke="var(--tint)" strokeOpacity="0.6" strokeWidth="1" fill="none" strokeLinecap="round">
        {ROUTES.map((d, i) => (
          <path key={`r-${i}`} d={d} />
        ))}
      </g>

      {/* Operating cities (active points) */}
      {CITIES.map((c) => (
        <g key={c.name}>
          <circle
            cx={c.cx}
            cy={c.cy}
            r={11}
            fill="var(--tint)"
            opacity={0.16}
            className="pulse-soft"
            style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
          />
          <circle cx={c.cx} cy={c.cy} r={5.2} fill="none" stroke="var(--tint)" strokeOpacity={0.45} strokeWidth={1} />
          <circle cx={c.cx} cy={c.cy} r={3.4} fill="var(--tint)" />
          <text
            x={c.cx + 11}
            y={c.cy + 4}
            fill="rgb(var(--motif-fg) / 0.82)"
            fontFamily="var(--font-geist-mono, monospace)"
            fontSize="10.5"
            letterSpacing="0.08em"
          >
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
