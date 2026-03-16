import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:py-20">
      <section className="space-y-6">
        <SectionHeading
          title="About"
          subtitle="Northeastern Equity Research Group is designed as a serious, student-run research organization with a small-cap focus and clear ownership across sectors."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {site.aboutSections.map((section) => (
          <Card key={section.title} title={section.title}>
            <div className="space-y-3 text-base leading-7 text-[var(--color-text-soft)]">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Investment Universe"
          subtitle="The group covers under-followed US-listed companies across sectors without a fixed style mandate."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {site.investmentUniverse.map((item) => (
            <Card key={item.label} title={item.value} meta={item.label} />
          ))}
        </div>
      </section>
    </div>
  );
}
