import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Search,
  FileText,
  Link2,
  BarChart3,
  Globe,
  Zap,
  Check,
  TrendingUp,
  Target,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify SEO Services | Ecommerce SEO | Flex Commerce",
  description:
    "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for ecommerce stores.",
  alternates: {
    canonical: "/shopify-seo",
  },
  openGraph: {
    title: "Shopify SEO Services | Ecommerce SEO | Flex Commerce",
    description:
      "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for ecommerce stores.",
    url: "/shopify-seo",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Technical SEO",
    description: "Site structure, schema markup, crawlability, and Core Web Vitals.",
    color: "#ef436b",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Keyword research, content planning, and optimised product descriptions.",
    color: "#8b5cf6",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Quality backlink acquisition to boost domain authority.",
    color: "#0ea5e9",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Monthly reports tracking rankings, traffic, and conversions.",
    color: "#10b981",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Google Business Profile and local search optimisation.",
    color: "#f59e0b",
  },
  {
    icon: Zap,
    title: "Page Speed",
    description: "Performance optimisation for better rankings and UX.",
    color: "#64748b",
  },
];

const includes = [
  "Comprehensive SEO audit",
  "Keyword research & mapping",
  "On-page optimisation",
  "Technical SEO fixes",
  "Schema markup implementation",
  "Content recommendations",
  "Monthly performance reports",
  "Competitor analysis",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We analyse your current SEO performance and identify opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a prioritised roadmap based on impact and effort.",
  },
  {
    step: "03",
    title: "Implement",
    description: "We execute technical fixes and content optimisations.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "We track progress and continuously refine the strategy.",
  },
];

const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify SEO Services",
  description: "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for ecommerce stores.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Search Engine Optimisation",
  areaServed: "United Kingdom",
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      <PageHero
        badge={{ icon: Search, text: "Shopify SEO" }}
        title="Shopify SEO Services"
        description="Drive organic traffic and sales with SEO strategies built specifically for Shopify stores. Technical excellence meets content strategy."
        primaryCta={{ text: "Get SEO Audit", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "green", bottomLeft: "green" }}
      />

      {/* Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our SEO Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Comprehensive SEO services tailored for Shopify and ecommerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
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
              Our SEO packages include everything you need to improve your organic visibility.
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
            <h3 className="text-xl font-semibold text-foreground-dark mb-6">
              Why SEO for Shopify?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ef436b]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#ef436b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Sustainable Growth</p>
                  <p className="text-sm text-foreground">Organic traffic compounds over time, reducing ad dependency.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">High-Intent Traffic</p>
                  <p className="text-sm text-foreground">People searching for your products are ready to buy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Brand Visibility</p>
                  <p className="text-sm text-foreground">Ranking well builds trust and brand recognition.</p>
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
            Our SEO Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A data-driven approach that delivers measurable results.
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
        quote="Flex Commerce's SEO work has been transformational. We've gone from page 3 to position 1 for our main keywords, and organic traffic now accounts for 60% of our revenue."
        author="Jennifer Walsh"
        role="Marketing Director, UK Skincare Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to grow your organic traffic?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and see where the opportunities are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Free SEO Audit
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
