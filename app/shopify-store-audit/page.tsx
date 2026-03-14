import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQSection } from "@/components/ui/FAQSection";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
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
    "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations from certified UK Shopify experts.",
  alternates: {
    canonical: "/shopify-store-audit",
  },
  openGraph: {
    title: "Shopify Store Audit | Ecommerce Analysis | Flex Commerce",
    description:
      "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations from UK Shopify experts.",
    url: "/shopify-store-audit",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Store Audit - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Store Audit | Ecommerce Analysis | Flex Commerce",
    description:
      "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations from UK Shopify experts.",
    images: ["/images/og-image.png"],
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
  description: "Comprehensive Shopify store audit covering UX, performance, SEO, and conversion optimisation. Get actionable recommendations from UK Shopify experts.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Ecommerce Audit",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-store-audit`,
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
      name: "Shopify Store Audit",
      item: `${siteConfig.url}/shopify-store-audit`,
    },
  ],
};

const faqs = [
  {
    q: "What does a Shopify store audit cover?",
    a: "Our comprehensive audit covers six key areas: conversion rate analysis (user journey, checkout flow, product pages), SEO review (technical issues, on-page optimisation, content gaps), performance (Core Web Vitals, page speed, load bottlenecks), mobile experience (responsive design, touch interactions), security (SSL, app permissions), and content (product descriptions, imagery, messaging). You receive a detailed written report with prioritised recommendations.",
  },
  {
    q: "How long does a store audit take?",
    a: "We typically complete the analysis phase within 5–7 working days and deliver the written report within 10 working days of kickoff. Timelines can vary slightly depending on the size and complexity of your store. The process includes a discovery call at the start and a review call once the report is delivered.",
  },
  {
    q: "Do you audit Shopify Plus stores as well as standard Shopify?",
    a: "Yes. We audit both standard Shopify and Shopify Plus stores. For Plus stores, we also review enterprise-specific features such as checkout customisation, Scripts, Flow automations, and multi-store configurations to ensure they're being used effectively.",
  },
  {
    q: "What happens after the audit, do you implement the recommendations?",
    a: "That's entirely up to you. Some clients use the audit report as a DIY roadmap for their in-house team. Others ask us to implement the improvements as a follow-on project. We're happy to work either way. Our recommendations are always practical and clearly written so they can be acted on by any competent developer.",
  },
  {
    q: "How is your store audit different from a free Shopify review tool?",
    a: "Automated tools only check technical signals, they can't evaluate your user experience, content quality, brand messaging, or the nuanced conversion barriers in your checkout flow. Our audit combines automated analysis with hands-on expert review from specialists who have audited hundreds of ecommerce stores. The result is actionable insight, not just a list of technical scores.",
  },
  {
    q: "Can I get a store audit if I'm considering migrating to Shopify?",
    a: "Yes, a pre-migration audit is a great starting point. We can assess your current platform's strengths and weaknesses, helping us design a Shopify migration that addresses your existing issues and gives your new store the best possible foundation. We can then run a post-migration audit to confirm everything has been implemented correctly.",
  },
];

export default function StoreAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

        <ProcessSteps steps={process} />
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

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify Audit Specialists in Manchester & Liverpool
          </h2>
          <p className="text-lg text-foreground">
            Our specialists are based in{" "}
            <Link
              href="/shopify-agency-manchester"
              className="text-[#ef436b] hover:underline"
            >
              Manchester
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-agency-liverpool"
              className="text-[#ef436b] hover:underline"
            >
              Liverpool
            </Link>{" "}
            and work with brands across the UK. After your audit, many clients
            combine our findings with our{" "}
            <Link
              href="/shopify-seo"
              className="text-[#ef436b] hover:underline"
            >
              SEO
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-speed-optimisation"
              className="text-[#ef436b] hover:underline"
            >
              speed optimisation
            </Link>{" "}
            services for maximum impact.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-4050315.webp"
        imageAlt="Shopify store audit and ecommerce performance review"
        overlayColor="linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)"
      />

      <RelatedServices />
    </>
  );
}
