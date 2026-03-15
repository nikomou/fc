import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Connect Shopify to Mailchimp",
  description: "Learn how to connect Shopify to Mailchimp. Covers installation, syncing customers, abandoned cart emails, product recommendations, segmentation, and GDPR consent.",
  alternates: { canonical: "/guides/how-to-connect-shopify-to-mailchimp" },
  openGraph: {
    title: "How to Connect Shopify to Mailchimp",
    description: "Learn how to connect Shopify to Mailchimp. Covers installation, syncing customers, abandoned cart emails, product recommendations, segmentation, and GDPR consent.",
    url: "/guides/how-to-connect-shopify-to-mailchimp",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "shopify-mailchimp-overview", title: "Overview", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "syncing-customers", title: "Syncing Customers", level: 2 },
  { id: "abandoned-cart-emails", title: "Abandoned Cart Emails", level: 2 },
  { id: "product-recommendations", title: "Product Recommendations", level: 2 },
  { id: "segmentation", title: "Segmentation", level: 2 },
  { id: "gdpr-and-consent", title: "GDPR and Consent", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Connect Shopify to Mailchimp",
  description: "Learn how to connect Shopify to Mailchimp. Covers installation, syncing customers, abandoned cart emails, product recommendations, segmentation, and GDPR consent.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-connect-shopify-to-mailchimp` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Connect Shopify to Mailchimp", item: `${siteConfig.url}/guides/how-to-connect-shopify-to-mailchimp` },
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Connect Shopify to Mailchimp</h1>
            <p className="text-xl text-foreground mb-8">Mailchimp and Shopify are a popular combination for UK merchants who want a familiar email platform connected to their store data. This guide covers the integration setup and how to use it effectively.</p>
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
              <section id="shopify-mailchimp-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Overview</h2>
                <p className="text-lg text-foreground mb-4">Mailchimp&apos;s Shopify integration syncs customer data, purchase history, and product information between the two platforms. This enables personalised email campaigns based on purchase behaviour, automated email sequences triggered by Shopify events, and product recommendation emails featuring items from your catalogue.</p>
                <p className="text-lg text-foreground mb-4">Mailchimp and Shopify fell out officially in 2019, which removed the official app. The integration is now maintained by third parties, most commonly Mailchimp&apos;s own ShopSync app or Combidesk.</p>
              </section>
              <section id="installation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Installation</h2>
                <p className="text-lg text-foreground mb-4">Install ShopSync from the Shopify App Store. Connect it to your Mailchimp account by entering your API key. Configure which Shopify data to sync: customer list, purchase history, and product catalogue.</p>
                <p className="text-lg text-foreground mb-4">Alternatively, install Mailchimp&apos;s official connection via Mailchimp&apos;s audience settings: go to Mailchimp, then Audience, then Manage Audience, then Connected Sites, and connect Shopify.</p>
              </section>
              <section id="syncing-customers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Syncing Customers</h2>
                <p className="text-lg text-foreground mb-4">After connection, existing Shopify customers sync to a Mailchimp audience. Ongoing syncs add new customers and update existing records when customers place new orders.</p>
                <p className="text-lg text-foreground mb-4">Configure your sync to respect marketing consent: only customers who opted in to marketing at checkout should be added to your main marketing list. Customers who did not opt in should either be excluded or added to a non-marketing segment for transactional emails only.</p>
              </section>
              <section id="abandoned-cart-emails" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Abandoned Cart Emails</h2>
                <p className="text-lg text-foreground mb-4">Mailchimp&apos;s abandoned cart automation can trigger emails to customers who start checkout but do not complete it. The email includes the cart contents with product images, links back to the checkout, and your branding.</p>
                <p className="text-lg text-foreground mb-4">Abandoned cart emails from Mailchimp are available on paid plans. For Shopify-native abandoned checkout emails, you can use Shopify&apos;s built-in automation instead, which does not require Mailchimp.</p>
              </section>
              <section id="product-recommendations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Product Recommendations</h2>
                <p className="text-lg text-foreground mb-4">Mailchimp can insert personalised product recommendations into emails based on each recipient&apos;s purchase history. Enable product recommendations in your Mailchimp email templates by adding a product recommendation content block.</p>
                <p className="text-lg text-foreground mb-4">This works best for stores with broad catalogues where purchase history provides enough signal to make relevant recommendations.</p>
              </section>
              <section id="segmentation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Segmentation</h2>
                <p className="text-lg text-foreground mb-4">Segment your Mailchimp audience using Shopify purchase data: customers who bought a specific product, customers who have not purchased in 90 days (lapsed customers), customers who have spent more than £500 (high-value customers). These segments enable targeted campaigns with relevant content.</p>
              </section>
              <section id="gdpr-and-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">GDPR and Consent</h2>
                <p className="text-lg text-foreground mb-4">Under UK GDPR, you can only send marketing emails to customers who have given explicit consent. Ensure your Shopify checkout includes an unchecked opt-in checkbox and only syncs consenting customers to your Mailchimp marketing list.</p>
                <p className="text-lg text-foreground mb-4">Review your Mailchimp audience regularly to remove contacts who have unsubscribed via Shopify. The integration should handle this automatically, but verify it is working correctly.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-klaviyo-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Klaviyo</h4><p className="text-sm text-foreground">More advanced email automation</p></Link>
                    <Link href="/guides/how-to-make-shopify-gdpr-compliant" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance</h4><p className="text-sm text-foreground">Email marketing and consent</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Email Marketing Integration?</h2>
          <p className="text-xl text-gray-300 mb-8">We set up and configure Mailchimp, Klaviyo, and other email platforms with Shopify, including automations, segmentation, and GDPR-compliant consent flows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
