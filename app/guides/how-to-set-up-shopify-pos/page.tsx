import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify POS: Complete Guide",
  description:
    "Complete guide to setting up Shopify Point of Sale for your retail location. Learn about hardware requirements, configuration, staff management, and inventory sync.",
  alternates: {
    canonical: "/guides/how-to-set-up-shopify-pos",
  },
  openGraph: {
    title: "How to Set Up Shopify POS: Complete Guide",
    description: "Complete guide to setting up Shopify Point of Sale for your retail location.",
    url: "/guides/how-to-set-up-shopify-pos",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-shopify-pos", title: "What Is Shopify POS", level: 2 },
  { id: "pos-plans", title: "POS Plans and Pricing", level: 2 },
  { id: "hardware-requirements", title: "Hardware Requirements", level: 2 },
  { id: "setup-process", title: "Setup Process", level: 2 },
  { id: "staff-management", title: "Staff Management", level: 2 },
  { id: "inventory-sync", title: "Inventory Synchronisation", level: 2 },
  { id: "payment-configuration", title: "Payment Configuration", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify POS",
  description: "Complete guide to setting up Shopify Point of Sale for your retail location.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-pos` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify POS", item: `${siteConfig.url}/guides/how-to-set-up-shopify-pos` },
  ],
};

export default function ShopifyPOSGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Point of Sale</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Set Up Shopify POS
            </h1>

            <p className="text-xl text-foreground mb-8">
              Shopify POS connects your physical retail location with your online store, unifying inventory, customer data, and sales reporting. This guide walks you through everything you need to get started.
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

              <section id="what-is-shopify-pos" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Shopify POS</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify POS is a point of sale application that allows you to sell products in person using an iPad, iPhone, or Android device. It integrates seamlessly with your Shopify online store, providing unified inventory management and customer data.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Whether you run a pop-up shop, market stall, permanent retail location, or sell at events, Shopify POS provides the tools you need to accept payments and manage your business.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Unified inventory:</strong> Stock levels sync automatically between online and in-store</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Customer profiles:</strong> Track purchase history across all channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Single reporting:</strong> See all sales in one dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Staff accounts:</strong> Individual logins with role-based permissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Omnichannel features:</strong> Buy online, pick up in store and local delivery</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="pos-plans" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">POS Plans and Pricing</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify offers two POS tiers with different feature sets. Understanding the differences helps you choose the right plan for your needs.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground-dark">POS Lite</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Included Free</span>
                    </div>
                    <p className="text-foreground mb-3">Included with all Shopify plans. Covers basic in-person selling needs.</p>
                    <ul className="space-y-2 text-foreground">
                      <li>• Accept payments in person</li>
                      <li>• Sync products and inventory</li>
                      <li>• Mobile POS with smart grid</li>
                      <li>• Unified customer profiles</li>
                      <li>• Order management</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground-dark">POS Pro</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">£69/month per location</span>
                    </div>
                    <p className="text-foreground mb-3">Advanced features for growing retail operations.</p>
                    <ul className="space-y-2 text-foreground">
                      <li>• Everything in POS Lite</li>
                      <li>• Unlimited staff accounts</li>
                      <li>• Staff roles and permissions</li>
                      <li>• Advanced reporting</li>
                      <li>• Retail analytics</li>
                      <li>• Cash tracking and shifts</li>
                      <li>• Store pickup and local delivery</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Shopify Plus Note</h4>
                  <p className="text-foreground">
                    Shopify Plus merchants receive POS Pro for up to 20 locations at no additional cost. Additional locations are billed at a discounted rate.
                  </p>
                </div>
              </section>

              <section id="hardware-requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Hardware Requirements</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify POS runs on mobile devices and can connect to various retail hardware. Here is what you need to get started.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Essential Hardware</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Device</h3>
                    <p className="text-foreground">iPad (iOS 15 or later), iPhone (iOS 15 or later), or Android device (Android 10 or later). An iPad is recommended for stationary retail setups.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Card Reader</h3>
                    <p className="text-foreground">Shopify Tap and Chip Card Reader for contactless and chip payments. Connects via Bluetooth. Accepts Visa, Mastercard, American Express, and digital wallets.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Optional Hardware</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Receipt printer:</strong> Thermal printer for physical receipts (Star Micronics or Epson)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Cash drawer:</strong> Connects to receipt printer for cash handling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Barcode scanner:</strong> Speeds up product lookup and checkout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>POS stand:</strong> Retail stand for iPad with swivel for customer-facing display</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Label printer:</strong> For printing product labels or shelf tags</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Shopify Hardware Store</h3>
                  <p className="text-foreground">
                    Purchase compatible hardware directly from Shopify at hardware.shopify.com. All hardware is guaranteed compatible and comes with support. You can also buy retail bundles that include everything you need.
                  </p>
                </div>
              </section>

              <section id="setup-process" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setup Process</h2>
                <p className="text-lg text-foreground mb-6">
                  Setting up Shopify POS involves configuring your location, installing the app, and connecting your hardware. Follow these steps to get started.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Add Your Location</strong>
                      <p className="text-foreground mt-1">Go to Settings &gt; Locations in your Shopify admin. Add a new location with your retail address. This is separate from your shipping locations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Enable POS Channel</strong>
                      <p className="text-foreground mt-1">Go to Sales Channels in your admin and add Point of Sale if not already enabled. This activates POS features and settings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Install the POS App</strong>
                      <p className="text-foreground mt-1">Download Shopify POS from the App Store or Google Play. Sign in with your Shopify credentials and select your location.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Connect Hardware</strong>
                      <p className="text-foreground mt-1">In the POS app, go to Settings &gt; Hardware. Follow the pairing instructions for your card reader and any other hardware.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Configure Settings</strong>
                      <p className="text-foreground mt-1">Set up taxes, receipt preferences, tipping options, and any custom fields you need for your retail operation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">6</span>
                    <div>
                      <strong className="text-foreground-dark">Test a Transaction</strong>
                      <p className="text-foreground mt-1">Run a test sale to ensure everything works correctly. Test your card reader, receipt printer, and cash drawer.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="staff-management" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Staff Management</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify POS allows you to create staff accounts with different permission levels. This is essential for tracking individual performance and controlling access.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Creating Staff Accounts</h3>
                <p className="text-lg text-foreground mb-4">
                  Go to Point of Sale &gt; Staff in your Shopify admin. Add new staff members with their name and email. Assign them a 4-digit PIN for logging into the POS app.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Permission Levels (POS Pro)</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Full Access</h3>
                    <p className="text-foreground">Can perform all POS functions including refunds, discounts, and accessing reports. Typically for managers.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Limited Access</h3>
                    <p className="text-foreground">Can process sales but may have restrictions on discounts, refunds, or viewing reports. Configure specific permissions.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Register Only</h3>
                    <p className="text-foreground">Basic checkout functionality only. Cannot modify products, apply manual discounts, or access settings.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Staff Attribution</h4>
                  <p className="text-foreground">
                    When staff members log in with their PIN, all sales are attributed to them. This allows you to track individual performance, run commission reports, and identify your top sellers.
                  </p>
                </div>
              </section>

              <section id="inventory-sync" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Inventory Synchronisation</h2>
                <p className="text-lg text-foreground mb-4">
                  One of the biggest advantages of Shopify POS is automatic inventory synchronisation between your online store and retail locations.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">How Sync Works</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Real-time updates:</strong> Stock changes when you sell in store or receive an online order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Location-based:</strong> Track stock separately at each location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Multi-channel:</strong> Inventory counts reflect all sales channels</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Best Practices</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Initial Stock Count</h3>
                    <p className="text-foreground">Before going live, conduct a thorough stock count and update your inventory in Shopify. Use the bulk editor or import a CSV for large catalogues.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Regular Reconciliation</h3>
                    <p className="text-foreground">Schedule weekly or monthly stock counts to verify physical inventory matches your system. Investigate and resolve any discrepancies.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Low Stock Alerts</h3>
                    <p className="text-foreground">Set up inventory alerts to notify you when products are running low. This prevents overselling and helps with reordering.</p>
                  </div>
                </div>
              </section>

              <section id="payment-configuration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payment Configuration</h2>
                <p className="text-lg text-foreground mb-4">
                  Configure your payment methods to accept cards, cash, and other payment types at your retail location.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Payment Methods</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shopify Payments:</strong> Accept cards with no additional gateway fees. Required for Tap and Chip reader.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Cash:</strong> Enable cash payments and configure cash drawer if using one.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Gift cards:</strong> Accept Shopify gift cards for payment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Custom payments:</strong> Add other payment types like cheques or store credit.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Transaction Fees</h3>
                <p className="text-lg text-foreground mb-4">
                  In-person card transaction fees are typically lower than online. With Shopify Payments in the UK, in-person rates start at 1.5% + 0p for Advanced Shopify plans.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Tipping (Optional)</h3>
                  <p className="text-foreground">
                    Enable tipping in the POS settings if appropriate for your business. Customers can add a tip during the payment process. Tips are included in payouts alongside regular revenue.
                  </p>
                </div>
              </section>

              <section id="troubleshooting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Troubleshooting</h2>
                <p className="text-lg text-foreground mb-4">
                  Common POS issues and how to resolve them.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Card reader not connecting</h3>
                    <p className="text-foreground">Ensure Bluetooth is enabled on your device. Charge the reader fully. Forget and re-pair the device in Settings &gt; Hardware.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Products not appearing</h3>
                    <p className="text-foreground">Check that products are assigned to your POS location. In the product editor, verify the location is enabled under Inventory.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Inventory not syncing</h3>
                    <p className="text-foreground">Pull down to refresh in the POS app. Check your internet connection. If issues persist, log out and back in to the app.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Receipt printer not working</h3>
                    <p className="text-foreground">Verify the printer is powered on and connected. Check paper supply. Re-add the printer in Hardware settings.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-local-delivery" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Set Up Local Delivery &rarr;</h4>
                      <p className="text-sm text-foreground">Offer delivery alongside in-store pickup</p>
                    </Link>
                    <Link href="/guides/how-to-set-up-shopify-payments" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Payments Setup Guide &rarr;</h4>
                      <p className="text-sm text-foreground">Configure payment processing</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need POS Setup Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can configure your Shopify POS, integrate with your existing systems, and train your staff on best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
