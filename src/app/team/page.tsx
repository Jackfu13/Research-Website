import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { industries } from "@/content/sectors";

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-8 py-16 md:px-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-4xl">
          Executive Board
        </h2>
        <div className="mt-10 mx-auto grid w-full max-w-[77rem] grid-cols-2 gap-6 sm:grid-cols-4">
          {board.roles.map((role, i) => (
            <BoardMemberCard
              key={`${role.title}-${i}`}
              name={role.name}
              title={role.title}
              slug={role.slug}
              photo={role.photo}
              photoOffsetY={role.photoOffsetY}
              photoScale={role.photoScale}
              bio={role.bio}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-[var(--color-accent-soft)] px-8 py-16 md:px-12">
        <div className="space-y-10">
          <SectionHeading title="Industry Leads" center />
          <div className="mx-auto grid w-full max-w-[86rem] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((v) => (
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
