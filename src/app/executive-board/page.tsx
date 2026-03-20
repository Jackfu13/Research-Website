import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";

export default function ExecutiveBoardPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Executive Board"
        intro={board.executiveBoardIntro}
      />

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,1fr)] md:items-start">
        <Card
          title={board.yearOneStructure.title}
          body={board.yearOneStructure.summary}
        />
        <ListCard
          title={board.futureStructure.title}
          intro={board.futureStructure.summary}
          items={board.futureStructure.points}
        />
      </section>

      <section className="space-y-8 bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="Roles"
          subtitle="These roles are functional responsibilities, not separate tracks away from sector coverage and pitching."
        />
        <div className="grid gap-6 md:grid-cols-3">
        {board.roles.map((role) => (
          <PersonCard
            key={role.title}
            title={role.title}
            subtitle={role.note}
            items={role.responsibilities}
          />
        ))}
        </div>
      </section>
    </PageLayout>
  );
}
