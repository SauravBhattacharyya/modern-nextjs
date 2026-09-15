import Link from "next/link";

export default function ProxyPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">proxy.ts</p>
      <h1 className="text-3xl">proxy.ts</h1>

      <div className="demo-callout">
        <p>
          Root <code>middleware.ts</code> injects <code>x-demo-proxy</code> on
          requests to <code>/proxy/destination</code>. In Next.js 16 this
          convention is renamed to <code>proxy.ts</code> with an exported{" "}
          <code>proxy</code> function — same matcher, same behavior.
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
