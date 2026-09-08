"use client";

import { useState } from "react";

import { process } from "@/content/process";

type PitchAnatomyProps = {
  // Hide the long descriptions — used on the Apply page where the list is a preview.
  compact?: boolean;
  // Append the pitch-format colophon line under the anatomy.
  showColophon?: boolean;
};

const standards = process.researchStandards;

// Deterministic "text line" widths for the document silhouette so it reads as a page, not noise.
const LINE_WIDTHS = [92, 78, 88, 64, 84, 70];

export function PitchAnatomy({ compact = false, showColophon = false }: PitchAnatomyProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-16">
        {/* Stylized report page — highlights the section matching the active standard */}
        <div aria-hidden className="mx-auto w-full max-w-sm md:sticky md:top-28">
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] px-7 py-8 shadow-[0_24px_60px_-32px_rgba(20,60,40,0.35)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                ERG Research
              </span>
              <span className="h-1.5 w-10 bg-[var(--color-border-strong)]" />
            </div>
            <div className="mt-5 h-3 w-3/4 bg-[var(--color-text)]/80" />
            <div className="mt-2 h-2 w-1/2 bg-[var(--color-border-strong)]" />

            <div className="mt-7 space-y-3">
              {standards.map((standard, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={standard.label}
                    className={`border-l-2 py-2 pl-4 transition-colors duration-300 ${
                      isActive
                        ? "border-[var(--color-accent)] bg-[var(--color-accent-faint)]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-semibold tabular-nums transition-colors ${
                          isActive ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`h-2 transition-colors ${
                          isActive ? "bg-[var(--color-accent)]" : "bg-[var(--color-text)]/60"
                        }`}
                        style={{ width: `${40 + i * 8}%` }}
                      />
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {standard.components.map((component, j) => (
                        <span
                          key={component}
                          className={`block h-1.5 transition-colors ${
                            isActive ? "bg-[var(--color-accent)]/35" : "bg-[var(--color-border)]"
                          }`}
                          style={{ width: `${LINE_WIDTHS[(i + j) % LINE_WIDTHS.length]}%` }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
              <span className="h-1.5 w-16 bg-[var(--color-border)]" />
              <span className="text-[10px] tabular-nums text-[var(--color-muted)]">1 / 12</span>
            </div>
          </div>
        </div>

        {/* The three standards, in the order a pitch is built */}
        <ol className="divide-y divide-[var(--color-border)]">
          {standards.map((standard, i) => {
            const isActive = i === active;
            return (
              <li
                key={standard.label}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`grid gap-4 py-7 outline-none transition-opacity duration-300 first:pt-0 last:pb-0 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-6 ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                <span
                  aria-hidden
                  className={`text-4xl font-semibold leading-none tracking-tight tabular-nums transition-colors md:text-5xl ${
                    isActive ? "text-[var(--color-accent)]" : "text-[var(--color-border-strong)]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                    {standard.label}
                  </h3>
                  {!compact ? (
                    <p className="mt-2 text-base leading-7 text-[var(--color-text-soft)]">
                      {standard.description}
                    </p>
                  ) : null}
                  <ul className={`${compact ? "mt-3" : "mt-4"} grid gap-x-6 gap-y-1.5 sm:grid-cols-2`}>
                    {standard.components.map((component) => (
                      <li
                        key={component}
                        className="flex items-baseline gap-2.5 text-sm text-[var(--color-text)]"
                      >
                        <span
                          aria-hidden
                          className={`mt-[0.45em] h-1.5 w-1.5 shrink-0 transition-colors ${
                            isActive ? "bg-[var(--color-accent)]" : "bg-[var(--color-border-strong)]"
                          }`}
                        />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {showColophon ? (
        <div className="border-t border-[var(--color-border-strong)] pt-5">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-sm text-[var(--color-text-soft)]">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Format
            </span>
            {process.pitchFormat.map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span aria-hidden className="text-[var(--color-border-strong)]">·</span>
                {item}
              </span>
            ))}
          </p>
        </div>
      ) : null}
    </div>
  );
}
