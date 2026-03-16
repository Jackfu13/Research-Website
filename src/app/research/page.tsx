import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { output } from "@/content/output";
import { portfolio } from "@/content/portfolio";
import { process } from "@/content/process";

export default function ResearchPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
      <section className="space-y-6">
        <SectionHeading title="Research" subtitle={process.intro} />
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Process"
          subtitle="Work moves from idea generation through formal pitching and quarterly portfolio review."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {process.stages.map((step) => (
            <Card key={step.title} title={step.title} body={step.description} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Idea Sources"
          subtitle={`${process.ideaGeneration.watchlistExpectation} ${process.ideaGeneration.weeklyUpdateNote}`}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process.ideaGeneration.sources.map((source) => (
            <Card key={source} title={source} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Pitch Standard"
          subtitle="Every pitch must meet the same institutional baseline before it can be debated and voted on."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {process.pitchRequirements.map((requirement) => (
            <Card
              key={requirement.label}
              title={requirement.label}
              body={requirement.description}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Portfolio Structure"
          subtitle={portfolio.intro}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {portfolio.rules.map((spec) => (
            <Card key={spec.label} title={spec.value} meta={spec.label} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card title={output.channels[0].title}>
          <ul className="space-y-2 text-base leading-7 text-[var(--color-text-soft)]">
            {output.channels[0].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title={output.channels[1].title}>
          <ul className="space-y-2 text-base leading-7 text-[var(--color-text-soft)]">
            {output.channels[1].items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
