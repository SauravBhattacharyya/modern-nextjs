import { Suspense } from "react";
import { SlowSection } from "./slow-section";

export default function CacheComponentsPprPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Cache Components &amp; PPR</p>
      <h1 className="text-3xl">Cache Components &amp; Partial Pre-Rendering</h1>

      {/* Static shell — renders immediately */}
      <header className="demo-card">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          Static shell
        </p>
        <h2 className="text-2xl">Page header &amp; layout</h2>
        <p className="text-[var(--muted)]">
          This appears instantly on load — no artificial delay.
        </p>
      </header>

      <nav className="flex gap-4 border-b border-[var(--card)] pb-4">
        <span className="font-medium text-[var(--accent)]">Home</span>
        <span className="text-[var(--muted)]">Products</span>
        <span className="text-[var(--muted)]">About</span>
      </nav>

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

      <footer className="text-sm text-[var(--muted)]">
        Static footer — part of the prerendered shell.
      </footer>
    </div>
  );
}
