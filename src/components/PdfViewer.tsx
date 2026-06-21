"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title?: string;
};

const MIN_SCALE = 0.5;
const MAX_SCALE = 3;
const SCALE_STEP = 0.25;

export function PdfViewer({ src, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<unknown>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(0.75);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Reset state intentionally when `src` changes — we want a fresh loading cycle.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus("loading");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setError(null);

    (async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const loadingTask = pdfjsLib.getDocument({ url: src });
        const doc = await loadingTask.promise;
        if (cancelled) return;

        pdfRef.current = doc;
        setNumPages(doc.numPages);
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(err instanceof Error ? err.message : "Failed to load PDF");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    const container = containerRef.current;
    const doc = pdfRef.current as { numPages: number; getPage: (n: number) => Promise<unknown> } | null;
    if (!container || !doc || status !== "ready") return;

    let cancelled = false;

    (async () => {
      container.innerHTML = "";
      const outputScale = window.devicePixelRatio || 1;

      for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
        if (cancelled) return;

        const page = (await doc.getPage(pageNum)) as {
          getViewport: (opts: { scale: number }) => { width: number; height: number };
          render: (opts: { canvasContext: CanvasRenderingContext2D; viewport: unknown; transform?: number[] }) => { promise: Promise<void> };
        };
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        // Backing store at device pixel density for crisp retina rendering
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        // CSS display at logical size
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        canvas.dataset.pageNum = String(pageNum);
        canvas.className = "mx-auto mb-4 block max-w-full bg-white shadow-md";
        container.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        if (!ctx) continue;
        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;
        await page.render({ canvasContext: ctx, viewport, transform }).promise;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [status, scale]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || status !== "ready") return;

    const handleScroll = () => {
      const midpoint = container.scrollTop + container.clientHeight / 2;
      const canvases = container.querySelectorAll<HTMLCanvasElement>("canvas[data-page-num]");
      for (const canvas of canvases) {
        if (midpoint >= canvas.offsetTop && midpoint < canvas.offsetTop + canvas.offsetHeight) {
          const num = Number(canvas.dataset.pageNum);
          if (num && num !== currentPage) setCurrentPage(num);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [status, currentPage]);

  const zoomOut = () => setScale((s) => Math.max(MIN_SCALE, Math.round((s - SCALE_STEP) * 100) / 100));
  const zoomIn = () => setScale((s) => Math.min(MAX_SCALE, Math.round((s + SCALE_STEP) * 100) / 100));
  const resetZoom = () => setScale(0.75);

  const goToPage = (target: number) => {
    const container = containerRef.current;
    if (!container) return;
    const canvas = container.querySelector<HTMLCanvasElement>(`canvas[data-page-num="${target}"]`);
    if (!canvas) return;
    // If the page fits in the viewport, center it vertically. Otherwise top-align.
    const fits = canvas.offsetHeight < container.clientHeight;
    const target_top = fits
      ? canvas.offsetTop - (container.clientHeight - canvas.offsetHeight) / 2
      : canvas.offsetTop;
    container.scrollTo({ top: Math.max(0, target_top), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col border border-[var(--color-border)] bg-[var(--color-surface)]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={status !== "ready" || currentPage <= 1}
            aria-label="Previous page"
            className="inline-flex h-7 w-7 items-center justify-center border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-faint)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹
          </button>
          <p className="min-w-[5.5rem] text-center text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-soft)]">
            {status === "loading" ? "Loading…" : status === "error" ? "Error" : `Page ${currentPage} of ${numPages}`}
          </p>
          <button
            onClick={() => goToPage(Math.min(numPages, currentPage + 1))}
            disabled={status !== "ready" || currentPage >= numPages}
            aria-label="Next page"
            className="inline-flex h-7 w-7 items-center justify-center border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-faint)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            disabled={status !== "ready" || scale <= MIN_SCALE}
            aria-label="Zoom out"
            className="inline-flex h-7 w-7 items-center justify-center border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-faint)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
          <button
            onClick={resetZoom}
            disabled={status !== "ready"}
            className="inline-flex h-7 min-w-[3.5rem] items-center justify-center border border-[var(--color-border)] px-2 text-xs font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-faint)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={zoomIn}
            disabled={status !== "ready" || scale >= MAX_SCALE}
            aria-label="Zoom in"
            className="inline-flex h-7 w-7 items-center justify-center border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-faint)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      {/* Page render area */}
      <div
        ref={containerRef}
        className="relative h-[80vh] overflow-auto bg-[var(--color-surface-muted)] p-6"
        aria-label={title ? `${title} — PDF reader` : "PDF reader"}
      >
        {status === "loading" && (
          <p className="text-center text-sm text-[var(--color-text-soft)]">Loading PDF…</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            Could not load PDF. {error}
          </p>
        )}
      </div>
    </div>
  );
}
