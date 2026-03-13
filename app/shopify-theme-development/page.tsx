import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Palette,
  Smartphone,
  Gauge,
  Eye,
  ShoppingCart,
  Settings,
  Check,
  Paintbrush,
  Code,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Theme Development | Custom Themes | Flex Commerce",
  description:
    "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts.",
  alternates: {
    canonical: "/shopify-theme-development",
  },
  openGraph: {
    title: "Shopify Theme Development | Custom Themes | Flex Commerce",
    description:
      "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts.",
    url: "/shopify-theme-development",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const features = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Unique designs tailored to your brand, not cookie-cutter templates.",
    color: "#ef436b",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Responsive designs that look perfect on every device and screen size.",
    color: "#8b5cf6",
  },
  {
    icon: Gauge,
    title: "Speed Optimised",
    description: "Lightning-fast themes that score high on Core Web Vitals.",
    color: "#0ea5e9",
  },
  {
    icon: Eye,
    title: "Accessibility",
    description: "WCAG compliant themes that work for all users.",
    color: "#10b981",
  },
  {
    icon: ShoppingCart,
    title: "Conversion Focused",
    description: "Strategic layouts designed to turn visitors into customers.",
    color: "#f59e0b",
  },
  {
    icon: Settings,
    title: "Easy to Manage",
    description: "Intuitive theme settings so you can update content without code.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-pink-corner.svg",
  circle: "/images/circles/circle-pink.svg",
  cardBg: "#fff5f7",
};


const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your brand, audience, and goals to inform the design direction.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create custom mockups for key pages, refining until perfect.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your theme with clean code, optimised for speed and SEO.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Thorough testing, training, and a smooth launch with ongoing support.",
  },
];

const includes = [
  "Custom homepage design",
  "Collection & product templates",
  "Mobile-responsive layouts",
  "Speed optimisation",
  "SEO best practices",
  "Theme documentation",
  "Content migration support",
  "30-day post-launch support",
];

const themeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Theme Development",
  description: "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Web Development",
  areaServed: "United Kingdom",
};

export default function ThemeDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(themeSchema) }}
      />

      <PageHero
        badge={{ icon: Palette, text: "Theme Development" }}
        title="Custom Shopify Theme Development"
        description="Bespoke Shopify themes designed and built to convert. Pixel-perfect, high-performance, and tailored to your brand."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "pink", bottomLeft: "pink" }}
      />

      {/* Features */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What Makes Our Themes Different"
            subheading="We don&apos;t just build themes, we craft conversion machines."
            items={features}
            theme={capabilityTheme}
          />
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Theme Development Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven approach that delivers beautiful, high-performing themes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((phase, index) => (
            <div key={phase.step} className="relative">
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-700" />
              )}
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b] text-white text-2xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              What&apos;s Included
            </h2>
            <p className="text-lg text-foreground mb-8">
              Every custom theme project includes everything you need for a successful launch and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground-dark mb-4">
              Why Custom Over Templates?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Stand out from competitors</p>
                  <p className="text-sm text-foreground">No more looking like every other Shopify store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Clean, maintainable code</p>
                  <p className="text-sm text-foreground">No bloated template code slowing you down.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Gauge className="w-5 h-5 text-[#0ea5e9] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground-dark">Built for performance</p>
                  <p className="text-sm text-foreground">Faster load times mean higher conversions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="The custom theme Flex Commerce built for us has transformed our online presence. Page speed improved by 60% and our conversion rate doubled within three months of launch."
        author="Emma Richardson"
        role="Founder, London Beauty Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for a theme that converts?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button href="/work" variant="outline-light" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </Section>

      <RelatedServices exclude="Theme Development" />
    </>
  );
}
