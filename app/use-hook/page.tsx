"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const UseHookDemo = dynamic(
  () => import("./use-hook-demo").then((m) => m.UseHookDemo),
  { ssr: false },
);

export default function UseHookPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">use()</p>
      <h1 className="text-3xl">use()</h1>

      <div className="demo-callout">
        <p>
          Edit <code>app/use-hook/use-hook-demo.tsx</code> — swap the OLD and
          NEW blocks.
        </p>
      </div>

      <Suspense fallback={<p className="text-[var(--muted)]">Loading…</p>}>
        <UseHookDemo />
      </Suspense>
    </div>
  );
}
