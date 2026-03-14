import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify B2B Wholesale Setup Checklist",
  description:
    "Launch your Shopify B2B channel with our 78-point wholesale checklist. Set up trade accounts, tiered pricing, payment terms, and Shopify Plus B2B features.",
  alternates: {
    canonical: "/checklists/shopify-b2b-wholesale-checklist",
  },
  openGraph: {
    title: "Shopify B2B & Wholesale Checklist",
    description: "Set up B2B and wholesale selling on Shopify with our comprehensive checklist.",
    url: "/checklists/shopify-b2b-wholesale-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "B2B Strategy",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Define your ideal wholesale customer",
      "Set minimum order requirements",
      "Determine wholesale discount structure",
      "Plan customer approval process",
      "Define payment terms to offer",
      "Research competitor wholesale programmes",
      "Plan for mixed B2B and DTC selling",
      "Set wholesale revenue targets",
    ],
  },
  {
    title: "Platform Decision",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Evaluate Shopify Plus B2B features",
      "Consider wholesale apps for non-Plus stores",
      "Compare app options (Wholesale Gorilla, B2B Handsfree, etc.)",
      "Decide on separate store vs single store approach",
      "Assess custom development needs",
      "Plan integration with existing systems",
      "Consider ERP requirements",
      "Budget for solution costs",
    ],
  },
  {
    title: "Customer Account Setup",
    icon: "FileText",
    color: "#8b5cf6",
    items: [
      "Create wholesale customer registration form",
      "Define required business verification",
      "Set up account approval workflow",
      "Create customer tags for wholesale buyers",
      "Configure customer groups/companies",
      "Set up tax exemption handling",
      "Create welcome email for approved accounts",
      "Document rejection process",
    ],
  },
  {
    title: "Pricing & Discounts",
    icon: "CreditCard",
    color: "#10b981",
    items: [
      "Set up wholesale price lists",
      "Configure tiered pricing by volume",
      "Create customer-specific pricing if needed",
      "Set up quantity breaks",
      "Configure automatic volume discounts",
      "Hide retail prices from wholesale customers",
      "Set minimum quantities per product",
      "Plan seasonal or promotional pricing",
    ],
  },
  {
    title: "Payment Terms",
    icon: "CreditCard",
    color: "#f59e0b",
    items: [
      "Define payment terms (Net 30, Net 60, etc.)",
      "Set up credit limits per customer",
      "Configure deposit requirements for new customers",
      "Enable purchase orders",
      "Set up invoicing workflow",
      "Plan collections process",
      "Consider trade credit insurance",
      "Configure payment reminders",
    ],
  },
  {
    title: "Ordering Experience",
    icon: "ShoppingCart",
    color: "#ec4899",
    items: [
      "Enable quick order/bulk ordering",
      "Set up CSV order upload",
      "Configure reorder functionality",
      "Create wholesale-specific navigation",
      "Show stock availability",
      "Enable draft orders for sales team",
      "Set up quote request system",
      "Configure order approval workflow if needed",
    ],
  },
  {
    title: "Catalogue & Products",
    icon: "ShoppingCart",
    color: "#64748b",
    items: [
      "Decide which products to wholesale",
      "Create wholesale-only products if needed",
      "Set wholesale minimums per product",
      "Configure case/pack quantities",
      "Show wholesale-specific product info",
      "Create wholesale collections",
      "Set up product bundles for trade",
      "Manage inventory allocation",
    ],
  },
  {
    title: "Shipping & Fulfilment",
    icon: "Truck",
    color: "#ef436b",
    items: [
      "Configure wholesale shipping rates",
      "Set up freight/pallet shipping if needed",
      "Define lead times for wholesale orders",
      "Configure backorder handling",
      "Set up partial shipment process",
      "Plan for drop shipping if offering",
      "Configure shipping account billing",
      "Set minimum for free shipping",
    ],
  },
  {
    title: "Sales Team Tools",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Set up sales rep accounts",
      "Enable customer impersonation for ordering",
      "Create draft order workflow",
      "Set up commission tracking if needed",
      "Configure sales rep territories",
      "Enable mobile ordering for reps",
      "Create sales materials and line sheets",
      "Set up reporting for sales team",
    ],
  },
  {
    title: "Integration & Operations",
    icon: "Settings",
    color: "#8b5cf6",
    items: [
      "Integrate with accounting software",
      "Connect to ERP if applicable",
      "Set up automated invoicing",
      "Configure inventory sync",
      "Plan for order management workflow",
      "Set up reporting dashboards",
      "Document operational processes",
      "Train team on B2B workflows",
    ],
  },
];

const STORAGE_KEY = "shopify-b2b-wholesale-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Do I need Shopify Plus for B2B selling?",
    answer: "No, but Shopify Plus offers native B2B features that simplify wholesale selling significantly. Plus provides company accounts, price lists, payment terms, and a dedicated wholesale storefront within your existing store. For non-Plus stores, apps like Wholesale Gorilla, B2B Handsfree, or SparkLayer provide similar functionality. Evaluate whether app costs versus the Plus subscription makes sense for your volume."
  },
  {
    question: "Should I create a separate store for wholesale?",
    answer: "It depends on your needs. A single store with customer-specific pricing (available on Plus or through apps) simplifies inventory management and reduces overhead. Separate stores offer complete control over branding and prevent retail customers from seeing wholesale pricing. Most brands start with a single store using customer tagging and migrate to separate stores only if complexity requires it."
  },
  {
    question: "What wholesale discount should I offer?",
    answer: "Typical wholesale discounts range from 40-60% off retail, depending on your margins and industry. Your discount must be large enough to let retailers mark up to retail while covering their costs, yet small enough to maintain your profitability. Consider tiered pricing where larger orders receive better discounts. Calculate your costs carefully before committing to discount structures."
  },
  {
    question: "How do I handle payment terms for wholesale customers?",
    answer: "Start cautiously with new customers. Require payment upfront or a deposit until you establish trust. For proven accounts, Net 30 terms are standard, with Net 60 for larger customers. Set credit limits based on order history. Use invoicing software that integrates with Shopify and consider trade credit insurance for large accounts. Be prepared to chase overdue payments as part of operations."
  },
  {
    question: "What minimum order should I require for wholesale?",
    answer: "Minimum orders should cover your handling costs and make wholesale operationally worthwhile. Common approaches include minimum order values (150-500 pounds), minimum quantities per product, or minimum case quantities. Consider different minimums for first orders versus reorders. Too low a minimum attracts retailers who order infrequently; too high excludes smaller boutiques who could become valuable long-term customers."
  },
  {
    question: "How do I verify that wholesale customers are legitimate businesses?",
    answer: "Request business documentation during registration: company registration number, VAT number if applicable, trade references, and business website or social media. Verify the information provided, particularly for new accounts requesting credit terms. Some wholesalers require proof of physical retail location. Balance verification thoroughness against friction that may discourage legitimate buyers. Approve manually at first to learn what red flags to automate against."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify B2B & Wholesale Checklist",
  description: "Set up B2B and wholesale selling on Shopify with our comprehensive checklist covering trade accounts, pricing, payment terms, and Shopify Plus features.",
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
    "@id": `${siteConfig.url}/checklists/shopify-b2b-wholesale-checklist`,
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
      name: "B2B Wholesale Checklist",
      item: `${siteConfig.url}/checklists/shopify-b2b-wholesale-checklist`,
    },
  ],
};
export default function ShopifyB2BWholesaleChecklistPage() {
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
            <span>18 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify B2B & Wholesale Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Expand into wholesale and trade selling. Use this {totalItems}-point checklist to set up a professional B2B operation on Shopify.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Go B2B?</h2>
          <p className="text-lg text-foreground">
            B2B selling transforms business economics. Larger order values, more predictable revenue, and expanded market reach through retail partners. Many successful brands find wholesale contributes 30-50% of total revenue.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The B2B Opportunity */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The B2B Opportunity for DTC Brands
          </h2>
          <p className="text-lg text-foreground mb-6">
            Wholesale changes how your business operates. Understanding the differences from DTC helps you prepare for success.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">B2B vs DTC Economics</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Comparing a typical order:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                DTC average order: £50-100
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Wholesale average order: £500-5,000+
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Lower per-unit margin, but fewer orders to manage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                More predictable reorder cycles
              </li>
            </ul>
            <p className="text-foreground">
              Fewer, larger orders <strong className="text-foreground-dark">reduce per-order operational costs</strong> significantly.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">B2B Operational Differences</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">1.</span>
              <span><strong>Payment terms create receivables.</strong> Net 30/60 means waiting for payment. Budget for cash flow accordingly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">2.</span>
              <span><strong>Customer-specific pricing requires systems.</strong> Different buyers see different prices. Manual management breaks at scale.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">3.</span>
              <span><strong>Relationship management matters.</strong> Business buyers expect responsiveness and personal attention.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">4.</span>
              <span><strong>Fulfilment differs.</strong> Larger orders may require pallet shipping, different packaging, or longer lead times.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Typical Wholesale Discount Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">40-50%</div>
              <div className="text-sm text-foreground">Standard wholesale discount</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">50-60%</div>
              <div className="text-sm text-foreground">High-volume accounts</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">£150-500</div>
              <div className="text-sm text-foreground">Typical minimum order</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Getting Started with B2B
          </h2>
          <p className="text-lg text-foreground mb-6">
            Start simply and add complexity as you learn what your wholesale customers need:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Start with manual approval</h3>
              <p className="text-foreground">Manually approve wholesale applications at first. You will learn what legitimate buyers look like before automating the process.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Require payment upfront initially</h3>
              <p className="text-foreground">Offer payment terms only after a customer has placed several successful orders. Protect cash flow while building relationships.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Set clear minimums</h3>
              <p className="text-foreground">Your minimum order should make wholesale worth your operational effort. Too low attracts unprofitable small buyers.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Document everything</h3>
              <p className="text-foreground">Create clear terms, pricing sheets, and process documentation from day one. B2B customers expect professionalism.</p>
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
            B2B success builds on these foundations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-plus-migration-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Shopify Plus Migration</h3>
              <p className="text-sm text-foreground">Native B2B features on Plus</p>
            </Link>
            <Link href="/checklists/shopify-security-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Security Checklist</h3>
              <p className="text-sm text-foreground">Protect business customer data</p>
            </Link>
            <Link href="/checklists/shopify-internationalisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Internationalisation Checklist</h3>
              <p className="text-sm text-foreground">Expand B2B globally</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing Checklist</h3>
              <p className="text-sm text-foreground">Nurture wholesale leads</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3051793.webp"
        imageAlt="Shopify B2B and wholesale ecommerce setup"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need B2B Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team specialises in Shopify Plus B2B implementations. Let us help you build your wholesale channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get B2B Help</Button>
            <Button href="/shopify-plus" variant="outline-light" size="lg" icon={false}>Learn About Plus</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
