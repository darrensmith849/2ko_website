import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MotionWords from "@/components/ui/MotionWords";

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
        <MotionWords
          text={headline}
          as="h2"
          className="font-semibold text-[var(--color-text)]"
          staggerMs={70}
        />
        {subheadline && (
          <RevealOnScroll delay={250}>
            <p
              className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto"
              style={{
                fontSize: "clamp(15px, 1.15vw, 17px)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 1.55,
              }}
            >
              {subheadline}
            </p>
          </RevealOnScroll>
        )}
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <RevealOnScroll key={i} delay={i * 80} className="h-full">
            <li
              className="relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 h-full"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-10 left-[calc(50%+1.5rem)] right-0 h-px"
                  style={{ background: "var(--color-border)" }}
                />
              )}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--accent-soft)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    <span
                      className="text-[var(--color-accent)] font-semibold text-sm"
                      style={{ letterSpacing: "var(--tracking-eyebrow)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-[var(--color-text)] font-semibold text-base"
                    style={{ letterSpacing: "var(--tracking-tight)" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </section>
  );
}
