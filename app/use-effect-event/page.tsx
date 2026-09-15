import { StaleEffectDemo } from "./stale-effect-demo";

export default function UseEffectEventPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">useEffectEvent</p>
      <h1 className="text-3xl">useEffectEvent</h1>

      <div className="demo-callout">
        <p>
          Edit <code>app/use-effect-event/stale-effect-demo.tsx</code>. Increment
          the counter — the interval log stays at 0 (stale closure). Fix it live
          with <code>useEffectEvent</code> using the commented block below.
        </p>
      </div>

      <StaleEffectDemo />
    </div>
  );
}
