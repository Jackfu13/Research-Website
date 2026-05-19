import { Card } from "@/components/Card";
import { InterestForm } from "@/components/InterestForm";
import { ListCard } from "@/components/ListCard";
import { PageHeader } from "@/components/PageHeader";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { membership } from "@/content/membership";

export default function JoinPage() {
  return (
    <PageLayout>
      <PageHeader title="Join" intro={membership.intro} />

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Admissions Process"
            subtitle="Membership is evaluated through a straightforward three-step process."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {membership.admissionSteps.map((step) => (
              <Card key={step.title} title={step.title} body={step.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <ListCard title="Member Expectations" items={membership.memberExpectations} />
          <ListCard title="Membership Standards" items={membership.membershipRules} />
          <ListCard title="Recruiting Outcomes" items={membership.recruitingOutcomes} />
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,1fr)] md:items-start">
          <ListCard
            title="Meeting Cadence"
            intro="The group is designed around a consistent weekly operating rhythm."
            items={membership.meetingCadence}
          />
          <Card
            title="Why Join"
            body={`${membership.recruitingPositioning} ${membership.participationSummary}`}
          />
        </div>
      </section>

      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Express Interest"
            subtitle="Applications open each semester. Submit your information below and we will reach out when the next cycle begins."
          />
          <InterestForm />
        </div>
      </section>
    </PageLayout>
  );
}
