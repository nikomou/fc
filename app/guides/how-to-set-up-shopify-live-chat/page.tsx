import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Live Chat on Shopify",
  description: "Learn how to set up live chat on Shopify. Covers Shopify Inbox, third-party options, proactive chat triggers, AI chatbots, staffing, and measuring ROI.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-live-chat" },
  openGraph: {
    title: "How to Set Up Live Chat on Shopify",
    description: "Learn how to set up live chat on Shopify. Covers Shopify Inbox, third-party options, proactive chat triggers, AI chatbots, staffing, and measuring ROI.",
    url: "/guides/how-to-set-up-shopify-live-chat",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "live-chat-roi", title: "Live Chat ROI", level: 2 },
  { id: "shopify-inbox", title: "Shopify Inbox", level: 2 },
  { id: "third-party-options", title: "Third-Party Options", level: 2 },
  { id: "proactive-chat-triggers", title: "Proactive Chat Triggers", level: 2 },
  { id: "chatbots-and-ai", title: "Chatbots and AI", level: 2 },
  { id: "staffing-live-chat", title: "Staffing Live Chat", level: 2 },
  { id: "measuring-impact", title: "Measuring Impact", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Live Chat on Shopify",
  description: "Learn how to set up live chat on Shopify. Covers Shopify Inbox, third-party options, proactive chat triggers, AI chatbots, staffing, and measuring ROI.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-live-chat` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Live Chat on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-live-chat` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Live Chat on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Live chat converts at 3-5x the rate of email support because it catches customers at the moment of decision. This guide covers how to implement live chat on Shopify, from the free built-in option to sophisticated AI-powered solutions.</p>
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
              <section id="live-chat-roi" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Live Chat ROI</h2>
                <p className="text-lg text-foreground mb-4">Live chat generates a direct ROI through two channels: higher conversion rates (customers who chat convert at significantly higher rates) and reduced support costs (chat handles multiple conversations simultaneously, unlike phone support).</p>
                <p className="text-lg text-foreground mb-4">For UK ecommerce brands, live chat is particularly valuable during peak trading periods when purchase intent is highest. A well-staffed chat during a flash sale can measurably increase revenue.</p>
              </section>
              <section id="shopify-inbox" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Inbox</h2>
                <p className="text-lg text-foreground mb-4">Shopify Inbox is free, built into all Shopify plans, and provides a solid live chat foundation. It includes a website chat widget, a shared inbox for your team, automated replies for common questions, and integration with email and social DMs.</p>
                <p className="text-lg text-foreground mb-4">Enable it in your Shopify admin under Inbox. Customise the chat widget appearance to match your brand. Set up automated instant replies for common queries: order status, shipping times, returns policy. These reduce the volume of conversations requiring agent attention.</p>
              </section>
              <section id="third-party-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Third-Party Options</h2>
                <p className="text-lg text-foreground mb-4">Third-party live chat platforms offer more advanced features: visitor tracking, chat routing by department, CRM integration, and detailed analytics. Popular options for UK Shopify merchants include Gorgias (ecommerce-focused, excellent Shopify integration), Tidio (affordable, good AI), and Intercom (enterprise-grade).</p>
                <p className="text-lg text-foreground mb-4">Gorgias is particularly strong for Shopify because it shows order data inside the chat, so agents can see a customer&apos;s order history without switching tabs.</p>
              </section>
              <section id="proactive-chat-triggers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Proactive Chat Triggers</h2>
                <p className="text-lg text-foreground mb-4">Proactive chat initiates a conversation with a visitor based on their behaviour, without waiting for them to click the chat icon. Common triggers: visitor on the returns page for more than 60 seconds (offer to help), visitor on the checkout for more than 2 minutes (offer to answer questions), visitor viewing a high-value product for more than 3 minutes.</p>
                <p className="text-lg text-foreground mb-4">Use proactive triggers sparingly. Too many triggers are intrusive and increase opt-out rates for the chat widget.</p>
              </section>
              <section id="chatbots-and-ai" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Chatbots and AI</h2>
                <p className="text-lg text-foreground mb-4">AI chatbots can handle a significant proportion of routine queries (order status, returns policy, product availability) without human involvement. This allows your team to focus on complex queries that genuinely need human judgement.</p>
                <p className="text-lg text-foreground mb-4">Most modern live chat platforms include AI capabilities. Shopify Inbox uses AI-powered suggested replies. Tidio has Lyro, an AI agent. Gorgias has AI auto-responders. Test AI responses carefully before deploying them widely: inaccurate AI responses can damage trust.</p>
              </section>
              <section id="staffing-live-chat" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Staffing Live Chat</h2>
                <p className="text-lg text-foreground mb-4">Live chat without staffing quickly becomes a poor experience. If customers open a chat and receive no response within 2-3 minutes, they leave. Set realistic availability hours and display them clearly on the chat widget.</p>
                <p className="text-lg text-foreground mb-4">A single agent can handle 3-5 simultaneous chats. For smaller teams, restrict chat availability to specific hours rather than promising 24/7 support you cannot deliver.</p>
              </section>
              <section id="measuring-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring Impact</h2>
                <p className="text-lg text-foreground mb-4">Track: chat-to-conversion rate (percentage of chat sessions that result in a purchase), average handle time, first response time, and customer satisfaction (CSAT) scores. Most chat platforms provide these metrics natively.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-use-shopify-inbox" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Use Shopify Inbox</h4><p className="text-sm text-foreground">Deep dive into Shopify Inbox</p></Link>
                    <Link href="/guides/how-to-write-shopify-store-policies" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Store Policies</h4><p className="text-sm text-foreground">Create policies to reduce support queries</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Setting Up Customer Support?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure live chat platforms, set up AI automations, and help you build support workflows that convert more customers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
