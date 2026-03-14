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
  PoundSterling,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salesforce Commerce Cloud to Shopify Migration | Flex Commerce",
  description:
    "Migrate from Salesforce Commerce Cloud to Shopify Plus. Reduce costs, increase agility. Enterprise-grade migration with zero downtime.",
  alternates: {
    canonical: "/salesforce-to-shopify-migration",
  },
  openGraph: {
    title: "Salesforce Commerce Cloud to Shopify Migration | Flex Commerce",
    description:
      "Migrate from Salesforce Commerce Cloud to Shopify Plus. Reduce costs, increase agility with zero downtime.",
    url: "/salesforce-to-shopify-migration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const whySwitch = [
  { shopify: "Predictable, transparent pricing", salesforce: "Complex licensing & GMV fees" },
  { shopify: "Fast deployment & iterations", salesforce: "Long development cycles" },
  { shopify: "Intuitive admin interface", salesforce: "Steep learning curve" },
  { shopify: "8,000+ apps & integrations", salesforce: "Limited partner ecosystem" },
  { shopify: "Quick time-to-market", salesforce: "Lengthy implementation projects" },
  { shopify: "Lower total cost of ownership", salesforce: "High ongoing costs" },
];

const whatWeMigrate = [
  {
    icon: Database,
    title: "Product Catalogue",
    description: "Full product catalogue including complex variants and attributes.",
    color: "#ef436b",
  },
  {
    icon: Users,
    title: "Customer Data",
    description: "Customer accounts, segments, and purchase history.",
    color: "#8b5cf6",
  },
  {
    icon: Search,
    title: "SEO & Rankings",
    description: "All SEO data preserved with comprehensive redirects.",
    color: "#0ea5e9",
  },
  {
    icon: Link2,
    title: "URL Structure",
    description: "301 redirects from SFCC URL patterns to Shopify.",
    color: "#10b981",
  },
  {
    icon: ShieldCheck,
    title: "Order History",
    description: "Complete transaction history and customer order data.",
    color: "#f59e0b",
  },
  {
    icon: Database,
    title: "Content Assets",
    description: "Content slots, page designer content, and media.",
    color: "#64748b",
  },
];

const process = [
  {
    step: "01",
    title: "SFCC Assessment",
    description: "Deep dive into your Salesforce Commerce Cloud implementation.",
  },
  {
    step: "02",
    title: "Shopify Plus Setup",
    description: "Enterprise Shopify Plus configuration with equivalent features.",
  },
  {
    step: "03",
    title: "Phased Migration",
    description: "Careful, phased data migration with extensive validation.",
  },
  {
    step: "04",
    title: "Cutover & Support",
    description: "Planned go-live with rollback options and dedicated support.",
  },
];

const migrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Salesforce Commerce Cloud to Shopify Migration",
      description: "Expert Salesforce Commerce Cloud to Shopify Plus migration. Reduce costs and increase agility with zero downtime.",
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
          name: "Salesforce to Shopify",
          item: `${siteConfig.url}/salesforce-to-shopify-migration`,
        },
      ],
    },
  ],
};

export default function SalesforceToShopifyMigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationSchema) }}
      />

      <PageHero
        badge={{ icon: ArrowRightLeft, text: "Enterprise Migration" }}
        title="Salesforce Commerce Cloud to Shopify Migration"
        description="Escape complex licensing and slow development cycles. Migrate to Shopify Plus for enterprise power with startup agility."
        primaryCta={{ text: "Get Migration Quote", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "blue", bottomLeft: "yellow" }}
      />

      {/* Platform Logos */}
      <Section background="alt">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm p-4">
              <Image
                src="/images/platforms/salesforcecommercecloud.svg"
                alt="Salesforce Commerce Cloud"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <span className="font-medium text-foreground-dark">Salesforce</span>
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
            <span className="font-medium text-foreground-dark">Shopify Plus</span>
          </div>
        </div>
      </Section>

      {/* Why Switch */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Why Switch from Salesforce to Shopify Plus?
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Major brands are moving from SFCC to Shopify Plus for lower costs and faster innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-4">
            <div className="text-center font-semibold text-[#ef436b]">Shopify Plus</div>
            <div></div>
            <div className="text-center font-semibold text-foreground">Salesforce Commerce</div>
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
                  <span className="text-sm text-foreground">{item.salesforce}</span>
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
            Enterprise-grade migration handling all SFCC complexities.
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
            Enterprise Migration Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A methodical approach for complex SFCC migrations.
          </p>
        </div>

        <ProcessSteps steps={process} />
      </Section>

      {/* Guarantees */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Enterprise-Grade Migration
            </h2>
            <p className="text-lg text-foreground mb-8">
              We understand the complexity of Salesforce Commerce Cloud. Our team has migrated enterprise brands with millions in revenue.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Multi-site and multi-currency migration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Complex product hierarchy mapping</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Custom integration rebuilding (ERP, OMS, PIM)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">B2B functionality via Shopify Plus</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Dedicated project manager throughout</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#0ea5e9]/10 to-[#f59e0b]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <PoundSterling className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Dramatic Cost Savings</h3>
                  <p className="text-sm text-foreground">Most brands see 40-60% reduction in platform costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Faster Innovation</h3>
                  <p className="text-sm text-foreground">Deploy changes in days, not months.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">No Infrastructure</h3>
                  <p className="text-sm text-foreground">Shopify handles hosting, security, and scaling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Moving from Salesforce Commerce Cloud to Shopify Plus was the best decision we made. Our platform costs dropped by 50%, and we can now launch new features in weeks instead of months. Flex Commerce managed the entire migration flawlessly."
        author="Catherine Wright"
        role="CTO, Enterprise Fashion Retailer"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to leave Salesforce Commerce Cloud?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a comprehensive migration assessment and ROI analysis.
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
