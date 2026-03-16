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
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-12 md:py-16">
      <section className="border-b border-[var(--color-border)] pb-16 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center md:py-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-6xl">
              {site.name}
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[var(--color-text-soft)] md:text-xl md:leading-9">
              {site.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button href="/about" label="About the Group" />
              <Button href="/join" label="Join the Group" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(18rem,1fr)] md:items-start">
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
      </section>

      <section className="space-y-8 rounded-none bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="Investment Universe"
          subtitle="Coverage is centered on under-followed US-listed companies without a fixed style mandate."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.investmentUniverse.map((item) => (
            <Card key={item.label} title={item.value} meta={item.label} />
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-none bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="What We Do"
          subtitle="The work is structured around idea generation, formal pitch development, and ongoing review."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {process.workstreams.map((workstream) => (
            <Card
              key={workstream.title}
              title={workstream.title}
              body={workstream.description}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
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
            items={process.pitchRequirements.map((requirement) => requirement.label)}
            meta="Standard"
          />
        </div>
      </section>
    </div>
  );
}
