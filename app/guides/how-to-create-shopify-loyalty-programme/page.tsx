import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create a Loyalty Programme on Shopify",
  description: "Learn how to create a loyalty programme on Shopify. Covers programme types, points vs tiered models, app selection, earn rates, reward options, and measuring LTV impact.",
  alternates: { canonical: "/guides/how-to-create-shopify-loyalty-programme" },
  openGraph: {
    title: "How to Create a Loyalty Programme on Shopify",
    description: "Learn how to create a loyalty programme on Shopify. Covers programme types, points vs tiered models, app selection, earn rates, reward options, and measuring LTV impact.",
    url: "/guides/how-to-create-shopify-loyalty-programme",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "loyalty-programme-types", title: "Loyalty Programme Types", level: 2 },
  { id: "points-vs-tiered", title: "Points vs Tiered Models", level: 2 },
  { id: "choosing-an-app", title: "Choosing an App", level: 2 },
  { id: "setting-earn-rates", title: "Setting Earn Rates", level: 2 },
  { id: "reward-options", title: "Reward Options", level: 2 },
  { id: "communicating-your-programme", title: "Communicating Your Programme", level: 2 },
  { id: "measuring-ltv-impact", title: "Measuring LTV Impact", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a Loyalty Programme on Shopify",
  description: "Learn how to create a loyalty programme on Shopify. Covers programme types, points vs tiered models, app selection, earn rates, reward options, and measuring LTV impact.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-loyalty-programme` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create a Loyalty Programme on Shopify", item: `${siteConfig.url}/guides/how-to-create-shopify-loyalty-programme` },
  ],
};

export default function Page() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Customer Experience</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>16 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Create a Loyalty Programme on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Loyalty programmes increase customer lifetime value by rewarding repeat purchases. For Shopify merchants, the right programme design and technology can meaningfully shift purchase frequency and average order value. This guide covers how to build one that works.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span><span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="loyalty-programme-types" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Loyalty Programme Types</h2>
                <p className="text-lg text-foreground mb-4">The three main loyalty programme models are points-based, tiered status, and paid membership. Points-based programmes are the most familiar: customers earn points for purchases and redeem them for discounts or rewards. Tiered programmes reward higher-spending customers with better benefits. Paid memberships (like Amazon Prime) charge a recurring fee for premium benefits.</p>
                <p className="text-lg text-foreground mb-4">Most Shopify merchants start with a points-based programme because it is simple to understand and configure. Tiered programmes are more effective at driving incremental spend but are more complex to operate.</p>
              </section>
              <section id="points-vs-tiered" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Points vs Tiered Models</h2>
                <p className="text-lg text-foreground mb-4">Points programmes work best for high-frequency purchases where customers can accumulate and redeem regularly. A coffee brand where customers buy monthly benefits from points more than a furniture brand where customers buy once every few years.</p>
                <p className="text-lg text-foreground mb-4">Tiered programmes work best for mid-to-high frequency categories where you want to incentivise customers to increase their spend to reach the next tier. Fashion, beauty, and subscription boxes suit tiered programmes well.</p>
              </section>
              <section id="choosing-an-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing an App</h2>
                <p className="text-lg text-foreground mb-4">The leading loyalty apps for Shopify are Smile.io, LoyaltyLion, and Yotpo Loyalty (part of the Yotpo suite). Smile.io is the most widely used with good affordability at the entry level. LoyaltyLion offers more customisation and integrations. Yotpo Loyalty integrates well with Yotpo Reviews if you already use that platform.</p>
                <p className="text-lg text-foreground mb-4">Choose based on your needs: Smile.io for simplicity and price, LoyaltyLion for customisation, Yotpo for integration with the wider Yotpo platform.</p>
              </section>
              <section id="setting-earn-rates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Earn Rates</h2>
                <p className="text-lg text-foreground mb-4">Points earn rates should feel rewarding without being economically unsustainable. A common structure is 1 point per £1 spent, with 100 points = £1 reward (effectively 1% cashback). This is low enough to protect margins while still feeling meaningful.</p>
                <p className="text-lg text-foreground mb-4">Boost earn rates for specific actions: leaving a review (50 bonus points), referring a friend (200 points), celebrating a birthday (100 points). These drive engagement with your programme beyond just purchases.</p>
              </section>
              <section id="reward-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Reward Options</h2>
                <p className="text-lg text-foreground mb-4">Discount rewards (5% off next order) are the most common and simple to configure. Product rewards (free product at 500 points) increase engagement but reduce the flexibility of redemption. Charitable donations (donate your points to charity) work well for brands with strong values.</p>
                <p className="text-lg text-foreground mb-4">Include a free shipping reward: this is often the highest-value reward for customers who find shipping costs a barrier to purchase.</p>
              </section>
              <section id="communicating-your-programme" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Communicating Your Programme</h2>
                <p className="text-lg text-foreground mb-4">Loyalty programme participation rates suffer when customers do not know they have points or forget to use them. Send a monthly points balance email reminding customers of their balance and what they can redeem it for. Prompt redemption at checkout when a customer has enough points for a reward.</p>
              </section>
              <section id="measuring-ltv-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Measuring LTV Impact</h2>
                <p className="text-lg text-foreground mb-4">Measure the average purchase frequency and lifetime value of loyalty programme members versus non-members. Well-designed programmes typically show members purchasing 2-3x more frequently. Track programme engagement: active members as a percentage of enrolled members, point redemption rates, and churn rate among members versus non-members.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-referral-programme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Referral Programme</h4><p className="text-sm text-foreground">Add referrals alongside loyalty</p></Link>
                    <Link href="/guides/how-to-add-reviews-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Reviews</h4><p className="text-sm text-foreground">Earn points for leaving reviews</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Launch a Loyalty Programme?</h2>
          <p className="text-xl text-gray-300 mb-8">We configure loyalty programmes, design earn-and-burn structures, and integrate with your email platform for a seamless rewards experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
