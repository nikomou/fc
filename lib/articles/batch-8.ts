import type { BlogPost } from "../blog-types";

const posts: BlogPost[] = [
  // ─── Case Studies ─────────────────────────────────────────────────────────

  {
    slug: "homeware-brand-klaviyo-flows",
    title: "How Automated Klaviyo Flows Generate 35% of Monthly Revenue",
    category: "Case Studies",
    description:
      "How we built a suite of Klaviyo automation flows for a UK homeware brand that now drives 35% of their total monthly revenue on autopilot.",
    readTime: "5 min read",
    date: "2025-11-13",
    image:
      "/images/articles/pexels-3944405.webp",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#cffafe",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Email automation is one of the highest-ROI channels available to Shopify brands — but only when the flows are built with genuine intent. For one of our UK homeware clients, a full audit and rebuild of their Klaviyo setup turned a neglected channel into a revenue engine that now contributes 35% of monthly sales without any ongoing ad spend.",
      },
      {
        type: "h2",
        text: "The Starting Point",
      },
      {
        type: "p",
        text: "When they came to us, the brand had a basic welcome series and a dormant abandoned cart flow. Email accounted for around 8% of revenue. The list had grown to 42,000 subscribers but engagement was poor — open rates below 18% and click rates under 1.5%. The flows were generic, unsegmented, and firing at the wrong cadence.",
      },
      {
        type: "h2",
        text: "The Flows We Built",
      },
      {
        type: "ul",
        items: [
          "Welcome series (5 emails over 10 days, brand story led)",
          "Abandoned cart sequence with dynamic product imagery",
          "Browse abandonment triggered at 30 minutes",
          "Post-purchase onboarding with care guides and cross-sells",
          "Win-back series for subscribers inactive for 90 days",
          "Review request timed to product delivery estimates",
        ],
      },
      {
        type: "h2",
        text: "Segmentation Was the Real Unlock",
      },
      {
        type: "p",
        text: "Every flow was split by customer segment: first-time buyers, repeat purchasers, and high-LTV customers. Rather than sending the same abandoned cart email to everyone, high-LTV contacts received a personalised message from the account manager. First-timers got social proof and a soft incentive. The tailoring made an immediate difference.",
      },
      {
        type: "callout",
        text: "The abandoned cart flow alone now recovers an average of £14,200 per month — a flow that previously generated under £2,000.",
      },
      {
        type: "h2",
        text: "Results After 90 Days",
      },
      {
        type: "ul",
        items: [
          "Email revenue share: 8% → 35% of monthly total",
          "Average open rate: 18% → 41%",
          "Click-to-open rate: 1.5% → 6.8%",
          "Unsubscribe rate held below 0.2% throughout",
        ],
      },
      {
        type: "quote",
        text: "We knew email was underperforming but didn't realise by how much. The new flows paid for the project within six weeks.",
      },
      {
        type: "p",
        text: "The key lesson: automation only works when it is built around the customer journey, not just the platform's default templates. Investing time in segmentation and copy before touching the flow builder is what separates high-performing programmes from the rest.",
      },
    ],
  },

  {
    slug: "shopify-store-design-rebrand",
    title: "Rebranding a Shopify Store: A Before and After Case Study",
    category: "Case Studies",
    description:
      "A detailed before-and-after case study of a full Shopify store rebrand, covering visual identity, UX, and the impact on conversion rate and brand perception.",
    readTime: "6 min read",
    date: "2025-11-27",
    image:
      "/images/articles/pexels-1181467.webp",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Rebranding a live Shopify store is a delicate operation. Done poorly, it can damage SEO, confuse returning customers, and tank conversion rates during the transition. Done well, it can unlock a step-change in brand perception and performance. This case study walks through a recent rebrand we led for a UK lifestyle brand that had outgrown its original identity.",
      },
      {
        type: "h2",
        text: "Why They Needed a Rebrand",
      },
      {
        type: "p",
        text: "The brand had launched five years earlier with a DIY Shopify setup. The visual identity was inconsistent across product pages, emails, and ads. Their customer base had evolved — they were now attracting a more premium buyer, but the store looked budget. Customer research showed that 34% of first-time visitors left the homepage without scrolling.",
      },
      {
        type: "h2",
        text: "Phase One: Discovery and Positioning",
      },
      {
        type: "p",
        text: "Before touching a single pixel, we ran three weeks of brand discovery: competitor analysis, customer interviews, and a review of their best-performing content. The outcome was a clear brand positioning statement and a new visual direction — elevated, warm, and lifestyle-led rather than product-first.",
      },
      {
        type: "h2",
        text: "Phase Two: Design and Build",
      },
      {
        type: "ul",
        items: [
          "New custom Shopify theme built from a blank canvas",
          "Refined typography pairing (serif display, geometric sans body)",
          "Expanded colour palette with primary, secondary, and accent tokens",
          "Redesigned product page with editorial photography zones",
          "New collection page layout with lifestyle imagery banners",
          "Mobile-first navigation with streamlined category structure",
        ],
      },
      {
        type: "h2",
        text: "Protecting SEO During the Transition",
      },
      {
        type: "p",
        text: "Every URL was preserved. A full crawl was run pre-launch to identify canonical issues, and 301 redirects were set up for any structural changes to collection paths. Meta titles and descriptions were migrated and reviewed. We monitored Google Search Console daily for the first two weeks post-launch.",
      },
      {
        type: "callout",
        text: "Organic traffic dropped by only 3% in the first week and fully recovered within 18 days — a strong result for a site-wide rebrand.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Homepage bounce rate: 34% drop → 18% drop (nearly halved)",
          "Conversion rate: up 19% within 30 days of launch",
          "Average session duration: up 41 seconds",
          "Return customer rate increased from 28% to 36% over 90 days",
        ],
      },
      {
        type: "quote",
        text: "The new store feels like us. For the first time, customers tell us the site matches the quality of the product — that means everything.",
      },
    ],
  },

  {
    slug: "food-brand-subscription-launch-shopify",
    title: "How a Food Brand Launched a Subscription Service on Shopify",
    category: "Case Studies",
    description:
      "How we helped a UK food brand build and launch a Shopify subscription offering using Recharge, growing to 1,200 active subscribers in four months.",
    readTime: "5 min read",
    date: "2025-12-11",
    image:
      "/images/articles/pexels-3182812.webp",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Subscriptions are one of the most powerful business model shifts available to a Shopify brand — predictable revenue, higher LTV, and built-in retention. But launching a subscription service on an existing store requires careful planning across technology, logistics, and marketing. Here is how we helped a UK specialty food brand do exactly that.",
      },
      {
        type: "h2",
        text: "The Challenge",
      },
      {
        type: "p",
        text: "The brand sold premium food products through their Shopify store with strong repeat purchase rates — around 40% of customers bought again within 60 days. The founder suspected many customers would welcome a subscription, but the team had no experience with recurring billing and was concerned about complexity for the operations team.",
      },
      {
        type: "h2",
        text: "Technology Stack",
      },
      {
        type: "p",
        text: "We selected Recharge Payments as the subscription engine, integrated directly into their existing Shopify Plus store. Recharge handles recurring billing, customer portal management, and skip/pause logic without requiring a separate checkout experience. This was critical for maintaining their existing theme and conversion funnel.",
      },
      {
        type: "ul",
        items: [
          "Recharge Payments for recurring billing",
          "Custom subscription landing page built in Shopify",
          "Integrated with their existing Klaviyo for subscription-specific flows",
          "Operations team trained on the Recharge fulfilment dashboard",
        ],
      },
      {
        type: "h2",
        text: "Launch Strategy",
      },
      {
        type: "p",
        text: "Rather than a broad launch, we started with a waitlist to existing customers. An email to their 28,000 subscriber list offered early access and a 10% founding member discount. 847 people signed up before launch day — giving the operations team a controlled ramp-up period.",
      },
      {
        type: "callout",
        text: "The founding member campaign generated £38,000 in first-month subscription revenue before a single paid acquisition was spent.",
      },
      {
        type: "h2",
        text: "Results at Four Months",
      },
      {
        type: "ul",
        items: [
          "1,200 active subscribers",
          "Monthly recurring revenue: £52,000",
          "Churn rate: 4.2% monthly (well below industry average of 7–10%)",
          "Subscription AOV 23% higher than one-time purchase AOV",
        ],
      },
      {
        type: "quote",
        text: "Having predictable revenue every month has completely changed how we plan stock and cashflow. It's been transformative for the business.",
      },
    ],
  },

  {
    slug: "shopify-gorgias-support-case-study",
    title: "How Gorgias Reduced Support Response Time by 70%",
    category: "Case Studies",
    description:
      "How we implemented Gorgias for a fast-growing Shopify brand, cutting average first response time from 18 hours to under 5 hours and improving CSAT scores.",
    readTime: "5 min read",
    date: "2025-12-25",
    image:
      "/images/articles/pexels-3760067.webp",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Customer support is often the last area growing Shopify brands invest in — until it becomes a crisis. For one of our apparel clients, increasing order volumes had pushed their support inbox beyond what the team could handle. Tickets were going unanswered for 18+ hours, CSAT scores were declining, and the founder was personally responding to complaints on social media.",
      },
      {
        type: "h2",
        text: "Why Gorgias",
      },
      {
        type: "p",
        text: "Gorgias is the leading helpdesk built specifically for Shopify. Unlike generic tools such as Zendesk or Freshdesk, Gorgias pulls Shopify order data, customer history, and subscription status directly into the ticket view. Agents can issue refunds, cancel orders, and update shipping details without ever leaving the helpdesk.",
      },
      {
        type: "h2",
        text: "The Implementation",
      },
      {
        type: "ul",
        items: [
          "Migrated email, Instagram DMs, and Facebook messages into a single inbox",
          "Built 14 macros for the most common ticket types (WISMO, returns, sizing)",
          "Set up auto-responses for out-of-hours with estimated response times",
          "Created intent-based rules to auto-tag and prioritise urgent tickets",
          "Integrated Gorgias with Klaviyo for post-resolution survey flows",
        ],
      },
      {
        type: "h2",
        text: "Automation Rules That Made the Difference",
      },
      {
        type: "p",
        text: "The most impactful change was not speed — it was deflection. We set up self-service flows for the top five ticket types by volume. Customers asking 'where is my order?' were automatically served their tracking link from Shopify data before a human ever saw the ticket. This deflected 28% of all inbound tickets entirely.",
      },
      {
        type: "callout",
        text: "Automated ticket deflection saved the support team approximately 14 hours per week — the equivalent of nearly two full working days.",
      },
      {
        type: "h2",
        text: "Results After 60 Days",
      },
      {
        type: "ul",
        items: [
          "Average first response time: 18 hours → 5.1 hours (72% reduction)",
          "CSAT score: 3.4/5 → 4.6/5",
          "Ticket volume handled per agent per day: up 65%",
          "Support-related negative reviews on Trustpilot dropped by 80%",
        ],
      },
      {
        type: "quote",
        text: "Gorgias paid for itself in the first month. The time we've saved has let the team focus on proactive customer success rather than just firefighting.",
      },
    ],
  },

  {
    slug: "apparel-brand-shopify-markets-expansion",
    title: "How an Apparel Brand Expanded to 8 Markets with Shopify",
    category: "Case Studies",
    description:
      "A step-by-step account of how we used Shopify Markets to expand a UK apparel brand into 8 international markets, increasing revenue by 44% in six months.",
    readTime: "6 min read",
    date: "2026-01-08",
    image:
      "/images/articles/pexels-590016.webp",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Shopify Markets has made international expansion genuinely accessible for mid-market brands. Before its release, going global meant managing multiple storefronts, separate domains, and duplicated operational overhead. Today, a single Shopify Plus store can serve eight markets with localised pricing, currency, language, and duties — all from one admin.",
      },
      {
        type: "h2",
        text: "The Brand and Their Ambition",
      },
      {
        type: "p",
        text: "Our client was a UK-based sustainable apparel brand generating £2.8M annually from UK and Irish customers. They had organic search demand from Germany, the Netherlands, and Scandinavia but no way to convert it. Customers were either abandoning at checkout due to unclear duties or buying in GBP on a UK-centric site.",
      },
      {
        type: "h2",
        text: "Market Selection Strategy",
      },
      {
        type: "p",
        text: "Rather than launching everywhere at once, we prioritised markets by existing demand signals. Google Search Console showed significant impression share from DE, NL, SE, DK, NO, FR, and the US. We modelled each market's duty threshold and average order value to determine which would be profitable without price changes.",
      },
      {
        type: "ul",
        items: [
          "Phase 1: Germany, Netherlands, France (EU — no duty complexity with DDP)",
          "Phase 2: Sweden, Denmark, Norway (higher AOV, lower duty risk)",
          "Phase 3: United States (highest revenue potential, separate fulfilment node)",
        ],
      },
      {
        type: "h2",
        text: "Technical Implementation",
      },
      {
        type: "p",
        text: "We configured Shopify Markets with local currency display for all eight territories, geolocation-based market switching, and Shopify's built-in duty and import tax collection for markets above the duty-inclusive threshold. Product descriptions were translated via DeepL and reviewed by native speakers. Hreflang tags were implemented across all market URLs.",
      },
      {
        type: "callout",
        text: "Displaying local currency increased international conversion rate by 31% versus showing GBP prices to overseas visitors.",
      },
      {
        type: "h2",
        text: "Results After Six Months",
      },
      {
        type: "ul",
        items: [
          "International revenue: £0 → £1.23M annualised run rate",
          "Total store revenue up 44% within six months",
          "Germany and Netherlands became top-three markets by revenue",
          "International cart abandonment 22% lower than UK baseline",
        ],
      },
      {
        type: "quote",
        text: "We always knew we had international demand but assumed going global was a big project. With Shopify Markets, we were live in all eight territories within five weeks.",
      },
    ],
  },

  {
    slug: "shopify-yotpo-reviews-trust",
    title: "How Reviews Increased Conversion Rate by 22% for a Homeware Brand",
    category: "Case Studies",
    description:
      "How we implemented Yotpo reviews for a UK homeware brand and used social proof strategically across the funnel to increase conversion rate by 22%.",
    readTime: "5 min read",
    date: "2026-01-22",
    image:
      "/images/articles/pexels-669615.webp",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#fef3c7",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Social proof is one of the most reliable conversion levers available to ecommerce brands — but only when it is placed correctly and feels genuine. Reviews buried at the bottom of a product page do little. Reviews surfaced at the moment of hesitation can be the difference between a purchase and an abandonment.",
      },
      {
        type: "h2",
        text: "The Situation",
      },
      {
        type: "p",
        text: "Our client sold premium homeware and had a strong product — but their Shopify store was using the default Shopify product reviews app with no star ratings above the fold, no UGC photography, and no review collection emails. Despite a 4.7-star average across 340 reviews, almost no visitors were seeing that social proof.",
      },
      {
        type: "h2",
        text: "Platform Migration: Shopify Reviews to Yotpo",
      },
      {
        type: "p",
        text: "We migrated all existing reviews to Yotpo and implemented the full Yotpo suite: star ratings in the page header, review carousel on the homepage, inline review snippets on collection pages, and a Q&A widget on product pages. A post-purchase review request flow was built in Klaviyo, timed to three days after confirmed delivery.",
      },
      {
        type: "h2",
        text: "Strategic Review Placement",
      },
      {
        type: "ul",
        items: [
          "Star rating widget beneath product title (immediately visible above the fold)",
          "Review highlight quote in the 'add to basket' zone",
          "Top three reviews surfaced on collection page tiles",
          "Dedicated reviews section above the fold on the homepage",
          "Review count and rating in Google Shopping ads via structured data",
        ],
      },
      {
        type: "callout",
        text: "Products with 10+ reviews converted at 2.4x the rate of products with zero reviews on the same store.",
      },
      {
        type: "h2",
        text: "Driving Review Volume",
      },
      {
        type: "p",
        text: "The review request email series was the critical unlock. The first email, sent three days post-delivery, achieved a 34% open rate and 12% click rate. Within 90 days, review count had grown from 340 to over 1,100. More reviews meant more fresh content for Google and higher star ratings in organic search snippets.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Overall conversion rate: up 22% within 60 days",
          "Product page conversion on reviewed products: up 31%",
          "Organic CTR from Google: up 18% (attributed to star ratings in SERPs)",
          "Review volume: 340 → 1,100+ in 90 days",
        ],
      },
    ],
  },

  {
    slug: "shopify-bundle-strategy-aov-case-study",
    title: "How Product Bundling Increased AOV by £18 for a Beauty Brand",
    category: "Case Studies",
    description:
      "How we designed and implemented a product bundling strategy for a UK beauty brand on Shopify Plus, raising average order value by £18 in under eight weeks.",
    readTime: "5 min read",
    date: "2026-02-05",
    image:
      "/images/articles/pexels-905163.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#e5e5e5",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Increasing average order value is one of the most capital-efficient ways to grow revenue. You have already paid to acquire the customer — every additional pound they spend costs you almost nothing. For a UK beauty brand on Shopify Plus, a structured bundling strategy delivered an £18 AOV uplift within eight weeks of launch.",
      },
      {
        type: "h2",
        text: "Understanding the Opportunity",
      },
      {
        type: "p",
        text: "The brand had a strong hero product — a premium serum — that drove the majority of first purchases. Analysis of their order data showed that 62% of repeat customers bought the serum alongside a companion moisturiser. Yet first-time buyers almost never purchased both together. The opportunity was obvious: surface the natural pairing at the point of purchase.",
      },
      {
        type: "h2",
        text: "Bundle Types We Implemented",
      },
      {
        type: "ul",
        items: [
          "Curated starter kits (hero product + two complements at 15% saving)",
          "Build-your-own routine bundles (choose three from eight products)",
          "Gifting sets with premium packaging upsell",
          "Subscription bundles with additional 10% discount versus one-off",
        ],
      },
      {
        type: "h2",
        text: "On-Page Bundle Placement",
      },
      {
        type: "p",
        text: "Bundle offers were surfaced in three locations: a dedicated bundles collection, a 'complete the routine' module on individual product pages, and an in-cart upsell triggered when the hero serum was added to the basket. The in-cart upsell was built using the Shopify Plus checkout extensibility toolkit, keeping everything native without a third-party app.",
      },
      {
        type: "callout",
        text: "The in-cart upsell for the starter kit had a 24% acceptance rate — roughly one in four customers who saw it took the offer.",
      },
      {
        type: "h2",
        text: "Results After Eight Weeks",
      },
      {
        type: "ul",
        items: [
          "Average order value: £47 → £65 (+£18)",
          "Bundle revenue as percentage of total: 38%",
          "Gross margin maintained (no net discount impact at bundle volume)",
          "Repeat purchase rate up 9% attributed to multi-product adoption",
        ],
      },
      {
        type: "quote",
        text: "We always assumed customers who wanted the moisturiser would just buy it. Surfacing the pairing explicitly showed us they just needed the nudge.",
      },
    ],
  },

  {
    slug: "shopify-checkout-express-payments",
    title: "How Adding Express Payments Boosted Checkout Completion by 18%",
    category: "Case Studies",
    description:
      "How enabling Shop Pay, Apple Pay, and Google Pay for a Shopify brand reduced checkout friction and increased completion rate by 18% in under four weeks.",
    readTime: "5 min read",
    date: "2026-02-19",
    image:
      "/images/articles/pexels-267389.webp",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#e0e7ff",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Checkout abandonment is the most expensive leak in any ecommerce funnel. Of all the interventions available to reduce it, enabling accelerated payment methods is one of the fastest and highest-impact. For a health and wellness brand on Shopify, adding Shop Pay, Apple Pay, and Google Pay to their checkout increased completion by 18% in under a month.",
      },
      {
        type: "h2",
        text: "Why Checkout Friction Matters",
      },
      {
        type: "p",
        text: "The Baymard Institute estimates the average documented cart abandonment rate at 70%. Requiring a customer to type their full name, address, card number, expiry, and CVV is a significant ask — particularly on mobile. Accelerated payment methods collapse this process into a single biometric confirmation.",
      },
      {
        type: "h2",
        text: "What We Enabled",
      },
      {
        type: "ul",
        items: [
          "Shop Pay — one-tap checkout using saved Shopify network data",
          "Apple Pay — Touch ID / Face ID checkout on Safari and iOS",
          "Google Pay — one-tap checkout on Chrome and Android",
          "Express payment buttons surfaced on product pages, not just cart",
        ],
      },
      {
        type: "h2",
        text: "Product Page Express Checkout",
      },
      {
        type: "p",
        text: "A key change was surfacing express payment buttons directly on product pages, not just at the cart stage. This allows customers to bypass the cart entirely — a particularly high-converting path for mobile users browsing a specific product. The 'buy with' buttons were styled to match the brand and placed immediately below the 'add to basket' CTA.",
      },
      {
        type: "callout",
        text: "On mobile, 41% of completed purchases now go through an accelerated payment method — up from 6% before the change.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Checkout completion rate: up 18% overall",
          "Mobile checkout completion: up 29%",
          "Average checkout time: reduced from 3.2 minutes to 48 seconds for express users",
          "No negative impact on fraud rates or chargebacks",
        ],
      },
      {
        type: "p",
        text: "If your Shopify store does not yet have accelerated payments enabled and surfaced prominently, it is likely the single highest-ROI change you can make this month. The setup time is minimal; the impact is immediate.",
      },
    ],
  },

  {
    slug: "manchester-ecommerce-agency-case-study",
    title: "From Local Shop to National Ecommerce Brand on Shopify",
    category: "Case Studies",
    description:
      "How a Manchester independent retailer partnered with us to build a Shopify store that grew from zero online revenue to £1.2M in 18 months.",
    readTime: "6 min read",
    date: "2026-03-05",
    image:
      "/images/articles/pexels-6214381.webp",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#ffedd5",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Not every ecommerce success story starts with venture capital and a national launch. Some of the most compelling growth stories begin with a single retail unit, a loyal local customer base, and a founder who spots the opportunity to take their brand national. This is one of those stories.",
      },
      {
        type: "h2",
        text: "The Starting Point",
      },
      {
        type: "p",
        text: "Our client ran a well-loved independent gift and homewares shop in Manchester's Northern Quarter. They had a small but fiercely loyal customer base, strong social media engagement, and a product range that genuinely differentiated from the high street. What they lacked was any online presence — no website, no ecommerce, no email list.",
      },
      {
        type: "h2",
        text: "Phase One: Build the Foundation",
      },
      {
        type: "p",
        text: "We built a custom Shopify store on a three-month timeline, prioritising page speed, mobile UX, and conversion from day one. The product catalogue was photographed professionally and structured for SEO. A Klaviyo welcome flow was live on launch day. Shop Pay was enabled. The store launched at the start of the October gifting season.",
      },
      {
        type: "ul",
        items: [
          "Custom Shopify theme with brand-forward homepage",
          "350 products uploaded with SEO-optimised descriptions",
          "Google Shopping and Meta Shopping feeds configured",
          "Local SEO setup targeting Manchester and key gifting terms",
        ],
      },
      {
        type: "h2",
        text: "Phase Two: Drive Traffic",
      },
      {
        type: "p",
        text: "Month one was almost entirely organic — social media content driving direct traffic and email captures. From month two, we layered in Google Shopping and a small Meta ads budget. By Christmas, the store was generating £40,000/month. January brought a natural dip, but the email list had grown to 8,000 — a retained asset that kept baseline revenue steady.",
      },
      {
        type: "callout",
        text: "The Christmas season in year one generated £120,000 in online revenue — more than the physical shop had taken in the previous two Christmases combined.",
      },
      {
        type: "h2",
        text: "Month 18 Position",
      },
      {
        type: "ul",
        items: [
          "Annual online revenue: £1.2M",
          "Online revenue now 3x physical shop revenue",
          "Email list: 24,000 subscribers with 42% average open rate",
          "National press coverage in two lifestyle publications",
          "Wholesale enquiries opened a B2B revenue stream",
        ],
      },
      {
        type: "quote",
        text: "Going online felt overwhelming before we started. Now the shop is almost a showroom for what we sell at scale online. It has changed everything about what the business can become.",
      },
    ],
  },

  {
    slug: "shopify-plus-migration-complex-catalogue",
    title: "Complex Catalogue Migration: 200,000 SKUs to Shopify Plus",
    category: "Case Studies",
    description:
      "How we migrated a 200,000 SKU product catalogue from Magento 2 to Shopify Plus without downtime, with full data integrity and a 99.6% URL redirect success rate.",
    readTime: "7 min read",
    date: "2024-01-15",
    image:
      "/images/articles/pexels-4481259.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#dbeafe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Migrating a large catalogue to Shopify Plus is one of the highest-stakes projects in ecommerce development. Get it wrong and you lose rankings, corrupt product data, or introduce checkout errors. Get it right and you unlock a platform that scales more reliably and costs significantly less to maintain than Magento.",
      },
      {
        type: "h2",
        text: "The Brief",
      },
      {
        type: "p",
        text: "Our client was a B2B and B2C industrial supplies retailer with 200,000 active SKUs, complex variant structures, tiered B2B pricing, and 14 years of Magento 2 history. They wanted to move to Shopify Plus to reduce their infrastructure bill and gain access to native POS, Shopify Markets, and B2B features.",
      },
      {
        type: "h2",
        text: "Data Audit and Mapping",
      },
      {
        type: "p",
        text: "Before writing a single migration script, we spent four weeks auditing the Magento database. This surfaced 31,000 duplicate SKUs, 8,400 products with missing images, and several thousand malformed variant records. Cleaning this data before migration was essential — migrating dirty data would have been far worse than the migration itself.",
      },
      {
        type: "h2",
        text: "Migration Architecture",
      },
      {
        type: "ul",
        items: [
          "Custom Python scripts for product, variant, and metafield migration via Shopify API",
          "Staged migration: categories first, then products, then customer data",
          "Full redirect mapping for all 200,000 product URLs using Shopify's redirect CSV",
          "B2B price lists migrated to Shopify Plus native B2B catalogues",
          "Three parallel validation passes before final cutover",
        ],
      },
      {
        type: "h2",
        text: "Zero-Downtime Cutover",
      },
      {
        type: "p",
        text: "The cutover was executed on a Sunday at 2am. DNS was updated with a 300-second TTL. The Magento store remained on a maintenance page for two hours while final order data was synced. By 4am, the Shopify Plus store was live and fully operational. No orders were lost in transit.",
      },
      {
        type: "callout",
        text: "URL redirect success rate: 99.6% of all indexed URLs were correctly redirected. Organic traffic recovered to pre-migration levels within 11 days.",
      },
      {
        type: "h2",
        text: "Post-Migration Outcomes",
      },
      {
        type: "ul",
        items: [
          "Infrastructure costs reduced by 68% versus Magento hosting",
          "Site speed (LCP): 4.8s → 1.9s",
          "Developer maintenance hours reduced by 80%",
          "B2B order processing time cut from 4 minutes to 40 seconds",
          "First Black Friday on Shopify Plus handled peak traffic without incident",
        ],
      },
    ],
  },

  // ─── Guides & Tips ────────────────────────────────────────────────────────

  {
    slug: "shopify-multi-location-inventory",
    title: "Shopify Multi-Location Inventory Management",
    category: "Guides",
    description:
      "A complete guide to managing inventory across multiple locations in Shopify — from warehouse to retail floor — including routing rules and reporting best practices.",
    readTime: "7 min read",
    date: "2025-03-06",
    image:
      "/images/articles/pexels-3856027.webp",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Shopify's multi-location inventory system allows brands to track stock across warehouses, retail locations, and third-party fulfilment partners from a single admin. For growing brands operating across multiple fulfilment nodes, getting this right is critical to avoiding oversells, reducing shipping costs, and delivering accurate stock information to customers.",
      },
      {
        type: "h2",
        text: "How Shopify Multi-Location Inventory Works",
      },
      {
        type: "p",
        text: "Each Shopify location holds its own inventory quantities per variant. When an order is placed, Shopify can be configured to fulfil from a specific location or to allow merchants to choose. Shopify Plus merchants can use fulfilment priority rules to automate which location fulfils each order based on proximity, stock level, or custom logic.",
      },
      {
        type: "h2",
        text: "Setting Up Locations",
      },
      {
        type: "ul",
        items: [
          "Navigate to Settings > Locations in Shopify Admin",
          "Add each warehouse, retail unit, and 3PL as a separate location",
          "Enable 'fulfil online orders from this location' only for applicable nodes",
          "Assign inventory quantities per SKU per location after setup",
        ],
      },
      {
        type: "h2",
        text: "Fulfilment Priority Rules",
      },
      {
        type: "p",
        text: "Shopify Plus allows you to set a priority order for fulfilment locations. Orders will attempt to fulfil from location one first; if stock is unavailable, they cascade to location two, and so on. For most brands, this should be ordered by your primary warehouse first, then retail locations, then overflow 3PL. Review the priority list whenever you open a new location.",
      },
      {
        type: "h3",
        text: "Split Fulfilment Considerations",
      },
      {
        type: "p",
        text: "When an order contains items stocked at different locations, Shopify can split the fulfilment into multiple shipments. Be aware of the customer experience implications — receiving two parcels for one order increases support queries. Many brands set a threshold: only split if the items cannot be consolidated within 48 hours.",
      },
      {
        type: "callout",
        text: "Shopify's inventory API allows real-time sync with WMS platforms like Brightpearl, Linnworks, and ShipBob — essential for high-volume operations.",
      },
      {
        type: "h2",
        text: "Reporting and Stock Visibility",
      },
      {
        type: "p",
        text: "Shopify's built-in inventory reports show stock levels by location, sell-through rate, and days of stock remaining. For more advanced reporting — particularly across multiple locations — consider supplementing with a tool like Glew or Brightpearl Analytics. The key metrics to track are: stock cover by location, transfer frequency, and fulfilment accuracy rate.",
      },
      {
        type: "ul",
        items: [
          "Run a weekly stock movement report across all locations",
          "Set low stock alerts per location, not just globally",
          "Review inter-location transfer costs monthly",
          "Audit fulfilment location accuracy quarterly",
        ],
      },
    ],
  },

  {
    slug: "shopify-pre-orders-setup",
    title: "How to Set Up Shopify Product Pre-Orders",
    category: "Guides",
    description:
      "A step-by-step guide to enabling pre-orders on Shopify, covering native options, recommended apps, and best practices for managing customer expectations.",
    readTime: "6 min read",
    date: "2025-02-21",
    image:
      "/images/articles/pexels-574071.webp",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Pre-orders are a powerful tool for Shopify brands — they generate revenue before inventory arrives, validate demand for new products, and build anticipation. But they also carry risk: if fulfilment is delayed or communication is poor, they create frustrated customers and support overhead. Done well, they are one of the most efficient cash-flow tools available to a growing brand.",
      },
      {
        type: "h2",
        text: "Native Shopify Pre-Order Options",
      },
      {
        type: "p",
        text: "Shopify does not have a native pre-order feature, but you can replicate basic pre-order behaviour by setting a product to 'continue selling when out of stock' and setting inventory to zero. This allows purchases to be made but gives you no way to communicate expected despatch dates, manage pre-order specific messaging, or separate pre-order fulfilment from standard orders.",
      },
      {
        type: "h2",
        text: "Recommended Pre-Order Apps",
      },
      {
        type: "ul",
        items: [
          "Pre-Order Now by Website on Demand — replaces Add to Cart with a Pre-Order button, supports mixed cart warnings",
          "Fordeer Pre-Order Manager — supports partial payment and expected date display",
          "Timesact — highly configurable, supports countdown timers and mixed cart",
          "Shopify Flow (Plus only) — can automate tagging and notifications when pre-order stock arrives",
        ],
      },
      {
        type: "h2",
        text: "Key Setup Considerations",
      },
      {
        type: "p",
        text: "Whichever method you choose, there are non-negotiable communication requirements. The expected despatch date must be visible on the product page, in the cart, and in the order confirmation email. Customers must know they are pre-ordering before they purchase — surprises at fulfilment stage generate chargebacks and negative reviews.",
      },
      {
        type: "callout",
        text: "Include a pre-order specific email notification via Klaviyo — the standard Shopify confirmation email does not make the delay obvious enough.",
      },
      {
        type: "h2",
        text: "Payment Capture Options",
      },
      {
        type: "p",
        text: "You can capture payment immediately at pre-order (simpler operationally) or authorise and capture on despatch (better for customer trust but requires careful payment window management — card authorisations expire after 7 days on most processors). For most Shopify brands, immediate capture with a clear refund policy is the lower-risk choice.",
      },
      {
        type: "h2",
        text: "Best Practices",
      },
      {
        type: "ul",
        items: [
          "Never launch a pre-order without a confirmed supplier lead time",
          "Build in a buffer — announce a date you are confident you can beat",
          "Send a proactive update if the date moves, even if stock is coming sooner",
          "Tag pre-order customers in Klaviyo for targeted despatch communications",
          "Remove the pre-order flag immediately when stock arrives",
        ],
      },
    ],
  },

  {
    slug: "shopify-fulfilment-scaling",
    title: "How to Scale Your Shopify Fulfilment Operations",
    category: "Guides",
    description:
      "A practical guide to scaling fulfilment for growing Shopify brands — from in-house packing to 3PL partnerships, warehouse management, and peak preparation.",
    readTime: "8 min read",
    date: "2025-02-08",
    image:
      "/images/articles/pexels-3183153.webp",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Fulfilment is the operational heart of an ecommerce brand — and the area that most frequently becomes a bottleneck to growth. Many brands scale their marketing successfully only to find their operations cannot keep pace. This guide covers the fulfilment stack for each stage of growth, and the signals that tell you it is time to move to the next model.",
      },
      {
        type: "h2",
        text: "Stage One: In-House Fulfilment (Under £30K/Month)",
      },
      {
        type: "p",
        text: "At this volume, in-house fulfilment makes sense. The economics do not support a 3PL, and direct involvement in packing gives you quality control and packaging creativity that is hard to replicate. Focus on batch processing — pick all orders at once, pack in batches, print labels in bulk via Shopify Shipping. Set a daily cut-off time and stick to it.",
      },
      {
        type: "h2",
        text: "Stage Two: Moving to a 3PL (£30K–£150K/Month)",
      },
      {
        type: "p",
        text: "The trigger for a 3PL is usually one of three things: you are running out of physical space, fulfilment is consuming founder time that should be on growth, or delivery SLAs are slipping. When any of these occur, the economics of a 3PL almost always stack up. Good UK 3PLs for Shopify brands include: ShipBob, Huboo, Zendbox, and Bezos.",
      },
      {
        type: "ul",
        items: [
          "Ensure your 3PL has a native Shopify integration (not just CSV imports)",
          "Negotiate SLAs contractually — same-day despatch for orders before 2pm",
          "Clarify returns handling procedures before signing",
          "Ask about peak surcharge policies for Q4",
        ],
      },
      {
        type: "h2",
        text: "Shopify and 3PL Integration",
      },
      {
        type: "p",
        text: "Most reputable UK 3PLs integrate directly with Shopify via their own app or via middleware like Linnworks. Orders flow from Shopify to the 3PL automatically; tracking numbers are pushed back to Shopify and trigger your customer notifications. Test the full order lifecycle — including returns — before going live.",
      },
      {
        type: "callout",
        text: "Poor 3PL integration is the most common source of customer complaints for brands transitioning from in-house fulfilment. Test ruthlessly before cutting over.",
      },
      {
        type: "h2",
        text: "Stage Three: Owned Warehouse (£150K+/Month)",
      },
      {
        type: "p",
        text: "At significant volume, the economics shift toward owning or leasing warehouse space. This gives full control, lower per-unit cost, and the ability to optimise for your specific product range. Investing in a WMS (warehouse management system) at this stage — Brightpearl, Mintsoft, or similar — pays for itself in pick accuracy and reduced labour.",
      },
      {
        type: "h2",
        text: "Peak Preparation",
      },
      {
        type: "ul",
        items: [
          "Forecast Q4 volume by category using prior year data and growth rate",
          "Pre-position stock with your 3PL by mid-October",
          "Negotiate temporary additional staffing with your 3PL for Black Friday week",
          "Communicate extended despatch windows to customers proactively",
          "Test all integrations in September, not November",
        ],
      },
    ],
  },

  {
    slug: "shopify-click-collect-pos",
    title: "Click and Collect with Shopify POS",
    category: "Guides",
    description:
      "How to set up and optimise click and collect for your Shopify store using Shopify POS, including notification workflows and in-store pickup UX best practices.",
    readTime: "6 min read",
    date: "2025-01-26",
    image:
      "/images/articles/pexels-6006785.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#dbeafe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Click and collect bridges the gap between online convenience and in-store experience. For brands with physical retail locations, it reduces delivery costs, drives footfall, and creates additional upsell opportunities at the point of collection. Shopify POS makes it relatively straightforward to implement — but the details matter.",
      },
      {
        type: "h2",
        text: "Enabling In-Store Pickup in Shopify",
      },
      {
        type: "p",
        text: "In-store pickup is a native feature in Shopify. To enable it, go to Settings > Shipping and Delivery > Local Pickup, toggle it on for each relevant location, and configure the pickup instructions customers will see at checkout. Set a realistic pickup availability window — most customers expect same-day for orders placed before noon.",
      },
      {
        type: "h2",
        text: "Managing Orders in Shopify POS",
      },
      {
        type: "p",
        text: "Once click and collect is enabled, pickup orders appear in the Shopify POS ready for collection queue. Staff can mark orders as ready, which triggers an automated notification to the customer. The notification includes the pickup instructions and any reference details. Ensure your POS devices have reliable internet connectivity — nothing frustrates a collection customer more than a slow system.",
      },
      {
        type: "ul",
        items: [
          "Assign a dedicated collection point in store, clearly signposted",
          "Train all staff on the POS pickup workflow before going live",
          "Set up a dedicated collection notification via Shopify Notifications or Klaviyo",
          "Consider a collection locker for after-hours pickup if footfall is high",
        ],
      },
      {
        type: "h2",
        text: "Customer Notifications",
      },
      {
        type: "p",
        text: "The default Shopify pickup notification is functional but generic. For a premium experience, build a custom Klaviyo flow triggered by the 'order ready for pickup' event. Include the store address with a Google Maps link, opening hours, and what to bring (order number or confirmation email). SMS notifications convert significantly better than email for collection alerts.",
      },
      {
        type: "callout",
        text: "Brands using SMS for collection-ready notifications see an average 34% faster collection time versus email-only notification.",
      },
      {
        type: "h2",
        text: "The In-Store Upsell Opportunity",
      },
      {
        type: "p",
        text: "Click and collect customers visit your store with purchase intent already confirmed. This is your best upsell opportunity in physical retail. Train staff to acknowledge the online order, make the collection frictionless, and then naturally introduce relevant add-ons. A well-placed display near the collection point — featuring complementary products — can drive meaningful incremental revenue.",
      },
      {
        type: "h2",
        text: "Common Pitfalls to Avoid",
      },
      {
        type: "ul",
        items: [
          "Allowing pickup orders when stock is not actually on site",
          "Slow notification workflows — customers should hear within 2 hours",
          "No clear policy for uncollected orders after 7 days",
          "Forgetting to update pickup availability during holidays or closures",
        ],
      },
    ],
  },

  {
    slug: "shopify-search-apps-guide",
    title: "Shopify Search Apps: Boosting Product Findability",
    category: "Tips & Tricks",
    description:
      "A guide to the best Shopify search apps, why native search falls short at scale, and how better product findability directly improves conversion rate.",
    readTime: "6 min read",
    date: "2025-01-13",
    image:
      "/images/articles/pexels-2881229.webp",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Site search is one of the most neglected conversion levers in ecommerce. Studies consistently show that customers who use site search convert at 3–5x the rate of those who browse — yet most Shopify stores serve these high-intent users with a basic search experience that returns poor results, zero typo tolerance, and no filtering.",
      },
      {
        type: "h2",
        text: "Why Native Shopify Search Falls Short",
      },
      {
        type: "p",
        text: "Shopify's built-in search is adequate for small catalogues but struggles with larger stores. It has limited synonym support, no merchandising rules, weak typo handling, and no analytics. If a customer searches for 'sofa' on a store selling 'sofas' as a collection name, native search may return zero results. That is a lost sale.",
      },
      {
        type: "h2",
        text: "Top Shopify Search Apps",
      },
      {
        type: "ul",
        items: [
          "Searchie — AI-powered search with semantic understanding, excellent for fashion and complex catalogues",
          "Boost Commerce — strong filtering, merchandising rules, and analytics dashboard",
          "Searchanise — affordable option with good typo tolerance and query suggestions",
          "Fast Simon — AI merchandising with personalisation, suited to larger stores",
          "Klevu — enterprise-grade semantic search with strong analytics",
        ],
      },
      {
        type: "h2",
        text: "Key Features to Look For",
      },
      {
        type: "p",
        text: "When evaluating a search app, prioritise: typo tolerance (handles 'beuatiful' → 'beautiful'), synonym management (sofa/couch, trousers/pants), zero-results handling (shows alternative products rather than a blank page), and search analytics so you can see what your customers are looking for. Merchandising rules — pinning specific products to the top of search results — are valuable for promotional periods.",
      },
      {
        type: "callout",
        text: "Analysing your zero-results search queries is one of the fastest ways to identify product gaps and missing catalogue terms. Review this report weekly.",
      },
      {
        type: "h2",
        text: "Quick Wins Without an App",
      },
      {
        type: "ul",
        items: [
          "Add common synonyms to product tags and descriptions",
          "Ensure product titles include the terms customers actually use to search",
          "Use Shopify's Search & Discovery app (free) for basic synonym and filter configuration",
          "Review your top exit pages — search result pages with high exit rates signal poor relevance",
        ],
      },
    ],
  },

  {
    slug: "shopify-analytics-apps",
    title: "Shopify Analytics Apps Beyond Google Analytics",
    category: "Tips & Tricks",
    description:
      "A roundup of the best analytics tools for Shopify stores that go beyond GA4 — from revenue attribution to cohort analysis and real-time dashboards.",
    readTime: "6 min read",
    date: "2024-12-31",
    image:
      "/images/articles/pexels-3184291.webp",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#fef3c7",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "GA4 is useful, but it was not built for ecommerce operations. It tells you what pages are visited but struggles to answer the questions that actually drive decisions: which customers have the best LTV, what is my true CAC by channel, which product combinations drive repeat purchase? These answers require purpose-built ecommerce analytics.",
      },
      {
        type: "h2",
        text: "Glew.io",
      },
      {
        type: "p",
        text: "Glew is one of the most comprehensive ecommerce analytics platforms available for Shopify. It pulls data from your store, ad channels, email platform, and inventory systems to give a unified view of performance. Its cohort analysis — showing how customer behaviour changes over time — is particularly valuable for subscription and repeat-purchase brands.",
      },
      {
        type: "h2",
        text: "Triple Whale",
      },
      {
        type: "p",
        text: "Triple Whale has become the de facto standard for DTC brands running paid social. Its pixel provides first-party attribution that survived iOS 14 changes, and its Sonar product gives survey-based attribution data to supplement modelled numbers. The summary dashboard is excellent for founders who want a single-number daily pulse.",
      },
      {
        type: "h2",
        text: "Northbeam",
      },
      {
        type: "p",
        text: "Northbeam is the analytics platform of choice for higher-volume DTC brands spending £50K+ per month on paid media. Its multi-touch attribution model is more sophisticated than last-click GA4, and its media mix modelling feature helps allocate budget across channels more efficiently. It comes with a premium price tag to match.",
      },
      {
        type: "ul",
        items: [
          "Glew — best for comprehensive store analytics and cohort analysis",
          "Triple Whale — best for paid social attribution and DTC dashboards",
          "Northbeam — best for advanced multi-touch attribution at scale",
          "Lifetimely — best for LTV and profitability analysis",
          "Polar Analytics — strong data warehouse approach, great for tech-savvy teams",
        ],
      },
      {
        type: "callout",
        text: "Most brands at £500K+ annual revenue are leaving significant budget efficiency on the table by relying solely on in-platform ad reporting for attribution decisions.",
      },
      {
        type: "h2",
        text: "Starting Point Recommendation",
      },
      {
        type: "p",
        text: "For most Shopify brands under £1M, Glew's Standard plan covers the essential bases. For brands spending heavily on Meta and Google, add Triple Whale. At £2M+ with significant paid media, Northbeam justifies its cost. In all cases, supplement with Shopify's native analytics for operational data — it remains excellent for inventory, fulfilment, and product reporting.",
      },
    ],
  },

  {
    slug: "brightpearl-shopify-plus-guide",
    title: "How to Use Brightpearl with Shopify Plus",
    category: "Guides",
    description:
      "A complete guide to integrating Brightpearl with Shopify Plus — covering order management, inventory sync, accounting automation, and when Brightpearl is the right choice.",
    readTime: "7 min read",
    date: "2024-12-18",
    image:
      "/images/articles/pexels-1148820.webp",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#cffafe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Brightpearl is a retail operations platform that sits behind Shopify Plus, handling the operational complexity that Shopify itself does not cover: multi-channel order management, warehouse operations, demand forecasting, and accounting automation. For brands operating across multiple channels with significant order volume, the combination of Shopify Plus and Brightpearl is a powerful operational stack.",
      },
      {
        type: "h2",
        text: "What Brightpearl Does That Shopify Cannot",
      },
      {
        type: "ul",
        items: [
          "Multi-channel order management (Shopify, Amazon, eBay, B2B in one view)",
          "Advanced warehouse management with pick, pack, and despatch workflows",
          "Demand forecasting based on sales velocity and seasonality",
          "Native accounting with automated reconciliation",
          "Real-time margin reporting at order level",
        ],
      },
      {
        type: "h2",
        text: "Integration Architecture",
      },
      {
        type: "p",
        text: "Brightpearl connects to Shopify Plus via their native app, available in the Shopify App Store. The integration syncs orders bidirectionally — orders placed on Shopify flow into Brightpearl for fulfilment processing, and tracking information is pushed back to Shopify to trigger customer notifications. Inventory levels sync in real time, preventing oversells across channels.",
      },
      {
        type: "h2",
        text: "Setting Up the Integration",
      },
      {
        type: "p",
        text: "Installation is straightforward, but configuration requires careful mapping: product IDs must match across both platforms, location mapping must be correct, and order routing rules need to reflect your actual fulfilment workflow. Budget two to four weeks for a thorough implementation — rushing leads to duplicate orders and inventory discrepancies that are painful to unwind.",
      },
      {
        type: "callout",
        text: "Run parallel operations for two weeks post-integration — let both systems process orders simultaneously and compare outputs before cutting over fully.",
      },
      {
        type: "h2",
        text: "When Brightpearl Makes Sense",
      },
      {
        type: "p",
        text: "Brightpearl is not right for every brand. It is best suited to operations processing 500+ orders per week across multiple channels, managing inventory across multiple locations, and requiring tight accounting automation. Below that volume, Shopify's native admin plus a solid spreadsheet process often serves better — and costs significantly less.",
      },
      {
        type: "h2",
        text: "Common Implementation Mistakes",
      },
      {
        type: "ul",
        items: [
          "Mismatched SKU formats between Shopify and Brightpearl",
          "Not configuring currency rounding rules before multi-currency launch",
          "Insufficient staff training before go-live",
          "Failing to test returns workflows — the most complex integration scenario",
        ],
      },
    ],
  },

  {
    slug: "shopify-crm-integration",
    title: "How to Integrate Shopify with Your CRM",
    category: "Guides",
    description:
      "A practical guide to connecting Shopify with popular CRM platforms including HubSpot, Salesforce, and Klaviyo — with advice on data mapping and use cases.",
    readTime: "7 min read",
    date: "2024-12-05",
    image:
      "/images/articles/pexels-3861964.webp",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "A CRM connected to your Shopify store turns your customer database into a revenue asset. Without integration, marketing, sales, and support teams operate from different views of the customer — leading to generic communications, duplicated effort, and missed retention opportunities. Getting the integration right requires clear thinking about data flow, field mapping, and use cases before you configure anything.",
      },
      {
        type: "h2",
        text: "Choosing the Right CRM for a Shopify Brand",
      },
      {
        type: "p",
        text: "Most Shopify brands do not need a traditional CRM. Klaviyo functions as a remarkably capable customer data platform — it stores purchase history, segments by behaviour, and drives marketing. Brands with a significant B2B or wholesale element, or those with a dedicated sales team, will benefit from a dedicated CRM. HubSpot and Salesforce are the most common choices at this stage.",
      },
      {
        type: "h2",
        text: "Shopify + Klaviyo Integration",
      },
      {
        type: "p",
        text: "Klaviyo's Shopify integration is native, real-time, and extremely deep. It syncs customers, orders, products, and events (viewed product, added to cart, checkout started) automatically. Once connected, you can build segments based on any combination of Shopify data: number of orders, lifetime spend, last purchase date, specific products purchased, and more.",
      },
      {
        type: "h2",
        text: "Shopify + HubSpot Integration",
      },
      {
        type: "p",
        text: "HubSpot's Shopify connector (native, available in the Shopify App Store) syncs contacts, deals, and line items. It is best suited to brands with a wholesale or B2B dimension where an account management or sales pipeline view is valuable. The bidirectional sync means a sales rep updating a contact's deal stage in HubSpot is reflected back in the customer record on Shopify.",
      },
      {
        type: "ul",
        items: [
          "Map Shopify customer tags to HubSpot contact properties for segmentation",
          "Create HubSpot deals for high-value B2B orders automatically",
          "Use HubSpot sequences for B2B follow-up triggered by Shopify purchase",
          "Sync Shopify product catalogue to HubSpot for quote and proposal workflows",
        ],
      },
      {
        type: "callout",
        text: "The most common integration mistake is syncing too much data too early. Define your core use cases first, then map only the fields required to support them.",
      },
      {
        type: "h2",
        text: "Data Mapping Best Practices",
      },
      {
        type: "ul",
        items: [
          "Define a single source of truth for each data field before syncing",
          "Map Shopify order tags to CRM deal stages consistently",
          "Establish a contact deduplication strategy before any bulk sync",
          "Document your integration architecture — sync direction, field mapping, and trigger events",
        ],
      },
    ],
  },

  {
    slug: "shopify-pos-hardware-guide",
    title: "Shopify POS Hardware: Choosing the Right Setup",
    category: "Guides",
    description:
      "A guide to the full range of Shopify POS hardware — from the card reader to complete retail counter setups — and how to choose the right configuration for your store.",
    readTime: "7 min read",
    date: "2024-11-22",
    image:
      "/images/articles/pexels-3184360.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#e5e5e5",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Shopify POS is one of the most underrated parts of the Shopify ecosystem. For brands operating both online and in physical retail, a unified POS and ecommerce platform means a single inventory view, consistent customer profiles, and one reporting dashboard. But hardware selection matters — choosing the wrong setup leads to slow service, staff frustration, and a poor customer experience at the counter.",
      },
      {
        type: "h2",
        text: "Shopify POS Hardware Range",
      },
      {
        type: "ul",
        items: [
          "Shopify Tap & Chip Reader — entry-level, connects via Bluetooth, suits pop-ups and markets",
          "Shopify POS Go — standalone Android device with built-in card reader, ideal for floor staff",
          "Shopify POS Terminal — countertop chip and pin with customer-facing display",
          "Shopify Retail Stand for iPad — full counter setup with rotating iPad stand",
          "Shopify Barcode Scanner — wired or wireless, integrates directly with POS inventory",
          "Shopify Receipt Printer — thermal printer for physical receipts",
          "Shopify Cash Drawer — connects to receipt printer, opens automatically on cash sale",
        ],
      },
      {
        type: "h2",
        text: "Choosing the Right Configuration",
      },
      {
        type: "p",
        text: "The right setup depends entirely on your retail format. For a market stall or pop-up event, a POS Go device plus the Tap & Chip Reader is lightweight and sufficient. For a permanent retail unit with a service counter, the full iPad stand, POS Terminal, barcode scanner, receipt printer, and cash drawer setup creates a professional, efficient checkout experience.",
      },
      {
        type: "h2",
        text: "Shopify POS Go: The Standout Device",
      },
      {
        type: "p",
        text: "POS Go is particularly noteworthy for brands with floor staff who need to assist customers throughout the store. Rather than taking customers to a fixed counter, staff can complete the sale anywhere using POS Go's built-in scanner and card reader. This is standard practice in premium retail and noticeably reduces queue times.",
      },
      {
        type: "callout",
        text: "Brands using mobile POS Go devices alongside a fixed counter report average transaction times 40% shorter than counter-only setups during peak periods.",
      },
      {
        type: "h2",
        text: "Network and Connectivity Requirements",
      },
      {
        type: "p",
        text: "Shopify POS requires a stable internet connection for card processing. Always have a backup — a mobile hotspot or secondary broadband line. Shopify POS has an offline mode that records sales and syncs when connectivity returns, but card payments require active connectivity. Test your setup during your busiest expected period before relying on it for a launch.",
      },
      {
        type: "h2",
        text: "Where to Buy",
      },
      {
        type: "p",
        text: "All Shopify hardware is available directly from Shopify's hardware store at shop.shopify.com. Third-party resellers are available in the UK, but Shopify hardware is designed to work exclusively with Shopify POS — do not attempt to use unsupported card readers, as these will not work with Shopify Payments.",
      },
    ],
  },

  {
    slug: "ugc-strategy-shopify",
    title: "User-Generated Content Strategy for Shopify Stores",
    category: "Tips & Tricks",
    description:
      "How to build a UGC strategy for your Shopify store — collecting customer photos, videos, and reviews that drive trust, improve conversion, and reduce ad creative costs.",
    readTime: "6 min read",
    date: "2024-11-09",
    image:
      "/images/articles/pexels-196644.webp",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "User-generated content is one of the most trusted forms of marketing available to a Shopify brand — and one of the most cost-effective. Customers buying after seeing UGC convert at higher rates, have higher LTV, and generate fewer returns. Yet most brands leave UGC on the table, hoping customers will post without any structured programme to encourage it.",
      },
      {
        type: "h2",
        text: "Why UGC Works",
      },
      {
        type: "p",
        text: "The psychology is straightforward: potential customers trust other customers more than they trust brands. A real photo of a product in someone's home is more persuasive than a studio shot. UGC also provides SEO value through natural language in reviews, fresh content signals for Google, and rich snippets in search results.",
      },
      {
        type: "h2",
        text: "Collecting UGC Systematically",
      },
      {
        type: "ul",
        items: [
          "Post-purchase email requesting a photo or video with their order",
          "Packaging insert card with a QR code linking to a review or social tag",
          "Branded hashtag campaign with a monthly giveaway incentive",
          "Loyalty points awarded for review submissions with photos",
          "Klaviyo flow triggered 14 days post-delivery for photo review request",
        ],
      },
      {
        type: "h2",
        text: "Deploying UGC on Your Shopify Store",
      },
      {
        type: "p",
        text: "Collected UGC should appear on your highest-traffic pages: the homepage, product pages, and collection pages. Photo reviews via Yotpo or Okendo can be displayed in an Instagram-style grid on product pages. A dedicated social proof section on the homepage — featuring real customer photos with quotes — builds brand credibility from the first scroll.",
      },
      {
        type: "callout",
        text: "Product pages featuring customer photos alongside professional imagery see up to 29% higher conversion rates — the combination provides both aspiration and reality.",
      },
      {
        type: "h2",
        text: "UGC in Paid Advertising",
      },
      {
        type: "p",
        text: "UGC is some of the highest-performing ad creative available on Meta and TikTok. Unboxing videos, before-and-after photos, and genuine product demonstrations outperform polished brand creative in most DTC categories. Always obtain explicit permission from creators before using their content in paid media — a simple DM or email confirmation is sufficient for most purposes.",
      },
      {
        type: "h2",
        text: "Rights Management",
      },
      {
        type: "ul",
        items: [
          "Include UGC rights language in your review submission flow",
          "Seek specific paid media rights for any content you plan to run as ads",
          "Credit the creator in organic social reposts",
          "Store all permissions in a centralised document or UGC management platform",
        ],
      },
    ],
  },

  {
    slug: "shopify-email-deliverability",
    title: "Email Deliverability for Shopify: Keeping Emails Out of Spam",
    category: "Tips & Tricks",
    description:
      "A practical guide to email deliverability for Shopify brands — covering DNS authentication, list hygiene, sending practices, and what to do if you land in spam.",
    readTime: "6 min read",
    date: "2024-10-27",
    image:
      "/images/articles/pexels-1779487.webp",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#e0e7ff",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Email deliverability is the invisible force behind email revenue. A brand with a 40% open rate on a 50,000-subscriber list is leaving a significant amount on the table if 20% of those emails never reach the inbox. Deliverability problems compound over time — and are significantly easier to prevent than to fix after the damage is done.",
      },
      {
        type: "h2",
        text: "The Three Pillars of Deliverability",
      },
      {
        type: "p",
        text: "Deliverability rests on three foundations: authentication (proving you are who you say you are), reputation (your sending history and engagement rates), and content (what is in the emails you send). Problems in any one area can land you in spam; problems across all three can result in domain-level blocking.",
      },
      {
        type: "h2",
        text: "DNS Authentication Setup",
      },
      {
        type: "ul",
        items: [
          "SPF record — lists servers authorised to send email from your domain",
          "DKIM record — cryptographic signature proving email has not been tampered with",
          "DMARC record — policy for how receiving servers should handle authentication failures",
          "Custom sending domain in Klaviyo — do not send from klaviyo.com subdomains",
        ],
      },
      {
        type: "h2",
        text: "List Hygiene",
      },
      {
        type: "p",
        text: "Sending to disengaged subscribers damages your sender reputation. Build a suppression segment in Klaviyo for contacts who have not opened in 180 days — send them a single win-back email, then suppress them if they do not re-engage. A smaller, engaged list consistently outperforms a large, unengaged one on every metric that matters.",
      },
      {
        type: "callout",
        text: "Google and Yahoo's 2024 sender requirements mandate a DMARC policy, spam rate below 0.3%, and easy one-click unsubscribe for bulk senders. These are now requirements, not recommendations.",
      },
      {
        type: "h2",
        text: "Sending Practices That Protect Reputation",
      },
      {
        type: "ul",
        items: [
          "Warm up new sending domains gradually — start with 500 sends/day and double weekly",
          "Segment campaigns to your most engaged contacts first",
          "Send at consistent times — erratic volume spikes trigger spam filters",
          "Monitor spam complaint rates in Google Postmaster Tools",
          "Never purchase email lists — it will destroy a healthy domain quickly",
        ],
      },
      {
        type: "h2",
        text: "Diagnosing a Deliverability Problem",
      },
      {
        type: "p",
        text: "If open rates drop suddenly, check Google Postmaster Tools and Microsoft SNDS for domain reputation flags. Run your sending IP through MXToolbox to check for blacklist entries. If you are listed, identify the cause (usually a spam complaint spike or sending to bounced addresses), remediate it, and then request delisting. Most blacklist operators delist within 24–48 hours once the underlying issue is resolved.",
      },
    ],
  },

  {
    slug: "shopify-affiliate-marketing",
    title: "Affiliate Marketing on Shopify: Getting Started",
    category: "Guides",
    description:
      "How to launch an affiliate marketing programme on Shopify — covering platform options, commission structures, affiliate recruitment, and how to measure performance.",
    readTime: "7 min read",
    date: "2024-10-14",
    image:
      "/images/articles/pexels-3184291.webp",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#ffedd5",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Affiliate marketing is one of the most capital-efficient customer acquisition channels for Shopify brands. You pay only when a sale is made, which means zero upfront risk and naturally positive unit economics. Yet many brands either avoid it — assuming it is too complex to set up — or run it poorly, attracting the wrong affiliates and generating low-quality traffic.",
      },
      {
        type: "h2",
        text: "How Affiliate Marketing Works on Shopify",
      },
      {
        type: "p",
        text: "Affiliates receive a unique tracking link or discount code. When a customer purchases using that link or code, the affiliate earns a commission — typically a percentage of the order value. Shopify does not have native affiliate tracking, so you will need a dedicated app or network to manage attribution, payouts, and affiliate dashboards.",
      },
      {
        type: "h2",
        text: "Platform Options",
      },
      {
        type: "ul",
        items: [
          "UpPromote — the most popular Shopify affiliate app, full-featured and affordable",
          "Refersion — stronger analytics and influencer management features",
          "Goaffpro — good free tier for brands just starting out",
          "Impact.com — enterprise affiliate network with access to established publishers",
          "AWIN — major UK affiliate network, well suited to established brands",
        ],
      },
      {
        type: "h2",
        text: "Commission Structure",
      },
      {
        type: "p",
        text: "Your commission rate needs to be attractive enough to motivate affiliates but sustainable within your margins. Most UK ecommerce brands offer 8–15% commission for consumer products. For higher-margin categories (beauty, supplements, digital products), 15–25% is common. Avoid flat-rate commissions — percentage-based rates naturally reward affiliates for promoting higher-value products.",
      },
      {
        type: "callout",
        text: "Offer a higher commission tier for affiliates who drive over 20 sales per month — performance-based tiers significantly increase affiliate motivation.",
      },
      {
        type: "h2",
        text: "Recruiting Affiliates",
      },
      {
        type: "p",
        text: "Start with your existing customer base. Your happiest customers are your best potential affiliates — they already know and trust your products. Email your top 10% of customers by spend with a personal invitation to your affiliate programme. Beyond your customer base, reach out to bloggers, review sites, and micro-influencers whose audience matches your target customer.",
      },
      {
        type: "h2",
        text: "Measuring Performance",
      },
      {
        type: "ul",
        items: [
          "Track affiliate revenue as a percentage of total revenue (target 5–15%)",
          "Monitor average order value by affiliate — lower AOV may indicate poor product fit",
          "Review return rates by affiliate — high returns may indicate misleading promotion",
          "Calculate effective CPA per affiliate and compare versus other channels",
          "Audit affiliate content quarterly for brand compliance",
        ],
      },
    ],
  },

  {
    slug: "push-notifications-shopify",
    title: "Push Notifications for Shopify: A Practical Guide",
    category: "Tips & Tricks",
    description:
      "How to use web and mobile push notifications on Shopify to recover abandoned carts, announce sales, and re-engage lapsed customers without email.",
    readTime: "5 min read",
    date: "2024-10-01",
    image:
      "/images/articles/pexels-3182812.webp",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Push notifications are one of the most underused channels in ecommerce marketing. Unlike email, they do not require an inbox — they appear directly on a customer's device. Opt-in rates are lower than email, but the customers who do opt in tend to be your most engaged — and they convert at significantly higher rates when messaged relevantly.",
      },
      {
        type: "h2",
        text: "Web Push vs. App Push",
      },
      {
        type: "p",
        text: "Web push notifications work through the browser and do not require a mobile app. A customer who visits your Shopify store and allows notifications can be reached on desktop and mobile via their browser. App push requires a branded mobile app. For most Shopify brands without a dedicated app, web push is the practical starting point.",
      },
      {
        type: "h2",
        text: "Recommended Apps",
      },
      {
        type: "ul",
        items: [
          "PushOwl — the most popular Shopify push notification app, strong automation",
          "Firepush — combines push, SMS, and email in one platform",
          "OneSignal — flexible developer-friendly option with generous free tier",
          "Webpushr — good for brands wanting granular segmentation",
        ],
      },
      {
        type: "h2",
        text: "High-Impact Use Cases",
      },
      {
        type: "p",
        text: "Abandoned cart push notifications typically achieve 10–20% recovery rates — comparable to email but without the inbox competition. Flash sale announcements via push see higher open rates than email for subscribed customers. Back-in-stock alerts are particularly powerful: a customer who has been waiting for a product to return is highly motivated to purchase the moment they are notified.",
      },
      {
        type: "callout",
        text: "PushOwl users report average abandoned cart recovery rates of 12–15% — with the notification appearing within 20 minutes of abandonment.",
      },
      {
        type: "h2",
        text: "Best Practices",
      },
      {
        type: "ul",
        items: [
          "Ask for push opt-in after a customer has demonstrated intent (added to cart or browsed 3+ pages)",
          "Keep notification copy to under 50 characters — it gets truncated on most devices",
          "Include a product image in push notifications where supported",
          "Limit frequency — more than two push notifications per week risks opt-out",
          "Segment by purchase history so notifications are always product-relevant",
        ],
      },
    ],
  },

  {
    slug: "shopify-content-marketing-strategy",
    title: "Content Marketing Strategy for Ecommerce Brands",
    category: "Guides",
    description:
      "A comprehensive guide to building a content marketing strategy for your Shopify brand — from keyword research to editorial calendars and measuring content ROI.",
    readTime: "8 min read",
    date: "2024-09-18",
    image:
      "/images/articles/pexels-3051793.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#dbeafe",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Content marketing is the long game of ecommerce acquisition. It compounds over time — an article ranking on page one today will still drive traffic in three years without any additional spend. For Shopify brands over-reliant on paid social, building organic content is one of the most powerful ways to reduce CAC and increase marketing resilience.",
      },
      {
        type: "h2",
        text: "Start with Keyword Research",
      },
      {
        type: "p",
        text: "Every piece of content should begin with a keyword. Use Ahrefs, Semrush, or free tools like Google Search Console and Keyword Planner to identify search terms your potential customers are using. Focus on three types: informational (how to clean a cast iron pan), commercial (best cast iron pan UK), and transactional (buy cast iron pan). Your blog targets informational and commercial; your product and collection pages target transactional.",
      },
      {
        type: "h2",
        text: "Content Types That Drive Ecommerce Traffic",
      },
      {
        type: "ul",
        items: [
          "Buying guides and comparisons (high commercial intent, excellent for category SEO)",
          "How-to tutorials related to your products (builds expertise and topical authority)",
          "Trend and industry roundups (attracts links and social shares)",
          "Customer stories and case studies (trust-building, conversion-focused)",
          "Gift guides with seasonal targeting (high commercial intent in Q4)",
        ],
      },
      {
        type: "h2",
        text: "Building an Editorial Calendar",
      },
      {
        type: "p",
        text: "Consistency beats volume for content marketing. Two high-quality articles per month outperform eight rushed ones. Build a rolling three-month editorial calendar with target keywords, content type, word count target, and publishing date for each piece. Align seasonal content — gift guides, trend reports — with the relevant trading periods. Assign each piece to a writer and a reviewer before it is commissioned.",
      },
      {
        type: "callout",
        text: "Brands that publish consistently for 12+ months see organic traffic compound at an average 3–4x rate versus brands that publish sporadically at higher volume.",
      },
      {
        type: "h2",
        text: "On-Page Optimisation for Shopify Blog Posts",
      },
      {
        type: "ul",
        items: [
          "Include target keyword in the H1, first paragraph, and at least one H2",
          "Optimise meta title (55–60 chars) and meta description (150–160 chars)",
          "Add internal links to relevant product and collection pages",
          "Use descriptive alt text on all images",
          "Ensure articles load in under 2 seconds on mobile",
        ],
      },
      {
        type: "h2",
        text: "Measuring Content ROI",
      },
      {
        type: "p",
        text: "Use Google Search Console to track impressions and clicks per article. Set up GA4 goals to track how many sessions that begin on blog content end in a purchase, and with what time lag. Content-assisted conversions are commonly under-reported — a customer who reads your buying guide and returns two weeks later to buy will often appear as direct traffic in last-click attribution.",
      },
      {
        type: "h2",
        text: "Promotion and Distribution",
      },
      {
        type: "p",
        text: "Writing the article is half the job. Each piece should be emailed to your subscribers, shared across social channels, and repurposed into short-form video where feasible. For articles targeting competitive keywords, a basic link building outreach to relevant blogs and publications significantly accelerates ranking. Content that earns links ranks faster and holds positions more stably.",
      },
    ],
  },

  {
    slug: "shopify-barcode-inventory-tracking",
    title: "Shopify Barcode Scanning and Inventory Tracking",
    category: "Tips & Tricks",
    description:
      "How to use barcode scanning with Shopify for faster stock counts, accurate receiving, and streamlined POS checkout — including hardware and app recommendations.",
    readTime: "5 min read",
    date: "2024-09-05",
    image:
      "/images/articles/pexels-1181406.webp",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#cffafe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Manual inventory management at scale is a reliable source of errors. Miskeyed SKUs, miscounted stock, and delayed receiving all compound into inaccurate inventory levels — which lead to oversells, lost sales, and customer complaints. Integrating barcode scanning into your Shopify operation replaces manual data entry with a scan, reducing errors to near zero.",
      },
      {
        type: "h2",
        text: "Barcodes in Shopify",
      },
      {
        type: "p",
        text: "Shopify stores a barcode field (EAN, UPC, or custom) on each product variant. Once populated, this barcode drives your POS checkout, inventory counts, and receiving workflows. If your products do not have manufacturer barcodes, you can generate and print custom barcodes directly from Shopify Admin under Products > Print labels.",
      },
      {
        type: "h2",
        text: "Hardware Options",
      },
      {
        type: "ul",
        items: [
          "Shopify's own barcode scanner — wired USB, integrates natively with Shopify POS",
          "Socket Mobile S700 — Bluetooth scanner, pairs with iPad for mobile stocktaking",
          "Zebra DS2208 — high-durability option for warehouse environments",
          "Honeywell Voyager — reliable entry-level choice for retail counter use",
        ],
      },
      {
        type: "h2",
        text: "Stock Takes with Stocky",
      },
      {
        type: "p",
        text: "Shopify's free Stocky app (available for Shopify POS Pro subscribers) enables barcode-driven stock counts. Staff scan each item; Stocky compares the scanned count against Shopify's recorded inventory and surfaces discrepancies. Running quarterly full counts and monthly cycle counts for fast-moving SKUs is standard practice for brands with 500+ products.",
      },
      {
        type: "callout",
        text: "Brands using barcode-driven stock counts report inventory accuracy rates above 98% — versus 91% for manual count processes.",
      },
      {
        type: "h2",
        text: "Receiving Purchase Orders",
      },
      {
        type: "p",
        text: "When stock arrives from a supplier, scanning items against a Shopify purchase order (created in Stocky or a connected WMS) ensures only the correct items and quantities are received into your inventory. Discrepancies — short-shipped items, incorrect products — are flagged immediately rather than discovered weeks later during a stock count.",
      },
      {
        type: "h2",
        text: "Advanced: WMS Integration",
      },
      {
        type: "ul",
        items: [
          "For warehouses processing 100+ orders per day, a dedicated WMS adds barcode-driven pick, pack, and despatch workflows",
          "Mintsoft, Peoplevox, and Linnworks all integrate with Shopify via API",
          "RF scanning devices replace paper pick lists with scan-to-confirm workflows",
          "Putaway scanning ensures new stock is located correctly in your warehouse from day one",
        ],
      },
    ],
  },
];

export default posts;
