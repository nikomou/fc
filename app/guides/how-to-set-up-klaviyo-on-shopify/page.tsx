import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Klaviyo on Shopify",
  description:
    "Complete guide to integrating Klaviyo with your Shopify store. Learn how to set up email marketing, SMS, flows, and segments for powerful automated marketing.",
  alternates: {
    canonical: "/guides/how-to-set-up-klaviyo-on-shopify",
  },
  openGraph: {
    title: "How to Set Up Klaviyo on Shopify",
    description:
      "Complete guide to integrating Klaviyo with your Shopify store for email marketing and automation.",
    url: "/guides/how-to-set-up-klaviyo-on-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-klaviyo", title: "Why Klaviyo?", level: 2 },
  { id: "account-setup", title: "Account Setup", level: 2 },
  { id: "shopify-integration", title: "Shopify Integration", level: 2 },
  { id: "essential-flows", title: "Essential Flows", level: 2 },
  { id: "list-building", title: "List Building", level: 2 },
  { id: "segmentation", title: "Segmentation", level: 2 },
  { id: "sms-setup", title: "SMS Setup", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Klaviyo on Shopify",
  description:
    "Complete guide to integrating Klaviyo with your Shopify store for email marketing and automation.",
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
    "@id": `${siteConfig.url}/guides/how-to-set-up-klaviyo-on-shopify`,
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
      name: "How to Set Up Klaviyo on Shopify",
      item: `${siteConfig.url}/guides/how-to-set-up-klaviyo-on-shopify`,
    },
  ],
};

export default function KlaviyoGuidePage() {
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
                <span>18 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Klaviyo on Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Klaviyo is the leading email marketing platform for ecommerce. This guide covers
              everything from initial setup to building automated flows that drive revenue while
              you sleep.
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
              {/* Why Klaviyo */}
              <section id="why-klaviyo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Why Klaviyo?
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Klaviyo has become the go-to email and SMS platform for Shopify stores, and for
                  good reason. Its deep Shopify integration means your customer and order data
                  syncs automatically, enabling highly personalised, behaviour-triggered marketing
                  that generic email tools simply cannot match.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Unlike basic email tools, Klaviyo is built specifically for ecommerce. It
                  understands products, orders, customer lifetime value, and purchase behaviour.
                  This means you can create segments like "customers who bought product X but not
                  product Y" or "VIPs who haven't purchased in 60 days" without complex workarounds.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Deep Shopify integration</strong> - Syncs orders, products, customers, and browsing behaviour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Powerful automation</strong> - Build complex flows with conditional logic and branching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Advanced segmentation</strong> - Target customers based on any behaviour or attribute</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Revenue attribution</strong> - See exactly how much revenue each email generates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Email and SMS</strong> - Manage both channels from one platform</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  The platform offers a free tier for stores with fewer than 250 contacts, making
                  it accessible for new businesses while scaling to support enterprise-level
                  operations.
                </p>
              </section>

              {/* Account Setup */}
              <section id="account-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Account Setup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Before connecting to Shopify, you need a Klaviyo account. The setup process is
                  straightforward and takes about 10 minutes.
                </p>

                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Create your account</strong>
                      <p className="text-foreground mt-1">
                        Go to klaviyo.com and click "Sign up". Enter your email, create a
                        password, and verify your email address.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Enter your business details</strong>
                      <p className="text-foreground mt-1">
                        Add your company name, website URL, and industry. Select "Ecommerce"
                        and "Shopify" when asked about your platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Set your sending address</strong>
                      <p className="text-foreground mt-1">
                        Add your business address. This appears in your email footer and is
                        required by anti-spam laws. Use your registered business address.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Configure your brand settings</strong>
                      <p className="text-foreground mt-1">
                        Upload your logo, set your brand colours, and choose default fonts.
                        These become defaults for all your email templates.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Domain Authentication (Important)
                </h3>
                <p className="text-lg text-foreground mb-4">
                  To ensure your emails reach inboxes rather than spam folders, set up domain
                  authentication. This proves to email providers that you're authorised to send
                  from your domain.
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>In Klaviyo, go to Account → Settings → Email → Domains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Click "Add Domain" and enter your domain name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Copy the DNS records Klaviyo provides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Add these records to your domain's DNS settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>Wait for verification (can take up to 48 hours)</span>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Complete domain authentication before sending any emails. Without it, your
                    deliverability will suffer and many emails will go to spam. Most domain
                    providers have Klaviyo-specific guides for adding these records.
                  </p>
                </div>
              </section>

              {/* Shopify Integration */}
              <section id="shopify-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Shopify Integration
                </h2>
                <p className="text-lg text-foreground mb-4">
                  The Shopify integration is where Klaviyo's power comes from. Once connected,
                  it syncs your entire customer database, order history, product catalogue, and
                  real-time browsing behaviour.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Connecting Klaviyo to Shopify
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Install from Shopify App Store</strong>
                      <p className="text-foreground mt-1">
                        In your Shopify admin, go to Apps and search for "Klaviyo". Install the
                        official Klaviyo app and approve the permissions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Connect your accounts</strong>
                      <p className="text-foreground mt-1">
                        Log in to your Klaviyo account when prompted. The app will link your
                        Shopify store to your Klaviyo account automatically.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Wait for initial sync</strong>
                      <p className="text-foreground mt-1">
                        Klaviyo will import your historical data. This includes all customers,
                        orders, and products. For large stores, this can take several hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Enable onsite tracking</strong>
                      <p className="text-foreground mt-1">
                        In Klaviyo, go to Integrations → Shopify → Settings. Ensure "Active on
                        Site" is enabled. This tracks browsing behaviour for triggers like
                        "viewed product" and "added to cart".
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Data That Syncs
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Customer profiles</strong> - Name, email, address, account creation date</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Order history</strong> - All past and future orders with full details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Products</strong> - Your entire catalogue with images and variants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Browsing events</strong> - Viewed product, added to cart, started checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span><strong>Customer tags</strong> - Any tags you've added in Shopify</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    After connecting, disable Shopify's built-in marketing emails to avoid
                    sending duplicate communications. Go to Settings → Notifications in Shopify
                    and turn off order confirmations if you want Klaviyo to handle them.
                  </p>
                </div>
              </section>

              {/* Essential Flows */}
              <section id="essential-flows" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Essential Flows
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Flows are automated email sequences triggered by customer behaviour. They run
                  24/7 without manual intervention and typically generate 30-50% of email revenue
                  for established stores. Here are the flows every Shopify store needs.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Welcome Series
                    </h3>
                    <p className="text-foreground mb-3">
                      Triggered when someone subscribes to your list. Introduce your brand,
                      share your story, and offer an incentive to make their first purchase.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended structure:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Email 1 (immediate): Welcome + discount code</li>
                      <li>• Email 2 (day 2): Brand story and values</li>
                      <li>• Email 3 (day 4): Best sellers or product education</li>
                      <li>• Email 4 (day 7): Social proof and testimonials</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Abandoned Cart
                    </h3>
                    <p className="text-foreground mb-3">
                      Triggered when someone adds items to cart but doesn't complete purchase.
                      This flow typically has the highest revenue per recipient.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended structure:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Email 1 (4 hours): Reminder with cart contents</li>
                      <li>• Email 2 (24 hours): Address objections, add social proof</li>
                      <li>• Email 3 (72 hours): Final chance, possibly with incentive</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Browse Abandonment
                    </h3>
                    <p className="text-foreground mb-3">
                      Triggered when someone views products but doesn't add to cart. More subtle
                      than cart abandonment, but valuable for recapturing interest.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended structure:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Email 1 (2 hours): "Still thinking about [product]?"</li>
                      <li>• Email 2 (24 hours): Related products or category highlights</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Post-Purchase
                    </h3>
                    <p className="text-foreground mb-3">
                      Triggered after an order is placed. Thank customers, set delivery
                      expectations, and encourage reviews or repeat purchases.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended structure:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Email 1 (immediate): Thank you + order details</li>
                      <li>• Email 2 (delivery + 3 days): How to get the most from your product</li>
                      <li>• Email 3 (delivery + 14 days): Review request</li>
                      <li>• Email 4 (delivery + 30 days): Replenishment or cross-sell</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Win-Back
                    </h3>
                    <p className="text-foreground mb-3">
                      Triggered when a customer hasn't purchased in a set period. Re-engage
                      lapsed customers before they forget about you entirely.
                    </p>
                    <p className="text-foreground mb-2"><strong>Recommended structure:</strong></p>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• Email 1 (60 days): "We miss you" + what's new</li>
                      <li>• Email 2 (75 days): Special offer to come back</li>
                      <li>• Email 3 (90 days): Final attempt, stronger incentive</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Klaviyo has pre-built flow templates for all of these. Start with the
                    templates and customise them to match your brand voice and offers. You can
                    find them in Flows → Create Flow → Browse Prebuilt.
                  </p>
                </div>
              </section>

              {/* List Building */}
              <section id="list-building" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  List Building
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your email list is your most valuable marketing asset. Unlike social media
                  followers, you own your list and can reach subscribers directly. Here's how
                  to grow it effectively.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Signup Forms
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Klaviyo's form builder lets you create popups, flyouts, and embedded forms
                  without coding. Here are the forms that work best:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Welcome popup</strong> - Appears after 5-10 seconds for new visitors. Offer 10-15% off first order in exchange for email.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Exit intent popup</strong> - Triggers when cursor moves toward closing the tab. More aggressive offer to capture leaving visitors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Footer form</strong> - Permanent signup option for those who prefer not to use popups.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Back in stock</strong> - Let customers sign up for notifications when sold-out products return.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Form Best Practices
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Only ask for email (and SMS if offering). More fields = fewer signups.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Make the value proposition clear. "Get 10% off" beats "Subscribe to our newsletter".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Suppress popups for returning visitors who already signed up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Test timing. Some brands see better results with immediate popups, others with delays.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't use multiple aggressive popups. One welcome popup is enough.</span>
                  </li>
                </ul>
              </section>

              {/* Segmentation */}
              <section id="segmentation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Segmentation
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Segmentation is where Klaviyo shines. Instead of sending the same email to
                  everyone, you can target specific groups with relevant messages. Segmented
                  campaigns consistently outperform broad sends by 2-3x.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Essential Segments to Create
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Engaged Subscribers</h4>
                    <p className="text-foreground text-sm mb-2">
                      People who have opened or clicked an email in the last 30-90 days. Your
                      primary audience for regular campaigns.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Criteria:</strong> Opened email at least once in last 90 days OR clicked email in last 90 days
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">VIP Customers</h4>
                    <p className="text-foreground text-sm mb-2">
                      Your highest-value customers. Give them early access, exclusive offers,
                      and special treatment.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Criteria:</strong> Total revenue greater than 500 GBP OR order count greater than 3
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">At-Risk Customers</h4>
                    <p className="text-foreground text-sm mb-2">
                      Customers who used to buy regularly but have gone quiet. Target for
                      win-back campaigns.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Criteria:</strong> Placed order previously AND last order more than 60 days ago
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">First-Time Buyers</h4>
                    <p className="text-foreground text-sm mb-2">
                      Customers who have placed exactly one order. Focus on turning them into
                      repeat customers.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Criteria:</strong> Order count equals 1
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a "Never Purchased" segment (subscribers with zero orders) and a
                    "Repeat Customers" segment (2+ orders). These two groups have very different
                    needs and should receive different messaging.
                  </p>
                </div>
              </section>

              {/* SMS Setup */}
              <section id="sms-setup" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  SMS Setup
                </h2>
                <p className="text-lg text-foreground mb-4">
                  SMS marketing has incredible open rates (98%+) and is perfect for time-sensitive
                  messages like flash sales, back-in-stock alerts, and shipping updates. Klaviyo
                  handles SMS in the same platform as email.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Setting Up SMS in the UK
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Enable SMS in Klaviyo</strong>
                      <p className="text-foreground mt-1">
                        Go to Account → Settings → SMS. Accept the terms and enable SMS for
                        your account.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Choose your sending number</strong>
                      <p className="text-foreground mt-1">
                        For UK, you'll typically use a shared short code or get a dedicated
                        number. Shared codes are included, dedicated numbers cost extra.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Set up compliance</strong>
                      <p className="text-foreground mt-1">
                        Configure quiet hours (don't text before 8am or after 9pm), add your
                        company name to messages, and ensure easy opt-out.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Collect SMS consent</strong>
                      <p className="text-foreground mt-1">
                        Update your signup forms to include an SMS checkbox. You must have
                        explicit consent to send marketing texts.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-3">Best Uses for SMS</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Flash sales</strong> - Time-limited offers where urgency matters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Back in stock</strong> - Alert customers when their wishlist items return</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shipping updates</strong> - Dispatch and delivery notifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>VIP early access</strong> - Give your best customers first look at new products</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Best Practices
                </h2>
                <p className="text-lg text-foreground mb-6">
                  After setting up Klaviyo, these practices will help you maximise results and
                  maintain a healthy, engaged list.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Email Frequency
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Start with 1-2 campaigns per week in addition to flows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Watch unsubscribe rates. Over 0.5% per email means you're sending too often</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Engaged segments can handle more emails than cold subscribers</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  List Hygiene
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Remove hard bounces immediately (Klaviyo does this automatically)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Suppress subscribers who haven't engaged in 120+ days from regular campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Run re-engagement campaigns before removing unengaged subscribers entirely</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Testing and Optimisation
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>A/B test subject lines on every campaign (Klaviyo makes this easy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Review flow analytics monthly. Look for drop-off points and optimise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Track revenue per recipient, not just open rates</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-create-shopify-email-campaigns"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Email Campaign Guide</h4>
                      <p className="text-sm text-foreground">Create effective email campaigns</p>
                    </Link>
                    <Link
                      href="/guides/how-to-set-up-shopify-abandoned-cart-emails"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Abandoned Cart Emails</h4>
                      <p className="text-sm text-foreground">Recover lost sales automatically</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Email Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up Klaviyo, design high-converting templates, and build automated
            flows that generate revenue while you focus on running your business.
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
