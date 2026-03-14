import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Checklist, ChecklistProgress } from "@/components/ui/Checklist";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify SEO Checklist: Rank Higher in Google",
  description:
    "Complete Shopify SEO checklist for higher rankings. Covers technical SEO, on-page optimization, schema markup, and link building. Boost organic traffic today.",
  alternates: {
    canonical: "/checklists/shopify-seo-checklist",
  },
  openGraph: {
    title: "The Complete Shopify SEO Checklist",
    description:
      "Boost your Shopify store's organic traffic with our comprehensive SEO checklist.",
    url: "/checklists/shopify-seo-checklist",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const checklistSections = [
  {
    title: "Technical SEO Foundations",
    icon: "Settings",
    color: "#ef436b",
    items: [
      "Custom domain connected with SSL certificate",
      "XML sitemap submitted to Google Search Console",
      "Robots.txt file reviewed and optimised",
      "Site loading speed under 3 seconds",
      "Mobile-friendly design verified in Google's test",
      "No duplicate content issues (canonical tags set)",
      "HTTPS enabled across all pages",
      "Clean URL structure (no unnecessary parameters)",
      "404 page customised with helpful navigation",
      "Structured data (Schema markup) implemented",
    ],
  },
  {
    title: "Google Search Console Setup",
    icon: "Search",
    color: "#0ea5e9",
    items: [
      "Google Search Console account verified",
      "All site versions added (www, non-www, http, https)",
      "Preferred domain version set",
      "Sitemap submitted and indexed",
      "Coverage report reviewed for errors",
      "Mobile usability issues resolved",
      "Core Web Vitals reviewed",
      "Manual actions checked (none pending)",
    ],
  },
  {
    title: "On-Page SEO",
    icon: "FileText",
    color: "#8b5cf6",
    items: [
      "Unique title tags for all pages (50-60 characters)",
      "Compelling meta descriptions (150-160 characters)",
      "One H1 tag per page with primary keyword",
      "Logical heading hierarchy (H1 > H2 > H3)",
      "Keywords naturally integrated into content",
      "Internal linking strategy implemented",
      "Image alt text added to all images",
      "Image file names descriptive and keyword-rich",
      "URLs are short, descriptive, and include keywords",
      "Content is comprehensive and answers user intent",
    ],
  },
  {
    title: "Product Page SEO",
    icon: "ShoppingCart",
    color: "#10b981",
    items: [
      "Unique product descriptions (not manufacturer copy)",
      "Product titles include primary keywords",
      "Product meta descriptions written for each item",
      "High-quality images with descriptive alt text",
      "Product schema markup implemented",
      "Customer reviews enabled and displayed",
      "Related products linked for internal linking",
      "Clear pricing and availability information",
      "Size guides and FAQs added where relevant",
    ],
  },
  {
    title: "Collection Page SEO",
    icon: "List",
    color: "#f59e0b",
    items: [
      "Collection descriptions added (200+ words)",
      "Collection titles optimised for keywords",
      "Collection meta descriptions written",
      "Logical collection hierarchy and navigation",
      "Breadcrumb navigation enabled",
      "Pagination handled correctly (rel=prev/next)",
      "Filter parameters not creating duplicate content",
      "Collection images have alt text",
    ],
  },
  {
    title: "Content & Blogging",
    icon: "FileText",
    color: "#ec4899",
    items: [
      "Blog section enabled and active",
      "Content calendar planned with target keywords",
      "Blog posts are 1,500+ words for key topics",
      "Posts include internal links to products/collections",
      "Images and media break up long content",
      "Posts have clear meta titles and descriptions",
      "Author information displayed",
      "Social sharing buttons enabled",
      "Comments enabled (if appropriate)",
    ],
  },
  {
    title: "Local SEO (if applicable)",
    icon: "Globe",
    color: "#64748b",
    items: [
      "Google Business Profile created and verified",
      "NAP (Name, Address, Phone) consistent everywhere",
      "Local keywords included in content",
      "Location pages created for each area served",
      "Local schema markup implemented",
      "Listed in relevant local directories",
      "Customer reviews encouraged on Google",
    ],
  },
  {
    title: "Link Building & Off-Page",
    icon: "Zap",
    color: "#ef436b",
    items: [
      "Social media profiles link back to store",
      "Guest posting opportunities identified",
      "Broken link building strategy in place",
      "Supplier/partner links requested",
      "Press coverage and PR pursued",
      "Influencer collaborations explored",
      "Competitor backlinks analysed",
      "Toxic backlinks disavowed if necessary",
    ],
  },
];

const STORAGE_KEY = "shopify-seo-checklist";
const totalItems = checklistSections.reduce((acc, section) => acc + section.items.length, 0);

const faqs = [
  {
    question: "How long does it take to see SEO results on Shopify?",
    answer: "SEO is a long-term strategy. For technical fixes (page speed, mobile optimisation, structured data), you may see improvements in 2-4 weeks. For content and link building efforts, expect 3-6 months before significant ranking improvements. Competitive keywords in established niches can take 6-12 months. The key is consistent, quality work rather than quick fixes."
  },
  {
    question: "Is Shopify SEO-friendly compared to other platforms?",
    answer: "Yes, Shopify is inherently SEO-friendly. It provides clean URL structures, automatic sitemaps, built-in SSL certificates, mobile-responsive themes, and good page speed infrastructure. However, it has limitations: you cannot edit robots.txt fully, URL structure options are limited, and blog functionality is basic. Despite these constraints, thousands of Shopify stores rank competitively in Google."
  },
  {
    question: "What's the most important SEO factor for Shopify stores?",
    answer: "There is no single factor, but if we had to prioritise, it would be creating unique, comprehensive product descriptions that answer customer questions and target relevant keywords. Too many stores use manufacturer descriptions (duplicate content) or write thin descriptions. Quality product content combined with technical fundamentals (speed, mobile, structure) and genuine customer reviews creates a strong SEO foundation."
  },
  {
    question: "Should I hire an SEO expert or do it myself?",
    answer: "It depends on your budget, time, and expertise. This checklist enables you to handle foundational SEO yourself, covering technical setup, on-page optimisation, and basic content. However, advanced areas like technical audits, competitive link building, content strategy, and ongoing optimisation benefit significantly from expert help. Consider starting yourself and hiring specialists for specific areas where you are stuck or want to accelerate results."
  },
  {
    question: "How often should I review my Shopify SEO?",
    answer: "Review technical SEO quarterly (checking Search Console for errors, monitoring Core Web Vitals, auditing site speed). Review on-page SEO monthly for new products and collections. Content and link building should be ongoing activities. After major site changes (theme updates, large product imports, structural changes), conduct a full SEO audit immediately."
  },
  {
    question: "Can apps hurt my Shopify SEO?",
    answer: "Yes, absolutely. Many apps inject JavaScript, add excessive HTTP requests, increase page weight, cause layout shift, or slow load times, all of which hurt SEO. Regularly audit your apps using our App Audit Checklist. Remove apps you do not actively use, consolidate where possible, and test page speed before and after installing new apps. Choose apps known for performance and clean code."
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Shopify SEO Checklist",
  description: "Boost your Shopify store's organic traffic with our comprehensive SEO checklist.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-01-10",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/checklists/shopify-seo-checklist` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Checklists", item: `${siteConfig.url}/checklists` },
    { "@type": "ListItem", position: 3, name: "Shopify SEO Checklist", item: `${siteConfig.url}/checklists/shopify-seo-checklist` },
  ],
};
export default function ShopifySEOChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/checklists" className="inline-flex items-center gap-2 text-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Checklists
          </Link>

          <div className="flex items-center gap-2 text-sm text-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>15 min read</span>
            <span className="text-gray-300">•</span>
            <span>Checklist</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
            The Complete Shopify SEO Checklist
          </h1>

          <p className="text-xl text-foreground mb-8">
            Want more organic traffic? Work through this {totalItems}-point SEO checklist to ensure your Shopify store is fully optimised for search engines.
          </p>

          <div className="flex items-center gap-4 text-sm text-foreground">
            <ChecklistProgress storageKey={STORAGE_KEY} totalItems={totalItems} />
            <span className="px-3 py-1 bg-gray-100 text-foreground-dark rounded-full font-medium">
              {checklistSections.length} sections
            </span>
          </div>
        </div>
      </section>

      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">Why SEO Matters for Shopify Stores</h2>
          <p className="text-lg text-foreground">
            Unlike paid advertising where traffic stops when your budget runs out, organic search traffic compounds over time. Quality SEO work you complete today continues delivering visitors and sales for months and years into the future.
          </p>
        </div>
      </Section>

      <Checklist storageKey={STORAGE_KEY} sections={checklistSections} />

      {/* The Value of SEO */}
      <Section background="white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            The Long-Term Value of Shopify SEO
          </h2>
          <p className="text-lg text-foreground mb-6">
            Shopify SEO differs from general website SEO in important ways. You are optimising product pages, collection pages, and an ecommerce structure rather than just informational content. You compete against major retailers, marketplaces, and comparison sites. This checklist addresses these ecommerce-specific realities whilst covering universal SEO fundamentals.
          </p>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Revenue Impact Example</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-foreground mb-4">Consider a single product page ranking position 3 for a keyword with 1,000 monthly searches:</p>
            <ul className="space-y-2 text-foreground mb-4">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                15% click-through rate = 150 monthly visitors
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                2% conversion rate = 3 orders per month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                £75 average order value = £225 monthly revenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                = <strong>£2,700 annual revenue from one page ranking for one keyword</strong>
              </li>
            </ul>
            <p className="text-foreground">
              Scale this across dozens of products and multiple keywords per product, and the revenue impact becomes substantial, all without ongoing ad spend.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">Strategic Advantages of Strong SEO</h3>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">+</span>
              <span><strong>Brand authority and trust</strong> from ranking for product keywords</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">+</span>
              <span><strong>Reduced dependency on paid channels</strong>, improving unit economics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">+</span>
              <span><strong>Defensible competitive moats</strong> that competitors cannot simply outbid</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-lg">+</span>
              <span><strong>Higher customer lifetime value</strong> as past customers find you easily</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground-dark mb-4">SEO Compounds With Other Efforts</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Product Descriptions</h4>
              <p className="text-foreground">SEO-optimised descriptions also improve conversion rates by answering customer questions.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Site Speed</h4>
              <p className="text-foreground">Speed improvements help both rankings and checkout completion rates.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Schema Markup</h4>
              <p className="text-foreground">Structured data improves rankings and enables rich results that increase click-through rates.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-foreground-dark mb-2">Customer Reviews</h4>
              <p className="text-foreground">Reviews strengthen local SEO while building on-site trust and social proof.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground-dark mb-6">
            Related Checklists
          </h2>
          <p className="text-lg text-foreground mb-6">
            SEO works alongside other marketing efforts for maximum impact:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/checklists/shopify-speed-optimisation-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Speed Optimisation →</h3>
              <p className="text-sm text-foreground">Core Web Vitals directly impact your SEO rankings</p>
            </Link>
            <Link href="/checklists/shopify-google-shopping-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Google Shopping →</h3>
              <p className="text-sm text-foreground">Complement organic with paid product visibility</p>
            </Link>
            <Link href="/checklists/shopify-launch-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Launch Checklist →</h3>
              <p className="text-sm text-foreground">Get SEO right from day one of your store</p>
            </Link>
            <Link href="/checklists/shopify-facebook-ads-checklist" className="bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group">
              <h3 className="font-semibold text-foreground-dark group-hover:text-accent mb-2">Facebook Ads →</h3>
              <p className="text-sm text-foreground">Drive traffic while organic rankings build</p>
            </Link>
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-669615.webp"
        imageAlt="Shopify SEO checklist for organic search growth"
        overlayColor="linear-gradient(135deg, #6366f1 0%, #4338ca 100%)"
      />

      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help With Shopify SEO?</h2>
          <p className="text-xl text-gray-300 mb-8">
            SEO takes time and expertise. Our team can audit your store and implement a strategy that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get SEO Help</Button>
            <Button href="/shopify-seo" variant="outline-light" size="lg" icon={false}>Our SEO Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
