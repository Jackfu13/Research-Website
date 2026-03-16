import type { Metadata } from "next";

import { SiteShell } from "@/components/SiteShell";
import { site } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
