import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { membership } from "@/content/membership";

export default function JoinPage() {
  return (
    <PageLayout>
      <PageHeader title="Join" intro={membership.intro} />

      <section className="space-y-6">
        <SectionHeading
          title="Admissions Process"
          subtitle="Membership is evaluated through a straightforward three-step process."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {membership.admissionSteps.map((step) => (
            <Card key={step.title} title={step.title} body={step.description} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <ListCard title="Member Expectations" items={membership.memberExpectations} />
        <ListCard title="Membership Standards" items={membership.membershipRules} />
        <ListCard title="Recruiting Outcomes" items={membership.recruitingOutcomes} />
      </section>

      <section className="grid gap-6 bg-[var(--color-surface-muted)] px-6 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,1fr)] md:px-8">
        <ListCard
          title="Meeting Cadence"
          intro="The group is designed around a consistent weekly operating rhythm."
          items={membership.meetingCadence}
        />
        <Card
          title="Why Join"
          body={`${membership.recruitingPositioning} ${membership.participationSummary}`}
        />
      </section>
    </PageLayout>
  );
}
