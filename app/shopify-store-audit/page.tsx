import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  ClipboardCheck,
  Search,
  Gauge,
  ShoppingCart,
  Smartphone,
  Shield,
  Check,
  FileText,
  Target,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Store Audit | Ecommerce Analysis | Flex Commerce",
  description:
    "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations to grow your store.",
  alternates: {
    canonical: "/shopify-store-audit",
  },
  openGraph: {
    title: "Shopify Store Audit | Ecommerce Analysis | Flex Commerce",
    description:
      "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations to grow your store.",
    url: "/shopify-store-audit",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const auditAreas = [
  {
    icon: ShoppingCart,
    title: "Conversion Analysis",
    description: "User journey, checkout flow, and conversion barriers.",
    color: "#ef436b",
  },
  {
    icon: Search,
    title: "SEO Review",
    description: "Technical SEO, on-page optimisation, and content gaps.",
    color: "#8b5cf6",
  },
  {
    icon: Gauge,
    title: "Performance Audit",
    description: "Page speed, Core Web Vitals, and loading bottlenecks.",
    color: "#0ea5e9",
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Mobile usability, responsive design, and touch interactions.",
    color: "#10b981",
  },
  {
    icon: Shield,
    title: "Security Check",
    description: "SSL, app permissions, and security best practices.",
    color: "#f59e0b",
  },
  {
    icon: FileText,
    title: "Content Review",
    description: "Product descriptions, imagery, and brand messaging.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-indigo-corner.svg",
  circle: "/images/circles/circle-indigo.svg",
  cardBg: "#eef2ff",
};


const deliverables = [
  "Comprehensive written report",
  "Prioritised recommendations",
  "Quick wins vs long-term fixes",
  "Competitor benchmarking",
  "Video walkthrough",
  "Implementation roadmap",
  "ROI projections",
  "30-minute consultation call",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business goals and key challenges.",
  },
  {
    step: "02",
    title: "Analysis",
    description: "We conduct a thorough review across all audit areas.",
  },
  {
    step: "03",
    title: "Report",
    description: "We deliver a detailed report with actionable recommendations.",
  },
  {
    step: "04",
    title: "Review",
    description: "We walk you through findings and answer questions.",
  },
];

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Store Audit",
  description: "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations to grow your store.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Ecommerce Audit",
  areaServed: "United Kingdom",
};

export default function StoreAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />

      <PageHero
        badge={{ icon: ClipboardCheck, text: "Store Audit" }}
        title="Shopify Store Audit"
        description="Get a comprehensive analysis of your Shopify store with actionable recommendations to improve performance, conversions, and growth."
        primaryCta={{ text: "Get Store Audit", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "indigo", bottomLeft: "indigo" }}
      />

      {/* Audit Areas */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What We Audit"
            subheading="A 360-degree review of your store covering every aspect that impacts success."
            items={auditAreas}
            theme={capabilityTheme}
          />
      </Section>

      {/* Deliverables */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              What You&apos;ll Receive
            </h2>
            <p className="text-lg text-foreground mb-8">
              Our audit delivers actionable insights, not just a list of problems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground-dark mb-6">
              Why Get an Audit?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ef436b]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#ef436b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Identify Opportunities</p>
                  <p className="text-sm text-foreground">Discover quick wins and high-impact improvements you&apos;re missing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Expert Perspective</p>
                  <p className="text-sm text-foreground">Fresh eyes from specialists who&apos;ve reviewed hundreds of stores.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Clear Roadmap</p>
                  <p className="text-sm text-foreground">Prioritised recommendations so you know exactly what to tackle first.</p>
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
            Our Audit Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A thorough, methodical approach that uncovers every opportunity.
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
        quote="The store audit was eye-opening. Flex Commerce identified issues we'd overlooked for years and gave us a clear roadmap to fix them. We implemented their top 5 recommendations and saw a 35% increase in conversions."
        author="Sophie Turner"
        role="Ecommerce Manager, UK Jewellery Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to uncover your store&apos;s potential?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a comprehensive audit with actionable recommendations to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Store Audit
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
