import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Local Delivery",
  description:
    "Complete guide to setting up local delivery on Shopify. Learn about delivery zones, pricing, time slots, driver apps, and optimising your local delivery operations.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-local-delivery",
  },
  openGraph: {
    title: "How to Set Up Shopify Local Delivery",
    description: "Complete guide to setting up local delivery on Shopify.",
    url: "/guides/how-to-set-up-shopify-local-delivery",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "local-delivery-overview", title: "Local Delivery Overview", level: 2 },
  { id: "enabling-local-delivery", title: "Enabling Local Delivery", level: 2 },
  { id: "delivery-zones", title: "Delivery Zones", level: 2 },
  { id: "pricing-options", title: "Pricing Options", level: 2 },
  { id: "delivery-scheduling", title: "Delivery Scheduling", level: 2 },
  { id: "driver-management", title: "Driver Management", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Local Delivery",
  description: "Complete guide to setting up local delivery on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-local-delivery` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Local Delivery", item: `${siteConfig.url}/guides/how-to-set-up-shopify-local-delivery` },
  ],
};

export default function ShopifyLocalDeliveryGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shipping</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify Local Delivery
            </h1>

            <p className="text-xl text-foreground mb-8">
              Local delivery offers customers a faster, often cheaper alternative to traditional shipping. This guide covers setting up delivery zones, pricing, scheduling, and managing your delivery operations.
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

              <section id="local-delivery-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Local Delivery Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify&apos;s local delivery feature allows you to deliver orders directly to customers within a defined area. It&apos;s ideal for restaurants, florists, grocers, and any business serving a local customer base.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Unlike standard shipping, local delivery gives you complete control over the delivery experience, from timing to pricing to customer communication.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Benefits of Local Delivery</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Faster delivery</strong> with same-day or next-day options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Lower costs</strong> compared to third-party couriers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Better customer experience</strong> with delivery scheduling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Full control</strong> over the last mile experience</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="enabling-local-delivery" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Enabling Local Delivery</h2>
                <p className="text-lg text-foreground mb-4">
                  Local delivery is configured per location in Shopify. If you have multiple locations, you can enable it for some or all of them.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setup Steps</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Access Location Settings</strong>
                      <p className="text-foreground mt-1">Go to Settings → Shipping and delivery → Local delivery. Click on the location you want to configure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enable Local Delivery</strong>
                      <p className="text-foreground mt-1">Toggle on &quot;This location offers local delivery&quot; to activate the feature.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Set Delivery Area</strong>
                      <p className="text-foreground mt-1">Define your delivery radius in miles or kilometres, or use specific postcodes for precise coverage.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Pricing</strong>
                      <p className="text-foreground mt-1">Set a flat delivery fee, conditional pricing based on order value, or free delivery above a threshold.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Add Delivery Information</strong>
                      <p className="text-foreground mt-1">Enter delivery times, minimum order requirements, and any special instructions for customers.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="delivery-zones" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Delivery Zones</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers two ways to define your delivery area: radius-based or postcode-based. Each has advantages depending on your delivery geography.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Radius-Based Zones</h3>
                    <p className="text-foreground mb-3">Define a circular area around your location. Simple to set up and understand. Works well for urban areas with consistent road layouts.</p>
                    <p className="text-sm text-foreground"><strong>Example:</strong> Deliver within 5 miles of M1 1AA</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Postcode-Based Zones</h3>
                    <p className="text-foreground mb-3">Specify exact postcodes or postcode prefixes. More precise control over delivery areas. Better for avoiding areas with difficult access or long travel times.</p>
                    <p className="text-sm text-foreground"><strong>Example:</strong> Deliver to M1, M2, M3, M4 postcode areas</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    You can create multiple zones with different pricing. For example, charge £3 for deliveries within 3 miles and £6 for 3-6 miles.
                  </p>
                </div>
              </section>

              <section id="pricing-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Pricing Options</h2>
                <p className="text-lg text-foreground mb-4">
                  Local delivery pricing should balance covering your costs while remaining attractive to customers. Here are common pricing strategies.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Pricing Strategies</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Flat rate:</strong> Same fee regardless of order size. Simple and predictable for customers. Example: £4.99 delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Free over threshold:</strong> Free delivery above a minimum order value. Increases average order value. Example: Free delivery over £30</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Distance-based:</strong> Higher fees for further deliveries. Reflects actual delivery costs. Example: £3 within 2 miles, £5 within 5 miles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Time-based:</strong> Premium pricing for express delivery. Creates urgency and revenue. Example: £8 for same-day, £4 for next-day</span>
                  </li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">£3-5</div>
                    <div className="text-sm text-foreground">Average local delivery fee</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">£25-40</div>
                    <div className="text-sm text-foreground">Free delivery threshold</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">15-30%</div>
                    <div className="text-sm text-foreground">AOV increase with thresholds</div>
                  </div>
                </div>
              </section>

              <section id="delivery-scheduling" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Delivery Scheduling</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify&apos;s native local delivery includes basic delivery time information, but for advanced scheduling with time slots, you&apos;ll need an app.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Native Options</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Delivery information:</strong> Add text describing your delivery times (e.g., &quot;Same day delivery if ordered before 2pm&quot;)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Minimum lead time:</strong> Set how much notice you need before delivering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Order notes:</strong> Allow customers to specify preferred delivery times in checkout notes</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Scheduling Apps</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Zapiet Store Pickup + Delivery</h4>
                    <p className="text-foreground">Full-featured scheduling with time slots, capacity limits, and blackout dates. Popular choice for food and flower businesses.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Local Delivery Date by Appikon</h4>
                    <p className="text-foreground">Date picker with delivery windows. Good for businesses needing basic scheduling without complexity.</p>
                  </div>
                </div>
              </section>

              <section id="driver-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Driver Management</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify Local Delivery app (free) helps you manage delivery drivers and optimise routes.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Shopify Local Delivery App Features</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Route optimisation:</strong> Automatically orders deliveries for efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Driver app:</strong> Mobile app for drivers with delivery details and navigation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Customer notifications:</strong> Automatic SMS/email when delivery starts and completes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Proof of delivery:</strong> Capture photos and signatures at delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Third-Party Delivery Services</h4>
                  <p className="text-foreground">
                    Apps like Stuart, Gophr, or Uber Direct can handle deliveries if you don&apos;t have your own drivers. These integrate with Shopify and charge per delivery.
                  </p>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Successful local delivery operations require attention to detail and customer communication.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Local Delivery Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Clear communication:</strong> Tell customers exactly when to expect delivery at checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Real-time updates:</strong> Send notifications when the delivery is on its way</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Delivery instructions:</strong> Collect specific instructions (gate code, safe place, etc.) at checkout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Capacity planning:</strong> Limit daily deliveries to what you can reliably fulfil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Track performance:</strong> Monitor delivery times and customer feedback to improve</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-offer-free-shipping-on-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Free Shipping Guide →</h4>
                      <p className="text-sm text-foreground">Shipping strategy tips</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Local Delivery Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure your local delivery settings, integrate scheduling apps, and optimise your delivery operations for efficiency and customer satisfaction.
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
