import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PageLayout } from "@/components/PageLayout";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { sectors } from "@/content/sectors";

function getSectorSubtitle(entry: (typeof sectors.coverage)[number]) {
  if (entry.status === "open") return "Open coverage";
  if (entry.status === "single-lead") return "Single lead";
  return entry.sector;
}

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="bg-[var(--color-footer-bg)] px-6 py-14 md:px-8">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-4xl">
          Executive Board
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {board.roles.map((role) => (
            <BoardMemberCard
              key={role.title}
              name={role.name}
              title={role.title}
              photo={role.photo}
              bio={role.bio}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8 bg-[var(--color-surface-muted)] px-6 py-12 md:px-8">
        <SectionHeading
          title="Sector Leads"
          subtitle="Each lead owns primary coverage of one sector. Open and single-lead sectors are marked below."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectors.coverage.map((entry) => (
            <PersonCard
              key={entry.sector}
              title={entry.sector}
              name={entry.lead}
              subtitle={getSectorSubtitle(entry)}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
