export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  headline: string;
  description: string;
  date: string;
  results: string[];
  challenge: string;
  approach: string;
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  services: { name: string; href: string }[];
  duration: string;
  tags: string[];
  gradient: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fashion-brand-co",
    title: "Fashion Brand Co",
    client: "Fashion Brand Co",
    industry: "Fashion & Apparel",
    service: "Shopify Plus Development + Theme Design",
    headline: "40% conversion rate increase for a Manchester fashion retailer",
    description:
      "How we migrated a Manchester fashion retailer from Magento to Shopify Plus, rebuilt their theme from scratch, and grew revenue by £1.2M in year one.",
    date: "2024-09-01",
    results: [
      "40% increase in conversion rate",
      "2x faster page load times",
      "35% increase in average order value",
      "£1.2M additional revenue in year one",
    ],
    challenge:
      "Fashion Brand Co had been running on Magento for six years and the platform was holding them back. Their site regularly took over eight seconds to load on mobile, the checkout was clunky across devices, and their merchandising team needed developer support for even the most basic catalogue updates. With a growing competitor set and peak trading seasons approaching, the cost of staying on Magento was becoming impossible to ignore.",
    approach:
      "We started with a thorough discovery phase, mapping every customer journey and identifying the friction points that were costing the brand sales. From there we planned a full Shopify Plus migration with zero downtime, preserving all product data, customer accounts, and order history. We designed and built a bespoke theme with a focus on mobile-first layouts, fast-loading imagery, and an advanced faceted filtering system that their merchandising team could manage without touching code. Custom metafields gave the team control over editorial content across collection pages, and we connected their existing ERP for real-time stock updates.",
    outcome:
      "Within eight weeks the new store was live and performing beyond the targets we had set together. Page load times dropped by more than half, and the streamlined checkout drove a 40% lift in conversion rate within the first 90 days. The merchandising team were up and running on Shopify within two days of handover, and the additional revenue generated in year one more than covered the entire project investment.",
    testimonial: {
      quote:
        "The Flex Commerce team genuinely understood our brand and our commercial goals from day one. The new site is faster, more beautiful, and has completely transformed how our team works day to day. The revenue results speak for themselves.",
      author: "Sarah Mitchell",
      role: "Head of Ecommerce, Fashion Brand Co",
    },
    services: [
      { name: "Shopify Plus", href: "/shopify-plus" },
      { name: "Theme Development", href: "/shopify-theme-development" },
      { name: "Speed Optimisation", href: "/shopify-speed-optimisation" },
    ],
    duration: "10 weeks",
    tags: ["Shopify Plus", "Migration", "Fashion", "Theme Development", "Magento"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #3d1a20 100%)",
    accent: "#ef436b",
  },
  {
    slug: "organic-beauty-co",
    title: "Organic Beauty Co",
    client: "Organic Beauty Co",
    industry: "Beauty & Cosmetics",
    service: "WooCommerce to Shopify Migration + SEO Preservation",
    headline: "Zero ranking loss WooCommerce to Shopify migration for a beauty brand",
    description:
      "A meticulous WooCommerce to Shopify migration for a UK beauty brand that preserved 100% of search rankings and drove a 28% organic traffic increase within three months.",
    date: "2024-11-01",
    results: [
      "Zero downtime migration",
      "100% of search rankings preserved",
      "28% organic traffic increase in 3 months post-migration",
      "15% conversion rate improvement from new checkout",
    ],
    challenge:
      "Organic Beauty Co had spent years building strong organic search rankings on their WooCommerce site, but the platform itself had become a liability. Page speeds were poor, the admin was difficult to use without developer support, and their in-house team had no way to run promotions or update content without raising a support ticket. The prospect of migrating to a new platform was exciting, but the risk of losing hard-won SEO rankings made the decision feel paralysing.",
    approach:
      "Before writing a single line of code, we conducted a full SEO audit of the existing WooCommerce site, cataloguing every indexed URL, crawlable page, and structured data implementation. We built a complete URL mapping document that became the spine of the migration plan, ensuring every redirect was in place before the new site went live. The Shopify build used a custom theme tuned for Core Web Vitals, and we rewrote all on-page metadata and schema markup to meet current best practice. Our SEO lead monitored Google Search Console daily for the first four weeks post-launch, resolving any crawl issues within hours.",
    outcome:
      "The migration completed on schedule with no downtime whatsoever. Search Console data confirmed that all targeted keyword positions were maintained or improved within the first month, and organic traffic grew by 28% over the following three months as Google indexed the faster, better-structured pages. The new Shopify checkout, combined with improved page speed, delivered a 15% uplift in conversion rate almost immediately after launch.",
    testimonial: {
      quote:
        "We had heard so many horror stories about losing rankings during a platform migration. Flex Commerce gave us total confidence throughout the process and the results proved they knew exactly what they were doing. Organic traffic is up significantly and the team can finally manage the site themselves.",
      author: "James Thornton",
      role: "Marketing Director, Organic Beauty Co",
    },
    services: [
      { name: "WooCommerce to Shopify Migration", href: "/woocommerce-to-shopify-migration" },
      { name: "Shopify SEO", href: "/shopify-seo" },
    ],
    duration: "6 weeks",
    tags: ["Migration", "WooCommerce", "SEO", "Beauty", "Shopify"],
    gradient: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
    accent: "#10b981",
  },
  {
    slug: "tech-accessories-ltd",
    title: "Tech Accessories Ltd",
    client: "Tech Accessories Ltd",
    industry: "Electronics",
    service: "Custom Theme Development",
    headline: "Grew average order value for a tech accessories brand by 60%",
    description:
      "Custom Shopify theme with product configurator and subscription functionality that increased average order value by 60% and reduced cart abandonment by 25%.",
    date: "2024-07-01",
    results: [
      "60% increase in average order value",
      "25% reduction in cart abandonment",
    ],
    challenge:
      "Their existing theme lacked the product configuration capabilities needed to upsell bundles and accessories effectively.",
    approach:
      "We built a bespoke Shopify theme with a custom product configurator and integrated subscription functionality.",
    outcome:
      "Average order value increased by 60% within 60 days of launch, with cart abandonment falling by a quarter.",
    testimonial: {
      quote:
        "The configurator has completely changed how our customers shop. Average basket size has gone up dramatically.",
      author: "Raj Patel",
      role: "Ecommerce Manager, Tech Accessories Ltd",
    },
    services: [
      { name: "Theme Development", href: "/shopify-theme-development" },
      { name: "Shopify App Development", href: "/shopify-app-development" },
    ],
    duration: "8 weeks",
    tags: ["Theme Development", "Electronics", "Subscriptions", "Custom Build"],
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
    accent: "#6366f1",
  },
  {
    slug: "home-essentials",
    title: "Home Essentials",
    client: "Home Essentials",
    industry: "Home & Living",
    service: "Shopify Plus B2B",
    headline: "Launched a home goods brand across 5 markets, tripling B2B sales",
    description:
      "Shopify Plus build with multi-currency support and a wholesale B2B portal that launched across five markets and tripled B2B revenue.",
    date: "2024-05-01",
    results: [
      "Launched successfully in 5 international markets",
      "B2B sales increased 3x",
    ],
    challenge:
      "The client was managing wholesale orders manually via spreadsheets with no scalable B2B solution in place.",
    approach:
      "We built a Shopify Plus store with Shopify Markets for multi-currency and a custom B2B portal using Shopify's wholesale channel.",
    outcome:
      "The brand launched in five new markets on schedule and B2B revenue tripled within the first six months.",
    testimonial: {
      quote:
        "Going international felt daunting, but Flex made it straightforward. The B2B portal has transformed our wholesale operation.",
      author: "Claire Webb",
      role: "Operations Director, Home Essentials",
    },
    services: [
      { name: "Shopify Plus", href: "/shopify-plus" },
      { name: "Theme Development", href: "/shopify-theme-development" },
    ],
    duration: "12 weeks",
    tags: ["Shopify Plus", "B2B", "International", "Home & Living"],
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d4a3e 100%)",
    accent: "#34d399",
  },
  {
    slug: "athletic-wear-brand",
    title: "Athletic Wear Brand",
    client: "Athletic Wear Brand",
    industry: "Sportswear",
    service: "Speed Optimisation",
    headline: "Improved page speed by 65% for a sportswear brand",
    description:
      "A performance audit and optimisation project that cut page load times by 65% and reduced operational overhead through smarter app integrations.",
    date: "2024-03-01",
    results: [
      "Page speed improved by 65%",
      "Operational time reduced by 40%",
    ],
    challenge:
      "Years of accumulated apps and unoptimised assets had left the store scoring poorly on Core Web Vitals and losing sales to slow load times.",
    approach:
      "We conducted a full performance audit, removed redundant apps, optimised all image assets, and rebuilt critical rendering-path code.",
    outcome:
      "Google PageSpeed scores improved dramatically, load times were cut by 65%, and the streamlined app stack saved the team significant weekly admin time.",
    testimonial: {
      quote:
        "We knew the site was slow but didn't realise how much it was costing us. The results from the optimisation work were immediate.",
      author: "Tom Griffiths",
      role: "Digital Director, Athletic Wear Brand",
    },
    services: [
      { name: "Speed Optimisation", href: "/shopify-speed-optimisation" },
      { name: "Store Audit", href: "/shopify-store-audit" },
    ],
    duration: "4 weeks",
    tags: ["Speed Optimisation", "Sportswear", "Performance", "Core Web Vitals"],
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a3a4a 100%)",
    accent: "#0ea5e9",
  },
  {
    slug: "gourmet-food-store",
    title: "Gourmet Food Store",
    client: "Gourmet Food Store",
    industry: "Food & Beverage",
    service: "Custom Integration",
    headline: "Grew email revenue by 200% for a subscription food brand",
    description:
      "Custom subscription box functionality combined with a Klaviyo integration for personalised marketing drove a 200% increase in email-attributed revenue.",
    date: "2024-01-01",
    results: [
      "75% subscription retention rate",
      "Email revenue up 200%",
    ],
    challenge:
      "The brand was running a manual subscription process that was error-prone and impossible to scale, with no meaningful email automation in place.",
    approach:
      "We built custom subscription functionality on Shopify and integrated Klaviyo with advanced segmentation flows for subscription lifecycle management.",
    outcome:
      "Subscription retention reached 75% within three months and email became the brand's highest-revenue acquisition channel.",
    testimonial: {
      quote:
        "The subscription system Flex built for us is completely seamless. Our customers love it and the Klaviyo flows have transformed our email performance.",
      author: "Anna Brooks",
      role: "Founder, Gourmet Food Store",
    },
    services: [
      { name: "Shopify App Development", href: "/shopify-app-development" },
      { name: "Shopify Integrations", href: "/shopify-integrations" },
    ],
    duration: "6 weeks",
    tags: ["Integrations", "Food & Beverage", "Subscriptions", "Klaviyo", "Email"],
    gradient: "linear-gradient(135deg, #1a0a00 0%, #3d2200 100%)",
    accent: "#f59e0b",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
