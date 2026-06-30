/**
 * KPIBoard — Case Studies motif.
 *
 * A scorecard of impact metrics from engagements: six KPI tiles
 * (defects, OEE, cycle, Cpk, throughput, NPS) each with a delta,
 * mini sparkline, and category label. A floating "results"
 * verdict pill drifts at the top-right. Tint-aware via
 * `var(--tint)`.
 */
const TILES = [
  {
    label: "DEFECTS",
    sub: "ppm",
    value: "412",
    delta: "↓42%",
    deltaGood: true,
    spark: [38, 36, 34, 31, 28, 25, 22, 20, 18, 16, 15, 14],
  },
  {
    label: "OEE",
    sub: "% avail × perf × qual",
    value: "84.7",
    delta: "↑18pt",
    deltaGood: true,
    spark: [62, 64, 67, 69, 72, 74, 76, 78, 80, 82, 83, 85],
  },
  {
    label: "CYCLE",
    sub: "minutes",
    value: "11.3",
    delta: "↓31%",
    deltaGood: true,
    spark: [22, 21, 20, 18, 17, 16, 15, 14, 13, 12, 12, 11],
  },
  {
    label: "Cpk",
    sub: "capability",
    value: "1.84",
    delta: "0.8→1.84",
    deltaGood: true,
    spark: [12, 14, 16, 18, 20, 22, 26, 30, 34, 38, 42, 44],
  },
  {
    label: "THROUGHPUT",
    sub: "units / shift",
    value: "1,284",
    delta: "+24%",
    deltaGood: true,
    spark: [60, 62, 64, 66, 68, 70, 72, 75, 78, 80, 82, 85],
  },
  {
    label: "NPS",
    sub: "internal stakeholders",
    value: "+62",
    delta: "↑41pt",
    deltaGood: true,
    spark: [20, 24, 28, 32, 38, 44, 48, 52, 56, 58, 60, 62],
  },
];

function Sparkline({
  data, x, y, w, h,
}: { data: number[]; x: number; y: number; w: number; h: number }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const pts = data
    .map((v, i) => `${x + i * step},${y + h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <>
      <polyline
        points={pts}
        fill="none"
        stroke="var(--tint)"
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={x + (data.length - 1) * step}
        cy={y + h - ((data[data.length - 1] - min) / range) * h}
        r="2.4"
        fill="var(--tint)"
      />
    </>
  );
}

export default function KPIBoard({ className }: { className?: string }) {
  const COLS = 3;
  const TILE_W = 148;
  const TILE_H = 110;
  const GAP_X = 14;
  const GAP_Y = 14;
  const START_X = 26;
  const START_Y = 86;

  return (
    <svg
      viewBox="0 0 500 420"
      role="img"
      aria-label="Operational outcomes scorecard"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="kb-bg" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.16" />
          <stop offset="75%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kb-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-surface2)" />
          <stop offset="100%" stopColor="var(--color-surface)" />
        </linearGradient>
        <pattern id="kb-grid" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
          <path d="M 35 0 L 0 0 0 35" fill="none" stroke="rgb(var(--motif-fg) / 0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="500" height="420" fill="url(#kb-grid)" />
      <rect width="500" height="420" fill="url(#kb-bg)" />

      {/* Header — scorecard title row */}
      <g>
        <rect x="20" y="20" width="460" height="48" rx="10"
              fill="url(#kb-tile)" stroke="rgb(var(--motif-fg) / 0.12)" />
        <circle cx="40" cy="44" r="5" fill="var(--tint)" className="pulse-soft"
                style={{ transformOrigin: "40px 44px" }} />
        <text x="54" y="40" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.18em" fontWeight="600">CLIENT · ANON-PMG-04</text>
        <text x="54" y="56" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="14" fontWeight="600">12-week DMAIC engagement · 2KO Group</text>
        {/* Right-side summary chip */}
        <rect x="346" y="32" width="120" height="26" rx="13"
              fill="var(--tint)" opacity="0.18"
              stroke="var(--tint)" strokeOpacity="0.65" strokeWidth="1.2" />
        <text x="406" y="48" textAnchor="middle" fill="rgb(var(--motif-fg) / 0.98)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="11" fontWeight="700" letterSpacing="0.06em">R 4.2M SAVED · ANNUALISED</text>
      </g>

      {/* KPI tile grid */}
      {TILES.map((t, i) => {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const tx = START_X + col * (TILE_W + GAP_X);
        const ty = START_Y + row * (TILE_H + GAP_Y);
        return (
          <g key={t.label}>
            <rect x={tx} y={ty} width={TILE_W} height={TILE_H} rx="10"
                  fill="url(#kb-tile)" stroke="rgb(var(--motif-fg) / 0.12)" />
            <text x={tx + 12} y={ty + 18} fill="rgb(var(--motif-fg) / 0.6)"
                  fontFamily="var(--font-geist-mono, monospace)"
                  fontSize="9" letterSpacing="0.18em" fontWeight="600">{t.label}</text>
            <text x={tx + 12} y={ty + 32} fill="rgb(var(--motif-fg) / 0.35)"
                  fontFamily="var(--font-geist-mono, monospace)"
                  fontSize="8">{t.sub}</text>
            <text x={tx + 12} y={ty + 62} fill="rgb(var(--motif-fg) / 0.98)"
                  fontFamily="var(--font-geist-sans, sans-serif)"
                  fontSize="22" fontWeight="700">{t.value}</text>
            <text x={tx + TILE_W - 12} y={ty + 62} textAnchor="end"
                  fill="var(--tint)"
                  fontFamily="var(--font-geist-mono, monospace)"
                  fontSize="11" fontWeight="700">{t.delta}</text>
            <Sparkline data={t.spark} x={tx + 12} y={ty + 76} w={TILE_W - 24} h={24} />
          </g>
        );
      })}

    </svg>
  );
}
