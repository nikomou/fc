import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Mobile Optimization: Convert 70% of Traffic",
  description:
    "Optimize your Shopify store for mobile with our expert checklist. Covers mobile UX, speed, touch targets, express checkout and responsive design. Convert mobile traffic.",
  alternates: {
    canonical: "/checklists/shopify-mobile-optimisation-checklist",
  },
  openGraph: {
    title: "Shopify Mobile Optimisation Checklist",
    description: "Optimise your Shopify store for mobile shoppers with our comprehensive checklist.",
    url: "/checklists/shopify-mobile-optimisation-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Mobile Design Fundamentals",
    icon: "Globe",
    color: "#ef436b",
    items: [
      "Responsive theme that adapts to screen size",
      "Text readable without zooming (16px minimum)",
      "No horizontal scrolling required",
      "Adequate spacing between elements",
      "Touch targets at least 44x44 pixels",
      "Buttons easy to tap with thumb",
      "Content prioritised for mobile (most important first)",
      "Hero images optimised for portrait orientation",
      "Clean, uncluttered layout",
    ],
  },
  {
    title: "Mobile Navigation",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "Hamburger menu or clear mobile nav",
      "Search icon prominently displayed",
      "Search bar easy to access",
      "Menu items large enough to tap",
      "Mega menus work on touch devices",
      "Back button/breadcrumbs functional",
      "Footer navigation accessible",
      "Sticky header for easy navigation",
      "Cart icon visible with item count",
    ],
  },
  {
    title: "Mobile Product Pages",
    icon: "ShoppingCart",
    color: "#8b5cf6",
    items: [
      "Product images swipeable",
      "Image zoom works on mobile",
      "Variant selection easy on touch",
      "Colour swatches large enough",
      "Add to Cart button sticky/always visible",
      "Buy Now button accessible",
      "Product description expandable",
      "Reviews section mobile-friendly",
      "Related products swipeable",
    ],
  },
  {
    title: "Mobile Checkout",
    icon: "CreditCard",
    color: "#10b981",
    items: [
      "Express checkout options (Shop Pay, Apple Pay)",
      "Numeric keyboard for card/phone fields",
      "Form fields appropriately sized",
      "Autofill supported",
      "Clear error messages",
      "Progress indicator visible",
      "Order summary expandable",
      "Easy to edit cart from checkout",
      "Guest checkout available",
    ],
  },
  {
    title: "Mobile Speed",
    icon: "Zap",
    color: "#f59e0b",
    items: [
      "Page load under 3 seconds on 4G",
      "Images lazy loaded",
      "Images properly sized for mobile",
      "Critical CSS inlined",
      "JavaScript deferred where possible",
      "Fonts optimised (WOFF2, subset)",
      "Third-party scripts minimised",
      "AMP pages considered for content",
    ],
  },
  {
    title: "Mobile Forms & Input",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Form labels above fields (not placeholder only)",
      "Input types correct (email, tel, number)",
      "Appropriate keyboard displayed",
      "Error messages clear and visible",
      "Success feedback obvious",
      "Autocomplete enabled",
      "Address lookup/autocomplete",
      "Form submission works reliably",
    ],
  },
  {
    title: "Mobile-Specific Features",
    icon: "Globe",
    color: "#64748b",
    items: [
      "Click-to-call phone numbers",
      "Click-to-email links",
      "Maps link to native apps",
      "Social sharing optimised for mobile",
      "Push notification prompts (if using)",
      "Add to home screen prompt considered",
      "Mobile wallet integration",
      "QR code functionality if relevant",
    ],
  },
  {
    title: "Testing & Validation",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Test on real iOS devices",
      "Test on real Android devices",
      "Test on different screen sizes",
      "Test with slow 3G connection",
      "Use Chrome DevTools mobile emulator",
      "Check Google Mobile-Friendly Test",
      "Review Google Search Console mobile usability",
      "Test complete purchase journey on mobile",
      "Monitor mobile vs desktop conversion rates",
    ],
  },
];

const STORAGE_KEY = "shopify-mobile-optimisation-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What percentage of e-commerce traffic is mobile?",
    answer: "Mobile accounts for 60-75% of e-commerce traffic globally, though conversion rates traditionally lag desktop. However, the gap is narrowing. Mobile conversion rates now reach 2-3% compared to desktop's 3-5% for well-optimised stores. Given mobile's traffic dominance, even slightly lower conversion rates still means mobile drives significant revenue. Stores ignoring mobile optimisation leave substantial money on the table."
  },
  {
    question: "Why do mobile conversion rates lag desktop?",
    answer: "Several factors contribute: smaller screens make browsing and form-filling harder, mobile networks are slower and less reliable creating frustration, users are often on-the-go with limited attention, trust signals are less visible on small screens, and many stores still treat mobile as an afterthought. However, stores that truly optimise for mobile (fast load times, simple navigation, express checkout, large touch targets) achieve mobile conversion rates approaching desktop."
  },
  {
    question: "Should I build a mobile app or focus on mobile web?",
    answer: "For most Shopify stores, focus on mobile web optimisation first. Mobile web reaches everyone immediately without app downloads, works across all devices, requires less maintenance, and integrates seamlessly with marketing campaigns. Only consider a native app if you have a loyal customer base making frequent repeat purchases, unique features requiring native functionality, or budget for ongoing app development and maintenance. Many successful e-commerce businesses never build apps."
  },
  {
    question: "How do I test mobile performance if I do not have many devices?",
    answer: "Use Chrome DevTools device emulation for initial testing (free, covers many devices and network conditions), run Google PageSpeed Insights mobile tests (free, real-world data), check Google Mobile-Friendly Test (free), use BrowserStack or similar services for real device testing (paid, comprehensive), ask friends and family to test on their devices (free, provides real user feedback). At minimum, test on one iOS device and one Android device with real 4G connections."
  },
  {
    question: "What is the most impactful mobile optimisation?",
    answer: "If forced to choose one: implement express checkout options (Shop Pay, Apple Pay, Google Pay). These single-tap checkout solutions bypass form filling entirely, which is the biggest mobile friction point. Data shows express checkout can increase mobile conversion rates by 30-50%. Combined with fast page loads and large touch targets, express checkout transforms mobile from a necessary evil to a competitive advantage."
  },
  {
    question: "Does Google really prioritise mobile for SEO?",
    answer: "Yes. Google uses mobile-first indexing, meaning they primarily crawl and index the mobile version of your store. If your mobile site is slow, has thin content, or provides poor user experience, your search rankings suffer, even for desktop searches. Mobile page speed is a direct ranking factor. Core Web Vitals are measured on mobile. Mobile-friendly sites rank higher in mobile search results. Mobile SEO is not optional; it is fundamental."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Mobile Optimisation Checklist",
  description: "Optimise your Shopify store for mobile shoppers with our comprehensive checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-20",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-mobile-optimisation-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Mobile Optimisation", item: `${siteConfig.url}/checklists/shopify-mobile-optimisation-checklist` },
  ],
};
export default function ShopifyMobileOptimisationChecklistPage() {
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
            <span>12 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Mobile Optimisation Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Over 70% of e-commerce traffic comes from mobile. Use this {totalItems}-point checklist to ensure your store delivers a flawless mobile experience.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Mobile Matters</h2>
          <p className="text-lg text-foreground">
            Mobile devices account for 60-75% of e-commerce traffic and over 50% of transactions. Yet many stores still treat mobile as secondary to desktop. This checklist covers the eight critical areas that separate mobile-optimised stores from those losing revenue to poor mobile experience.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Business Case */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Business Case for Mobile-First
          </h2>
          <p className="text-lg text-foreground mb-6">
            True mobile optimisation means designing specifically for how people actually use phones: one-handed operation, thumb-driven navigation, limited attention whilst multitasking, and variable network conditions.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Mobile Revenue Opportunity</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a store with:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                50,000 monthly visitors (35,000 mobile, 15,000 desktop)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Mobile conversion: 1.8%, Desktop conversion: 3.5%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                Average order value: £65
              </li>
            </ul>
            <p className="text-foreground mb-2">
              Current revenue: Mobile £40,950 + Desktop £34,125 = <strong>£75,075 monthly</strong>
            </p>
            <p className="text-foreground">
              Improving mobile conversion to 2.5%: Mobile £56,875 + Desktop £34,125 = <strong className="text-foreground-dark">£91,000 monthly</strong> (£191,100 additional annually)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Key Mobile Metrics to Track</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;3s</div>
              <div className="text-sm text-foreground">Page load on 4G mobile</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">44px</div>
              <div className="text-sm text-foreground">Minimum touch target size</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">16px</div>
              <div className="text-sm text-foreground">Minimum readable text size</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Common Mobile Issues</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Tiny touch targets</strong> that require precision tapping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Slow page loads</strong> from unoptimised images and scripts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Complex forms</strong> requiring extensive typing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>No express checkout</strong> forcing full form completion</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            High-Impact Mobile Improvements
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these changes for the greatest mobile conversion impact:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Enable express checkout</h3>
              <p className="text-foreground">Shop Pay, Apple Pay, and Google Pay bypass form filling entirely. This single change can lift mobile conversions by 30-50%.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Sticky Add to Cart button</h3>
              <p className="text-foreground">Keep the Add to Cart button visible as users scroll through product details. Removing this friction increases add-to-cart rates.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Optimise images for mobile</h3>
              <p className="text-foreground">Serve appropriately sized images. A 2000px hero image loaded on a 375px screen wastes bandwidth and slows load times.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Increase touch target sizes</h3>
              <p className="text-foreground">Ensure all buttons, links, and form elements are at least 44x44 pixels. Test with your thumb, not your mouse cursor.</p>
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
            Mobile optimisation works best alongside these improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Comprehensive performance improvements for all devices</p>
            </Link>
            <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Checkout Optimisation →</h3>
              <p className="text-sm text-foreground">Reduce cart abandonment on mobile and desktop</p>
            </Link>
            <Link href="/checklists/shopify-product-page-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Product Pages →</h3>
              <p className="text-sm text-foreground">Optimise product pages for mobile conversions</p>
            </Link>
            <Link href="/checklists/shopify-cro-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation →</h3>
              <p className="text-sm text-foreground">Comprehensive CRO across your entire store</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-6006785.webp"
        imageAlt="Shopify mobile optimisation and responsive design"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Mobile Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your mobile experience and implement improvements that boost conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Optimise for Mobile</Button>
            <Button href="/shopify-store-audit" variant="outline-light" size="lg" icon={false}>Book Store Audit</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
