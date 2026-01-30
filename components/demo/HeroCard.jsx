import Link from "next/link";

export default function HeroCard({ hero, href }) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {/* Preview */}
      <div className="relative border-b border-zinc-200 bg-zinc-50">
        {hero.previewImage ? (
          // Use img to keep it drop-in; swap to next/image if you want.
          <img
            src={hero.previewImage}
            alt={`${hero.name} preview`}
            className="h-44 w-full object-cover"
          />
        ) : (
          <div className="h-44 w-full p-6">
            {/* Product-window placeholder */}
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="grid h-28 grid-cols-[110px_1fr]">
                <div className="border-r border-zinc-200 bg-zinc-50 p-3">
                  <div className="h-3 w-14 rounded bg-zinc-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-2.5 w-full rounded bg-zinc-200" />
                    <div className="h-2.5 w-5/6 rounded bg-zinc-200" />
                    <div className="h-2.5 w-2/3 rounded bg-zinc-200" />
                  </div>
                </div>
                <div className="p-3">
                  <div className="h-3 w-24 rounded bg-zinc-200" />
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-8 rounded border border-zinc-200 bg-zinc-50" />
                    <div className="h-8 rounded border border-zinc-200 bg-zinc-50" />
                  </div>
                  <div className="mt-2 h-8 rounded border border-zinc-200 bg-zinc-50" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute right-3 top-3 rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs text-zinc-700">
          Live preview
        </div>
      </div>

      {/* Meta */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900">{hero.name}</div>
            <div className="mt-1 text-sm text-zinc-600">{hero.description}</div>
          </div>

          <div className="mt-0.5 text-xs text-zinc-500 group-hover:text-zinc-700">
            Open →
          </div>
        </div>

        {/* Tags */}
        {hero.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {hero.tags.slice(0, 3).map((t) => (
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
    </Link>
  );
}
