interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

interface ProofBlockProps {
  metrics: Metric[];
  headline?: string;
}

export default function ProofBlock({ metrics, headline }: ProofBlockProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {headline && (
        <h2
          className="text-center font-semibold text-[var(--color-text)] mb-12"
          style={{
            fontSize: "var(--text-display-md)",
            letterSpacing: "var(--tracking-display)",
            lineHeight: 1.1,
          }}
        >
          {headline}
        </h2>
      )}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden"
        style={{ background: "var(--color-border)" }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            className="px-8 py-9 flex flex-col items-center text-center gap-1"
            style={{ background: "var(--color-surface)" }}
          >
            <span
              className="font-semibold text-[var(--color-accent)]"
              style={{
                fontSize: "clamp(22px, 2.4vw, 32px)",
                letterSpacing: "var(--tracking-display)",
                lineHeight: 1.1,
              }}
            >
              {m.value}
            </span>
            <span
              className="text-sm text-[var(--color-text)] font-medium mt-1"
              style={{ letterSpacing: "var(--tracking-tight)" }}
            >
              {m.label}
            </span>
            {m.sublabel && (
              <span className="text-xs text-[var(--color-muted2)]">{m.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
