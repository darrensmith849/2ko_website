/**
 * DMAICLoop — Six Sigma South Africa motif.
 *
 * Five labelled nodes (Define / Measure / Analyse / Improve / Control)
 * arranged around a rotating dashed ring. The ring rotates slowly via
 * `.dmaic-rotate`; the node labels stay upright (counter-rotated by
 * inverse transform).
 *
 * Tint-aware via `var(--tint)`.
 */
const NODES = [
  { letter: "D", label: "Define"   },
  { letter: "M", label: "Measure"  },
  { letter: "A", label: "Analyse"  },
  { letter: "I", label: "Improve"  },
  { letter: "C", label: "Control"  },
];

const RADIUS = 150;
const CENTER = 200;

export default function DMAICLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="DMAIC continuous-improvement loop"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="dmaic-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.14" />
          <stop offset="60%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={CENTER} cy={CENTER} r="180" fill="url(#dmaic-bg)" />

      {/* Rotating dashed orbit */}
      <g className="dmaic-rotate" style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--tint)"
          strokeOpacity="0.55"
          strokeWidth="1.1"
          strokeDasharray="4 8"
        />
      </g>

      {/* Static inner ring */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS - 28}
        fill="none"
        stroke="rgb(var(--motif-fg) / 0.08)"
        strokeWidth="1"
      />

      {/* Centre badge */}
      <g>
        <circle cx={CENTER} cy={CENTER} r="42" fill="var(--color-surface)" stroke="var(--tint)" strokeOpacity="0.32" />
        <text
          x={CENTER}
          y={CENTER - 4}
          textAnchor="middle"
          fill="var(--tint)"
          fontFamily="var(--font-geist-sans, sans-serif)"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.18em"
        >
          DMAIC
        </text>
        <text
          x={CENTER}
          y={CENTER + 14}
          textAnchor="middle"
          fill="rgb(var(--motif-fg) / 0.55)"
          fontFamily="var(--font-geist-mono, monospace)"
          fontSize="9"
          letterSpacing="0.12em"
        >
          5 STAGES
        </text>
      </g>

      {/* Nodes around the orbit */}
      {NODES.map((node, i) => {
        const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
        const x = CENTER + Math.cos(angle) * RADIUS;
        const y = CENTER + Math.sin(angle) * RADIUS;
        return (
          <g key={node.letter}>
            <circle cx={x} cy={y} r="18" fill="var(--color-surface)" stroke="var(--tint)" strokeOpacity="0.6" />
            <text
              x={x}
              y={y + 4}
              textAnchor="middle"
              fill="var(--tint)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="13"
              fontWeight="700"
            >
              {node.letter}
            </text>
            <text
              x={x}
              y={y + 36}
              textAnchor="middle"
              fill="rgb(var(--motif-fg) / 0.65)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="10.5"
              letterSpacing="0.08em"
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
