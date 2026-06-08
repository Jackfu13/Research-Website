type PageHeaderProps = {
  title: string;
  intro: string;
  large?: boolean;
  photo?: string;
};

export function PageHeader({ title, intro, large = false, photo }: PageHeaderProps) {
  return (
    <section className={`relative w-full px-8 md:px-12 ${large ? "pt-40 pb-28 md:pt-52 md:pb-36" : "py-20 md:py-28"}`}>
      {photo ? (
        <>
          <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[var(--color-footer-bg)]" />
      )}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <h1
          className="text-3xl font-semibold tracking-tight text-[var(--color-footer-text)] md:text-5xl"
          style={photo ? { textShadow: "0 2px 8px rgba(0,0,0,0.6)" } : undefined}
        >
          {title}
        </h1>
        <p
          className="max-w-3xl text-base leading-8 text-[var(--color-footer-text)] md:text-lg"
          style={photo ? { textShadow: "0 2px 10px rgba(0,0,0,0.75)" } : undefined}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}
