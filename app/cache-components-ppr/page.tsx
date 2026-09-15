import { Suspense } from "react";
import { SlowSection } from "./slow-section";

export default function CacheComponentsPprPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Cache Components &amp; PPR</p>
      <h1 className="text-3xl">Cache Components &amp; Partial Pre-Rendering</h1>

      <header className="demo-card">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          Static header
        </p>
        <p className="text-[var(--muted)]">
          Prerendered at build time — appears instantly on load.
        </p>
      </header>

      {/* Dynamic hole — streams in behind the shell */}
      <Suspense
        fallback={
          <div className="demo-card animate-pulse text-lg text-[var(--muted)]">
            Loading slow section…
          </div>
        }
      >
        <SlowSection />
      </Suspense>

      <footer className="demo-card">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          Static footer
        </p>
        <p className="text-[var(--muted)]">
          Also prerendered — visible before the slow section finishes.
        </p>
      </footer>
    </div>
  );
}
