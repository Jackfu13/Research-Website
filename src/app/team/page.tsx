import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { verticals } from "@/content/sectors";

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="relative w-full px-8 pt-40 pb-14 md:px-12">
        <img src="/northeastern-5.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <h2 className="relative z-10 text-center text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-4xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
          Executive Board
        </h2>
        <div className="relative z-10 mt-10 mx-auto grid w-full max-w-[77rem] grid-cols-2 gap-6 sm:grid-cols-4">
          {board.roles.map((role, i) => (
            <BoardMemberCard
              key={`${role.title}-${i}`}
              name={role.name}
              title={role.title}
              slug={role.slug}
              photo={role.photo}
              photoPosition={role.photoPosition}
              bio={role.bio}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-10">
          <SectionHeading title="Vertical Leads" center />
          <div className="mx-auto grid w-full max-w-[86rem] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {verticals.map((v) => (
              <BoardMemberCard
                key={v.name}
                name={v.lead}
                title={v.name}
                slug={v.slug}
                photo={v.photo}
                bio={v.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
