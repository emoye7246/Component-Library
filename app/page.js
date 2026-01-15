import HeroWithImage from "@/components/ui/heroes/HeroWithImage";
import {
  FeaturesSection,
  ComponentShowcase,
  BenefitsSection,
  CTASection,
  Footer,
} from "@/components/ui/landing";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroWithImage
        badge="New — Public Beta"
        title="Ready-to-go components"
        highlight="for your next project"
        subtitle="Production-ready components you can copy, paste, and customize in minutes. Build faster without starting from scratch."
        primaryCta={{ label: "Browse Components", href: "/components" }}
        secondaryCta={{ label: "View Documentation", href: "#" }}
        media={{
          type: "image",
          src: "/Untitled design.png",
          alt: "Component library preview",
        }}
        trustLine="Free to use • Copy-paste friendly • No credit card required"
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
