import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create Shopify Email Campaigns",
  description:
    "Learn how to create effective email campaigns for your Shopify store. Covers strategy, design, copywriting, segmentation, and timing for maximum conversions.",
  alternates: {
    canonical: "/guides/how-to-create-shopify-email-campaigns",
  },
  openGraph: {
    title: "How to Create Shopify Email Campaigns",
    description:
      "Learn how to create effective email campaigns for your Shopify store with our comprehensive guide.",
    url: "/guides/how-to-create-shopify-email-campaigns",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "email-campaign-basics", title: "Email Campaign Basics", level: 2 },
  { id: "campaign-types", title: "Campaign Types", level: 2 },
  { id: "subject-lines", title: "Subject Lines That Convert", level: 2 },
  { id: "email-design", title: "Email Design", level: 2 },
  { id: "copywriting", title: "Copywriting for Conversions", level: 2 },
  { id: "segmentation-strategy", title: "Segmentation Strategy", level: 2 },
  { id: "timing-and-frequency", title: "Timing and Frequency", level: 2 },
  { id: "measuring-success", title: "Measuring Success", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create Shopify Email Campaigns",
  description:
    "Learn how to create effective email campaigns for your Shopify store with our comprehensive guide.",
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
    "@id": `${siteConfig.url}/guides/how-to-create-shopify-email-campaigns`,
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
      name: "How to Create Shopify Email Campaigns",
      item: `${siteConfig.url}/guides/how-to-create-shopify-email-campaigns`,
    },
  ],
};

export default function EmailCampaignsGuidePage() {
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
                <span>15 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              How to Create Shopify Email Campaigns
            </h1>

            <p className="text-xl text-foreground mb-8">
              Email campaigns are one of the highest-ROI marketing channels for ecommerce. This
              guide teaches you how to create campaigns that get opened, read, and drive sales.
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
              {/* Email Campaign Basics */}
              <section id="email-campaign-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email Campaign Basics
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Email campaigns (also called broadcasts or one-off sends) are messages you send
                  to your list at a specific time. Unlike automated flows that run continuously,
                  campaigns are planned, created, and sent manually based on your marketing
                  calendar.
                </p>
                <p className="text-lg text-foreground mb-6">
                  For Shopify stores, email campaigns typically generate 20-30% of total email
                  revenue. The remaining 70-80% comes from automated flows. Both are essential,
                  but campaigns are where you build relationships, announce news, and create
                  urgency around promotions.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">When to Use Campaigns vs Flows</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground-dark mb-2">Campaigns (Manual)</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• New product launches</li>
                        <li>• Sales and promotions</li>
                        <li>• Seasonal content</li>
                        <li>• Company news and updates</li>
                        <li>• Newsletters and content</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground-dark mb-2">Flows (Automated)</h4>
                      <ul className="space-y-1 text-foreground text-sm">
                        <li>• Welcome series</li>
                        <li>• Abandoned cart reminders</li>
                        <li>• Post-purchase follow-ups</li>
                        <li>• Browse abandonment</li>
                        <li>• Win-back sequences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-foreground">
                  The key to successful campaigns is planning. Map out your campaigns for the month
                  ahead, considering product launches, holidays, and promotional periods. This
                  prevents last-minute rushing and ensures consistent communication.
                </p>
              </section>

              {/* Campaign Types */}
              <section id="campaign-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Campaign Types
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Not all campaigns are promotional. A healthy email programme mixes different
                  types to keep subscribers engaged without burning them out on constant sales
                  pitches.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Promotional Campaigns
                    </h3>
                    <p className="text-foreground mb-3">
                      Sales, discounts, and special offers. These drive immediate revenue but
                      should be balanced with other content to avoid training customers to only
                      buy during sales.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Examples:</strong> Flash sales, seasonal promotions, clearance events, loyalty rewards
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Product Launch Campaigns
                    </h3>
                    <p className="text-foreground mb-3">
                      Announce new products, collections, or restocks. Build anticipation with
                      teasers before the launch, then follow up with availability reminders.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Examples:</strong> New arrivals, seasonal collections, limited editions, restocks
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Content and Educational Campaigns
                    </h3>
                    <p className="text-foreground mb-3">
                      Provide value without asking for the sale. Share tips, how-to guides, or
                      inspiration related to your products. Builds trust and positions you as
                      an authority.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Examples:</strong> Styling guides, usage tips, behind-the-scenes, customer stories
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Brand Story Campaigns
                    </h3>
                    <p className="text-foreground mb-3">
                      Share your mission, values, and the people behind your brand. Especially
                      effective for brands with strong sustainability or ethical positioning.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Examples:</strong> Founder stories, sustainability initiatives, team spotlights
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                      Social Proof Campaigns
                    </h3>
                    <p className="text-foreground mb-3">
                      Feature customer reviews, testimonials, and user-generated content. Let
                      your customers sell for you.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Examples:</strong> Customer spotlights, review roundups, Instagram features
                    </p>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Aim for a 3:1 ratio of value to promotion. For every three emails that
                    educate, inspire, or entertain, you can send one that's purely promotional.
                    This prevents subscriber fatigue and maintains engagement.
                  </p>
                </div>
              </section>

              {/* Subject Lines */}
              <section id="subject-lines" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Subject Lines That Convert
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Your subject line determines whether your email gets opened or ignored. It's
                  worth spending real time on this. A great email with a weak subject line will
                  underperform a good email with a compelling subject.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Subject Line Formulas That Work
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Curiosity gap:</strong> "The one thing we've never told anyone about our process"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Urgency:</strong> "Last chance: Sale ends at midnight"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Personalisation:</strong> "Sarah, we saved this for you"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Question:</strong> "Have you tried this yet?"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Number/List:</strong> "5 ways to style our new collection"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>FOMO:</strong> "Everyone's asking about this product"</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Subject Line Best Practices
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Keep it under 50 characters so it doesn't get cut off on mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use sentence case, not ALL CAPS or Title Case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Front-load the most important words</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>A/B test every campaign to learn what your audience responds to</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Avoid spam triggers like "FREE!!!" or excessive punctuation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't be misleading. The email must deliver on the subject line promise</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Preview Text
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Preview text (or preheader) appears after the subject line in most email
                  clients. Use it as a second chance to convince people to open.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Extend the subject line's message rather than repeating it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Include a call to action or key benefit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Keep it under 100 characters</span>
                  </li>
                </ul>
              </section>

              {/* Email Design */}
              <section id="email-design" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Email Design
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Good email design is about clarity and action, not visual complexity. The best
                  emails are easy to scan and make the next step obvious.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Layout Principles
                </h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Single column:</strong> Works best on mobile and keeps focus on your message</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Inverted pyramid:</strong> Start wide with the key message, narrow to the CTA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Plenty of white space:</strong> Don't cram content. Let it breathe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>One primary CTA:</strong> Make it crystal clear what action you want</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Mobile Optimisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Over 60% of emails are opened on mobile devices. Design for mobile first.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Minimum 16px font size for body text</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Buttons at least 44px tall for easy tapping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Images that scale to fit small screens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Short paragraphs (2-3 sentences max)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Image Best Practices
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Use high-quality product photography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Always include alt text for accessibility and when images don't load</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Compress images to reduce load time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Don't rely on images alone to convey important information</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Test your emails with images turned off. Can you still understand the
                    message and find the CTA? Many email clients block images by default, so
                    your email should work without them.
                  </p>
                </div>
              </section>

              {/* Copywriting */}
              <section id="copywriting" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Copywriting for Conversions
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Email copy should be conversational, benefit-focused, and action-oriented.
                  Write as if you're talking to one person, not broadcasting to thousands.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Copy Structure
                </h3>
                <ol className="space-y-4 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong>Hook</strong>
                      <p className="text-foreground mt-1">
                        Open with something that grabs attention and relates to the reader's
                        interests or problems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong>Value</strong>
                      <p className="text-foreground mt-1">
                        Explain the benefit. What's in it for them? Focus on outcomes, not features.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong>Proof</strong>
                      <p className="text-foreground mt-1">
                        Back up your claims with social proof, testimonials, or specific details.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <strong>Call to action</strong>
                      <p className="text-foreground mt-1">
                        Tell them exactly what to do next. Be specific and create urgency where appropriate.
                      </p>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Writing Tips
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use "you" more than "we". It's about them, not you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Write at a 7th-grade reading level. Simple language converts better</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Use active voice. "Get your discount" not "A discount can be obtained"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Break up text with bullet points and subheadings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Avoid jargon unless your audience uses it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Don't be clever at the expense of clarity</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  CTA Button Copy
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your button text should tell people exactly what happens when they click.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-green-600 mb-2">Better</p>
                      <ul className="text-foreground text-sm space-y-1">
                        <li>• Shop the Sale</li>
                        <li>• Get My 20% Off</li>
                        <li>• See the Collection</li>
                        <li>• Claim Your Reward</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-600 mb-2">Weaker</p>
                      <ul className="text-foreground text-sm space-y-1">
                        <li>• Click Here</li>
                        <li>• Learn More</li>
                        <li>• Submit</li>
                        <li>• Continue</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Segmentation Strategy */}
              <section id="segmentation-strategy" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Segmentation Strategy
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Sending the same email to your entire list is leaving money on the table.
                  Segmented campaigns consistently outperform broad sends by 2-3x because
                  relevant content resonates more.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Segments for Every Campaign Type
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Sale Campaigns</h4>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• VIPs get early access (24-48 hours before general list)</li>
                      <li>• Price-sensitive segment gets stronger discount messaging</li>
                      <li>• Recent purchasers might be excluded or receive different offer</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Product Launch</h4>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Past purchasers of related products get first access</li>
                      <li>• Segment by product interest based on browsing history</li>
                      <li>• Highly engaged subscribers see teasers before launch</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Content Emails</h4>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Match content to customer interests</li>
                      <li>• New subscribers get educational content</li>
                      <li>• Existing customers get advanced tips</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Engagement-Based Sending
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Your most engaged subscribers should hear from you most often. Less engaged
                  segments need fewer touchpoints to avoid unsubscribes.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Highly engaged (opened in last 30 days):</strong> Every campaign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Moderately engaged (opened in last 60 days):</strong> Key campaigns only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Low engagement (90+ days):</strong> Major sales and re-engagement attempts only</span>
                  </li>
                </ul>
              </section>

              {/* Timing and Frequency */}
              <section id="timing-and-frequency" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Timing and Frequency
                </h2>
                <p className="text-lg text-foreground mb-4">
                  When you send matters almost as much as what you send. The wrong timing means
                  your email gets buried. The right timing puts it at the top of the inbox when
                  people are ready to engage.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Best Times to Send
                </h3>
                <p className="text-lg text-foreground mb-4">
                  These are general guidelines. Your specific audience may differ.
                </p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Tuesday-Thursday:</strong> Typically highest open rates for B2C</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>10am-12pm:</strong> Morning commute and coffee break checking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>7pm-9pm:</strong> Evening browsing time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Sunday evening:</strong> Good for the coming week</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Send Time Optimisation
                </h3>
                <p className="text-lg text-foreground mb-4">
                  Most email platforms offer send time optimisation features that deliver emails
                  when each subscriber is most likely to open. This can improve open rates by
                  10-15%.
                </p>

                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">
                  Frequency Guidelines
                </h3>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>1-2 campaigns per week is sustainable for most stores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Increase during key periods (Black Friday, Christmas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Watch unsubscribe rates. Over 0.5% means you're sending too often</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Consider total emails (campaigns + flows) not just campaigns</span>
                  </li>
                </ul>

                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">
                    Create a send calendar that accounts for automated flows. If someone just
                    received a cart abandonment email, they probably don't need your newsletter
                    that day. Most platforms let you exclude people who've received other emails
                    recently.
                  </p>
                </div>
              </section>

              {/* Measuring Success */}
              <section id="measuring-success" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">
                  Measuring Success
                </h2>
                <p className="text-lg text-foreground mb-6">
                  Track the right metrics to understand what's working and what needs improvement.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Open Rate</h4>
                    <p className="text-foreground text-sm mb-2">
                      Percentage of recipients who opened the email. Indicates subject line
                      effectiveness and list health.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Benchmark:</strong> 15-25% for ecommerce (varies by industry)
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Click Rate</h4>
                    <p className="text-foreground text-sm mb-2">
                      Percentage who clicked a link. Shows content and CTA effectiveness.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Benchmark:</strong> 2-5% click rate
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Revenue Per Recipient</h4>
                    <p className="text-foreground text-sm mb-2">
                      Total revenue divided by emails sent. The metric that matters most.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Note:</strong> Compare campaigns of similar types, not all campaigns
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Unsubscribe Rate</h4>
                    <p className="text-foreground text-sm mb-2">
                      Percentage who opted out. High rates indicate content or frequency problems.
                    </p>
                    <p className="text-foreground text-sm">
                      <strong>Benchmark:</strong> Under 0.5% per campaign
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/guides/how-to-set-up-klaviyo-on-shopify"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Klaviyo Setup Guide</h4>
                      <p className="text-sm text-foreground">Complete Klaviyo integration</p>
                    </Link>
                    <Link
                      href="/guides/how-to-set-up-shopify-abandoned-cart-emails"
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"
                    >
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Abandoned Cart Emails</h4>
                      <p className="text-sm text-foreground">Recover lost sales</p>
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
            Our team can create high-converting email campaigns, design templates that match
            your brand, and build strategies that drive consistent revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Expert Help
            </Button>
            <Button href="/shopify-integrations" variant="outline-light" size="lg" icon={false}>
              Our Marketing Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
