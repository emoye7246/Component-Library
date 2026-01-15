export default function HeroSplit({
    badge,
    title,
    highlight,
    subtitle,
    primaryCta,   // { label, href }
    secondaryCta, // { label, href }
    media,        // { type: "image" | "video" | "custom", src?, alt?, poster?, rightSlot? }
    trustLine = "No credit card • Cancel anytime • Copy-paste friendly",
}) {
    return (
        <section className="relative w-full bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: Copy */}
                    <div className="text-left">
                        {badge && (
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                                {badge}
                            </span>
                        )}

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            {title}
                            {highlight ? (
                                <span className="block mt-2 text-gray-600">{highlight}</span>
                            ) : null}
                        </h1>

                        {subtitle && (
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {subtitle}
                            </p>
                        )}

                        {(primaryCta || secondaryCta) && (
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                {primaryCta && (
                                    <a
                                        href={primaryCta.href}
                                        className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/20"
                                    >
                                        {primaryCta.label}
                                    </a>
                                )}

                                {secondaryCta && (
                                    <a
                                        href={secondaryCta.href}
                                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/10"
                                    >
                                        {secondaryCta.label}
                                    </a>
                                )}
                            </div>
                        )}

                        {trustLine && (
                            <div className="mt-8 text-sm text-gray-500">{trustLine}</div>
                        )}
                    </div>

                    {/* Right: Media */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                            {media?.type === "video" && media?.src ? (
                                <video
                                    className="h-full w-full object-cover"
                                    src={media.src}
                                    poster={media.poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : media?.type === "image" && media?.src ? (
                                <img
                                    className="h-full w-full object-cover"
                                    src={media.src}
                                    alt={media.alt || "Product preview"}
                                />
                            ) : media?.type === "custom" && media?.rightSlot ? (
                                <div className="p-6">{media.rightSlot}</div>
                            ) : (
                                /* Product window placeholder */
                                <div className="relative">
                                    {/* Browser chrome */}
                                    <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                    </div>

                                    {/* App layout */}
                                    <div className="grid h-72 grid-cols-[180px_1fr]">
                                        {/* Sidebar */}
                                        <div className="border-r border-gray-200 bg-gray-50 p-4">
                                            <div className="mb-4 h-4 w-24 rounded bg-gray-200" />
                                            <div className="space-y-2">
                                                <div className="h-3 w-full rounded bg-gray-200" />
                                                <div className="h-3 w-full rounded bg-gray-200" />
                                                <div className="h-3 w-3/4 rounded bg-gray-200" />
                                            </div>
                                        </div>

                                        {/* Main content */}
                                        <div className="p-6">
                                            <div className="mb-4 h-4 w-40 rounded bg-gray-200" />
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-24 rounded-lg bg-gray-100 border border-gray-200" />
                                                <div className="h-24 rounded-lg bg-gray-100 border border-gray-200" />
                                            </div>
                                            <div className="mt-4 h-24 rounded-lg bg-gray-100 border border-gray-200" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
