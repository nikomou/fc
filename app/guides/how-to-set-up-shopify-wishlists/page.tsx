import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up a Wishlist on Shopify",
  description: "Learn how to add a wishlist feature to your Shopify store. Covers app options, placement, sharing functionality, wishlist emails, and conversion impact.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-wishlists" },
  openGraph: {
    title: "How to Set Up a Wishlist on Shopify",
    description: "Learn how to add a wishlist feature to your Shopify store. Covers app options, placement, sharing functionality, wishlist emails, and conversion impact.",
    url: "/guides/how-to-set-up-shopify-wishlists",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-wishlists-matter", title: "Why Wishlists Matter", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "wishlist-placement", title: "Wishlist Placement", level: 2 },
  { id: "sharing-functionality", title: "Sharing Functionality", level: 2 },
  { id: "wishlist-emails", title: "Wishlist Emails", level: 2 },
  { id: "measuring-wishlist-impact", title: "Measuring Impact", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up a Wishlist on Shopify",
  description: "Learn how to add a wishlist feature to your Shopify store. Covers app options, placement, sharing functionality, wishlist emails, and measuring impact on conversions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-wishlists` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up a Wishlist on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-wishlists` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Conversion Optimisation</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up a Wishlist on Shopify
            </h1>
            <p className="text-xl text-foreground mb-8">
              Wishlists let customers save products for later, reducing the friction of re-finding items and giving you a direct line to remind them when they are ready to buy. This guide covers how to implement them effectively.
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

              <section id="why-wishlists-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Wishlists Matter</h2>
                <p className="text-lg text-foreground mb-4">Many customers browse your store without being ready to buy. A wishlist lets them bookmark products without adding to cart, reducing the frustration of searching again when they return. For retailers, it converts casual browsers into identifiable potential buyers.</p>
                <p className="text-lg text-foreground mb-4">Wishlist data is valuable beyond conversion. Highly wishlisted products signal strong demand and can inform buying decisions, restocking priorities, and sale pricing. Products that are wishlisted heavily but not purchased may indicate a price barrier.</p>
              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">Shopify does not offer a native wishlist feature. You need a third-party app. The most popular options are Wishlist Plus by Swym, Growave, and HW Wishlist. Wishlist Plus is the market leader with strong analytics and email integration. Expect to pay £15-£30 per month for a reputable app.</p>
                <p className="text-lg text-foreground mb-4">Key features to look for: wishlist available without account login (guest wishlists via email or local storage), email notifications when wishlisted items go on sale, sharing functionality, and an analytics dashboard showing your most-wishlisted products.</p>
              </section>
              <section id="wishlist-placement" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Wishlist Placement</h2>
                <p className="text-lg text-foreground mb-4">The wishlist button should appear on every product page, typically as a heart icon near the add-to-cart button. It should also appear on collection page product cards for quick wishlist adds without opening the product page.</p>
                <p className="text-lg text-foreground mb-4">A dedicated &quot;My Wishlist&quot; page should be accessible from the account menu and the header. Make it easy for customers to find their saved items when they return.</p>
              </section>
              <section id="sharing-functionality" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Sharing Functionality</h2>
                <p className="text-lg text-foreground mb-4">Shareable wishlists are particularly valuable for gifting. A customer can build a wishlist and share the link with friends or family before a birthday or Christmas. This brings new visitors to your store who are ready to buy specific products.</p>
              </section>
              <section id="wishlist-emails" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Wishlist Emails</h2>
                <p className="text-lg text-foreground mb-4">Automated wishlist emails are among the most effective triggered messages you can send. A &quot;your wishlisted item is back in stock&quot; email or &quot;your wishlisted item is now on sale&quot; notification converts at 3-5x the rate of standard promotional emails because the customer has already expressed intent.</p>
              </section>
              <section id="measuring-wishlist-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring Impact</h2>
                <p className="text-lg text-foreground mb-4">Track: number of active wishlists, items added to wishlist, wishlist-to-purchase conversion rate, and revenue attributed to wishlist email clicks. Most wishlist apps provide these metrics. A healthy wishlist-to-purchase conversion rate is 8-15% within 30 days.</p>
              </section>

              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-upsells" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Upsells</h4><p className="text-sm text-foreground">Increase order value</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-abandoned-cart-emails" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Abandoned Cart Emails</h4><p className="text-sm text-foreground">Recover more abandoned sessions</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Add a Wishlist to Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We integrate wishlist apps, configure email automations, and ensure the wishlist experience matches your brand design.
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
