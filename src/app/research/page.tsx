import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { output } from "@/content/output";
import { portfolio } from "@/content/portfolio";
import { process } from "@/content/process";

export default function ResearchPage() {
  return (
    <PageLayout>
      <PageHeader title="Research" intro={process.intro} />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Process"
            subtitle="Work moves from idea generation through formal pitching and quarterly portfolio review."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {process.stages.map((step) => (
              <Card key={step.title} title={step.title} body={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
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
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,1fr)] md:items-start">
          <ListCard
            title="Research Standard"
            intro="Every public-facing or portfolio-bound idea starts from the same research checklist."
            items={process.pitchRequirements.map((r) => r.label)}
          />
          <ListCard
            title="Pitch Format"
            intro="Formal presentation standards are part of the process, not an optional extra."
            items={process.pitchFormat}
          />
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

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Published Research"
            subtitle="Public research is intended to sit here as releases are prepared."
          />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Card
              title={output.publishedResearchPreview.title}
              body={output.publishedResearchPreview.body}
              meta="Future Releases"
            >
              <p className="border border-dashed border-[var(--color-border-strong)] px-4 py-5 text-sm leading-6 text-[var(--color-text-soft)]">
                {output.publishedResearchPreview.emptyState}
              </p>
            </Card>
            <ListCard
              title={output.channels[1].title}
              intro={output.goal}
              items={output.channels[1].items}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <ListCard
            title={output.channels[0].title}
            items={output.channels[0].items}
          />
          <ListCard
            title="Research Standard Details"
            items={process.pitchRequirements.map(
              (r) => `${r.label}: ${r.description}`,
            )}
          />
        </div>
      </section>
    </PageLayout>
  );
}
