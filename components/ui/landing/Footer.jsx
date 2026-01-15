export default function Footer({
    links = {},
    copyright = `© ${new Date().getFullYear()} Component Library. All rights reserved.`,
}) {
    const defaultLinks = {
        product: [
            { label: "Components", href: "#components" },
            { label: "Documentation", href: "#" },
            { label: "Changelog", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "#" },
        ],
        legal: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "License", href: "#" },
        ],
    };

    const footerLinks = Object.keys(links).length > 0 ? links : defaultLinks;

    return (
        <footer className="relative w-full bg-white border-t border-gray-200 px-6 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Component Library
                        </h3>
                        <p className="text-sm text-gray-600">
                            Ready-to-use components for your next project.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-4 capitalize">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {items.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                        {copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

