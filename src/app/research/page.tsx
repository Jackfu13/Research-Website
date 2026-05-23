import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { output } from "@/content/output";
import { portfolio } from "@/content/portfolio";
import { process } from "@/content/process";

export default function ResearchPage() {
  return (
    <PageLayout>
      <PageHeader title="Research" intro={process.intro} large photo="/northeastern-5.jpg" />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Idea Sources"
            subtitle={`${process.ideaGeneration.watchlistExpectation} ${process.ideaGeneration.weeklyUpdateNote}`}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.ideaGeneration.sources.map((source) => (
              <Card key={source} title={source} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Research Standards"
            subtitle="Every pitch must cover the following components before it is scheduled for presentation."
          />
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {process.researchStandards.map((r) => (
              <div key={r.label} className="bg-[var(--color-surface)] px-5 py-5">
                <p className="text-sm font-semibold leading-6 text-[var(--color-text)]">{r.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.components.map((component) => (
                    <span
                      key={component}
                      className="border border-[var(--color-border-strong)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-accent)]"
                    >
                      {component}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Portfolio Structure"
            subtitle={portfolio.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {portfolio.rules.map((spec) => (
              <Card key={spec.label} title={spec.value} meta={spec.label} />
            ))}
          </div>
        </div>
      </section>

      <section id="published-research" className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Published Research"
            subtitle={output.goal}
          />
          <Card
            title={output.publishedResearchPreview.title}
            meta="Coming Soon"
          >
            <p className="border border-dashed border-[var(--color-border-strong)] px-4 py-5 text-sm leading-6 text-[var(--color-text-soft)]">
              {output.publishedResearchPreview.emptyState}
            </p>
          </Card>
        </div>
      </section>

    </PageLayout>
  );
}
