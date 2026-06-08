"use client";

import { useState } from "react";
import { industries } from "@/content/sectors";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type FormState = {
  name: string;
  email: string;
  graduationYear: string;
  sector: string;
  note: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  graduationYear: "",
  sector: "",
  note: "",
};

const CURRENT_YEAR = new Date().getFullYear();
const GRAD_YEARS = Array.from({ length: 5 }, (_, index) =>
  String(CURRENT_YEAR + index),
);

const inputClass =
  "w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none";

export function InterestForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setError(null);
    setSubmitting(true);

    if (!FORMSPREE_ENDPOINT) {
      setError("The interest form is not configured yet. Please try again later.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          Received
        </p>
        <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">
          Thank you, {form.name}. We will follow up at {form.email} when
          applications open.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-8 md:px-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
            Full Name <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
            Email <span className="text-[var(--color-accent)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="j.smith@northeastern.edu"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="graduationYear" className="block text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
            Graduation Year <span className="text-[var(--color-accent)]">*</span>
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            required
            value={form.graduationYear}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select year
            </option>
            {GRAD_YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="sector" className="block text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
            Sector Interest
          </label>
          <select
            id="sector"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">No preference</option>
            {industries.map((industry) => (
              <optgroup key={industry.name} label={industry.name}>
                {industry.subSectors.map((subSector) => (
                  <option key={subSector.name} value={subSector.name}>
                    {subSector.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <label htmlFor="note" className="block text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
          Why are you interested? <span className="text-[var(--color-muted)]">(optional)</span>
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          placeholder="Brief background, relevant experience, or why this group interests you."
          value={form.note}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-11 items-center justify-center border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-2 text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:border-[var(--color-accent-strong)] hover:bg-[var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-65"
        >
          {submitting ? "Submitting..." : "Submit Interest"}
        </button>
      </div>
    </form>
  );
}
