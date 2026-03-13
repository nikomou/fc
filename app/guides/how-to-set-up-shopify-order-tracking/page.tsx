import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Order Tracking",
  description:
    "Complete guide to setting up order tracking on Shopify. Learn about tracking pages, notifications, carrier integrations, and branded tracking experiences.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-order-tracking",
  },
  openGraph: {
    title: "How to Set Up Shopify Order Tracking",
    description: "Complete guide to setting up order tracking on Shopify.",
    url: "/guides/how-to-set-up-shopify-order-tracking",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "tracking-overview", title: "Tracking Overview", level: 2 },
  { id: "adding-tracking-numbers", title: "Adding Tracking Numbers", level: 2 },
  { id: "tracking-notifications", title: "Tracking Notifications", level: 2 },
  { id: "order-status-page", title: "Order Status Page", level: 2 },
  { id: "tracking-apps", title: "Tracking Apps", level: 2 },
  { id: "branded-tracking", title: "Branded Tracking", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Order Tracking",
  description: "Complete guide to setting up order tracking on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-order-tracking` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Order Tracking", item: `${siteConfig.url}/guides/how-to-set-up-shopify-order-tracking` },
  ],
};

export default function ShopifyOrderTrackingGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Orders</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Order Tracking
            </h1>

            <p className="text-xl text-foreground mb-8">
              Order tracking reduces customer anxiety and support tickets. This guide covers setting up tracking numbers, notifications, and creating a branded tracking experience.
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

              <section id="tracking-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Order tracking lets customers monitor their shipment&apos;s progress from dispatch to delivery. It&apos;s a fundamental part of the post-purchase experience that significantly impacts customer satisfaction.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Shopify supports tracking out of the box for most major carriers. When you add a tracking number to an order, customers automatically receive updates and can track their package.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Why Tracking Matters</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reduces WISMO queries</strong> (&quot;Where Is My Order&quot;) by 50% or more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Builds trust</strong> by keeping customers informed throughout delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Creates touchpoints</strong> for post-purchase marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Improves satisfaction</strong> leading to better reviews and repeat purchases</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="adding-tracking-numbers" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding Tracking Numbers</h2>
                <p className="text-lg text-foreground mb-4">
                  Tracking numbers are added when you fulfil an order. You can add them manually or automatically if using a fulfilment service.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Manual Fulfilment</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Open the Order</strong>
                      <p className="text-foreground mt-1">Go to Orders in your Shopify admin and click on the order you want to fulfil.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Click Fulfil Items</strong>
                      <p className="text-foreground mt-1">In the Unfulfilled section, click &quot;Fulfil items&quot; to start the fulfilment process.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Enter Tracking Information</strong>
                      <p className="text-foreground mt-1">Enter the tracking number and select the carrier from the dropdown. Shopify recognises most major carriers automatically.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Send Notification</strong>
                      <p className="text-foreground mt-1">Check &quot;Send shipment details to your customer now&quot; to email the tracking information immediately.</p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Supported Carriers</h3>
                <p className="text-lg text-foreground mb-4">
                  Shopify automatically recognises tracking numbers from major UK carriers including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">Royal Mail</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">DPD</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">DHL</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">Evri (Hermes)</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">UPS</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">FedEx</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">Parcelforce</div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center text-foreground">Yodel</div>
                </div>
              </section>

              <section id="tracking-notifications" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Notifications</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify sends automatic email notifications at key stages. You can customise these emails to match your brand.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shipping Confirmation</h3>
                    <p className="text-foreground">Sent when you fulfil an order with tracking. Includes tracking number and link to track the shipment.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shipping Update</h3>
                    <p className="text-foreground">Sent when you add or update tracking information on a previously fulfilled order.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Out for Delivery</h3>
                    <p className="text-foreground">Sent when the carrier marks the package as out for delivery (requires Shop app or compatible carrier).</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Delivered</h3>
                    <p className="text-foreground">Sent when the carrier confirms delivery. Good opportunity to request a review.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Customising Notifications</h3>
                <p className="text-lg text-foreground mb-4">
                  Go to Settings → Notifications to edit your shipping notification templates. You can modify the subject line, body text, and design to match your brand.
                </p>
              </section>

              <section id="order-status-page" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Order Status Page</h2>
                <p className="text-lg text-foreground mb-4">
                  After checkout, customers are directed to an order status page where they can view their order details and tracking information. This page updates in real-time as the order progresses.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Order Status Page Features</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Order summary:</strong> Products ordered, quantities, and prices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Shipping status:</strong> Current status with visual progress indicator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Tracking link:</strong> Direct link to carrier tracking page</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Delivery address:</strong> Shipping destination confirmation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Map:</strong> Visual map showing delivery location</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Customise your order status page under Settings → Checkout → Order status page. Add your logo, custom scripts, or additional information for customers.
                  </p>
                </div>
              </section>

              <section id="tracking-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  For advanced tracking features, consider a dedicated tracking app. These provide branded tracking pages, more detailed notifications, and analytics.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">AfterShip</h3>
                    <p className="text-foreground">The most popular tracking solution. Supports 1100+ carriers, branded tracking page, SMS notifications, and delivery predictions. Free plan available.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Parcel Panel</h3>
                    <p className="text-foreground">Affordable alternative with branded tracking page, upsell widgets, and delivery date predictions. Good for smaller stores.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Track123</h3>
                    <p className="text-foreground">Budget-friendly option with core tracking features. Branded tracking page and email notifications included in free tier.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Wonderment</h3>
                    <p className="text-foreground">Enterprise solution with advanced analytics, proactive issue detection, and comprehensive delivery metrics.</p>
                  </div>
                </div>
              </section>

              <section id="branded-tracking" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Branded Tracking</h2>
                <p className="text-lg text-foreground mb-4">
                  Branded tracking pages keep customers on your website instead of sending them to the carrier&apos;s site. This creates a better experience and additional marketing opportunities.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Branded Tracking Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Consistent branding:</strong> Your logo, colours, and messaging throughout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Product recommendations:</strong> Suggest related products while customers wait</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Social links:</strong> Encourage customers to follow you on social media</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Analytics:</strong> Track how often customers check their order status</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-foreground">
                  Most tracking apps include a branded tracking page feature. Customers visit a page on your domain (e.g., yourstore.com/track) where they can enter their order number or tracking number to see status updates.
                </p>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices to maximise the value of your order tracking.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Tracking Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Add tracking promptly:</strong> Enter tracking numbers as soon as you receive them from your carrier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Set delivery expectations:</strong> Include estimated delivery times in your shipping confirmation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Handle delays proactively:</strong> Reach out to customers if tracking shows issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Request reviews post-delivery:</strong> Send a review request after delivery confirmation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Monitor delivery metrics:</strong> Track on-time delivery rates to identify carrier issues</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-handle-shopify-returns" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Returns Guide →</h4>
                      <p className="text-sm text-foreground">Handle returns smoothly</p>
                    </Link>
                    <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Launch Checklist →</h4>
                      <p className="text-sm text-foreground">Complete pre-launch guide</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Order Tracking Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement branded tracking pages, configure notifications, and integrate advanced tracking apps to enhance your post-purchase experience.
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
