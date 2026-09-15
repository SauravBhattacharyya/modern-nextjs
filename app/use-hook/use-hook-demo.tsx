"use client";

import { useEffect, useState } from "react";
// import { use } from "react";

type QuoteData = { quote: string; fetchedAt: string };

function fetchQuote() {
  return fetch("/api/quote").then((res) => res.json() as Promise<QuoteData>);
}

// ── OLD: useEffect + useState ─────

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

// ── NEW: use() ──────────────────────
// const quotePromise = fetchQuote();

// function QuoteDisplay({ promise }: { promise: Promise<QuoteData> }) {
//   const data = use(promise);
//   return (
//     <blockquote className="border-l-4 border-[var(--accent)] pl-4 text-xl">
//       &ldquo;{data.quote}&rdquo;
//     </blockquote>
//   );
// }

// export function UseHookDemo() {
//   return <QuoteDisplay promise={quotePromise} />;
// }
