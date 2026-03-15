import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Reduce JavaScript on Shopify",
  description: "Learn how to reduce JavaScript bloat on Shopify to improve page speed. Covers auditing JS, removing unused scripts, deferring non-critical code, and measuring improvements.",
  alternates: { canonical: "/guides/how-to-reduce-shopify-javascript" },
  openGraph: {
    title: "How to Reduce JavaScript on Shopify",
    description: "Reduce JavaScript on Shopify for faster page loads and better Core Web Vitals.",
    url: "/guides/how-to-reduce-shopify-javascript",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-javascript-hurts-speed", title: "Why JavaScript Hurts Speed", level: 2 },
  { id: "auditing-your-js", title: "Auditing Your JavaScript", level: 2 },
  { id: "removing-unused-app-scripts", title: "Removing Unused App Scripts", level: 2 },
  { id: "deferring-non-critical-js", title: "Deferring Non-Critical JS", level: 2 },
  { id: "third-party-script-management", title: "Third-Party Script Management", level: 2 },
  { id: "measuring-improvements", title: "Measuring Improvements", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Reduce JavaScript on Shopify",
  description: "Reduce JavaScript on Shopify for better performance.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-reduce-shopify-javascript` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Reduce JavaScript on Shopify", item: `${siteConfig.url}/guides/how-to-reduce-shopify-javascript` },
  ],
};

export default function ReduceJavaScriptGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/guides" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Performance</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Reduce JavaScript on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Excessive JavaScript is the single biggest performance bottleneck for most Shopify stores. Every additional JS file delays how quickly your page becomes interactive. This guide shows you how to audit, reduce, and manage JavaScript effectively.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="why-javascript-hurts-speed" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why JavaScript Hurts Speed</h2>
                <p className="text-lg text-foreground mb-4">
                  JavaScript is render-blocking by default. When a browser encounters a JS file, it pauses rendering your page to download, parse, and execute that script. The more JS files you have, the longer your visitors wait for a usable page.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Google&apos;s Core Web Vitals measure Time to Interactive (TTI) and Total Blocking Time (TBT), both of which are directly impacted by JavaScript. A store with 15 app scripts loading on every page will consistently fail these metrics, harming both SEO rankings and conversion rates.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The average Shopify store loads 800KB-2MB of JavaScript. Well-optimised stores keep this under 300KB. The difference is typically unneeded app scripts, legacy code, and poorly configured third-party tools.
                </p>
              </section>

              <section id="auditing-your-js" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Auditing Your JavaScript</h2>
                <p className="text-lg text-foreground mb-4">
                  Start by running your homepage and product page through PageSpeed Insights (pagespeed.web.dev). The &quot;Reduce unused JavaScript&quot; and &quot;Eliminate render-blocking resources&quot; recommendations will list specific files by size.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Open Chrome DevTools, go to the Network tab, and filter by JS. Reload the page and note every script file, its size, and its source domain. Third-party domains (not your store&apos;s domain) are usually app scripts or analytics tools.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For a more detailed breakdown, use the Chrome Coverage tab (DevTools, More tools, Coverage). This shows what percentage of each JS file is actually used on the current page. Files with 80%+ unused code are prime candidates for deferral or removal.
                </p>
              </section>

              <section id="removing-unused-app-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Removing Unused App Scripts</h2>
                <p className="text-lg text-foreground mb-4">
                  When you uninstall a Shopify app, its scripts often remain in your theme code. Go to your theme editor, navigate to theme.liquid, and search for script tags from any apps you no longer use. These include GTM tags, chat widgets, review app scripts, and pop-up tools.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Also check the App Embeds section in your theme editor. Active app embeds load their JavaScript on every page. Disable any you no longer use.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Before You Remove</h4>
                  <p className="text-foreground">Always duplicate your theme before editing. In the Themes section, click the three dots menu on your live theme and select &quot;Duplicate&quot;. Work on the duplicate first.</p>
                </div>
              </section>

              <section id="deferring-non-critical-js" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Deferring Non-Critical JS</h2>
                <p className="text-lg text-foreground mb-4">
                  Scripts that do not need to run immediately can be deferred using the defer or async attribute. This allows the page to continue rendering while the script downloads in the background.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Add defer to scripts in theme.liquid: change &lt;script src="..."&gt; to &lt;script defer src="..."&gt;. Use async for completely independent scripts like analytics. Avoid defer for scripts that other scripts depend on, as this can cause errors.
                </p>
              </section>

              <section id="third-party-script-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Third-Party Script Management</h2>
                <p className="text-lg text-foreground mb-4">
                  Load all marketing and analytics scripts through a tag manager like Google Tag Manager rather than adding them directly to your theme. This gives you centralised control and allows you to fire scripts conditionally (e.g., only on purchase confirmation pages, not every page).
                </p>
                <p className="text-lg text-foreground mb-4">
                  Consider loading chat widgets only after user interaction rather than on page load. A chat button can appear immediately using CSS, with the full chat library only loading when a user clicks it. This can save 200-500KB of JavaScript on every page load.
                </p>
              </section>

              <section id="measuring-improvements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring Improvements</h2>
                <p className="text-lg text-foreground mb-4">
                  After making changes, measure using PageSpeed Insights (use the mobile report as it is more stringent), Google Search Console&apos;s Core Web Vitals report, and your own analytics to track bounce rate and conversion rate changes.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Aim for a Total Blocking Time under 200ms and Time to Interactive under 3.8 seconds on mobile. These are the thresholds Google uses for &quot;Good&quot; ratings in their Page Experience signal.
                </p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-audit-shopify-app-performance" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Audit App Performance</h4>
                      <p className="text-sm text-foreground">Identify slow apps</p>
                    </Link>
                    <Link href="/guides/how-to-use-shopify-lazy-loading" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Lazy Loading</h4>
                      <p className="text-sm text-foreground">Defer image and section loading</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Want a Faster Shopify Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our performance team specialises in Shopify speed optimisation, from JavaScript reduction to image delivery and Core Web Vitals improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
