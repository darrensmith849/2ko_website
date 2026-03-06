import Badge from "@/components/ui/Badge";

interface CaseStudyCardProps {
  industry: string;
  company: string;
  problem: string;
  approach: string;
  result: string;
  tags?: string[];
}

const tagLabels: Record<string, string> = {
  training: "Training",
  systems: "AI Systems",
  consulting: "Consulting",
};

export default function CaseStudyCard({
  industry,
  company,
  problem,
  approach,
  result,
  tags = [],
}: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-5 hover:border-accent/30 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Badge variant="muted">{industry}</Badge>
          <h3 className="mt-3 text-text font-semibold text-base">{company}</h3>
        </div>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[10px] text-accent font-medium uppercase tracking-wider"
            >
              {tagLabels[tag] ?? tag}
            </span>
          ))}
        </div>
      )}
      <dl className="flex flex-col gap-4 text-sm flex-1">
        <div>
          <dt className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-1">
            Challenge
          </dt>
          <dd className="text-muted leading-relaxed">{problem}</dd>
        </div>
        <div>
          <dt className="text-muted2 text-xs font-semibold uppercase tracking-widest mb-1">
            Approach
          </dt>
          <dd className="text-muted leading-relaxed">{approach}</dd>
        </div>
        <div className="mt-auto pt-4 border-t border-border">
          <dt className="text-xs font-semibold uppercase tracking-widest mb-1 text-accent">
            Illustrative outcome
          </dt>
          <dd className="text-text font-medium leading-relaxed">{result}</dd>
          <p className="mt-2 text-xs text-muted2">
            Anonymised example. Final outcomes depend on baseline conditions and rollout quality.
          </p>
        </div>
      </dl>
    </article>
  );
}
