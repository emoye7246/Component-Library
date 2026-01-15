import {
    ClipboardCopy,
    Palette,
    ShieldCheck,
    Sparkles,
  } from "lucide-react";
  
  export default function FeaturesSection({ features = [] }) {
    const defaultFeatures = [
      {
        title: "Copy & Paste",
        description:
          "All components are ready to use. Copy the code and drop it into your project.",
        icon: ClipboardCopy,
      },
      {
        title: "Fully Customizable",
        description:
          "Built with Tailwind. Customize colors, spacing, and type to match your brand.",
        icon: Palette,
      },
      {
        title: "Production Ready",
        description:
          "Designed for real-world use: responsive layouts, clean structure, and sensible defaults.",
        icon: ShieldCheck,
      },
      {
        title: "Regular Updates",
        description:
          "New sections added regularly so your pages stay fresh and modern.",
        icon: Sparkles,
      },
    ];
  
    const items = features.length > 0 ? features : defaultFeatures;
  
    return (
      <section className="relative w-full overflow-hidden bg-white px-6 py-20 sm:py-24">
        {/* subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-2xl -translate-x-1/2 rounded-full bg-linear-to-r from-gray-100 via-white to-gray-100 blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />
        </div>
  
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Built for real products <span className="text-gray-300">•</span>{" "}
              Tailwind-ready
            </p>
  
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to ship faster
            </h2>
  
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Polished, production-ready UI sections designed to save hours — and
              still feel unique.
            </p>
          </div>
  
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((feature, index) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-10 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* top accent */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-2xl bg-gradient-to-b from-gray-50 to-transparent opacity-80" />
  
                  {/* ICON ABOVE DETAILS (your request) */}
                  <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-center">
                    {Icon ? (
                      <Icon className="h-8 w-8 text-gray-900 text-center" aria-hidden="true" />
                    ) : null}
                  </div>
  
                  <div className="relative">
                    <h3 className="text-base font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
  
                  {/* hover polish */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-200" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  