/**
 * ChartGrow — Sigmafy motif.
 *
 * A stylised SPC-style chart: rising bars, an overlaid trend line,
 * a control-limit band, and a single floating "verdict" pill that
 * drifts. Tint-aware via `var(--tint)`.
 */
const BARS = [
  { x: 60,  h: 70  },
  { x: 100, h: 96  },
  { x: 140, h: 88  },
  { x: 180, h: 118 },
  { x: 220, h: 134 },
  { x: 260, h: 122 },
  { x: 300, h: 156 },
  { x: 340, h: 174 },
  { x: 380, h: 168 },
  { x: 420, h: 196 },
];
const FLOOR = 320;

export default function ChartGrow({ className }: { className?: string }) {
  // Trend line from bar tops
  const linePath = BARS
    .map((b, i) => `${i === 0 ? "M" : "L"} ${b.x + 16} ${FLOOR - b.h - 6}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 500 380"
      role="img"
      aria-label="Sigmafy statistical process chart"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="chart-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.14" />
          <stop offset="70%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bar-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--tint)" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="500" height="380" fill="url(#chart-bg)" />

      {/* Subtle gridlines */}
      {[0.25, 0.5, 0.75].map((p) => (
        <line
          key={p}
          x1="40" x2="460"
          y1={FLOOR - 240 * p} y2={FLOOR - 240 * p}
          stroke="rgba(255,255,255,0.06)"
          strokeDasharray="3 5"
        />
      ))}

      {/* Control-limit band */}
      <rect
        x="40" y={FLOOR - 200}
        width="420" height="60"
        fill="var(--tint)" opacity="0.06"
        stroke="var(--tint)" strokeOpacity="0.18"
        strokeDasharray="4 6"
      />
      <text x="48" y={FLOOR - 188}
        fill="rgba(255,255,255,0.55)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">
        UCL · target band
      </text>

      {/* Bars */}
      {BARS.map((b, i) => (
        <rect
          key={i}
          x={b.x} y={FLOOR - b.h}
          width="32" height={b.h} rx="3"
          fill="url(#bar-fill)"
          stroke="var(--tint)" strokeOpacity="0.4"
        />
      ))}

      {/* Floor */}
      <line x1="40" y1={FLOOR} x2="460" y2={FLOOR} stroke="rgba(255,255,255,0.18)" />

      {/* Trend line */}
      <path
        d={linePath}
        fill="none"
        stroke="var(--tint)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trend dots */}
      {BARS.map((b, i) => (
        <circle
          key={`dot-${i}`}
          cx={b.x + 16} cy={FLOOR - b.h - 6}
          r="3"
          fill="var(--tint)"
        />
      ))}

      {/* Floating verdict pill */}
      <g className="float-b" style={{ transformOrigin: "380px 80px" }}>
        <rect x="320" y="58" width="132" height="38" rx="19"
          fill="rgba(255,255,255,0.05)"
          stroke="var(--tint)" strokeOpacity="0.45" />
        <circle cx="338" cy="77" r="5" fill="var(--tint)" className="pulse-soft" />
        <text x="354" y="82"
          fill="rgba(255,255,255,0.85)"
          fontFamily="var(--font-geist-sans, sans-serif)"
          fontSize="12" fontWeight="600">
          Cpk 1.84
        </text>
      </g>

      {/* x-axis ticks */}
      <text x="40" y={FLOOR + 18}
        fill="rgba(255,255,255,0.45)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">
        WK 01
      </text>
      <text x="430" y={FLOOR + 18}
        fill="rgba(255,255,255,0.45)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">
        WK 10
      </text>
    </svg>
  );
}
