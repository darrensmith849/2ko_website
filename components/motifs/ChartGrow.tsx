/**
 * ChartGrow — Sigmafy motif.
 *
 * A denser SPC-style chart: sparkline header, rising bars with
 * sigma-band overlay, individual data points with deviation markers,
 * LSL/UCL lines, a floating Cpk verdict pill, and a small DMAIC
 * stage indicator. Tint-aware via `var(--tint)`.
 */
const BARS = [
  { x: 60,  h: 70  },
  { x: 95,  h: 86  },
  { x: 130, h: 98  },
  { x: 165, h: 108 },
  { x: 200, h: 124 },
  { x: 235, h: 132 },
  { x: 270, h: 142 },
  { x: 305, h: 156 },
  { x: 340, h: 168 },
  { x: 375, h: 174 },
  { x: 410, h: 186 },
  { x: 445, h: 196 },
];
const FLOOR = 330;
const BAR_W = 22;

export default function ChartGrow({ className }: { className?: string }) {
  // Trend line from bar tops
  const linePath = BARS
    .map((b, i) => `${i === 0 ? "M" : "L"} ${b.x + BAR_W / 2} ${FLOOR - b.h - 8}`)
    .join(" ");

  // Sigma deviations (-1 below, +1 above the line for visual variety)
  const deviations = [0.6, -0.4, 0.3, -0.5, 0.4, -0.3, 0.5, -0.2, 0.4, -0.4, 0.3, -0.2];

  return (
    <svg
      viewBox="0 0 500 400"
      role="img"
      aria-label="Sigmafy statistical process chart"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="cg-bg" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.18" />
          <stop offset="75%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cg-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--tint)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="cg-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-surface2)" />
          <stop offset="100%" stopColor="var(--color-surface)" />
        </linearGradient>
        <pattern id="cg-grid" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
          <path d="M 35 0 L 0 0 0 35" fill="none" stroke="rgb(var(--motif-fg) / 0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="500" height="400" fill="url(#cg-grid)" />
      <rect width="500" height="400" fill="url(#cg-bg)" />

      {/* Header strip — DMAIC stage indicator + summary */}
      <g>
        <rect x="20" y="18" width="460" height="34" rx="8"
              fill="url(#cg-panel)" stroke="rgb(var(--motif-fg) / 0.10)" />
        {/* DMAIC dots */}
        {["D", "M", "A", "I", "C"].map((letter, i) => {
          const isActive = i <= 3;
          return (
            <g key={letter}>
              <circle cx={36 + i * 22} cy={35} r="9"
                      fill={isActive ? "var(--tint)" : "rgb(var(--motif-fg) / 0.06)"}
                      stroke={isActive ? "var(--tint)" : "rgb(var(--motif-fg) / 0.18)"}
                      opacity={isActive ? 1 : 0.7} />
              <text x={36 + i * 22} y={38.5} textAnchor="middle"
                    fill={isActive ? "rgb(var(--motif-fg) / 0.95)" : "rgb(var(--motif-fg) / 0.45)"}
                    fontFamily="var(--font-geist-mono, monospace)"
                    fontSize="9" fontWeight="700">{letter}</text>
            </g>
          );
        })}
        <text x="160" y="38" fill="rgb(var(--motif-fg) / 0.7)"
              fontFamily="var(--font-geist-mono, monospace)" fontSize="10"
              letterSpacing="0.16em" fontWeight="600">STAGE · IMPROVE</text>
        {/* Right summary */}
        <text x="320" y="33" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.15em">σ-LEVEL</text>
        <text x="320" y="46" fill="var(--tint)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="13" fontWeight="700">5.8σ</text>
        <text x="380" y="33" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.15em">DPMO</text>
        <text x="380" y="46" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="13" fontWeight="700">12.4</text>
        <text x="430" y="33" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.15em">YIELD</text>
        <text x="430" y="46" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="13" fontWeight="700">99.9%</text>
      </g>

      {/* Y-axis ticks */}
      {[0, 40, 80, 120, 160, 200].map((v) => (
        <g key={v}>
          <line x1="40" x2="468" y1={FLOOR - v} y2={FLOOR - v}
                stroke="rgb(var(--motif-fg) / 0.05)" strokeDasharray="2 4" />
          <text x="30" y={FLOOR - v + 3} textAnchor="end"
                fill="rgb(var(--motif-fg) / 0.35)"
                fontFamily="var(--font-geist-mono, monospace)" fontSize="8">{v}</text>
        </g>
      ))}

      {/* Control-limit band (UCL/LCL) */}
      <rect
        x="40" y={FLOOR - 200}
        width="428" height="64"
        fill="var(--tint)" opacity="0.08"
      />
      <line x1="40" x2="468" y1={FLOOR - 200} y2={FLOOR - 200}
            stroke="var(--tint)" strokeOpacity="0.5" strokeDasharray="6 4" strokeWidth="1.2" />
      <line x1="40" x2="468" y1={FLOOR - 136} y2={FLOOR - 136}
            stroke="var(--tint)" strokeOpacity="0.5" strokeDasharray="6 4" strokeWidth="1.2" />
      <text x="44" y={FLOOR - 204} fill="var(--tint)" opacity="0.8"
            fontFamily="var(--font-geist-mono, monospace)"
            fontSize="9" letterSpacing="0.14em" fontWeight="600">UCL · 3σ</text>
      <text x="44" y={FLOOR - 124} fill="var(--tint)" opacity="0.8"
            fontFamily="var(--font-geist-mono, monospace)"
            fontSize="9" letterSpacing="0.14em" fontWeight="600">LCL · -3σ</text>

      {/* Bars */}
      {BARS.map((b, i) => (
        <rect
          key={i}
          x={b.x} y={FLOOR - b.h}
          width={BAR_W} height={b.h} rx="2"
          fill="url(#cg-bar)"
          stroke="var(--tint)" strokeOpacity="0.45"
        />
      ))}

      {/* Floor with x-axis */}
      <line x1="40" y1={FLOOR} x2="468" y2={FLOOR} stroke="rgb(var(--motif-fg) / 0.25)" strokeWidth="1.2" />

      {/* Sigma deviation markers — small vertical ticks above each bar */}
      {BARS.map((b, i) => {
        const dy = deviations[i] * 10;
        return (
          <line key={`dev-${i}`}
                x1={b.x + BAR_W / 2} y1={FLOOR - b.h - 8}
                x2={b.x + BAR_W / 2} y2={FLOOR - b.h - 8 + dy}
                stroke="rgb(var(--motif-fg) / 0.5)" strokeWidth="1" />
        );
      })}

      {/* Trend line */}
      <path
        d={linePath}
        fill="none"
        stroke="var(--tint)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trend dots (larger, with halo on last point) */}
      {BARS.map((b, i) => {
        const isLast = i === BARS.length - 1;
        return (
          <g key={`dot-${i}`}>
            {isLast && (
              <circle cx={b.x + BAR_W / 2} cy={FLOOR - b.h - 8} r="9"
                      fill="var(--tint)" opacity="0.25"
                      className="pulse-soft"
                      style={{ transformOrigin: `${b.x + BAR_W / 2}px ${FLOOR - b.h - 8}px` }} />
            )}
            <circle
              cx={b.x + BAR_W / 2} cy={FLOOR - b.h - 8}
              r={isLast ? 4 : 3}
              fill="var(--tint)"
              stroke="rgba(0,0,0,0.4)" strokeWidth={isLast ? 1.5 : 0}
            />
          </g>
        );
      })}

      {/* Floating verdict pill — Cpk */}
      <g className="float-b" style={{ transformOrigin: "405px 88px" }}>
        <rect x="340" y="68" width="140" height="42" rx="21"
          fill="rgba(0,0,0,0.5)"
          stroke="var(--tint)" strokeOpacity="0.6" strokeWidth="1.4" />
        <circle cx="358" cy="89" r="6" fill="var(--tint)" className="pulse-soft"
                style={{ transformOrigin: "358px 89px" }} />
        <text x="372" y="86"
          fill="rgb(var(--motif-fg) / 0.6)"
          fontFamily="var(--font-geist-mono, monospace)"
          fontSize="8" letterSpacing="0.16em" fontWeight="600">CAPABILITY</text>
        <text x="372" y="100"
          fill="rgb(var(--motif-fg) / 0.95)"
          fontFamily="var(--font-geist-sans, sans-serif)"
          fontSize="14" fontWeight="700">Cpk 1.84</text>
      </g>

      {/* Floating mini-card: defect rate */}
      <g className="float-a" style={{ transformOrigin: "110px 100px" }}>
        <rect x="40" y="76" width="116" height="44" rx="8"
              fill="url(#cg-panel)" stroke="rgb(var(--motif-fg) / 0.12)" />
        <text x="50" y="92" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.16em" fontWeight="600">DEFECTS</text>
        <text x="50" y="112" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="14" fontWeight="700">3.2</text>
        <text x="74" y="112" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9">/M</text>
        <text x="118" y="112" fill="var(--tint)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="11" fontWeight="700">↓42%</text>
      </g>

      {/* x-axis ticks */}
      <text x="60" y={FLOOR + 16}
        fill="rgb(var(--motif-fg) / 0.45)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">WK 01</text>
      <text x="260" y={FLOOR + 16}
        fill="rgb(var(--motif-fg) / 0.45)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">WK 06</text>
      <text x="455" y={FLOOR + 16}
        fill="rgb(var(--motif-fg) / 0.45)"
        fontFamily="var(--font-geist-mono, monospace)"
        fontSize="9" letterSpacing="0.12em">WK 12</text>
    </svg>
  );
}
