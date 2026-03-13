import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Facebook Pixel on Shopify",
  description:
    "Complete guide to installing and configuring Facebook Pixel on your Shopify store. Track conversions, build audiences, and optimise your Meta ads for better ROAS.",
  alternates: {
    canonical: "/guides/how-to-set-up-facebook-pixel-on-shopify",
  },
  openGraph: {
    title: "How to Set Up Facebook Pixel on Shopify",
    description:
      "Complete guide to installing and configuring Facebook Pixel on your Shopify store for better ad tracking and conversions.",
    url: "/guides/how-to-set-up-facebook-pixel-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-facebook-pixel", title: "What is Facebook Pixel?", level: 2 },
  { id: "why-you-need-it", title: "Why You Need It", level: 2 },
  { id: "creating-your-pixel", title: "Creating Your Pixel", level: 2 },
  { id: "shopify-integration", title: "Shopify Integration", level: 2 },
  { id: "verifying-installation", title: "Verifying Installation", level: 2 },
  { id: "conversion-api", title: "Conversions API Setup", level: 2 },
  { id: "custom-events", title: "Custom Events", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Facebook Pixel on Shopify",
  description:
    "Complete guide to installing and configuring Facebook Pixel on your Shopify store for better ad tracking and conversions.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-facebook-pixel-on-shopify`,
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
      name: "How to Set Up Facebook Pixel on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-facebook-pixel-on-shopify`,
    },
  ],
};

export default function FacebookPixelGuidePage() {
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
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Facebook Pixel on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Facebook Pixel is essential for tracking conversions and building retargeting audiences.
              This guide covers everything from basic installation to advanced Conversions API setup.
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
              {/* What is Facebook Pixel */}
              <section id="what-is-facebook-pixel" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  What is Facebook Pixel?
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Facebook Pixel (now officially called Meta Pixel) is a piece of JavaScript code
                  that you install on your Shopify store to track visitor behaviour and conversions.
                  It acts as a bridge between your store and Meta's advertising platform, enabling
                  powerful tracking and optimisation capabilities.
                </p>
                <p className="text-lg text-foreground mb-6">
                  When someone visits your store after clicking a Facebook or Instagram ad, the
                  Pixel records their actions. Did they view a product? Add something to cart?
                  Complete a purchase? This data flows back to Meta, allowing the platform to
                  optimise your ad delivery and show ads to people most likely to convert.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Capabilities</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Conversion tracking</strong> - See which ads drive actual sales, not just clicks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Audience building</strong> - Create custom audiences based on site behaviour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Dynamic ads</strong> - Show personalised product ads to past visitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Optimisation</strong> - Let Meta find more customers like your buyers</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Without the Pixel, you're flying blind. You might know that your ads generated
                  clicks, but you won't know which campaigns actually drove revenue. The Pixel
                  closes this loop and makes your advertising measurable.
                </p>
              </section>

              {/* Why You Need It */}
              <section id="why-you-need-it" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why You Need It
                </h2>
                <p className="text-lg text-foreground mb-4">
                  If you're spending money on Facebook or Instagram ads (or planning to), the Pixel
                  isn't optional. It's the foundation of effective Meta advertising. Here's why it
                  matters so much:
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Accurate Attribution
                </h3>
                <p className="text-lg text-foreground mb-6">
                  The customer journey is rarely linear. Someone might see your ad on Monday, visit
                  your site on Wednesday, and purchase on Friday from their laptop. Without proper
                  tracking, that sale looks organic when it was actually driven by your ad. The
                  Pixel connects these touchpoints, giving you accurate data on what's working.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Better Ad Performance
                </h3>
                <p className="text-lg text-foreground mb-6">
                  Meta's algorithm is remarkably good at finding people likely to take action, but
                  it needs data to learn. The more conversion data your Pixel sends, the better
                  Meta becomes at targeting. Stores with well-configured Pixels typically see 20-30%
                  better ROAS (Return on Ad Spend) compared to those with basic setups.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Retargeting Capabilities
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Retargeting is one of the highest-converting ad strategies available. The Pixel
                  enables you to show ads to people who:
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Viewed specific products but didn't purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Added items to cart but abandoned checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Purchased in the past and might buy again</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Spent significant time browsing your collections</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Install your Pixel even if you're not running ads yet. It starts collecting
                    audience data immediately, so when you do start advertising, you'll have
                    a warm audience ready to target.
                  </p>
                </div>
              </section>

              {/* Creating Your Pixel */}
              <section id="creating-your-pixel" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Creating Your Pixel
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before connecting to Shopify, you need a Facebook Pixel. If you already have one,
                  skip to the next section. Here's how to create a new Pixel:
                </p>

                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Go to Meta Events Manager</strong>
                      <p className="text-foreground mt-1">
                        Visit business.facebook.com and navigate to Events Manager from the menu.
                        You'll need a Business Manager account. If you don't have one, create it first.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect a new data source</strong>
                      <p className="text-foreground mt-1">
                        Click the green "Connect Data Sources" button. Select "Web" as your data
                        source type, then choose "Meta Pixel" and click Connect.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Name your Pixel</strong>
                      <p className="text-foreground mt-1">
                        Give your Pixel a clear name, typically your store name. You can only have
                        one Pixel per website, so name it accordingly.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Enter your website URL</strong>
                      <p className="text-foreground mt-1">
                        Add your Shopify store URL (your myshopify.com domain or custom domain).
                        Meta will check if easy setup options are available.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Copy your Pixel ID</strong>
                      <p className="text-foreground mt-1">
                        Once created, you'll see your Pixel ID. It's a 15-16 digit number. Copy
                        this, as you'll need it for the Shopify integration.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Finding an Existing Pixel ID</h4>
                  <p className="text-foreground mb-3">
                    If you already have a Pixel, find its ID in Events Manager. Click on your Pixel
                    name, then look in the top-left corner or click Settings. The ID appears as a
                    long number like 123456789012345.
                  </p>
                  <p className="text-foreground">
                    You can also find it in your ad account under Settings, then Data Sources, then
                    Pixels.
                  </p>
                </div>
              </section>

              {/* Shopify Integration */}
              <section id="shopify-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shopify Integration
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify has a native Facebook integration that makes Pixel setup straightforward.
                  This is the recommended approach, as it handles all standard ecommerce events
                  automatically.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Method 1: Facebook & Instagram Sales Channel (Recommended)
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Install the Facebook & Instagram app</strong>
                      <p className="text-foreground mt-1">
                        In your Shopify admin, go to Sales Channels and click the + button. Find
                        "Facebook & Instagram" and install it. This is Shopify's official
                        integration maintained by Meta.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect your Facebook account</strong>
                      <p className="text-foreground mt-1">
                        Click "Start setup" and log in with your Facebook account. Make sure you
                        use an account that has admin access to your Business Manager.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Select your Business Manager</strong>
                      <p className="text-foreground mt-1">
                        Choose the Business Manager that contains your Pixel and ad account. If
                        you have multiple, select the correct one.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Connect your Pixel</strong>
                      <p className="text-foreground mt-1">
                        The setup wizard will show available Pixels. Select yours or create a new
                        one. The integration will automatically install the Pixel on all pages.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong>Enable data sharing</strong>
                      <p className="text-foreground mt-1">
                        Choose your data sharing level. "Maximum" sends the most data including
                        customer email and phone for better matching. This requires compliant
                        privacy policies.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Method 2: Manual Installation (Alternative)
                </h3>
                <p className="text-lg text-foreground mb-4">
                  If you can't use the sales channel or need more control, you can add the Pixel
                  code directly to your theme. This is less ideal but sometimes necessary.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`<!-- Add this to theme.liquid before </head> -->
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID_HERE');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`}
                  </pre>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    The sales channel method is strongly recommended. It automatically tracks all
                    standard ecommerce events (ViewContent, AddToCart, InitiateCheckout, Purchase)
                    without additional code. Manual installation requires setting up each event
                    separately.
                  </p>
                </div>
              </section>

              {/* Verifying Installation */}
              <section id="verifying-installation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Verifying Installation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  After setup, verify that your Pixel is working correctly. A broken Pixel means
                  wasted ad spend and inaccurate data. Use these methods to confirm everything
                  is firing properly.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Meta Pixel Helper Chrome Extension
                </h3>
                <p className="text-lg text-foreground mb-4">
                  This free Chrome extension is the quickest way to check your Pixel. Install it
                  from the Chrome Web Store, then visit your store.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>The extension icon shows a number indicating how many Pixels are on the page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Click it to see which events fired (PageView, ViewContent, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Green checkmarks mean events fired successfully</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Warnings or errors appear if something's wrong</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Test Events in Events Manager
                </h3>
                <p className="text-lg text-foreground mb-4">
                  For a more thorough test, use Meta's Test Events feature:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Events Manager and select your Pixel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click the "Test Events" tab</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Enter your website URL and click "Open Website"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Browse your store and complete actions (view products, add to cart)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Return to Events Manager to see events appearing in real time</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Events to Verify</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>PageView</strong> - Fires on every page load</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>ViewContent</strong> - Fires on product pages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>AddToCart</strong> - Fires when adding to cart</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>InitiateCheckout</strong> - Fires when starting checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Purchase</strong> - Fires on order confirmation (test with a real order)</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conversions API */}
              <section id="conversion-api" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Conversions API Setup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The Conversions API (CAPI) sends event data directly from your server to Meta,
                  bypassing the browser. This is crucial because browser-based tracking is becoming
                  less reliable due to ad blockers, iOS privacy changes, and cookie restrictions.
                </p>
                <p className="text-lg text-foreground mb-6">
                  With CAPI, you're sending data through two channels: the browser Pixel and your
                  server. Meta deduplicates these events, so you don't double-count conversions.
                  The result is more complete data and better ad optimisation.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Enabling CAPI in Shopify
                </h3>
                <p className="text-lg text-foreground mb-4">
                  If you're using the Facebook & Instagram sales channel, CAPI is built in. Here's
                  how to ensure it's enabled:
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to your Facebook & Instagram sales channel in Shopify</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click Settings, then Data sharing settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Ensure "Enable customer data sharing" is on</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Select "Maximum" for the most complete server-side tracking</span>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Data Sharing Levels</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Standard</strong> - Basic browser Pixel tracking only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Enhanced</strong> - Adds CAPI with basic customer data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Maximum</strong> - Full CAPI with email and phone for best matching</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Using "Maximum" data sharing with CAPI typically improves event match quality
                    by 20-40%. This directly impacts how well Meta can optimise your campaigns.
                    Ensure your privacy policy covers this data sharing.
                  </p>
                </div>
              </section>

              {/* Custom Events */}
              <section id="custom-events" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Custom Events
                </h2>
                <p className="text-lg text-foreground mb-4">
                  While the Shopify integration handles standard ecommerce events, you might want
                  to track additional actions specific to your business. Custom events let you
                  track anything meaningful.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Common Custom Events for Shopify
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>QuizCompleted</strong> - Product finder or quiz completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>NewsletterSignup</strong> - Email list subscription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>WishlistAdd</strong> - Adding to a wishlist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>StoreLocator</strong> - Using store finder feature</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>ReviewSubmitted</strong> - Leaving a product review</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Adding Custom Events
                </h3>
                <p className="text-lg text-foreground mb-4">
                  To track a custom event, call the fbq function when the action occurs:
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                  <pre className="text-gray-100 text-sm">
{`// Track a newsletter signup
fbq('track', 'NewsletterSignup', {
  value: 0,
  currency: 'GBP'
});

// Track a quiz completion
fbq('track', 'QuizCompleted', {
  quiz_name: 'Skin Type Finder',
  result: 'Dry Skin'
});

// Track a wishlist addition
fbq('track', 'WishlistAdd', {
  content_name: 'Product Name',
  content_ids: ['SKU123'],
  value: 29.99,
  currency: 'GBP'
});`}
                  </pre>
                </div>

                <p className="text-lg text-foreground mb-4">
                  Custom events appear in Events Manager and can be used for audience building and
                  campaign optimisation just like standard events.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Best Practices for Custom Events</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Use PascalCase for event names (e.g., QuizCompleted not quiz_completed)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Include relevant parameters like value, currency, content_ids</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Test thoroughly using the Pixel Helper before launching campaigns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Document your custom events for your team</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Troubleshooting */}
              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Troubleshooting
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Pixel issues are common, but most have straightforward solutions. Here are the
                  problems we see most frequently and how to fix them.
                </p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Pixel Not Firing at All
                    </h3>
                    <p className="text-foreground mb-3">
                      If the Pixel Helper shows no Pixel on your site:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Verify the sales channel is connected and not paused</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check that the correct Pixel ID is selected in settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Clear your browser cache and try again</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Disable ad blockers temporarily</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Duplicate Pixels Firing
                    </h3>
                    <p className="text-foreground mb-3">
                      Multiple PageView events or duplicate Pixel IDs indicate double installation:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check for manual Pixel code in theme.liquid</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Look for other Facebook apps that might add their own tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Remove duplicate code, keep only the sales channel version</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Purchase Events Not Tracking
                    </h3>
                    <p className="text-foreground mb-3">
                      Conversions not appearing in Events Manager:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Wait 24-48 hours for data to process</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Verify with a test purchase (you can refund it)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Check that Shopify checkout isn't using a third-party system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Ensure CAPI is enabled for server-side tracking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Low Event Match Quality
                    </h3>
                    <p className="text-foreground mb-3">
                      Events Manager shows "Poor" or "OK" match quality:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Enable "Maximum" data sharing in the sales channel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Ensure CAPI is sending customer email and phone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span>Encourage customers to log in before purchasing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-google-analytics-4-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Google Analytics 4 Setup Guide</h4>
                      <p className="text-sm text-foreground">Complete GA4 tracking for Shopify</p>
                    </Link>
                    <Link
                      href="/shopify-integrations"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Shopify Integration Services</h4>
                      <p className="text-sm text-foreground">Professional tracking setup</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Tracking?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up Facebook Pixel, Conversions API, and all your marketing
            integrations for accurate attribution and better ROAS.
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
