import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { siteConfig } from "@/lib/constants";
import {
  ArrowRightLeft,
  Check,
  X,
  Database,
  Search,
  Link2,
  Users,
  ShieldCheck,
  Clock,
  Zap,
  Palette,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Webflow to Shopify Migration | Expert Migration Services | Flex Commerce",
  description:
    "Keep your beautiful design, gain ecommerce power. We migrate Webflow stores to Shopify with zero downtime. Products, customers & SEO preserved.",
  alternates: {
    canonical: "/webflow-to-shopify-migration",
  },
  openGraph: {
    title: "Webflow to Shopify Migration | Expert Migration Services",
    description:
      "Keep your beautiful design, gain ecommerce power. We migrate Webflow stores to Shopify with zero downtime.",
    url: "/webflow-to-shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const whySwitch = [
  { shopify: "Purpose-built for ecommerce", webflow: "Design tool with commerce add-on" },
  { shopify: "Advanced inventory management", webflow: "Basic inventory features" },
  { shopify: "8,000+ ecommerce apps", webflow: "Limited native integrations" },
  { shopify: "Shop Pay accelerated checkout", webflow: "Standard Stripe checkout" },
  { shopify: "Multi-channel selling", webflow: "Website-only sales" },
  { shopify: "24/7 ecommerce support", webflow: "Design-focused support" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Products & Variants",
    description: "All Webflow products, variants, and product images.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts and order history.",
    color: "#8b5cf6",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "Meta data, URLs, and search rankings preserved.",
    color: "#0ea5e9",
  },
  {
    icon: Link2,
    title: "URL Redirects",
    description: "301 redirects from Webflow to Shopify URLs.",
    color: "#10b981",
  },
  {
    icon: Palette,
    title: "Design Elements",
    description: "Your design aesthetic recreated in Shopify.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "CMS Content",
    description: "Blog posts, pages, and CMS collections.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "Webflow Audit",
    description: "We review your Webflow site, design, and ecommerce setup.",
  },
  {
    step: "02",
    title: "Shopify Build",
    description: "We recreate your design in a high-performance Shopify theme.",
  },
  {
    step: "03",
    title: "Data Migration",
    description: "Products, customers, and content migrated carefully.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Domain transfer, redirects, and post-launch support.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Webflow to Shopify Migration",
      description: "Expert Webflow to Shopify migration services. Keep your beautiful design while gaining powerful ecommerce features.",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      serviceType: "Platform Migration",
      areaServed: "United Kingdom",
    },
    {
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
          name: "Shopify Migration",
          item: `${siteConfig.url}/shopify-migration`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Webflow to Shopify",
          item: `${siteConfig.url}/webflow-to-shopify-migration`,
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "Webflow to Shopify Migration: Step-by-Step Process",
      description: "How to migrate your Webflow store to Shopify with zero downtime.",
      step: process.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.description,
      })),
    },
  ],
};

export default function WebflowToShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "Webflow Migration" }}
        title="Webflow to Shopify Migration"
        description="Love your Webflow design but need more ecommerce power? We'll migrate you to Shopify while preserving what makes your brand unique."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "pink", bottomLeft: "green" }}
      />

      {/* Platform Logos */}
      <Section background="alt">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/webflow.svg"
                alt="Webflow"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">Webflow</span>
          </div>
          <div className="flex items-center">
            <ArrowRightLeft className="w-8 h-8 text-[#ef436b]" />
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/shopify.svg"
                alt="Shopify"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">Shopify</span>
          </div>
        </div>
      </Section>

      {/* Why Switch */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Switch from Webflow to Shopify?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Webflow excels at design, but Shopify is built for selling at scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <div className="text-center font-semibold text-[#ef436b]">Shopify</div>
            <div></div>
            <div className="text-center font-semibold text-foreground">Webflow</div>
          </div>
          <div className="space-y-3">
            {whySwitch.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="bg-[#ef436b]/5 border border-[#ef436b]/20 rounded-lg p-4 flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0" />
                  <span className="text-sm text-foreground-dark">{item.shopify}</span>
                </div>
                <div className="text-foreground">vs</div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.webflow}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What We Migrate */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            What We Migrate
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Your Webflow content and design essence move to Shopify seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeMigrate.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: item.color,
                    backgroundColor: `${item.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Webflow Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We preserve your design DNA while upgrading your ecommerce capabilities.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* Guarantees */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Design Meets Commerce
            </h2>
            <p className="text-lg text-foreground mb-8">
              We understand why you chose Webflow - the design freedom is incredible. We&apos;ll ensure your Shopify store looks just as good.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Custom Shopify theme matching your Webflow design</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Animations and interactions recreated</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">CMS collections mapped to Shopify metafields</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Keep Webflow for marketing, Shopify for commerce (hybrid option)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">30 days post-launch support</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#10b981]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Design Preserved</h3>
                  <p className="text-sm text-foreground">Your unique visual identity carries over to Shopify.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Commerce Upgraded</h3>
                  <p className="text-sm text-foreground">Access Shopify&apos;s full suite of selling tools.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Hybrid Options</h3>
                  <p className="text-sm text-foreground">Keep Webflow for content, use Shopify for sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Our Webflow site looked amazing but we were losing sales to a clunky checkout. Flex Commerce migrated us to Shopify and recreated our design perfectly. Conversion rate jumped 45% in the first month."
        author="David Park"
        role="Creative Director, UK Design Studio"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to upgrade from Webflow?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and see how Shopify can boost your sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Migration Quote
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
