import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add Customer Reviews to Shopify",
  description:
    "Learn how to add product reviews to your Shopify store. Covers review apps, collecting reviews, displaying them effectively, and using review schema for SEO.",
  alternates: {
    canonical: "/guides/how-to-add-reviews-to-shopify",
  },
  openGraph: {
    title: "How to Add Customer Reviews to Shopify",
    description: "Learn how to add product reviews to your Shopify store.",
    url: "/guides/how-to-add-reviews-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "why-reviews-matter", title: "Why Reviews Matter", level: 2 },
  { id: "choosing-a-review-app", title: "Choosing a Review App", level: 2 },
  { id: "collecting-reviews", title: "Collecting Reviews", level: 2 },
  { id: "displaying-reviews", title: "Displaying Reviews", level: 2 },
  { id: "photo-and-video-reviews", title: "Photo and Video Reviews", level: 2 },
  { id: "review-schema-seo", title: "Review Schema for SEO", level: 2 },
  { id: "handling-negative-reviews", title: "Handling Negative Reviews", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add Reviews to Shopify",
  description: "Learn how to add product reviews to your Shopify store.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-reviews-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add Reviews to Shopify", item: `${siteConfig.url}/guides/how-to-add-reviews-to-shopify` },
  ],
};

export default function AddReviewsGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Social Proof</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>13 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Add Reviews to Shopify
            </h1>

            <p className="text-xl text-foreground mb-8">
              Product reviews are one of the most powerful conversion tools in ecommerce. This guide shows you how to collect, display, and leverage reviews effectively.
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

              <section id="why-reviews-matter" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Why Reviews Matter</h2>
                <p className="text-lg text-foreground mb-4">
                  Reviews provide social proof that reduces purchase anxiety. When potential customers see that others have bought and enjoyed a product, they feel more confident making the same decision.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Beyond social proof, reviews provide authentic content that helps customers make informed decisions. They answer questions your description might miss and address concerns from a customer perspective.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Review Statistics</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>93% of consumers</strong> read reviews before making a purchase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Products with reviews convert 270%</strong> better than those without</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Star ratings in search results</strong> can increase click-through rates by 35%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>82% of shoppers</strong> specifically seek out negative reviews to understand limitations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">The Trust Factor</h4>
                  <p className="text-foreground">
                    Customers trust peer reviews more than brand messaging. A 4.2-star average from 50 real customers is more convincing than any marketing claim you could make.
                  </p>
                </div>
              </section>

              <section id="choosing-a-review-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing a Review App</h2>
                <p className="text-lg text-foreground mb-4">
                  Shopify does not include native review functionality, so you will need an app. The right choice depends on your budget, feature needs, and integration requirements.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Popular Review Apps</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Judge.me</h4>
                    <p className="text-foreground mb-2">Best for most stores. Free plan available with solid features. Paid plans add photo reviews, Q&amp;A, and Google Shopping integration.</p>
                    <p className="text-sm text-foreground"><strong>Price:</strong> Free / £12/month</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Yotpo</h4>
                    <p className="text-foreground mb-2">Enterprise-level features including loyalty programmes, referrals, and SMS marketing. Better for larger stores with bigger budgets.</p>
                    <p className="text-sm text-foreground"><strong>Price:</strong> Free / Custom pricing</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Loox</h4>
                    <p className="text-foreground mb-2">Specialises in photo and video reviews. Beautiful visual presentation. Referral discounts for customers who submit photos.</p>
                    <p className="text-sm text-foreground"><strong>Price:</strong> From £7.99/month</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Stamped.io</h4>
                    <p className="text-foreground mb-2">Full suite including reviews, Q&amp;A, NPS surveys, and checkout reviews. Good for stores wanting everything in one platform.</p>
                    <p className="text-sm text-foreground"><strong>Price:</strong> From £19/month</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Key Features to Look For</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• Automated review request emails</li>
                    <li>• Photo and video review support</li>
                    <li>• Review schema markup for SEO</li>
                    <li>• Import/export functionality</li>
                    <li>• Customisable display widgets</li>
                  </ul>
                </div>
              </section>

              <section id="collecting-reviews" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Collecting Reviews</h2>
                <p className="text-lg text-foreground mb-4">
                  The biggest challenge is getting customers to leave reviews. Most happy customers do not think to leave a review unless prompted. You need a systematic approach.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Review Request Strategy</h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Time It Right</strong>
                      <p className="text-foreground mt-1">Send review requests 7-14 days after delivery. This gives customers time to use the product but keeps the purchase fresh in their mind.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Make It Easy</strong>
                      <p className="text-foreground mt-1">Include a direct link to the review form. The fewer clicks required, the more reviews you will receive. Some apps allow in-email reviews.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Offer an Incentive</strong>
                      <p className="text-foreground mt-1">A small discount on their next order (5-10%) significantly increases review rates. Make the incentive conditional on leaving a review, not on leaving a positive review.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground-dark">Follow Up</strong>
                      <p className="text-foreground mt-1">Send a reminder 5-7 days after the first request if no review has been submitted. Keep it friendly and brief.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Incentive Guidelines</h4>
                  <p className="text-foreground">
                    Never pay for positive reviews or offer incentives contingent on rating. This violates consumer protection rules and most review platform terms of service. Incentivise honest reviews, not positive ones.
                  </p>
                </div>
              </section>

              <section id="displaying-reviews" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Displaying Reviews</h2>
                <p className="text-lg text-foreground mb-4">
                  How you display reviews affects their impact. Reviews should be prominent, easy to browse, and provide the information customers are looking for.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Display Best Practices</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Star Rating Summary</h4>
                    <p className="text-foreground">Show average star rating and total review count prominently near the product title. This is what most customers look for first.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Rating Distribution</h4>
                    <p className="text-foreground">Show a bar chart of how many 5-star, 4-star, etc. reviews you have. This builds trust by showing the full picture.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Filtering and Sorting</h4>
                    <p className="text-foreground">Let customers filter by rating, recency, or whether reviews include photos. Some want to see criticism; others want to see photos.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Verified Purchase Badge</h4>
                    <p className="text-foreground">Mark reviews from confirmed purchasers. This distinguishes genuine reviews from potentially fake ones.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Review Placement</h4>
                  <p className="text-foreground">
                    Place reviews below the main product information but above recommendations. Many stores put reviews at the very bottom where customers never scroll. Reviews should be visible and accessible.
                  </p>
                </div>
              </section>

              <section id="photo-and-video-reviews" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Photo and Video Reviews</h2>
                <p className="text-lg text-foreground mb-4">
                  Visual reviews are significantly more impactful than text-only reviews. Customers can see how products look in real life, on real people, in real homes.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Why Visual Reviews Convert Better</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Authenticity:</strong> Customer photos are unedited and real, building trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Context:</strong> Shows products in real-world settings and on diverse body types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Engagement:</strong> Photo reviews get 10x more engagement than text reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>User-generated content:</strong> Can be repurposed for marketing with permission</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Encouraging Photo Reviews</h3>
                <p className="text-lg text-foreground mb-4">
                  Offer a larger incentive for reviews that include photos. For example, 10% off the next order for text reviews, 15% off for photo reviews. This significantly increases visual content.
                </p>
              </section>

              <section id="review-schema-seo" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Review Schema for SEO</h2>
                <p className="text-lg text-foreground mb-4">
                  Review schema markup enables star ratings to appear in Google search results. These rich snippets stand out visually and significantly increase click-through rates.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Setting Up Review Schema</h3>
                <p className="text-lg text-foreground mb-4">
                  Most review apps automatically add the necessary schema markup. However, you should verify it is working correctly.
                </p>

                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground-dark">Test Your Pages</strong>
                      <p className="text-foreground mt-1">Use Google&apos;s Rich Results Test tool to check if review schema is correctly implemented on your product pages.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground-dark">Check App Settings</strong>
                      <p className="text-foreground mt-1">Ensure review schema is enabled in your review app settings. Some apps disable it by default.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground-dark">Monitor Search Console</strong>
                      <p className="text-foreground mt-1">Google Search Console shows any errors with your review markup and confirms when rich results are appearing.</p>
                    </div>
                  </li>
                </ol>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Schema Requirements</h4>
                  <p className="text-foreground">
                    Google requires at least one review with a rating to display star snippets. The aggregate rating must be based on genuine customer reviews, not self-assessed ratings.
                  </p>
                </div>
              </section>

              <section id="handling-negative-reviews" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Handling Negative Reviews</h2>
                <p className="text-lg text-foreground mb-4">
                  Negative reviews are inevitable and not necessarily bad. They add authenticity (a 5-star average looks suspicious) and provide valuable feedback. How you handle them matters most.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Response Best Practices</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Respond Quickly</h4>
                    <p className="text-foreground">Reply within 24-48 hours. This shows you care about customer feedback and are actively engaged.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Acknowledge the Issue</h4>
                    <p className="text-foreground">Do not be defensive. Thank them for the feedback and apologise for their experience, even if you disagree.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Offer a Solution</h4>
                    <p className="text-foreground">Provide a concrete solution: refund, replacement, or discount. Move the conversation to email for sensitive matters.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Learn and Improve</h4>
                    <p className="text-foreground">If multiple reviews mention the same issue, fix the underlying problem rather than just responding.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-add-trust-badges-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Trust Badges →</h4>
                      <p className="text-sm text-foreground">More social proof strategies</p>
                    </Link>
                    <Link href="/guides/how-to-add-schema-markup-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Schema Markup →</h4>
                      <p className="text-sm text-foreground">Get star ratings in Google</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Reviews?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team can set up review systems, implement schema markup, and create strategies to collect more customer reviews and social proof.
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
