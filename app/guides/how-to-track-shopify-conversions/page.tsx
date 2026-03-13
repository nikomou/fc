import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Track Shopify Conversions",
  description:
    "Complete guide to setting up conversion tracking on Shopify. Learn how to configure Google Analytics 4, Facebook Pixel, Google Ads, and other tracking platforms correctly.",
  alternates: {
    canonical: "/guides/how-to-track-shopify-conversions",
  },
  openGraph: {
    title: "How to Track Shopify Conversions",
    description: "Complete guide to setting up conversion tracking on Shopify.",
    url: "/guides/how-to-track-shopify-conversions",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-tracking-matters", title: "Why Tracking Matters", level: 2 },
  { id: "google-analytics-4", title: "Google Analytics 4 Setup", level: 2 },
  { id: "facebook-pixel", title: "Facebook Pixel Setup", level: 2 },
  { id: "google-ads", title: "Google Ads Conversion Tracking", level: 2 },
  { id: "server-side-tracking", title: "Server-Side Tracking", level: 2 },
  { id: "testing-tracking", title: "Testing Your Tracking", level: 2 },
  { id: "attribution-models", title: "Understanding Attribution", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Track Shopify Conversions",
  description: "Complete guide to setting up conversion tracking on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-track-shopify-conversions` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Track Shopify Conversions", item: `${siteConfig.url}/guides/how-to-track-shopify-conversions` },
  ],
};

export default function TrackConversionsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Analytics</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Track Shopify Conversions
            </h1>

            <p className="text-xl text-foreground mb-8">
              Accurate conversion tracking is essential for measuring marketing ROI and making data-driven decisions. This guide covers setup for all major tracking platforms.
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Flex Commerce Team</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>Updated February 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">

              <section id="why-tracking-matters" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Tracking Matters</h2>
                <p className="text-lg text-foreground mb-4">
                  Without proper conversion tracking, you&apos;re flying blind. You can&apos;t know which marketing channels drive sales, which campaigns are profitable, or where to invest your budget.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Conversion tracking connects the dots between your marketing spend and actual revenue. It enables platform algorithms to optimise for purchases and helps you understand the true cost of acquiring a customer.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">What to Track</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Purchases:</strong> The primary conversion event, including revenue and order details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add to cart:</strong> Shows purchase intent before checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Begin checkout:</strong> Identifies checkout abandonment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>View content:</strong> Product page views showing interest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add payment info:</strong> Shows high purchase intent</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="google-analytics-4" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Google Analytics 4 Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  Google Analytics 4 (GA4) is Google&apos;s current analytics platform. Shopify offers native integration that handles most of the setup automatically.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Native Shopify Integration</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Create GA4 Property</strong>
                      <p className="text-foreground mt-1">In Google Analytics, create a new GA4 property for your store. Note the Measurement ID (starts with G-).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Connect in Shopify</strong>
                      <p className="text-foreground mt-1">Go to Online Store → Preferences → Google Analytics. Enter your Measurement ID and enable the integration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enable Enhanced Ecommerce</strong>
                      <p className="text-foreground mt-1">In the same settings, enable &quot;Enhanced ecommerce&quot; to track product views, add to carts, and checkout steps.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Mark Conversions in GA4</strong>
                      <p className="text-foreground mt-1">In GA4, go to Admin → Events and mark the &quot;purchase&quot; event as a conversion. You can also mark other events like add_to_cart.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Google Tag Manager Alternative</h4>
                  <p className="text-foreground">
                    For more control, use Google Tag Manager instead of native integration. This allows custom event tracking, consent mode configuration, and easier debugging. Requires more technical setup.
                  </p>
                </div>
              </section>

              <section id="facebook-pixel" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Facebook Pixel Setup</h2>
                <p className="text-lg text-foreground mb-4">
                  The Meta Pixel (formerly Facebook Pixel) tracks conversions from Facebook and Instagram ads. Proper setup is essential for ad optimisation and audience building.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Using Facebook &amp; Instagram App</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Install the App</strong>
                      <p className="text-foreground mt-1">Install the official &quot;Facebook &amp; Instagram&quot; app from the Shopify App Store. This is the recommended method.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Connect Your Account</strong>
                      <p className="text-foreground mt-1">Log in to your Facebook Business account and grant the necessary permissions. Select your Business Manager, ad account, and pixel.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enable Conversions API</strong>
                      <p className="text-foreground mt-1">The app sets up both the browser pixel and Conversions API (server-side tracking). Enable maximum data sharing for best results.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Pixel Events Tracked</h3>
                <p className="text-lg text-foreground mb-4">
                  The app automatically tracks standard ecommerce events:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>PageView, ViewContent, AddToCart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>InitiateCheckout, AddPaymentInfo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Purchase (with value and currency)</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Verify in Events Manager</h4>
                  <p className="text-foreground">
                    Check Facebook Events Manager to verify events are firing. Use the &quot;Test Events&quot; feature to see real-time event data as you browse your store.
                  </p>
                </div>
              </section>

              <section id="google-ads" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Google Ads Conversion Tracking</h2>
                <p className="text-lg text-foreground mb-4">
                  Google Ads conversion tracking lets you measure ROI from your Google advertising spend, including Search, Shopping, Display, and YouTube campaigns.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Using Google &amp; YouTube App</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Install the App</strong>
                      <p className="text-foreground mt-1">Install &quot;Google &amp; YouTube&quot; from the Shopify App Store. This connects Merchant Center, Google Ads, and YouTube.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Connect Your Accounts</strong>
                      <p className="text-foreground mt-1">Link your Google account, then connect or create a Google Merchant Center and Google Ads account.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enable Conversion Tracking</strong>
                      <p className="text-foreground mt-1">The app automatically sets up conversion tracking with enhanced conversions for better accuracy.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Import GA4 Conversions</h4>
                  <p className="text-foreground">
                    For additional flexibility, import GA4 conversions into Google Ads. Go to Google Ads → Goals → Conversions → New conversion action → Import → Google Analytics 4.
                  </p>
                </div>
              </section>

              <section id="server-side-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Server-Side Tracking</h2>
                <p className="text-lg text-foreground mb-4">
                  Browser-based tracking is increasingly blocked by ad blockers and privacy features. Server-side tracking sends data directly from your server, bypassing these limitations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Why Server-Side Matters</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>More accurate data:</strong> Not blocked by ad blockers or iOS privacy features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Better ad performance:</strong> More conversion data means better algorithm optimisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>First-party data:</strong> Data flows through your domain, not third-party cookies</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Implementation Options</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Shopify Customer Events (Web Pixels)</h4>
                    <p className="text-foreground">Native Shopify solution. Go to Settings → Customer events to add pixel code that runs in a sandboxed environment with access to checkout events.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Facebook Conversions API</h4>
                    <p className="text-foreground">Enabled automatically when using the Facebook &amp; Instagram app with maximum data sharing. Sends conversion data server-to-server.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Google Tag Manager Server-Side</h4>
                    <p className="text-foreground">Advanced option using GTM server-side containers. Requires technical setup and hosting but offers maximum flexibility.</p>
                  </div>
                </div>
              </section>

              <section id="testing-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing Your Tracking</h2>
                <p className="text-lg text-foreground mb-4">
                  Always verify that tracking works correctly before running campaigns. Here&apos;s how to test each platform.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Google Analytics 4</h3>
                    <p className="text-foreground">Use GA4 DebugView (Admin → DebugView) while browsing your store with debug mode enabled. Install the Google Analytics Debugger browser extension.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Facebook Pixel</h3>
                    <p className="text-foreground">Install the Meta Pixel Helper browser extension. Also use Test Events in Events Manager to see real-time events.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Google Ads</h3>
                    <p className="text-foreground">Use Google Tag Assistant to verify the conversion tag fires. Check the conversion action status in Google Ads (should show &quot;Recording conversions&quot;).</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test Purchase</h3>
                    <p className="text-foreground">Place a real test order (you can refund it) to verify purchase tracking. This is the most reliable test method.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Deduplication</h4>
                  <p className="text-foreground">
                    When using both browser and server-side tracking, ensure events are deduplicated. Both Facebook and Google use event IDs to prevent counting the same conversion twice.
                  </p>
                </div>
              </section>

              <section id="attribution-models" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Understanding Attribution</h2>
                <p className="text-lg text-foreground mb-4">
                  Attribution determines which marketing touchpoint gets credit for a conversion. Different platforms use different models, which is why conversion numbers rarely match.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common Attribution Models</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Last click:</strong> All credit to the final touchpoint before conversion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>First click:</strong> All credit to the first touchpoint in the journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Data-driven:</strong> Machine learning distributes credit based on actual impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Linear:</strong> Equal credit to all touchpoints</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Why Numbers Don&apos;t Match</h3>
                <p className="text-lg text-foreground mb-4">
                  Your Google Ads conversions plus Facebook conversions will always exceed your actual orders. This is because:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Each platform claims credit for the same conversion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Different attribution windows (1-day, 7-day, 30-day)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>View-through vs click-through attribution</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-read-shopify-analytics" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Analytics Guide →</h4>
                      <p className="text-sm text-foreground">Understanding your data</p>
                    </Link>
                    <Link href="/guides/how-to-add-cookie-consent-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Cookie Consent Guide →</h4>
                      <p className="text-sm text-foreground">Compliant tracking setup</p>
                    </Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Tracking Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can audit your current tracking, implement proper conversion tracking across all platforms, and ensure data accuracy for better marketing decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
