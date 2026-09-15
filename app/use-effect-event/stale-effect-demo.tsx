"use client";

import { useEffect, useState } from "react";

// ── ACTIVE: buggy effect with stale closure ─────────────────────────────────
// Fix live by replacing with useEffectEvent (commented block below).

export function StaleEffectDemo() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const entry = `[interval] count prop is ${count} (stale — always 0)`;
      console.log(entry);
      setLogs((prev) => [...prev.slice(-4), entry]);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // ← missing count — classic stale closure

  return (
    <div className="space-y-4">
      <p className="text-2xl">
        Current count: <strong>{count}</strong>
      </p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded bg-[var(--accent)] px-6 py-3 text-lg font-medium text-white"
      >
        Increment
      </button>
      <div>
        <p className="mb-2 font-medium">On-screen log (updates every 2s):</p>
        <div className="demo-log min-h-[8rem]">
          {logs.length === 0
            ? "Waiting for first interval tick…"
            : logs.join("\n")}
        </div>
      </div>
    </div>
  );
}

// ── FIX with useEffectEvent — uncomment during live demo ──────────────────────
//
// import { useEffect, useEffectEvent, useState } from "react";
//
// export function StaleEffectDemo() {
//   const [count, setCount] = useState(0);
//   const [logs, setLogs] = useState<string[]>([]);
//
//   const onTick = useEffectEvent(() => {
//     const entry = `[interval] count prop is ${count} (fresh!)`;
//     console.log(entry);
//     setLogs((prev) => [...prev.slice(-4), entry]);
//   });
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       onTick();
//     }, 2000);
//
//     return () => clearInterval(interval);
//   }, []);
//
//   return (
//     <div className="space-y-4">
//       <p className="text-2xl">
//         Current count: <strong>{count}</strong>
//       </p>
//       <button
//         type="button"
//         onClick={() => setCount((c) => c + 1)}
//         className="rounded bg-[var(--accent)] px-6 py-3 text-lg font-medium text-white"
//       >
//         Increment
//       </button>
//       <div>
//         <p className="mb-2 font-medium">On-screen log (updates every 2s):</p>
//         <div className="demo-log min-h-[8rem]">
//           {logs.length === 0
//             ? "Waiting for first interval tick…"
//             : logs.join("\n")}
//         </div>
//       </div>
//     </div>
//   );
// }
