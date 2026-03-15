import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Dropshipping on Shopify",
  description: "Learn how to set up dropshipping on Shopify. Covers finding suppliers, product research, setting margins, fulfilment workflows, customer expectations, and scaling.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-dropshipping" },
  openGraph: {
    title: "How to Set Up Dropshipping on Shopify",
    description: "Learn how to set up dropshipping on Shopify. Covers finding suppliers, product research, setting margins, fulfilment workflows, customer expectations, and scaling.",
    url: "/guides/how-to-set-up-shopify-dropshipping",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "dropshipping-basics", title: "Dropshipping Basics", level: 2 },
  { id: "choosing-suppliers", title: "Choosing Suppliers", level: 2 },
  { id: "product-research", title: "Product Research", level: 2 },
  { id: "setting-margins", title: "Setting Margins", level: 2 },
  { id: "fulfilment-workflow", title: "Fulfilment Workflow", level: 2 },
  { id: "customer-expectations", title: "Customer Expectations", level: 2 },
  { id: "scaling", title: "Scaling", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Dropshipping on Shopify",
  description: "Learn how to set up dropshipping on Shopify. Covers finding suppliers, product research, setting margins, fulfilment workflows, customer expectations, and scaling.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-dropshipping` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Dropshipping on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-dropshipping` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shipping &amp; Fulfilment</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>18 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Dropshipping on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Dropshipping lets you sell products without holding stock: orders are fulfilled directly by suppliers. It lowers startup costs but requires careful management of suppliers, margins, and customer expectations. This guide covers everything you need to start and scale a dropshipping business on Shopify.</p>
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
              <section id="dropshipping-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Dropshipping Basics</h2>
                <p className="text-lg text-foreground mb-4">In a dropshipping model, you take the customer order and payment on your Shopify store, then pass the order to a supplier who ships directly to the customer. You never handle the product. Your profit is the difference between your retail price and the supplier&apos;s wholesale price.</p>
                <p className="text-lg text-foreground mb-4">The advantages are low startup costs, no inventory risk, and the ability to test products without upfront investment. The disadvantages are lower margins, less control over quality and shipping times, and high competition.</p>
              </section>
              <section id="choosing-suppliers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing Suppliers</h2>
                <p className="text-lg text-foreground mb-4">UK dropshipping suppliers offer shorter delivery times than Chinese suppliers, which matters significantly for customer satisfaction. For UK-based dropshipping, look at suppliers on directories like Wholesale Clearance UK, Avasam, and Syncee for UK suppliers.</p>
                <p className="text-lg text-foreground mb-4">For international products, AliExpress is widely used but delivery times of 2-4 weeks are increasingly unacceptable to UK customers. Alternatives like Zendrop and CJDropshipping offer faster shipping from warehouses in Europe and the UK.</p>
              </section>
              <section id="product-research" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Research</h2>
                <p className="text-lg text-foreground mb-4">Winning dropshipping products solve a specific problem or have a strong impulse-buy element. Use tools like Ecomhunt, Sell the Trend, or simply monitor TikTok Shop and Amazon Best Sellers to find trending products.</p>
                <p className="text-lg text-foreground mb-4">Validate demand before building a store around a product. Use Google Trends to confirm the product has stable or growing search interest. Check the competitive landscape on Google Shopping for your target keywords.</p>
              </section>
              <section id="setting-margins" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Margins</h2>
                <p className="text-lg text-foreground mb-4">Dropshipping margins are typically 20-40% compared to 50-70% for owned inventory. Factor in: product cost, Shopify fees (around 2% on Shopify plan), payment processing fees (1.5-2.5%), advertising costs (often 20-30% of revenue for paid ads), and customer service costs.</p>
                <p className="text-lg text-foreground mb-4">With 30% gross margin and 25% marketing cost, net margins are slim. Focus on products where you can charge a premium, or build a brand that reduces paid advertising dependency over time.</p>
              </section>
              <section id="fulfilment-workflow" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Fulfilment Workflow</h2>
                <p className="text-lg text-foreground mb-4">Automate order fulfilment as much as possible. DSers (for AliExpress) and AutoDS connect your Shopify store to suppliers and automatically forward orders. For Avasam and other UK suppliers, check their Shopify integration options.</p>
                <p className="text-lg text-foreground mb-4">Set clear expectations with suppliers about processing times, packaging standards, and return procedures before you list their products.  Get samples of key products before listing them.</p>
              </section>
              <section id="customer-expectations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Customer Expectations</h2>
                <p className="text-lg text-foreground mb-4">Dropshipping&apos;s main customer experience challenge is delivery time. Be transparent about shipping timescales on product pages and in checkout. UK customers expect 2-5 day delivery. If your supplier ships from China, clearly state estimated delivery of 10-20 business days.</p>
                <p className="text-lg text-foreground mb-4">Returns are complex with dropshipping: the customer returns to you, but you need to arrange a return to the supplier or offer a replacement. Set a clear returns policy and build your returns process before you launch.</p>
              </section>
              <section id="scaling" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Scaling</h2>
                <p className="text-lg text-foreground mb-4">The most successful dropshipping businesses evolve beyond pure dropshipping: they build a brand, negotiate better supplier terms, eventually hold stock of best-sellers, and create a differentiated customer experience.</p>
                <p className="text-lg text-foreground mb-4">Focus your growth on a specific niche rather than selling everything to everyone. A niche store with curated products, strong brand identity, and good customer reviews outperforms a general store in both conversion and SEO.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-integrate-shopify-with-royal-mail" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Royal Mail Integration</h4><p className="text-sm text-foreground">Manage UK order fulfilment</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-customer-accounts" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Customer Accounts</h4><p className="text-sm text-foreground">Improve post-purchase experience</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Shopify Store?</h2>
          <p className="text-xl text-gray-300 mb-8">We build professional Shopify stores optimised for dropshipping and private label, with integrated fulfilment automation and brand design.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
