import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Handle Shopify Returns",
  description:
    "Complete guide to managing returns on Shopify. Learn about return policies, refund processing, return apps, and reducing return rates.",
  alternates: {
    canonical: "/guides/how-to-handle-shopify-returns",
  },
  openGraph: {
    title: "How to Handle Shopify Returns",
    description: "Complete guide to managing returns on Shopify.",
    url: "/guides/how-to-handle-shopify-returns",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "returns-overview", title: "Returns Overview", level: 2 },
  { id: "return-policy", title: "Return Policy", level: 2 },
  { id: "processing-returns", title: "Processing Returns", level: 2 },
  { id: "issuing-refunds", title: "Issuing Refunds", level: 2 },
  { id: "return-apps", title: "Return Apps", level: 2 },
  { id: "reducing-returns", title: "Reducing Returns", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Handle Shopify Returns",
  description: "Complete guide to managing returns on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-handle-shopify-returns` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Handle Shopify Returns", item: `${siteConfig.url}/guides/how-to-handle-shopify-returns` },
  ],
};

export default function ShopifyReturnsGuidePage() {
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
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Handle Shopify Returns
            </h1>

            <p className="text-xl text-foreground mb-8">
              A good returns process builds customer trust and can turn a negative experience into a positive one. This guide covers policies, processing, and strategies to reduce returns.
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

              <section id="returns-overview" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Returns Overview</h2>
                <p className="text-lg text-foreground mb-4">
                  Returns are an inevitable part of ecommerce. In the UK, consumers have a legal right to return online purchases within 14 days under the Consumer Contracts Regulations. Beyond legal requirements, a generous return policy can increase conversion rates.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Shopify provides built-in tools for handling returns and refunds, with additional apps available for more advanced self-service returns portals.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">UK Returns Law</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>14-day cooling off period</strong> for distance selling (online purchases)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>14 days to return</strong> after notifying you of the return</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>14 days to refund</strong> after receiving the returned goods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Exceptions apply</strong> for personalised, perishable, or sealed hygiene products</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="return-policy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Return Policy</h2>
                <p className="text-lg text-foreground mb-4">
                  Your return policy should be clear, easy to find, and ideally more generous than the legal minimum. A good policy builds confidence and can increase conversion rates.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">What to Include</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Timeframe:</strong> How long customers have to return (30 days is common)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Condition:</strong> What condition items must be in (unworn, tags attached, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Process:</strong> How to initiate a return (contact form, portal, email)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Shipping:</strong> Who pays for return shipping (you or the customer)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Refund method:</strong> Original payment method, store credit, or exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Exceptions:</strong> Items that cannot be returned (sale items, underwear, etc.)</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Policy Placement</h4>
                  <p className="text-foreground">
                    Add your return policy as a page in Shopify (Online Store → Pages). Link to it from your footer, product pages, and checkout. Many stores also include a summary in the FAQ.
                  </p>
                </div>
              </section>

              <section id="processing-returns" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Processing Returns</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify has built-in returns management under Orders. You can create return labels, track return shipments, and manage the entire process from one place.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Creating a Return</h3>
                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Find the Order</strong>
                      <p className="text-foreground mt-1">Go to Orders and search for the customer&apos;s order using order number, name, or email.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Click Return Items</strong>
                      <p className="text-foreground mt-1">Click the &quot;Return items&quot; button in the order details page.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Select Items</strong>
                      <p className="text-foreground mt-1">Choose which items are being returned and enter a reason if applicable.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Create Return Shipping</strong>
                      <p className="text-foreground mt-1">Choose to create a return label (if using Shopify Shipping) or provide manual return instructions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                    <div>
                      <strong className="text-foreground-dark">Send Return Email</strong>
                      <p className="text-foreground mt-1">Shopify sends the customer an email with return instructions and any return labels.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="issuing-refunds" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Issuing Refunds</h2>
                <p className="text-lg text-foreground mb-4">
                  Once you receive the returned items and verify their condition, you can issue a refund through Shopify.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Refund Options</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Full Refund</h4>
                    <p className="text-foreground">Refund the entire order including shipping. Use when the return is due to your error or a faulty product.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Partial Refund</h4>
                    <p className="text-foreground">Refund only the returned items. You can also deduct return shipping costs if your policy allows.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Store Credit</h4>
                    <p className="text-foreground">Issue store credit instead of a refund. This keeps the money in your business and encourages future purchases.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Refund Processing</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Click Refund:</strong> In the order, click &quot;Refund&quot; and select the items and amounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Choose refund destination:</strong> Original payment method or store credit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Restock items:</strong> Check &quot;Restock items&quot; to add inventory back to your stock</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Send notification:</strong> Shopify emails the customer confirming the refund</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Refund Timing</h4>
                  <p className="text-foreground">
                    Refunds to credit/debit cards typically take 5-10 business days to appear in the customer&apos;s account. Set expectations in your refund confirmation email.
                  </p>
                </div>
              </section>

              <section id="return-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Return Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  For high-volume stores or those wanting a self-service returns portal, dedicated returns apps provide a better experience than manual processing.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Loop Returns</h3>
                    <p className="text-foreground">Enterprise-grade returns platform. Encourages exchanges over refunds with bonus credit offers. Includes analytics and automation rules.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">AfterShip Returns</h3>
                    <p className="text-foreground">Self-service returns portal with automated approval rules. Integrates with AfterShip tracking for a complete post-purchase solution.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Returnly</h3>
                    <p className="text-foreground">Offers instant store credit before the return is received. Customers can shop immediately while returning. Now part of Affirm.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Return Prime</h3>
                    <p className="text-foreground">Budget-friendly option with self-service portal, automated emails, and prepaid label generation. Good for growing stores.</p>
                  </div>
                </div>
              </section>

              <section id="reducing-returns" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reducing Returns</h2>
                <p className="text-lg text-foreground mb-4">
                  The best return is the one that never happens. Invest in reducing returns to protect margins and improve customer satisfaction.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Return Prevention Strategies</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Detailed product descriptions:</strong> Include all specifications, materials, and care instructions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Multiple product images:</strong> Show products from all angles, in use, and in context</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Size guides:</strong> Provide detailed measurements, not just S/M/L</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Customer reviews:</strong> Real feedback helps set accurate expectations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Video content:</strong> Product videos reduce uncertainty about look and feel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Quality packaging:</strong> Prevent damage-related returns with proper packaging</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">20-30%</div>
                    <div className="text-sm text-foreground">Average ecommerce return rate</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">50-60%</div>
                    <div className="text-sm text-foreground">Fashion industry return rate</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">22%</div>
                    <div className="text-sm text-foreground">Returns due to inaccurate descriptions</div>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these best practices to create a returns process that protects your business while keeping customers happy.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Returns Tips</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Respond quickly:</strong> Acknowledge return requests within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Be generous:</strong> A liberal return policy increases conversion and trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Track reasons:</strong> Analyse why items are returned to fix underlying issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Offer exchanges:</strong> Encourage size/colour exchanges instead of refunds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Follow up:</strong> After resolving a return, ask for feedback on the experience</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-order-tracking" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Order Tracking Guide →</h4>
                      <p className="text-sm text-foreground">Post-purchase experience</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Returns Process Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up self-service returns portals, integrate returns apps, and optimise your returns process to reduce costs and improve customer satisfaction.
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
