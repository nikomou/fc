import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Zapier Integration",
  description: "Learn how to connect Shopify to other apps using Zapier. Covers connecting Shopify, popular Zaps, order notifications, customer data automation, limitations, and when to use native integrations.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-zapier-integration" },
  openGraph: {
    title: "How to Set Up Shopify Zapier Integration",
    description: "Learn how to connect Shopify to other apps using Zapier. Covers connecting Shopify, popular Zaps, order notifications, customer data automation, limitations, and when to use native integrations.",
    url: "/guides/how-to-set-up-shopify-zapier-integration",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-zapier-does", title: "What Zapier Does", level: 2 },
  { id: "connecting-shopify", title: "Connecting Shopify", level: 2 },
  { id: "popular-zaps", title: "Popular Zaps", level: 2 },
  { id: "order-notification-zaps", title: "Order Notification Zaps", level: 2 },
  { id: "customer-data-zaps", title: "Customer Data Zaps", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
  { id: "when-to-use-native-integrations", title: "When to Use Native Integrations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Zapier Integration",
  description: "Learn how to connect Shopify to other apps using Zapier. Covers connecting Shopify, popular Zaps, order notifications, customer data automation, limitations, and when to use native integrations.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-zapier-integration` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Zapier Integration", item: `${siteConfig.url}/guides/how-to-set-up-shopify-zapier-integration` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Integrations</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Zapier Integration</h1>
            <p className="text-xl text-foreground mb-8">Zapier connects Shopify to thousands of other apps without code. It is the fastest way to automate workflows between Shopify and tools like Slack, Google Sheets, Airtable, and hundreds of other platforms.</p>
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
              <section id="what-zapier-does" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Zapier Does</h2>
                <p className="text-lg text-foreground mb-4">Zapier is an automation platform that connects apps via pre-built connectors called Zaps. Each Zap has a trigger (something that happens in one app) and one or more actions (things that happen in other apps as a result).</p>
                <p className="text-lg text-foreground mb-4">For Shopify, triggers include: new order, order paid, order fulfilled, new customer, and product added. Actions include: create a row in Google Sheets, send a Slack message, add a subscriber to Mailchimp, or create a task in Asana.</p>
              </section>
              <section id="connecting-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Connecting Shopify</h2>
                <p className="text-lg text-foreground mb-4">Create a Zapier account and go to the Zap editor. Click the trigger step, search for Shopify, and connect your store. You will be redirected to authorise Zapier&apos;s access to your Shopify store. Once connected, select your trigger event.</p>
                <p className="text-lg text-foreground mb-4">Zapier supports around 15 Shopify triggers covering orders, customers, products, and inventory. For triggers not available natively, use Shopify&apos;s webhooks as a Custom Webhook trigger in Zapier.</p>
              </section>
              <section id="popular-zaps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Popular Zaps</h2>
                <p className="text-lg text-foreground mb-4">New order to Google Sheets: log every order to a spreadsheet for team visibility or custom reporting. New order to Slack: notify your team in a Slack channel when orders above a certain value arrive. New customer to CRM: add new Shopify customers as contacts in HubSpot, Salesforce, or Pipedrive.</p>
              </section>
              <section id="order-notification-zaps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Order Notification Zaps</h2>
                <p className="text-lg text-foreground mb-4">Build order notification Zaps to keep teams informed without manual checks. Examples: high-value orders (filter for order total above £500) trigger a Slack message to your VIP fulfilment channel, international orders trigger a Slack notification to your logistics team, and orders with specific product tags trigger emails to relevant departments.</p>
              </section>
              <section id="customer-data-zaps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Data Zaps</h2>
                <p className="text-lg text-foreground mb-4">Use Zaps to keep customer data consistent across systems. New Shopify customer creates a HubSpot contact. Customer who places second order gets tagged in Mailchimp. A customer tag added in Shopify via Flow triggers a Zapier action to update records in a connected CRM.</p>
              </section>
              <section id="limitations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Limitations</h2>
                <p className="text-lg text-foreground mb-4">Zapier introduces latency: Zaps typically run within 1-15 minutes, not in real time. For time-sensitive operations (like stock alerts), this delay may be unacceptable.</p>
                <p className="text-lg text-foreground mb-4">Zapier&apos;s free plan is limited to 100 tasks per month and single-step Zaps. For meaningful Shopify automation, expect to pay £20-£50/month for a plan that covers your task volume.</p>
              </section>
              <section id="when-to-use-native-integrations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When to Use Native Integrations</h2>
                <p className="text-lg text-foreground mb-4">Zapier is excellent for lightweight, occasional automations and connecting niche tools without their own Shopify integrations. For high-volume or mission-critical workflows (accounting, inventory, email marketing), use native integrations: they are more reliable, faster, and usually offer better error handling.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-use-shopify-flow" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Flow</h4><p className="text-sm text-foreground">Native automation without Zapier</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-flow-automations" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Flow Automations</h4><p className="text-sm text-foreground">Advanced Flow for Plus</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Custom Automation for Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">We build Shopify automation workflows using Flow, Zapier, and custom APIs to connect your store with any business tool.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
