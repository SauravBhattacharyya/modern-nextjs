# Modern Next.js — Talk Demos

Companion demo app for **"Modern Next.js: What's New in Next.js 15 & 16"** — a live-demo project for an internal talk, also posted on GitHub for follow-up reading.

Built with **Next.js 16.3** and **React 19.2**. Each demo is intentionally small: one route, one or two files, readable top to bottom without jumping through abstractions.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to the first demo. Use the sidebar to move between demos.

For production-like behavior (PPR, instant navigations):

```bash
npm run build
npm run start
```

`cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`.

## Demos (sidebar order)

| Route | Topic | Format |
|-------|-------|--------|
| `/server-components` | Server Components | Terminal vs browser console logs |
| `/use-hook` | `use()` | Live-coding starter in `use-hook-demo.tsx` |
| `/actions-optimistic` | Actions & `useOptimistic` | Interactive form with optimistic UI |
| `/use-effect-event` | `useEffectEvent` | Live-coding starter in `stale-effect-demo.tsx` |
| `/activity` | `<Activity>` | Before/after toggle — state survives tab switch |
| `/server-actions` | Server Actions | Live-coding starter — `fetch` → Server Action |
| `/cache-components-ppr` | Cache Components & PPR | Static shell streams in, slow section follows |
| `/instant-navigations` | Instant Navigations | Blocking (slow) vs instant (fast) route groups |

## Not in the sidebar

Two routes exist in the repo but are **hidden from the nav** — they were covered as **slides-only** during the talk (no live alt-tab demo):

| Route | Topic | Why hidden |
|-------|-------|------------|
| [`/caching`](http://localhost:3000/caching) | Caching: 15 → 16 | Slides-only section — production caching demos are unreliable on stage; the page is here if you want to experiment locally |
| [`/proxy`](http://localhost:3000/proxy) | `middleware.ts` → `proxy.ts` | Slides-only section — rename/migration story; visit [`/proxy/destination`](http://localhost:3000/proxy/destination) to see the injected `x-demo-proxy` header |

Root [`middleware.ts`](middleware.ts) still powers the proxy demo (injects a header on `/proxy/destination`).

## Live-coding files

These routes have starter code with a commented “after” block for live rewriting during the talk:

- `app/use-hook/use-hook-demo.tsx`
- `app/use-effect-event/stale-effect-demo.tsx`
- `app/server-actions/page.tsx` + `app/server-actions/todo-form.tsx`

## Project structure

```
app/
  <demo>/page.tsx          # one page per demo (max +1 colocated file)
components/
  demo-nav.tsx             # sidebar — only shared UI component
middleware.ts              # proxy demo (network boundary header injection)
```

Shared theme and palette live in `app/globals.css`. No per-demo `hooks/`, `utils/`, or layout wrappers.

## API routes (demo support only)

- `/api/quote` — used by server-components and use-hook demos
- `/api/todos` — used by server-actions starter (before Server Action swap)
- `/api/cache-probe` — used by `/caching` (hidden demo)
