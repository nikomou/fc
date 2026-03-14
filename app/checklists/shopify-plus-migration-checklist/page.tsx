import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Plus Migration Checklist: Upgrade Guide",
  description:
    "Upgrade to Shopify Plus seamlessly with our 78-point checklist. Set up Scripts, checkout extensibility, B2B features, and automation for enterprise growth.",
  alternates: {
    canonical: "/checklists/shopify-plus-migration-checklist",
  },
  openGraph: {
    title: "Shopify to Shopify Plus Migration Checklist",
    description: "Plan your upgrade from Shopify to Shopify Plus with our comprehensive checklist.",
    url: "/checklists/shopify-plus-migration-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Evaluate Your Readiness",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Review current monthly revenue (£500k+/month typical threshold)",
      "Assess current plan limitations hitting",
      "Identify checkout customisation needs",
      "Evaluate need for multiple staff accounts",
      "Review automation and workflow requirements",
      "Assess international selling complexity",
      "Consider B2B/wholesale requirements",
      "Calculate ROI of Plus features vs cost",
    ],
  },
  {
    title: "Plan the Migration",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Choose migration timing (avoid peak sales)",
      "Document all current apps and integrations",
      "List all third-party code customisations",
      "Map current theme modifications",
      "Identify scripts that need updating",
      "Plan for checkout.liquid conversion",
      "Brief internal teams on timeline",
      "Arrange Shopify Plus partner support",
    ],
  },
  {
    title: "Pre-Migration Preparation",
    icon: "Settings",
    color: "#8b5cf6",
    items: [
      "Export current customer data backup",
      "Export current order history",
      "Document all discount codes",
      "Screenshot all theme settings",
      "List all gift cards outstanding",
      "Note all staff accounts and permissions",
      "Document shipping rates and zones",
      "Record tax settings configuration",
    ],
  },
  {
    title: "Checkout Customisation",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "Plan checkout extensibility apps needed",
      "Design custom checkout UI elements",
      "Plan trust badges and security messaging",
      "Configure express checkout options",
      "Set up checkout upsells/cross-sells",
      "Plan gift wrapping and messaging",
      "Configure address validation",
      "Plan post-purchase offers",
    ],
  },
  {
    title: "Scripts & Automation",
    icon: "Zap",
    color: "#f59e0b",
    items: [
      "Plan Shopify Scripts for discounts",
      "Configure line item scripts",
      "Set up shipping scripts",
      "Plan payment method scripts",
      "Configure Shopify Flow automations",
      "Set up fraud prevention rules",
      "Plan inventory automation workflows",
      "Configure customer tagging automation",
    ],
  },
  {
    title: "Multi-Channel & International",
    icon: "Globe",
    color: "#ec4899",
    items: [
      "Configure additional storefronts if needed",
      "Set up Shopify Markets for international",
      "Configure multi-currency pricing",
      "Set up localised content per market",
      "Configure duties and import taxes",
      "Plan language translations",
      "Set up regional payment methods",
      "Configure local shipping carriers",
    ],
  },
  {
    title: "B2B & Wholesale",
    icon: "CreditCard",
    color: "#64748b",
    items: [
      "Set up B2B customer profiles",
      "Configure company accounts",
      "Create wholesale price lists",
      "Set up payment terms (net 30, etc.)",
      "Configure minimum order quantities",
      "Plan trade customer approval workflow",
      "Set up quantity breaks/volume pricing",
      "Configure draft order workflow",
    ],
  },
  {
    title: "Apps & Integrations",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Review app compatibility with Plus",
      "Identify Plus-exclusive apps to add",
      "Plan ERP integration requirements",
      "Configure advanced analytics tools",
      "Set up enhanced loyalty programme",
      "Plan subscription app upgrades",
      "Review POS requirements",
      "Configure advanced inventory systems",
    ],
  },
  {
    title: "Testing & QA",
    icon: "Shield",
    color: "#0ea5e9",
    items: [
      "Test checkout flow thoroughly",
      "Verify all discount scripts work",
      "Test shipping calculations",
      "Verify payment processing",
      "Test on all device types",
      "Verify email notifications",
      "Test customer account creation",
      "Complete full purchase test orders",
    ],
  },
  {
    title: "Go-Live & Post-Migration",
    icon: "Rocket",
    color: "#8b5cf6",
    items: [
      "Schedule launch during low traffic",
      "Update DNS if domain changes needed",
      "Verify SSL certificate active",
      "Monitor orders post-migration",
      "Check analytics tracking",
      "Verify all automations running",
      "Brief customer service on changes",
      "Document new Plus features for team",
    ],
  },
];

const STORAGE_KEY = "shopify-plus-migration-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "When is the right time to upgrade to Shopify Plus?",
    answer: "Consider Shopify Plus when you consistently exceed 500k GBP monthly revenue, need checkout customisation, require B2B functionality, want to expand internationally with dedicated storefronts, or need advanced automation through Shopify Scripts and Flow. Also consider Plus if you are hitting staff account limits, need exclusive apps, or want dedicated support through your Merchant Success Manager."
  },
  {
    question: "How much does Shopify Plus cost?",
    answer: "Shopify Plus starts at approximately 2,000 USD per month, with pricing that scales based on your revenue. Variable fees apply above certain thresholds. While significantly more expensive than standard Shopify plans, Plus often delivers positive ROI through checkout conversion improvements, reduced app costs (Scripts replaces discount apps), and operational efficiency. Calculate the specific ROI for your business before upgrading."
  },
  {
    question: "Will upgrading to Plus disrupt my existing store?",
    answer: "Shopify to Plus migrations are relatively smooth since you stay within the Shopify ecosystem. Your products, customers, orders, and theme all transfer automatically. However, checkout customisations need rebuilding using checkout extensibility (checkout.liquid was deprecated), and some apps may have Plus-specific versions or replacements. Plan for some adjustment time, and avoid migrating during peak sales periods."
  },
  {
    question: "What are Shopify Scripts and why do they matter?",
    answer: "Shopify Scripts are Ruby snippets that run on Shopify's servers, enabling complex promotions that standard Shopify cannot achieve. Create tiered discounts (spend 100 get 10% off, spend 200 get 20% off), automatic gifts with purchase, customer-specific pricing, or complex BOGO offers without apps. Scripts are exclusive to Plus and can replace multiple paid apps whilst providing faster, more reliable checkout experiences."
  },
  {
    question: "How does Shopify Plus B2B work?",
    answer: "Shopify Plus includes native B2B functionality allowing wholesale and trade customer management. Create company accounts with multiple buyers, set customer-specific price lists, offer payment terms (net 30, net 60), set minimum order quantities, and provide volume-based pricing. B2B customers see their specific pricing throughout the store. This replaces third-party wholesale apps for many merchants, reducing complexity and improving the buyer experience."
  },
  {
    question: "Do I need a Shopify Plus Partner for the migration?",
    answer: "While you can technically migrate yourself, working with a Shopify Plus Partner provides significant advantages. Partners have migration experience, understand Plus-specific features, can implement checkout customisations effectively, and provide post-migration optimisation. Plus Partners also have direct lines to Shopify support for complex issues. The cost of partner support is typically offset by faster migration, fewer issues, and better utilisation of Plus features from day one."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify to Shopify Plus Migration Checklist",
  description: "Plan your upgrade from Shopify to Shopify Plus with our comprehensive checklist.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2024-01-15",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/checklists/shopify-plus-migration-checklist`,
  },
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
      name: "Checklists",
      item: `${siteConfig.url}/checklists`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Shopify Plus Migration",
      item: `${siteConfig.url}/checklists/shopify-plus-migration-checklist`,
    },
  ],
};
export default function ShopifyPlusMigrationChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>20 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify to Shopify Plus Migration Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Ready to scale? Use this {totalItems}-point checklist to plan and execute your upgrade from Shopify to Shopify Plus without disruption.
          </p>

          <div className="flex items-center gap-4 text-sm text-foreground">
            <ChecklistProgress storageKey={STORAGE_KEY} totalItems={totalItems} />
            <span className="px-3 py-1 bg-gray-100 text-foreground-dark rounded-full font-medium">
              {checklistSections.length} sections
            </span>
          </div>
        </div>
      </section>

      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Upgrade to Plus?</h2>
          <p className="text-lg text-foreground">
            Shopify Plus unlocks enterprise features: checkout customisation, Shopify Scripts for complex promotions, native B2B functionality, Shopify Flow automation, and dedicated support. For high-growth merchants, these features often deliver significant ROI.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Plus Advantage */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            What Shopify Plus Delivers
          </h2>
          <p className="text-lg text-foreground mb-6">
            Plus is more than a pricing tier. It is a different operational paradigm with exclusive features that transform how your store functions.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">ROI Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For a store doing £1M monthly:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Checkout optimisation lifts conversion 10%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                = £100,000 additional monthly revenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Plus cost: ~£2,000/month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Scripts replace discount apps: £200/month saved
              </li>
            </ul>
            <p className="text-foreground">
              Net ROI: <strong className="text-foreground-dark">£98,000+ monthly return</strong> on a £2,000 investment.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Plus Features</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">1.</span>
              <span><strong>Checkout extensibility</strong> enables custom checkout UI, trust badges, upsells, and post-purchase offers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">2.</span>
              <span><strong>Shopify Scripts</strong> create complex promotions impossible on standard plans, replacing multiple paid apps.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">3.</span>
              <span><strong>Native B2B</strong> provides company accounts, customer-specific pricing, and payment terms without apps.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">4.</span>
              <span><strong>Shopify Flow</strong> automates customer tagging, fraud review, inventory alerts, and order routing.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Plus Is Right For You If</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">£500k+</div>
              <div className="text-sm text-foreground">Monthly revenue</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">B2B</div>
              <div className="text-sm text-foreground">Wholesale requirements</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">Global</div>
              <div className="text-sm text-foreground">International expansion</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Migration Tips */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Migration Best Practices
          </h2>
          <p className="text-lg text-foreground mb-6">
            Avoid common migration pitfalls with these approaches:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Time it right</h3>
              <p className="text-foreground">Never migrate during peak sales periods. Choose a quiet week and schedule the actual switch for early morning when traffic is lowest.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Audit apps thoroughly</h3>
              <p className="text-foreground">Some apps have Plus-specific versions or become unnecessary with Plus features. Review every app before migrating.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Plan checkout rebuild</h3>
              <p className="text-foreground">checkout.liquid was deprecated. Rebuild checkout customisations using checkout extensibility APIs before going live.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Use a Plus Partner</h3>
              <p className="text-foreground">Partner experience with migrations and Plus features typically pays for itself through faster implementation and fewer issues.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Maximise your Plus investment with these complementary resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-b2b-wholesale-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">B2B Wholesale Checklist</h3>
              <p className="text-sm text-foreground">Set up Plus B2B features properly</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation</h3>
              <p className="text-sm text-foreground">Maximise checkout conversion with Plus features</p>
            </Link>
            <Link href="/checklists/shopify-internationalisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Internationalisation Checklist</h3>
              <p className="text-sm text-foreground">Expand globally with Shopify Markets</p>
            </Link>
            <Link href="/checklists/shopify-security-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Security Checklist</h3>
              <p className="text-sm text-foreground">Enterprise security for high-value stores</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3944405.webp"
        imageAlt="Shopify Plus migration planning and execution"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade to Plus?</h2>
          <p className="text-xl text-gray-300 mb-8">
            As a Shopify Plus Partner, we handle migrations every day. Let us manage your upgrade seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Migration Quote</Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>Learn About Plus</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
