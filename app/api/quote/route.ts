export async function GET() {
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Simplicity is the ultimate sophistication.",
    "Move fast and don't break things.",
    "Programs must be written for people to read.",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return Response.json({
    quote,
    fetchedAt: new Date().toISOString(),
  });
}
