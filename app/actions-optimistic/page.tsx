import { CommentForm } from "./comment-form";

const comments: { id: number; text: string }[] = [];
let nextId = 1;

async function addComment(
  prevState: { comments: { id: number; text: string }[]; error?: string },
  formData: FormData,
) {
  "use server";

  const text = (formData.get("text") as string)?.trim();
  if (!text) {
    return { ...prevState, error: "Comment cannot be empty" };
  }

  // Artificial delay so optimistic update is visibly ahead of the server
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const comment = { id: nextId++, text };
  comments.push(comment);

  return { comments: [...comments] };
}

export default function ActionsOptimisticPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Actions &amp; useOptimistic</p>
      <h1 className="text-3xl">Actions &amp; useOptimistic</h1>

      <div className="demo-callout">
        <p>
          Post a comment — the UI updates instantly (optimistic) while the
          server action takes ~1.5s to respond. Watch the &ldquo;(optimistic)&rdquo;
          label disappear when the real response arrives.
        </p>
      </div>

      <CommentForm action={addComment} />
    </div>
  );
}
