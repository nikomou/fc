import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up a Referral Programme on Shopify",
  description: "Learn how to set up a referral programme on Shopify. Covers app selection, incentives, sharing mechanics, fraud prevention, email integration, and tracking ROI.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-referral-programme" },
  openGraph: {
    title: "How to Set Up a Referral Programme on Shopify",
    description: "Learn how to set up a referral programme on Shopify. Covers app selection, incentives, sharing mechanics, fraud prevention, email integration, and tracking ROI.",
    url: "/guides/how-to-set-up-shopify-referral-programme",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "referral-programme-basics", title: "Referral Programme Basics", level: 2 },
  { id: "choosing-an-app", title: "Choosing an App", level: 2 },
  { id: "referral-incentives", title: "Referral Incentives", level: 2 },
  { id: "sharing-mechanics", title: "Sharing Mechanics", level: 2 },
  { id: "fraud-prevention", title: "Fraud Prevention", level: 2 },
  { id: "email-integration", title: "Email Integration", level: 2 },
  { id: "tracking-roi", title: "Tracking ROI", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up a Referral Programme on Shopify",
  description: "Learn how to set up a referral programme on Shopify. Covers app selection, incentives, sharing mechanics, fraud prevention, email integration, and tracking ROI.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-referral-programme` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up a Referral Programme on Shopify", item: `${siteConfig.url}/guides/how-to-set-up-shopify-referral-programme` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up a Referral Programme on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Referred customers convert at 30% higher rates, have 18% higher lifetime value, and are more likely to refer others in turn. A referral programme turns your best customers into your most effective acquisition channel.</p>
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
              <section id="referral-programme-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Referral Programme Basics</h2>
                <p className="text-lg text-foreground mb-4">A referral programme rewards existing customers for bringing new customers. The referring customer gets a reward when someone they refer makes a purchase. The new customer typically gets an incentive on their first order too.</p>
                <p className="text-lg text-foreground mb-4">This double-sided incentive structure (both parties benefit) outperforms one-sided referral schemes significantly. It gives the referrer a reason to share and the referred friend a reason to act on the recommendation.</p>
              </section>
              <section id="choosing-an-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing an App</h2>
                <p className="text-lg text-foreground mb-4">The leading referral apps for Shopify are ReferralCandy, Friendbuy, and Smile.io (which includes referrals within its broader loyalty platform). ReferralCandy is the most feature-rich pure referral app and is widely used by UK brands. It starts at around £35/month plus a performance fee.</p>
                <p className="text-lg text-foreground mb-4">Smile.io&apos;s referral feature is more basic but included in their loyalty plan, making it cost-effective if you are already using Smile for points.</p>
              </section>
              <section id="referral-incentives" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Referral Incentives</h2>
                <p className="text-lg text-foreground mb-4">The most effective referral incentive is store credit or a discount code for both the referrer and the new customer. Common structures: &quot;Give £10, Get £10&quot; (referrer gets £10 credit when friend places first order, friend gets £10 off their first order).</p>
                <p className="text-lg text-foreground mb-4">The incentive must be large enough to motivate action without eliminating your margins. For an average order value of £50, a £10 referral incentive (20% of AOV) is workable. For a £200 AOV, you can offer £20-£30.</p>
              </section>
              <section id="sharing-mechanics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Sharing Mechanics</h2>
                <p className="text-lg text-foreground mb-4">Make sharing as easy as possible. Provide: a unique referral link, a pre-written email template, and social sharing buttons for WhatsApp, Facebook, and email. WhatsApp is particularly effective for UK referrals as it enables direct personal sharing.</p>
                <p className="text-lg text-foreground mb-4">Display the referral widget prominently in the post-purchase thank you page, in your post-purchase email, and in the customer account portal.</p>
              </section>
              <section id="fraud-prevention" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Fraud Prevention</h2>
                <p className="text-lg text-foreground mb-4">Referral fraud (self-referrals, creating fake accounts to earn rewards) is a real problem. Prevent it by: requiring email verification for new accounts, using cookies to detect self-referrals, setting a minimum time between signup and reward trigger, and manually reviewing unusually large referral volumes from single customers.</p>
              </section>
              <section id="email-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Email Integration</h2>
                <p className="text-lg text-foreground mb-4">Integrate your referral app with your email platform (Klaviyo, Mailchimp) to trigger referral invite emails after purchase, send reminders when a referral is close to converting, and notify referrers when they earn a reward. Automated referral emails typically drive 3-4x the referral volume of passive programme exposure.</p>
              </section>
              <section id="tracking-roi" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking ROI</h2>
                <p className="text-lg text-foreground mb-4">Track: referral link clicks, new customer acquisition via referral, cost per referred acquisition (total incentives paid divided by referred new customers), and lifetime value of referred customers versus other acquisition channels. A well-run referral programme delivers new customer acquisition costs significantly below paid channels.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-shopify-loyalty-programme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Loyalty Programme</h4><p className="text-sm text-foreground">Build points alongside referrals</p></Link>
                    <Link href="/guides/how-to-run-shopify-affiliate-programme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Affiliate Programme</h4><p className="text-sm text-foreground">Structured affiliate marketing</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch a Referral Programme?</h2>
          <p className="text-xl text-gray-300 mb-8">We set up referral programmes, configure double-sided incentives, and integrate with your email platform for maximum participation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
