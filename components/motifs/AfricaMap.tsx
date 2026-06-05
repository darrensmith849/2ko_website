/**
 * AfricaMap — umbrella hero motif.
 *
 * A stylised continent of Africa rendered as a constellation of
 * dots, with six "operating cities" pulsing as live points. Reads
 * `currentColor` for the active points and `var(--tint)` for the
 * connecting arcs — so it works in any division scope.
 *
 * No external assets. SVG only.
 */
type City = { name: string; cx: number; cy: number; label?: "JHB" | "CPT" | "PTA" | "NBO" | "LUS" | "DAR" };

const CITIES: City[] = [
  { name: "Johannesburg", cx: 340, cy: 410, label: "JHB" },
  { name: "Cape Town",    cx: 300, cy: 500, label: "CPT" },
  { name: "Pretoria",     cx: 348, cy: 400, label: "PTA" },
  { name: "Nairobi",      cx: 430, cy: 270, label: "NBO" },
  { name: "Lusaka",       cx: 360, cy: 360, label: "LUS" },
  { name: "Dar es Salaam",cx: 440, cy: 295, label: "DAR" },
];

// Sparse dot grid approximating the continent silhouette.
// (Kept compact — a stylised, not literal, geography.)
const DOTS = [
  // North coast / Sahel band
  [240, 120], [280, 110], [320, 110], [360, 115], [400, 120], [440, 125], [480, 135],
  // Sahara mass
  [230, 160], [270, 150], [310, 150], [350, 155], [390, 160], [430, 165], [470, 170], [510, 180],
  // Sahel south edge
  [220, 200], [260, 195], [300, 195], [340, 200], [380, 205], [420, 210], [460, 215], [500, 220],
  // Horn of Africa
  [470, 240], [500, 245], [520, 235],
  // Equatorial band
  [240, 240], [280, 240], [320, 245], [360, 250], [400, 255], [440, 260],
  // Central
  [260, 280], [300, 285], [340, 295], [380, 300], [420, 305], [460, 305],
  // Southern central
  [280, 320], [320, 330], [360, 340], [400, 345], [440, 345],
  // Southern Africa upper
  [300, 360], [340, 370], [380, 380], [420, 380],
  // Southern Africa lower
  [310, 400], [350, 415], [390, 420], [420, 415],
  // South tip
  [320, 445], [360, 460], [390, 460],
  // Cape
  [310, 490], [340, 500], [365, 495],
  // Madagascar
  [490, 380], [505, 400], [515, 425], [510, 450],
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
      {/* Soft tint glow behind the continent */}
      <defs>
        <radialGradient id="africa-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--tint)" stopOpacity="0.18" />
          <stop offset="60%" stopColor="var(--tint)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="370" cy="310" r="260" fill="url(#africa-glow)" />

      {/* Continent dots */}
      {DOTS.map(([cx, cy], i) => (
        <circle
          key={`d-${i}`}
          cx={cx}
          cy={cy}
          r={1.6}
          fill="rgba(255,255,255,0.42)"
        />
      ))}

      {/* Connecting arcs between operating cities */}
      <g
        stroke="var(--tint)"
        strokeOpacity="0.55"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M 340 410 Q 380 360 430 270" />
        <path d="M 300 500 Q 320 460 340 410" />
        <path d="M 340 410 Q 350 385 360 360" />
        <path d="M 430 270 Q 435 285 440 295" />
        <path d="M 360 360 Q 395 335 430 270" />
      </g>

      {/* Cities (active points) */}
      {CITIES.map((c) => (
        <g key={c.name}>
          <circle
            cx={c.cx}
            cy={c.cy}
            r={9}
            fill="var(--tint)"
            opacity={0.18}
            className="pulse-soft"
            style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
          />
          <circle
            cx={c.cx}
            cy={c.cy}
            r={3.4}
            fill="var(--tint)"
          />
          {c.label && (
            <text
              x={c.cx + 10}
              y={c.cy + 4}
              fill="rgba(255,255,255,0.78)"
              fontFamily="var(--font-geist-mono, monospace)"
              fontSize="10.5"
              letterSpacing="0.08em"
            >
              {c.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
