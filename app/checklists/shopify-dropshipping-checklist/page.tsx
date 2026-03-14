import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Dropshipping Checklist: Complete Setup Guide",
  description:
    "Start dropshipping right with our 72-point Shopify checklist. Find reliable suppliers, choose winning products, set up legals, and launch profitably.",
  alternates: {
    canonical: "/checklists/shopify-dropshipping-checklist",
  },
  openGraph: {
    title: "Shopify Dropshipping Checklist",
    description: "Launch your Shopify dropshipping business the right way with our complete checklist.",
    url: "/checklists/shopify-dropshipping-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Niche & Product Research",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Research profitable niches with demand",
      "Analyse competition in chosen niche",
      "Identify winning products with good margins",
      "Verify products are not trademarked/restricted",
      "Check product reviews on supplier platforms",
      "Order samples to verify quality",
      "Calculate true costs (product + shipping + fees)",
      "Ensure healthy profit margins (30%+ recommended)",
      "Research seasonal trends",
    ],
  },
  {
    title: "Supplier Selection",
    icon: "Truck",
    color: "#0ea5e9",
    items: [
      "Research multiple suppliers per product",
      "Verify supplier reliability (reviews, ratings)",
      "Confirm shipping times to your target market",
      "Understand supplier return policies",
      "Test supplier communication responsiveness",
      "Order samples before listing products",
      "Negotiate pricing for volume orders",
      "Set up backup suppliers for key products",
      "Confirm ePacket or fast shipping available",
    ],
  },
  {
    title: "Store Setup",
    icon: "ShoppingCart",
    color: "#8b5cf6",
    items: [
      "Choose a professional, trustworthy store name",
      "Select a clean, fast theme",
      "Create compelling product descriptions",
      "Use high-quality product images",
      "Set realistic shipping expectations",
      "Create collections for easy browsing",
      "Set up currency and payment options",
      "Configure tax settings correctly",
      "Install essential apps (DSers, Oberlo alternative)",
    ],
  },
  {
    title: "Legal & Business Setup",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Register your business legally",
      "Set up business bank account",
      "Understand tax obligations (VAT if applicable)",
      "Create comprehensive Terms of Service",
      "Write clear Privacy Policy",
      "Create Shipping Policy with honest timeframes",
      "Write Returns & Refunds Policy",
      "Understand consumer protection laws",
      "Consider business insurance",
    ],
  },
  {
    title: "Product Pages",
    icon: "Globe",
    color: "#f59e0b",
    items: [
      "Write unique product descriptions (not supplier copy)",
      "Highlight benefits, not just features",
      "Use persuasive, engaging language",
      "Include all relevant specifications",
      "Show realistic shipping times",
      "Display trust badges",
      "Add customer reviews (when available)",
      "Include size guides where relevant",
      "Use scarcity/urgency ethically",
    ],
  },
  {
    title: "Customer Experience",
    icon: "Shield",
    color: "#ec4899",
    items: [
      "Set up order confirmation emails",
      "Create shipping notification system",
      "Provide order tracking information",
      "Set up customer service email/chat",
      "Create FAQ page addressing common concerns",
      "Plan for handling complaints professionally",
      "Have refund process documented",
      "Set realistic customer expectations",
      "Consider branded packaging inserts",
    ],
  },
  {
    title: "Marketing Setup",
    icon: "BarChart",
    color: "#64748b",
    items: [
      "Set up Facebook/Meta Business account",
      "Install Facebook Pixel",
      "Create TikTok Business account if relevant",
      "Set up Google Analytics",
      "Plan content marketing strategy",
      "Create social media profiles",
      "Set up email marketing (Klaviyo/Shopify Email)",
      "Plan influencer outreach if applicable",
      "Set advertising budget",
    ],
  },
  {
    title: "Pre-Launch Final Checks",
    icon: "Rocket",
    color: "#ef436b",
    items: [
      "Test complete checkout process",
      "Verify all product information is accurate",
      "Confirm supplier can fulfil orders",
      "Test order sync with supplier platform",
      "Check mobile responsiveness",
      "Verify payment processing works",
      "Confirm email notifications send",
      "Have customer service ready",
      "Prepare for first orders",
    ],
  },
];

const STORAGE_KEY = "shopify-dropshipping-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "Is dropshipping on Shopify still profitable in 2024?",
    answer: "Yes, dropshipping remains profitable for those who approach it correctly. The market has matured, meaning generic product stores with poor customer service struggle to compete. Successful dropshippers focus on specific niches, build genuine brands, provide excellent customer support, and invest in marketing that builds long-term customer relationships. Margins have compressed in some categories, so product selection and supplier relationships matter more than ever."
  },
  {
    question: "How much does it cost to start a dropshipping store on Shopify?",
    answer: "Initial costs include your Shopify subscription (starting at 25 pounds monthly), a domain name (10-15 pounds annually), and potentially a premium theme (150-350 pounds one-time). Beyond that, budget for product samples (50-200 pounds), marketing (minimum 500-1000 pounds to test), and essential apps (50-150 pounds monthly). Realistically, plan for 1000-2000 pounds to launch and test properly. Underfunding marketing is a primary cause of failure."
  },
  {
    question: "How do I find reliable dropshipping suppliers?",
    answer: "Start with established platforms like AliExpress for testing, but graduate to direct supplier relationships for scale. Evaluate suppliers by ordering samples, testing communication responsiveness, checking reviews from other sellers, and verifying shipping times with actual orders. For UK customers, consider suppliers with European or UK warehouses to reduce delivery times. Build relationships with backup suppliers for your bestsellers to avoid stockouts."
  },
  {
    question: "How long does shipping take for dropshipping orders?",
    answer: "Standard shipping from Chinese suppliers takes 15-30 days to the UK, though ePacket can reduce this to 10-20 days. European warehouse suppliers offer 5-10 day delivery. Be transparent about shipping times in your policies and product pages. Consider charging for express shipping options. Many failed stores suffer from customer complaints about delivery times that were poorly communicated upfront."
  },
  {
    question: "How do I handle returns and refunds with dropshipping?",
    answer: "Create a clear return policy before launching. For most dropshipping operations, returning physical items to overseas suppliers is impractical. Common approaches include offering refunds without requiring returns for low-value items, providing partial refunds for minor issues, or maintaining UK-based inventory of your bestsellers for easy exchanges. Budget for returns in your margins and document your process to handle disputes consistently."
  },
  {
    question: "What makes a dropshipping store fail?",
    answer: "Common failure points include choosing oversaturated products with thin margins, insufficient marketing budget, poor supplier selection leading to quality issues or slow shipping, copying supplier descriptions rather than writing unique content, ignoring customer service, and unrealistic expectations about timeline to profitability. Most successful dropshippers treat it as a real business requiring months of testing and optimisation, not a quick money scheme."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Dropshipping Checklist",
  description: "Launch your Shopify dropshipping business the right way with our comprehensive checklist covering suppliers, products, legals, and marketing.",
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
    "@id": `${siteConfig.url}/checklists/shopify-dropshipping-checklist`,
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
      name: "Dropshipping Checklist",
      item: `${siteConfig.url}/checklists/shopify-dropshipping-checklist`,
    },
  ],
};
export default function ShopifyDropshippingChecklistPage() {
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
            Shopify Dropshipping Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Starting a dropshipping business? This {totalItems}-point checklist helps you avoid common mistakes and set up for success.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">What Is Dropshipping?</h2>
          <p className="text-lg text-foreground">
            Dropshipping lets you sell products without holding inventory. When a customer orders, your supplier ships directly to them. The simplicity of this model masks the complexity of doing it well. Success requires proper planning, reliable suppliers, and realistic expectations.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* Why Preparation Matters */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Why Proper Preparation Determines Success
          </h2>
          <p className="text-lg text-foreground mb-6">
            The dropshipping failure rate is high because too many people rush in without adequate preparation. They watch success stories online and believe they can replicate results quickly. In reality, the stores that succeed invest significant time in product research, supplier relationships, and building genuine brands.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Startup Budget Breakdown</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Realistic budget for launching a dropshipping store:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Shopify subscription: £25-79/month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Domain name: £10-15/year
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Product samples: £50-200
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Essential apps: £50-150/month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Initial marketing budget: £500-1,000
              </li>
            </ul>
            <p className="text-foreground font-semibold">
              Total to launch properly: £1,000-2,000
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Why Most Dropshipping Stores Fail</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">1.</span>
              <span><strong>Oversaturated products</strong> with thin margins and heavy competition</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">2.</span>
              <span><strong>Insufficient marketing budget</strong> to test and find winning campaigns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">3.</span>
              <span><strong>Poor supplier selection</strong> leading to quality issues and slow shipping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">4.</span>
              <span><strong>Copied supplier descriptions</strong> instead of unique, compelling content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">5.</span>
              <span><strong>Unrealistic expectations</strong> about timeline to profitability</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Keys to Dropshipping Success</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Find Your Niche</h4>
              <p className="text-foreground">Focus on a specific market segment rather than selling everything. Niche stores build loyal customers and face less competition.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Verify Product Quality</h4>
              <p className="text-foreground">Always order samples before listing products. What looks good in photos may disappoint in reality.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Set Honest Expectations</h4>
              <p className="text-foreground">Be transparent about shipping times. Disappointed customers leave bad reviews and request refunds.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Prioritise Customer Service</h4>
              <p className="text-foreground">Excellent service differentiates you from competitors selling the same products. Respond quickly and resolve issues generously.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Build on your dropshipping foundation with these resources:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-facebook-ads-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Facebook Ads →</h3>
              <p className="text-sm text-foreground">Set up effective paid advertising campaigns</p>
            </Link>
            <Link href="/checklists/shopify-google-shopping-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Google Shopping →</h3>
              <p className="text-sm text-foreground">Get products in front of searching buyers</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation →</h3>
              <p className="text-sm text-foreground">Turn more visitors into paying customers</p>
            </Link>
            <Link href="/checklists/shopify-print-on-demand-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Print on Demand →</h3>
              <p className="text-sm text-foreground">Alternative model with custom products</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We can help you build a professional Shopify store that converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get a Quote</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
