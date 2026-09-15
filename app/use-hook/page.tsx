import { Suspense } from "react";
import { UseHookDemo } from "./use-hook-demo";

export default function UseHookPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">use()</p>
      <h1 className="text-3xl">use()</h1>

      <div className="demo-callout">
        <p>
          Edit <code>app/use-hook/use-hook-demo.tsx</code> — rewrite the active{" "}
          <code>useEffect</code> + <code>useState</code> block into the
          commented <code>use()</code> pattern below it.
        </p>
      </div>

      <Suspense fallback={<p className="text-[var(--muted)]">Loading…</p>}>
        <UseHookDemo />
      </Suspense>
    </div>
  );
}
