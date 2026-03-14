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
  Settings,
  Shield,
  RefreshCw,
  Eye,
  AlertTriangle,
  FileText,
  Check,
  Clock,
  Database,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Maintenance | Store Health | Flex Commerce",
  description:
    "Proactive Shopify maintenance for UK brands. Security updates, backups, uptime monitoring, and performance care to keep your Shopify store running perfectly.",
  alternates: {
    canonical: "/shopify-maintenance",
  },
  openGraph: {
    title: "Shopify Maintenance | Store Health | Flex Commerce",
    description:
      "Proactive Shopify maintenance for UK brands. Security updates, backups, uptime monitoring, and performance care to keep your store running perfectly.",
    url: "/shopify-maintenance",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Maintenance Services - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Maintenance | Store Health | Flex Commerce",
    description:
      "Proactive Shopify maintenance for UK brands. Security updates, backups, uptime monitoring, and performance care to keep your store running perfectly.",
    images: ["/images/og-image.png"],
  },
};

const services = [
  {
    icon: Shield,
    title: "Security Updates",
    description: "Regular security patches and vulnerability monitoring.",
    color: "#ef436b",
  },
  {
    icon: RefreshCw,
    title: "App Updates",
    description: "Keep apps updated and compatible with latest Shopify changes.",
    color: "#8b5cf6",
  },
  {
    icon: Eye,
    title: "Uptime Monitoring",
    description: "24/7 monitoring with instant alerts if issues arise.",
    color: "#0ea5e9",
  },
  {
    icon: Database,
    title: "Backups",
    description: "Regular backups of your theme, content, and configurations.",
    color: "#10b981",
  },
  {
    icon: AlertTriangle,
    title: "Error Monitoring",
    description: "Catch and fix errors before they impact customers.",
    color: "#f59e0b",
  },
  {
    icon: FileText,
    title: "Health Reports",
    description: "Monthly reports on your store's health and performance.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-teal-corner.svg",
  circle: "/images/circles/circle-teal.svg",
  cardBg: "#f0fdfa",
};


const checklist = [
  "Theme code review and cleanup",
  "App audit and optimisation",
  "Broken link checking",
  "Image optimisation",
  "Database cleanup",
  "Speed performance check",
  "SEO health check",
  "Security vulnerability scan",
  "Mobile responsiveness test",
  "Checkout flow testing",
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We assess your current store health and identify maintenance needs.",
  },
  {
    step: "02",
    title: "Schedule",
    description: "We create a maintenance schedule tailored to your store.",
  },
  {
    step: "03",
    title: "Maintain",
    description: "We perform regular maintenance tasks on schedule.",
  },
  {
    step: "04",
    title: "Report",
    description: "We provide monthly reports on work completed and store health.",
  },
];

const maintenanceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Maintenance Services",
  description: "Proactive Shopify maintenance for UK brands. Security updates, backups, uptime monitoring, and performance care to keep your store running perfectly.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Website Maintenance",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-maintenance`,
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
      name: "Shopify Maintenance Services",
      item: `${siteConfig.url}/shopify-maintenance`,
    },
  ],
};

const faqs = [
  {
    q: "What's the difference between Shopify maintenance and Shopify support?",
    a: "Maintenance is proactive and preventive, we run scheduled checks, apply security updates, monitor uptime, manage backups, and keep your apps compatible with Shopify platform changes. Support is reactive and project-based, you submit requests and we use allocated hours to build features, fix bugs, or provide guidance. The two services are complementary and can be combined.",
  },
  {
    q: "Does Shopify handle updates automatically, why do I need maintenance?",
    a: "Shopify handles platform-level updates, but your theme code, installed apps, and custom configurations do not update themselves. Apps can break with Shopify API version changes. Theme code can accumulate issues over time. Custom functions need to be kept aligned with Shopify's evolving APIs. Our maintenance service ensures everything stays aligned with the latest platform requirements.",
  },
  {
    q: "How often do you perform maintenance tasks?",
    a: "Core tasks such as uptime monitoring and error alerting run continuously. App compatibility checks and security scans run weekly. Full performance checks, broken link audits, and speed tests run monthly. We produce a health report each month summarising everything completed and flagging anything that needs attention.",
  },
  {
    q: "Do you back up my Shopify store?",
    a: "Yes. Shopify does not provide native store backups for theme code and configuration data, so this is a critical part of our maintenance service. We maintain regular backups of your theme files, metafield configurations, and store settings so we can restore quickly in the event of an issue.",
  },
  {
    q: "What happens if my store goes down, how quickly do you respond?",
    a: "Our uptime monitoring alerts us immediately if your store becomes unavailable. We investigate and respond within 1 hour during business hours (Monday–Friday 9am–5:30pm). For critical production outages outside business hours, Enterprise maintenance clients benefit from on-call escalation.",
  },
  {
    q: "Can I combine maintenance with a support retainer?",
    a: "Yes, and we recommend it. Maintenance keeps your store healthy and prevents issues, while a support retainer provides development capacity for improvements and new features. Many of our clients based in Manchester and Liverpool take both services together as a comprehensive ecommerce partnership.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maintenanceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        badge={{ icon: Settings, text: "Store Maintenance" }}
        title="Shopify Maintenance Services"
        description="Proactive maintenance to keep your Shopify store secure, fast, and running at peak performance. Prevention is better than cure."
        primaryCta={{ text: "Get Maintenance Plan", href: "/quote" }}
        secondaryCta={{ text: "Book a Call", href: "/contact" }}
        showTrustBadge
        shapeColors={{ topRight: "teal", bottomLeft: "teal" }}
      />

      {/* Services */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What We Maintain"
            subheading="Comprehensive maintenance covering every aspect of your store&apos;s health."
            items={services}
            theme={capabilityTheme}
          />
      </Section>

      {/* Checklist */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Monthly Maintenance Checklist
            </h2>
            <p className="text-lg text-foreground mb-8">
              Every month, we run through a comprehensive checklist to ensure your store stays healthy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground-dark mb-6">
              Why Proactive Maintenance?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ef436b]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#ef436b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Prevent Downtime</p>
                  <p className="text-sm text-foreground">Catch issues before they take your store offline.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#10b981]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Stay Secure</p>
                  <p className="text-sm text-foreground">Regular security updates protect customer data.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="font-medium text-foreground-dark">Stay Compatible</p>
                  <p className="text-sm text-foreground">Keep up with Shopify platform changes and updates.</p>
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
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A systematic approach to keeping your store in top shape.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      <TestimonialCard
        quote="Since signing up for Flex Commerce's maintenance plan, we haven't had a single unexpected issue. They catch problems before we even know they exist. It's like having an insurance policy for our store."
        author="James Wilson"
        role="Founder, UK Outdoor Equipment Brand"
      />

      {/* CTA */}
      <Section>
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Keep your store running smoothly
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle the maintenance so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Maintenance Plan
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
            Shopify Maintenance Plans for UK Brands
          </h2>
          <p className="text-lg text-foreground">
            We provide Shopify maintenance to brands across{" "}
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
            , and the wider UK. Combine maintenance with our{" "}
            <Link
              href="/shopify-support"
              className="text-[#ef436b] hover:underline"
            >
              Shopify support retainer
            </Link>{" "}
            for a complete ecommerce care package.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3944405.webp"
        imageAlt="Shopify maintenance and ongoing ecommerce management"
        overlayColor="linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)"
      />

      <RelatedServices />
    </>
  );
}
