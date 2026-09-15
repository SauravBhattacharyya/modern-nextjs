const cache = new Map<string, { value: string; expiresAt: number }>();

async function slowFetch(key: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const now = Date.now();
  const cached = cache.get(key);

  if (cached && cached.expiresAt > now) {
    console.log(`CACHE HIT | key=${key}`);
    return { status: "HIT" as const, value: cached.value };
  }

  console.log(`CACHE MISS | key=${key}`);
  const value = `payload-${now}`;
  cache.set(key, { value, expiresAt: now + 60_000 });

  return { status: "MISS" as const, value };
}

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("key") ?? "default";
  const result = await slowFetch(key);

  return Response.json(
    { key, value: result.value, cacheStatus: result.status },
    {
      headers: {
        "X-Cache-Status": result.status,
      },
    },
  );
}
