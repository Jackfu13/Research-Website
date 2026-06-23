import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      {/* Hero with featured publication */}
      <section className="relative w-full px-8 pt-32 pb-20 md:px-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28">
        <Image
          src="/NEU-Bridge-Shot.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
          {/* Left: hero text */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-80">
                At Northeastern University
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                {site.name}
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white opacity-90 md:text-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              {site.tagline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              <Button href="/about" label="About" variant="light" large />
              <Button href="/join" label="Join" variant="light" large />
            </div>
          </div>

          {/* Right: featured publication cover */}
          <div className="flex w-full flex-col items-center gap-4 md:items-end">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-80">
              Featured Publication
            </p>
            <Link
              href="/research"
              className="relative block aspect-[3/4] w-full max-w-sm overflow-hidden border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)]"
            >
              {site.featuredPublication.cover ? (
                <Image
                  src={site.featuredPublication.cover}
                  alt={site.featuredPublication.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 380px"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-surface)] px-6">
                  <p className="text-4xl font-semibold tracking-tight text-[var(--color-accent)]">ERG</p>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                    Cover coming soon
                  </p>
                </div>
              )}
            </Link>
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

      {/* What makes us different */}
      <section className="w-full bg-[var(--color-surface-muted)] px-8 py-16 md:px-12">
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

    </div>
  );
}
