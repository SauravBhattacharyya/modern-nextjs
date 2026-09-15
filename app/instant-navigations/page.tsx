import Link from "next/link";

const pages = ["1", "2", "3"];

export default function InstantNavigationsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <p className="demo-badge">Instant Navigations</p>
      <h1 className="text-3xl">Instant Navigations</h1>

      <div className="demo-callout">
        <p>
          Compare blocking navigation (slow) vs instant navigation (fast). Click
          between pages — slow routes hold the old page until data loads; fast
          routes show a loading shell immediately.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl text-red-700">Blocking (slow)</h2>
        <p className="text-[var(--muted)]">
          Top-level await, no loading.tsx — URL may update but old page stays
          visible.
        </p>
        <div className="flex gap-3">
          {pages.map((p) => (
            <Link
              key={p}
              href={`/instant-navigations/slow/${p}`}
              className="rounded bg-[var(--card)] px-4 py-2 font-medium hover:bg-[var(--callout)]"
            >
              Slow page {p}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl text-[var(--accent)]">Instant (fast)</h2>
        <p className="text-[var(--muted)]">
          Delay inside Suspense + loading.tsx — shell appears on click.
        </p>
        <div className="flex gap-3">
          {pages.map((p) => (
            <Link
              key={p}
              href={`/instant-navigations/fast/${p}`}
              className="rounded bg-[var(--accent)] px-4 py-2 font-medium text-white hover:opacity-90"
            >
              Fast page {p}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
