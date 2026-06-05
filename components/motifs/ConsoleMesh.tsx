/**
 * ConsoleMesh — 2KO Systems motif.
 *
 * A faux operations console: a mesh of nodes connected by lines,
 * with three floating "panel" cards drifting at different speeds.
 * Reads `var(--tint)` for active edges and node fills.
 */
type Node = { cx: number; cy: number; active?: boolean };
const NODES: Node[] = [
  { cx: 80,  cy: 90  },
  { cx: 180, cy: 60, active: true },
  { cx: 290, cy: 100 },
  { cx: 400, cy: 70  },
  { cx: 120, cy: 180 },
  { cx: 230, cy: 200, active: true },
  { cx: 340, cy: 190 },
  { cx: 440, cy: 220 },
  { cx: 70,  cy: 280 },
  { cx: 200, cy: 320 },
  { cx: 310, cy: 290, active: true },
  { cx: 420, cy: 310 },
];

const EDGES: Array<[number, number, boolean?]> = [
  [0, 4], [4, 1], [1, 2], [2, 6, true], [3, 7],
  [5, 6, true], [5, 9], [6, 10, true], [8, 9],
  [10, 11], [7, 11], [1, 5], [4, 5], [2, 5],
];

export default function ConsoleMesh({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 400"
      role="img"
      aria-label="Operations console mesh"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      {/* Tint backdrop */}
      <defs>
        <radialGradient id="mesh-bg" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.14" />
          <stop offset="70%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="panel-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
      </defs>
      <rect width="500" height="400" fill="url(#mesh-bg)" />

      {/* Mesh edges */}
      {EDGES.map(([a, b, hot], i) => {
        const A = NODES[a], B = NODES[b];
        return (
          <line
            key={`e-${i}`}
            x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy}
            stroke={hot ? "var(--tint)" : "rgba(255,255,255,0.14)"}
            strokeOpacity={hot ? 0.75 : 1}
            strokeWidth={hot ? 1.4 : 1}
          />
        );
      })}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <g key={`n-${i}`}>
          {n.active && (
            <circle
              cx={n.cx} cy={n.cy} r={10}
              fill="var(--tint)" opacity={0.20}
              className="pulse-soft"
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
          )}
          <circle
            cx={n.cx} cy={n.cy} r={n.active ? 4 : 2.6}
            fill={n.active ? "var(--tint)" : "rgba(255,255,255,0.55)"}
          />
        </g>
      ))}

      {/* Floating panel cards */}
      <g className="float-a" style={{ transformOrigin: "100px 80px" }}>
        <rect x="36" y="40" width="120" height="48" rx="8"
              fill="url(#panel-bg)" stroke="rgba(255,255,255,0.10)" />
        <rect x="46" y="50" width="38" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
        <rect x="46" y="62" width="86" height="4" rx="2" fill="rgba(255,255,255,0.20)" />
        <rect x="46" y="72" width="60" height="4" rx="2" fill="rgba(255,255,255,0.20)" />
        <circle cx="146" cy="50" r="3" fill="var(--tint)" />
      </g>

      <g className="float-b" style={{ transformOrigin: "380px 130px" }}>
        <rect x="334" y="116" width="132" height="60" rx="10"
              fill="url(#panel-bg)" stroke="rgba(255,255,255,0.10)" />
        <rect x="346" y="128" width="50" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
        {/* tiny bar chart */}
        <rect x="346" y="148" width="8" height="18" rx="1" fill="var(--tint)" opacity="0.85" />
        <rect x="358" y="142" width="8" height="24" rx="1" fill="var(--tint)" opacity="0.65" />
        <rect x="370" y="138" width="8" height="28" rx="1" fill="var(--tint)" />
        <rect x="382" y="146" width="8" height="20" rx="1" fill="var(--tint)" opacity="0.55" />
        <rect x="394" y="134" width="8" height="32" rx="1" fill="var(--tint)" opacity="0.9" />
      </g>

      <g className="float-c" style={{ transformOrigin: "170px 330px" }}>
        <rect x="110" y="310" width="150" height="56" rx="10"
              fill="url(#panel-bg)" stroke="rgba(255,255,255,0.10)" />
        <circle cx="128" cy="338" r="10" fill="var(--tint)" opacity="0.18" />
        <circle cx="128" cy="338" r="4" fill="var(--tint)" />
        <rect x="148" y="324" width="68" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
        <rect x="148" y="338" width="100" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
        <rect x="148" y="348" width="80" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
      </g>
    </svg>
  );
}
