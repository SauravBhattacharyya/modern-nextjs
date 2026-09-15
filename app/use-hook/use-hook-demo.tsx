"use client";

import { useEffect, useState } from "react";

type QuoteData = { quote: string; fetchedAt: string };

// ── ACTIVE: old pattern (useEffect + useState) ──────────────────────────────
// Rewrite live into the use() pattern below.

function fetchQuote(): Promise<QuoteData> {
  return fetch("/api/quote").then((res) => res.json());
}

export function UseHookDemo() {
  const [data, setData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-[var(--muted)]">Loading quote…</p>;

  return (
    <blockquote className="border-l-4 border-[var(--accent)] pl-4 text-xl">
      &ldquo;{data?.quote}&rdquo;
    </blockquote>
  );
}

// ── NEW PATTERN (use + Suspense) — uncomment during live demo ───────────────
//
// import { use, Suspense } from "react";
//
// function fetchQuote(): Promise<QuoteData> {
//   return fetch("/api/quote").then((res) => res.json());
// }
//
// const quotePromise = fetchQuote();
//
// function QuoteDisplay({ promise }: { promise: Promise<QuoteData> }) {
//   const data = use(promise);
//   return (
//     <blockquote className="border-l-4 border-[var(--accent)] pl-4 text-xl">
//       &ldquo;{data.quote}&rdquo;
//     </blockquote>
//   );
// }
//
// export function UseHookDemo() {
//   return (
//     <Suspense fallback={<p className="text-[var(--muted)]">Loading quote…</p>}>
//       <QuoteDisplay promise={quotePromise} />
//     </Suspense>
//   );
// }
