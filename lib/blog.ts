export type { ContentBlock, BlogPost } from "./blog-types";
import type { ContentBlock, BlogPost } from "./blog-types";

// Batch article imports (generated)
import batch1 from "./articles/batch-1";
import batch2 from "./articles/batch-2";
import batch3 from "./articles/batch-3";
import batch4 from "./articles/batch-4";
import batch5 from "./articles/batch-5";
import batch6 from "./articles/batch-6";
import batch7 from "./articles/batch-7";
import batch8 from "./articles/batch-8";
import batch9 from "./articles/batch-9";
import batch10 from "./articles/batch-10";

export const blogPosts: BlogPost[] = [
  {
    slug: "shopify-plus-migration-checklist",
    title: "The Ultimate Shopify Plus Migration Checklist",
    category: "Guides",
    description:
      "Everything you need to know before, during, and after migrating your ecommerce store to Shopify Plus. A step-by-step walkthrough of the full process.",
    readTime: "10 min read",
    date: "2026-02-28",
    image: "/images/blog/shopify-plus-migration-checklist.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#ef436b",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Migrating to Shopify Plus is one of the most impactful decisions a scaling ecommerce brand can make. But without proper planning, it can also be one of the most stressful. This checklist covers everything your team needs to handle before, during, and after your migration — so nothing falls through the cracks.",
      },
      {
        type: "h2",
        text: "Before You Migrate",
      },
      {
        type: "p",
        text: "Preparation is the difference between a smooth go-live and a chaotic one. Invest time here and the rest will follow.",
      },
      {
        type: "ul",
        items: [
          "Audit your current platform: catalogue all products, collections, customer data, and order history",
          "Document every third-party integration and app you currently use",
          "Map your existing URL structure — you'll need 301 redirects for every page",
          "Export product data in CSV format and clean it before import",
          "Review your theme and identify which features need to be rebuilt in Liquid",
          "Set your go-live date and work backwards to create a realistic project timeline",
        ],
      },
      {
        type: "h2",
        text: "Choosing the Right Shopify Plus Plan",
      },
      {
        type: "p",
        text: "Shopify Plus starts at $2,300/month on the revenue-share model (0.25% of monthly revenue over $800k, capped at $40k/month). For most brands, this is dramatically cheaper than enterprise platforms like Salesforce Commerce Cloud or Magento Enterprise.",
      },
      {
        type: "callout",
        text: "Shopify Plus includes up to 9 expansion stores, unlimited staff accounts, Shopify Flow, Launchpad, and direct access to the checkout.liquid file — features you simply can't get on standard Shopify.",
      },
      {
        type: "h2",
        text: "Data Migration",
      },
      {
        type: "p",
        text: "This is where most migrations go wrong. Data quality matters enormously — bad product data on your new platform will haunt you for months.",
      },
      {
        type: "ol",
        items: [
          "Export products, collections, customers, and orders from your existing platform",
          "Clean and normalise your data (consistent formatting, remove duplicates, fix broken metafields)",
          "Use Matrixify (formerly Excelify) or a custom import script for bulk data transfer",
          "Test your import in a development store first — always",
          "Verify product counts, variant counts, and image integrity after import",
          "Import historical orders for reporting continuity (even if they won't be fulfillable)",
        ],
      },
      {
        type: "h2",
        text: "SEO & Redirects",
      },
      {
        type: "p",
        text: "Losing your SEO rankings during a migration is a common fear — and a real risk if you skip this step. Every URL that changes needs a 301 redirect to its new destination.",
      },
      {
        type: "ul",
        items: [
          "Crawl your existing site with Screaming Frog to capture every indexed URL",
          "Create a redirect mapping spreadsheet (old URL → new URL)",
          "Upload redirects in bulk via Shopify's URL redirects CSV tool",
          "Carry over all meta titles, meta descriptions, and alt text",
          "Submit your new sitemap to Google Search Console immediately after launch",
          "Monitor rankings weekly for the first 3 months post-migration",
        ],
      },
      {
        type: "h2",
        text: "Post-Launch Checklist",
      },
      {
        type: "p",
        text: "Your work isn't done at go-live. The first two weeks after launch are critical for catching issues before they impact revenue.",
      },
      {
        type: "ul",
        items: [
          "Place test orders across every payment method you support",
          "Verify all automated email flows (order confirmation, shipping, abandoned cart) are firing correctly",
          "Check that all analytics tracking (GA4, Meta Pixel, TikTok Pixel) is active and accurate",
          "Review your Core Web Vitals scores in PageSpeed Insights",
          "Monitor your error logs in Shopify admin for any 404s or checkout issues",
          "Confirm all third-party integrations (ERP, 3PL, CRM) are syncing correctly",
        ],
      },
      {
        type: "quote",
        text: "A successful migration isn't measured at go-live — it's measured 90 days later when your traffic, conversion rate, and revenue are all trending in the right direction.",
      },
    ],
  },
  {
    slug: "shopify-speed-optimisation-guide",
    title: "Optimising Your Shopify Store for Speed",
    category: "Tips & Tricks",
    description:
      "Practical tips to improve your Shopify store's loading time and Core Web Vitals scores — and why page speed directly impacts your conversion rate and SEO rankings.",
    readTime: "7 min read",
    date: "2026-02-14",
    image: "/images/blog/shopify-speed-optimisation-guide.jpg",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Every 100ms improvement in page load time can increase conversions by up to 1%. For a store turning over £1M a year, that's an extra £10k — and that's before you factor in the SEO uplift from better Core Web Vitals scores. Speed is not a nice-to-have. It's a revenue lever.",
      },
      {
        type: "h2",
        text: "Understanding Core Web Vitals",
      },
      {
        type: "p",
        text: "Google's Core Web Vitals are three metrics that measure the real-world user experience of your store. They directly influence your search rankings — a slow store will rank lower than a fast competitor, all else being equal.",
      },
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint): How quickly your main content loads. Aim for under 2.5 seconds.",
          "FID / INP (Interaction to Next Paint): How quickly your page responds to interaction. Aim for under 200ms.",
          "CLS (Cumulative Layout Shift): How stable your layout is as it loads. Aim for a score under 0.1.",
        ],
      },
      {
        type: "h2",
        text: "The Biggest Culprits on Shopify Stores",
      },
      {
        type: "p",
        text: "In our experience auditing hundreds of Shopify stores, the same issues come up repeatedly. Here's what to fix first:",
      },
      {
        type: "ol",
        items: [
          "Too many apps — every app adds JavaScript to your storefront. Audit your app list ruthlessly.",
          "Unoptimised images — use WebP format, compress to under 100KB for product images, and always set explicit width/height attributes.",
          "Render-blocking JavaScript — third-party scripts (chat widgets, review apps, tracking pixels) that load synchronously in the <head>.",
          "Large, unoptimised theme files — bloated CSS and JavaScript from themes that weren't built for performance.",
          "No lazy loading — images below the fold loading on page open instead of when needed.",
        ],
      },
      {
        type: "callout",
        text: "Every Shopify app you install adds between 10-80KB of JavaScript to your storefront. A store with 30+ apps is carrying significant performance debt — often without realising it.",
      },
      {
        type: "h2",
        text: "Quick Wins You Can Do Today",
      },
      {
        type: "ul",
        items: [
          "Compress and convert all product images to WebP using Shopify's built-in image transformation API",
          "Add loading=\"lazy\" to all images that aren't above the fold",
          "Remove unused apps from your Shopify admin (even deactivated apps leave code behind until removed)",
          "Move non-critical scripts to load in the footer rather than the <head>",
          "Enable Shopify's built-in image CDN for global delivery",
          "Reduce the number of font variants you load (stick to 2 weights per typeface)",
        ],
      },
      {
        type: "h2",
        text: "Advanced Optimisations",
      },
      {
        type: "p",
        text: "Once you've tackled the quick wins, these deeper changes will push your scores into the green:",
      },
      {
        type: "ul",
        items: [
          "Replace heavy app functionality with lightweight native Shopify features where possible",
          "Implement section-level CSS loading so styles only load when the section is on the page",
          "Use Shopify's web pixel API instead of script tags for third-party tracking",
          "Implement critical CSS inlining for above-the-fold styles",
          "Audit and consolidate your third-party tag manager setup",
        ],
      },
      {
        type: "quote",
        text: "We consistently see stores achieve 20-40 point improvements in their Google PageSpeed scores within two weeks of a focused performance audit. The ROI is almost always immediate.",
      },
    ],
  },
  {
    slug: "40-percent-conversion-rate-increase",
    title: "How We Increased Conversions by 40%",
    category: "Case Studies",
    description:
      "A deep dive into the CRO strategies, UX improvements, and Shopify optimisations we used to boost conversion rates by 40% for a UK fashion brand.",
    readTime: "5 min read",
    date: "2026-01-30",
    image: "/images/blog/40-percent-conversion-rate-increase.jpg",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#fff8e1",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "When a fast-growing UK fashion brand came to us, they had a solid product, strong social presence, and healthy traffic — but their conversion rate was sitting at 1.2%. Industry average for fashion ecommerce is around 2-3%. We were brought in to close that gap. Twelve weeks later, their CVR was at 1.68% — a 40% relative increase that added six figures to their annual revenue.",
      },
      {
        type: "h2",
        text: "The Audit",
      },
      {
        type: "p",
        text: "Before touching a single pixel, we spent two weeks in analysis mode. Session recordings, heatmaps, Google Analytics 4 funnel reports, and user testing sessions with 8 participants from their target demographic.",
      },
      {
        type: "p",
        text: "Three critical friction points emerged immediately:",
      },
      {
        type: "ol",
        items: [
          "The product page had 11 steps between landing and add-to-cart — size guides buried in a modal, reviews below the fold, and a confusing variant selector",
          "The checkout had a mandatory account creation step before purchase",
          "Mobile users were abandoning at the cart page at 3x the rate of desktop users — a layout issue that made the cart feel broken on smaller screens",
        ],
      },
      {
        type: "h2",
        text: "What We Changed",
      },
      {
        type: "h3",
        text: "Product Page Redesign",
      },
      {
        type: "p",
        text: "We rebuilt the product page from scratch with conversion as the primary objective. Size guide moved inline (no modal). Reviews surfaced immediately below the product title. A sticky add-to-cart bar that follows the user as they scroll. Trust signals (returns policy, delivery promise) moved above the fold.",
      },
      {
        type: "h3",
        text: "Checkout Optimisation",
      },
      {
        type: "p",
        text: "Using Shopify Plus checkout extensibility, we removed the forced account creation gate. Guests can now checkout in 3 steps. We also added an express checkout section at the top with Shop Pay, Apple Pay, and Google Pay — reducing friction for returning customers to near-zero.",
      },
      {
        type: "h3",
        text: "Mobile Cart Fix",
      },
      {
        type: "p",
        text: "The mobile cart was built with a fixed-position summary that was overlapping the checkout button on smaller screens. A 2-hour fix that immediately cut mobile cart abandonment by 22%.",
      },
      {
        type: "callout",
        text: "The mobile cart fix alone — a 2-hour development task — was responsible for nearly a third of the overall conversion improvement. Sometimes the biggest gains come from the smallest fixes.",
      },
      {
        type: "h2",
        text: "Results at 12 Weeks",
      },
      {
        type: "ul",
        items: [
          "Overall CVR: 1.2% → 1.68% (+40% relative)",
          "Mobile CVR: 0.7% → 1.1% (+57% relative)",
          "Average order value: +£4.20 (driven by upsell improvements in cart)",
          "Cart abandonment rate: reduced by 18%",
          "Checkout completion rate: increased from 61% to 74%",
        ],
      },
      {
        type: "quote",
        text: "The changes paid for themselves within the first month. We hadn't changed our traffic strategy at all — we just made better use of the visitors we already had.",
      },
    ],
  },
  {
    slug: "shopify-flow-automation-guide",
    title: "Getting Started with Shopify Flow",
    category: "Guides",
    description:
      "Learn how to automate your Shopify Plus store with Flow workflows. From fraud prevention to loyalty tagging, discover what's possible without writing a single line of code.",
    readTime: "8 min read",
    date: "2026-01-15",
    image: "/images/blog/shopify-flow-automation-guide.jpg",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Shopify Flow is one of the most underused features of Shopify Plus — and one of the most powerful. It's a no-code automation builder that lets you create conditional workflows triggered by events in your store. If you're not using it, you're leaving efficiency (and money) on the table.",
      },
      {
        type: "h2",
        text: "What Can Shopify Flow Do?",
      },
      {
        type: "p",
        text: "Flow works on a simple trigger → condition → action model. Something happens in your store (the trigger), Flow checks if certain conditions are met, then takes an action. The possibilities are vast:",
      },
      {
        type: "ul",
        items: [
          "Automatically tag customers based on purchase history, total spend, or product categories bought",
          "Hold high-risk orders for manual review before fulfilment",
          "Send internal Slack notifications for VIP orders or low stock alerts",
          "Auto-apply loyalty discounts when a customer reaches a spend threshold",
          "Automatically hide out-of-stock products from collections",
          "Create to-do tasks for your team when a B2B order comes in",
        ],
      },
      {
        type: "h2",
        text: "Your First Flow: VIP Customer Tagging",
      },
      {
        type: "p",
        text: "Let's build something immediately useful. This flow will automatically tag any customer as 'VIP' the moment their total spend exceeds £500.",
      },
      {
        type: "ol",
        items: [
          "Open Flow from your Shopify Plus admin and click 'Create workflow'",
          "Set the trigger to 'Order created'",
          "Add a condition: Customer total spent > 500 (in your store currency)",
          "Set the action to 'Add customer tag' with the value 'VIP'",
          "Activate the workflow — it runs automatically from this point forward",
        ],
      },
      {
        type: "callout",
        text: "Once customers are tagged as VIP, you can use that tag to power Klaviyo segments, Shopify discount codes, and priority support routing — all without any developer involvement.",
      },
      {
        type: "h2",
        text: "Fraud Prevention Workflow",
      },
      {
        type: "p",
        text: "One of the most valuable use cases for Shopify Flow is automated fraud prevention. Rather than reviewing every high-risk order manually (or worse, missing them), Flow can hold them automatically.",
      },
      {
        type: "ul",
        items: [
          "Trigger: Order created",
          "Condition: Shopify fraud risk level = HIGH",
          "Action 1: Cancel fulfilment and hold order",
          "Action 2: Add internal note 'Flagged for fraud review'",
          "Action 3: Send Slack notification to your operations team",
        ],
      },
      {
        type: "h2",
        text: "Connecting Flow with Other Apps",
      },
      {
        type: "p",
        text: "Flow integrates natively with many Shopify Plus ecosystem apps including Klaviyo, Gorgias, Yotpo, and Loyalty Lion. This means your automations can span your entire tech stack — a customer hitting a spend threshold can simultaneously get a VIP tag, be added to a Klaviyo VIP segment, and have their Gorgias ticket priority upgraded.",
      },
      {
        type: "quote",
        text: "The brands that get the most from Shopify Plus aren't necessarily the ones with the biggest budgets — they're the ones that have invested time in understanding what Flow can do for their operations.",
      },
    ],
  },
  {
    slug: "klaviyo-email-marketing-ecommerce",
    title: "Email Marketing Best Practices for Ecommerce",
    category: "Tips & Tricks",
    description:
      "Strategies to maximise your email marketing ROI using Klaviyo and Shopify. From segmentation to flows, here's what the top ecommerce brands are doing differently.",
    readTime: "8 min read",
    date: "2025-12-20",
    image: "/images/blog/klaviyo-email-marketing-ecommerce.jpg",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Email marketing generates an average ROI of £42 for every £1 spent — the highest of any digital channel. Yet most ecommerce brands are leaving the majority of that value on the table by sending batch-and-blast campaigns to their entire list. Here's how the top 10% of brands approach email differently.",
      },
      {
        type: "h2",
        text: "Segmentation: The Foundation of Everything",
      },
      {
        type: "p",
        text: "Sending the same email to your entire list is the fastest way to train your subscribers to ignore you. Meaningful segmentation is what separates brands with 15% open rates from those with 40%+.",
      },
      {
        type: "ul",
        items: [
          "RFM segmentation: Recency, Frequency, Monetary — the gold standard for ecommerce email",
          "Engagement-based segments: active (opened in 90 days), at-risk (90-180 days), lapsed (180+ days)",
          "Category-based segments: only email customers about categories they've actually bought from",
          "VIP segment: your top 10% of customers by revenue — treat them differently",
          "Win-back segment: customers who haven't purchased in 6+ months but were previously active",
        ],
      },
      {
        type: "h2",
        text: "The 5 Flows Every Ecommerce Store Needs",
      },
      {
        type: "p",
        text: "Automated flows should be generating 30-40% of your total email revenue. If they're not, your flows need work. Here are the five non-negotiables:",
      },
      {
        type: "ol",
        items: [
          "Welcome series (3-5 emails): Introduce your brand, tell your story, deliver your welcome offer, and make the first sale",
          "Abandoned cart (3 emails): Reminder at 1 hour, value prop at 24 hours, discount offer at 72 hours",
          "Browse abandonment (2 emails): Gentle nudge at 24 hours, social proof at 72 hours",
          "Post-purchase (3 emails): Order confirmation, cross-sell at 7 days, review request at 14-21 days",
          "Win-back (3 emails): 'We miss you' at 90 days, your best offer at 120 days, final attempt at 150 days",
        ],
      },
      {
        type: "callout",
        text: "A well-configured abandoned cart flow alone typically recovers 5-15% of abandoned carts. For a store with £50k/month in abandoned cart value, that's £2,500-£7,500 in recovered revenue every month — on autopilot.",
      },
      {
        type: "h2",
        text: "Campaign Strategy: What to Send and When",
      },
      {
        type: "p",
        text: "Beyond flows, your campaign calendar should be a deliberate mix of promotional, educational, and relationship-building content. A good rule of thumb: no more than 40% of your sends should be pure promotional.",
      },
      {
        type: "ul",
        items: [
          "Send 2-4 campaigns per week to your engaged segment, 1-2 per week to your full list",
          "Tuesday and Thursday mornings (8-10am in your customer's timezone) consistently outperform other times",
          "Plain-text emails often outperform designed HTML emails for re-engagement campaigns",
          "A/B test subject lines on every campaign — test with 20%, send winner to 80%",
          "Clean your list quarterly: suppress anyone who hasn't opened in 180 days before they hurt your deliverability",
        ],
      },
      {
        type: "quote",
        text: "The brands winning at email aren't sending more — they're sending smarter. Relevance beats volume every time.",
      },
    ],
  },
  {
    slug: "shopify-plus-b2b-wholesale",
    title: "B2B Ecommerce on Shopify Plus",
    category: "Guides",
    description:
      "How to set up and optimise your wholesale portal on Shopify Plus. Everything you need to know about B2B features, pricing, and the native wholesale channel.",
    readTime: "9 min read",
    date: "2025-12-05",
    image: "/images/blog/shopify-plus-b2b-wholesale.jpg",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "B2B ecommerce is growing at twice the rate of B2C — and Shopify Plus has become a serious contender in the wholesale space. The native B2B features introduced in recent years have transformed what's possible without custom development. Here's everything you need to know.",
      },
      {
        type: "h2",
        text: "Shopify Plus B2B: What's Included",
      },
      {
        type: "p",
        text: "Shopify Plus includes a native B2B channel at no additional cost. It offers a dedicated wholesale storefront with features specifically designed for wholesale buyers:",
      },
      {
        type: "ul",
        items: [
          "Company profiles with multiple locations and contacts per account",
          "Customer-specific and location-specific pricing and payment terms",
          "Net 30, 60, 90 payment terms with automated invoice generation",
          "Quantity rules and minimum order values per product or collection",
          "Custom price lists assigned per company or company location",
          "Vaulted payment methods so buyers can reorder without re-entering card details",
        ],
      },
      {
        type: "h2",
        text: "Setting Up Your B2B Channel",
      },
      {
        type: "ol",
        items: [
          "Enable the B2B channel from your Shopify Plus admin under Sales Channels",
          "Create your first Company profile for a wholesale account",
          "Assign contacts to the company with appropriate permission levels",
          "Create a price list and assign it to the company (either percentage-based or fixed)",
          "Set payment terms for the company (immediate, net 30, net 60, etc.)",
          "Customise your B2B storefront theme — it can be styled independently of your D2C store",
        ],
      },
      {
        type: "callout",
        text: "Unlike the old Wholesale channel (which ran as a separate, limited store), Shopify's native B2B features share your product catalogue, inventory, and fulfilment — dramatically reducing operational complexity.",
      },
      {
        type: "h2",
        text: "Pricing Strategy for Wholesale",
      },
      {
        type: "p",
        text: "Getting your wholesale pricing structure right is critical. Shopify Plus supports several approaches:",
      },
      {
        type: "ul",
        items: [
          "Percentage discount from retail: simplest to manage, but can be hard to hit margin targets on lower-margin products",
          "Fixed price lists: more work to maintain, but precise control over margins per SKU",
          "Tiered pricing: different prices at different quantity thresholds (buy 10 get X, buy 50 get Y)",
          "Volume discounts: automatic discounts applied when order value hits a threshold",
        ],
      },
      {
        type: "h2",
        text: "Integrating B2B with Your ERP",
      },
      {
        type: "p",
        text: "For most B2B brands, Shopify Plus is just one part of a wider tech stack. Your B2B orders need to flow into your ERP or accounting system for invoicing, fulfilment, and inventory management.",
      },
      {
        type: "p",
        text: "Patchworks, Brightpearl, and native Shopify integrations with NetSuite and TradeGecko are the most common approaches. The right choice depends on your order volumes, ERP of choice, and the complexity of your fulfilment operations.",
      },
      {
        type: "quote",
        text: "Brands that run both D2C and B2B through a single Shopify Plus instance consistently report lower operational costs and faster growth than those maintaining separate platforms for each channel.",
      },
    ],
  },
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
  ...batch7,
  ...batch8,
  ...batch9,
  ...batch10,
];

export const POSTS_PER_PAGE = 12;

export function getPaginatedPosts(page: number) {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = sorted.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(sorted.length / POSTS_PER_PAGE);
  return { posts, totalPages, totalPosts: sorted.length };
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
