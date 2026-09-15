import { headers } from "next/headers";
import { ClientFetch } from "./client-fetch";

export const instant = false;

async function getQuote() {
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/quote`, {
    cache: "no-store",
  });
  return res.json() as Promise<{ quote: string; fetchedAt: string }>;
}

async function ServerFetch() {
  const data = await getQuote();
  console.log("[Server Component] rendered on server", data);

  return (
    <div className="demo-card">
      <h2 className="mb-2 text-xl">Server Component</h2>
      <p className="text-[var(--muted)]">
        Check the <strong>terminal</strong> for the log line.
      </p>
      <blockquote className="mt-4 border-l-4 border-[var(--accent)] pl-4">
        &ldquo;{data.quote}&rdquo;
        <footer className="mt-1 text-sm text-[var(--muted)]">
          fetched at {data.fetchedAt}
        </footer>
      </blockquote>
    </div>
  );
}

export default function ServerComponentsPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Server Components</p>
      <h1 className="text-3xl">Server Components</h1>

      <div className="demo-callout">
        <p>
          Both components fetch the same <code>/api/quote</code> data. Open{" "}
          <strong>DevTools → Console</strong> and compare with your{" "}
          <strong>terminal</strong>. In Network, note the extra JS bundle for
          the Client Component.
        </p>
      </div>

      <ServerFetch />
      <ClientFetch />
    </div>
  );
}
