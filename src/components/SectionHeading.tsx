type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <h2 className={`text-2xl font-semibold tracking-tight md:text-3xl ${light ? "text-[var(--color-footer-text)]" : "text-[var(--color-text)]"}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-base leading-7 ${light ? "text-[var(--color-footer-text)] opacity-80" : "text-[var(--color-text-soft)]"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
