const todos: { id: number; text: string }[] = [];
let nextId = 1;

export async function GET() {
  return Response.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();
  const text = typeof body.text === "string" ? body.text.trim() : "";

  if (!text) {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  const todo = { id: nextId++, text };
  todos.push(todo);

  return Response.json(todo);
}
