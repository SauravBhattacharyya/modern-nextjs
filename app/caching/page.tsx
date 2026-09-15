import { cacheLife } from "next/cache";
import { headers } from "next/headers";
import Link from "next/link";

export const instant = false;

const legacyResults = new Map<string, string>();
const next16Results = new Map<string, string>();

async function getBaseUrl() {
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

async function slowWork() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return `payload-${Date.now()}`;
}

async function fetchLegacy(key: string) {
  const prev = legacyResults.get(key);
  const base = await getBaseUrl();

  const res = await fetch(`${base}/api/cache-probe?key=${key}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const value = data.value as string;

  if (prev === value) {
    console.log(`CACHE HIT | key=${key}`);
  } else {
    console.log(`CACHE MISS | key=${key}`);
    legacyResults.set(key, value);
  }

  return { value, cacheStatus: res.headers.get("X-Cache-Status") ?? "unknown" };
}

async function next16Cached(key: string) {
  "use cache";
  cacheLife("minutes");
  return slowWork();
}

async function fetchNext16(key: string) {
  const prev = next16Results.get(key);
  const value = await next16Cached(key);

  if (prev === value) {
    console.log(`CACHE HIT | key=${key}`);
  } else {
    console.log(`CACHE MISS | key=${key}`);
    next16Results.set(key, value);
  }

  return { value, cacheStatus: prev === value ? "HIT" : "MISS" };
}

export default async function CachingPage({
  searchParams,
}: {
  searchParams: Promise<{ panel?: string }>;
}) {
  const { panel = "15" } = await searchParams;
  const key = panel === "16" ? "next16-demo" : "legacy-demo";

  const result =
    panel === "16" ? await fetchNext16(key) : await fetchLegacy(key);

  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Caching: 15 → 16</p>
      <h1 className="text-3xl">Caching: 15 → 16</h1>

      <div className="demo-callout">
        <p>
          <strong>Run in production:</strong>{" "}
          <code>npm run build &amp;&amp; npm run start</code> — not{" "}
          <code>next dev</code>. Refresh twice and read{" "}
          <strong>terminal logs</strong> for CACHE HIT / CACHE MISS.
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          href="/caching?panel=15"
          className={`rounded px-4 py-2 font-medium ${
            panel === "15"
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          Next 15 style
        </Link>
        <Link
          href="/caching?panel=16"
          className={`rounded px-4 py-2 font-medium ${
            panel === "16"
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          Next 16 style
        </Link>
      </div>

      <div className="demo-card space-y-3">
        <h2 className="text-xl">
          {panel === "16"
            ? "Next 16 — use cache + cacheLife"
            : "Next 15 style — fetch + revalidate"}
        </h2>
        <p className="text-[var(--muted)]">
          Mechanism:{" "}
          {panel === "16"
            ? "'use cache' with cacheLife('minutes')"
            : "fetch(url, { next: { revalidate: 60 } })"}
        </p>
        <div className="demo-log">
          {`CACHE ${result.cacheStatus === "HIT" ? "HIT" : "MISS"} | key=${key}\nvalue=${result.value}`}
        </div>
        <p className="text-sm text-[var(--muted)]">
          On-page preview mirrors terminal format. Check Network tab for{" "}
          <code>X-Cache-Status</code> header (Next 15 panel).
        </p>
      </div>
    </div>
  );
}
