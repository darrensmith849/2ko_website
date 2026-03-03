import Badge from "@/components/ui/Badge";

interface CaseStudyCardProps {
  industry: string;
  company: string;
  problem: string;
  approach: string;
  result: string;
}

export default function CaseStudyCard({
  industry,
  company,
  problem,
  approach,
  result,
}: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl bg-surface border border-border p-7 flex flex-col gap-5 hover:border-accent/30 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Badge variant="muted">{industry}</Badge>
          <h3 className="mt-3 text-text font-semibold text-base">{company}</h3>
        </div>
      </div>
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
            Result
          </dt>
          <dd className="text-text font-medium leading-relaxed">{result}</dd>
        </div>
      </dl>
    </article>
  );
}
