import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up TikTok Pixel on Shopify",
  description: "Learn how to install and configure the TikTok Pixel on Shopify. Covers app installation, manual setup, events to track, testing, and building TikTok audiences.",
  alternates: { canonical: "/guides/how-to-set-up-tiktok-pixel-on-shopify" },
  openGraph: {
    title: "How to Set Up TikTok Pixel on Shopify",
    description: "Learn how to install and configure the TikTok Pixel on Shopify. Covers app installation, manual setup, events to track, testing, and building TikTok audiences.",
    url: "/guides/how-to-set-up-tiktok-pixel-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-tiktok-pixel", title: "What Is TikTok Pixel", level: 2 },
  { id: "installing-via-shopify-app", title: "Installing via Shopify App", level: 2 },
  { id: "manual-installation", title: "Manual Installation", level: 2 },
  { id: "events-to-track", title: "Events to Track", level: 2 },
  { id: "testing-your-pixel", title: "Testing Your Pixel", level: 2 },
  { id: "tiktok-audiences", title: "TikTok Audiences", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up TikTok Pixel on Shopify",
  description: "Learn how to install and configure the TikTok Pixel on Shopify. Covers app installation, manual setup, events to track, testing, and building TikTok audiences.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-tiktok-pixel-on-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up TikTok Pixel on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-tiktok-pixel-on-shopify` },
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
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up TikTok Pixel on Shopify</h1>
            <p className="text-xl text-foreground mb-8">TikTok is the fastest-growing advertising platform for UK ecommerce brands. Before you can run effective ads, you need the TikTok Pixel installed and firing correctly. This guide walks through the complete setup process.</p>
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
              <section id="what-is-tiktok-pixel" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is TikTok Pixel</h2>
                <p className="text-lg text-foreground mb-4">The TikTok Pixel is a snippet of JavaScript code that you install on your Shopify store. It tracks visitor behaviour: page views, product views, add to cart, and purchases. This data powers TikTok&apos;s ad targeting, lets you measure ROAS, and enables retargeting audiences.</p>
                <p className="text-lg text-foreground mb-4">Without the pixel, TikTok ads are essentially untargeted. With it, you can build lookalike audiences from your purchasers, retarget cart abandoners, and track which ads are generating actual sales versus just video views.</p>

              </section>
              <section id="installing-via-shopify-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Installing via Shopify App</h2>
                <p className="text-lg text-foreground mb-4">The easiest way to install the TikTok Pixel is via the official TikTok for Business app in the Shopify App Store. The app handles pixel installation and configures standard events automatically. Go to the App Store, search for TikTok, and follow the setup wizard.</p>
                <p className="text-lg text-foreground mb-4">During setup, you will connect your TikTok for Business account, select the pixel to use (or create a new one), and enable automatic event tracking. The app configures ViewContent, AddToCart, InitiateCheckout, and Purchase events without any coding.</p>

              </section>
              <section id="manual-installation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Manual Installation</h2>
                <p className="text-lg text-foreground mb-4">If you prefer manual control or the app is not available in your region, install the pixel via your theme.liquid file. Copy the pixel base code from TikTok Events Manager and paste it in the &lt;head&gt; section of theme.liquid.</p>
                <p className="text-lg text-foreground mb-4">For event tracking without the app, you will need to add event code to specific template files: product.json for ViewContent, cart.liquid for AddToCart, and the order confirmation page for Purchase events.</p>

              </section>
              <section id="events-to-track" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Events to Track</h2>
                <p className="text-lg text-foreground mb-4">At minimum, track Purchase events. This is the conversion data TikTok needs to optimise your campaigns. AddToCart and InitiateCheckout events help TikTok understand your funnel and optimise for micro-conversions early in campaigns when purchase data is sparse.</p>
                <p className="text-lg text-foreground mb-4">ViewContent (product page views) is useful for building retargeting audiences of people who have shown interest in specific products. Combine this with a Purchase exclusion to build warm audiences.</p>

              </section>
              <section id="testing-your-pixel" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Pixel</h2>
                <p className="text-lg text-foreground mb-4">Use TikTok&apos;s Pixel Helper Chrome extension to verify your pixel is firing correctly. Visit your store and check each event: view a product, add to cart, and complete a test purchase. The extension shows which events fired and whether the data looks correct.</p>
                <p className="text-lg text-foreground mb-4">Also check TikTok Events Manager after performing test actions. Events should appear within 30 minutes. If events are missing or showing duplicate fires, investigate your theme for any script conflicts.</p>

              </section>
              <section id="tiktok-audiences" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">TikTok Audiences</h2>
                <p className="text-lg text-foreground mb-4">Once your pixel has accumulated sufficient data (typically 100+ events), build custom audiences in TikTok Ads Manager. Key audiences to create: all website visitors (90 days), product page viewers (30 days), cart abandoners (14 days), and purchasers (180 days).</p>
                <p className="text-lg text-foreground mb-4">Build lookalike audiences from your purchaser list for prospecting campaigns. A 1-3% lookalike from 500+ purchasers is typically your highest-performing TikTok prospecting audience.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-facebook-pixel-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Facebook Pixel</h4><p className="text-sm text-foreground">Set up Meta Pixel alongside TikTok</p></Link>
                    <Link href="/guides/how-to-track-shopify-conversions" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Track Conversions</h4><p className="text-sm text-foreground">Measure ad performance accurately</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With TikTok Advertising?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team sets up pixel tracking, builds audience strategies, and manages TikTok ad campaigns for UK Shopify brands.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
