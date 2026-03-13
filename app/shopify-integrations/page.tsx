import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Layers,
  Database,
  Truck,
  CreditCard,
  Mail,
  BarChart3,
  Check,
  ArrowLeftRight,
  Zap,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Integrations | ERP, CRM & API | Flex Commerce",
  description:
    "Connect Shopify to your business systems. ERP, CRM, PIM, accounting, shipping and custom API integrations by certified Shopify experts.",
  alternates: {
    canonical: "/shopify-integrations",
  },
  openGraph: {
    title: "Shopify Integrations | ERP, CRM & API | Flex Commerce",
    description:
      "Connect Shopify to your business systems. ERP, CRM, PIM, accounting, shipping and custom API integrations by certified Shopify experts.",
    url: "/shopify-integrations",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const integrationTypes = [
  {
    icon: Database,
    title: "ERP Systems",
    description: "SAP, NetSuite, Microsoft Dynamics, Sage and more.",
    color: "#ef436b",
  },
  {
    icon: BarChart3,
    title: "CRM Platforms",
    description: "Salesforce, HubSpot, Klaviyo, and customer data platforms.",
    color: "#8b5cf6",
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "DPD, Royal Mail, DHL, and 3PL warehouse systems.",
    color: "#0ea5e9",
  },
  {
    icon: CreditCard,
    title: "Accounting",
    description: "Xero, QuickBooks, Sage, and financial systems.",
    color: "#10b981",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description: "Email platforms, SMS, loyalty programs, and more.",
    color: "#f59e0b",
  },
  {
    icon: Layers,
    title: "PIM Systems",
    description: "Akeneo, Salsify, and product information management.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-orange-corner.svg",
  circle: "/images/circles/circle-orange.svg",
  cardBg: "#fff9f0",
};


const benefits = [
  "Eliminate manual data entry",
  "Real-time inventory sync",
  "Automated order processing",
  "Unified customer data",
  "Accurate financial reporting",
  "Faster fulfilment times",
  "Reduced human error",
  "Scalable operations",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We map your current systems and identify integration requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "We architect a robust integration strategy with clear data flows.",
  },
  {
    step: "03",
    title: "Build",
    description: "We develop and test the integration with your live systems.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "We provide ongoing monitoring and support to ensure reliability.",
  },
];

const integrationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Integrations",
  description: "Connect Shopify to your business systems. ERP, CRM, PIM, accounting, shipping and custom API integrations by certified Shopify experts.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "System Integration",
  areaServed: "United Kingdom",
};

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationSchema) }}
      />

      <PageHero
        badge={{ icon: Layers, text: "Integrations" }}
        title="Shopify Integrations"
        description="Connect Shopify to your ERP, CRM, PIM, and other business systems. Seamless data flow, automated workflows, unified operations."
        primaryCta={{ text: "Discuss Integration", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "orange", bottomLeft: "orange" }}
      />

      {/* Integration Types */}
      <Section background="alt">
          <ServiceCapabilities
            heading="Systems We Integrate"
            subheading="We connect Shopify to virtually any system with an API."
            items={integrationTypes}
            theme={capabilityTheme}
          />
      </Section>

      {/* Benefits */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Benefits of Integration
            </h2>
            <p className="text-lg text-foreground mb-8">
              Connected systems mean smoother operations, happier customers, and faster growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ef436b]/10 flex items-center justify-center flex-shrink-0">
                  <ArrowLeftRight className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Bi-Directional Sync</h3>
                  <p className="text-sm text-foreground">Data flows both ways, keeping all systems in perfect sync.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Real-Time Updates</h3>
                  <p className="text-sm text-foreground">Changes sync instantly, not on a schedule.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Error Handling</h3>
                  <p className="text-sm text-foreground">Robust error handling and retry logic for reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Integration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A methodical approach that ensures reliable, maintainable integrations.
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

      <TestimonialCard
        quote="The Shopify to NetSuite integration Flex Commerce built has been rock solid. Orders flow through automatically, inventory is always accurate, and we've saved 20+ hours per week in manual data entry."
        author="Rachel Thompson"
        role="Finance Director, UK Homeware Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to connect your systems?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your integration requirements and build a connected ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Discuss Integration
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      <RelatedServices />
    </>
  );
}
