"use client";

// import { useEffect, useState } from "react";
import { useActionState } from "react";

export type Todo = { id: number; text: string };

// ── OLD: Server Actions ─────

// export function TodoForm() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch("/api/todos")
//       .then((res) => res.json())
//       .then(setTodos);
//   }, []);

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!text.trim()) return;

//     setLoading(true);
//     const res = await fetch("/api/todos", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });
//     const todo = await res.json();
//     setTodos((prev) => [...prev, todo]);
//     setText("");
//     setLoading(false);
//   }

//   return (
//     <div className="space-y-4">
//       <form onSubmit={handleSubmit} className="flex gap-3">
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Add a todo…"
//           className="flex-1 rounded border border-[var(--accent)] bg-white px-4 py-3 text-lg"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="rounded bg-[var(--accent)] px-6 py-3 font-medium text-white disabled:opacity-50"
//         >
//           Add
//         </button>
//       </form>

//       <ul className="space-y-2">
//         {todos.map((todo) => (
//           <li key={todo.id} className="demo-card text-lg">
//             {todo.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ── NEW: Server Actions ─────

type FormState = { todos: Todo[] };

type AddTodoAction = (
  prev: FormState,
  formData: FormData,
) => Promise<FormState>;

export function TodoForm({ action }: { action: AddTodoAction }) {
  const [state, formAction, pending] = useActionState(action, { todos: [] });

  return (
    <div className="space-y-4">
      <form action={formAction} className="flex gap-3">
        <input
          name="text"
          type="text"
          placeholder="Add a todo…"
          required
          className="flex-1 rounded border border-[var(--accent)] bg-white px-4 py-3 text-lg"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[var(--accent)] px-6 py-3 font-medium text-white disabled:opacity-50"
        >
          {pending ? "Adding…" : "Add"}
        </button>
      </form>

      <ul className="space-y-2">
        {state.todos.map((todo) => (
          <li key={todo.id} className="demo-card text-lg">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
