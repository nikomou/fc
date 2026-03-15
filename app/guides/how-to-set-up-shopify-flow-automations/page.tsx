import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Flow Automations",
  description: "Learn how to set up advanced Shopify Flow automations for Plus. Covers high-value customer workflows, risk management, inventory alerts, B2B automations, and debugging.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-flow-automations" },
  openGraph: {
    title: "How to Set Up Shopify Flow Automations",
    description: "Learn how to set up advanced Shopify Flow automations for Plus. Covers high-value customer workflows, risk management, inventory alerts, B2B automations, and debugging.",
    url: "/guides/how-to-set-up-shopify-flow-automations",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "flow-vs-scripts", title: "Flow vs Scripts", level: 2 },
  { id: "high-value-customer-workflows", title: "High-Value Customer Workflows", level: 2 },
  { id: "risk-management-flows", title: "Risk Management Flows", level: 2 },
  { id: "inventory-alerts", title: "Inventory Alerts", level: 2 },
  { id: "b2b-automations", title: "B2B Automations", level: 2 },
  { id: "custom-triggers", title: "Custom Triggers", level: 2 },
  { id: "debugging-flows", title: "Debugging Flows", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Flow Automations",
  description: "Learn how to set up advanced Shopify Flow automations for Plus. Covers high-value customer workflows, risk management, inventory alerts, B2B automations, and debugging.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-flow-automations` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Flow Automations", item: `${siteConfig.url}/guides/how-to-set-up-shopify-flow-automations` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Flow Automations</h1>
            <p className="text-xl text-foreground mb-8">Shopify Flow&apos;s power becomes fully apparent on Plus, where you can combine it with metafield writes, B2B configuration, and external webhook triggers to build sophisticated automation. This guide covers advanced Flow patterns beyond the basics.</p>
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
              <section id="flow-vs-scripts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Flow vs Scripts</h2>
                <p className="text-lg text-foreground mb-4">Shopify Flow handles business logic and data operations: tagging, notifications, metafield updates, and conditional routing. Shopify Scripts handle checkout modifications: price changes, shipping filtering, payment method control. They serve different purposes and are often used together.</p>
                <p className="text-lg text-foreground mb-4">Use Flow for operational automation. Use Functions or Scripts for checkout rules.</p>
              </section>
              <section id="high-value-customer-workflows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">High-Value Customer Workflows</h2>
                <p className="text-lg text-foreground mb-4">Build a comprehensive high-value customer flow: trigger on customer lifetime value reaching a threshold (e.g., £500 total spend). Actions: add the VIP tag, send an internal notification to your CRM team, trigger a personalised email via a webhook to Klaviyo, and update a customer metafield with their tier.</p>
                <p className="text-lg text-foreground mb-4">This single workflow replaces what would otherwise be a daily manual review of customer data.</p>
              </section>
              <section id="risk-management-flows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Risk Management Flows</h2>
                <p className="text-lg text-foreground mb-4">Fraud prevention flows are among the most valuable Plus automations. Create a flow that triggers on order creation, checks the Shopify fraud analysis level, and for high-risk orders: adds an investigate tag, sends an internal Slack message, and holds fulfilment.</p>
              </section>
              <section id="inventory-alerts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Alerts</h2>
                <p className="text-lg text-foreground mb-4">Build multi-threshold inventory alert flows: below 20 units triggers a low-stock notification to your buying team, below 5 units triggers an urgent alert, reaching 0 triggers an automatic product unpublish and a notification to your web team.</p>
              </section>
              <section id="b2b-automations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">B2B Automations</h2>
                <p className="text-lg text-foreground mb-4">Flow integrates with Shopify B2B on Plus. Build automations that trigger when a company applies for a trade account, update company metafields when purchase thresholds are reached, or notify account managers when a key account places an unusual order.</p>
              </section>
              <section id="custom-triggers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Custom Triggers</h2>
                <p className="text-lg text-foreground mb-4">Flow&apos;s Run Code step (available on Plus) allows you to execute custom JavaScript within a flow, accessing external APIs and performing complex data transformations not possible with standard flow actions.</p>
              </section>
              <section id="debugging-flows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Debugging Flows</h2>
                <p className="text-lg text-foreground mb-4">Use Flow&apos;s activity log to review which runs succeeded and which failed. Failed runs show the exact step and error message. Common failures: null reference errors, API timeout errors, and condition errors where logic does not match the expected data type.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-use-shopify-flow" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Flow Basics</h4><p className="text-sm text-foreground">Start with Flow fundamentals</p></Link>
                    <Link href="/guides/how-to-use-shopify-plus-launchpad" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Launchpad</h4><p className="text-sm text-foreground">Automate sale events</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Advanced Shopify Flow Automation?</h2>
          <p className="text-xl text-gray-300 mb-8">Our Plus specialists design and build complex Flow automations that connect your store operations, CRM, and fulfilment systems.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
