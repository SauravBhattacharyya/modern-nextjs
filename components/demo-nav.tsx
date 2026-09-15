"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const demos = [
  { href: "/server-components", label: "Server Components" },
  { href: "/use-hook", label: "use()" },
  { href: "/actions-optimistic", label: "Actions & useOptimistic" },
  { href: "/use-effect-event", label: "useEffectEvent" },
  { href: "/activity", label: "Activity" },
  { href: "/server-actions", label: "Server Actions" },
  { href: "/caching", label: "Caching: 15 → 16" },
  { href: "/cache-components-ppr", label: "Cache Components & PPR" },
  { href: "/instant-navigations", label: "Instant Navigations" },
  { href: "/proxy", label: "proxy.ts" },
];

export function DemoNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-56 shrink-0 flex-col border-r border-[color-mix(in_srgb,var(--accent)_25%,transparent)] bg-[var(--card)] p-4">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
        Demos
      </p>
      <ul className="flex flex-col gap-1">
        {demos.map((demo) => {
          const isActive =
            pathname === demo.href || pathname.startsWith(demo.href + "/");

          return (
            <li key={demo.href}>
              <Link
                href={demo.href}
                className={`block rounded px-3 py-2 text-sm leading-snug transition-colors ${
                  isActive
                    ? "bg-[var(--accent)] font-medium text-white"
                    : "text-[var(--text)] hover:bg-[var(--callout)]"
                }`}
              >
                {demo.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
