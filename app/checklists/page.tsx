import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CheckSquare } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Shopify Checklists: Launch, SEO, CRO & More",
  description:
    "Expert Shopify checklists for launch, SEO, speed, security, checkout and CRO. Track progress automatically. Free, interactive guides from Shopify Plus experts.",
  alternates: {
    canonical: "/checklists",
  },
};

const checklistCategories = [
  {
    name: "Store Setup & Operations",
    checklists: [
      { title: "Shopify SEO Checklist", description: "Optimise your store for search engines and organic traffic.", href: "/checklists/shopify-seo-checklist" },
      { title: "Speed Optimisation Checklist", description: "Improve your store's loading speed and Core Web Vitals.", href: "/checklists/shopify-speed-optimisation-checklist" },
      { title: "Product Page Checklist", description: "Create high-converting product pages that sell.", href: "/checklists/shopify-product-page-checklist" },
      { title: "Homepage Checklist", description: "Build a homepage that converts visitors into customers.", href: "/checklists/shopify-homepage-checklist" },
      { title: "Checkout Optimisation Checklist", description: "Reduce cart abandonment with an optimised checkout.", href: "/checklists/shopify-checkout-optimisation-checklist" },
      { title: "Mobile Optimisation Checklist", description: "Deliver a flawless mobile shopping experience.", href: "/checklists/shopify-mobile-optimisation-checklist" },
    ],
  },
  {
    name: "Seasonal & Events",
    checklists: [
      { title: "Black Friday & Cyber Monday Checklist", description: "Prepare for the biggest sales weekend of the year.", href: "/checklists/shopify-black-friday-checklist" },
      { title: "Holiday Season Checklist", description: "Maximise sales during the most important time of year.", href: "/checklists/shopify-holiday-checklist" },
      { title: "Flash Sale Checklist", description: "Plan and execute successful flash sales.", href: "/checklists/shopify-flash-sale-checklist" },
    ],
  },
  {
    name: "Migration",
    checklists: [
      { title: "WooCommerce to Shopify Checklist", description: "Plan and execute your WooCommerce migration.", href: "/checklists/woocommerce-to-shopify-checklist" },
      { title: "Magento to Shopify Checklist", description: "Migrate from Magento with confidence.", href: "/checklists/magento-to-shopify-checklist" },
      { title: "Shopify to Shopify Plus Checklist", description: "Plan your upgrade to Shopify Plus.", href: "/checklists/shopify-plus-migration-checklist" },
    ],
  },
  {
    name: "Growth & Marketing",
    checklists: [
      { title: "Email Marketing Checklist", description: "Build an email programme that drives revenue.", href: "/checklists/shopify-email-marketing-checklist" },
      { title: "Abandoned Cart Recovery Checklist", description: "Recover lost sales with proven strategies.", href: "/checklists/shopify-abandoned-cart-checklist" },
      { title: "Google Shopping Checklist", description: "Set up and optimise Google Shopping campaigns.", href: "/checklists/shopify-google-shopping-checklist" },
      { title: "Facebook Ads Checklist", description: "Run profitable Facebook and Instagram ads.", href: "/checklists/shopify-facebook-ads-checklist" },
      { title: "CRO Checklist", description: "Boost conversion rates with proven tactics.", href: "/checklists/shopify-cro-checklist" },
    ],
  },
  {
    name: "Technical",
    checklists: [
      { title: "Theme Launch Checklist", description: "Everything to check before launching your store.", href: "/checklists/shopify-launch-checklist" },
      { title: "App Audit Checklist", description: "Audit your apps for performance and cost.", href: "/checklists/shopify-app-audit-checklist" },
      { title: "GDPR Compliance Checklist", description: "Meet GDPR requirements for EU/UK customers.", href: "/checklists/shopify-gdpr-checklist" },
      { title: "Security Checklist", description: "Protect your store against common threats.", href: "/checklists/shopify-security-checklist" },
    ],
  },
  {
    name: "Niche Store Types",
    checklists: [
      { title: "Dropshipping Checklist", description: "Set up a successful dropshipping business.", href: "/checklists/shopify-dropshipping-checklist" },
      { title: "Print-on-Demand Checklist", description: "Launch a POD business with zero inventory.", href: "/checklists/shopify-print-on-demand-checklist" },
      { title: "Digital Products Checklist", description: "Sell ebooks, templates, and digital downloads.", href: "/checklists/shopify-digital-products-checklist" },
      { title: "B2B & Wholesale Checklist", description: "Set up wholesale and trade selling.", href: "/checklists/shopify-b2b-wholesale-checklist" },
    ],
  },
];

export default function ChecklistsPage() {
  return (
    <>
      <PageHero
        background="green"
        badge={{ icon: CheckSquare, text: "Free Checklists" }}
        title="Shopify Checklists"
        description="Actionable checklists covering launches, migrations, SEO, and conversions. Tick off items as you go and your progress saves automatically."
        shapeColors={{ topRight: "green" }}
      />

      {/* Checklists */}
      <Section>
        <div className="space-y-12">
          {checklistCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-xl font-semibold text-foreground-dark mb-6">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.checklists.map((checklist) => (
                  <Link
                    key={checklist.title}
                    href={checklist.href}
                    className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                      <CheckSquare className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground-dark mb-1 group-hover:text-accent transition-colors">
                      {checklist.title}
                    </h3>
                    <p className="text-foreground text-sm line-clamp-2">
                      {checklist.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
