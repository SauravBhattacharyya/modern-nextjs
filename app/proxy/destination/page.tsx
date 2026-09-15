import { headers } from "next/headers";
import Link from "next/link";

export const instant = false;

export default async function ProxyDestinationPage() {
  const h = await headers();
  const proxyHeader = h.get("x-demo-proxy");

  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">proxy.ts</p>
      <h1 className="text-3xl">Proxy destination</h1>

      <div className="demo-card text-center">
        <p className="mb-2 text-[var(--muted)]">x-demo-proxy header value:</p>
        <p className="text-4xl font-bold text-[var(--accent)]">
          {proxyHeader ?? "(not set)"}
        </p>
      </div>

      {proxyHeader === "active" ? (
        <p className="demo-callout">
          Header was injected by middleware.ts (soon proxy.ts) — the proxy is
          working.
        </p>
      ) : (
        <p className="demo-callout">
          Header missing — check that middleware.ts is configured with matcher{" "}
          <code>/proxy/destination</code>.
        </p>
      )}

      <Link href="/proxy" className="text-[var(--accent)]">
        ← Back to proxy demo
      </Link>
    </div>
  );
}
