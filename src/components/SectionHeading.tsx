type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-7 text-[var(--color-text-soft)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
