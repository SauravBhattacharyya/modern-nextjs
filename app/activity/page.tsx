"use client";

import { useState } from "react";
import { ActivityTabs } from "./activity-tabs";

export default function ActivityPage() {
  const [useActivity, setUseActivity] = useState(false);

  return (
    <div className="max-w-3xl space-y-6">
      <p className="demo-badge">Activity</p>
      <h1 className="text-3xl">Activity</h1>

      <div className="demo-callout">
        <p>
          Type in Tab A, switch to Tab B, then switch back. Without Activity,
          your text is lost. With Activity, state survives the switch.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setUseActivity(false)}
          className={`rounded px-4 py-2 font-medium ${
            !useActivity
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          Without Activity
        </button>
        <button
          type="button"
          onClick={() => setUseActivity(true)}
          className={`rounded px-4 py-2 font-medium ${
            useActivity
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          With Activity
        </button>
      </div>

      <ActivityTabs useActivity={useActivity} />
    </div>
  );
}
