import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ListCard } from "@/components/ListCard";
import { SectionHeading } from "@/components/SectionHeading";
import { output } from "@/content/output";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      {/* Hero */}
      <section className="relative w-full px-8 pb-28 pt-40 md:px-12 md:pb-36 md:pt-52">
        <img
          src="/northeastern-5.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-70" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
            {site.heroEyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            {site.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white opacity-90 md:text-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
            {site.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button href="/about" label="About" variant="light" large />
            <Button href="/join" label="Join" variant="light" large />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="How we work"
            subtitle="The work is structured around idea generation, formal pitch development, and ongoing sector coverage."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {site.featureHighlights.map((item) => (
              <Card key={item.title} title={item.title} body={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Our work */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="space-y-8">
          <SectionHeading
            title="Our work"
            subtitle={output.goal}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <ListCard
              title="Internal"
              items={output.channels[0].items}
            />
            <ListCard
              title="External"
              items={output.channels[1].items}
            />
          </div>
          <div className="flex justify-center">
            <Button href="/research#published-research" label="View Research" variant="primary" />
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="w-full bg-[var(--color-surface)] px-8 py-16 md:px-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <SectionHeading title="What makes us different" center />
          <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
            {site.differentiationParagraph}
          </p>
          <div className="space-y-3 pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text)]">How We Do It</p>
            <ul className="space-y-2">
              {site.coreEdge.methods.map((method) => (
                <li key={method} className="text-sm font-medium text-[var(--color-text-soft)]">
                  — {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who ERG is for */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <SectionHeading title="Who ERG is for" center />
          <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
            {site.recruitingBlock}
          </p>
          <Button href="/join" label="Apply to ERG" variant="primary" large />
        </div>
      </section>

    </div>
  );
}
