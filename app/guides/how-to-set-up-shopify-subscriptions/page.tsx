import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Subscriptions on Shopify",
  description:
    "Complete guide to setting up recurring subscriptions on Shopify. Covers subscription models, app selection, billing cycles, managing subscribers, and reducing churn.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-subscriptions",
  },
  openGraph: {
    title: "How to Set Up Subscriptions on Shopify",
    description:
      "Learn how to add recurring billing and subscription products to your Shopify store.",
    url: "/guides/how-to-set-up-shopify-subscriptions",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "subscription-models", title: "Subscription Models", level: 2 },
  { id: "choosing-an-app", title: "Choosing an App", level: 2 },
  { id: "configuring-billing-cycles", title: "Configuring Billing Cycles", level: 2 },
  { id: "managing-subscribers", title: "Managing Subscribers", level: 2 },
  { id: "reducing-churn", title: "Reducing Churn", level: 2 },
  { id: "subscription-seo", title: "Subscription SEO", level: 2 },
  { id: "compliance", title: "Compliance", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Subscriptions on Shopify",
  description:
    "Complete guide to setting up recurring subscriptions on Shopify.",
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
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-subscriptions`,
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
      name: "How to Set Up Subscriptions on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-shopify-subscriptions`,
    },
  ],
};

export default function SubscriptionsGuidePage() {
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

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/guides" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Store Setup</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Subscriptions on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Subscriptions are one of the most powerful ways to build predictable revenue on Shopify. This guide covers how to choose the right model, select a subscription app, configure billing, and keep customers subscribed for longer.
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

              <section id="subscription-models" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Subscription Models</h2>
                <p className="text-lg text-foreground mb-4">
                  Before picking an app, decide which subscription model fits your products. The wrong model creates operational headaches and customer confusion.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Subscribe and Save</h4>
                    <p className="text-foreground">
                      Customers subscribe to receive a product on a recurring basis, typically with a 10-15% discount versus a one-time purchase. Common in consumables like coffee, pet food, vitamins, and beauty products. This is the model used by brands like Graze and Butternut Box.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Curated Box Subscription</h4>
                    <p className="text-foreground">
                      Customers pay a fixed monthly fee and receive a curated selection of products. Birchbox and Graze pioneered this model in the UK. It requires more operational planning as you must manage the curation and fulfilment of each box.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Access or Membership</h4>
                    <p className="text-foreground">
                      Subscribers pay for access to exclusive pricing, content, or community rather than physical products. Works well for brands with strong communities or where wholesale pricing is the main benefit.
                    </p>
                  </div>
                </div>
              </section>

              <section id="choosing-an-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing an App</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify does not offer native subscriptions on lower plans. You need a third-party app that integrates with the Shopify Subscriptions API (introduced in 2021). The two dominant options in the UK market are Recharge and Seal Subscriptions.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">App Comparison</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Recharge:</strong> The market leader, powerful but pricey. Starts at $99/month plus transaction fees. Best for established subscription businesses processing significant volume.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Seal Subscriptions:</strong> More affordable entry point with a free tier. Good for merchants starting out with subscriptions. Less customisable than Recharge.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Bold Subscriptions:</strong> Strong feature set, good for merchants who also use other Bold apps. Competitive pricing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shopify Subscriptions (native):</strong> Available on all plans now, basic functionality only. Suitable for simple subscribe-and-save without advanced features.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="configuring-billing-cycles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Configuring Billing Cycles</h2>
                <p className="text-lg text-foreground mb-4">
                  Billing cycles determine how often customers are charged and when orders are generated. Most subscription apps support weekly, fortnightly, monthly, bi-monthly, quarterly, and annual cycles.
                </p>
                <p className="text-lg text-foreground mb-4">
                  For consumable products, align your cycle with realistic consumption rates. If your coffee lasts most customers three to four weeks, offer a monthly cycle as the default but let customers customise. Misaligned cycles are a primary driver of cancellations.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Prepaid vs Pay-as-You-Go</h4>
                  <p className="text-foreground">
                    Most apps support both prepaid subscriptions (customer pays for 3 or 6 months upfront at a deeper discount) and rolling monthly billing. Prepaid subscribers have significantly lower churn. Offer a 3-month prepaid option at 15-20% off as a default upsell at checkout.
                  </p>
                </div>
              </section>

              <section id="managing-subscribers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Subscribers</h2>
                <p className="text-lg text-foreground mb-4">
                  A good subscriber experience includes a self-service customer portal where subscribers can pause, skip, swap products, update their address, or cancel without contacting support. All major subscription apps provide this.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Set up SMS or email reminders 3-5 days before each renewal. This reduces failed payments due to expired cards and gives customers a chance to update their details. Failed payment recovery flows, which automatically retry declined cards and send reminder emails, are essential at scale.
                </p>
              </section>

              <section id="reducing-churn" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reducing Churn</h2>
                <p className="text-lg text-foreground mb-4">
                  Average monthly churn for UK subscription boxes is 6-10%. Reducing this by even 2 percentage points dramatically increases lifetime value. The most effective interventions are:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Pause rather than cancel:</strong> When a customer clicks cancel, offer a pause of 1-3 months first. Around 20-40% of customers will accept this instead of cancelling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Cancellation surveys:</strong> Ask why customers are cancelling. Product too expensive and receiving too much product are the top two reasons, both of which you can address with a discount or frequency change offer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Win-back flows:</strong> Email cancelled subscribers 30, 60, and 90 days after cancellation with a reactivation incentive.</span>
                  </li>
                </ul>
              </section>

              <section id="subscription-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Subscription SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Subscription product pages have unique SEO considerations. The canonical URL should point to your product page, not the subscription variant URL generated by some apps. Check that your subscription app does not create duplicate URLs.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Target keywords like &quot;[product] subscription UK&quot;, &quot;[product] monthly delivery&quot;, and &quot;subscribe and save [product]&quot;. These have strong commercial intent and relatively low competition compared to generic product terms.
                </p>
              </section>

              <section id="compliance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Compliance</h2>
                <p className="text-lg text-foreground mb-4">
                  UK subscription regulations tightened significantly in 2023. The Digital Markets, Competition and Consumers Act introduced requirements around clear pricing, easy cancellation, and renewal reminders. Key requirements include:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Clearly state the total cost of the subscription, not just the first payment, before purchase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Send a reminder before any free trial converts to a paid subscription</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Make cancellation as easy as signing up (no dark patterns like mandatory phone calls)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>Provide annual renewal reminders for subscriptions that renew yearly</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-gift-cards" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Gift Cards</h4>
                      <p className="text-sm text-foreground">Set up and manage gift cards</p>
                    </Link>
                    <Link href="/guides/how-to-improve-shopify-checkout-conversion" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Conversion</h4>
                      <p className="text-sm text-foreground">Improve subscription signup rates</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Subscription Service?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can integrate and configure subscription apps, build custom subscriber portals, and help you set up retention flows that reduce churn.
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
