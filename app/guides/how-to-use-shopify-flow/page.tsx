import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Shopify Flow: Automation Guide",
  description: "Learn how to use Shopify Flow to automate store operations. Covers triggers, conditions, actions, fraud prevention, customer tagging, and inventory workflows.",
  alternates: { canonical: "/guides/how-to-use-shopify-flow" },
  openGraph: {
    title: "How to Use Shopify Flow: Automation Guide",
    description: "Learn how to use Shopify Flow to automate store operations. Covers triggers, conditions, actions, fraud prevention, customer tagging, and inventory workflows.",
    url: "/guides/how-to-use-shopify-flow",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-flow", title: "What Is Shopify Flow", level: 2 },
  { id: "flow-triggers-conditions-actions", title: "Triggers, Conditions, and Actions", level: 2 },
  { id: "common-automations", title: "Common Automations", level: 2 },
  { id: "fraud-prevention", title: "Fraud Prevention", level: 2 },
  { id: "customer-tagging", title: "Customer Tagging", level: 2 },
  { id: "inventory-workflows", title: "Inventory Workflows", level: 2 },
  { id: "testing-flows", title: "Testing Flows", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Shopify Flow",
  description: "Learn how to use Shopify Flow to automate store operations. Covers triggers, conditions, actions, fraud prevention, customer tagging, inventory workflows, and testing.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-use-shopify-flow` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Use Shopify Flow", item: `${siteConfig.url}/guides/how-to-use-shopify-flow` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Marketing &amp; Analytics</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Use Shopify Flow</h1>
            <p className="text-xl text-foreground mb-8">Shopify Flow is a no-code automation tool that lets you build workflows triggered by events in your store. From tagging high-value customers to alerting you when stock runs low, Flow eliminates repetitive manual tasks and enables sophisticated business logic.</p>
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
              <section id="what-is-shopify-flow" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Shopify Flow</h2>
                <p className="text-lg text-foreground mb-4">Shopify Flow is included with Shopify and Shopify Plus plans. It works on an &quot;if this, then that&quot; principle: when a trigger event occurs (like a new order), it checks conditions (like order value above £200), and executes actions (like tagging the customer as VIP).</p>
                <p className="text-lg text-foreground mb-4">Flow can connect to other Shopify features and some third-party apps. It is not a full integration platform like Zapier, but it handles a wide range of in-Shopify automation tasks very effectively.</p>

              </section>
              <section id="flow-triggers-conditions-actions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Triggers, Conditions, and Actions</h2>
                <p className="text-lg text-foreground mb-4">Triggers are the starting point of every Flow. Common triggers include: Order Created, Order Fulfilled, Customer Created, Product Added, and Inventory Level Changed.</p>
                <p className="text-lg text-foreground mb-4">Conditions filter which instances of a trigger should continue through the workflow. You can chain multiple conditions: order total greater than £100 AND customer tag does not contain VIP.</p>
                <p className="text-lg text-foreground mb-4">Actions are what Flow does when conditions are met. Actions include: add or remove customer tags, add order tags, send an internal email, create a metafield value, or send a webhook to an external system.</p>

              </section>
              <section id="common-automations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Automations</h2>
                <p className="text-lg text-foreground mb-4">Re-order point alerts: Trigger when inventory level falls below a threshold. Action: email your purchasing manager with the product name and current stock level.</p>
                <p className="text-lg text-foreground mb-4">High-value order flag: Trigger on order creation. Condition: order value above £500. Action: tag order as &quot;high-value&quot; and send a priority fulfilment notification.</p>
                <p className="text-lg text-foreground mb-4">Fraud risk escalation: Trigger on order creation. Condition: Shopify fraud analysis risk level is high. Action: tag order as &quot;review-needed&quot; and pause automatic fulfilment.</p>

              </section>
              <section id="fraud-prevention" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Fraud Prevention</h2>
                <p className="text-lg text-foreground mb-4">Flow is extremely useful for managing fraud risk. Create a workflow that triggers on every order, checks Shopify&apos;s fraud analysis score, and automatically holds high-risk orders for manual review. This prevents chargebacks without requiring you to manually review every order.</p>
                <p className="text-lg text-foreground mb-4">You can also flag orders that match other risk patterns: orders with mismatched billing and shipping countries, orders using free email providers for high-value purchases, or first-time orders above a certain threshold.</p>

              </section>
              <section id="customer-tagging" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Tagging</h2>
                <p className="text-lg text-foreground mb-4">Customer tags enable segmentation for email marketing, B2B pricing, and personalisation. Create flows to automatically tag customers based on their behaviour: repeat buyer (tagged after 2nd purchase), high spender (tagged when lifetime spend exceeds £500), or wholesale (tagged when they submit a wholesale application form).</p>

              </section>
              <section id="inventory-workflows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Workflows</h2>
                <p className="text-lg text-foreground mb-4">Inventory-triggered workflows are among Flow&apos;s most practical applications. Set up alerts when any product variant drops below your reorder point. Create notifications when a product goes out of stock. Automatically unpublish products when inventory reaches zero if you do not want to show out-of-stock items.</p>

              </section>
              <section id="testing-flows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Flows</h2>
                <p className="text-lg text-foreground mb-4">Always test your flows before activating them. Use the &quot;Test&quot; button in the Flow editor to simulate a trigger event and trace how conditions and actions would execute. Check that the right data is being passed to each action and that conditions evaluate as expected.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-flow-automations" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flow Automations (Plus)</h4><p className="text-sm text-foreground">Advanced Flow patterns for Plus</p></Link>
                    <Link href="/guides/how-to-run-shopify-flash-sales" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flash Sales</h4><p className="text-sm text-foreground">Automate sale pricing with Flow</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Automate Your Store Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">We build custom Shopify Flow automations that save your team time and ensure consistent processes across ordering, fulfilment, and customer management.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
