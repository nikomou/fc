import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use Shopify Inbox",
  description: "Learn how to use Shopify Inbox for customer messaging. Covers setup, automated replies, product sharing, conversation management, mobile app, and analytics.",
  alternates: { canonical: "/guides/how-to-use-shopify-inbox" },
  openGraph: {
    title: "How to Use Shopify Inbox",
    description: "Learn how to use Shopify Inbox for customer messaging. Covers setup, automated replies, product sharing, conversation management, mobile app, and analytics.",
    url: "/guides/how-to-use-shopify-inbox",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-inbox", title: "What Is Shopify Inbox", level: 2 },
  { id: "setting-up-inbox", title: "Setting Up Inbox", level: 2 },
  { id: "automated-replies", title: "Automated Replies", level: 2 },
  { id: "product-sharing", title: "Product Sharing", level: 2 },
  { id: "conversation-management", title: "Conversation Management", level: 2 },
  { id: "mobile-app", title: "Mobile App", level: 2 },
  { id: "inbox-analytics", title: "Inbox Analytics", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Shopify Inbox",
  description: "Learn how to use Shopify Inbox for customer messaging. Covers setup, automated replies, product sharing, conversation management, mobile app, and analytics.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-use-shopify-inbox` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Use Shopify Inbox", item: `${siteConfig.url}/guides/how-to-use-shopify-inbox` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Customer Experience</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Use Shopify Inbox</h1>
            <p className="text-xl text-foreground mb-8">Shopify Inbox is the free customer messaging tool built into every Shopify plan. It handles live chat, automated responses, and product recommendations in one place. This guide covers how to set it up and use it effectively.</p>
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
              <section id="what-is-shopify-inbox" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Shopify Inbox</h2>
                <p className="text-lg text-foreground mb-4">Shopify Inbox is a customer messaging platform that centralises conversations from your store chat widget, email, and social DMs in a single inbox. It is free and built into your Shopify admin: no additional app installation required.</p>
                <p className="text-lg text-foreground mb-4">When a customer messages you via the chat widget on your store, the conversation appears in Shopify Inbox. Your team can respond from a browser, the Shopify app, or the dedicated Inbox mobile app.</p>
              </section>
              <section id="setting-up-inbox" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Up Inbox</h2>
                <p className="text-lg text-foreground mb-4">Enable Shopify Inbox by going to Inbox in your Shopify admin sidebar. Click &quot;Start using Inbox&quot; to activate it. This adds a chat widget to your store automatically.</p>
                <p className="text-lg text-foreground mb-4">Customise the chat widget: set the colour, button style, and greeting message. Configure your availability: set the hours when agents are available and the offline message shown when you are unavailable.</p>
              </section>
              <section id="automated-replies" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Automated Replies</h2>
                <p className="text-lg text-foreground mb-4">Shopify Inbox includes an instant replies feature that automatically responds to common questions without agent involvement. Set up responses for: delivery time, returns policy, order status, and product FAQs.</p>
                <p className="text-lg text-foreground mb-4">These automated replies can be configured with quick answer shortcuts: customers tap a common question, and the automated answer appears instantly. This reduces handle time and responds to customers even when agents are unavailable.</p>
              </section>
              <section id="product-sharing" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Sharing</h2>
                <p className="text-lg text-foreground mb-4">One of Shopify Inbox&apos;s strongest features is product sharing. During a conversation, agents can search your product catalogue and share a product card directly in chat. The customer sees the product image, price, and a link to buy it without leaving the chat.</p>
                <p className="text-lg text-foreground mb-4">This is particularly effective for customers who ask &quot;do you have X in my size?&quot; or &quot;what do you recommend for Y?&quot;. The agent can instantly share the relevant product rather than giving a URL.</p>
              </section>
              <section id="conversation-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Conversation Management</h2>
                <p className="text-lg text-foreground mb-4">Assign conversations to specific team members for accountability. Add internal notes to conversations that are visible to your team but not the customer. Tag conversations by topic (returns, product query, order issue) for reporting and routing.</p>
                <p className="text-lg text-foreground mb-4">Set up email follow-ups for conversations that go offline: if a customer closes the chat, any response is automatically sent to their email.</p>
              </section>
              <section id="mobile-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mobile App</h2>
                <p className="text-lg text-foreground mb-4">The Shopify Inbox mobile app lets your team respond to customer messages from their phones. It sends push notifications for new messages, so you can respond quickly even when away from the computer.</p>
                <p className="text-lg text-foreground mb-4">The mobile app is particularly useful for small teams where one person handles both operations and customer service. Real-time notifications mean you do not miss messages during busy periods.</p>
              </section>
              <section id="inbox-analytics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inbox Analytics</h2>
                <p className="text-lg text-foreground mb-4">Inbox shows basic analytics: total conversations, response time, and conversation outcomes. Use this data to identify peak conversation times, common question topics, and how quickly your team is responding.</p>
                <p className="text-lg text-foreground mb-4">If you want deeper customer service analytics, consider upgrading to Gorgias or another dedicated customer service platform.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-live-chat" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Live Chat Options</h4><p className="text-sm text-foreground">Compare Inbox with other chat tools</p></Link>
                    <Link href="/guides/how-to-write-shopify-store-policies" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Store Policies</h4><p className="text-sm text-foreground">Reduce queries with clear policies</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Customer Service Setup?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure Shopify Inbox, set up automated reply flows, and help you build customer service processes that scale with your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
