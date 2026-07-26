"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Publication = {
  title: string;
  issue: string;
  cover: string | null;
  slug: string;
  pdf: string;
};

type Props = {
  publications: readonly Publication[];
};

export function FeaturedPublicationCarousel({ publications }: Props) {
  const [index, setIndex] = useState(0);
  const pub = publications[index];
  if (!pub) return null;

  const showArrows = publications.length > 1;
  const canPrev = index > 0;
  const canNext = index < publications.length - 1;

  return (
    <div className="flex w-full flex-col items-center gap-4 md:items-end">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white opacity-80">
        Featured Publications
      </p>

      <div className="relative w-full max-w-sm">
        <Link
          href="/research"
          className="relative block aspect-[3/4] w-full overflow-hidden border border-[var(--color-border)] transition-colors hover:border-[var(--color-accent)]"
        >
          {pub.cover ? (
            <Image
              src={pub.cover}
              alt={pub.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 380px"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-surface)] px-6 text-center">
              <p className="text-4xl font-semibold tracking-tight text-[var(--color-accent)]">ERG</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                {pub.title}
              </p>
            </div>
          )}
        </Link>

        {showArrows ? (
          <>
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              aria-label="Previous publication"
              className="absolute -left-12 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/90 text-lg font-semibold text-[var(--color-text)] shadow-md transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ‹
            </button>
            <button
              onClick={() => setIndex((i) => Math.min(publications.length - 1, i + 1))}
              disabled={!canNext}
              aria-label="Next publication"
              className="absolute -right-12 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-white/90 text-lg font-semibold text-[var(--color-text)] shadow-md transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {showArrows ? (
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-white opacity-70">
          {index + 1} of {publications.length}
        </p>
      ) : null}
    </div>
  );
}
