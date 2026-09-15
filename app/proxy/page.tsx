import Link from "next/link";

export default function ProxyPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">proxy.ts</p>
      <h1 className="text-3xl">proxy.ts</h1>

      <div className="demo-callout">
        <p>
          <code>middleware.ts</code> at the project root injects a header on
          requests to <code>/proxy/destination</code>. Live demo: rename the
          file to <code>proxy.ts</code> and change{" "}
          <code>export function middleware</code> to{" "}
          <code>export function proxy</code>.
        </p>
      </div>

      <Link
        href="/proxy/destination"
        className="inline-block rounded bg-[var(--accent)] px-6 py-3 text-lg font-medium text-white"
      >
        Visit /proxy/destination →
      </Link>
    </div>
  );
}
