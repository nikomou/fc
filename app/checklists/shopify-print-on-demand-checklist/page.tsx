import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Print-on-Demand Checklist for Shopify",
  description:
    "Launch your POD store with our 78-point Shopify checklist. Choose suppliers, create designs, avoid copyright issues, and set up automated fulfilment.",
  alternates: {
    canonical: "/checklists/shopify-print-on-demand-checklist",
  },
  openGraph: {
    title: "Shopify Print-on-Demand Checklist",
    description: "Launch a print-on-demand business on Shopify with our comprehensive checklist.",
    url: "/checklists/shopify-print-on-demand-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Niche & Product Selection",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Research profitable niches",
      "Identify target audience",
      "Analyse competitor offerings",
      "Choose product types (t-shirts, mugs, posters, etc.)",
      "Consider product quality requirements",
      "Research trending designs in niche",
      "Validate demand with keyword research",
      "Define your unique angle or style",
    ],
  },
  {
    title: "POD Supplier Selection",
    icon: "Truck",
    color: "#0ea5e9",
    items: [
      "Research POD suppliers (Printful, Printify, Gooten, etc.)",
      "Compare product quality and options",
      "Compare pricing and profit margins",
      "Check shipping times and costs",
      "Review supplier locations for faster delivery",
      "Order samples to test quality",
      "Check integration with Shopify",
      "Review supplier reviews and reliability",
    ],
  },
  {
    title: "Design Creation",
    icon: "Globe",
    color: "#8b5cf6",
    items: [
      "Create original designs",
      "Ensure designs are print-ready (300 DPI)",
      "Use correct file formats (PNG, transparent)",
      "Check design dimensions for each product",
      "Test designs with mockup generators",
      "Consider design placement options",
      "Create designs for different products",
      "Build design library for scaling",
    ],
  },
  {
    title: "Legal & Copyright",
    icon: "Shield",
    color: "#10b981",
    items: [
      "Only use original or licensed designs",
      "Avoid copyrighted characters or logos",
      "Check trademark database before using phrases",
      "Understand fair use limitations",
      "Consider trademarking your brand/designs",
      "Have clear terms of service",
      "Understand platform policies",
      "Keep records of design ownership",
    ],
  },
  {
    title: "Shopify & POD Integration",
    icon: "Settings",
    color: "#f59e0b",
    items: [
      "Install POD supplier app",
      "Connect accounts and verify integration",
      "Set up automatic order fulfilment",
      "Configure shipping rate sync",
      "Test order flow end-to-end",
      "Set up inventory sync if applicable",
      "Configure tracking number updates",
      "Test cancellation/refund process",
    ],
  },
  {
    title: "Product Listings",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Use high-quality mockup images",
      "Show products on diverse models",
      "Include lifestyle context images",
      "Write compelling product titles",
      "Create detailed descriptions",
      "Include size guides/charts",
      "Show product from multiple angles",
      "Highlight material and quality",
    ],
  },
  {
    title: "Pricing Strategy",
    icon: "CreditCard",
    color: "#64748b",
    items: [
      "Calculate true cost per item",
      "Factor in supplier cost + shipping",
      "Account for Shopify fees",
      "Account for payment processing fees",
      "Set profit margin (aim for 30%+)",
      "Research competitor pricing",
      "Consider perceived value",
      "Plan for promotional discounts",
    ],
  },
  {
    title: "Shipping & Fulfilment",
    icon: "Truck",
    color: "#ef436b",
    items: [
      "Set clear shipping expectations",
      "Display production + shipping times",
      "Configure shipping rates in Shopify",
      "Consider offering free shipping (built into price)",
      "Set up international shipping if applicable",
      "Create shipping policy page",
      "Communicate delays proactively",
      "Set up order tracking notifications",
    ],
  },
  {
    title: "Returns & Customer Service",
    icon: "Shield",
    color: "#0ea5e9",
    items: [
      "Create clear return policy",
      "Understand supplier return policies",
      "Set up process for damaged/wrong items",
      "Prepare customer service responses",
      "Plan for quality issues",
      "Consider offering refunds vs replacements",
      "Set up customer service email/chat",
      "Create FAQ for common questions",
    ],
  },
  {
    title: "Marketing & Launch",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Set up social media accounts",
      "Create content showcasing products",
      "Plan influencer outreach in niche",
      "Set up email marketing",
      "Create launch promotion",
      "Set up Facebook/Instagram ads",
      "Optimise for SEO",
      "Build community around brand",
    ],
  },
];

const STORAGE_KEY = "shopify-print-on-demand-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What is the best print-on-demand supplier for Shopify?",
    answer: "The best supplier depends on your specific needs. Printful offers excellent quality and fast shipping from multiple locations including the UK and Europe. Printify provides access to multiple print providers, often at lower costs. Gooten offers competitive pricing for certain product categories. Order samples from several suppliers before committing. Consider factors like print quality, product range, shipping speed to your target market, and integration reliability."
  },
  {
    question: "How much can I earn from a print-on-demand business?",
    answer: "Earnings vary enormously based on niche, design quality, and marketing investment. Typical profit margins range from 20-40% per item after supplier costs. A successful POD store might earn 1000-5000 pounds monthly profit, while top performers reach 10000 pounds or more. Building to meaningful revenue typically takes 6-12 months of consistent effort. Success depends more on your designs and marketing than on the business model itself."
  },
  {
    question: "Do I need design skills for print-on-demand?",
    answer: "Basic design skills help, but you have options. Tools like Canva make simple designs accessible. For more complex work, consider hiring designers from platforms like Fiverr or 99designs. Some successful POD sellers focus on typography and simple graphics rather than complex illustrations. The key is creating designs that resonate with your target audience, which requires understanding them well rather than advanced artistic ability."
  },
  {
    question: "How do I avoid copyright issues with print-on-demand?",
    answer: "Only use designs you create yourself or have properly licensed. Never use copyrighted characters, logos, celebrity likenesses, or trademarked phrases without permission. Check trademark databases before using text designs. Keep records proving when you created original designs. Platforms like Etsy and Shopify can remove listings and suspend accounts for infringement. The risk is not worth it. Focus on original creative work."
  },
  {
    question: "What products sell best for print-on-demand?",
    answer: "T-shirts remain the most popular POD product, but competition is intense. Successful sellers often focus on specific niches or expand into products like hoodies, mugs, phone cases, tote bags, and posters. Product performance varies by niche. Sports fans may prefer apparel while home decor enthusiasts buy wall art. Test different products with your audience and let sales data guide your focus."
  },
  {
    question: "How long does shipping take for print-on-demand orders?",
    answer: "POD orders have two components: production time (typically 2-5 business days) and shipping time. Total delivery to UK customers is usually 5-10 days from suppliers with UK facilities, or 2-4 weeks from international locations. Communicate these timelines clearly on your product pages and shipping policy. Consider suppliers with UK or European production facilities to reduce delivery times for your target market."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Print-on-Demand Checklist",
  description: "Launch a print-on-demand business on Shopify with our comprehensive checklist covering supplier selection, design creation, and fulfilment setup.",
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
    "@id": `${siteConfig.url}/checklists/shopify-print-on-demand-checklist`,
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
      name: "Print-on-Demand Checklist",
      item: `${siteConfig.url}/checklists/shopify-print-on-demand-checklist`,
    },
  ],
};
export default function ShopifyPrintOnDemandChecklistPage() {
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
            Shopify Print-on-Demand Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Start a print-on-demand business with zero inventory. Use this {totalItems}-point checklist to launch and grow your POD store.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Print-on-Demand?</h2>
          <p className="text-lg text-foreground">
            Print-on-demand lets you sell custom products without holding inventory. Your designs are printed only when customers order, with suppliers handling production and shipping directly. This eliminates upfront investment and allows unlimited product testing.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The POD Business Model */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Understanding the POD Business Model
          </h2>
          <p className="text-lg text-foreground mb-6">
            Print-on-demand is accessible, but accessibility means intense competition. Standing out requires more than uploading designs and hoping for sales.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Typical Profit Margins</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">For a t-shirt selling at £25:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Base cost: £8-12 (printing + garment)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Shipping to customer: £3-5
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Shopify + payment fees: £1-2
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                = £6-13 profit per sale (24-52% margin)
              </li>
            </ul>
            <p className="text-foreground">
              Selling 100 shirts monthly at £8 profit = <strong className="text-foreground-dark">£800 monthly profit</strong>. Scale from there.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Keys to POD Success</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">1.</span>
              <span><strong>Design quality determines everything.</strong> Generic designs get lost. Designs that speak to specific communities create emotional connections that drive purchases.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">2.</span>
              <span><strong>Supplier selection impacts customer experience.</strong> Print quality varies significantly. Test with sample orders before listing products.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">3.</span>
              <span><strong>Legal compliance is non-negotiable.</strong> Copyright infringement leads to platform suspension and legal action. Build on original work only.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">4.</span>
              <span><strong>Niche focus beats broad appeal.</strong> Target specific audiences with designs made for them, not generic designs for everyone.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Top POD Suppliers Compared</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Printful</div>
              <div className="text-sm text-foreground">Best quality, UK/EU facilities</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Printify</div>
              <div className="text-sm text-foreground">Multiple providers, lower costs</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-accent mb-1">Gooten</div>
              <div className="text-sm text-foreground">Competitive for certain products</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Quick Wins for New POD Stores
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these high-impact actions when starting out:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Order samples first</h3>
              <p className="text-foreground">Never list products you have not seen and touched. Order samples from your chosen supplier to verify quality before selling.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Start with 5-10 designs, not 50</h3>
              <p className="text-foreground">Test your best designs first. Learn what resonates before investing in a large catalogue.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Set realistic shipping expectations</h3>
              <p className="text-foreground">POD takes longer than Amazon. Display clear production and shipping times on product pages to avoid disappointed customers.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Use quality mockups</h3>
              <p className="text-foreground">Professional mockups showing your designs on real products dramatically improve conversion rates.</p>
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
            POD success works best alongside other fundamentals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-digital-products-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Digital Products Checklist</h3>
              <p className="text-sm text-foreground">Add digital products for higher margins</p>
            </Link>
            <Link href="/checklists/shopify-dropshipping-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Dropshipping Checklist</h3>
              <p className="text-sm text-foreground">Similar model with different products</p>
            </Link>
            <Link href="/checklists/shopify-email-marketing-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Email Marketing Checklist</h3>
              <p className="text-sm text-foreground">Build customer relationships that drive repeat sales</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist</h3>
              <p className="text-sm text-foreground">Drive organic traffic to your products</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-2881229.webp"
        imageAlt="Shopify print on demand business setup"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need POD Store Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can help you set up and optimise your print-on-demand Shopify store.
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
