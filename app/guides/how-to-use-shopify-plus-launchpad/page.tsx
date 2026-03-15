import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Shopify Plus Launchpad",
  description: "Learn how to use Shopify Plus Launchpad to schedule and automate sales events. Covers creating events, price changes, theme publishing, and reporting.",
  alternates: { canonical: "/guides/how-to-use-shopify-plus-launchpad" },
  openGraph: {
    title: "How to Use Shopify Plus Launchpad",
    description: "Learn how to use Shopify Plus Launchpad to schedule and automate sales events. Covers creating events, price changes, theme publishing, and reporting.",
    url: "/guides/how-to-use-shopify-plus-launchpad",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-launchpad", title: "What Is Launchpad", level: 2 },
  { id: "creating-an-event", title: "Creating an Event", level: 2 },
  { id: "scheduling-price-changes", title: "Scheduling Price Changes", level: 2 },
  { id: "theme-publishing", title: "Theme Publishing", level: 2 },
  { id: "inventory-changes", title: "Inventory Changes", level: 2 },
  { id: "post-event-reporting", title: "Post-Event Reporting", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Shopify Plus Launchpad",
  description: "Learn how to use Shopify Plus Launchpad to schedule and automate sale events. Covers creating events, scheduling price changes, theme publishing, and post-event reporting.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-use-shopify-plus-launchpad` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Use Shopify Plus Launchpad", item: `${siteConfig.url}/guides/how-to-use-shopify-plus-launchpad` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shopify Plus</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Use Shopify Plus Launchpad</h1>
            <p className="text-xl text-foreground mb-8">Launchpad is Shopify Plus&apos;s event automation tool. It lets you schedule every aspect of a sale or product launch in advance: price changes, theme updates, discount activations, and inventory adjustments. This guide covers how to use it effectively for peak trading events.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span><span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="what-is-launchpad" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Launchpad</h2>
                <p className="text-lg text-foreground mb-4">Shopify Plus Launchpad is an app available exclusively to Plus merchants. It allows you to create &quot;events&quot; that automatically apply a series of changes to your store at a scheduled time, then revert or apply additional changes when the event ends.</p>
                <p className="text-lg text-foreground mb-4">For a Black Friday sale, you might schedule: a theme update (adding sale banners) to go live at midnight, discount codes to activate at the same time, and price changes to revert automatically at midnight on Monday. All of this runs unattended.</p>
              </section>
              <section id="creating-an-event" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating an Event</h2>
                <p className="text-lg text-foreground mb-4">Open Launchpad from your Shopify admin sidebar (under Apps if it is not visible). Click Create event. Set the event name (e.g., &quot;Black Friday 2025&quot;), start date/time, and optional end date/time. The end time triggers any reversal actions you configure.</p>
                <p className="text-lg text-foreground mb-4">Events are grouped into themes, discounts, scripts, inventory, and custom actions. Work through each section to configure what should happen when the event starts and ends.</p>
              </section>
              <section id="scheduling-price-changes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Scheduling Price Changes</h2>
                <p className="text-lg text-foreground mb-4">Launchpad can apply price changes to specific products or collections at event start, then revert them at event end. This is one of its most powerful features: no manual price changes at midnight, no forgetting to revert after a sale.</p>
                <p className="text-lg text-foreground mb-4">Set compare-at prices to show the original price as a strikethrough alongside the sale price. Configure which products or collections are included. Preview the changes before scheduling to verify they look correct.</p>
              </section>
              <section id="theme-publishing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Theme Publishing</h2>
                <p className="text-lg text-foreground mb-4">Prepare a sale theme in Shopify by duplicating your live theme and adding sale-specific elements: promotional banners, countdown timers, sale collection spotlights. Use Launchpad to schedule this theme to publish at event start and revert to your standard theme at event end.</p>
                <p className="text-lg text-foreground mb-4">This approach lets your team prepare and QA the sale theme in advance, with no manual intervention needed during the event itself.</p>
              </section>
              <section id="inventory-changes" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Changes</h2>
                <p className="text-lg text-foreground mb-4">Launchpad can set products to continue selling when out of stock during an event (useful for high-demand launches where you want to capture all orders and fulfil them later) or restrict purchasing to in-stock quantities only.</p>
              </section>
              <section id="post-event-reporting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Post-Event Reporting</h2>
                <p className="text-lg text-foreground mb-4">After the event ends, Launchpad generates a performance report showing revenue generated during the event period, orders placed, and comparison to the same period before the event. Use this to evaluate your promotional strategy.</p>
              </section>
              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">Test your event in a development environment before scheduling it live. Use the Preview button to check theme changes. Schedule events at least 24 hours in advance so you can fix any issues without rushing.</p>
                <p className="text-lg text-foreground mb-4">Ensure your customer service team knows when events are scheduled and what the promotional details are so they can answer customer queries accurately.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-flow-automations" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flow Automations</h4><p className="text-sm text-foreground">Automate workflows alongside Launchpad</p></Link>
                    <Link href="/guides/how-to-run-shopify-flash-sales" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flash Sales</h4><p className="text-sm text-foreground">Run effective promotional events</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Running Peak Trading Events?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure Launchpad events, prepare sale themes, and help Shopify Plus brands execute peak trading events without technical stress.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
