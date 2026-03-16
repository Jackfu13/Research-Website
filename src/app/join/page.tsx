import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { membership } from "@/content/membership";

export default function JoinPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
      <section className="space-y-6">
        <SectionHeading title="Join" subtitle={membership.intro} />
      </section>

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
        <Card title="Member Expectations">
          <ul className="space-y-2 text-base leading-7 text-[var(--color-text-soft)]">
            {membership.memberExpectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="Membership Standards">
          <ul className="space-y-2 text-base leading-7 text-[var(--color-text-soft)]">
            {membership.membershipRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card title="Recruiting Outcomes">
          <ul className="space-y-2 text-base leading-7 text-[var(--color-text-soft)]">
            {membership.recruitingOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
