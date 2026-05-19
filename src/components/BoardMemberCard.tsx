type BoardMemberCardProps = {
  name: string | null;
  title: string;
  photo: string | null;
  bio: string | null;
  compact?: boolean;
};

export function BoardMemberCard({ name, title, photo, bio, compact = false }: BoardMemberCardProps) {
  const displayName = name ?? "TBD";

  return (
    <article className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)]">
      <div className={`${compact ? "aspect-[3/4]" : "h-80"} w-full overflow-hidden bg-[var(--color-surface-muted)]`}>
        {photo ? (
          <img
            src={photo}
            alt={displayName}
            className="h-full w-full object-cover object-top"
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

      <div className="flex h-24 flex-col items-center justify-center gap-1 px-4 text-center">
        <p className="text-base font-semibold text-[var(--color-text)]">{displayName}</p>
        <p className="text-sm text-[var(--color-text-soft)]">{title}</p>
        {bio && (
          <button className="mt-3 text-sm underline underline-offset-4 text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors">
            Read Bio
          </button>
        )}
      </div>
    </article>
  );
}
