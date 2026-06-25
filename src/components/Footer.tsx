"use client";

import { usePathname } from "next/navigation";

import { site } from "@/content/site";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="bg-[var(--color-footer-dark)] text-[var(--color-footer-text)]">
      <div className="flex w-full items-center justify-center px-8 py-6">
        <p className="text-sm font-medium text-[var(--color-footer-text)] opacity-80">
          {site.name}
        </p>
      </div>
    </footer>
  );
}
