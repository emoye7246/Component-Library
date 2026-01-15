"use client";

import { useState, useEffect } from "react";

export default function Navbar({
    logo = "Component Library",
    logoHref = "/",
    links = [],
    cta = { label: "Get Started", href: "#components" },
}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const defaultLinks = [
        { label: "Components", href: "/components" },
        { label: "Documentation", href: "#" },
        { label: "About", href: "#" },
    ];

    const navLinks = links.length > 0 ? links : defaultLinks;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-white border-b border-gray-200 shadow-md"
                    : "bg-white/95 backdrop-blur-sm border-b border-gray-200/50"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href={logoHref}
                        className="text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors"
                    >
                        {logo}
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href={cta.href}
                            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
                        >
                            {cta.label}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

