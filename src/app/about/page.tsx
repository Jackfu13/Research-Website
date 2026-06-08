import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { industries } from "@/content/sectors";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        title="About"
        intro="The Equity Research Group is a student-run organization that studies public companies to judge whether their stock is a good investment. We focus on smaller, under-covered businesses that get little attention from Wall Street, with each member owning research on a specific industry."
        large
        photo="/northeastern-5.jpg"
      />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        {site.aboutSections.map((section) => (
          <ListCard
            key={section.title}
            title={section.title}
            intro={section.intro}
            items={section.items}
          />
        ))}
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
              title="Industry Coverage"
              subtitle="ERG organizes its coverage universe into five industries, each owned by a dedicated industry lead."
            />
            <Button href="/team" label="View Members" variant="outline" />
          </div>
          <div className="grid gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3 xl:grid-cols-5">
            {industries.map((i) => (
              <div key={i.name} className="bg-[var(--color-surface)] px-5 py-4">
                <p className="text-sm font-semibold leading-6 text-[var(--color-text)]">{i.name}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-soft)]">
                  {i.subSectors.map((subSector) => subSector.name).join(", ")}
                </p>
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
          <ListCard
            title={board.yearOneStructure.title}
            intro={board.yearOneStructure.summary}
            items={board.yearOneStructure.points}
          />
        </div>
      </section>
    </PageLayout>
  );
}
