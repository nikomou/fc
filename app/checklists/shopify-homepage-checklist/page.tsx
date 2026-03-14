import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Homepage Checklist: 73-Point Guide",
  description:
    "Build a high-converting Shopify homepage with our 73-point checklist. Covers hero sections, trust signals, product showcases, and mobile optimisation.",
  alternates: {
    canonical: "/checklists/shopify-homepage-checklist",
  },
  openGraph: {
    title: "Shopify Homepage Checklist",
    description: "Create a high-converting Shopify homepage with our comprehensive checklist.",
    url: "/checklists/shopify-homepage-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Hero Section",
    icon: "Globe",
    color: "#ef436b",
    items: [
      "Clear, compelling headline that communicates value",
      "Subheadline that supports the main message",
      "High-quality hero image or video",
      "Primary CTA button above the fold",
      "CTA text is action-oriented (Shop Now, Explore, etc.)",
      "Hero loads quickly (optimised images)",
      "Mobile hero is appropriately sized",
      "Seasonal/promotional messaging if relevant",
    ],
  },
  {
    title: "Navigation & Header",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Logo links to homepage",
      "Main navigation is clear and organised",
      "Search bar is prominent and functional",
      "Cart icon visible with item count",
      "Account/login link accessible",
      "Mobile menu works smoothly",
      "Announcement bar for promotions",
      "Sticky header on scroll (optional)",
      "Contact/support link easily found",
    ],
  },
  {
    title: "Trust & Credibility",
    icon: "Shield",
    color: "#8b5cf6",
    items: [
      "Trust badges displayed (secure checkout, guarantees)",
      "Payment method icons shown",
      "Customer reviews or testimonials visible",
      "Star ratings displayed",
      "Press mentions or awards if applicable",
      "Social proof (customer count, orders shipped)",
      "Money-back guarantee mentioned",
      "Clear return policy link",
    ],
  },
  {
    title: "Product Showcases",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "Featured products section",
      "Best sellers collection",
      "New arrivals section",
      "Products show price clearly",
      "Quick add-to-cart functionality",
      "Product images are high quality",
      "Sale/discount badges visible",
      "View all/shop collection links",
    ],
  },
  {
    title: "Collections & Categories",
    icon: "FileText",
    color: "#f59e0b",
    items: [
      "Main collections prominently displayed",
      "Collection images are engaging",
      "Clear collection titles",
      "Easy navigation to all categories",
      "Gift guides or curated collections",
      "Seasonal collections if relevant",
      "Shop by category section",
      "Visual hierarchy guides browsing",
    ],
  },
  {
    title: "Brand Story & Content",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "About us or brand story section",
      "Unique selling propositions highlighted",
      "Mission or values communicated",
      "Behind-the-scenes or process content",
      "User-generated content or Instagram feed",
      "Blog or content preview",
      "Video content if available",
      "Founder story if relevant",
    ],
  },
  {
    title: "Conversion Elements",
    icon: "Zap",
    color: "#64748b",
    items: [
      "Email signup with incentive",
      "Exit intent popup configured",
      "Urgency elements (limited stock, time-sensitive)",
      "Free shipping threshold displayed",
      "Recently viewed products",
      "Personalised recommendations",
      "Quick view functionality",
      "Wishlist option available",
    ],
  },
  {
    title: "Footer",
    icon: "FileText",
    color: "#ef436b",
    items: [
      "Contact information clearly displayed",
      "Customer service links (FAQ, Returns, Shipping)",
      "About and policy pages linked",
      "Social media links",
      "Email newsletter signup",
      "Payment methods displayed",
      "Copyright and legal links",
      "Site map or navigation links",
    ],
  },
  {
    title: "Performance & Technical",
    icon: "Zap",
    color: "#0ea5e9",
    items: [
      "Page loads in under 3 seconds",
      "Images are lazy loaded",
      "Above-the-fold content loads first",
      "No layout shift during load",
      "Works on all major browsers",
      "Mobile responsive design",
      "Accessibility basics covered",
      "Analytics tracking installed",
    ],
  },
];

const STORAGE_KEY = "shopify-homepage-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How much content should my homepage have?",
    answer: "Balance is key. Your homepage should communicate your value proposition, showcase key products/collections, build trust, and guide navigation, all without overwhelming visitors. Aim for 5-8 distinct sections. Fashion and lifestyle brands often need more visual content (8-10 sections), whilst niche B2B stores might need fewer (4-6 sections). Test scroll depth in analytics to see how far visitors actually scroll."
  },
  {
    question: "Should I use a slideshow or static hero image?",
    answer: "Static hero images typically perform better than slideshows. Slideshows often add page weight (slower), create layout shift (bad for Core Web Vitals), and dilute messaging (visitors see different messages). If you must use a slideshow, limit it to 2-3 slides, ensure fast transitions, preload images, and make the first slide your strongest message. Better yet, use a single compelling hero image with a clear CTA."
  },
  {
    question: "How many products should I feature on my homepage?",
    answer: "Feature 8-16 products across 2-3 sections (Featured, Best Sellers, New Arrivals). More than 20 products creates choice paralysis and slows page load. Less than 8 feels sparse and does not give visitors enough browsing options. Use 'View All' links to direct visitors to collection pages for deeper browsing. Focus homepage real estate on your highest-converting or highest-margin products."
  },
  {
    question: "Do I need an email popup on my homepage?",
    answer: "Email signup is valuable, but aggressive popups hurt conversion rates. Instead of immediate popups, use exit-intent popups (trigger when mouse moves toward back button), time-delayed popups (after 30-60 seconds), or scroll-triggered popups (after 50% page scroll). Always offer value (10% off, free shipping, exclusive content) rather than just asking for emails. Mobile popups must be especially careful, as large popups on small screens are extremely disruptive."
  },
  {
    question: "Should my homepage be optimised for SEO?",
    answer: "Yes, but with realistic expectations. Most traffic to Shopify stores lands on product/collection pages from search, not homepages. However, your homepage ranks for branded searches and sets site-wide technical SEO foundations. Write a compelling title tag (50-60 chars) with your brand name and primary offering. Add a unique meta description. Include H1 tag. Implement schema markup. But do not stuff your homepage with excessive SEO content at the expense of user experience."
  },
  {
    question: "How do I know if my homepage is working?",
    answer: "Track these metrics: bounce rate (aim for under 50%), average session duration (target 1+ minute), pages per session (target 2+), scroll depth (50%+ should scroll beyond hero), click-through rate to product pages (10%+), and ultimately conversion rate. Use heatmaps to see what visitors click and where they spend time. Session recordings reveal friction points. A/B test major changes to hero messaging, product arrangements, and CTAs."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Homepage Checklist",
  description: "Create a high-converting Shopify homepage with our comprehensive checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-18",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-homepage-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Homepage Checklist", item: `${siteConfig.url}/checklists/shopify-homepage-checklist` },
  ],
};
export default function ShopifyHomepageChecklistPage() {
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
            Shopify Homepage Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Your homepage is your digital storefront. Use this {totalItems}-point checklist to create a homepage that converts visitors into customers.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Your Homepage Matters</h2>
          <p className="text-lg text-foreground">
            Users form opinions about websites in just 50 milliseconds. Your homepage must communicate who you are, what you sell, and why visitors should care. This checklist covers the nine elements that separate high-converting homepages from those that leak revenue.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Role of Your Homepage */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Strategic Role of Your Homepage
          </h2>
          <p className="text-lg text-foreground mb-6">
            Your homepage serves multiple audiences: branded search traffic, social media visitors, returning customers, and first-time browsers. Each needs clear navigation to their goal.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">What Your Homepage Must Do</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">1.</span>
              <span><strong>Communicate value instantly</strong> with a clear headline and supporting imagery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">2.</span>
              <span><strong>Build trust quickly</strong> through reviews, badges, and social proof</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">3.</span>
              <span><strong>Guide product discovery</strong> with featured collections and categories</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold text-lg">4.</span>
              <span><strong>Enable easy navigation</strong> to products, collections, and information</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Homepage Impact on Revenue</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a store with:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                20,000 monthly homepage visitors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Current homepage-to-product click rate: 25%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Site conversion rate: 2%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Average order value: £55
              </li>
            </ul>
            <p className="text-foreground">
              Improving click-through from 25% to 35% generates 2,000 additional product page visits. At 2% conversion, that is <strong className="text-foreground-dark">40 extra orders or £2,200 additional monthly revenue</strong>.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Homepage Mistakes</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Unclear value proposition</strong> that fails to explain what you sell</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Slow-loading slideshows</strong> that hurt Core Web Vitals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Too many competing CTAs</strong> creating decision paralysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Missing trust signals</strong> that leave visitors uncertain</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Key Elements */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            High-Impact Homepage Elements
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these elements for the greatest conversion impact:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Hero section with clear CTA</h3>
              <p className="text-foreground">Your hero is seen by 100% of visitors. Use a compelling headline, quality imagery, and one primary action button above the fold.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Trust signals visible early</h3>
              <p className="text-foreground">Display review stars, trust badges, or customer count near the top. First-time visitors need reassurance before exploring.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Featured products and collections</h3>
              <p className="text-foreground">Showcase 8-12 products with clear pricing. Include bestsellers, new arrivals, and seasonal highlights.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Fast load time</h3>
              <p className="text-foreground">Homepage should load in under 3 seconds. Optimise hero images, lazy load below-fold content, and limit heavy scripts.</p>
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
            Combine homepage optimisation with these complementary improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">CRO Checklist →</h3>
              <p className="text-sm text-foreground">Comprehensive conversion rate optimisation strategies</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation →</h3>
              <p className="text-sm text-foreground">Ensure your homepage works perfectly on mobile devices</p>
            </Link>
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Make your homepage load faster for better conversions</p>
            </Link>
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Optimise your homepage for search visibility</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-3856027.webp"
        imageAlt="Shopify homepage design and optimisation checklist"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Homepage Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your homepage and implement changes that drive more conversions.
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
