import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify CRO Checklist: Increase Conversion Rates",
  description:
    "Boost your Shopify conversion rate with our expert CRO checklist. Covers product pages, checkout optimization, UX, trust signals and A/B testing. Start converting.",
  alternates: {
    canonical: "/checklists/shopify-cro-checklist",
  },
  openGraph: {
    title: "Shopify Conversion Rate Optimisation Checklist",
    description: "Increase your Shopify store's conversion rate with our comprehensive CRO checklist.",
    url: "/checklists/shopify-cro-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Homepage Optimisation",
    icon: "Globe",
    color: "#ef436b",
    items: [
      "Clear value proposition above the fold",
      "Primary CTA visible without scrolling",
      "Hero image showcases products in use",
      "Navigation is clear and logical",
      "Search bar prominently displayed",
      "Featured products/collections highlighted",
      "Social proof visible (reviews, testimonials)",
      "Trust badges displayed",
      "Mobile layout is clean and functional",
    ],
  },
  {
    title: "Product Page Optimisation",
    icon: "ShoppingCart",
    color: "#0ea5e9",
    items: [
      "High-quality product images (multiple angles)",
      "Zoom functionality on images",
      "Product video included where possible",
      "Clear, compelling product title",
      "Scannable product description with benefits",
      "Price clearly displayed",
      "Add to cart button prominent and contrasting",
      "Stock availability shown",
      "Size guide easily accessible",
      "Shipping information visible",
      "Customer reviews displayed",
      "Related/recommended products shown",
      "Clear return policy information",
    ],
  },
  {
    title: "Trust & Credibility",
    icon: "Shield",
    color: "#8b5cf6",
    items: [
      "SSL certificate active (padlock visible)",
      "Payment method icons displayed",
      "Customer reviews throughout site",
      "Trust badges (secure checkout, guarantees)",
      "About page with real company information",
      "Contact information easily findable",
      "Social media presence linked",
      "Press mentions or awards displayed",
      "Clear return and refund policy",
      "Privacy policy easily accessible",
    ],
  },
  {
    title: "Navigation & Search",
    icon: "Search",
    color: "#10b981",
    items: [
      "Main navigation limited to key categories",
      "Mega menu for stores with large catalogues",
      "Search bar in header on all pages",
      "Search autocomplete with product suggestions",
      "Search results show product images",
      "Filters available on collection pages",
      "Breadcrumb navigation enabled",
      "Footer contains helpful links",
      "404 page helps users find what they need",
    ],
  },
  {
    title: "Cart & Mini-Cart",
    icon: "ShoppingCart",
    color: "#f59e0b",
    items: [
      "Cart icon shows item count",
      "Mini-cart/slide-out cart for quick view",
      "Product images visible in cart",
      "Easy quantity adjustment",
      "Remove item option clear",
      "Subtotal clearly displayed",
      "Shipping estimate shown",
      "Proceed to checkout button prominent",
      "Continue shopping option available",
      "Cross-sell suggestions included",
    ],
  },
  {
    title: "Checkout Optimisation",
    icon: "CreditCard",
    color: "#ec4899",
    items: [
      "Guest checkout available",
      "Progress indicator shown",
      "Form fields minimised",
      "Autofill supported",
      "Clear error messages",
      "Multiple payment options",
      "Express checkout (Shop Pay, Apple Pay)",
      "Order summary visible throughout",
      "Security reassurances displayed",
      "Discount code field visible but not distracting",
    ],
  },
  {
    title: "Mobile Experience",
    icon: "Zap",
    color: "#64748b",
    items: [
      "Touch targets large enough (44px minimum)",
      "No horizontal scrolling required",
      "Forms easy to complete on mobile",
      "Images load quickly on mobile",
      "Sticky add to cart on product pages",
      "Mobile menu easy to navigate",
      "Phone number clickable to call",
      "Text readable without zooming",
      "Buttons and CTAs thumb-friendly",
    ],
  },
  {
    title: "Page Speed & Performance",
    icon: "Zap",
    color: "#ef436b",
    items: [
      "Page load time under 3 seconds",
      "Images optimised and compressed",
      "Lazy loading enabled for images",
      "Unnecessary apps removed",
      "Third-party scripts minimised",
      "Core Web Vitals passing",
      "No layout shift during loading",
      "Critical CSS inlined",
    ],
  },
];

const STORAGE_KEY = "shopify-cro-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What's a good conversion rate for a Shopify store?",
    answer: "Average Shopify conversion rates range from 1.5% to 3.5%, depending on industry, price point, and traffic sources. Fashion and beauty tend towards 2-3%, whilst electronics and furniture often sit at 1-2%. However, benchmarks matter less than improvement trajectory. A store improving from 1.8% to 2.3% has increased revenue by 28% without additional traffic. That is what matters."
  },
  {
    question: "Should I focus on homepage, product pages, or checkout first?",
    answer: "Start with product pages. They are where buying decisions happen and improvements show immediate ROI. Next, optimise checkout to reduce cart abandonment. Homepage optimisation matters less for stores where most traffic lands directly on product pages from search or ads. Use analytics to identify your biggest drop-off points and optimise those first."
  },
  {
    question: "How do I know which CRO changes to prioritise?",
    answer: "Use the ICE framework: Impact (how much will this improve conversions?), Confidence (how certain are you it will work?), and Ease (how difficult to implement?). Score each potential change 1-10 on each dimension, multiply the scores, and prioritise high-scoring items. Also review heatmaps and session recordings to identify obvious friction points."
  },
  {
    question: "Should I A/B test every change?",
    answer: "Ideally yes, but it is not always practical. A/B testing requires sufficient traffic (typically 1,000+ conversions per variant per month for statistical significance). For smaller stores, implement best practices from this checklist systematically, measure overall conversion rate trends, and test major changes. Fixing obvious issues (broken mobile buttons, missing trust badges) rarely needs testing."
  },
  {
    question: "How long does it take to see CRO results?",
    answer: "Some improvements show immediate results. Fixing broken checkout flows or adding missing payment options can boost conversions overnight. Others (trust building, content improvements, navigation changes) may take 2-4 weeks as Google re-crawls pages and customers encounter changes. Measure monthly trends rather than daily fluctuations. Expect meaningful results within 30-60 days of systematic optimisation."
  },
  {
    question: "Can CRO help if my traffic is the problem?",
    answer: "CRO amplifies traffic quality but cannot fix fundamental traffic issues. If you are attracting irrelevant visitors (wrong keywords, poorly targeted ads), conversion optimisation hits a ceiling. However, even stores with traffic problems benefit from CRO. Better conversion rates improve advertising ROI, making it economical to acquire more traffic. Fix conversion rates first, then scale traffic."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Conversion Rate Optimisation Checklist",
  description: "Increase your Shopify store's conversion rate with our comprehensive CRO checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-14",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-cro-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "CRO Checklist", item: `${siteConfig.url}/checklists/shopify-cro-checklist` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ShopifyCROChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>15 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Conversion Rate Optimisation Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Every visitor that leaves without buying is lost revenue. Use this {totalItems}-point checklist to identify and fix conversion killers on your Shopify store.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Conversion Rate Matters</h2>
          <p className="text-lg text-foreground">
            Improving your conversion rate multiplies the value of every visitor you already attract. A store improving from 2% to 2.5% effectively gains 25% more revenue without spending another pound on marketing.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Compounding Value */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Compounding Value of Conversion Improvements
          </h2>
          <p className="text-lg text-foreground mb-6">
            A store with 50,000 monthly visitors, 2% conversion rate, and 70 pounds average order value generates 70,000 pounds monthly revenue. Improving conversion to 2.6% yields 91,000 pounds monthly, an additional 252,000 pounds annually without increasing traffic costs.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Revenue Impact Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-foreground mb-1">Before optimisation</p>
                <p className="text-2xl font-bold text-foreground-dark">2.0%</p>
                <p className="text-sm text-foreground">1,000 orders/month</p>
              </div>
              <div>
                <p className="text-sm text-foreground mb-1">After optimisation</p>
                <p className="text-2xl font-bold text-accent">2.6%</p>
                <p className="text-sm text-foreground">1,300 orders/month</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-foreground">
                <strong className="text-foreground-dark">Additional annual revenue:</strong> 252,000 pounds achieved without increasing marketing spend
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Why CRO Benefits Everything</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Lower customer acquisition costs</strong> as more existing traffic converts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Better ad ROI</strong> across Google, Facebook, and all paid channels</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Improved SEO signals</strong> through better engagement metrics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span><strong>Higher customer lifetime value</strong> from better first impressions</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">CRO Priority Order</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</span>
              <span className="text-foreground"><strong>Product pages</strong> where buying decisions happen</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</span>
              <span className="text-foreground"><strong>Checkout flow</strong> to reduce cart abandonment</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">3</span>
              <span className="text-foreground"><strong>Collection pages</strong> to improve product discovery</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">4</span>
              <span className="text-foreground"><strong>Homepage</strong> for stores with significant direct traffic</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            High-Impact Quick Wins
          </h2>
          <p className="text-lg text-foreground mb-6">
            Start with these proven conversion improvements:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Improve product photography</h3>
              <p className="text-foreground">High-quality images from multiple angles with zoom functionality can increase conversions by 20-30%.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Add customer reviews</h3>
              <p className="text-foreground">Products with reviews convert 270% better than those without. Display them prominently on product pages.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Make CTAs stand out</h3>
              <p className="text-foreground">Your Add to Cart button should be the most visible element on the page. Use contrasting colours and clear copy.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Speed up your site</h3>
              <p className="text-foreground">Every 1-second delay reduces conversions by 7%. Compress images, remove unused apps, and optimise code.</p>
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
            Deep-dive into specific CRO areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-product-page-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Product Page Checklist →</h3>
              <p className="text-sm text-foreground">Detailed optimisation for product pages</p>
            </Link>
            <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Checkout Optimisation →</h3>
              <p className="text-sm text-foreground">Reduce abandonment at the final step</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Faster sites convert better</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation →</h3>
              <p className="text-sm text-foreground">Convert your mobile majority</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need CRO Expertise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store and implement changes that drive measurable conversion improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get CRO Help</Button>
            <Button href="/shopify-store-audit" variant="outline-light" size="lg" icon={false}>Book Store Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
