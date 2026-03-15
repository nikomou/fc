import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create a Mega Menu on Shopify",
  description: "Learn how to create a mega menu on Shopify. Covers native theme options, app approaches, menu structure, mobile navigation, performance, and SEO impact.",
  alternates: { canonical: "/guides/how-to-create-shopify-mega-menu" },
  openGraph: {
    title: "How to Create a Mega Menu on Shopify",
    description: "Learn how to create a mega menu on Shopify. Covers native theme options, app approaches, menu structure, mobile navigation, performance, and SEO impact.",
    url: "/guides/how-to-create-shopify-mega-menu",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-a-mega-menu", title: "What Is a Mega Menu", level: 2 },
  { id: "native-theme-options", title: "Native Theme Options", level: 2 },
  { id: "app-approach", title: "App Approach", level: 2 },
  { id: "menu-structure", title: "Menu Structure", level: 2 },
  { id: "mobile-navigation", title: "Mobile Navigation", level: 2 },
  { id: "performance-considerations", title: "Performance Considerations", level: 2 },
  { id: "seo-impact", title: "SEO Impact", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a Mega Menu on Shopify",
  description: "Learn how to create a mega menu on Shopify. Covers native theme options, app approaches, menu structure, mobile navigation, performance, and SEO impact.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-create-shopify-mega-menu` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Create a Mega Menu on Shopify", item: `${siteConfig.url}/guides/how-to-create-shopify-mega-menu` },
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
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Create a Mega Menu on Shopify</h1>
            <p className="text-xl text-foreground mb-8">A mega menu gives customers a clear view of your entire product range without clicking through multiple pages. For stores with large catalogues, it is one of the most effective navigation improvements you can make. This guide covers implementation options from no-code to custom development.</p>
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
              <section id="what-is-a-mega-menu" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is a Mega Menu</h2>
                <p className="text-lg text-foreground mb-4">A mega menu is an expanded dropdown navigation panel that displays multiple columns of links, often with images, promotional banners, or featured product highlights. It replaces the standard single-column dropdown menu with a richer, more organised interface.</p>
                <p className="text-lg text-foreground mb-4">For large Shopify stores with many product categories, a mega menu helps customers find what they are looking for without needing to know your exact navigation structure. It reduces bounce rate on the homepage and improves time-to-product for new visitors.</p>

              </section>
              <section id="native-theme-options" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Native Theme Options</h2>
                <p className="text-lg text-foreground mb-4">Shopify&apos;s Dawn theme (and most premium themes based on it) supports multi-column mega menus natively via the theme editor. Go to the theme editor, select Header, and enable the mega menu option in your main menu settings. You can then add nested menu items that display as columns.</p>
                <p className="text-lg text-foreground mb-4">Premium themes from theme developers like Prestige, Impulse, and Symmetry offer more advanced mega menu options including image banners within the menu, featured collection cards, and promotional callouts.</p>

              </section>
              <section id="app-approach" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">App Approach</h2>
                <p className="text-lg text-foreground mb-4">If your theme does not support mega menus natively, apps like Metafields Guru, Buddha Mega Menu, and Globo Mega Menu add this functionality without code changes. These apps inject their navigation via JavaScript, which carries a small performance cost.</p>
                <p className="text-lg text-foreground mb-4">For highly customised mega menus with complex layouts, bespoke theme development is the cleanest solution. A developer can build a mega menu section using Shopify&apos;s native section architecture, which is more maintainable than an app long-term.</p>

              </section>
              <section id="menu-structure" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Menu Structure</h2>
                <p className="text-lg text-foreground mb-4">Organise your mega menu around how customers think about your products, not how your internal teams categorise them. Start with user research: look at your site search queries to understand what terms customers use, and structure your navigation around these.</p>
                <p className="text-lg text-foreground mb-4">Limit your top-level navigation items to 5-7 categories. Within each mega menu panel, use 3-4 columns maximum. More than this creates cognitive overload.</p>

              </section>
              <section id="mobile-navigation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mobile Navigation</h2>
                <p className="text-lg text-foreground mb-4">Mega menus are a desktop pattern. On mobile, they convert to accordion-style navigation. Ensure your mega menu implementation collapses cleanly on screens below 768px. Test on multiple devices and operating systems.</p>
                <p className="text-lg text-foreground mb-4">Consider using a simplified mobile navigation with fewer items rather than trying to fit the full mega menu into a mobile drawer.</p>

              </section>
              <section id="performance-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Performance Considerations</h2>
                <p className="text-lg text-foreground mb-4">Mega menus that load product images or use complex CSS animations can slow down initial page render. Lazy load any images within the mega menu. If using an app, measure its performance impact using PageSpeed Insights before and after installation.</p>

              </section>
              <section id="seo-impact" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">SEO Impact</h2>
                <p className="text-lg text-foreground mb-4">A well-structured mega menu improves internal linking across your site, distributing link equity to category pages. Ensure all mega menu links use descriptive anchor text that matches your target keywords for those pages. Avoid generic labels like &quot;Shop&quot; or &quot;Products&quot;.</p>

              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-customise-shopify-theme" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Customise Your Theme</h4><p className="text-sm text-foreground">Theme customisation fundamentals</p></Link>
                    <Link href="/guides/how-to-set-up-shopify-navigation-menus" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Navigation Menus</h4><p className="text-sm text-foreground">Set up basic navigation first</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Mega Menu Built?</h2>
          <p className="text-xl text-gray-300 mb-8">Our developers build performance-optimised mega menus that match your brand and improve navigation for large catalogues.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
