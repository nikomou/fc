import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Trust Badges to Shopify",
  description:
    "Learn how to add trust badges to your Shopify store to increase conversions. Covers payment badges, security seals, guarantee badges, and placement strategies.",
  alternates: {
    canonical: "/guides/how-to-add-trust-badges-to-shopify",
  },
  openGraph: {
    title: "How to Add Trust Badges to Shopify",
    description: "Learn how to add trust badges to your Shopify store to increase conversions.",
    url: "/guides/how-to-add-trust-badges-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-trust-badges", title: "What Are Trust Badges", level: 2 },
  { id: "types-of-trust-badges", title: "Types of Trust Badges", level: 2 },
  { id: "where-to-place-badges", title: "Where to Place Badges", level: 2 },
  { id: "adding-badges-to-shopify", title: "Adding Badges to Shopify", level: 2 },
  { id: "payment-badges", title: "Payment Badges", level: 2 },
  { id: "security-badges", title: "Security Badges", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Trust Badges to Shopify",
  description: "Learn how to add trust badges to your Shopify store to increase conversions.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-trust-badges-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Trust Badges to Shopify", item: `${siteConfig.url}/guides/how-to-add-trust-badges-to-shopify` },
  ],
};

export default function TrustBadgesGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Conversion</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Trust Badges to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Trust badges reduce purchase anxiety and increase conversions. This guide shows you which badges to use, where to place them, and how to implement them effectively.
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

              <section id="what-are-trust-badges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Trust Badges</h2>
                <p className="text-lg text-foreground mb-4">
                  Trust badges are visual symbols that communicate security, legitimacy, and reliability to your customers. They appear as small icons or seals throughout your store, particularly near add-to-cart buttons and during checkout.
                </p>
                <p className="text-lg text-foreground mb-6">
                  These badges work by leveraging established brand recognition and authority. When customers see a familiar Visa logo or a recognised security seal, they feel more confident completing their purchase because they associate those symbols with safety and professionalism.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Why Trust Badges Work</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Reduce purchase anxiety</strong> by addressing common concerns about security and legitimacy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Borrow trust</strong> from established brands and certification bodies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Communicate policies</strong> like free returns and money-back guarantees visually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Build credibility</strong> especially for new stores without brand recognition</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Impact on Conversions</h4>
                  <p className="text-foreground">
                    Studies show that trust badges can increase conversions by 15-40%, depending on placement and the type of badge used. The effect is strongest for first-time visitors who have no prior experience with your brand.
                  </p>
                </div>
              </section>

              <section id="types-of-trust-badges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Types of Trust Badges</h2>
                <p className="text-lg text-foreground mb-4">
                  Different badges serve different purposes. Understanding each type helps you choose the right combination for your store.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Payment Badges</h3>
                    <p className="text-foreground mb-2">Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, Shop Pay, Klarna</p>
                    <p className="text-sm text-foreground">Show customers which payment methods you accept. These are among the most effective badges because they answer an immediate question.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Security Badges</h3>
                    <p className="text-foreground mb-2">SSL certificates, Norton Secured, McAfee Secure, PCI Compliant</p>
                    <p className="text-sm text-foreground">Reassure customers that their payment information is protected. Particularly important for stores in industries where security concerns are high.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Policy Badges</h3>
                    <p className="text-foreground mb-2">Free shipping, free returns, money-back guarantee, satisfaction guaranteed</p>
                    <p className="text-sm text-foreground">Communicate your customer-friendly policies at a glance. These reduce perceived risk of purchase.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Third-Party Endorsement Badges</h3>
                    <p className="text-foreground mb-2">Trustpilot, Reviews.io, Google Customer Reviews, Better Business Bureau</p>
                    <p className="text-sm text-foreground">Show that independent parties have verified your business and that real customers have reviewed you positively.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Certification Badges</h3>
                    <p className="text-foreground mb-2">Organic, Fairtrade, B Corp, Cruelty-Free, Vegan, ISO certified</p>
                    <p className="text-sm text-foreground">Demonstrate that your products or business practices meet specific standards. Important for brands with ethical or quality differentiators.</p>
                  </div>
                </div>
              </section>

              <section id="where-to-place-badges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Where to Place Badges</h2>
                <p className="text-lg text-foreground mb-4">
                  Badge placement directly affects their impact. Put them where customers experience hesitation or need reassurance most.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">High-Impact Locations</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Below the Add to Cart Button</strong>
                      <p className="text-foreground mt-1">The most critical location. Place payment badges and policy badges here. This is where customers make their buying decision.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Cart Page</strong>
                      <p className="text-foreground mt-1">Reinforce security and policy badges before customers proceed to checkout. Address any lingering concerns.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Checkout Page</strong>
                      <p className="text-foreground mt-1">Security badges are most important here. Customers are about to enter payment details and need maximum reassurance.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Footer</strong>
                      <p className="text-foreground mt-1">Include payment badges, security seals, and review platform badges. The footer appears on every page.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Placement Tips</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• Keep badges small and subtle. Oversized badges look unprofessional.</li>
                    <li>• Group similar badges together. Payment badges in one row, policy badges in another.</li>
                    <li>• Use consistent styling. Match badge colours and sizes to your theme.</li>
                    <li>• Do not overcrowd. Too many badges can have the opposite effect and look desperate.</li>
                  </ul>
                </div>
              </section>

              <section id="adding-badges-to-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Adding Badges to Shopify</h2>
                <p className="text-lg text-foreground mb-4">
                  There are several ways to add trust badges to your Shopify store, ranging from simple to more technical.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Method 1: Theme Editor</h3>
                <p className="text-lg text-foreground mb-4">
                  Many modern Shopify themes include built-in trust badge sections that you can configure without code.
                </p>
                <ol className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>Go to Online Store → Themes → Customise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>Navigate to your product page template</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>Look for a &quot;Trust badges&quot; or &quot;Payment icons&quot; section</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>Enable and configure the badges</span>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Method 2: Apps</h3>
                <p className="text-lg text-foreground mb-4">
                  Trust badge apps provide pre-designed badges and easy placement options. Popular options include:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Trust Badges Bear</strong> for customisable badge sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Free Trust Badge</strong> for basic badge implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ultimate Trust Badges</strong> for animated badges</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Method 3: Manual Code</h3>
                <p className="text-lg text-foreground mb-4">
                  For complete control, add badges directly to your theme code. Upload your badge images to Settings → Files, then add the HTML to your theme templates.
                </p>
              </section>

              <section id="payment-badges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Payment Badges</h2>
                <p className="text-lg text-foreground mb-4">
                  Payment method badges are the most universally effective trust badges. They answer an immediate customer question: &quot;Can I pay the way I want?&quot;
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Essential Payment Badges for UK Stores</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Visa and Mastercard</strong> are essential for all stores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>American Express</strong> if you accept it (important for higher-value purchases)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>PayPal</strong> is trusted by customers wary of entering card details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Apple Pay and Google Pay</strong> for mobile shoppers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Klarna or Clearpay</strong> if you offer buy now, pay later</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Only Show What You Accept</h4>
                  <p className="text-foreground">
                    Only display badges for payment methods you actually accept. Showing a PayPal badge when you do not accept PayPal will frustrate customers and damage trust.
                  </p>
                </div>
              </section>

              <section id="security-badges" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Security Badges</h2>
                <p className="text-lg text-foreground mb-4">
                  Security badges reassure customers that their payment and personal information is protected. However, you should only display badges you can legitimately claim.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Built-in Shopify Security</h3>
                <p className="text-lg text-foreground mb-4">
                  All Shopify stores automatically include SSL encryption and PCI compliance. You can legitimately display:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>SSL Secure</strong> badge (all Shopify stores have SSL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>PCI Compliant</strong> badge (Shopify handles this)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Secure Checkout</strong> or <strong>256-bit Encryption</strong> badge</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">A Note on Third-Party Security Seals</h4>
                  <p className="text-foreground">
                    Badges from Norton Secured or McAfee Secure require paid subscriptions and active monitoring. Do not use these badges unless you have a genuine subscription with the provider. Using them without authorisation is deceptive and potentially illegal.
                  </p>
                </div>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Follow these guidelines to maximise the effectiveness of your trust badges.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Quality Over Quantity</h3>
                    <p className="text-foreground">Use 4-6 carefully selected badges rather than 15 random ones. Too many badges can overwhelm and create suspicion.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Match Your Brand</h3>
                    <p className="text-foreground">Use badges that complement your store design. Greyscale badges often work better than colourful ones for a premium look.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Test and Measure</h3>
                    <p className="text-foreground">A/B test different badge combinations. What works for one store may not work for another depending on your audience.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Be Authentic</h3>
                    <p className="text-foreground">Only display badges you can legitimately claim. Fake badges can backfire if customers investigate.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-checkout-optimisation-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Checkout Optimisation →</h4>
                      <p className="text-sm text-foreground">Reduce cart abandonment</p>
                    </Link>
                    <Link href="/guides/how-to-add-reviews-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Reviews →</h4>
                      <p className="text-sm text-foreground">Build trust with social proof</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Conversion Rate Optimisation Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can implement trust badges, optimise your checkout flow, and improve your store&apos;s conversion rate with proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/ecommerce-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
