import HeroCard from "@/components/demo/HeroCard";
import { heroRegistry } from "@/components/demo/heroRegistry";

export default function HeroesGalleryPage({ searchParams }) {
  const q = (searchParams?.q || "").toLowerCase().trim();

  const heroes = heroRegistry.filter((h) => {
    if (!q) return true;
    const hay = `${h.name} ${h.description} ${(h.tags || []).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header (matches detail vibe) */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="/components"
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              ← Components
            </a>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
              Heroes
            </h1>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Browse hero sections. Open any component to see a live preview and a
              copy-ready usage snippet.
            </p>
          </div>

          {/* Search */}
          <form className="w-full sm:w-[360px]" action="/components/heroes" method="get">
            <div className="relative">
              <input
                name="q"
                defaultValue={searchParams?.q || ""}
                placeholder="Search heroes…"
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-sm outline-none focus:border-zinc-400"
              />
              {q ? (
                <a
                  href="/components/heroes"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-800"
                >
                  Clear
                </a>
              ) : null}
            </div>
          </form>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {heroes.map((hero) => (
            <HeroCard
              key={hero.slug}
              hero={hero}
              href={`/components/heroes/${hero.slug}`}
            />
          ))}
        </div>

        {/* Empty state */}
        {heroes.length === 0 && (
          <div className="mt-16 rounded-2xl border border-zinc-200 bg-white p-10 text-center text-zinc-600 shadow-sm">
            No heroes match “{searchParams?.q}”.
          </div>
        )}
      </div>
    </div>
  );
}
