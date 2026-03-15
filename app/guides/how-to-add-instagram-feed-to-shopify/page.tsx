import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Add an Instagram Feed to Shopify",
  description: "Learn how to add an Instagram feed to your Shopify store. Covers benefits, app options, performance impact, curating content, shoppable posts, and GDPR considerations.",
  alternates: { canonical: "/guides/how-to-add-instagram-feed-to-shopify" },
  openGraph: {
    title: "How to Add an Instagram Feed to Shopify",
    description: "Learn how to add an Instagram feed to your Shopify store. Covers benefits, app options, performance impact, curating content, shoppable posts, and GDPR considerations.",
    url: "/guides/how-to-add-instagram-feed-to-shopify",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "benefits-and-risks", title: "Benefits and Risks", level: 2 },
  { id: "app-options", title: "App Options", level: 2 },
  { id: "performance-impact", title: "Performance Impact", level: 2 },
  { id: "curating-your-feed", title: "Curating Your Feed", level: 2 },
  { id: "shoppable-posts", title: "Shoppable Posts", level: 2 },
  { id: "gdpr-considerations", title: "GDPR Considerations", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Add an Instagram Feed to Shopify",
  description: "Learn how to add an Instagram feed to your Shopify store. Covers benefits, app options, performance impact, curating content, shoppable posts, and GDPR considerations.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-add-instagram-feed-to-shopify` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Add an Instagram Feed to Shopify", item: `${siteConfig.url}/guides/how-to-add-instagram-feed-to-shopify` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Theme &amp; Design</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Add an Instagram Feed to Shopify</h1>
            <p className="text-xl text-foreground mb-8">An Instagram feed on your Shopify store adds social proof, keeps content fresh, and can drive additional product discovery. However, done poorly it adds load time without adding value. This guide covers how to do it right.</p>
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
              <section id="benefits-and-risks" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Benefits and Risks</h2>
                <p className="text-lg text-foreground mb-4">An Instagram feed embedded on your homepage or product pages shows real people using your products in real-world settings. This social proof is particularly powerful for fashion, homeware, and lifestyle brands where seeing products in context aids purchasing decisions.</p>
                <p className="text-lg text-foreground mb-4">The risk is performance: Instagram embeds load additional JavaScript and make API calls that slow down your page. An Instagram feed that adds 500KB and increases load time by 1 second may reduce conversion more than it increases it. Measure the impact carefully.</p>

              </section>
              <section id="app-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Options</h2>
                <p className="text-lg text-foreground mb-4">The leading Instagram feed apps for Shopify are Instafeed, Covet.pics, and Foursixty. Instafeed is lightweight and widely used. Covet.pics is more feature-rich with shoppable posts and UGC curation tools. Foursixty is the premium option used by larger brands.</p>
                <p className="text-lg text-foreground mb-4">When selecting an app, check its impact on page load. Look at app reviews that mention performance and run PageSpeed tests before and after installation.</p>

              </section>
              <section id="performance-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Performance Impact</h2>
                <p className="text-lg text-foreground mb-4">Instagram feed apps load their content either synchronously (blocking render) or asynchronously (non-blocking). Prefer apps that load asynchronously after the main page content has rendered.</p>
                <p className="text-lg text-foreground mb-4">Consider using a static image grid that links to your Instagram profile instead of a dynamic feed if performance is a concern. Update the static images manually once a week. This maintains the social proof benefit with no performance cost.</p>

              </section>
              <section id="curating-your-feed" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Curating Your Feed</h2>
                <p className="text-lg text-foreground mb-4">Most apps let you select specific posts rather than displaying your entire feed. Curate your best content: professional product shots, lifestyle images, and posts with strong engagement. Avoid including text-heavy posts or low-quality user-generated content.</p>
                <p className="text-lg text-foreground mb-4">Update your curated selection regularly to keep the section feeling current.</p>

              </section>
              <section id="shoppable-posts" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shoppable Posts</h2>
                <p className="text-lg text-foreground mb-4">Shoppable Instagram posts let customers click on a product in an Instagram image and go directly to the product page. This requires linking your Instagram shop to your product catalogue via Meta Commerce Manager. Apps like Foursixty and Shoppable.it handle the integration on the Shopify side.</p>

              </section>
              <section id="gdpr-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">GDPR Considerations</h2>
                <p className="text-lg text-foreground mb-4">Loading Instagram content via an embed calls Meta&apos;s servers, which may set tracking cookies. Under GDPR, this requires consent if it involves personal data processing beyond what is strictly necessary. Consider loading the Instagram feed only after cookie consent is given, using conditional loading based on your consent management platform.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-add-reviews-to-shopify" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Add Reviews</h4><p className="text-sm text-foreground">Another form of social proof</p></Link>
                    <Link href="/guides/how-to-make-shopify-gdpr-compliant" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">GDPR Compliance</h4><p className="text-sm text-foreground">Handle consent correctly</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Adding Social Proof to Your Store?</h2>
          <p className="text-xl text-gray-300 mb-8">We integrate Instagram feeds, review widgets, and UGC galleries in ways that add social proof without impacting page speed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
