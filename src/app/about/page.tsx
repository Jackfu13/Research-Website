import { ListCard } from "@/components/ListCard";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        title="About"
        intro="The Northeastern Equity Research Group is built as a serious student-run research organization with a flat year-one structure, clear sector ownership, and a deliberate focus on under-followed companies."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {site.aboutSections.map((section) => (
          <Card key={section.title} title={section.title}>
            <div className="space-y-3 text-base leading-7 text-[var(--color-text-soft)]">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-8 bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="Investment Universe"
          subtitle="Coverage is intentionally broad across sectors and styles, but focused on the part of the market where deep work can still create original insight."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.investmentUniverse.map((item) => (
            <Card key={item.label} title={item.value} meta={item.label} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,1fr)] md:items-start">
        <ListCard
          title="Differentiation"
          intro="The group's structure is designed to produce ownership and accountability rather than generic club participation."
          items={site.differentiation}
        />
        <Card
          title={board.yearOneStructure.title}
          body={`${board.yearOneStructure.summary} ${board.executiveBoardIntro}`}
        />
      </section>
    </PageLayout>
  );
}
