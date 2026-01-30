"use client";

import { useMemo, useState } from "react";

export default function ComponentDetailShell({
  title,
  description,
  backHref = "/components/heroes",
  preview,
  usageCode,
  showDeviceToggle = true,
  showThemeToggle = false,
  topics = [],
}) {
  const [device, setDevice] = useState("desktop");
  const [copied, setCopied] = useState(false);

  const frameClasses = useMemo(() => {
    if (device === "mobile") {
      return "mx-auto w-[390px] max-w-full rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden";
    }
    // return "w-full overflow-hidden";
    return "w-full rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden";

  }, [device]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(usageCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
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
            {topics.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center rounded-md bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2">
            {showDeviceToggle && (
              <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setDevice("desktop")}
                  className={`rounded-md px-3 py-1 text-sm ${
                    device === "desktop"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setDevice("mobile")}
                  className={`rounded-md px-3 py-1 text-sm ${
                    device === "mobile"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  Mobile
                </button>
              </div>
            )}

            {showThemeToggle && (
              <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-1">
                <button
                  type="button"
                  className="rounded-md px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  Light
                </button>
                <button
                  type="button"
                  className="rounded-md px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  Dark
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Preview</h2>
            <div className="text-xs text-zinc-500">Live component</div>
          </div>

          <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className={frameClasses}>{preview}</div>
          </div>
        </div>

        {/* Code */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Usage</h2>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="mt-3 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-950 p-4 text-sm text-zinc-100 shadow-sm">
            <code>{usageCode}</code>
          </pre>

          <p className="mt-2 text-xs text-zinc-500">
            Tip: tweak the props to match your product tone.
          </p>
        </div>
      </div>
    </div>
  );
}
