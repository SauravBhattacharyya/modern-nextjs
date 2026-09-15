"use client";

import { useActionState, useOptimistic } from "react";

type Comment = { id: number; text: string; pending?: boolean };

type FormState = { comments: Comment[]; error?: string };

type AddCommentAction = (
  prevState: FormState,
  formData: FormData,
) => Promise<FormState>;

export function CommentForm({ action }: { action: AddCommentAction }) {
  const [state, formAction, isPending] = useActionState(action, {
    comments: [],
  });

  const [optimisticComments, addOptimistic] = useOptimistic(
    state.comments,
    (current, newComment: Comment) => [...current, newComment],
  );

  return (
    <div className="space-y-4">
      <form
        action={async (formData) => {
          const text = formData.get("text") as string;
          addOptimistic({
            id: Date.now(),
            text,
            pending: true,
          });
          formAction(formData);
        }}
        className="flex gap-3"
      >
        <input
          name="text"
          type="text"
          placeholder="Add a comment…"
          required
          className="flex-1 rounded border border-[var(--accent)] bg-white px-4 py-3 text-lg"
        />
        <button
          type="submit"
          disabled={isPending}
          className="rounded bg-[var(--accent)] px-6 py-3 font-medium text-white disabled:opacity-50"
        >
          {isPending ? "Saving…" : "Post"}
        </button>
      </form>

      {state.error && (
        <p className="text-red-600">{state.error}</p>
      )}

      <ul className="space-y-2">
        {optimisticComments.map((comment) => (
          <li
            key={comment.id}
            className={`demo-card text-lg ${comment.pending ? "opacity-60 italic" : ""}`}
          >
            {comment.text}
            {comment.pending && (
              <span className="ml-2 text-sm text-[var(--muted)]">
                (optimistic)
              </span>
            )}
          </li>
        ))}
      </ul>

      {optimisticComments.length === 0 && (
        <p className="text-[var(--muted)]">No comments yet — try posting one.</p>
      )}
    </div>
  );
}
