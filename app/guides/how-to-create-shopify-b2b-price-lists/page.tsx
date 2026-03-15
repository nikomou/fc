import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create B2B Price Lists on Shopify",
  description: "Learn how to create B2B price lists on Shopify. Covers pricing models, Shopify Plus price lists, customer tag discounts, app alternatives, and ERP syncing.",
  alternates: { canonical: "/guides/how-to-create-shopify-b2b-price-lists" },
  openGraph: {
    title: "How to Create B2B Price Lists on Shopify",
    description: "Learn how to create B2B price lists on Shopify. Covers pricing models, Shopify Plus price lists, customer tag discounts, app alternatives, and ERP syncing.",
    url: "/guides/how-to-create-shopify-b2b-price-lists",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "b2b-pricing-models", title: "B2B Pricing Models", level: 2 },
  { id: "shopify-plus-price-lists", title: "Shopify Plus Price Lists", level: 2 },
  { id: "customer-tag-discounts", title: "Customer Tag Discounts", level: 2 },
  { id: "app-alternatives", title: "App Alternatives", level: 2 },
  { id: "managing-multiple-price-tiers", title: "Multiple Price Tiers", level: 2 },
  { id: "syncing-with-erp", title: "Syncing with ERP", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create B2B Price Lists on Shopify",
  description: "Learn how to create B2B price lists on Shopify. Covers pricing models, Shopify Plus price lists, customer tag discounts, app alternatives, and ERP syncing.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-b2b-price-lists` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create B2B Price Lists on Shopify", item: `${siteConfig.url}/guides/how-to-create-shopify-b2b-price-lists` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">B2B &amp; Wholesale</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Create B2B Price Lists on Shopify</h1>
            <p className="text-xl text-foreground mb-8">B2B customers expect pricing that reflects their relationship with your brand, from simple trade discounts to complex tiered pricing by volume or customer segment. This guide explains how to implement B2B pricing on Shopify.</p>
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
              <section id="b2b-pricing-models" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">B2B Pricing Models</h2>
                <p className="text-lg text-foreground mb-4">The most common B2B pricing approaches are: flat percentage discount off RRP (e.g., all trade customers get 30% off), tiered pricing by volume (higher discounts for larger orders), customer-specific pricing (individual price lists per account), and catalogue pricing (separate wholesale prices for each SKU).</p>
                <p className="text-lg text-foreground mb-4">Choose a model that reflects your trade relationships and is practical to administer. Flat percentage discounts are simplest to manage. Customer-specific price lists offer the most flexibility but require more maintenance.</p>
              </section>
              <section id="shopify-plus-price-lists" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shopify Plus Price Lists</h2>
                <p className="text-lg text-foreground mb-4">Shopify B2B on Plus allows you to create price lists with fixed prices or percentage discounts per product or variant. Each price list is assigned to one or more B2B companies (customer accounts). When a B2B buyer logs in, they see prices from their assigned price list rather than retail prices.</p>
                <p className="text-lg text-foreground mb-4">Create price lists in Shopify admin under B2B, then Price Lists. Set the name, currency, and tax settings (B2B customers in the UK often purchase ex-VAT). Add products and set fixed prices or discount percentages.</p>
              </section>
              <section id="customer-tag-discounts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Tag Discounts</h2>
                <p className="text-lg text-foreground mb-4">On standard Shopify plans, customer tag-based discounts are the most practical B2B pricing approach. Tag wholesale customers with a tag like &quot;wholesale&quot;, then use an app to apply automatic discounts based on this tag.</p>
                <p className="text-lg text-foreground mb-4">Wholesale Club and Bold Custom Pricing allow automatic price adjustments for tagged customer groups. The customer sees wholesale prices as soon as they log in, with no need to apply a discount code.</p>
              </section>
              <section id="app-alternatives" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Alternatives</h2>
                <p className="text-lg text-foreground mb-4">For non-Plus merchants, Wholesale Club, Wholesale Gorilla, and Handshake (Shopify&apos;s own B2B marketplace, US-focused) are the main options. Wholesale Club offers a good balance of features and affordability at around £40/month.</p>
                <p className="text-lg text-foreground mb-4">These apps create a separate wholesale pricing layer that displays to logged-in wholesale customers, while retail customers see standard prices.</p>
              </section>
              <section id="managing-multiple-price-tiers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Multiple Price Tiers</h2>
                <p className="text-lg text-foreground mb-4">If you have multiple wholesale tiers (e.g., Retailer, Distributor, Key Account), create separate price lists or customer tags for each tier. Keep your tier structure simple: 2-3 tiers are manageable, more than that creates significant administrative overhead.</p>
              </section>
              <section id="syncing-with-erp" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Syncing with ERP</h2>
                <p className="text-lg text-foreground mb-4">If you use an ERP system (Sage, NetSuite, SAP), B2B prices may live in the ERP and need to be synchronised to Shopify. Integration platforms like Patchworks, Akeneo, or custom API integrations can sync price lists from your ERP to Shopify on a scheduled basis or in real time.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-b2b" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Shopify B2B</h4><p className="text-sm text-foreground">Full B2B portal setup</p></Link>
                    <Link href="/guides/how-to-set-up-minimum-order-quantities-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Minimum Order Quantities</h4><p className="text-sm text-foreground">Set MOQs for wholesale orders</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With B2B Pricing?</h2>
          <p className="text-xl text-gray-300 mb-8">We implement B2B price lists, customer portal access, and ERP integrations for Shopify Plus wholesale operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
