import Link from "next/link";

export const instant = false;

export default async function SlowPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  // Blocking: top-level await with no Suspense boundary
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Instant Navigations — Blocking</p>
      <h1 className="text-3xl">Slow page {page}</h1>
      <p className="demo-callout">
        This page blocked for 2 seconds at the top level. During navigation, the
        previous page stayed visible until this rendered.
      </p>
      <div className="flex gap-3">
        <Link href="/instant-navigations" className="text-[var(--accent)]">
          ← Back to hub
        </Link>
        {["1", "2", "3"]
          .filter((p) => p !== page)
          .map((p) => (
            <Link
              key={p}
              href={`/instant-navigations/slow/${p}`}
              className="rounded bg-[var(--card)] px-4 py-2"
            >
              Slow {p}
            </Link>
          ))}
      </div>
    </div>
  );
}
