import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Optimise Your Shopify Store for Speed",
  description:
    "Learn how to make your Shopify store faster with our comprehensive speed optimisation guide. Covers images, apps, themes, Core Web Vitals and more.",
  alternates: {
    canonical: "/guides/how-to-optimise-your-shopify-store-for-speed",
  },
  openGraph: {
    title: "How to Optimise Your Shopify Store for Speed",
    description:
      "Learn how to make your Shopify store faster with our comprehensive speed optimisation guide.",
    url: "/guides/how-to-optimise-your-shopify-store-for-speed",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-speed-matters", title: "Why Speed Matters", level: 2 },
  { id: "measuring-your-speed", title: "Measuring Your Speed", level: 2 },
  { id: "image-optimisation", title: "Image Optimisation", level: 2 },
  { id: "app-audit", title: "App Audit", level: 2 },
  { id: "theme-optimisation", title: "Theme Optimisation", level: 2 },
  { id: "third-party-scripts", title: "Third-Party Scripts", level: 2 },
  { id: "core-web-vitals", title: "Core Web Vitals", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Optimise Your Shopify Store for Speed",
  description:
    "Learn how to make your Shopify store faster with our comprehensive speed optimisation guide.",
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
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-optimise-your-shopify-store-for-speed`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Optimise Your Shopify Store for Speed",
      item: `${siteConfig.url}/guides/how-to-optimise-your-shopify-store-for-speed`,
    },
  ],
};

export default function SpeedOptimisationGuidePage() {
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Optimise Your Shopify Store for Speed
            </h1>

            <p className="text-xl text-foreground mb-8">
              A slow Shopify store costs you customers and revenue. This guide walks you through
              every optimisation technique to make your store lightning fast.
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated February 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Why Speed Matters */}
              <section id="why-speed-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Speed Matters
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Page speed directly impacts your bottom line. Research consistently shows that
                  faster websites convert better, rank higher in Google, and provide a better
                  user experience that keeps customers coming back.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Amazon calculated that every 100ms of additional latency cost them 1% in sales.
                  Google found that a 2-second delay in mobile load time increased bounce rates by
                  32%. These numbers apply to your store too.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">The Revenue Impact</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>1 second delay</strong> = 7% reduction in conversions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>3 second load time</strong> = 53% of mobile users leave</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Core Web Vitals</strong> = direct Google ranking factor</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The good news? Most Shopify stores have significant room for improvement. By
                  following this guide, you can typically reduce load times by 40-60%.
                </p>
              </section>

              {/* Measuring Your Speed */}
              <section id="measuring-your-speed" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Measuring Your Speed
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before optimising, you need to know where you stand. Use these tools to
                  benchmark your current performance:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Google PageSpeed Insights</h3>
                    <p className="text-foreground mb-2">
                      The most important tool. It shows your Core Web Vitals scores and provides
                      specific recommendations. Test both mobile and desktop.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Target:</strong> 50+ mobile, 80+ desktop
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shopify Speed Report</h3>
                    <p className="text-foreground mb-2">
                      Found in your Shopify admin under Online Store → Themes. Compares your
                      speed against similar stores.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Target:</strong> Faster than similar stores
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">GTmetrix</h3>
                    <p className="text-foreground mb-2">
                      Provides detailed waterfall charts showing exactly what loads and when.
                      Great for identifying specific bottlenecks.
                    </p>
                    <p className="text-sm text-foreground">
                      <strong>Target:</strong> Fully loaded under 3 seconds
                    </p>
                  </div>
                </div>

                <p className="text-lg text-foreground">
                  Run these tests on your homepage, a collection page, and a product page. These
                  are the pages that matter most for conversions and SEO.
                </p>
              </section>

              {/* Image Optimisation */}
              <section id="image-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Image Optimisation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Images are typically the biggest contributor to page weight. A single
                  unoptimised hero image can add 2-5MB to your page, turning a fast site into a
                  slow one.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Before Uploading
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Resize images</strong> to their display size. A 4000px wide image displayed at 800px wastes bandwidth.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Compress images</strong> using TinyPNG, Squoosh, or ImageOptim. Aim for 60-80% reduction without visible quality loss.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Use WebP format</strong> where possible. It offers 25-35% smaller file sizes than JPEG with equivalent quality.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  In Shopify
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Enable lazy loading for below-fold images (most modern themes do this automatically)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use Shopify's image_tag with appropriate sizes to serve responsive images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Remove unused product images that customers never see</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Consider using CSS for simple graphics instead of images</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Your hero image has the biggest impact on perceived speed. Compress it
                    aggressively, serve it as WebP, and add a preload hint in your theme.
                  </p>
                </div>
              </section>

              {/* App Audit */}
              <section id="app-audit" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  App Audit
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Apps are one of the biggest speed killers on Shopify stores. Each app typically
                  adds 50-200KB of JavaScript and makes additional server requests. Ten apps can
                  easily add 1-2MB and a full second to your load time.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  The Audit Process
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>List all installed apps</strong>
                      <p className="text-foreground mt-1">Go to Settings → Apps and sales channels. Export or screenshot the list.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Identify unused apps</strong>
                      <p className="text-foreground mt-1">For each app, ask: "Did we use this in the last 30 days?" If no, it goes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Check for leftover code</strong>
                      <p className="text-foreground mt-1">Some apps leave code behind after uninstall. Check your theme for orphaned snippets.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Consolidate overlapping apps</strong>
                      <p className="text-foreground mt-1">Do you have separate apps for reviews, loyalty, and referrals? One platform might do all three.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Common Speed Killers</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Review apps that load on every page (even when not displaying reviews)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Chat widgets that load immediately instead of on interaction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Pop-up apps with heavy animations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span>
                      <span>Currency converters that run on every page load</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Theme Optimisation */}
              <section id="theme-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Theme Optimisation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your theme is the foundation of your store's performance. A poorly coded theme
                  can be 2-3 times slower than a well-optimised one, regardless of what other
                  optimisations you make.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Theme Selection
                </h3>
                <p className="text-lg text-foreground mb-4">
                  If you're choosing a new theme, prioritise performance. Shopify's Dawn theme is
                  an excellent baseline, specifically designed for speed. Themes built on Dawn's
                  architecture tend to perform well.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Avoid themes with excessive features you won't use. Each feature adds code,
                  even when disabled.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Theme Optimisation Checklist
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Minimise fonts:</strong> Use 1-2 font families maximum. Consider system fonts for body text.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Preload critical fonts:</strong> Add preload hints for fonts used above the fold.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Remove unused sections:</strong> Delete theme sections you never use from the code.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Defer JavaScript:</strong> Non-critical JS should load after the page is interactive.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Inline critical CSS:</strong> Styles needed for above-fold content should be inline.</span>
                  </li>
                </ul>
              </section>

              {/* Third-Party Scripts */}
              <section id="third-party-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Third-Party Scripts
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Beyond apps, you likely have tracking scripts, chat widgets, and marketing
                  pixels loading on your store. Each one adds to your load time.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Audit Your Scripts
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Check your theme's theme.liquid file and any script tags added through Shopify
                  admin. Common culprits include:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Google Analytics (necessary, but load async)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Facebook Pixel (load via GTM for better control)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Hotjar, Lucky Orange (only load on pages you're actively testing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Chat widgets (defer until user scrolls or after 5 seconds)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Multiple analytics tools doing the same thing</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use Google Tag Manager to control when scripts load. You can defer
                    non-essential scripts until after the page is interactive, significantly
                    improving perceived performance.
                  </p>
                </div>
              </section>

              {/* Core Web Vitals */}
              <section id="core-web-vitals" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Core Web Vitals
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Core Web Vitals are Google's metrics for measuring user experience. They're now
                  a direct ranking factor. Here's how to optimise for each:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">LCP (Largest Contentful Paint)</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Target: &lt;2.5s</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Measures how long it takes for the largest visible element (usually hero
                      image) to load.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">How to improve:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Optimise and preload your hero image</li>
                      <li>• Remove render-blocking resources</li>
                      <li>• Use a fast hosting (Shopify handles this)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">FID (First Input Delay)</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Target: &lt;100ms</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Measures how quickly the page responds to user interaction.
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">How to improve:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Reduce JavaScript execution time</li>
                      <li>• Break up long tasks into smaller ones</li>
                      <li>• Remove unused apps and scripts</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground-dark">CLS (Cumulative Layout Shift)</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Target: &lt;0.1</span>
                    </div>
                    <p className="text-foreground mb-4">
                      Measures visual stability. Do elements jump around as the page loads?
                    </p>
                    <h4 className="font-medium text-foreground-dark mb-2">How to improve:</h4>
                    <ul className="space-y-1 text-foreground">
                      <li>• Set explicit dimensions on images and embeds</li>
                      <li>• Reserve space for dynamic content</li>
                      <li>• Use font-display: swap for web fonts</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Next Steps
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Speed optimisation is an ongoing process, not a one-time fix. Here's how to
                  maintain your improvements:
                </p>

                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Set up monitoring</strong>
                      <p className="text-foreground mt-1">Use Google Search Console to track Core Web Vitals over time.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Test before installing apps</strong>
                      <p className="text-foreground mt-1">Run a speed test before and after installing any new app.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Quarterly audits</strong>
                      <p className="text-foreground mt-1">Review your apps and scripts every quarter. Remove what you don't need.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/checklists/shopify-speed-optimisation-checklist"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Speed Optimisation Checklist →</h4>
                      <p className="text-sm text-foreground">69-point interactive checklist</p>
                    </Link>
                    <Link
                      href="/shopify-speed-optimisation"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Our Speed Services →</h4>
                      <p className="text-sm text-foreground">Professional speed optimisation</p>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-reduce-shopify-javascript"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Reduce JavaScript on Shopify</h4>
                      <p className="text-sm text-foreground">Cut JS bloat for faster load times</p>
                    </Link>
                    <Link
                      href="/guides/how-to-remove-unused-shopify-app-code"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Remove Unused App Code</h4>
                      <p className="text-sm text-foreground">Clean up leftover scripts from uninstalled apps</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Speed?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your store and implement these optimisations for you,
            typically achieving 40-60% faster load times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get a Speed Audit
            </Button>
            <Button href="/shopify-speed-optimisation" variant="outline-light" size="lg" icon={false}>
              Our Speed Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
