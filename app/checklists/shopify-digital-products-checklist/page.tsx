import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Products Checklist for Shopify",
  description:
    "Sell ebooks, courses, and templates on Shopify with our 78-point checklist. Master automated delivery, licensing, pricing, and marketing for digital goods.",
  alternates: {
    canonical: "/checklists/shopify-digital-products-checklist",
  },
  openGraph: {
    title: "Shopify Digital Products Checklist",
    description: "Sell digital products on Shopify with our comprehensive checklist.",
    url: "/checklists/shopify-digital-products-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Product Planning",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Define your digital product type (ebooks, templates, courses, etc.)",
      "Research market demand",
      "Identify target audience",
      "Analyse competitor offerings and pricing",
      "Define your unique value proposition",
      "Plan product format and delivery",
      "Consider bundle opportunities",
      "Plan content update strategy",
    ],
  },
  {
    title: "Product Creation",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Create high-quality content",
      "Use professional formatting",
      "Include branding consistently",
      "Optimise file sizes for download",
      "Choose appropriate file formats",
      "Test files on multiple devices",
      "Create multiple format versions if needed",
      "Include clear instructions for use",
    ],
  },
  {
    title: "Delivery App Setup",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Choose digital delivery app (Digital Downloads, Sky Pilot, etc.)",
      "Install and configure app",
      "Upload product files",
      "Set up automatic delivery on purchase",
      "Configure download limits if needed",
      "Set up link expiration if required",
      "Test download process thoroughly",
      "Configure email delivery templates",
    ],
  },
  {
    title: "Product Listing",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "Create compelling product title",
      "Write detailed product description",
      "List what's included clearly",
      "Specify file formats and sizes",
      "Create attractive mockup images",
      "Show preview or sample content",
      "Include testimonials if available",
      "Add FAQ section",
    ],
  },
  {
    title: "Pricing & Licensing",
    icon: "CreditCard",
    color: "#f59e0b",
    items: [
      "Research competitor pricing",
      "Consider value-based pricing",
      "Define license terms (personal, commercial, etc.)",
      "Create different license tiers if applicable",
      "Plan promotional pricing strategy",
      "Consider subscription or membership model",
      "Set up bundle discounts",
      "Document licensing terms clearly",
    ],
  },
  {
    title: "Checkout Configuration",
    icon: "ShoppingCart",
    color: "#ec4899",
    items: [
      "Disable shipping for digital products",
      "Remove shipping address requirement",
      "Configure instant delivery notification",
      "Set up order confirmation with download links",
      "Test checkout flow completely",
      "Ensure mobile checkout works",
      "Configure payment methods",
      "Set up abandoned cart recovery",
    ],
  },
  {
    title: "Legal & Protection",
    icon: "Shield",
    color: "#64748b",
    items: [
      "Create clear terms of service",
      "Define refund policy for digital goods",
      "Include copyright notice on products",
      "Add watermarks if appropriate",
      "Consider DRM for high-value content",
      "Create license agreement",
      "Handle VAT/tax for digital goods",
      "Understand GDPR implications",
    ],
  },
  {
    title: "Customer Support",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Create download instructions",
      "Set up FAQ for common issues",
      "Prepare responses for access problems",
      "Configure support email/chat",
      "Plan for manual redelivery requests",
      "Document troubleshooting steps",
      "Set expectations for response times",
      "Create knowledge base or help centre",
    ],
  },
  {
    title: "Marketing & Sales",
    icon: "BarChart",
    color: "#0ea5e9",
    items: [
      "Create compelling sales page",
      "Offer free sample or preview",
      "Set up email marketing funnel",
      "Create social proof with testimonials",
      "Plan content marketing strategy",
      "Consider affiliate programme",
      "Set up retargeting ads",
      "Build email list with lead magnet",
    ],
  },
  {
    title: "Automation & Scaling",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Automate delivery completely",
      "Set up post-purchase email sequence",
      "Automate review requests",
      "Create upsell/cross-sell automation",
      "Set up analytics tracking",
      "Monitor download success rates",
      "Plan content updates schedule",
      "Build systems for new product creation",
    ],
  },
];

const STORAGE_KEY = "shopify-digital-products-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What types of digital products sell best on Shopify?",
    answer: "Popular digital products include ebooks and guides, online courses, templates (Canva, Notion, spreadsheets), printable planners and artwork, music and audio files, software and plugins, photography presets, and design assets. The best products solve specific problems for defined audiences. Success comes from understanding your target customer deeply rather than chasing generic product categories."
  },
  {
    question: "How do I deliver digital products automatically on Shopify?",
    answer: "Shopify does not handle digital delivery natively. Use apps like Digital Downloads (free from Shopify), Sky Pilot, or SendOwl. These apps automatically send download links after purchase and can manage download limits, link expiration, and PDF stamping. Test the entire process with a test order before launching. Ensure emails reach customers and download links work across devices."
  },
  {
    question: "What should my refund policy be for digital products?",
    answer: "Since digital products can be copied instantly after download, many sellers offer limited or no refunds. However, consumer protection laws in the UK and EU give customers cancellation rights unless they explicitly waive them before purchase. Common approaches include offering refunds only for technical issues, providing a money-back guarantee within a short window, or offering store credit instead of refunds. Be clear about your policy before purchase."
  },
  {
    question: "How do I price my digital products?",
    answer: "Digital product pricing should reflect value delivered rather than production cost. Research competitor pricing as a starting point, then consider your unique positioning. Premium pricing works for products with demonstrated results or exclusive content. Testing different price points reveals what your audience will pay. Bundle products to increase average order value. Consider tiered pricing for different license types or access levels."
  },
  {
    question: "Do I need to charge VAT on digital products?",
    answer: "Yes, digital products sold to consumers in the UK and EU are subject to VAT. For UK customers, you charge UK VAT. For EU customers, you must charge VAT at the rate of their country if you exceed certain thresholds. Shopify can collect VAT automatically, and services like Quaderno or TaxJar help with compliance. Consult a tax professional for your specific situation as rules are complex and penalties apply for non-compliance."
  },
  {
    question: "How do I protect my digital products from piracy?",
    answer: "Complete protection is impossible, but you can discourage casual sharing. Use PDF stamping to embed customer information in downloads. Limit download attempts per purchase. Set expiring download links. For courses, host content on platforms requiring login. Watermark visual content. Ultimately, focus more on serving paying customers well than preventing all theft. Customers who would pirate likely would not have paid anyway."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Digital Products Checklist",
  description: "Sell digital products on Shopify with our comprehensive checklist covering file delivery, licensing, automation, and marketing strategies.",
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
    "@id": `${siteConfig.url}/checklists/shopify-digital-products-checklist`,
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
      name: "Digital Products Checklist",
      item: `${siteConfig.url}/checklists/shopify-digital-products-checklist`,
    },
  ],
};
export default function ShopifyDigitalProductsChecklistPage() {
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
            <span>16 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Digital Products Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Sell ebooks, templates, courses, and more with zero shipping costs. Use this {totalItems}-point checklist to set up your digital product store.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Digital Products?</h2>
          <p className="text-lg text-foreground">
            Digital products offer exceptional profit margins with no inventory, no shipping, and unlimited scalability. Create once, sell infinitely. Turn your expertise into recurring revenue streams that grow without proportional increases in effort.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Digital Advantage */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Economics of Digital Products
          </h2>
          <p className="text-lg text-foreground mb-6">
            Digital products fundamentally differ from physical goods. Once created, replication and delivery cost nearly nothing. This changes everything about margins and scalability.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Margin Comparison</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For a product selling at £50:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Physical product: £15-25 profit (30-50% margin)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Digital product: £40-47 profit (80-95% margin)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                No inventory costs, no shipping, no returns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Unlimited sales without restocking
              </li>
            </ul>
            <p className="text-foreground">
              A single well-crafted digital product can generate <strong className="text-foreground-dark">revenue for years</strong> with minimal ongoing effort.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">What Makes Digital Products Succeed</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">1.</span>
              <span><strong>Solve specific problems.</strong> The best digital products save time, teach skills, or deliver clear transformations. Surface-level content gets lost.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">2.</span>
              <span><strong>Provide genuine value.</strong> Unlike physical products with logistics barriers, anyone can list a digital product. Quality and depth win.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">3.</span>
              <span><strong>Build trust through free content.</strong> Content marketing and email lists typically drive more sales than paid advertising.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">4.</span>
              <span><strong>Automate everything.</strong> Orders fulfil automatically at any hour. Focus on creation, not operations.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Popular Digital Product Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Templates</div>
              <div className="text-sm text-foreground">Canva, Notion, Spreadsheets</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Education</div>
              <div className="text-sm text-foreground">Courses, Ebooks, Guides</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Creative</div>
              <div className="text-sm text-foreground">Presets, Fonts, Graphics</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Quick Wins for Digital Sellers
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these high-impact actions when setting up your digital store:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Offer a free sample</h3>
              <p className="text-foreground">Give away a portion of your product to demonstrate quality. This builds trust and grows your email list simultaneously.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Test delivery thoroughly</h3>
              <p className="text-foreground">Place test orders on every device type. Delivery problems create support headaches and refund requests. Verify links work and files download correctly.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Create professional mockups</h3>
              <p className="text-foreground">Digital products need visual representation. Show your ebook as a book cover, templates as screenshots, courses as module lists.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Price on value, not effort</h3>
              <p className="text-foreground">A template that saves someone 10 hours is worth far more than your time to create it. Price based on the outcome delivered.</p>
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
            Digital product success requires these complementary skills:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing Checklist</h3>
              <p className="text-sm text-foreground">Build the audience that buys digital products</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist</h3>
              <p className="text-sm text-foreground">Drive organic traffic to your products</p>
            </Link>
            <Link href="/checklists/shopify-print-on-demand-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Print-on-Demand Checklist</h3>
              <p className="text-sm text-foreground">Add physical products without inventory</p>
            </Link>
            <Link href="/checklists/shopify-b2b-wholesale-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">B2B Wholesale Checklist</h3>
              <p className="text-sm text-foreground">Sell licenses to businesses</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Digital Store Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you set up a seamless digital product store on Shopify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
