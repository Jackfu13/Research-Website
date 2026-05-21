import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
