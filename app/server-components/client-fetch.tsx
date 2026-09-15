"use client";

import { useEffect, useState } from "react";

type QuoteData = { quote: string; fetchedAt: string };

export function ClientFetch() {
  const [data, setData] = useState<QuoteData | null>(null);

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((json: QuoteData) => {
        console.log("[Client Component] rendered on client", json);
        setData(json);
      });
  }, []);

  return (
    <div className="demo-card">
      <h2 className="mb-2 text-xl">Client Component</h2>
      <p className="text-[var(--muted)]">
        Check the <strong>browser console</strong> for the log line.
      </p>
      {data ? (
        <blockquote className="mt-4 border-l-4 border-[var(--accent)] pl-4">
          &ldquo;{data.quote}&rdquo;
          <footer className="mt-1 text-sm text-[var(--muted)]">
            fetched at {data.fetchedAt}
          </footer>
        </blockquote>
      ) : (
        <p className="mt-4 text-[var(--muted)]">Loading…</p>
      )}
    </div>
  );
}
