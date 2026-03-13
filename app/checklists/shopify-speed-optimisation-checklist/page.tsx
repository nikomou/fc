import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Speed Optimization: Core Web Vitals Guide",
  description:
    "Speed up your Shopify store with our expert checklist. Improve Core Web Vitals, reduce load times, and boost conversions. Get under 3 seconds page load.",
  alternates: {
    canonical: "/checklists/shopify-speed-optimisation-checklist",
  },
  openGraph: {
    title: "Shopify Speed Optimisation Checklist",
    description: "Make your Shopify store faster with our comprehensive speed optimisation checklist.",
    url: "/checklists/shopify-speed-optimisation-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Image Optimisation",
    icon: "Globe",
    color: "#ef436b",
    items: [
      "Use WebP or AVIF format where possible",
      "Compress images before uploading",
      "Use appropriate image dimensions (not oversized)",
      "Enable lazy loading for below-fold images",
      "Use responsive images (srcset)",
      "Optimise hero/banner images (largest impact)",
      "Remove unused product images",
      "Use Shopify's CDN for all images",
      "Consider removing decorative images",
      "Use CSS for simple graphics instead of images",
    ],
  },
  {
    title: "App Audit",
    icon: "Settings",
    color: "#0ea5e9",
    items: [
      "List all installed apps",
      "Identify apps not actively used",
      "Remove unused apps completely",
      "Check if app code remains after uninstall",
      "Review apps loading on every page vs specific pages",
      "Consider consolidating apps with overlapping features",
      "Test site speed with apps disabled",
      "Contact app developers about performance issues",
      "Look for lighter alternatives to heavy apps",
    ],
  },
  {
    title: "Theme Optimisation",
    icon: "Zap",
    color: "#8b5cf6",
    items: [
      "Use a well-coded, lightweight theme",
      "Remove unused theme features/sections",
      "Minimise custom fonts (max 2 families)",
      "Use system fonts where possible",
      "Preload critical fonts",
      "Remove unused CSS",
      "Minimise JavaScript",
      "Defer non-critical JavaScript",
      "Inline critical CSS",
      "Use native lazy loading attributes",
    ],
  },
  {
    title: "Third-Party Scripts",
    icon: "FileText",
    color: "#10b981",
    items: [
      "Audit all third-party scripts",
      "Remove tracking scripts you don't use",
      "Load analytics asynchronously",
      "Defer chat widgets until needed",
      "Lazy load review widgets",
      "Consider server-side tracking where possible",
      "Consolidate marketing pixels",
      "Use Google Tag Manager efficiently",
      "Remove duplicate tracking codes",
    ],
  },
  {
    title: "Core Web Vitals",
    icon: "BarChart",
    color: "#f59e0b",
    items: [
      "Measure LCP (Largest Contentful Paint) - aim under 2.5s",
      "Optimise hero image/element for LCP",
      "Measure FID (First Input Delay) - aim under 100ms",
      "Reduce JavaScript execution time",
      "Measure CLS (Cumulative Layout Shift) - aim under 0.1",
      "Set dimensions on images and embeds",
      "Avoid inserting content above existing content",
      "Use font-display: swap for web fonts",
    ],
  },
  {
    title: "Video & Media",
    icon: "Globe",
    color: "#ec4899",
    items: [
      "Use video hosting services (YouTube, Vimeo)",
      "Lazy load video embeds",
      "Use video thumbnails instead of autoplay",
      "Compress video files if self-hosting",
      "Consider removing autoplay videos",
      "Use appropriate video dimensions",
      "Load videos only when visible",
    ],
  },
  {
    title: "Homepage Specific",
    icon: "Rocket",
    color: "#64748b",
    items: [
      "Limit number of products shown",
      "Lazy load below-fold sections",
      "Optimise slideshow/hero images",
      "Consider static image vs slideshow",
      "Limit number of collections displayed",
      "Preload above-fold images",
      "Remove animations that cause layout shift",
    ],
  },
  {
    title: "Testing & Monitoring",
    icon: "Search",
    color: "#ef436b",
    items: [
      "Test with Google PageSpeed Insights",
      "Test with GTmetrix",
      "Test with WebPageTest",
      "Check Shopify's Online Store Speed report",
      "Test on real mobile devices",
      "Test on slow 3G connection",
      "Set up performance monitoring",
      "Track speed improvements over time",
      "A/B test major speed changes",
    ],
  },
];

const STORAGE_KEY = "shopify-speed-optimisation-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "What's a good page speed score for a Shopify store?",
    answer: "Aim for Google PageSpeed Insights scores of 50+ on mobile and 80+ on desktop. However, scores aren't everything—focus on Core Web Vitals metrics: LCP under 2.5s, FID under 100ms, and CLS under 0.1. Real-world load time (time until page is usable) should be under 3 seconds on 4G mobile connections."
  },
  {
    question: "Will removing apps really improve my site speed?",
    answer: "Absolutely. Each app typically adds 50-200KB of code and makes additional server requests. We regularly see stores improve load times by 1-2 seconds just by removing 5-10 unused apps. Even apps you rarely use can load code on every page. Audit ruthlessly—if you don't use it weekly, remove it."
  },
  {
    question: "Should I use image optimisation apps or optimise images before uploading?",
    answer: "Ideally both. Optimise images before upload using tools like TinyPNG, Squoosh, or ImageOptim to reduce file size by 60-80% without visible quality loss. Then use an app for lazy loading and responsive delivery. Pre-optimising prevents apps from doing heavy processing on every page load, which can actually slow things down."
  },
  {
    question: "Does Shopify theme choice really matter for speed?",
    answer: "Enormously. Poorly coded themes can be 2-3 times slower than optimised ones. Legacy themes often load unnecessary CSS, include outdated JavaScript libraries, or lack modern optimisations like lazy loading. Choose themes known for performance, regularly updated, and built with speed in mind. Dawn, Shopify's reference theme, is an excellent speed-focused starting point."
  },
  {
    question: "How do I improve Core Web Vitals specifically?",
    answer: "For LCP (Largest Contentful Paint), optimise your hero image—compress it, preload it, and ensure it's properly sized. For FID (First Input Delay), defer or remove unnecessary JavaScript, particularly from apps. For CLS (Cumulative Layout Shift), set explicit dimensions on images and ads, avoid inserting content above existing content, and use font-display: swap for web fonts."
  },
  {
    question: "Can I have a beautiful store that's also fast?",
    answer: "Yes, but it requires thoughtful design choices. Use CSS for animations instead of heavy JavaScript. Choose system fonts or limit custom fonts to 1-2 families. Optimise images aggressively. Avoid autoplay videos and excessive sliders. The fastest stores prove beautiful design and excellent performance aren't mutually exclusive—they just require more careful execution."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shopify Speed Optimisation Checklist",
  description: "Make your Shopify store faster with our comprehensive speed optimisation checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-12",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-speed-optimisation-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Speed Optimisation Checklist", item: `${siteConfig.url}/checklists/shopify-speed-optimisation-checklist` },
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

export default function ShopifySpeedOptimisationChecklistPage() {
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
            <span>14 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            Shopify Speed Optimisation Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            A 1-second delay in page load can reduce conversions by 7%. Use this {totalItems}-point checklist to make your Shopify store lightning fast.
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
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why Speed Matters</h2>
          <p className="text-lg text-foreground">
            A 1-second delay can reduce conversions by 7%. Google uses Core Web Vitals as a ranking factor. This checklist covers the highest-impact optimisations to help you build a faster, more profitable store.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Cost of Slow Stores */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The True Cost of a Slow Shopify Store
          </h2>
          <p className="text-lg text-foreground mb-6">
            Speed directly impacts your revenue. Google uses Core Web Vitals as ranking factors, meaning slow stores face a double penalty: lower conversions and worse search rankings.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Revenue Impact Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a store with:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                50,000 monthly visitors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                2% conversion rate
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                £60 average order value
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                = £60,000 monthly revenue
              </li>
            </ul>
            <p className="text-foreground">
              Improving load time from 5s to 2s typically increases conversions by 20-40%. A conservative 25% lift takes you to 2.5% conversion = <strong className="text-foreground-dark">£15,000 extra monthly revenue</strong>.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">What Slow Speed Costs You</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Higher bounce rates</strong> as visitors leave before seeing your products</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Lower Google rankings</strong> due to poor Core Web Vitals scores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Wasted ad spend</strong> when paid traffic bounces immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 font-bold text-lg">×</span>
              <span><strong>Lost mobile customers</strong> who are especially speed-sensitive</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Target Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;2.5s</div>
              <div className="text-sm text-foreground">LCP (Largest Contentful Paint)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;100ms</div>
              <div className="text-sm text-foreground">FID (First Input Delay)</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;0.1</div>
              <div className="text-sm text-foreground">CLS (Cumulative Layout Shift)</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Quick Wins for Immediate Impact
          </h2>
          <p className="text-lg text-foreground mb-6">
            Focus on these high-impact, low-effort optimisations first:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">1. Remove unused apps</h3>
              <p className="text-foreground">Each app adds 50-200KB of code. Removing 5-10 unused apps can improve load times by 1-2 seconds.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">2. Compress your hero image</h3>
              <p className="text-foreground">Your hero image is often the LCP element. Compress it, serve it as WebP, and preload it for the biggest single speed gain.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">3. Defer chat widgets</h3>
              <p className="text-foreground">Load live chat and support widgets only after the page is interactive, not on initial load.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-foreground-dark mb-2">4. Limit fonts to 2 families</h3>
              <p className="text-foreground">Each font family adds 100-300KB. Use system fonts where possible, or preload critical fonts.</p>
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
            Speed optimisation works best alongside other improvements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-seo-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">SEO Checklist →</h3>
              <p className="text-sm text-foreground">Ensure speed work aligns with your broader SEO strategy</p>
            </Link>
            <Link href="/checklists/shopify-mobile-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Mobile Optimisation →</h3>
              <p className="text-sm text-foreground">Comprehensive mobile UX beyond just speed</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Everything to verify before going live</p>
            </Link>
            <Link href="/checklists/shopify-conversion-optimisation-checklist" className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Conversion Optimisation →</h3>
              <p className="text-sm text-foreground">Turn more visitors into customers</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Speed Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store and implement optimisations that make a real difference to your page speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Speed Up My Store</Button>
            <Button href="/shopify-speed-optimisation" variant="outline-light" size="lg" icon={false}>Our Speed Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
