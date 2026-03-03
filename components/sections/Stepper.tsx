interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepperProps {
  headline: string;
  subheadline?: string;
  steps: Step[];
}

export default function Stepper({ headline, subheadline, steps }: StepperProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
          {headline}
        </h2>
        {subheadline && (
          <p className="mt-4 text-muted text-base md:text-lg max-w-2xl mx-auto">{subheadline}</p>
        )}
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <li key={i} className="relative rounded-2xl border border-border/70 bg-surface/80 p-5">
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-10 left-[calc(50%+1.5rem)] right-0 h-px bg-border"
              />
            )}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">{step.number}</span>
                </div>
                <h3 className="text-text font-semibold text-base">{step.title}</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
