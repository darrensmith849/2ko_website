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
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-text tracking-tight mb-12">
          {headline}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border/80 rounded-3xl overflow-hidden">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-surface/95 px-8 py-9 flex flex-col items-center text-center gap-1"
          >
            <span className="text-3xl md:text-4xl font-semibold text-accent tracking-tight">
              {m.value}
            </span>
            <span className="text-sm text-text font-medium mt-1">{m.label}</span>
            {m.sublabel && (
              <span className="text-xs text-muted2">{m.sublabel}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
