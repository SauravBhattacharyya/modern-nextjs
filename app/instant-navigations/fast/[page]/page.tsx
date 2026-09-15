import Link from "next/link";
import { Suspense } from "react";

export const instant = false;

async function SlowContent({ page }: { page: string }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <h1 className="text-3xl">Fast page {page}</h1>
      <p className="demo-callout">
        The loading shell appeared immediately on navigation. This content
        streamed in after a 2-second delay inside Suspense.
      </p>
    </>
  );
}

export default async function FastPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Instant Navigations — Instant</p>

      <Suspense
        fallback={
          <div className="demo-card animate-pulse text-lg text-[var(--muted)]">
            Streaming content…
          </div>
        }
      >
        <SlowContent page={page} />
      </Suspense>

      <div className="flex gap-3">
        <Link href="/instant-navigations" className="text-[var(--accent)]">
          ← Back to hub
        </Link>
        {["1", "2", "3"]
          .filter((p) => p !== page)
          .map((p) => (
            <Link
              key={p}
              href={`/instant-navigations/fast/${p}`}
              className="rounded bg-[var(--accent)] px-4 py-2 text-white"
            >
              Fast {p}
            </Link>
          ))}
      </div>
    </div>
  );
}
