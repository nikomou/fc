import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { siteConfig } from "@/lib/constants";
import { Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use the Shopify Plus Organisation Admin",
  description: "Learn how to use the Shopify Plus Organisation Admin to manage multiple stores, staff permissions, shared apps, and cross-store reporting.",
  alternates: { canonical: "/guides/how-to-use-shopify-plus-organisation-admin" },
  openGraph: {
    title: "How to Use the Shopify Plus Organisation Admin",
    description: "Learn how to use the Shopify Plus Organisation Admin to manage multiple stores, staff permissions, shared apps, and cross-store reporting.",
    url: "/guides/how-to-use-shopify-plus-organisation-admin",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "article",
  },
};

const tocItems = [
  { id: "what-is-organisation-admin", title: "What Is Organisation Admin", level: 2 },
  { id: "managing-multiple-stores", title: "Managing Multiple Stores", level: 2 },
  { id: "staff-permissions", title: "Staff Permissions", level: 2 },
  { id: "shared-apps", title: "Shared Apps", level: 2 },
  { id: "reporting-across-stores", title: "Cross-Store Reporting", level: 2 },
  { id: "expansion-stores", title: "Expansion Stores", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use the Shopify Plus Organisation Admin",
  description: "Learn how to use the Shopify Plus Organisation Admin to manage multiple stores, staff permissions, shared apps, and cross-store reporting.",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/guides/how-to-use-shopify-plus-organisation-admin` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Use the Shopify Plus Organisation Admin", item: `${siteConfig.url}/guides/how-to-use-shopify-plus-organisation-admin` },
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
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">Shopify Plus</span>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">How to Use the Shopify Plus Organisation Admin</h1>
            <p className="text-xl text-foreground mb-8">The Shopify Plus Organisation Admin is a central hub for managing all your stores under one Plus contract. If you operate multiple storefronts, understanding this tool is essential for efficient management.</p>
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
              <section id="what-is-organisation-admin" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">What Is Organisation Admin</h2>
                <p className="text-lg text-foreground mb-4">The Organisation Admin is a separate interface from your individual store admins. Access it at plus.shopify.com. It shows all stores in your Plus contract and provides organisation-level settings for users, apps, and reporting.</p>
                <p className="text-lg text-foreground mb-4">Merchants with a single store rarely use the Organisation Admin extensively. It becomes invaluable when you have multiple stores: regional stores, wholesale stores, expansion stores, or different brand storefronts under one contract.</p>
              </section>
              <section id="managing-multiple-stores" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Managing Multiple Stores</h2>
                <p className="text-lg text-foreground mb-4">From the Organisation Admin, you can navigate between all your stores without separate logins. Staff can be granted access to specific stores rather than having separate accounts for each.</p>
                <p className="text-lg text-foreground mb-4">Key settings managed at organisation level: user accounts, billing, plus plan configuration, and Plus-exclusive features that apply across all stores.</p>
              </section>
              <section id="staff-permissions" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Staff Permissions</h2>
                <p className="text-lg text-foreground mb-4">Manage staff at the organisation level to avoid creating separate accounts in each store. An organisation-level staff member can be assigned to specific stores with specific permission levels.</p>
                <p className="text-lg text-foreground mb-4">Use role-based permissions: a marketing manager might have access to all stores but only to specific sections. Apply least privilege principles.</p>
              </section>
              <section id="shared-apps" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Shared Apps</h2>
                <p className="text-lg text-foreground mb-4">Some Shopify apps support organisation-level installation, giving all your stores access from a single subscription. Launchpad and Shopify Flow are available across all stores under your Plus contract.</p>
              </section>
              <section id="reporting-across-stores" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Cross-Store Reporting</h2>
                <p className="text-lg text-foreground mb-4">The Organisation Admin provides basic cross-store analytics: total revenue across all stores, order volumes, and active customers. For more granular reporting, use Shopify&apos;s Reports API or a BI tool like Looker connected to all your stores.</p>
              </section>
              <section id="expansion-stores" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Expansion Stores</h2>
                <p className="text-lg text-foreground mb-4">Plus contracts include up to 9 expansion stores at no additional cost (10 stores total). Expansion stores are full Shopify stores ideal for: localised storefronts, a wholesale store, a staging environment, or a separate brand.</p>
                <p className="text-lg text-foreground mb-4">Request expansion stores via your Shopify Plus merchant success manager.</p>
              </section>
              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-foreground-dark mb-6">Best Practices</h2>
                <p className="text-lg text-foreground mb-4">Document which stores serve which purpose and maintain a clear naming convention. Audit staff access permissions quarterly. Keep your expansion stores purposeful: each store adds operational overhead.</p>
              </section>
              <section className="mb-16">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground-dark mb-4">Related Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/guides/how-to-manage-shopify-multi-location" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Multi-Location Inventory</h4><p className="text-sm text-foreground">Manage stock across locations</p></Link>
                    <Link href="/guides/how-to-migrate-to-shopify-plus" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-accent transition-colors group"><h4 className="font-medium text-foreground-dark group-hover:text-accent">Migrate to Shopify Plus</h4><p className="text-sm text-foreground">Upgrading to Plus guide</p></Link>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Managing Multiple Shopify Stores?</h2>
          <p className="text-xl text-gray-300 mb-8">We help Plus merchants structure their organisation admin, set up expansion stores, and configure cross-store workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">Get Expert Help</Button>
            <Button href="/contact" variant="outline-light" size="lg" icon={false}>Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
