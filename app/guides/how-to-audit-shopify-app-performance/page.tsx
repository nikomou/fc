import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Audit Shopify App Performance",
  description: "Learn how to identify apps slowing down your Shopify store. Covers measuring app impact, removing apps cleanly, and finding lightweight alternatives.",
  alternates: { canonical: "/guides/how-to-audit-shopify-app-performance" },
  openGraph: {
    title: "How to Audit Shopify App Performance",
    description: "Learn how to identify apps slowing down your Shopify store. Covers measuring app impact, removing apps cleanly, and finding lightweight alternatives.",
    url: "/guides/how-to-audit-shopify-app-performance",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-apps-slow-you-down", title: "Why Apps Slow You Down", level: 2 },
  { id: "identifying-problem-apps", title: "Identifying Problem Apps", level: 2 },
  { id: "using-google-tag-assistant", title: "Using DevTools and Tag Assistant", level: 2 },
  { id: "measuring-app-impact", title: "Measuring App Impact", level: 2 },
  { id: "removing-apps-cleanly", title: "Removing Apps Cleanly", level: 2 },
  { id: "app-alternatives", title: "App Alternatives", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Audit Shopify App Performance",
  description: "Learn how to identify apps slowing down your Shopify store. Covers measuring app impact, removing apps cleanly, and finding lightweight alternatives.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-audit-shopify-app-performance` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Audit Shopify App Performance", item: `${siteConfig.url}/guides/how-to-audit-shopify-app-performance` },
  ],
};

export default function Page() {
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
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Audit Shopify App Performance
            </h1>
            <p className="text-xl text-foreground mb-8">
              Most Shopify stores accumulate apps over time, and each one adds JavaScript, CSS, and server requests. This guide shows you how to identify which apps are slowing you down and what to do about it.
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
              
              <section id="why-apps-slow-you-down" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Apps Slow You Down</h2>
                <p className="text-lg text-foreground mb-4">
                  Every Shopify app that adds a frontend component loads additional resources on your pages. A review app loads its widget JavaScript. A chat app loads its SDK. A loyalty programme loads its points display. These all add up.
                </p>
                <p className="text-lg text-foreground mb-4">
                  A single app might add 100-300KB of JavaScript and make 5-10 additional network requests. With 10 apps installed, that is potentially 3MB of additional JavaScript and 100 extra network requests on every page load.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Many apps also inject scripts into all pages, even when they are only needed on specific pages. A checkout upsell app that loads its scripts on the homepage serves no purpose and just wastes bandwidth.
                </p>
              </section>

              <section id="identifying-problem-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Identifying Problem Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  Run your store through PageSpeed Insights and look at the Render Blocking Resources and Unused JavaScript sections. These often list scripts by domain. Third-party domains (not your store&apos;s domain) are typically app scripts.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Cross-reference the domains listed against your installed apps. Most app scripts load from a CDN with a domain related to the app name. For example, Klaviyo loads from klaviyo.com, Yotpo from yotpo.com.
                </p>
              </section>

              <section id="using-google-tag-assistant" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Using DevTools and Tag Assistant</h2>
                <p className="text-lg text-foreground mb-4">
                  Open Chrome DevTools and go to the Network tab. Filter by &quot;Other&quot; or &quot;Script&quot; and reload the page. Look for any scripts loading from unfamiliar third-party domains.
                </p>
                <p className="text-lg text-foreground mb-4">
                  The Performance tab in DevTools gives a flame chart showing exactly when each script executes and how long it blocks the main thread. Scripts with long main thread blocking times are your primary targets.
                </p>
              </section>

              <section id="measuring-app-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring App Impact</h2>
                <p className="text-lg text-foreground mb-4">
                  To accurately measure an individual app&apos;s impact, run a PageSpeed test with the app enabled, then disable the app and run the same test. The difference shows you exactly how much the app costs in performance terms.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Some apps have a &quot;disable on storefront&quot; option. Others require uninstallation to fully remove their scripts. For testing purposes, you can temporarily comment out the app embed in your theme without fully uninstalling.
                </p>
              </section>

              <section id="removing-apps-cleanly" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Removing Apps Cleanly</h2>
                <p className="text-lg text-foreground mb-4">
                  When you uninstall a Shopify app, the app&apos;s code injected into your theme.liquid does not always get removed. After uninstalling, check theme.liquid, head.liquid, and footer.liquid for orphaned script tags or stylesheet links.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Also check the App Embeds section in your theme editor. Disabled embeds from uninstalled apps can still leave empty placeholders. Remove these and save your theme.
                </p>
              </section>

              <section id="app-alternatives" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Alternatives</h2>
                <p className="text-lg text-foreground mb-4">
                  For apps you need but that are slow, look for alternatives with smaller footprints. Many app categories have lightweight challengers to the established players.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Reviews</h4>
                    <p className="text-foreground">Shopify&apos;s native Product Reviews is lightweight but limited. Judge.me has a good performance record versus heavier alternatives like Bazaarvoice.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Live Chat</h4>
                    <p className="text-foreground">Shopify Inbox is built into the platform and adds minimal overhead. Third-party chat apps like Intercom and Zendesk add significant JavaScript weight.</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Link href="/guides/how-to-reduce-shopify-javascript" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Reduce JavaScript</h4>
                      <p className="text-sm text-foreground">Remove unused JS from your theme</p>
                    </Link>
                    <Link href="/guides/how-to-choose-shopify-apps" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Choose Shopify Apps</h4>
                      <p className="text-sm text-foreground">Select apps that do not hurt performance</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need an App Performance Audit?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team audits every app on your store, measures its performance impact, and recommends whether to keep, replace, or remove it.
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
