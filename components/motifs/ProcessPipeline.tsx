/**
 * ProcessPipeline — About motif.
 *
 * The 2KO engagement model rendered as a 5-stage pipeline:
 * Audit → Train → Improve → Embed → Automate. Each stage is a
 * card with a label, micro-icon (drawn as primitives), and a
 * status dot. Animated trace flows across the pipeline. A
 * floating "outcome" pill drifts above. Tint-aware via
 * `var(--tint)`.
 */
const STAGES = [
  { code: "01", label: "AUDIT",    sub: "diagnose the gap" },
  { code: "02", label: "TRAIN",    sub: "build the muscle" },
  { code: "03", label: "IMPROVE",  sub: "run the projects" },
  { code: "04", label: "EMBED",    sub: "system over heroics" },
  { code: "05", label: "AUTOMATE", sub: "lock in the gain" },
];

function StageIcon({ x, y, kind }: { x: number; y: number; kind: number }) {
  const cx = x + 14;
  const cy = y + 14;
  switch (kind) {
    case 0: // audit — magnifier
      return (
        <g stroke="var(--tint)" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx={cx - 2} cy={cy - 2} r="7" />
          <line x1={cx + 3} y1={cy + 3} x2={cx + 8} y2={cy + 8} />
        </g>
      );
    case 1: // train — graduation/stack
      return (
        <g stroke="var(--tint)" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <polyline points={`${cx - 8},${cy - 2} ${cx},${cy - 6} ${cx + 8},${cy - 2} ${cx},${cy + 2} ${cx - 8},${cy - 2}`} />
          <line x1={cx + 5} y1={cy} x2={cx + 5} y2={cy + 6} />
        </g>
      );
    case 2: // improve — upward arrow + bar
      return (
        <g stroke="var(--tint)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1={cx - 7} y1={cy + 6} x2={cx + 7} y2={cy - 6} />
          <polyline points={`${cx + 2},${cy - 6} ${cx + 7},${cy - 6} ${cx + 7},${cy - 1}`} />
        </g>
      );
    case 3: // embed — interlocked squares
      return (
        <g stroke="var(--tint)" strokeWidth="1.6" fill="none">
          <rect x={cx - 7} y={cy - 6} width="9" height="9" rx="1.5" />
          <rect x={cx - 2} y={cy - 1} width="9" height="9" rx="1.5" />
        </g>
      );
    case 4: // automate — gear / circuit
      return (
        <g stroke="var(--tint)" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx={cx} cy={cy} r="5" />
          <line x1={cx} y1={cy - 9} x2={cx} y2={cy - 6} />
          <line x1={cx} y1={cy + 6} x2={cx} y2={cy + 9} />
          <line x1={cx - 9} y1={cy} x2={cx - 6} y2={cy} />
          <line x1={cx + 6} y1={cy} x2={cx + 9} y2={cy} />
        </g>
      );
    default:
      return null;
  }
}

export default function ProcessPipeline({ className }: { className?: string }) {
  const STAGE_W = 84;
  const STAGE_H = 132;
  const GAP = 14;
  const START_X = 22;
  const TOP = 150;

  return (
    <svg
      viewBox="0 0 500 420"
      role="img"
      aria-label="The 2KO five-stage engagement pipeline"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="pp-bg" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.16" />
          <stop offset="75%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pp-stage" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-surface2)" />
          <stop offset="100%" stopColor="var(--color-surface)" />
        </linearGradient>
        <linearGradient id="pp-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--tint)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--tint)" stopOpacity="0" />
        </linearGradient>
        <pattern id="pp-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(var(--motif-fg) / 0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="500" height="420" fill="url(#pp-grid)" />
      <rect width="500" height="420" fill="url(#pp-bg)" />

      {/* Header */}
      <g>
        <rect x="20" y="24" width="460" height="64" rx="12"
              fill="url(#pp-stage)" stroke="rgb(var(--motif-fg) / 0.12)" />
        <text x="36" y="50" fill="rgb(var(--motif-fg) / 0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="10" letterSpacing="0.18em" fontWeight="600">THE 2KO MODEL</text>
        <text x="36" y="74" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="18" fontWeight="600">From assessment to autonomy.</text>
        {/* Right summary chips */}
        <rect x="350" y="42" width="56" height="20" rx="10"
              fill="rgb(var(--motif-fg) / 0.04)" stroke="rgb(var(--motif-fg) / 0.18)" />
        <text x="378" y="55" textAnchor="middle" fill="rgb(var(--motif-fg) / 0.7)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.14em" fontWeight="600">28 YRS</text>
        <rect x="412" y="42" width="56" height="20" rx="10"
              fill="var(--tint)" opacity="0.22"
              stroke="var(--tint)" strokeOpacity="0.6" />
        <text x="440" y="55" textAnchor="middle" fill="var(--tint)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.14em" fontWeight="700">1,000+</text>
      </g>

      {/* Connector arrows between stages — drawn behind cards */}
      {STAGES.slice(0, -1).map((_, i) => {
        const x1 = START_X + (i + 1) * STAGE_W + i * GAP;
        const x2 = x1 + GAP;
        const y = TOP + STAGE_H / 2;
        return (
          <g key={`arrow-${i}`}>
            <line x1={x1} y1={y} x2={x2 - 4} y2={y}
                  stroke="rgb(var(--motif-fg) / 0.25)" strokeWidth="1.4" />
            <polyline points={`${x2 - 6},${y - 3} ${x2 - 2},${y} ${x2 - 6},${y + 3}`}
                      fill="none" stroke="rgb(var(--motif-fg) / 0.4)" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      })}

      {/* Animated flow line beneath stages */}
      <g>
        <line x1={START_X + 12} y1={TOP + STAGE_H + 22}
              x2={START_X + STAGES.length * STAGE_W + (STAGES.length - 1) * GAP - 12}
              y2={TOP + STAGE_H + 22}
              stroke="rgb(var(--motif-fg) / 0.10)" strokeWidth="2" strokeLinecap="round" />
        <line x1={START_X + 12} y1={TOP + STAGE_H + 22}
              x2={START_X + STAGES.length * STAGE_W + (STAGES.length - 1) * GAP - 12}
              y2={TOP + STAGE_H + 22}
              stroke="url(#pp-flow)" strokeWidth="2.4" strokeLinecap="round"
              strokeDasharray="60 380" strokeDashoffset="0"
              style={{ animation: "ppFlow 4s linear infinite" }} />
      </g>

      {/* Stage cards */}
      {STAGES.map((s, i) => {
        const tx = START_X + i * (STAGE_W + GAP);
        const isActive = i === 2;
        return (
          <g key={s.label}>
            <rect x={tx} y={TOP} width={STAGE_W} height={STAGE_H} rx="10"
                  fill="url(#pp-stage)"
                  stroke={isActive ? "var(--tint)" : "rgb(var(--motif-fg) / 0.14)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  strokeOpacity={isActive ? 0.85 : 1} />
            {/* Code chip */}
            <rect x={tx + 10} y={TOP + 10} width="26" height="14" rx="7"
                  fill={isActive ? "var(--tint)" : "rgb(var(--motif-fg) / 0.06)"}
                  opacity={isActive ? 0.95 : 1}
                  stroke={isActive ? "var(--tint)" : "rgb(var(--motif-fg) / 0.18)"} />
            <text x={tx + 23} y={TOP + 20} textAnchor="middle"
                  fill={isActive ? "rgba(0,0,0,0.85)" : "rgb(var(--motif-fg) / 0.7)"}
                  fontFamily="var(--font-geist-mono, monospace)"
                  fontSize="8" fontWeight="700" letterSpacing="0.1em">{s.code}</text>
            {/* Status dot top-right */}
            {isActive ? (
              <>
                <circle cx={tx + STAGE_W - 14} cy={TOP + 17} r="6" fill="var(--tint)" opacity="0.25"
                        className="pulse-soft"
                        style={{ transformOrigin: `${tx + STAGE_W - 14}px ${TOP + 17}px` }} />
                <circle cx={tx + STAGE_W - 14} cy={TOP + 17} r="3" fill="var(--tint)" />
              </>
            ) : (
              <circle cx={tx + STAGE_W - 14} cy={TOP + 17} r="2.4" fill="rgb(var(--motif-fg) / 0.3)" />
            )}
            {/* Icon block */}
            <rect x={tx + (STAGE_W - 32) / 2} y={TOP + 38} width="32" height="32" rx="8"
                  fill="rgb(var(--motif-fg) / 0.03)" stroke="rgb(var(--motif-fg) / 0.10)" />
            <StageIcon x={tx + (STAGE_W - 32) / 2 + 2} y={TOP + 40} kind={i} />
            {/* Label */}
            <text x={tx + STAGE_W / 2} y={TOP + 92} textAnchor="middle"
                  fill="rgb(var(--motif-fg) / 0.95)"
                  fontFamily="var(--font-geist-sans, sans-serif)"
                  fontSize="12" fontWeight="700" letterSpacing="0.06em">{s.label}</text>
            <text x={tx + STAGE_W / 2} y={TOP + 110} textAnchor="middle"
                  fill="rgb(var(--motif-fg) / 0.45)"
                  fontFamily="var(--font-geist-sans, sans-serif)"
                  fontSize="9">{s.sub}</text>
            <text x={tx + STAGE_W / 2} y={TOP + 122} textAnchor="middle"
                  fill="rgb(var(--motif-fg) / 0.35)"
                  fontFamily="var(--font-geist-sans, sans-serif)"
                  fontSize="9">stage</text>
          </g>
        );
      })}

      {/* Floating "outcome" pill — above pipeline */}
      <g className="float-a" style={{ transformOrigin: "260px 122px" }}>
        <rect x="142" y="106" width="232" height="32" rx="16"
              fill="rgba(0,0,0,0.55)"
              stroke="var(--tint)" strokeOpacity="0.6" strokeWidth="1.4" />
        <circle cx="160" cy="122" r="5" fill="var(--tint)" className="pulse-soft"
                style={{ transformOrigin: "160px 122px" }} />
        <text x="174" y="118" fill="rgb(var(--motif-fg) / 0.6)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.16em" fontWeight="600">OUTCOME</text>
        <text x="174" y="132" fill="rgb(var(--motif-fg) / 0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="12" fontWeight="600">Permanence over performance</text>
      </g>

      {/* Bottom legend strip */}
      <g>
        <rect x="20" y="346" width="460" height="50" rx="10"
              fill="url(#pp-stage)" stroke="rgb(var(--motif-fg) / 0.10)" />
        <text x="36" y="368" fill="rgb(var(--motif-fg) / 0.5)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.18em" fontWeight="600">PRINCIPLES</text>
        <text x="36" y="386" fill="rgb(var(--motif-fg) / 0.85)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="11">Results, not reports · Method over magic · Honest scope</text>
      </g>

      <style>{`
        @keyframes ppFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -440; }
        }
      `}</style>
    </svg>
  );
}
