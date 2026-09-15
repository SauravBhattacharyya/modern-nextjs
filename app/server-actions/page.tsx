import { TodoForm } from "./todo-form";

export default function ServerActionsPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Server Actions</p>
      <h1 className="text-3xl">Server Actions</h1>

      <div className="demo-callout">
        <p>
          Currently uses <code>fetch(&apos;/api/todos&apos;)</code>. Live demo:
          replace with a Server Action in{" "}
          <code>app/server-actions/page.tsx</code> — add{" "}
          <code>&apos;use server&apos;</code>, mutate, and{" "}
          <code>revalidatePath</code>.
        </p>
      </div>

      <TodoForm />
    </div>
  );
}
