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
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
      <section className="space-y-6">
        <SectionHeading
          title="Sector Leads"
          subtitle={`${sectors.intro} ${sectors.assignmentNote} ${sectors.coLeadPolicy}`}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sectors.coverage.map((entry) => (
          <PersonCard
            key={entry.sector}
            title={entry.sector}
            name={entry.lead}
            subtitle={getSubtitle(entry)}
          />
        ))}
      </section>
    </div>
  );
}
