import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { sectors } from "@/content/sectors";

function getSubtitle(lead: (typeof sectors.coverage)[number]) {
  if (lead.status === "open") {
    return "Open coverage";
  }

  if (lead.status === "single-lead") {
    return "Single lead";
  }

  return lead.sector;
}

export default function SectorLeadsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Sector Leads"
        intro={`${sectors.intro} ${sectors.assignmentNote}`}
      />

      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Coverage Ownership" body={sectors.intro} />
        <Card title="Assignment Policy" body={sectors.coLeadPolicy} />
      </section>

      <section className="space-y-8 bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="Current Coverage"
          subtitle="Known assignments are listed below, while open or single-lead sectors remain marked as such."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sectors.coverage.map((entry) => (
          <PersonCard
            key={entry.sector}
            title={entry.sector}
            name={entry.lead}
            subtitle={getSubtitle(entry)}
          />
        ))}
        </div>
      </section>
    </PageLayout>
  );
}
