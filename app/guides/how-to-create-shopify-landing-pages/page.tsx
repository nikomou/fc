import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Landing Pages",
  description:
    "Complete guide to creating high-converting landing pages on Shopify. Learn about page builders, design best practices, and conversion optimisation techniques.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-landing-pages",
  },
  openGraph: {
    title: "How to Create Shopify Landing Pages",
    description: "Complete guide to creating high-converting landing pages on Shopify.",
    url: "/guides/how-to-create-shopify-landing-pages",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-are-landing-pages", title: "What Are Landing Pages", level: 2 },
  { id: "when-to-use", title: "When to Use Landing Pages", level: 2 },
  { id: "native-shopify", title: "Using Shopify Native Pages", level: 2 },
  { id: "page-builders", title: "Page Builder Apps", level: 2 },
  { id: "design-best-practices", title: "Design Best Practices", level: 2 },
  { id: "conversion-elements", title: "Conversion Elements", level: 2 },
  { id: "testing-optimisation", title: "Testing and Optimisation", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Landing Pages",
  description: "Complete guide to creating high-converting landing pages on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-landing-pages` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create Shopify Landing Pages", item: `${siteConfig.url}/guides/how-to-create-shopify-landing-pages` },
  ],
};

export default function LandingPagesGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Marketing</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Landing Pages
            </h1>

            <p className="text-xl text-foreground mb-8">
              Landing pages are essential for paid advertising, product launches, and promotional campaigns. This guide shows you how to create landing pages that convert visitors into customers.
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

              <section id="what-are-landing-pages" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Are Landing Pages</h2>
                <p className="text-lg text-foreground mb-4">
                  A landing page is a standalone page designed for a specific marketing campaign or goal. Unlike your homepage or collection pages, landing pages have a single focus and minimal distractions.
                </p>
                <p className="text-lg text-foreground mb-6">
                  The purpose is simple: guide visitors toward one specific action, whether that is purchasing a product, signing up for an email list, or claiming a special offer.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Landing Page vs Regular Page</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Single goal:</strong> One primary call-to-action rather than multiple navigation options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Minimal navigation:</strong> Often removes or simplifies the main menu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Targeted content:</strong> Matches the specific ad or campaign that brought visitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Conversion focused:</strong> Every element supports the primary action</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="when-to-use" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">When to Use Landing Pages</h2>
                <p className="text-lg text-foreground mb-4">
                  Not every campaign needs a landing page, but certain situations benefit significantly from the focused approach they provide.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Ideal Use Cases</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span><strong>Paid advertising:</strong> Facebook, Google, and Instagram ads perform better when linked to dedicated landing pages rather than generic collection pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span><strong>Product launches:</strong> Build anticipation and capture emails before a new product drops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span><strong>Seasonal promotions:</strong> Black Friday, holiday sales, or clearance events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span><strong>Lead generation:</strong> Offering free guides, samples, or exclusive access in exchange for email addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span><strong>Influencer campaigns:</strong> Custom pages for affiliate or influencer traffic with personalised messaging</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create separate landing pages for different audience segments in your paid campaigns. A landing page targeting new customers should differ from one targeting returning customers.
                  </p>
                </div>
              </section>

              <section id="native-shopify" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Using Shopify Native Pages</h2>
                <p className="text-lg text-foreground mb-6">
                  Shopify&apos;s Online Store 2.0 themes include customisable page templates that work well for basic landing pages without requiring additional apps.
                </p>

                <ol className="space-y-6 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Create a New Page</strong>
                      <p className="text-foreground mt-1">Go to Online Store &gt; Pages &gt; Add page. Give it a title and leave the content area empty for now.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Assign a Template</strong>
                      <p className="text-foreground mt-1">In the Theme template dropdown, select a template or create a new one. Many themes include a &quot;Landing&quot; or &quot;Campaign&quot; template.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Customise in Theme Editor</strong>
                      <p className="text-foreground mt-1">Open the theme customiser and navigate to your new page. Add sections like image banners, featured collections, testimonials, and call-to-action blocks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Hide Navigation (Optional)</strong>
                      <p className="text-foreground mt-1">For a true landing page experience, consider creating a page template that hides the main navigation. This keeps visitors focused on your call-to-action.</p>
                    </div>
                  </li>
                </ol>
              </section>

              <section id="page-builders" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Page Builder Apps</h2>
                <p className="text-lg text-foreground mb-4">
                  For more design flexibility, page builder apps offer drag-and-drop interfaces with advanced features that go beyond native Shopify capabilities.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Shogun</h3>
                    <p className="text-foreground">Powerful drag-and-drop builder with A/B testing, analytics, and a large template library. Best for stores that create landing pages frequently.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">PageFly</h3>
                    <p className="text-foreground">Feature-rich builder with a generous free plan. Good balance of flexibility and ease of use. Includes mobile-responsive controls.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">GemPages</h3>
                    <p className="text-foreground">Fast editor with AI-powered image generation and conversion-focused elements like countdown timers and stock counters.</p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Performance Consideration</h4>
                  <p className="text-foreground">
                    Page builder apps can add JavaScript that impacts load times. Monitor your page speed after installation and use built-in lazy loading options where available.
                  </p>
                </div>
              </section>

              <section id="design-best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Design Best Practices</h2>
                <p className="text-lg text-foreground mb-4">
                  Effective landing pages follow proven design principles that guide visitors toward conversion.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Above the Fold</h3>
                    <p className="text-foreground">Your headline, value proposition, and primary CTA should be visible without scrolling. Visitors should immediately understand what you are offering.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Visual Hierarchy</h3>
                    <p className="text-foreground">Use size, colour, and spacing to guide attention. Your CTA button should be the most prominent element on the page.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Consistent Messaging</h3>
                    <p className="text-foreground">Match your landing page headline to the ad that brought visitors. Inconsistency creates confusion and increases bounce rates.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground-dark mb-2">Mobile First</h3>
                    <p className="text-foreground">Over 60% of Shopify traffic is mobile. Design for mobile screens first, then expand for desktop. Test on actual devices.</p>
                  </div>
                </div>
              </section>

              <section id="conversion-elements" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Conversion Elements</h2>
                <p className="text-lg text-foreground mb-4">
                  Include these elements to maximise your landing page conversion rate.
                </p>

                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Social proof:</strong> Customer reviews, testimonials, press mentions, and trust badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Urgency:</strong> Countdown timers, limited stock indicators, or deadline messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Benefits over features:</strong> Focus on what the customer gains, not technical specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Risk reduction:</strong> Money-back guarantees, free returns, and secure payment badges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Clear CTA:</strong> Action-oriented button text like &quot;Get My Discount&quot; rather than generic &quot;Submit&quot;</span>
                  </li>
                </ul>
              </section>

              <section id="testing-optimisation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Testing and Optimisation</h2>
                <p className="text-lg text-foreground mb-4">
                  Your first landing page is rarely your best. Continuous testing improves conversion rates over time.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">What to Test</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Headlines:</strong> Test different value propositions and emotional appeals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>CTA buttons:</strong> Colour, text, size, and placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Images:</strong> Product shots vs lifestyle images vs videos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Page length:</strong> Short and punchy vs detailed and comprehensive</span>
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/checklists/shopify-cro-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">CRO Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Conversion rate optimisation tips</p>
                    </Link>
                    <Link href="/checklists/shopify-facebook-ads-checklist" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Facebook Ads Checklist &rarr;</h4>
                      <p className="text-sm text-foreground">Set up effective ad campaigns</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Custom Landing Pages?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team creates high-converting landing pages tailored to your campaigns. From design to implementation, we handle everything.
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
