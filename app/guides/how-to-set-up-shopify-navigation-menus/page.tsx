import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Set Up Shopify Navigation Menus",
  description: "Complete guide to setting up navigation menus on Shopify. Learn to create header menus, footer menus, mega menus, and mobile navigation.",
  alternates: { canonical: "/guides/how-to-set-up-shopify-navigation-menus" },
  openGraph: {
    title: "How to Set Up Shopify Navigation Menus",
    description: "Complete guide to setting up navigation menus on Shopify.",
    url: "/guides/how-to-set-up-shopify-navigation-menus",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "navigation-basics", title: "Navigation Basics", level: 2 },
  { id: "creating-menus", title: "Creating Menus", level: 2 },
  { id: "header-navigation", title: "Header Navigation", level: 2 },
  { id: "footer-navigation", title: "Footer Navigation", level: 2 },
  { id: "mega-menus", title: "Mega Menus", level: 2 },
  { id: "mobile-navigation", title: "Mobile Navigation", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up Shopify Navigation Menus",
  description: "Complete guide to setting up navigation menus on Shopify.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2024-02-27",
  dateModified: "2024-02-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-set-up-shopify-navigation-menus` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Set Up Shopify Navigation Menus", item: `${siteConfig.url}/guides/how-to-set-up-shopify-navigation-menus` },
  ],
};

export default function NavigationMenusGuidePage() {
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Store Setup</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Set Up Shopify Navigation Menus</h1>
            <p className="text-xl text-foreground mb-8">Good navigation helps customers find products quickly. This guide covers creating menus, structuring navigation, and implementing mega menus.</p>
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
              <section id="navigation-basics" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Navigation Basics</h2>
                <p className="text-lg text-foreground mb-4">Shopify uses menus to organise navigation throughout your store. Menus contain links to collections, products, pages, and external URLs.</p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Default Menus</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Main menu:</strong> Primary navigation in your header</span></li>
                    <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Footer menu:</strong> Links in your footer</span></li>
                  </ul>
                </div>
                <p className="text-lg text-foreground">You can create additional menus for specific purposes, like a secondary header menu or sidebar navigation.</p>
              </section>

              <section id="creating-menus" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Creating Menus</h2>
                <p className="text-lg text-foreground mb-4">Create and edit menus via Online Store → Navigation in your Shopify admin.</p>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <div><strong className="text-foreground-dark">Add a menu item</strong><p className="mt-1">Click &quot;Add menu item&quot; to add a new link.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <div><strong className="text-foreground-dark">Enter the name</strong><p className="mt-1">This is what customers see in the navigation.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <div><strong className="text-foreground-dark">Select the link</strong><p className="mt-1">Choose from collections, products, pages, blogs, or enter a custom URL.</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <div><strong className="text-foreground-dark">Create nested items</strong><p className="mt-1">Drag items under others to create dropdowns.</p></div>
                  </li>
                </ol>
              </section>

              <section id="header-navigation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Header Navigation</h2>
                <p className="text-lg text-foreground mb-4">Your header menu is the primary way customers navigate your store. Keep it simple and focused on your most important categories.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Recommended Structure</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Limit top-level items to 5-7 maximum</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Use descriptive labels (not just &quot;Products&quot;)</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Put most popular categories first</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span>Include a &quot;Sale&quot; or &quot;New&quot; link if relevant</span></li>
                </ul>
              </section>

              <section id="footer-navigation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Footer Navigation</h2>
                <p className="text-lg text-foreground mb-4">Footer menus typically contain secondary links that customers might need but don&apos;t belong in the main navigation.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Common Footer Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Customer Service</h4>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• Contact Us</li>
                      <li>• Shipping Information</li>
                      <li>• Returns Policy</li>
                      <li>• FAQs</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-foreground-dark mb-2">Company</h4>
                    <ul className="text-foreground text-sm space-y-1">
                      <li>• About Us</li>
                      <li>• Privacy Policy</li>
                      <li>• Terms of Service</li>
                      <li>• Blog</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="mega-menus" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mega Menus</h2>
                <p className="text-lg text-foreground mb-4">Mega menus display multiple columns of links, images, and promotional content. They work well for stores with many categories.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Implementation Options</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Theme support:</strong> Many themes include mega menu functionality built-in</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Apps:</strong> Apps like Meteor Mega Menu or Smart Mega Menu add this feature</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Custom development:</strong> Build a custom mega menu for complete control</span></li>
                </ul>
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground-dark mb-2">Pro Tip</h4>
                  <p className="text-foreground">Include images in your mega menu to make categories more visual and appealing. Show bestsellers or new arrivals directly in the navigation.</p>
                </div>
              </section>

              <section id="mobile-navigation" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Mobile Navigation</h2>
                <p className="text-lg text-foreground mb-4">Mobile navigation typically uses a hamburger menu that expands to show your menu items. Most themes handle this automatically.</p>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4 mt-8">Mobile Best Practices</h3>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Keep menu labels short for smaller screens</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Test all dropdowns on actual mobile devices</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Ensure touch targets are large enough (44px minimum)</span></li>
                  <li className="flex items-start gap-3"><span className="text-green-500 font-bold">✓</span><span>Consider a sticky header for easy navigation</span></li>
                </ul>
              </section>

              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Use clear, descriptive labels:</strong> &quot;Women&apos;s Dresses&quot; is better than &quot;Dresses&quot;</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Limit nesting depth:</strong> Two levels maximum for most stores</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Test with real users:</strong> Ask friends to find products using your navigation</span></li>
                  <li className="flex items-start gap-3"><span className="text-accent font-bold">•</span><span><strong>Review analytics:</strong> See which menu items get clicked most</span></li>
                </ul>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-create-shopify-collections" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create Collections →</h4>
                      <p className="text-sm text-foreground">Organise your products</p>
                    </Link>
                    <Link href="/guides/how-to-create-shopify-mega-menu" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group">
                      <h4 className="font-medium text-foreground-dark group-hover:text-accent">Create a Mega Menu on Shopify →</h4>
                      <p className="text-sm text-foreground">Build a large navigation menu with images</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Navigation Help?</h2>
          <p className="text-xl text-gray-300 mb-8">Our team can design and implement navigation that helps customers find products faster.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/shopify-services" variant="outline-light" size="lg" icon={false}>Our Services</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
