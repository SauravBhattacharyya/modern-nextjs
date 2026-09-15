// ── OLD: Server Actions ─────

import { TodoForm } from "./todo-form";

export default function ServerActionsPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Server Actions</p>
      <h1 className="text-3xl">Server Actions</h1>

      <div className="demo-callout">
        <p>
          Edit <code>app/server-actions/page.tsx</code> and{" "}
          <code>todo-form.tsx</code> — swap the OLD and NEW blocks.
        </p>
      </div>

      <TodoForm />
    </div>
  );
}

// ── NEW: Server Actions ─────

// import { revalidatePath } from "next/cache";
// import { TodoForm } from "./todo-form";

// const todos: { id: number; text: string }[] = [];
// let nextId = 1;

// async function addTodo(
//   prevState: { todos: { id: number; text: string }[] },
//   formData: FormData,
// ) {
//   "use server";

//   const text = (formData.get("text") as string)?.trim();
//   if (!text) return prevState;

//   todos.push({ id: nextId++, text });
//   revalidatePath("/server-actions");

//   return { todos: [...todos] };
// }

// export default function ServerActionsPage() {
//   return (
//     <div className="max-w-3xl space-y-6">
//       <p className="demo-badge">Server Actions</p>
//       <h1 className="text-3xl">Server Actions</h1>

//       <div className="demo-callout">
//         <p>
//           Edit <code>app/server-actions/page.tsx</code> and{" "}
//           <code>todo-form.tsx</code> — swap the OLD and NEW blocks.
//         </p>
//       </div>

//       <TodoForm action={addTodo} />
//     </div>
//   );
// }
