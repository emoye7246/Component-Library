export default function ComponentShowcase({ components = [] }) {
    const defaultComponents = [
        {
            name: "Hero Sections",
            description: "Beautiful hero sections to make a great first impression",
            category: "Heroes",
            preview: "/Untitled design.png",
        },
        {
            name: "Pricing Tables",
            description: "Flexible pricing components for your SaaS",
            category: "Pricing",
            preview: "/Untitled design.png",
        },
        {
            name: "Auth Forms",
            description: "Login and signup forms ready to integrate",
            category: "Auth",
            preview: "/Untitled design.png",
        },
    ];

    const items = components.length > 0 ? components : defaultComponents;

    return (
        <section className="relative w-full bg-white px-6 py-20 sm:py-24" id="components">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Browse our component library
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Hand-picked components for modern web applications
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((component, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                <img
                                    src={component.preview}
                                    alt={component.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2">
                                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-700">
                                        {component.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {component.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {component.description}
                                </p>
                                <a
                                    href="/components"
                                    className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
                                >
                                    View Component →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/components"
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                        View All Components
                    </a>
                </div>
            </div>
        </section>
    );
}

