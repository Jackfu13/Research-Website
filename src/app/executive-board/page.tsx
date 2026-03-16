import { PersonCard } from "@/components/PersonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { board } from "@/content/board";

export default function ExecutiveBoardPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
      <section className="space-y-6">
        <SectionHeading title="Executive Board" subtitle={board.executiveBoardIntro} />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {board.roles.map((role) => (
          <PersonCard
            key={role.title}
            title={role.title}
            subtitle={role.note}
            items={role.responsibilities}
          />
        ))}
      </section>
    </div>
  );
}
