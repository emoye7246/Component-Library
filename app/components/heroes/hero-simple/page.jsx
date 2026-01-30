import HeroSimple from "@/components/ui/heroes/HeroSimple";
import ComponentDetailShell from "@/components/demo/ComponentDetailShell";

const usageCode = `import HeroSimple from "@/components/ui/heroes/HeroSimple";

export default function Page() {
  return (
    <HeroSimple
      badge="New — Public Beta"
      title="Build something great"
      highlight="Start with a simple hero that gets the message across."
      subtitle="Clean, minimal, and ready to customize."
      primaryCta={{ label: "Get Started", href: "#" }}
      secondaryCta={{ label: "Learn More", href: "#" }}
    />
  );
}
`;

export default function HeroSimplePreviewPage() {
  return (
    <ComponentDetailShell
      title="Hero Simple"
      description="Clean, minimal hero for SaaS landing pages. Great default starting point."
      backHref="/components/heroes"
      usageCode={usageCode}
      topics={["Hero", "Landing", "Minimal"]}
      preview={
        <HeroSimple
          badge="New — Public Beta"
          title="Build something great"
          highlight="Start with a simple hero that gets the message across."
          subtitle="This is the Hero Simple component. Clean, minimal, and ready to customize. Use it as the first thing visitors see on your landing page."
          primaryCta={{ label: "Get Started", href: "#" }}
          secondaryCta={{ label: "Learn More", href: "#" }}
        />
      }
    />
  );
}
