export default function HeroSimple({
    badge,
    title,
    highlight,
    subtitle,
    primaryCta,
    secondaryCta,
  }) {
    return (
      <section className="relative w-full bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-left">
          
          {badge && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {badge}
            </span>
          )}
  
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
            {highlight && (
              <span className="block text-gray-600 mt-2">
                {highlight}
              </span>
            )}
          </h1>
  
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
  
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                {primaryCta.label}
              </a>
            )}
  
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
  
        </div>
      </section>
    );
  }
  