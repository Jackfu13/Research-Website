import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { sectors } from "@/content/sectors";

function getLeadName(entry: (typeof sectors.coverage)[number]) {
  if (entry.lead) return entry.lead;
  if (entry.status === "open") return "Open";
  return "Single Lead";
}

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-14 md:px-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-4xl">
          Executive Board
        </h2>
        <div className="mt-10 mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {board.roles.map((role, i) => (
            <BoardMemberCard
              key={`${role.title}-${i}`}
              name={role.name}
              title={role.title}
              photo={role.photo}
              bio={role.bio}
            />
          ))}
        </div>
      </section>

      <section className="w-full space-y-8 bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <SectionHeading
          title="Sector Leads"
          subtitle="Each lead owns primary coverage of one sector. Open and single-lead sectors are marked below."
          center
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {sectors.coverage.map((entry) => (
            <BoardMemberCard
              key={entry.sector}
              name={getLeadName(entry)}
              title={entry.sector}
              photo={entry.photo}
              bio={entry.bio}
              compact
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
