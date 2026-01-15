export default function CTASection({
    title = "Ready to get started?",
    subtitle = "Start building faster with our component library today.",
    primaryCta = { label: "Browse Components", href: "#components" },
    secondaryCta = { label: "View Documentation", href: "#" },
}) {
    return (
        <section className="relative w-full bg-gray-900 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                    {subtitle}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    {primaryCta && (
                        <a
                            href={primaryCta.href}
                            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            {primaryCta.label}
                        </a>
                    )}

                    {secondaryCta && (
                        <a
                            href={secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                            {secondaryCta.label}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

