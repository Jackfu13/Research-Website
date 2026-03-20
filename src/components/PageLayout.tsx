import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 md:py-16">
      {children}
    </div>
  );
}
