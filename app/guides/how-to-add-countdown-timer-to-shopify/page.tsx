import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add a Countdown Timer to Shopify",
  description: "Learn how to add a countdown timer to Shopify to create urgency. Covers timer types, app options, Liquid implementation, ethics, and mobile display.",
  alternates: { canonical: "/guides/how-to-add-countdown-timer-to-shopify" },
  openGraph: {
    title: "How to Add a Countdown Timer to Shopify",
    description: "Learn how to add a countdown timer to Shopify to create urgency. Covers timer types, app options, Liquid implementation, ethics, and mobile display.",
    url: "/guides/how-to-add-countdown-timer-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "when-to-use-countdown-timers", title: "When to Use Countdown Timers", level: 2 },
  { id: "timer-types", title: "Timer Types", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "liquid-implementation", title: "Liquid Implementation", level: 2 },
  { id: "urgency-ethics", title: "Urgency Ethics", level: 2 },
  { id: "mobile-display", title: "Mobile Display", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add a Countdown Timer to Shopify",
  description: "Learn how to add a countdown timer to Shopify to create urgency. Covers timer types, app options, Liquid implementation, ethics, and mobile display.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-countdown-timer-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add a Countdown Timer to Shopify", item: `${siteConfig.url}/guides/how-to-add-countdown-timer-to-shopify` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Theme &amp; Design</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Add a Countdown Timer to Shopify</h1>
            <p className="text-xl text-foreground mb-8">Countdown timers create urgency that drives purchasing decisions. Used correctly, they are one of the simplest tools for lifting conversion rates on sale pages and product launches. Used incorrectly, they damage trust. This guide covers both sides.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
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
              <section id="when-to-use-countdown-timers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When to Use Countdown Timers</h2>
                <p className="text-lg text-foreground mb-4">Countdown timers work best when the urgency is genuine: a real sale ending date, an event-based promotion, or a limited-availability product. Fake timers that reset every time a customer visits the page are immediately recognised by savvy shoppers and damage your brand credibility.</p>
                <p className="text-lg text-foreground mb-4">Appropriate uses: flash sale countdown (genuine end date), product launch countdown (genuine launch date), stock countdown (&apos;only 3 left&apos;), or daily shipping cut-off timer.</p>

              </section>
              <section id="timer-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Timer Types</h2>
                <p className="text-lg text-foreground mb-4">Fixed-end timers count down to a specific date and time, such as the end of a Black Friday sale. These are appropriate for any genuine time-limited promotion.</p>
                <p className="text-lg text-foreground mb-4">Session-based timers reset when a customer closes and reopens the browser. They create a personalised sense of urgency based on cart behaviour. Used by some BNPL providers to show how long a checkout session remains valid.</p>
                <p className="text-lg text-foreground mb-4">Evergreen timers count down from when a customer first visits a page and reset after reaching zero. These are typically disingenuous unless the offer genuinely changes for each new session.</p>

              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">The most widely used countdown timer apps are Countdown Timer Ultimate, Timer Plus, and Hurify. These allow you to create timers by date, add them to specific products or pages, and customise the styling to match your theme.</p>
                <p className="text-lg text-foreground mb-4">Many announcement bar apps also include countdown timer functionality. If you already use an announcement bar app, check whether it supports timers before adding another.</p>

              </section>
              <section id="liquid-implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Liquid Implementation</h2>
                <p className="text-lg text-foreground mb-4">For a custom countdown timer without an app, add a JavaScript-based timer to your theme. Create a section or snippet that accepts a target date as a section setting, calculate the remaining time in JavaScript, and update a display element every second.</p>
                <p className="text-lg text-foreground mb-4">Keep the JavaScript lightweight: a countdown timer does not need a framework. A 20-line vanilla JavaScript function handles all the logic required.</p>

              </section>
              <section id="urgency-ethics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Urgency Ethics</h2>
                <p className="text-lg text-foreground mb-4">The UK Advertising Standards Authority and Consumer Protection regulations prohibit misleading urgency claims. A countdown timer that claims a sale ends in 1 hour but resets indefinitely is a deceptive practice. Ensure any timer you use is backed by a genuine event.</p>
                <p className="text-lg text-foreground mb-4">If you use stock-based urgency (&apos;only 2 left&apos;), ensure this reflects actual inventory levels.</p>

              </section>
              <section id="mobile-display" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mobile Display</h2>
                <p className="text-lg text-foreground mb-4">Test your countdown timer on mobile to ensure it displays correctly on small screens. Large timers that stack awkwardly on mobile can push important content below the fold. On mobile, a compact inline timer or announcement bar timer often works better than a full-width countdown block.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-urgency-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Urgency</h4><p className="text-sm text-foreground">Other urgency tactics beyond timers</p></Link>
                    <Link href="/guides/how-to-run-shopify-flash-sales" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flash Sales</h4><p className="text-sm text-foreground">Run time-limited promotions</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Conversion Rate Optimisation?</h2>
          <p className="text-xl text-gray-300 mb-8">Our CRO team tests urgency tactics, builds custom timer implementations, and measures the real impact on your conversion rate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
