import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Google Analytics 4 on Shopify",
  description:
    "Step-by-step guide to installing Google Analytics 4 on your Shopify store. Learn how to set up enhanced ecommerce tracking, events, and conversions properly.",
  alternates: {
    canonical: "/guides/how-to-set-up-google-analytics-4-on-shopify",
  },
  openGraph: {
    title: "How to Set Up Google Analytics 4 on Shopify",
    description:
      "Step-by-step guide to installing Google Analytics 4 on your Shopify store with enhanced ecommerce tracking.",
    url: "/guides/how-to-set-up-google-analytics-4-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "understanding-ga4", title: "Understanding GA4", level: 2 },
  { id: "creating-your-property", title: "Creating Your Property", level: 2 },
  { id: "shopify-integration", title: "Shopify Integration", level: 2 },
  { id: "ecommerce-tracking", title: "Ecommerce Tracking", level: 2 },
  { id: "key-events", title: "Key Events to Track", level: 2 },
  { id: "custom-dimensions", title: "Custom Dimensions", level: 2 },
  { id: "reports-and-insights", title: "Reports and Insights", level: 2 },
  { id: "common-issues", title: "Common Issues", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Google Analytics 4 on Shopify",
  description:
    "Step-by-step guide to installing Google Analytics 4 on your Shopify store with enhanced ecommerce tracking.",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/guides/how-to-set-up-google-analytics-4-on-shopify`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Set Up Google Analytics 4 on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-google-analytics-4-on-shopify`,
    },
  ],
};

export default function GA4GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-foreground mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                Guide
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Google Analytics 4 on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Google Analytics 4 is the standard for website analytics. This guide shows you how to
              set it up properly on Shopify with full ecommerce tracking so you can understand
              your customers and optimise your store.
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

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            {/* Main Content */}
            <article className="flex-1 max-w-3xl">
              {/* Understanding GA4 */}
              <section id="understanding-ga4" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Understanding GA4
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Google Analytics 4 (GA4) represents a complete rebuild of Google's analytics
                  platform. Unlike Universal Analytics (the previous version), GA4 is built around
                  events rather than sessions. Everything a user does is tracked as an event,
                  from page views to purchases.
                </p>
                <p className="text-lg text-foreground mb-6">
                  This event-based model offers much more flexibility in what you can track and
                  how you analyse user behaviour. For ecommerce stores, it means better insight
                  into the customer journey from first visit to repeat purchase.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Differences from Universal Analytics</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Event-based tracking</strong> - Everything is an event, not just button clicks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Cross-platform</strong> - Track users across web and app in one property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Privacy-focused</strong> - Built to work without cookies in the future</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Machine learning</strong> - Predictive insights and anomaly detection built in</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The learning curve for GA4 can be steep if you're used to Universal Analytics,
                  but the capabilities are worth it. This guide will help you get set up correctly
                  from the start.
                </p>
              </section>

              {/* Creating Your Property */}
              <section id="creating-your-property" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Your Property
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before connecting to Shopify, you need a GA4 property. If you already have one,
                  skip to the next section. Here's how to create a new property:
                </p>

                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Google Analytics</strong>
                      <p className="text-foreground mt-1">
                        Visit analytics.google.com and sign in with your Google account. If you
                        don't have an Analytics account yet, click "Start measuring" to create one.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Create a new property</strong>
                      <p className="text-foreground mt-1">
                        In Admin (gear icon), click "Create Property". Name it after your store.
                        Select your reporting time zone and currency (GBP for UK stores).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Describe your business</strong>
                      <p className="text-foreground mt-1">
                        Select your industry category (likely "Shopping") and business size.
                        This helps Google provide relevant default reports.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Choose your objectives</strong>
                      <p className="text-foreground mt-1">
                        Select "Generate leads" and "Drive online sales". This configures
                        relevant default reports and suggested events.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Set up a web data stream</strong>
                      <p className="text-foreground mt-1">
                        Select "Web" as your platform. Enter your Shopify store URL (your custom
                        domain or myshopify.com domain). Name it something clear like "Website".
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong>Copy your Measurement ID</strong>
                      <p className="text-foreground mt-1">
                        After creating the stream, you'll see a Measurement ID starting with
                        "G-" (e.g., G-ABC123XYZ). Copy this for the Shopify integration.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Enable "Enhanced measurement" in your data stream settings. This automatically
                    tracks scrolls, outbound clicks, site search, video engagement, and file
                    downloads without any additional code.
                  </p>
                </div>
              </section>

              {/* Shopify Integration */}
              <section id="shopify-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shopify Integration
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify has native GA4 integration that handles ecommerce tracking automatically.
                  This is the recommended method as it tracks all standard ecommerce events
                  without custom code.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Method 1: Shopify's Native Integration (Recommended)
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Online Store settings</strong>
                      <p className="text-foreground mt-1">
                        In your Shopify admin, go to Online Store → Preferences. Scroll down to
                        the Google Analytics section.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Enter your Measurement ID</strong>
                      <p className="text-foreground mt-1">
                        Paste your G- Measurement ID from GA4. Shopify will validate it.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Save your settings</strong>
                      <p className="text-foreground mt-1">
                        Click Save. The GA4 tracking code is now installed on all pages of
                        your store, including checkout and order confirmation.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Method 2: Google Tag Manager (Advanced)
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For more control over your tracking, you can use Google Tag Manager. This is
                  useful if you want to add custom events or integrate multiple tracking platforms.
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Create a GTM container at tagmanager.google.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Add the GTM container code to your Shopify theme's head section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Create a GA4 Configuration tag with your Measurement ID</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Set up ecommerce event tags using the data layer</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Which Method Should You Use?</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Native integration</strong> - Best for most stores. Simple, reliable, fully supported</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>GTM</strong> - Use if you need custom events, have multiple tracking pixels, or need server-side tagging</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Ecommerce Tracking */}
              <section id="ecommerce-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Ecommerce Tracking
                </h2>
                <p className="text-lg text-foreground mb-4">
                  GA4 has built-in ecommerce reports that show you everything from product views
                  to purchase behaviour. When using Shopify's native integration, these events
                  are tracked automatically.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Standard Ecommerce Events
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify's integration tracks these events out of the box:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">view_item</h4>
                    <p className="text-foreground">
                      Fires when a user views a product page. Includes product ID, name, price,
                      and category information.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">add_to_cart</h4>
                    <p className="text-foreground">
                      Fires when a user adds a product to their cart. Tracks quantity and variant
                      information.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">begin_checkout</h4>
                    <p className="text-foreground">
                      Fires when a user starts the checkout process. Shows how many visitors
                      reach this stage.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">purchase</h4>
                    <p className="text-foreground">
                      Fires on order completion. Includes transaction ID, revenue, tax, shipping,
                      and all purchased items.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Verifying Ecommerce Tracking
                </h3>
                <p className="text-lg text-foreground mb-4">
                  To confirm your ecommerce tracking is working:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Open GA4 and go to Reports → Realtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>In another tab, visit your store and view a product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Add the product to cart</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>In GA4 Realtime, you should see view_item and add_to_cart events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Complete a test purchase to verify the purchase event</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Use Google's DebugView (in GA4 Admin → DebugView) for detailed event
                    inspection. It shows every parameter being sent with each event.
                  </p>
                </div>
              </section>

              {/* Key Events */}
              <section id="key-events" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Key Events to Track
                </h2>
                <p className="text-lg text-foreground mb-4">
                  In GA4, "Key Events" (formerly called Conversions) are the actions that matter
                  most to your business. You should mark important events as key events so they
                  appear prominently in reports and can be used for Google Ads optimisation.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Key Events
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to GA4 Admin → Events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Find the event you want to mark (e.g., purchase)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Toggle "Mark as key event" to on</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Recommended Key Events for Shopify</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>purchase</strong> - Your primary conversion event</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>add_to_cart</strong> - Shows buying intent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>begin_checkout</strong> - High-intent micro-conversion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>sign_up</strong> - If you have account registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>generate_lead</strong> - For newsletter signups</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Custom Events
                </h3>
                <p className="text-lg text-foreground mb-4">
                  You can create new events based on existing ones. For example, track when
                  someone views a specific collection:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Admin → Events → Create event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Name it (e.g., "view_sale_collection")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Set conditions: event_name equals "page_view" AND page_location contains "/collections/sale"</span>
                  </li>
                </ol>
              </section>

              {/* Custom Dimensions */}
              <section id="custom-dimensions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Custom Dimensions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Custom dimensions let you segment your data by attributes specific to your
                  business. For ecommerce, these are incredibly valuable for understanding
                  customer behaviour.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Useful Custom Dimensions for Shopify
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Customer type</strong> - New vs returning customer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Logged in status</strong> - Guest vs account holder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Discount code used</strong> - Track which codes drive sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Order count</strong> - First order vs repeat purchase</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up Custom Dimensions
                </h3>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Admin → Custom definitions → Custom dimensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click "Create custom dimension"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enter a name and description</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Select the scope (Event or User)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Enter the event parameter name that will contain the value</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    You need to send the data before you can create the dimension. Use GTM or
                    custom code to add parameters to your events, then create the matching
                    custom dimension in GA4.
                  </p>
                </div>
              </section>

              {/* Reports and Insights */}
              <section id="reports-and-insights" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Reports and Insights
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Once your tracking is set up, GA4 offers powerful reports to understand your
                  store's performance. Here are the most valuable reports for ecommerce.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Ecommerce Purchases</h4>
                    <p className="text-foreground mb-2">
                      Reports → Monetisation → Ecommerce purchases
                    </p>
                    <p className="text-foreground text-sm">
                      Shows your best-selling products, revenue, and purchase quantity. Filter
                      by date range to see trends.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Purchase Journey</h4>
                    <p className="text-foreground mb-2">
                      Reports → Monetisation → Purchase journey
                    </p>
                    <p className="text-foreground text-sm">
                      Visualises your funnel from session start to purchase. Shows where users
                      drop off at each stage.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Traffic Acquisition</h4>
                    <p className="text-foreground mb-2">
                      Reports → Acquisition → Traffic acquisition
                    </p>
                    <p className="text-foreground text-sm">
                      See which channels (organic, paid, social, email) drive traffic and
                      conversions. Essential for marketing ROI.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">User Explorer</h4>
                    <p className="text-foreground mb-2">
                      Explore → User Explorer
                    </p>
                    <p className="text-foreground text-sm">
                      See individual user journeys through your site. Great for understanding
                      how real customers behave.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Creating Custom Explorations
                </h3>
                <p className="text-lg text-foreground mb-4">
                  The Explore section lets you build custom reports. For ecommerce, try:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Funnel exploration</strong> - Custom conversion funnels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Path exploration</strong> - How users navigate your site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Segment overlap</strong> - Compare different user groups</span>
                  </li>
                </ul>
              </section>

              {/* Common Issues */}
              <section id="common-issues" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Common Issues
                </h2>
                <p className="text-lg text-foreground mb-6">
                  GA4 setup can be tricky. Here are the issues we see most often and how to fix
                  them.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      No Data Appearing
                    </h3>
                    <p className="text-foreground mb-3">
                      If you've set up GA4 but see no data:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check your Measurement ID is correct (starts with G-)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Wait 24-48 hours for data to process (standard reports have delay)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check Realtime report first as it shows data immediately</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Ensure ad blockers aren't blocking tracking on your test device</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Duplicate Tracking
                    </h3>
                    <p className="text-foreground mb-3">
                      If you see doubled page views or events:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check for GA4 code in both Shopify settings AND your theme</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Look for GTM container that also has GA4 configured</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Use one integration method only</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Missing Purchase Data
                    </h3>
                    <p className="text-foreground mb-3">
                      If other events work but purchases don't track:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Verify checkout isn't using a third-party system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Complete a test purchase to verify (you can refund it)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check that purchase is marked as a key event</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Discrepancy with Shopify Reports
                    </h3>
                    <p className="text-foreground mb-3">
                      GA4 numbers don't match Shopify's reports:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>This is normal due to ad blockers and privacy tools</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>GA4 typically shows 10-20% less data than actual</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Use Shopify for source of truth on revenue, GA4 for behaviour analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-facebook-pixel-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Facebook Pixel Setup Guide</h4>
                      <p className="text-sm text-foreground">Track Meta ad conversions</p>
                    </Link>
                    <Link
                      href="/guides/how-to-connect-shopify-to-google-merchant-center"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Google Merchant Center Guide</h4>
                      <p className="text-sm text-foreground">Set up Google Shopping feeds</p>
                    </Link>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Analytics?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up GA4, custom events, and dashboards so you have clear insight
            into your store's performance and marketing effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Integration Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
