import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Code,
  Blocks,
  Workflow,
  Shield,
  Rocket,
  Wrench,
  Check,
  Zap,
  Database,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify App Development | Custom Apps | Flex Commerce",
  description:
    "Custom Shopify app development to extend your store's functionality. Private apps, public apps, and integrations built by certified experts.",
  alternates: {
    canonical: "/shopify-app-development",
  },
  openGraph: {
    title: "Shopify App Development | Custom Apps | Flex Commerce",
    description:
      "Custom Shopify app development to extend your store's functionality. Private apps, public apps, and integrations built by certified experts.",
    url: "/shopify-app-development",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const features = [
  {
    icon: Blocks,
    title: "Private Apps",
    description: "Custom apps built exclusively for your store's unique requirements.",
    color: "#ef436b",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your operations.",
    color: "#8b5cf6",
  },
  {
    icon: Database,
    title: "Data Sync",
    description: "Keep your systems in sync with real-time data synchronisation.",
    color: "#0ea5e9",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with infrastructure that scales.",
    color: "#10b981",
  },
  {
    icon: Rocket,
    title: "API Development",
    description: "Custom APIs to connect Shopify with any external system.",
    color: "#f59e0b",
  },
  {
    icon: Wrench,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your apps running smoothly.",
    color: "#64748b",
  },
];

const useCases = [
  {
    title: "Inventory Management",
    description: "Sync inventory across multiple warehouses, suppliers, and sales channels in real-time.",
  },
  {
    title: "Custom Pricing Logic",
    description: "Implement complex pricing rules, volume discounts, or customer-specific pricing.",
  },
  {
    title: "Order Routing",
    description: "Automatically route orders to the right fulfilment centre based on custom rules.",
  },
  {
    title: "Product Configurators",
    description: "Let customers customise products with real-time previews and pricing.",
  },
  {
    title: "Subscription Management",
    description: "Build custom subscription experiences beyond what standard apps offer.",
  },
  {
    title: "Reporting Dashboards",
    description: "Custom analytics and reporting tailored to your business metrics.",
  },
];

const process = [
  {
    step: "01",
    title: "Requirements",
    description: "We document your exact needs, workflows, and technical requirements.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "We design a scalable, secure solution that integrates seamlessly.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular demos and feedback loops.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing, documentation, and a smooth deployment.",
  },
];

const appSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify App Development",
  description: "Custom Shopify app development to extend your store's functionality. Private apps, public apps, and integrations built by certified experts.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Software Development",
  areaServed: "United Kingdom",
};

export default function AppDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <PageHero
        badge={{ icon: Code, text: "App Development" }}
        title="Custom Shopify App Development"
        description="Extend your store's functionality with custom apps built for your unique business needs. From private apps to complex integrations."
        primaryCta={{ text: "Discuss Your Project", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "purple", bottomLeft: "purple" }}
      />

      {/* Features */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            App Development Capabilities
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We build apps that solve real business problems and scale with your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: feature.color,
                    backgroundColor: `${feature.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Common Use Cases
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Custom apps can solve challenges that off-the-shelf solutions can&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                {useCase.title}
              </h3>
              <p className="text-foreground text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A structured approach that delivers reliable, maintainable apps.
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

      {/* Why Custom */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Build a Custom App?
            </h2>
            <p className="text-lg text-foreground mb-8">
              When off-the-shelf apps don&apos;t fit your needs, a custom solution gives you exactly what you need without compromise.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">No monthly app subscription fees</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Built exactly to your specifications</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Full ownership of the code</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">No dependency on third-party vendors</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Scales with your business growth</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#8b5cf6]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Faster Performance</h3>
                  <p className="text-sm text-foreground">Custom apps are optimised for your specific use case, without bloat.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Enhanced Security</h3>
                  <p className="text-sm text-foreground">Your data stays within your control, not shared with app providers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Perfect Integration</h3>
                  <p className="text-sm text-foreground">Seamlessly connects with your existing systems and workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="The custom inventory sync app Flex Commerce built has saved us countless hours of manual work. It connects our warehouse system to Shopify flawlessly and has eliminated overselling completely."
        author="David Chen"
        role="Operations Director, UK Electronics Retailer"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a complex problem to solve?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how a custom app can streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Discuss Your Project
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
