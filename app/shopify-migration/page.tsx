import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQSection } from "@/components/ui/FAQSection";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { siteConfig } from "@/lib/constants";
import {
  ArrowRightLeft,
  ArrowUpRight,
  Database,
  Search,
  Link2,
  Users,
  ShieldCheck,
  Check,
  AlertTriangle,
  Zap,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Migration | Platform Migration | Flex Commerce",
  description:
    "Seamless migration to Shopify from WooCommerce, Magento, BigCommerce & more. Data, SEO, and customers transferred with zero downtime. UK Shopify experts.",
  alternates: {
    canonical: "/shopify-migration",
  },
  openGraph: {
    title: "Shopify Migration | Platform Migration | Flex Commerce",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento, BigCommerce & more. Data, SEO, and customers transferred with zero downtime. UK Shopify experts.",
    url: "/shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Migration Services - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Migration | Platform Migration | Flex Commerce",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento, BigCommerce & more. Data, SEO, and customers transferred with zero downtime.",
    images: ["/images/og-image.png"],
  },
};

// Popular platforms - shown prominently
const popularPlatforms = [
  { name: "WooCommerce", logo: "/images/platforms/woo-svg-36x36-1.svg", slug: "woocommerce" },
  { name: "Magento", logo: "/images/platforms/magento-svg-36x36-1.svg", slug: "magento" },
  { name: "BigCommerce", logo: "/images/platforms/big-svg-36x36-1.svg", slug: "bigcommerce" },
  { name: "Squarespace", logo: "/images/platforms/squarespace.svg", slug: "squarespace" },
  { name: "Webflow", logo: "/images/platforms/webflow.svg", slug: "webflow" },
  { name: "Salesforce", logo: "/images/platforms/salesforcecommercecloud.svg", slug: "salesforce" },
];

// All other supported platforms
const otherPlatforms = [
  { name: "PrestaShop", logo: "/images/platforms/prestashop.png" },
  { name: "Wix", logo: "/images/platforms/wix-svg-36x36-1.svg" },
  { name: "OpenCart", logo: "/images/platforms/opencart-svg-36x36-1.svg" },
  { name: "Shopware", logo: "/images/platforms/shopware.svg" },
  { name: "Square", logo: "/images/platforms/square.png" },
  { name: "Shopline", logo: "/images/platforms/shopline.png" },
  { name: "Drupal", logo: "/images/platforms/drupalcommerce.svg" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Products & Variants",
    description: "All product data, images, variants, and inventory levels.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts, order history, and addresses.",
    color: "#8b5cf6",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "URL structure, meta data, and search rankings preserved.",
    color: "#0ea5e9",
  },
  {
    icon: Link2,
    title: "URL Redirects",
    description: "301 redirects from old URLs to maintain SEO value.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Order History",
    description: "Historical orders for customer reference and reporting.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Blog Content",
    description: "Blog posts, categories, and associated media.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "Assessment",
    description: "We audit your current platform and create a detailed migration plan.",
  },
  {
    step: "02",
    title: "Setup",
    description: "We set up your new Shopify store and configure all settings.",
  },
  {
    step: "03",
    title: "Migration",
    description: "We transfer all data with thorough testing at each stage.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "DNS switch, final checks, and post-launch monitoring.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Migration Services",
  description: "Seamless migration to Shopify from WooCommerce, Magento, BigCommerce & more. Data, SEO, and customers transferred with zero downtime. UK Shopify experts.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Platform Migration",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-migration`,
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
      name: "Shopify Migration Services",
      item: `${siteConfig.url}/shopify-migration`,
    },
  ],
};

const faqs = [
  {
    q: "Will I lose my SEO rankings when migrating to Shopify?",
    a: "Not with our process. We preserve your SEO rankings by implementing 301 redirects from every old URL to the corresponding new URL on Shopify, migrating all meta titles and descriptions, and ensuring your site structure is logically mapped. We've successfully migrated stores from Magento, WooCommerce, and BigCommerce without meaningful drops in organic traffic.",
  },
  {
    q: "How long does a Shopify migration take?",
    a: "A standard migration from a platform like WooCommerce or BigCommerce typically takes 6–10 weeks depending on the size of your catalogue and the complexity of your data. Migrations from Magento or Salesforce Commerce Cloud are more complex and typically take 10–16 weeks. We provide a detailed project plan after an initial assessment.",
  },
  {
    q: "Will my customer data and order history be migrated?",
    a: "Yes. We migrate customer accounts (with hashed passwords where technically possible), full order history, and all customer addresses. We test data completeness thoroughly before the final go-live switch.",
  },
  {
    q: "Can you migrate my store with zero downtime?",
    a: "Yes. We perform the migration in a staging environment while your existing store remains live. The final go-live is a DNS switch that typically results in less than 15 minutes of propagation time. Your customers experience no interruption to the buying journey.",
  },
  {
    q: "Do you handle theme design as part of the migration?",
    a: "We can. Many migration projects include a new custom Shopify theme alongside the data migration. We also offer the option to use a premium Shopify theme as a more cost-effective approach for brands with simpler design needs. We'll recommend the best approach during the discovery phase.",
  },
  {
    q: "Which platforms do you migrate from?",
    a: "We migrate from all major ecommerce platforms including WooCommerce, Magento 1 & 2, BigCommerce, Squarespace, Webflow, Salesforce Commerce Cloud, PrestaShop, OpenCart, Shopware, and more. If your platform isn't listed, contact us — if it has data export functionality, we can migrate it.",
  },
];

export default function MigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "Platform Migration" }}
        title="Shopify Migration Services"
        description="Seamless migration to Shopify from any platform. Your data, SEO rankings, and customers transferred safely with zero downtime."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "teal", bottomLeft: "teal" }}
      />

      {/* Platforms */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Platforms We Migrate From
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We&apos;ve successfully migrated stores from all major ecommerce platforms to Shopify.
          </p>
        </div>

        {/* Popular Migrations */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            Popular Migrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularPlatforms.map((platform) => (
              <Link
                key={platform.name}
                href={`/${platform.slug}-to-shopify-migration`}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#ef436b]/20 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-foreground-dark text-sm">
                  {platform.name}
                </span>
                <div className="flex items-center gap-1 mt-2 text-xs text-[#ef436b] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>to Shopify</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Platforms */}
        <div>
          <h3 className="text-center text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            All Supported Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {otherPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 mb-2 flex items-center justify-center">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-medium text-foreground-dark text-xs">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Platform Note */}
        <div className="mt-8 text-center">
          <p className="text-foreground">
            Don&apos;t see your platform? We can migrate from <span className="font-medium text-foreground-dark">any ecommerce system</span>.{" "}
            <a href="/contact" className="text-[#ef436b] hover:underline">Get in touch</a>
          </p>
        </div>
      </Section>

      {/* What We Migrate */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            What We Migrate
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Everything that matters moves with you to Shopify.
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
            Our Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A careful, methodical approach that minimises risk and ensures success.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* Why Migrate */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Migrate to Shopify?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Shopify powers over 4 million stores worldwide. Here&apos;s why brands are making the switch.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">99.99% uptime - no more server headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Automatic security updates and patches</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Thousands of apps to extend functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Best-in-class checkout conversion</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Built-in POS for omnichannel selling</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#f59e0b]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Zero Downtime</h3>
                  <p className="text-sm text-foreground">We migrate behind the scenes and switch over seamlessly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">SEO Protected</h3>
                  <p className="text-sm text-foreground">Your search rankings are preserved with proper redirects.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Thorough Testing</h3>
                  <p className="text-sm text-foreground">Every migration is tested extensively before go-live.</p>
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
            Ready to migrate to Shopify?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free migration assessment and see how smooth the transition can be.
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

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify Migration Experts in Manchester & Liverpool
          </h2>
          <p className="text-lg text-foreground">
            Flex Commerce is a Shopify migration agency based in{" "}
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
            </Link>
            , working with brands across the UK. After migrating, many clients
            pair their new store with our{" "}
            <Link
              href="/shopify-seo"
              className="text-[#ef436b] hover:underline"
            >
              Shopify SEO
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-speed-optimisation"
              className="text-[#ef436b] hover:underline"
            >
              speed optimisation
            </Link>{" "}
            services for maximum impact from day one.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-2881229.webp"
        imageAlt="Ecommerce platform migration to Shopify"
        overlayColor="linear-gradient(135deg, #10b981 0%, #059669 100%)"
      />

      <RelatedServices />
    </>
  );
}
