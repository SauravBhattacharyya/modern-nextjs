export async function SlowSection() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="demo-card border-2 border-[var(--accent)]">
      <h2 className="mb-2 text-xl">Slow dynamic section</h2>
      <p>
        This content took 3 seconds to load. The shell above appeared instantly
        thanks to Partial Prerendering.
      </p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Loaded at {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
