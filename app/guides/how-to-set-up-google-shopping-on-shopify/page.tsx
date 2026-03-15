import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Google Shopping on Shopify",
  description: "Learn how to set up Google Shopping on Shopify. Covers Google Merchant Centre setup, product feed requirements, optimising titles, bidding strategy, and fixing common errors.",
  alternates: { canonical: "/guides/how-to-set-up-google-shopping-on-shopify" },
  openGraph: {
    title: "How to Set Up Google Shopping on Shopify",
    description: "Learn how to set up Google Shopping on Shopify. Covers Google Merchant Centre setup, product feed requirements, optimising titles, bidding strategy, and fixing common errors.",
    url: "/guides/how-to-set-up-google-shopping-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "google-shopping-overview", title: "Google Shopping Overview", level: 2 },
  { id: "google-merchant-centre-setup", title: "Google Merchant Centre Setup", level: 2 },
  { id: "product-feed-requirements", title: "Product Feed Requirements", level: 2 },
  { id: "optimising-product-titles", title: "Optimising Product Titles", level: 2 },
  { id: "bidding-strategy", title: "Bidding Strategy", level: 2 },
  { id: "monitoring-performance", title: "Monitoring Performance", level: 2 },
  { id: "common-feed-errors", title: "Common Feed Errors", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Google Shopping on Shopify",
  description: "Learn how to set up Google Shopping on Shopify. Covers Google Merchant Centre setup, product feed requirements, optimising titles, bidding strategy, and fixing common errors.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-google-shopping-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Google Shopping on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-google-shopping-on-shopify` },
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
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Google Shopping on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Google Shopping puts your products directly in front of customers searching for what you sell, with images and prices visible before they even click. For most UK ecommerce brands, Shopping campaigns deliver the highest ROAS of any paid channel.</p>
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
              <section id="google-shopping-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Google Shopping Overview</h2>
                <p className="text-lg text-foreground mb-4">Google Shopping ads appear at the top of Google search results as product cards with images, prices, and seller names. They are powered by a product feed submitted to Google Merchant Centre, which feeds into Google Ads Shopping campaigns.</p>
                <p className="text-lg text-foreground mb-4">Free listings are also available via the Surfaces Across Google programme, which shows your products in unpaid Shopping results. This requires the same Merchant Centre setup as paid Shopping but generates traffic without ad spend.</p>

              </section>
              <section id="google-merchant-centre-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Google Merchant Centre Setup</h2>
                <p className="text-lg text-foreground mb-4">Create a Google Merchant Centre account at merchants.google.com. You will need to verify and claim your domain. The easiest way is via Google Search Console: if you already have GSC verified, you can connect it directly.</p>
                <p className="text-lg text-foreground mb-4">Set your business information: store name, website URL, business country (UK), and currency (GBP). Configure your shipping settings to match your actual shipping costs and delivery timeframes. Inaccurate shipping information is one of the most common reasons for product disapprovals.</p>

              </section>
              <section id="product-feed-requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Feed Requirements</h2>
                <p className="text-lg text-foreground mb-4">Your product feed must include: id, title, description, link, image_link, availability, price, brand, and GTIN (barcode) for products that have one. Additional attributes like colour, size, age_group, and gender improve product matching and eligibility for some Shopping formats.</p>
                <p className="text-lg text-foreground mb-4">Submit your feed via the Google and YouTube Shopify app, which automatically syncs your Shopify product catalogue to Merchant Centre. The app handles most required attributes automatically, pulling data from your product fields.</p>

              </section>
              <section id="optimising-product-titles" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Optimising Product Titles</h2>
                <p className="text-lg text-foreground mb-4">Product title is the most important attribute in your feed for both matching and click-through rate. Google matches your title to search queries, so include the most important keywords at the beginning.</p>
                <p className="text-lg text-foreground mb-4">For apparel: Brand + Gender + Product Type + Key Attribute. Example: &quot;Levi&apos;s Men&apos;s 501 Original Fit Jeans - Blue&quot;. For electronics: Brand + Product Name + Model + Key Spec. Avoid promotional text like &quot;Best&quot; or &quot;Sale&quot; in titles.</p>

              </section>
              <section id="bidding-strategy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Bidding Strategy</h2>
                <p className="text-lg text-foreground mb-4">Start with a manual CPC campaign to gather data before using automated bidding. Set bids at product group level, bidding higher on your best-converting product categories.</p>
                <p className="text-lg text-foreground mb-4">After 30-60 days of data with 50+ conversions, switch to Target ROAS automated bidding. Set your target based on your actual ROAS from the manual campaign period. Avoid setting an aggressive target ROAS immediately as this can cause the algorithm to restrict delivery.</p>

              </section>
              <section id="monitoring-performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Monitoring Performance</h2>
                <p className="text-lg text-foreground mb-4">Monitor your Shopping campaigns weekly. Key metrics: impressions, clicks, CTR, conversion rate, CPA, and ROAS. Segment performance by product type, brand, and individual product to identify your top and bottom performers.</p>
                <p className="text-lg text-foreground mb-4">Use Search Terms reports to find irrelevant queries triggering your ads and add them as negative keywords.</p>

              </section>
              <section id="common-feed-errors" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Common Feed Errors</h2>
                <p className="text-lg text-foreground mb-4">Missing GTINs: Required for branded products. Add barcodes to your Shopify products and map them in your feed.</p>
                <p className="text-lg text-foreground mb-4">Incorrect shipping values: Ensure your Merchant Centre shipping rules exactly match your Shopify shipping rates.</p>
                <p className="text-lg text-foreground mb-4">Image quality: Images must be at least 250x250px, but 800x800px or higher is recommended. Watermarks and promotional text on images cause disapprovals.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-connect-shopify-to-google-merchant-center" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Google Merchant Center</h4><p className="text-sm text-foreground">Connect your store to Google</p></Link>
                    <Link href="/guides/how-to-set-up-google-analytics-4-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Google Analytics 4</h4><p className="text-sm text-foreground">Track Shopping campaign conversions</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Google Shopping?</h2>
          <p className="text-xl text-gray-300 mb-8">Our paid media team manages Google Shopping campaigns for Shopify brands, from feed optimisation to bidding strategy and weekly performance management.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
