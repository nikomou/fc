import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQSection } from "@/components/ui/FAQSection";
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
  title: "Shopify SEO Services | Ecommerce SEO Agency | Flex Commerce",
  description:
    "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for Shopify stores across the UK.",
  alternates: {
    canonical: "/shopify-seo",
  },
  openGraph: {
    title: "Shopify SEO Services | Ecommerce SEO Agency | Flex Commerce",
    description:
      "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for UK ecommerce stores.",
    url: "/shopify-seo",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify SEO Services - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify SEO Services | Ecommerce SEO Agency | Flex Commerce",
    description:
      "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for UK ecommerce stores.",
    images: ["/images/og-image.png"],
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
const capabilityTheme = {
  wave: "/images/wave-green-corner.svg",
  circle: "/images/circles/circle-green.svg",
  cardBg: "#f3fdf6",
};


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
  description: "Shopify SEO services that drive organic traffic and sales. Technical SEO, content strategy, and ongoing optimisation for UK ecommerce stores.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Search Engine Optimisation",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-seo`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Shopify SEO Services",
      item: `${siteConfig.url}/shopify-seo`,
    },
  ],
};

const faqs = [
  {
    q: "What makes Shopify SEO different from regular SEO?",
    a: "Shopify has specific technical SEO considerations that other platforms don't: duplicate URLs caused by collection pagination, canonical URL management for product variants, Shopify's default URL structure, and JSON-LD schema for products and collections. Our team specialises in ecommerce SEO and understands these Shopify-specific challenges inside out.",
  },
  {
    q: "How long does it take to see results from Shopify SEO?",
    a: "SEO is a long-term investment. Most clients see meaningful movement in rankings and organic traffic within 3–6 months of starting work. Quick wins from technical fixes can appear faster, while competitive head terms may take 9–12 months to move significantly. We provide monthly reporting so you can track progress throughout.",
  },
  {
    q: "Do you conduct keyword research as part of the SEO service?",
    a: "Yes. Keyword research is a foundational part of our SEO process. We map keywords to existing pages, identify gaps in your content, and prioritise by search volume, commercial intent, and ranking difficulty. We also conduct competitor keyword analysis to find opportunities you're currently missing.",
  },
  {
    q: "Can you fix Shopify's duplicate content issues?",
    a: "Yes. We resolve common Shopify duplicate content issues including duplicate product URLs via collections, paginated collection pages, and filter-generated URLs. We implement canonical tags correctly and use robots.txt directives where appropriate to guide search engines.",
  },
  {
    q: "Do you also improve page speed as part of SEO?",
    a: "Core Web Vitals are a ranking factor, so page speed work is often part of our SEO projects. We have a dedicated Shopify speed optimisation service for clients who need deeper performance improvements alongside their SEO strategy.",
  },
  {
    q: "Do you offer local SEO for Shopify stores with physical locations?",
    a: "Yes. If your business has physical premises in cities like Manchester or Liverpool, local SEO — including Google Business Profile optimisation, local citation building, and location-specific landing pages — can significantly increase foot traffic and local online visibility.",
  },
];

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <ServiceCapabilities
            heading="Our SEO Services"
            subheading="Comprehensive SEO services tailored for Shopify and ecommerce."
            items={services}
            theme={capabilityTheme}
          />
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

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify SEO Agency in Manchester & Liverpool
          </h2>
          <p className="text-lg text-foreground">
            Flex Commerce provides Shopify SEO services to brands based in{" "}
            <Link
              href="/shopify-agency-manchester"
              className="text-[#ef436b] hover:underline"
            >
              Manchester
            </Link>
            ,{" "}
            <Link
              href="/shopify-agency-liverpool"
              className="text-[#ef436b] hover:underline"
            >
              Liverpool
            </Link>
            , and across the UK. SEO works best alongside a fast, well-built
            store — explore our{" "}
            <Link
              href="/shopify-speed-optimisation"
              className="text-[#ef436b] hover:underline"
            >
              speed optimisation
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-store-audit"
              className="text-[#ef436b] hover:underline"
            >
              store audit
            </Link>{" "}
            services.
          </p>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <RelatedServices exclude="Shopify SEO" />
    </>
  );
}
