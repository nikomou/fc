import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
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
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BigCommerce to Shopify Migration | Expert Migration Services | Flex Commerce",
  description:
    "Seamless BigCommerce to Shopify migration. We transfer your products, customers, orders & SEO rankings with zero downtime. Get a free migration quote.",
  alternates: {
    canonical: "/bigcommerce-to-shopify-migration",
  },
  openGraph: {
    title: "BigCommerce to Shopify Migration | Expert Migration Services",
    description:
      "Seamless BigCommerce to Shopify migration. We transfer your products, customers, orders & SEO rankings with zero downtime.",
    url: "/bigcommerce-to-shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const whySwitch = [
  { shopify: "Larger app ecosystem (8,000+ apps)", bigcommerce: "Smaller app marketplace" },
  { shopify: "Shop Pay (highest converting checkout)", bigcommerce: "Standard checkout options" },
  { shopify: "Shopify POS for retail", bigcommerce: "Limited POS options" },
  { shopify: "Stronger brand recognition", bigcommerce: "Less consumer awareness" },
  { shopify: "More theme options", bigcommerce: "Fewer design choices" },
  { shopify: "Shopify Markets for international", bigcommerce: "Multi-storefront complexity" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Products & Options",
    description: "All BigCommerce products, options, and modifier sets.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts, groups, and purchase history.",
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
    description: "301 redirects from BigCommerce URL structure.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Order History",
    description: "Complete order history and customer purchase data.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Blog & Pages",
    description: "Blog posts, categories, and static pages.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "BigCommerce Audit",
    description: "We review your BigCommerce setup, apps, and customisations.",
  },
  {
    step: "02",
    title: "Shopify Setup",
    description: "We build your Shopify store with equivalent or improved features.",
  },
  {
    step: "03",
    title: "Data Migration",
    description: "Products, customers, and orders migrated with thorough testing.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Seamless cutover with redirects and post-launch monitoring.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "BigCommerce to Shopify Migration",
      description: "Expert BigCommerce to Shopify migration services. We transfer your products, customers, orders and SEO rankings with zero downtime.",
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
          name: "BigCommerce to Shopify",
          item: `${siteConfig.url}/bigcommerce-to-shopify-migration`,
        },
      ],
    },
  ],
};

export default function BigCommerceToShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "BigCommerce Migration" }}
        title="BigCommerce to Shopify Migration"
        description="Join the world's leading ecommerce platform. We'll migrate your BigCommerce store to Shopify with zero downtime and full data preservation."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "blue", bottomLeft: "pink" }}
      />

      {/* Platform Logos */}
      <Section background="alt">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/big-svg-36x36-1.svg"
                alt="BigCommerce"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">BigCommerce</span>
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
            Why Switch from BigCommerce to Shopify?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Both are great platforms, but Shopify offers a larger ecosystem and more growth opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <div className="text-center font-semibold text-[#ef436b]">Shopify</div>
            <div></div>
            <div className="text-center font-semibold text-foreground">BigCommerce</div>
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
                  <span className="text-sm text-foreground">{item.bigcommerce}</span>
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
            Everything from your BigCommerce store transfers to Shopify seamlessly.
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
            Our BigCommerce Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A smooth transition from BigCommerce to Shopify, handled by experts.
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
              Seamless Platform Switch
            </h2>
            <p className="text-lg text-foreground mb-8">
              Switching from BigCommerce to Shopify is straightforward with our expert team handling the migration.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Product options mapped to Shopify variants</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Customer groups recreated in Shopify</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">App alternatives identified and implemented</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Theme matched or upgraded</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">30 days post-migration support</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-[#ef436b]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Shop Pay Access</h3>
                  <p className="text-sm text-foreground">The highest-converting checkout in ecommerce.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Larger Ecosystem</h3>
                  <p className="text-sm text-foreground">Access to 8,000+ apps and integrations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Quick Migration</h3>
                  <p className="text-sm text-foreground">Most BigCommerce migrations complete in 2-4 weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="We switched from BigCommerce to Shopify and saw immediate improvements in our checkout conversion rate. The migration was seamless - not a single order was missed during the transition."
        author="Rachel Hughes"
        role="Ecommerce Manager, UK Homeware Brand"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to migrate from BigCommerce?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and discover what Shopify can do for your business.
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

      <CTASection />
    </>
  );
}
