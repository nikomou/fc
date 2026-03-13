import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
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
  AlertTriangle,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Magento to Shopify Migration | Expert Migration Services | Flex Commerce",
  description:
    "Expert Magento to Shopify migration services. We transfer your products, customers, orders & SEO rankings with zero downtime. Escape Magento complexity.",
  alternates: {
    canonical: "/magento-to-shopify-migration",
  },
  openGraph: {
    title: "Magento to Shopify Migration | Expert Migration Services",
    description:
      "Expert Magento to Shopify migration services. We transfer your products, customers, orders & SEO rankings with zero downtime.",
    url: "/magento-to-shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const whySwitch = [
  { shopify: "Predictable monthly pricing", magento: "High hosting & development costs" },
  { shopify: "Automatic updates & security", magento: "Complex upgrade cycles" },
  { shopify: "Intuitive admin interface", magento: "Steep learning curve" },
  { shopify: "Built-in scalability", magento: "Requires infrastructure planning" },
  { shopify: "Thousands of apps available", magento: "Limited extension ecosystem" },
  { shopify: "24/7 dedicated support", magento: "Relies on agency support" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Products & Attributes",
    description: "All Magento products, configurable products, and custom attributes.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts, customer groups, and purchase history.",
    color: "#8b5cf6",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "Meta data, URL keys, and search rankings carefully preserved.",
    color: "#0ea5e9",
  },
  {
    icon: Link2,
    title: "URL Redirects",
    description: "Comprehensive 301 redirects from Magento URL structure.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Order History",
    description: "Complete order history including custom order statuses.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Multi-store Data",
    description: "Multi-store configurations mapped to Shopify markets.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "Magento Audit",
    description: "We analyse your Magento setup, extensions, and customisations to plan the migration.",
  },
  {
    step: "02",
    title: "Shopify Setup",
    description: "We configure Shopify Plus (if needed) to handle your store's complexity and scale.",
  },
  {
    step: "03",
    title: "Data Migration",
    description: "Products, customers, and orders are migrated with multiple test cycles.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Carefully planned cutover with rollback options and post-launch support.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Magento to Shopify Migration",
      description: "Expert Magento to Shopify migration services. We transfer your products, customers, orders and SEO rankings with zero downtime.",
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
          name: "Magento to Shopify",
          item: `${siteConfig.url}/magento-to-shopify-migration`,
        },
      ],
    },
  ],
};

export default function MagentoToShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "Magento Migration" }}
        title="Magento to Shopify Migration"
        description="Escape Magento's complexity and costs. We'll migrate your store to Shopify with zero downtime, preserving all your data and SEO rankings."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "yellow", bottomLeft: "green" }}
      />

      {/* Platform Logos */}
      <Section background="alt">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/magento-svg-36x36-1.svg"
                alt="Magento"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">Magento</span>
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
            Why Switch from Magento to Shopify?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Magento offers flexibility but at a high cost. Shopify gives you enterprise power without the complexity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <div className="text-center font-semibold text-[#ef436b]">Shopify</div>
            <div></div>
            <div className="text-center font-semibold text-foreground">Magento</div>
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
                  <span className="text-sm text-foreground">{item.magento}</span>
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
            Even complex Magento setups migrate smoothly to Shopify with our expertise.
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
            Our Magento Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Migrating from Magento requires careful planning. We&apos;ve perfected the process.
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

      {/* Guarantees */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Magento Migration Specialists
            </h2>
            <p className="text-lg text-foreground mb-8">
              We understand Magento&apos;s complexity. Our team has migrated stores from Magento 1, Magento 2, and Adobe Commerce.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Configurable and bundle product migration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Custom attribute mapping to Shopify metafields</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Multi-store to Shopify Markets migration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">ERP and third-party integration rewiring</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">B2B functionality via Shopify Plus</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#10b981]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">No More Hosting Hassles</h3>
                  <p className="text-sm text-foreground">Say goodbye to server management and hosting costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Faster Performance</h3>
                  <p className="text-sm text-foreground">Shopify&apos;s CDN delivers faster load times globally.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Lower TCO</h3>
                  <p className="text-sm text-foreground">Most brands see 40-60% reduction in total cost of ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Migrating from Magento felt daunting, but Flex Commerce made it painless. Our SEO rankings were protected, all customer data transferred perfectly, and we saw a 40% improvement in site speed on day one."
        author="Mark Stevens"
        role="Managing Director, UK Fashion Retailer"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to migrate from Magento?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and see how much you could save on Shopify.
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
