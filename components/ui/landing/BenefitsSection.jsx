export default function BenefitsSection({ benefits = [] }) {
    const defaultBenefits = [
        {
            title: "Save Development Time",
            description: "Stop building components from scratch. Use our pre-built, tested components and focus on what matters.",
        },
        {
            title: "Consistent Design",
            description: "All components follow the same design system, ensuring a cohesive look across your application.",
        },
        {
            title: "Mobile Responsive",
            description: "Every component is built mobile-first and works perfectly on all screen sizes.",
        },
        {
            title: "Accessible by Default",
            description: "Components follow WCAG guidelines and include proper ARIA attributes for screen readers.",
        },
    ];

    const items = benefits.length > 0 ? benefits : defaultBenefits;

    return (
        <section className="relative w-full bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why choose our components?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Built by developers, for developers
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {items.map((benefit, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

