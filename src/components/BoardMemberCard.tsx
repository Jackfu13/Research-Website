import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

type BoardMemberCardProps = {
  name: string | null;
  title: string;
  slug: string;
  photo: string | null;
  bio: string | null;
  compact?: boolean;
  photoOffsetY?: number;
  photoScale?: number;
  photoOffsetX?: number;
};

export function BoardMemberCard({ name, title, slug, photo, compact = false, photoOffsetY = 0, photoScale = 1, photoOffsetX = 50 }: BoardMemberCardProps) {
  const displayName = name ?? "TBD";
  const imageStyle: CSSProperties = { objectPosition: `${photoOffsetX}% ${photoOffsetY}%` };
  if (photoScale !== 1) {
    imageStyle.transform = `scale(${photoScale})`;
  }

  return (
    <article className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div className={`${compact ? "aspect-[3/4]" : "h-80"} relative w-full overflow-hidden bg-[var(--color-surface-muted)]`}>
        {photo ? (
          <Image
            src={photo}
            alt={displayName}
            fill
            className="object-cover"
            style={imageStyle}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-semibold text-[var(--color-border-strong)]">
              {displayName !== "TBD"
                ? displayName.split(" ").map((n) => n[0]).join("").slice(0, 2)
                : "?"}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 px-4 pt-4 pb-0 text-center">
        <p className="text-base font-semibold text-[var(--color-text)]">{displayName}</p>
        <p className="text-sm text-[var(--color-text-soft)]">{title}</p>
      </div>

      <div className="mt-4 flex justify-center pb-4">
        <Link
          href={`/team/${slug}`}
          className="border-2 border-[var(--color-accent)] px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-white"
        >
          Bio
        </Link>
      </div>
    </article>
  );
}
