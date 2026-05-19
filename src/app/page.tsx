import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { output } from "@/content/output";
import { process } from "@/content/process";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      {/* Hero */}
      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-20 md:px-12 md:py-28">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text)] opacity-60">
            {site.heroEyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl">
            {site.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-footer-text)] opacity-80 md:text-xl">
            {site.tagline}
          </p>
          <div className="pt-2">
            <Button href="/join" label="Join the Group" variant="light" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,1fr)] md:items-start">
          <div className="space-y-6">
            <SectionHeading
              title="Mission"
              subtitle="The group is organized to do serious small and mid-cap equity research while training members into disciplined fundamental analysts."
            />
            <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
              {site.mission}
            </p>
          </div>
          <div className="border-t-2 border-[var(--color-accent)] pt-5">
            <Card
              title={board.yearOneStructure.title}
              body={`${board.yearOneStructure.summary} ${board.executiveBoardIntro}`}
            />
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="What We Do"
            subtitle="The work is structured around idea generation, formal pitch development, and ongoing sector coverage."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {site.featureHighlights.map((item) => (
              <Card key={item.title} title={item.title} body={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Universe */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Investment Universe"
            subtitle="Coverage is centered on under-followed US-listed companies without a fixed style mandate."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {site.investmentUniverse.map((item) => (
              <Card key={item.label} title={item.value} meta={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Research process */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Research Process"
            subtitle="Work moves from idea generation through formal pitching and quarterly portfolio review."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {process.stages.map((step) => (
              <Card key={step.title} title={step.title} body={step.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Published research */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Published Research"
            subtitle="External output is intended to be polished, public-facing research prepared through the group's publishing process."
          />
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <Card
              title={output.publishedResearchPreview.title}
              body={output.publishedResearchPreview.body}
              meta="Preview"
            >
              <div className="space-y-4">
                <p className="border border-dashed border-[var(--color-border-strong)] px-4 py-5 text-sm leading-6 text-[var(--color-text-soft)]">
                  {output.publishedResearchPreview.emptyState}
                </p>
                <ul className="space-y-2 text-sm leading-6 text-[var(--color-text-soft)]">
                  {output.channels[1].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
            <ListCard
              title="Research Standard"
              intro="Every public-facing idea begins with the same research standard used in the internal process."
              items={process.pitchRequirements.map((r) => r.label)}
              meta="Standard"
            />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-16 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <SectionHeading title="Join the Group" light />
          <p className="max-w-xl text-base leading-7 text-[var(--color-footer-text)] opacity-80">
            {site.homepageCta}
          </p>
          <Button href="/join" label="Apply Now" variant="light" />
        </div>
      </section>

    </div>
  );
}
