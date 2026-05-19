"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y <= 0) {
        setVisible(true);
      } else if (y < lastY) {
        setVisible(true);
      } else if (y > lastY) {
        setVisible(false);
      }
      setLastY(y);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--color-footer-bg)] transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="flex w-full flex-col gap-4 px-8 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-footer-text)] opacity-60">
            {site.shortName}
          </p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--color-footer-text)]">
            {site.name}
          </p>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-footer-text)] opacity-75">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
