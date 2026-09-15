"use client";

import { Activity, useState } from "react";

function TabPanel({ id, label }: { id: string; label: string }) {
  const [text, setText] = useState("");

  return (
    <div className="demo-card space-y-3">
      <h3 className="text-xl">{label}</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type something in ${label}…`}
        className="w-full rounded border border-[var(--accent)] bg-white px-4 py-3 text-lg"
      />
      <p className="text-[var(--muted)]">
        Saved text: <strong>{text || "(empty)"}</strong>
      </p>
    </div>
  );
}

export function ActivityTabs({ useActivity }: { useActivity: boolean }) {
  const [activeTab, setActiveTab] = useState<"a" | "b">("a");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("a")}
          className={`rounded px-4 py-2 font-medium ${
            activeTab === "a"
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          Tab A
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("b")}
          className={`rounded px-4 py-2 font-medium ${
            activeTab === "b"
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--card)] text-[var(--text)]"
          }`}
        >
          Tab B
        </button>
      </div>

      {useActivity ? (
        <>
          <Activity mode={activeTab === "a" ? "visible" : "hidden"}>
            <TabPanel id="a" label="Tab A" />
          </Activity>
          <Activity mode={activeTab === "b" ? "visible" : "hidden"}>
            <TabPanel id="b" label="Tab B" />
          </Activity>
        </>
      ) : (
        <>
          {activeTab === "a" && <TabPanel id="a" label="Tab A" />}
          {activeTab === "b" && <TabPanel id="b" label="Tab B" />}
        </>
      )}
    </div>
  );
}
