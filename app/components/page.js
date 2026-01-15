"use client";

import { useState } from "react";
import Footer from "@/components/ui/landing/Footer";

const componentsData = [
  // Hero Components
  {
    id: "hero-simple",
    name: "Hero Simple",
    description: "Clean and minimal hero section with centered content",
    category: "Heroes",
    path: "/components/ui/heroes/HeroSimple",
    tags: ["hero", "landing", "minimal"],
  },
  {
    id: "hero-split",
    name: "Hero Split",
    description: "Split layout hero with content and media side by side",
    category: "Heroes",
    path: "/components/ui/heroes/HeroSplit",
    tags: ["hero", "landing", "split"],
  },
  {
    id: "hero-with-image",
    name: "Hero With Image",
    description: "Hero section with prominent image or media display",
    category: "Heroes",
    path: "/components/ui/heroes/HeroWithImage",
    tags: ["hero", "landing", "image"],
  },
  // Landing Components
  {
    id: "navbar",
    name: "Navbar",
    description: "Traditional navigation bar with links and CTA",
    category: "Landing",
    path: "/components/ui/landing/Navbar",
    tags: ["navigation", "header", "menu"],
  },
  {
    id: "features-section",
    name: "Features Section",
    description: "Showcase your product features in a grid layout",
    category: "Landing",
    path: "/components/ui/landing/FeaturesSection",
    tags: ["features", "grid", "landing"],
  },
  {
    id: "benefits-section",
    name: "Benefits Section",
    description: "Highlight the benefits of your product or service",
    category: "Landing",
    path: "/components/ui/landing/BenefitsSection",
    tags: ["benefits", "landing", "showcase"],
  },
  {
    id: "component-showcase",
    name: "Component Showcase",
    description: "Display components in a beautiful grid layout",
    category: "Landing",
    path: "/components/ui/landing/ComponentShowcase",
    tags: ["showcase", "grid", "components"],
  },
  {
    id: "cta-section",
    name: "CTA Section",
    description: "Call-to-action section to drive conversions",
    category: "Landing",
    path: "/components/ui/landing/CTASection",
    tags: ["cta", "conversion", "landing"],
  },
  {
    id: "footer",
    name: "Footer",
    description: "Comprehensive footer with links and information",
    category: "Landing",
    path: "/components/ui/landing/Footer",
    tags: ["footer", "links", "landing"],
  },
];

const categories = ["All", "Heroes", "Landing"];

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentsData.filter((component) => {
    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleComponentClick = async (component) => {
    // Copy component path to clipboard
    try {
      await navigator.clipboard.writeText(component.path);
      // You can add a toast notification here later
      alert(`Component path copied to clipboard!\n\n${component.name}\n${component.path}`);
    } catch (err) {
      // Fallback if clipboard API fails
      alert(`Selected: ${component.name}\nPath: ${component.path}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Component Library
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse and select components for your project. Click on any component
            to view details or add it to your project.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredComponents.length} component
            {filteredComponents.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Components Grid */}
        {filteredComponents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredComponents.map((component) => (
              <div
                key={component.id}
                onClick={() => handleComponentClick(component)}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">
                        {component.name}
                      </h3>
                      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        {component.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {component.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-medium text-black group-hover:text-gray-700 transition-colors">
                    View Component
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No components found matching your criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

