/**
 * ConsoleMesh — 2KO Systems motif.
 *
 * A faux operations console: header status bar with LIVE indicator,
 * a denser node mesh with animated trace lines, three floating panel
 * cards (KPI tile, sparkline bar chart, request row) drifting at
 * different speeds. Reads `var(--tint)` for active edges, node
 * fills, and accent details.
 */
type Node = { cx: number; cy: number; active?: boolean };
const NODES: Node[] = [
  { cx: 60,  cy: 130 },
  { cx: 130, cy: 100, active: true },
  { cx: 210, cy: 140 },
  { cx: 290, cy: 110 },
  { cx: 370, cy: 145 },
  { cx: 440, cy: 115 },
  { cx: 90,  cy: 220, active: true },
  { cx: 170, cy: 240 },
  { cx: 250, cy: 215 },
  { cx: 330, cy: 245, active: true },
  { cx: 410, cy: 225 },
  { cx: 60,  cy: 320 },
  { cx: 145, cy: 335 },
  { cx: 230, cy: 310 },
  { cx: 315, cy: 340 },
  { cx: 400, cy: 320, active: true },
  { cx: 470, cy: 295 },
];

const EDGES: Array<[number, number, boolean?]> = [
  [0, 1], [1, 2], [2, 3], [3, 4, true], [4, 5],
  [0, 6], [1, 6, true], [2, 8], [3, 9, true], [4, 10], [5, 10],
  [6, 7], [7, 8, true], [8, 9], [9, 10],
  [6, 11], [7, 12], [8, 13, true], [9, 14], [10, 15, true], [10, 16],
  [11, 12], [12, 13], [13, 14, true], [14, 15], [15, 16],
];

export default function ConsoleMesh({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 420"
      role="img"
      aria-label="Operations console mesh"
      className={className}
      style={{ color: "var(--tint)" }}
    >
      <defs>
        <radialGradient id="cm-bg" cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.18" />
          <stop offset="75%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cm-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
        <linearGradient id="cm-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--tint)" stopOpacity="0.3" />
        </linearGradient>
        <pattern id="cm-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="500" height="420" fill="url(#cm-grid)" />
      <rect width="500" height="420" fill="url(#cm-bg)" />

      {/* Top status bar */}
      <g>
        <rect x="20" y="20" width="460" height="36" rx="8"
              fill="url(#cm-panel)" stroke="rgba(255,255,255,0.10)" />
        <circle cx="38" cy="38" r="4" fill="var(--tint)" className="pulse-soft"
                style={{ transformOrigin: "38px 38px" }} />
        <text x="52" y="42" fill="rgba(255,255,255,0.85)"
              fontFamily="var(--font-geist-mono, monospace)" fontSize="11"
              letterSpacing="0.16em" fontWeight="600">LIVE · OPS · 23 NODES</text>
        {/* Status pills */}
        <rect x="290" y="29" width="60" height="18" rx="9"
              fill="rgba(255,255,255,0.04)" stroke="var(--tint)" strokeOpacity="0.5" />
        <text x="320" y="41" textAnchor="middle" fill="var(--tint)"
              fontFamily="var(--font-geist-mono, monospace)" fontSize="9"
              letterSpacing="0.15em" fontWeight="600">98.7%</text>
        <rect x="358" y="29" width="50" height="18" rx="9"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
        <text x="383" y="41" textAnchor="middle" fill="rgba(255,255,255,0.75)"
              fontFamily="var(--font-geist-mono, monospace)" fontSize="9"
              letterSpacing="0.15em">4 · ALERTS</text>
        <rect x="416" y="29" width="50" height="18" rx="9"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
        <text x="441" y="41" textAnchor="middle" fill="rgba(255,255,255,0.75)"
              fontFamily="var(--font-geist-mono, monospace)" fontSize="9"
              letterSpacing="0.15em">v2.1</text>
      </g>

      {/* Mesh edges */}
      {EDGES.map(([a, b, hot], i) => {
        const A = NODES[a], B = NODES[b];
        return (
          <line
            key={`e-${i}`}
            x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy}
            stroke={hot ? "var(--tint)" : "rgba(255,255,255,0.16)"}
            strokeOpacity={hot ? 0.85 : 1}
            strokeWidth={hot ? 1.6 : 1}
          />
        );
      })}

      {/* Animated trace line — follows a hot path */}
      <path
        d="M 130 100 L 210 140 L 290 110 L 250 215 L 330 245 L 400 320"
        fill="none" stroke="var(--tint)" strokeWidth="2.2"
        strokeLinecap="round" strokeOpacity="0.9"
        strokeDasharray="4 280" strokeDashoffset="0"
        style={{ animation: "tracePath 4s linear infinite" }}
      />

      {/* Nodes */}
      {NODES.map((n, i) => (
        <g key={`n-${i}`}>
          {n.active && (
            <circle
              cx={n.cx} cy={n.cy} r={11}
              fill="var(--tint)" opacity={0.22}
              className="pulse-soft"
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
          )}
          <circle
            cx={n.cx} cy={n.cy} r={n.active ? 4.5 : 2.8}
            fill={n.active ? "var(--tint)" : "rgba(255,255,255,0.65)"}
            stroke={n.active ? "var(--tint)" : "none"}
            strokeOpacity={n.active ? 0.4 : 0}
            strokeWidth={n.active ? 4 : 0}
          />
        </g>
      ))}

      {/* Floating panel: KPI tile (top-left area, drifts) */}
      <g className="float-a" style={{ transformOrigin: "110px 165px" }}>
        <rect x="42" y="138" width="138" height="56" rx="10"
              fill="url(#cm-panel)" stroke="rgba(255,255,255,0.14)" />
        <text x="52" y="156" fill="rgba(255,255,255,0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.16em">THROUGHPUT</text>
        <text x="52" y="180" fill="rgba(255,255,255,0.95)"
              fontFamily="var(--font-geist-sans, sans-serif)"
              fontSize="20" fontWeight="700">1,284</text>
        <text x="108" y="180" fill="var(--tint)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="11" fontWeight="700">+18%</text>
        {/* mini sparkline */}
        <polyline
          points="52,190 60,188 68,184 76,186 84,180 92,176 100,178 108,170 116,166 124,162 132,158 140,154 148,156 156,150 164,146 172,148"
          fill="none" stroke="var(--tint)" strokeWidth="1.4" strokeOpacity="0.85"
        />
      </g>

      {/* Floating panel: bar chart (right side) */}
      <g className="float-b" style={{ transformOrigin: "395px 180px" }}>
        <rect x="318" y="138" width="156" height="84" rx="10"
              fill="url(#cm-panel)" stroke="rgba(255,255,255,0.14)" />
        <text x="330" y="156" fill="rgba(255,255,255,0.55)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="9" letterSpacing="0.16em">CYCLE · LAST 6</text>
        <rect x="332" y="180" width="14" height="28" rx="2" fill="url(#cm-bar)" opacity="0.55" />
        <rect x="352" y="172" width="14" height="36" rx="2" fill="url(#cm-bar)" opacity="0.75" />
        <rect x="372" y="184" width="14" height="24" rx="2" fill="url(#cm-bar)" opacity="0.6" />
        <rect x="392" y="166" width="14" height="42" rx="2" fill="url(#cm-bar)" opacity="0.85" />
        <rect x="412" y="158" width="14" height="50" rx="2" fill="url(#cm-bar)" opacity="0.95" />
        <rect x="432" y="148" width="14" height="60" rx="2" fill="url(#cm-bar)" />
        <line x1="330" y1="210" x2="455" y2="210" stroke="rgba(255,255,255,0.18)" />
      </g>

      {/* Floating panel: request rows (bottom-center) */}
      <g className="float-c" style={{ transformOrigin: "210px 380px" }}>
        <rect x="130" y="350" width="220" height="60" rx="10"
              fill="url(#cm-panel)" stroke="rgba(255,255,255,0.14)" />
        {/* Row 1 */}
        <circle cx="146" cy="367" r="4" fill="var(--tint)" />
        <rect x="158" y="363" width="76" height="5" rx="2.5" fill="rgba(255,255,255,0.75)" />
        <rect x="158" y="372" width="120" height="3" rx="1.5" fill="rgba(255,255,255,0.22)" />
        <rect x="306" y="362" width="36" height="12" rx="6"
              fill="var(--tint)" opacity="0.22" stroke="var(--tint)" strokeOpacity="0.6" />
        <text x="324" y="371" textAnchor="middle" fill="var(--tint)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.12em" fontWeight="600">DONE</text>
        {/* Row 2 */}
        <circle cx="146" cy="392" r="4" fill="rgba(255,255,255,0.4)" />
        <rect x="158" y="388" width="62" height="5" rx="2.5" fill="rgba(255,255,255,0.55)" />
        <rect x="158" y="397" width="104" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
        <rect x="306" y="387" width="36" height="12" rx="6"
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" />
        <text x="324" y="396" textAnchor="middle" fill="rgba(255,255,255,0.65)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="8" letterSpacing="0.12em" fontWeight="600">WIP</text>
      </g>

      <style>{`
        @keyframes tracePath {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -284; }
        }
      `}</style>
    </svg>
  );
}
