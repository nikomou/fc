import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Product Page Checklist: 75-Point Guide",
  description:
    "Build high-converting Shopify product pages with our 75-point checklist. Optimize images, descriptions, reviews, and CTAs to boost sales and conversions.",
  alternates: {
    canonical: "/checklists/shopify-product-page-checklist",
  },
  openGraph: {
    title: "Shopify Product Page Checklist",
    description: "Create high-converting product pages on Shopify with our comprehensive checklist.",
    url: "/checklists/shopify-product-page-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Product Images",
    icon: "Globe",
    color: "#ef436b",
    items: [
      "Minimum 4-6 high-quality images per product",
      "Main image shows product clearly on white/neutral background",
      "Include lifestyle images showing product in use",
      "Show all colour/variant options",
      "Include close-up detail shots",
      "Show scale (product next to common object)",
      "Enable image zoom functionality",
      "Include 360° view or video if possible",
      "Images optimised for fast loading",
      "Consistent image style across catalogue",
    ],
  },
  {
    title: "Product Title & Pricing",
    icon: "FileText",
    color: "#0ea5e9",
    items: [
      "Clear, descriptive product title",
      "Include key attributes (size, colour, material)",
      "Title includes primary keyword naturally",
      "Price displayed prominently",
      "Compare-at price shown for sale items",
      "Currency clear and correct",
      "Unit pricing shown if applicable",
      "Subscription pricing clear if offered",
    ],
  },
  {
    title: "Product Description",
    icon: "FileText",
    color: "#8b5cf6",
    items: [
      "Unique description (not manufacturer copy)",
      "Lead with benefits, follow with features",
      "Scannable format (bullets, short paragraphs)",
      "Answer common customer questions",
      "Include materials/ingredients",
      "Mention care instructions if relevant",
      "Include dimensions/sizing information",
      "Use sensory and emotional language",
      "Include keywords naturally",
      "No spelling or grammar errors",
    ],
  },
  {
    title: "Variant Selection",
    icon: "Settings",
    color: "#10b981",
    items: [
      "All variants clearly displayed",
      "Colour swatches show actual colours",
      "Size options easy to select",
      "Out-of-stock variants clearly marked",
      "Selected variant reflected in images",
      "Price updates when variant changes",
      "Clear size guide link nearby",
      "Stock level indicator if low",
    ],
  },
  {
    title: "Add to Cart Section",
    icon: "ShoppingCart",
    color: "#f59e0b",
    items: [
      "Add to Cart button prominent and contrasting",
      "Buy Now/Buy with Shop Pay option",
      "Quantity selector included",
      "Button text clear (\"Add to Cart\")",
      "Button stays visible on scroll (sticky)",
      "Clear feedback when item added",
      "Continue shopping option after adding",
      "View cart option after adding",
    ],
  },
  {
    title: "Trust & Credibility",
    icon: "Shield",
    color: "#ec4899",
    items: [
      "Customer reviews displayed",
      "Star rating shown",
      "Review count visible",
      "Verified buyer badges",
      "Photo reviews included",
      "Trust badges near Add to Cart",
      "Payment method icons shown",
      "Security badges displayed",
      "Money-back guarantee mentioned",
      "Return policy clearly linked",
    ],
  },
  {
    title: "Additional Information",
    icon: "FileText",
    color: "#64748b",
    items: [
      "Shipping information visible",
      "Delivery estimate shown",
      "Free shipping threshold mentioned",
      "Return policy summary",
      "Size guide easily accessible",
      "FAQ section or accordion",
      "Care instructions included",
      "Warranty information if applicable",
    ],
  },
  {
    title: "Cross-Selling & Upselling",
    icon: "Zap",
    color: "#ef436b",
    items: [
      "Related products section",
      "\"Frequently bought together\" suggestions",
      "\"Customers also viewed\" section",
      "Bundle offers displayed",
      "Accessories or add-ons suggested",
      "Recently viewed products shown",
      "Product recommendations personalised",
    ],
  },
  {
    title: "SEO & Technical",
    icon: "Search",
    color: "#0ea5e9",
    items: [
      "Unique meta title (50-60 characters)",
      "Compelling meta description (150-160 characters)",
      "Clean URL with product name",
      "Image alt text includes keywords",
      "Product schema markup implemented",
      "Page loads quickly (under 3 seconds)",
      "Mobile responsive design",
      "Social sharing buttons included",
    ],
  },
];

const STORAGE_KEY = "shopify-product-page-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How many product images should I include?",
    answer: "Minimum 4-6 high-quality images per product, but more is generally better. Include: main product image on white/neutral background, lifestyle shots showing product in use, detail/close-up shots, all colour/variant options, scale reference, and product dimensions/packaging where relevant. Fashion stores often use 6-8+ images. The goal is to answer every visual question a customer might have."
  },
  {
    question: "Should I write my own product descriptions or use manufacturer copy?",
    answer: "Always write unique descriptions. Manufacturer copy appears on hundreds of other stores (duplicate content, bad for SEO) and usually focuses on specs rather than benefits. Your descriptions should answer 'why buy this?' not just 'what is this?'. Explain who it is for, what problems it solves, how it feels/looks/performs, and why customers love it. Unique descriptions improve both SEO and conversions."
  },
  {
    question: "What makes an Add to Cart button effective?",
    answer: "It should be prominent (stands out visually with contrasting colour), descriptive (text like 'Add to Bag', 'Add to Cart', 'Buy Now'), always visible (consider sticky on mobile), provide clear feedback when clicked (confirmation, cart preview), and positioned logically after key purchase info (price, variants, shipping). Avoid generic 'Submit' or unclear CTAs."
  },
  {
    question: "How important are customer reviews on product pages?",
    answer: "Critically important. Reviews provide social proof, answer objections, improve SEO (fresh content and keywords), and increase conversion rates by 20-40% on average. Display star ratings prominently near the title, show review count, feature photo reviews, ensure verified buyer badges, and make reviews easily accessible. Stores without reviews should proactively request them from early customers."
  },
  {
    question: "Should my product pages work well on mobile?",
    answer: "Absolutely. Mobile accounts for 60-70% of e-commerce traffic. Mobile product pages need: fast-loading images, easy image swiping, large touch-friendly buttons, readable text without zooming, simple variant selection, clear sticky Add to Cart, and minimal typing required. Test your product pages on real mobile devices regularly. Poor mobile experience directly kills conversion rates."
  },
  {
    question: "How can I reduce product page abandonment?",
    answer: "Address common objections directly on the page: show shipping costs/timing, highlight return policy, display trust badges and security seals, include size guides, provide clear product specifications, show stock availability, add customer reviews, include FAQs or expandable content sections, and ensure fast page load. Every friction point you remove increases conversions."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Product Page Checklist",
  description: "Create high-converting product pages on Shopify with our comprehensive checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-08",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-product-page-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Product Page Checklist", item: `${siteConfig.url}/checklists/shopify-product-page-checklist` },
  ],
};
export default function ShopifyProductPageChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>14 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Product Page Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Your product pages are where buying decisions happen. Use this {totalItems}-point checklist to create pages that convert browsers into buyers.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Product Pages Matter</h2>
          <p className="text-lg text-foreground">
            Your product page is where commerce happens. Visitors decide to buy or leave on product pages. Every element either builds confidence and desire or introduces friction and doubt. Stores with comprehensive product pages routinely see 2-3x higher conversion rates.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Impact of Product Pages */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Product Page Revenue Impact
          </h2>
          <p className="text-lg text-foreground mb-6">
            Unlike informational pages, product pages face a binary outcome: add to cart or bounce. This makes them ideal for methodical optimisation with directly measurable results.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Conversion Mathematics</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a store with:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                10,000 monthly product page visits
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                1.5% current conversion rate = 150 orders
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                £60 average order value
              </li>
            </ul>
            <p className="text-foreground">
              Improving conversion to 2.5% yields 250 orders, or <strong className="text-foreground-dark">100 additional orders and £6,000 extra monthly revenue</strong>. This requires no additional traffic or ad spend.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Essential Product Page Elements</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">1.</span>
              <span><strong>Multiple high-quality images</strong> showing product from every relevant angle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">2.</span>
              <span><strong>Benefit-focused descriptions</strong> that answer why to buy, not just what it is</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">3.</span>
              <span><strong>Customer reviews</strong> with photos providing social proof</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">4.</span>
              <span><strong>Clear shipping and returns</strong> information removing purchase barriers</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Product Page Mistakes</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Single product image</strong> leaving visual questions unanswered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Manufacturer copy</strong> that appears on dozens of other sites</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>No reviews</strong> forcing customers to trust blindly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Hidden shipping costs</strong> causing checkout abandonment</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            High-Impact Product Page Improvements
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these changes for immediate conversion impact:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Add more product images</h3>
              <p className="text-foreground">Include 4-6 images minimum: product on white background, lifestyle shots, close-up details, all variants, and scale reference. Answer every visual question.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Display reviews prominently</h3>
              <p className="text-foreground">Show star rating and review count near the product title. Feature photo reviews. Reviews increase conversion by 20-40% on average.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Show shipping information early</h3>
              <p className="text-foreground">Display delivery estimate and free shipping threshold before the Add to Cart button. Hidden shipping costs cause abandonment.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Make Add to Cart sticky on mobile</h3>
              <p className="text-foreground">Keep the purchase button visible as users scroll through product information. Remove friction from the buying action.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Checklists */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            Product page optimisation works best alongside these improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">CRO Checklist →</h3>
              <p className="text-sm text-foreground">Comprehensive conversion optimisation across your store</p>
            </Link>
            <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Checkout Optimisation →</h3>
              <p className="text-sm text-foreground">Convert more add-to-carts into completed purchases</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Get more organic traffic to your product pages</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation →</h3>
              <p className="text-sm text-foreground">Perfect product pages for mobile shoppers</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection faqs={faqs} />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Product Pages?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your product pages and implement changes that drive more conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Help</Button>
            <Button href="/shopify-store-audit" variant="outline-light" size="lg" icon={false}>Book Store Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
