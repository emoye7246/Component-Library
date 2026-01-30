"use client";

import { useState } from "react";

export default function ComponentDetailShell({
  title,
  description,
  backHref = "/components",
  topics = [],
  preview,
  usageCode,
}) {
  const [tab, setTab] = useState("preview"); // "preview" | "usage"
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(usageCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href={backHref}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              ← Back
            </a>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
              {title}
            </h1>

            {description ? (
              <p className="mt-2 max-w-2xl text-zinc-600">{description}</p>
            ) : null}

            {topics?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Main panel */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-2">
            <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-1">
              <button
                onClick={() => setTab("preview")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  tab === "preview"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setTab("usage")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  tab === "usage"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                Usage
              </button>
            </div>

            {tab === "usage" ? (
              <button
                onClick={handleCopy}
                className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            ) : (
              <div className="text-xs text-zinc-500">Live component</div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            {tab === "preview" ? (
              <div className="rounded-xl border border-zinc-200 bg-white">
                {preview}
              </div>
            ) : (
              <pre className="max-h-[520px] overflow-auto rounded-xl bg-zinc-950 p-4 text-sm text-zinc-100">
                <code>{usageCode}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
