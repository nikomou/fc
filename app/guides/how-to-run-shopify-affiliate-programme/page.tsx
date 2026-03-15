import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Run an Affiliate Programme on Shopify",
  description: "Learn how to run an affiliate programme on Shopify. Covers choosing an app, setting commissions, recruiting affiliates, managing payouts, and compliance.",
  alternates: { canonical: "/guides/how-to-run-shopify-affiliate-programme" },
  openGraph: {
    title: "How to Run an Affiliate Programme on Shopify",
    description: "Learn how to run an affiliate programme on Shopify. Covers choosing an app, setting commissions, recruiting affiliates, managing payouts, and compliance.",
    url: "/guides/how-to-run-shopify-affiliate-programme",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "affiliate-programme-basics", title: "Affiliate Programme Basics", level: 2 },
  { id: "choosing-an-app", title: "Choosing an App", level: 2 },
  { id: "setting-commission-rates", title: "Setting Commission Rates", level: 2 },
  { id: "recruiting-affiliates", title: "Recruiting Affiliates", level: 2 },
  { id: "managing-payouts", title: "Managing Payouts", level: 2 },
  { id: "tracking-performance", title: "Tracking Performance", level: 2 },
  { id: "compliance", title: "Compliance", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Run an Affiliate Programme on Shopify",
  description: "Learn how to run an affiliate programme on Shopify. Covers choosing an app, setting commissions, recruiting affiliates, managing payouts, and compliance.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-run-shopify-affiliate-programme` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Run an Affiliate Programme on Shopify", item: `${siteConfig.url}/guides/how-to-run-shopify-affiliate-programme` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Marketing &amp; Analytics</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Run an Affiliate Programme on Shopify</h1>
            <p className="text-xl text-foreground mb-8">Affiliate programmes let you pay only for results: commissions are triggered by actual sales, not clicks or impressions. For Shopify merchants, a well-run affiliate programme can drive 10-20% of total revenue from a zero-cost acquisition channel.</p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Flex Commerce Team</span></div>
              <span className="text-gray-300">•</span>
              <span>Updated January 2025</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-16">
            <article className="flex-1 max-w-3xl">
              <section id="affiliate-programme-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Affiliate Programme Basics</h2>
                <p className="text-lg text-foreground mb-4">An affiliate programme is a performance marketing arrangement where third parties (affiliates) promote your products in exchange for a commission on sales they generate. Each affiliate gets a unique tracking link. When a customer clicks that link and makes a purchase, the affiliate earns their commission.</p>
                <p className="text-lg text-foreground mb-4">Affiliates can be bloggers, content creators, comparison sites, deal aggregators, or loyal customers. The right mix depends on your product category and target audience.</p>

              </section>
              <section id="choosing-an-app" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Choosing an App</h2>
                <p className="text-lg text-foreground mb-4">Shopify does not offer a native affiliate programme feature. The leading apps are Refersion, UpPromote, and Tapfiliate. Refersion is the most powerful with the strongest network of affiliates, but starts at $119/month. UpPromote is more affordable at £30-£50/month and suitable for most brands starting out.</p>

              </section>
              <section id="setting-commission-rates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Setting Commission Rates</h2>
                <p className="text-lg text-foreground mb-4">Commission rates in the UK ecommerce market typically range from 5-20% depending on the category. Fashion and beauty tend to pay 10-15%. Electronics and high-ticket items pay lower percentage rates (3-8%) but higher absolute values.</p>
                <p className="text-lg text-foreground mb-4">Consider whether to offer flat-rate commissions (same percentage for all affiliates) or tiered commissions (higher percentage for top performers). Tiered commissions incentivise volume and reward your best affiliates.</p>

              </section>
              <section id="recruiting-affiliates" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Recruiting Affiliates</h2>
                <p className="text-lg text-foreground mb-4">Start with your existing customers: email your customer list and invite loyal buyers to become affiliates. These affiliates already love your products and can advocate authentically. Offer them a straightforward sign-up link and a welcome package explaining how to share their link.</p>
                <p className="text-lg text-foreground mb-4">Reach out to relevant bloggers, Instagram accounts, and YouTube channels in your niche. Research who already covers products like yours and offer them an affiliate arrangement. A personalised pitch with a free product sample converts much better than a mass email.</p>

              </section>
              <section id="managing-payouts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Payouts</h2>
                <p className="text-lg text-foreground mb-4">Most affiliate apps handle payout management automatically via PayPal, bank transfer, or store credit. Set a minimum payout threshold (£25-£50) to avoid processing costs on tiny commissions. Pay monthly to establish a predictable schedule.</p>
                <p className="text-lg text-foreground mb-4">Keep records of all affiliate payouts for tax purposes. Affiliates earning above £1,000/year from you in the UK may need to declare this income, which is their responsibility, but clear records protect you as the merchant.</p>

              </section>
              <section id="tracking-performance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Tracking Performance</h2>
                <p className="text-lg text-foreground mb-4">Monitor these key metrics: number of active affiliates, total clicks, conversion rate from affiliate links, revenue generated, and effective cost per acquisition. Compare your affiliate CPA against other acquisition channels to assess value.</p>
                <p className="text-lg text-foreground mb-4">Identify your top 20% of affiliates who generate 80% of revenue. Invest time in these relationships: offer them exclusive discount codes, early access to new products, and higher commissions.</p>

              </section>
              <section id="compliance" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Compliance</h2>
                <p className="text-lg text-foreground mb-4">UK ASA (Advertising Standards Authority) rules require affiliates to disclose when content is paid promotion. Ensure your affiliate agreement requires affiliates to label sponsored content clearly. Failure to disclose is an ASA violation that can generate bad press for your brand.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-set-up-shopify-referral-programme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Referral Programme</h4><p className="text-sm text-foreground">Customer-to-customer referrals</p></Link>
                    <Link href="/guides/how-to-create-shopify-loyalty-programme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Loyalty Programme</h4><p className="text-sm text-foreground">Reward repeat customers</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Want to Launch an Affiliate Programme?</h2>
          <p className="text-xl text-gray-300 mb-8">We set up affiliate tracking, create commission structures, and help you recruit and manage affiliates that drive consistent revenue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
