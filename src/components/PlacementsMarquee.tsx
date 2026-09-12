import { placements } from "@/content/placements";

export function PlacementsMarquee() {
  const track = [...placements, ...placements];

  return (
    <section className="w-full bg-[var(--color-surface-muted)] px-8 py-14 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col items-center gap-3">
          <span aria-hidden className="block h-0.5 w-12 bg-[var(--color-accent)]" />
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Where We&apos;ve Landed Internships
          </p>
        </div>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 [--logo-h:2rem] group-hover:[animation-play-state:paused] motion-reduce:animate-none md:[--logo-h:2.25rem]">
            {track.map((item, i) => (
              // eslint-disable-next-line @next/next/no-img-element -- mixed svg/png logo set with varying aspect ratios
              <img
                key={`${item.name}-${i}`}
                src={item.logo}
                alt={item.name}
                style={{ height: `calc(var(--logo-h) * ${item.scale ?? 1})` }}
                className="w-auto shrink-0 transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
