type PageHeaderProps = {
  title: string;
  intro: string;
  large?: boolean;
};

export function PageHeader({ title, intro, large = false }: PageHeaderProps) {
  return (
    <section className={`w-full bg-[var(--color-footer-bg)] px-8 md:px-12 ${large ? "py-32 md:py-40" : "py-20 md:py-28"}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--color-footer-text)] opacity-80 md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
