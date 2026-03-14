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
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WooCommerce to Shopify Migration | Expert Migration Services | Flex Commerce",
  description:
    "Seamless WooCommerce to Shopify migration. We transfer your products, customers, orders & SEO rankings with zero downtime. Get a free migration quote.",
  alternates: {
    canonical: "/woocommerce-to-shopify-migration",
  },
  openGraph: {
    title: "WooCommerce to Shopify Migration | Expert Migration Services",
    description:
      "Seamless WooCommerce to Shopify migration. We transfer your products, customers, orders & SEO rankings with zero downtime.",
    url: "/woocommerce-to-shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const whySwitch = [
  { shopify: "99.99% uptime guarantee", woo: "Self-managed hosting reliability" },
  { shopify: "Automatic security updates", woo: "Manual plugin updates required" },
  { shopify: "Built-in PCI compliance", woo: "Self-managed compliance" },
  { shopify: "24/7 dedicated support", woo: "Community forum support" },
  { shopify: "Automatic scaling", woo: "Manual server scaling" },
  { shopify: "One-click checkout (Shop Pay)", woo: "Third-party checkout plugins" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Products & Variants",
    description: "All WooCommerce products, variations, attributes, and images.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts, addresses, and purchase history.",
    color: "#8b5cf6",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "Meta titles, descriptions, and URL structure preserved.",
    color: "#0ea5e9",
  },
  {
    icon: Link2,
    title: "URL Redirects",
    description: "301 redirects from all WooCommerce URLs to new Shopify URLs.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Order History",
    description: "Complete order history for customer reference and reporting.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Blog & Content",
    description: "WordPress blog posts, categories, and media files.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "WooCommerce Audit",
    description: "We analyse your WooCommerce store, plugins, and customisations to create a migration plan.",
  },
  {
    step: "02",
    title: "Shopify Setup",
    description: "We build your new Shopify store with a theme that matches or improves on your current design.",
  },
  {
    step: "03",
    title: "Data Migration",
    description: "Products, customers, and orders are migrated with thorough testing at each stage.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "DNS switch, final redirects, and post-launch monitoring to ensure everything works perfectly.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WooCommerce to Shopify Migration",
      description: "Expert WooCommerce to Shopify migration services. We transfer your products, customers, orders and SEO rankings with zero downtime.",
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
          name: "WooCommerce to Shopify",
          item: `${siteConfig.url}/woocommerce-to-shopify-migration`,
        },
      ],
    },
  ],
};

export default function WooCommerceToShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "WooCommerce Migration" }}
        title="WooCommerce to Shopify Migration"
        description="Leave plugin updates and hosting headaches behind. We'll migrate your WooCommerce store to Shopify with zero downtime and full SEO preservation."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "pink", bottomLeft: "blue" }}
      />

      {/* Platform Logos */}
      <Section background="alt">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/woo-svg-36x36-1.svg"
                alt="WooCommerce"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">WooCommerce</span>
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
            Why Switch from WooCommerce to Shopify?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            WooCommerce is powerful but requires constant maintenance. Shopify lets you focus on growing your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <div className="text-center font-semibold text-[#ef436b]">Shopify</div>
            <div></div>
            <div className="text-center font-semibold text-foreground">WooCommerce</div>
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
                  <span className="text-sm text-foreground">{item.woo}</span>
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
            Everything from your WooCommerce store moves to Shopify seamlessly.
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
            Our WooCommerce Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven process that ensures your migration is smooth and stress-free.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* Guarantees */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Our Migration Guarantee
            </h2>
            <p className="text-lg text-foreground mb-8">
              We&apos;ve migrated hundreds of WooCommerce stores to Shopify. Here&apos;s what we guarantee:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Zero downtime during migration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">100% data accuracy - every product, customer, and order</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Full SEO preservation with proper redirects</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">30 days post-launch support included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">WordPress blog migration or integration options</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#8b5cf6]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Plugin Audit</h3>
                  <p className="text-sm text-foreground">We identify Shopify equivalents for your WooCommerce plugins.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Speed Boost</h3>
                  <p className="text-sm text-foreground">Most stores see 40-60% faster load times on Shopify.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Time Saved</h3>
                  <p className="text-sm text-foreground">No more plugin updates, security patches, or hosting issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="We were spending hours every month on WooCommerce updates and security issues. Flex Commerce migrated us to Shopify in under two weeks, and we haven't looked back. Our site is faster, more reliable, and we can finally focus on sales."
        author="James Thompson"
        role="Founder, UK Lifestyle Brand"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to migrate from WooCommerce?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and see how easy the switch to Shopify can be.
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
