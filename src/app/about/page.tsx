import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { verticals } from "@/content/sectors";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        title="About"
        intro="The Equity Research Group is built as a serious student-run research organization with a flat year-one structure, clear sector ownership, and a deliberate focus on under-followed companies."
        large
        photo="/northeastern-5.jpg"
      />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {site.aboutSections.map((section) => (
            <Card key={section.title} title={section.title}>
              <div className="space-y-3 text-base leading-7 text-[var(--color-text-soft)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading title="Investment Universe" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {site.investmentUniverse.map((item) => (
              <Card key={item.label} title={item.value} meta={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Vertical Coverage"
              subtitle="ERG organizes its coverage universe into five verticals, each owned by a dedicated vertical lead."
            />
            <Button href="/team" label="View Members" variant="outline" />
          </div>
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3 xl:grid-cols-5">
            {verticals.map((v) => (
              <div key={v.name} className="bg-[var(--color-surface)] px-5 py-4">
                <p className="text-sm font-semibold leading-6 text-[var(--color-text)]">{v.name}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-soft)]">{v.subSectors.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,1fr)] md:items-start">
          <ListCard
            title="Differentiation"
            intro="The group's structure is designed to produce ownership and accountability rather than generic club participation."
            items={site.differentiation}
          />
          <Card
            title={board.yearOneStructure.title}
            body={`${board.yearOneStructure.summary} ${board.executiveBoardIntro}`}
          />
        </div>
      </section>
    </PageLayout>
  );
}
