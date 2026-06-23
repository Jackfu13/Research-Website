import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";
import { industries } from "@/content/sectors";

export default function TeamPage() {
  return (
    <PageLayout>
      <section className="w-full bg-[var(--color-footer-bg)] px-8 pt-28 pb-16 md:px-12 md:pt-32">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-4xl">
          Executive Board
        </h2>
        <div className="mt-10 mx-auto grid w-full max-w-[77rem] grid-cols-1 gap-6 sm:grid-cols-4">
          {board.roles.map((role, i) => (
            <BoardMemberCard
              key={`${role.title}-${i}`}
              name={role.name}
              title={role.title}
              slug={role.slug}
              photo={role.photo}
              photoOffsetY={role.photoOffsetY}
              photoScale={role.photoScale}
              photoOffsetX={role.photoOffsetX}
              bio={role.bio}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-[var(--color-accent-soft)] px-8 py-16 md:px-12">
        <div className="space-y-10">
          <SectionHeading title="Industry Leads" center />
          <div className="mx-auto grid w-full max-w-[86rem] grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {industries.filter((v) => !v.upcoming).flatMap((v) => {
              const cards = [
                <BoardMemberCard
                  key={`${v.name}-primary`}
                  name={v.lead}
                  title={v.name}
                  slug={v.leadSlug ?? v.slug}
                  photo={v.photo}
                  photoOffsetY={v.photoOffsetY}
                  photoScale={v.photoScale}
                  photoOffsetX={v.photoOffsetX}
                  bio={v.bio}
                />,
              ];
              if (v.coLead) {
                cards.push(
                  <BoardMemberCard
                    key={`${v.name}-${v.coLead.slug}`}
                    name={v.coLead.name}
                    title={v.name}
                    slug={v.coLead.slug}
                    photo={v.coLead.photo}
                    photoOffsetY={v.coLead.photoOffsetY}
                    photoScale={v.coLead.photoScale}
                    photoOffsetX={v.coLead.photoOffsetX}
                    bio={v.coLead.bio}
                  />
                );
              }
              return cards;
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
