import type { BlogPost } from "../blog-types";

const posts: BlogPost[] = [
  {
    slug: "shopify-flow-saves-20-hours-week",
    title: "How We Used Shopify Flow to Save 20 Hours Per Week",
    category: "Case Studies",
    description:
      "A UK homewares brand was drowning in manual admin. We automated their order, inventory, and tagging workflows with Shopify Flow — here's exactly what we built.",
    readTime: "5 min read",
    date: "2024-07-20",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "When a mid-sized homewares brand came to us earlier this year, their operations team was spending roughly 20 hours a week on tasks that should have been automated years ago: manually tagging high-value customers, emailing the warehouse team when stock hit reorder levels, and flagging risky orders for review. Every one of those tasks was rule-based and repetitive — a perfect candidate for Shopify Flow.",
      },
      {
        type: "h2",
        text: "The Challenge",
      },
      {
        type: "p",
        text: "The brand was processing around 400 orders a day across three product lines. Their team of two operations coordinators was spending mornings working through a checklist of checks that had grown organically over two years. There was no documentation — just tribal knowledge and a lot of stress around peak periods.",
      },
      {
        type: "ul",
        items: [
          "Manual customer tagging based on lifetime spend thresholds",
          "Handwritten stock alerts emailed to the warehouse",
          "Order fraud checks performed individually for orders over £150",
          "Post-purchase follow-up tasks created manually in their helpdesk",
        ],
      },
      {
        type: "h2",
        text: "Our Approach",
      },
      {
        type: "p",
        text: "We audited every manual process the operations team performed over a two-week period. From that audit, we mapped 11 distinct workflows that could be automated entirely with Shopify Flow. We prioritised by time saved and risk reduction.",
      },
      {
        type: "h3",
        text: "Workflow 1: Customer Loyalty Tagging",
      },
      {
        type: "p",
        text: "We built a Flow trigger on every order completion that checked cumulative spend. Customers crossing the £250, £500, and £1,000 thresholds were automatically tagged and enrolled into the corresponding Klaviyo segment for loyalty communications.",
      },
      {
        type: "h3",
        text: "Workflow 2: Inventory Reorder Alerts",
      },
      {
        type: "p",
        text: "Using Flow's inventory triggers, we set variant-level reorder points. When stock dipped below threshold, a Slack message was sent directly to the buying team with the SKU, current stock level, and a link to the product in Shopify admin. No more morning email triage.",
      },
      {
        type: "h3",
        text: "Workflow 3: High-Risk Order Holding",
      },
      {
        type: "p",
        text: "Orders flagged as high-risk by Shopify's fraud detection were automatically tagged, payment capture was delayed, and an internal task was created in their helpdesk tool via a webhook. The team reviewed only the genuinely suspicious orders rather than screening everything manually.",
      },
      {
        type: "callout",
        text: "After go-live, the operations team reclaimed 20 hours per week. That's equivalent to half a full-time role redirected to customer experience work.",
      },
      {
        type: "h2",
        text: "The Results",
      },
      {
        type: "ul",
        items: [
          "20 hours per week saved across the operations team",
          "Zero missed reorder alerts in the two months since launch",
          "Fraud-related chargebacks reduced by 60% in the first quarter",
          "Loyalty email open rates up 18% due to more accurate segmentation",
        ],
      },
      {
        type: "quote",
        text: "We didn't realise how much time we were losing until it was given back to us. The team is calmer, and we're actually thinking strategically rather than just surviving.",
      },
    ],
  },
  {
    slug: "food-brand-international-expansion-shopify",
    title: "A UK Food Brand's International Expansion on Shopify Markets",
    category: "Case Studies",
    description:
      "We helped a specialty food brand expand into the EU and US using Shopify Markets, localising pricing, currency, and checkout for each region from a single store.",
    readTime: "6 min read",
    date: "2024-07-07",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "A speciality condiments brand based in Yorkshire had been shipping internationally for years — but their process was a patchwork of manual workarounds. Currency conversion was handled by a third-party app that added latency, EU customers were hitting the UK checkout with no duty messaging, and their US traffic had a bounce rate 34% higher than domestic. They came to us wanting to fix the experience properly using Shopify Markets.",
      },
      {
        type: "h2",
        text: "The Challenge",
      },
      {
        type: "p",
        text: "The brand had three distinct international segments they wanted to serve: the EU (primarily Germany, France, and the Netherlands), the US, and Australia. Each market had different pricing expectations, tax requirements, and checkout norms. Running separate stores wasn't viable — they had one small marketing team and wanted unified reporting.",
      },
      {
        type: "h2",
        text: "Shopify Markets Configuration",
      },
      {
        type: "p",
        text: "We migrated the store to Shopify Plus to unlock the full Shopify Markets feature set and began configuring each market individually. The process took four weeks from audit to launch.",
      },
      {
        type: "ul",
        items: [
          "Local currency pricing with rounding rules per market (e.g. €X.95 in EU, $X.99 in US)",
          "Duties and import taxes shown at checkout for EU and AU markets",
          "Market-specific domains: .de subdirectory for Germany, /us/ for the US",
          "Translated product metafields for German using DeepL integration",
          "Geo-redirect logic with manual override to avoid frustrating repeat visitors",
        ],
      },
      {
        type: "h3",
        text: "Pricing Strategy",
      },
      {
        type: "p",
        text: "Rather than using automatic exchange rate conversion, we worked with the client to set fixed market prices reflecting local competitive positioning. Their premium 250ml hot sauce sat at £8.50 in the UK, but we priced it at $14.99 in the US and €11.50 in core EU markets — both above direct conversion but in line with what comparable artisan condiments command in those markets.",
      },
      {
        type: "h3",
        text: "Duties-Inclusive Checkout",
      },
      {
        type: "p",
        text: "One of the biggest friction points for EU customers post-Brexit had been unexpected charges on delivery. We enabled Shopify's landed cost feature, collecting duties at checkout for EU orders. This eliminated delivery surprises entirely and reduced the rate of refused deliveries to near zero.",
      },
      {
        type: "callout",
        text: "EU conversion rate increased by 41% within 60 days of launch, driven almost entirely by the removal of post-checkout duty surprises.",
      },
      {
        type: "h2",
        text: "Results After 90 Days",
      },
      {
        type: "ul",
        items: [
          "EU revenue up 67% year-on-year in the quarter post-launch",
          "US bounce rate reduced from 54% to 31%",
          "Refused EU deliveries down from ~8% to under 1%",
          "International revenue share grew from 22% to 38% of total",
        ],
      },
      {
        type: "quote",
        text: "We always knew there was demand internationally — we just weren't serving it properly. Shopify Markets gave us the infrastructure to actually act on it.",
      },
    ],
  },
  {
    slug: "checkout-redesign-25-percent-revenue",
    title: "How We Redesigned Checkout and Increased Revenue by 25%",
    category: "Case Studies",
    description:
      "By rebuilding a fashion brand's Shopify Plus checkout with Checkout Extensibility, we reduced drop-off and added £180k in annual revenue without increasing traffic.",
    readTime: "5 min read",
    date: "2024-06-24",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A womenswear brand with a strong organic following was converting at 1.9% site-wide — reasonable, but their checkout abandonment rate told a different story. Nearly 72% of customers who reached the checkout information page were not completing their purchase. The problem wasn't awareness or intent — it was the checkout itself.",
      },
      {
        type: "h2",
        text: "Diagnosing the Abandonment",
      },
      {
        type: "p",
        text: "Before touching a single line of code, we ran a structured audit: session recordings, heatmaps, exit surveys, and a Hotjar poll served on the checkout page asking a single question — 'What's stopping you from completing your order?' The answers were illuminating.",
      },
      {
        type: "ul",
        items: [
          "38% cited unexpected shipping costs appearing at payment step",
          "22% said they couldn't find their preferred payment method quickly enough",
          "17% reported confusion about the returns policy",
          "14% said the checkout felt untrustworthy compared to the rest of the site",
        ],
      },
      {
        type: "h2",
        text: "The Rebuild",
      },
      {
        type: "p",
        text: "Using Shopify Plus's Checkout Extensibility (available for Plus merchants since late 2023), we rebuilt the checkout experience from the ground up — without touching the underlying Liquid checkout template, ensuring upgrade compatibility.",
      },
      {
        type: "h3",
        text: "Shipping Transparency",
      },
      {
        type: "p",
        text: "We added a checkout UI extension in the cart that showed the exact shipping cost and estimated delivery date before the customer entered their details. A 'free shipping progress bar' showing proximity to the £75 free shipping threshold drove a measurable increase in AOV as a side benefit.",
      },
      {
        type: "h3",
        text: "Payment Method Visibility",
      },
      {
        type: "p",
        text: "We surfaced Klarna, PayPal, and Apple Pay icons prominently on the cart drawer and checkout header — not buried at the payment step. Klarna's instalment messaging was added to product pages and the cart, reducing the perceived cost of higher-ticket items.",
      },
      {
        type: "h3",
        text: "Trust Signals in Checkout",
      },
      {
        type: "p",
        text: "Using checkout UI extensions, we added a collapsible returns policy summary, a Trustpilot star rating widget, and a security badge block. These additions matched the aesthetic of the storefront precisely, resolving the 'feels untrustworthy' feedback.",
      },
      {
        type: "callout",
        text: "Checkout completion rate moved from 28% to 49% within 45 days. On their monthly order volume, that translated to an additional £15,000 in revenue per month.",
      },
      {
        type: "h2",
        text: "12-Month Impact",
      },
      {
        type: "ul",
        items: [
          "Revenue up 25% year-on-year with no increase in ad spend",
          "Checkout completion rate: 28% → 49%",
          "AOV increased by £6.40 driven by shipping threshold messaging",
          "Klarna adoption up 44%, reducing cart abandonment on £100+ orders",
        ],
      },
    ],
  },
  {
    slug: "wholesale-operations-shopify-plus-b2b",
    title: "Scaling Wholesale Operations with Shopify Plus B2B",
    category: "Case Studies",
    description:
      "A UK skincare brand was managing wholesale on spreadsheets. We migrated them to Shopify Plus B2B, cutting order processing time by 70% and growing wholesale revenue by £400k.",
    readTime: "6 min read",
    date: "2024-06-11",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "A skincare brand with 200+ wholesale stockists across the UK and Ireland had been managing B2B orders entirely offline — price lists sent by email, orders taken via a Google Form, invoices raised manually in Xero. It worked when they had 30 accounts. At 200+, it was a full-time job for two people and a constant source of errors.",
      },
      {
        type: "h2",
        text: "The Problem with Manual Wholesale",
      },
      {
        type: "p",
        text: "When we audited their wholesale operation, we found order error rates running at around 12% — wrong quantities, discontinued SKUs, incorrect pricing tiers. Each error required back-and-forth by email and, on average, delayed fulfilment by two days. For their stockists — many of them independent boutiques with limited storage — this was a source of genuine frustration.",
      },
      {
        type: "ul",
        items: [
          "No self-service ordering: stockists emailed or called to place orders",
          "Five different price lists maintained manually in spreadsheets",
          "No visibility for stockists on order status or tracking",
          "Minimum order value enforced manually at invoice stage",
        ],
      },
      {
        type: "h2",
        text: "Building the B2B Portal",
      },
      {
        type: "p",
        text: "We used Shopify Plus's native B2B features — introduced to the platform in 2023 — to build a fully self-service wholesale portal. The key advantage over third-party B2B apps was native integration with the existing product catalogue, inventory, and fulfilment workflows.",
      },
      {
        type: "h3",
        text: "Company Accounts and Price Lists",
      },
      {
        type: "p",
        text: "We migrated all 200+ wholesale accounts into Shopify's Company model, mapping each to the correct price list based on their tier (standard stockist, premium partner, or anchor account). Price list rules were set as percentage discounts off RRP, meaning price updates cascade automatically when RRP changes.",
      },
      {
        type: "h3",
        text: "Payment Terms",
      },
      {
        type: "p",
        text: "Premium partners and anchor accounts had been on 30-day payment terms. We configured Net 30 payment terms natively within Shopify B2B, allowing orders to be placed without immediate payment and generating a draft order for Xero to pick up automatically via integration.",
      },
      {
        type: "h3",
        text: "Minimum Order Rules",
      },
      {
        type: "p",
        text: "Minimum order values were enforced at checkout with clear messaging, eliminating the awkward post-invoice negotiation that had been a recurring friction point. The portal also surfaced a 'frequently reordered items' section based on each company's order history.",
      },
      {
        type: "callout",
        text: "Within three months of launch, 89% of wholesale orders were being placed self-service through the portal, compared to 0% previously.",
      },
      {
        type: "h2",
        text: "Business Impact",
      },
      {
        type: "ul",
        items: [
          "Order processing time reduced by 70%",
          "Order error rate fell from 12% to under 1%",
          "Wholesale revenue grew £400k in the first year",
          "Two operations staff redeployed to new account development",
        ],
      },
      {
        type: "quote",
        text: "Our stockists love it. They can order at 11pm if they want, check their order status, and see exactly what's in stock. It's transformed those relationships.",
      },
    ],
  },
  {
    slug: "streetwear-brand-tiktok-shopify",
    title: "How a Streetwear Brand Used TikTok Shop and Shopify",
    category: "Case Studies",
    description:
      "A Manchester streetwear label integrated TikTok Shop with Shopify to turn viral moments into instant sales, generating £85k in their first 60 days on the platform.",
    readTime: "5 min read",
    date: "2024-05-29",
    image:
      "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#fef3c7",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "A streetwear brand based in Manchester had built a TikTok following of 180,000 largely by accident — their designer posted styling videos that kept going viral, but none of that attention was converting into sales. The link in bio was pointing to a homepage that lost most mobile visitors within eight seconds. They needed to close the loop between discovery and purchase.",
      },
      {
        type: "h2",
        text: "The Opportunity",
      },
      {
        type: "p",
        text: "TikTok Shop's native checkout allows creators and brands to tag products directly in videos and livestreams, letting viewers purchase without leaving the app. For an impulse-purchase category like streetwear — where a drop can be hot for 48 hours and forgotten by the weekend — removing friction between content and purchase was a significant commercial opportunity.",
      },
      {
        type: "h2",
        text: "The Integration",
      },
      {
        type: "p",
        text: "We connected TikTok Shop to Shopify using the official TikTok channel app. This synced the product catalogue automatically, kept inventory in sync in real time, and routed TikTok orders through Shopify's fulfilment workflow so the operations team had a single view of all orders regardless of channel.",
      },
      {
        type: "ul",
        items: [
          "Full product catalogue sync with TikTok Shop",
          "Real-time inventory updates preventing overselling",
          "Unified order management through Shopify admin",
          "Shopify analytics capturing TikTok as a separate channel for attribution",
        ],
      },
      {
        type: "h3",
        text: "Content Strategy",
      },
      {
        type: "p",
        text: "We advised the brand on a content structure specifically built for TikTok Shop conversion: short 'fit reveal' videos with immediate product tagging, weekly livestream drops for limited-edition pieces, and creator affiliate codes for three micro-influencers in the streetwear space.",
      },
      {
        type: "h3",
        text: "Drop Mechanics",
      },
      {
        type: "p",
        text: "Limited drops were set up in Shopify with a countdown timer section on the product page, and simultaneously listed as TikTok Shop products. The designer announced each drop via a teaser TikTok 24 hours before release — building anticipation that fed both the TikTok Shop and the direct site.",
      },
      {
        type: "callout",
        text: "Their first TikTok-native drop — a 50-piece limited hoodie — sold out in 11 minutes, generating £4,250 in revenue from a single video.",
      },
      {
        type: "h2",
        text: "60-Day Results",
      },
      {
        type: "ul",
        items: [
          "£85,000 revenue generated through TikTok Shop in first 60 days",
          "TikTok now accounts for 38% of total monthly revenue",
          "Average order value on TikTok: £67 (vs £54 on direct site)",
          "Follower count grew from 180k to 290k during the period",
        ],
      },
    ],
  },
  {
    slug: "shopify-app-bloat-performance",
    title: "Reducing Shopify App Bloat: A Performance Case Study",
    category: "Case Studies",
    description:
      "A beauty brand's Shopify store was loading in 6.8 seconds due to app bloat. We audited 34 installed apps, removed 18, and rebuilt key features natively — cutting load time by 60%.",
    readTime: "6 min read",
    date: "2024-05-16",
    image:
      "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#e5e5e5",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "A beauty brand doing £80k/month came to us after their paid social ROAS had been declining steadily for six months. Their team assumed it was a targeting problem. It wasn't. Their Google PageSpeed score on mobile was 24. Their largest contentful paint was 7.1 seconds. Every paid click was landing on a page that 60% of users gave up on before it fully loaded.",
      },
      {
        type: "h2",
        text: "The App Audit",
      },
      {
        type: "p",
        text: "We began with a full audit of their Shopify admin. They had 34 apps installed, of which 11 had not been used in over six months and were still injecting JavaScript into every page load. Using Chrome DevTools and WebPageTest, we mapped every third-party script to its originating app and quantified the load contribution of each.",
      },
      {
        type: "ul",
        items: [
          "34 apps installed total",
          "18 apps identified for removal or replacement",
          "11 apps were completely unused but still loading scripts",
          "7 apps had functionality that could be rebuilt natively or via a lighter alternative",
        ],
      },
      {
        type: "h2",
        text: "What We Removed and Why",
      },
      {
        type: "p",
        text: "The most impactful removals were a visual merchandising app (loading 240KB of JavaScript on every collection page), a popup app that hadn't been configured in over a year, and a loyalty app that had been replaced by a newer solution but never uninstalled. Together these three accounted for 1.8 seconds of blocking render time.",
      },
      {
        type: "h3",
        text: "Native Rebuilds",
      },
      {
        type: "p",
        text: "Where apps were providing genuine value, we looked at whether the functionality could be rebuilt in Shopify's native feature set or via a lighter implementation. Their product review display — previously handled by a 180KB app — was replaced with metafields-based reviews pulled from their existing review platform and rendered in Liquid. Load impact: near zero.",
      },
      {
        type: "h3",
        text: "Script Loading Optimisation",
      },
      {
        type: "p",
        text: "For the apps that remained, we audited load order and deferred non-critical scripts using async and defer attributes where the app's theme extension allowed it. Chat widgets, tracking pixels, and loyalty widgets were all moved to load after the main content was interactive.",
      },
      {
        type: "callout",
        text: "After the audit and rebuild, their PageSpeed mobile score rose from 24 to 81. LCP dropped from 7.1s to 2.6s.",
      },
      {
        type: "h2",
        text: "Business Results",
      },
      {
        type: "ul",
        items: [
          "PageSpeed mobile score: 24 → 81",
          "Largest contentful paint: 7.1s → 2.6s",
          "Conversion rate improved by 22% in the following month",
          "Paid social ROAS recovered to previous levels within six weeks",
          "Ongoing app licence cost reduced by £340/month",
        ],
      },
      {
        type: "quote",
        text: "We'd spent months trying to fix our ads. Turns out we just needed to fix our website.",
      },
    ],
  },
  {
    slug: "doubled-organic-traffic-shopify",
    title: "How We Doubled Organic Traffic for a Shopify Store in 6 Months",
    category: "Case Studies",
    description:
      "By fixing technical SEO, building topic clusters, and earning quality backlinks, we took a pet accessories brand from 8,000 to 19,000 monthly organic visitors in six months.",
    readTime: "6 min read",
    date: "2024-05-03",
    image:
      "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#ffedd5",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "A pet accessories brand with strong products and a loyal customer base had been relying almost entirely on paid social and word of mouth for new customer acquisition. They had a Shopify store, a blog they'd posted to twice in 2022, and a Google Search Console account they'd never properly looked at. Organic search was an untapped channel — and within six months, it became their largest.",
      },
      {
        type: "h2",
        text: "Baseline Assessment",
      },
      {
        type: "p",
        text: "At the start of the engagement, the store was receiving approximately 8,000 organic sessions per month, almost all from branded queries. Non-branded organic visibility was essentially zero. A Screaming Frog crawl revealed 340 technical issues including duplicate title tags across collection and product pages, missing H1s, and 118 pages returning 200 status codes that were actually duplicates of paginated collection pages.",
      },
      {
        type: "h2",
        text: "Phase 1: Technical Foundation",
      },
      {
        type: "ul",
        items: [
          "Fixed duplicate title tag issue caused by Shopify's default collection/product URL structure",
          "Added canonical tags to all paginated collection pages",
          "Resolved 47 broken internal links across the site",
          "Implemented structured data for products (price, availability, reviews)",
          "Improved crawl budget by disallowing unnecessary URL parameters in robots.txt",
        ],
      },
      {
        type: "h2",
        text: "Phase 2: Content Architecture",
      },
      {
        type: "p",
        text: "We identified five core topic clusters aligned to high-intent keyword categories: dog harnesses, cat enrichment, dog training, pet travel, and pet nutrition. For each cluster, we audited existing content gaps using Ahrefs and produced a 12-week content calendar. Each piece was written to target a specific keyword, answered a genuine user question, and linked back to at least two commercial collection pages.",
      },
      {
        type: "h3",
        text: "Collection Page Optimisation",
      },
      {
        type: "p",
        text: "Shopify collection pages are often under-optimised because they default to a product grid with no descriptive copy. We added 150-word introductory sections above the fold on the 12 highest-traffic collection pages, targeting head terms and including FAQ schema. These pages moved from page 4–6 to page 1–2 on their primary terms within 10 weeks.",
      },
      {
        type: "h2",
        text: "Phase 3: Link Building",
      },
      {
        type: "p",
        text: "We ran a digital PR campaign around a pet owner survey, generating coverage in four national publications and 14 pet-focused websites. The campaign earned 28 new referring domains in six weeks — a significant boost to domain authority for a site that had previously had very little external coverage.",
      },
      {
        type: "callout",
        text: "Organic traffic grew from 8,000 to 19,000 monthly sessions in six months. Organic revenue became the brand's largest acquisition channel by month 5.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Organic sessions: 8,000 → 19,000/month (138% increase)",
          "Non-branded keyword rankings: 0 → 340 in top 10",
          "Organic revenue grew by £28,000/month",
          "28 new referring domains earned via digital PR",
        ],
      },
    ],
  },
  {
    slug: "luxury-candle-brand-shopify",
    title: "Building a Luxury Candle Brand's Shopify Store",
    category: "Case Studies",
    description:
      "We designed and built a bespoke Shopify store for a luxury candle brand launching into retail, achieving a 4.8% conversion rate and a 94 PageSpeed score at launch.",
    readTime: "5 min read",
    date: "2024-04-20",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#cffafe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "A luxury candle brand was launching their direct-to-consumer channel after two years of wholesale supply to boutique hotels and spa retailers. Their products had exceptional positioning — hand-poured, single-wick, using sustainably sourced botanicals — but they had no website. They came to us with a brand identity, a product range of 18 SKUs, and a launch date 10 weeks away.",
      },
      {
        type: "h2",
        text: "The Brief",
      },
      {
        type: "p",
        text: "The brand's aesthetic was considered, minimal, and premium. They'd been featured in three national lifestyle publications and their wholesale buyers included names that carried serious weight. The digital experience needed to match that credibility. Fast, beautiful, and conversion-optimised — without the heavy-handed upsell feel that cheapens premium e-commerce.",
      },
      {
        type: "h2",
        text: "Design Approach",
      },
      {
        type: "p",
        text: "We chose Shopify's Dawn theme as a base for its performance characteristics, then rebuilt the front-end entirely to the brand's design system. Key decisions included a full-bleed hero with no text overlay (letting the product photography speak), a fragrance note visualisation on each product page, and a gift-first navigation pattern that surfaced sets and gift bundles prominently.",
      },
      {
        type: "ul",
        items: [
          "Custom product page template with fragrance note anatomy diagram",
          "Sticky add-to-cart bar with scent name and burn time visible",
          "Gift builder section allowing custom set curation",
          "Editorial lookbook section for hotel and spa lifestyle imagery",
          "Minimal header with fragrance category mega-nav",
        ],
      },
      {
        type: "h3",
        text: "Performance as a Design Constraint",
      },
      {
        type: "p",
        text: "Premium sites often sacrifice speed for visual ambition. We made performance a hard constraint from day one: all product imagery compressed to WebP under 150KB, no third-party font loading (custom typefaces served from Shopify CDN), and JavaScript deferred entirely below the fold. The result was a PageSpeed score of 94 on desktop and 91 on mobile at launch.",
      },
      {
        type: "h3",
        text: "Gift-Focused UX",
      },
      {
        type: "p",
        text: "Candles are a gift purchase for a significant proportion of buyers. We added a gift message field at checkout, a premium gift wrapping upsell at £4.95 (converting at 34% of orders), and a 'for whom are you shopping?' quiz on the homepage that guided users to the right product based on recipient and occasion.",
      },
      {
        type: "callout",
        text: "The site launched on time, converted at 4.8% in its first 30 days, and gift wrapping was added to over a third of all orders.",
      },
      {
        type: "h2",
        text: "Launch Results",
      },
      {
        type: "ul",
        items: [
          "PageSpeed: 94 desktop / 91 mobile",
          "Conversion rate: 4.8% in first 30 days",
          "Gift wrapping add-on taken by 34% of customers",
          "AOV of £68 — above target of £55",
        ],
      },
    ],
  },
  {
    slug: "gym-equipment-shopify-analytics",
    title: "How a Gym Equipment Brand Used Shopify Analytics to Grow",
    category: "Case Studies",
    description:
      "A gym equipment retailer was making decisions based on gut feel. We set up a proper analytics stack and surfaced insights that drove a 33% increase in revenue within a quarter.",
    readTime: "5 min read",
    date: "2024-04-07",
    image:
      "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#e0e7ff",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A gym equipment retailer with a growing Shopify store had never properly looked at their analytics. They knew their monthly revenue figure from Shopify's dashboard, but had no visibility into which products were driving margin, which traffic sources were converting, or why their ROAS had been declining. When we started working together, the first question we asked was: 'What decisions do you wish you could make faster?' The answers shaped the entire analytics project.",
      },
      {
        type: "h2",
        text: "Setting Up the Foundation",
      },
      {
        type: "p",
        text: "Their GA4 implementation was broken — a developer had incorrectly installed the tag, meaning purchase events were double-firing and the data was unusable. We rebuilt the GA4 implementation via Google Tag Manager, set up Shopify's server-side pixel for improved iOS tracking, and configured a clean attribution model agreed with the marketing team.",
      },
      {
        type: "ul",
        items: [
          "Rebuilt GA4 via GTM with correct e-commerce event schema",
          "Implemented Shopify's Web Pixels API for first-party data capture",
          "Created a Looker Studio dashboard pulling from GA4, Shopify, and Meta Ads API",
          "Set up cohort reporting to track customer LTV by acquisition channel",
        ],
      },
      {
        type: "h2",
        text: "The Insights That Changed Their Strategy",
      },
      {
        type: "p",
        text: "Within three weeks of clean data, several patterns emerged that directly contradicted the team's assumptions.",
      },
      {
        type: "h3",
        text: "Discovery 1: Their Best-Seller Was Their Worst Margin Product",
      },
      {
        type: "p",
        text: "Their most-promoted product — a 20kg barbell — was their highest-revenue SKU but had a gross margin of 11% after fulfilment. Their adjustable dumbbell set, which received a fraction of promotional budget, had a 38% margin and a repurchase rate of 22%. We reallocated promotional activity accordingly.",
      },
      {
        type: "h3",
        text: "Discovery 2: Email Was Massively Under-Attributed",
      },
      {
        type: "p",
        text: "Their previous attribution model was last-click. Under a data-driven model, email marketing was contributing to 34% of purchases in an assist role — but receiving zero credit and therefore zero budget discussion. We restructured the team's attribution conversation around assisted conversions, leading to increased investment in email content.",
      },
      {
        type: "callout",
        text: "Within one quarter of data-led decision-making, revenue grew 33% with only a 9% increase in marketing spend.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Revenue up 33% quarter-on-quarter",
          "Gross margin improved by 8 percentage points through product mix shift",
          "Email marketing investment increased by 60%, generating 2.8x ROAS",
          "Marketing spend efficiency (revenue per £1 spent) improved by 22%",
        ],
      },
    ],
  },
  {
    slug: "recovered-120k-abandoned-carts",
    title: "How We Recovered £120,000 in Abandoned Carts",
    category: "Case Studies",
    description:
      "A furniture brand had a 78% cart abandonment rate and no recovery flows in place. We built a multi-step Klaviyo sequence that recovered £120,000 in a single quarter.",
    readTime: "5 min read",
    date: "2024-03-25",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#e0e7ff",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "A mid-market furniture brand was generating consistent traffic from Google Shopping but watching the majority of visitors leave without purchasing. Their cart abandonment rate sat at 78% — not unusually high for furniture given the considered-purchase nature of the category, but entirely without any recovery mechanism. There were no abandonment emails. No browse abandonment flows. No SMS recovery. Just lost revenue.",
      },
      {
        type: "h2",
        text: "The Opportunity",
      },
      {
        type: "p",
        text: "Before building flows, we needed to understand why customers were abandoning. We surveyed 600 recent website visitors who hadn't purchased using a Typeform embedded in a post-visit email. The results pointed clearly to three primary objections: price uncertainty, delivery timeline concerns, and the desire to 'think about it' for higher-ticket items.",
      },
      {
        type: "h2",
        text: "Building the Recovery Flows",
      },
      {
        type: "p",
        text: "We built the recovery infrastructure in Klaviyo, connected to Shopify via the native integration. The sequence was designed around the three identified objections rather than generic 'you left something behind' messaging.",
      },
      {
        type: "h3",
        text: "Email 1 — 1 Hour After Abandonment: The Nudge",
      },
      {
        type: "p",
        text: "A clean, product-focused email with a hero image of the abandoned item, its current price, and a single CTA. No discount. No pressure. For a brand selling £600 sofas, urgency-led messaging performs poorly — trust and reassurance perform better.",
      },
      {
        type: "h3",
        text: "Email 2 — 24 Hours: Handle the Objection",
      },
      {
        type: "p",
        text: "This email was split-tested across two versions: Version A addressed delivery timelines with a specific delivery window for the abandoned item's postcode. Version B featured a customer review of the specific product alongside a 'satisfaction guarantee' message. Version B outperformed Version A by 31%.",
      },
      {
        type: "h3",
        text: "Email 3 — 72 Hours: The Incentive",
      },
      {
        type: "p",
        text: "For customers who still hadn't converted, the third email introduced a 5% discount code valid for 48 hours. Crucially, this was only shown to non-converting customers — not sent universally — protecting margin from customers who would have converted without incentive.",
      },
      {
        type: "callout",
        text: "The three-step flow recovered £120,000 in a single quarter. Email 2 alone generated £42,000 — proving that objection-handling outperforms discounting for considered purchases.",
      },
      {
        type: "ul",
        items: [
          "Total recovered revenue in Q1: £120,000",
          "Flow open rate average: 54%",
          "Recovery rate (abandoned cart to purchase): 11%",
          "Net margin on recovered orders: 28% (minimal discounting)",
        ],
      },
    ],
  },
  {
    slug: "1m-shopify-store-year-one",
    title: "Year One: Building a £1M Shopify Store from Scratch",
    category: "Case Studies",
    description:
      "We partnered with a founder from day one — brand strategy, Shopify build, paid media, and SEO — and hit £1M in revenue before the end of their first trading year.",
    readTime: "7 min read",
    date: "2024-03-12",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "In January 2023, a founder approached us with a product concept, a supplier relationship, and £80,000 in startup capital. They wanted to build a premium supplements brand targeting the endurance sports market — a category they knew intimately from 12 years of competitive cycling. By December 2023, the brand had hit £1.02M in revenue. This is the story of how we built it.",
      },
      {
        type: "h2",
        text: "Phase 1: Foundation (Months 1–2)",
      },
      {
        type: "p",
        text: "Before a single line of code was written, we spent four weeks on brand strategy. Target audience definition, competitive positioning, price architecture, and channel strategy were all documented and agreed before the design process began. Too many startups skip this and end up with a beautiful site that speaks to no one in particular.",
      },
      {
        type: "ul",
        items: [
          "Brand positioning: 'science-led, athlete-tested' supplements for endurance sport",
          "Target customer: recreational endurance athletes aged 28–45, household income £60k+",
          "Price architecture: £35–£65 per product, premium but accessible",
          "Primary channel: Meta paid social + SEO, with email as retention engine",
        ],
      },
      {
        type: "h2",
        text: "Phase 2: Build (Months 2–3)",
      },
      {
        type: "p",
        text: "The Shopify store was built on a custom theme developed from our in-house starter template. Key features included an ingredient transparency section on each product page (listing every ingredient with its dose and evidence base), a performance-focused quiz, and a subscription model using Recharge for recurring revenue from day one.",
      },
      {
        type: "h3",
        text: "The Subscription Model",
      },
      {
        type: "p",
        text: "Setting up subscriptions at launch, rather than adding them later, was a deliberate strategic choice. Acquiring a subscription customer costs the same as acquiring a one-time customer but generates significantly higher LTV. From the first month, we tracked subscription percentage as a primary KPI — targeting 30% of orders on subscription by month 6.",
      },
      {
        type: "h2",
        text: "Phase 3: Launch and Acquisition (Months 3–6)",
      },
      {
        type: "p",
        text: "The launch strategy centred on a seed influencer campaign: 50 endurance athletes with between 5,000 and 50,000 followers each received a complimentary product package in exchange for honest review content. This seeded social proof before paid media launched and gave the Meta algorithm initial purchase event data to work with.",
      },
      {
        type: "callout",
        text: "By month 6, the brand was generating £68,000/month in revenue. Subscriptions accounted for 29% of orders, and the customer acquisition cost was holding at £18 — well below the £35 target.",
      },
      {
        type: "h2",
        text: "Phase 4: Scaling to £1M (Months 7–12)",
      },
      {
        type: "p",
        text: "The final push to £1M required two things: increasing paid media budget as ROAS held above 3.2x, and expanding into SEO-driven content to reduce paid dependency. We published 40 long-form articles in six months, targeting endurance nutrition keywords. By month 12, organic search contributed 18% of revenue.",
      },
      {
        type: "ul",
        items: [
          "Month 12 revenue: £142,000",
          "Annual revenue: £1.02M",
          "Subscription customer LTV (12-month): £312 vs £68 for one-time buyers",
          "Blended CAC at year end: £21",
          "Email list: 28,000 subscribers with 42% open rate",
        ],
      },
    ],
  },
  {
    slug: "fashion-brand-shopify-seo-ranking",
    title: "How a Fashion Brand Reached Page 1 for 50 Keywords",
    category: "Case Studies",
    description:
      "A UK womenswear brand had no organic visibility despite strong products. We built a content and technical SEO strategy that placed 50 keywords on page one within seven months.",
    readTime: "6 min read",
    date: "2024-02-28",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "A womenswear brand with a well-established wholesale presence was launching DTC for the first time. They had a beautiful Shopify store, an engaged Instagram following of 45,000, and essentially zero organic search presence. Starting from scratch in a competitive category — women's occasionwear — we needed a focused, deliberate strategy to build ranking authority without wasted effort.",
      },
      {
        type: "h2",
        text: "Keyword Research and Prioritisation",
      },
      {
        type: "p",
        text: "We began with a keyword mapping exercise, identifying 380 relevant terms across head, body, and long-tail. Rather than targeting high-volume head terms immediately (where the brand had no chance of ranking short-term), we segmented keywords into three tiers by competition level and built a phased plan that started with Tier 3 quick-wins.",
      },
      {
        type: "ul",
        items: [
          "Tier 1 (high competition, 6–12 months): 'occasionwear', 'wedding guest dresses'",
          "Tier 2 (medium, 3–6 months): 'midi dress for wedding guest UK', 'floral wrap dress'",
          "Tier 3 (low competition, 0–3 months): long-tail occasion + style + colour combinations",
        ],
      },
      {
        type: "h2",
        text: "Collection Page Architecture",
      },
      {
        type: "p",
        text: "Shopify's default collection URL structure creates SEO opportunities that many brands miss. We restructured the collection hierarchy to create a logical category tree: dresses → occasion dresses → wedding guest dresses → [style variations]. Each level was optimised for the corresponding keyword tier, creating a topical authority structure that benefited all levels.",
      },
      {
        type: "h3",
        text: "On-Page Optimisation",
      },
      {
        type: "p",
        text: "Each collection page received a custom SEO title, meta description, H1, and introductory copy block. Product descriptions were rewritten to be genuinely descriptive rather than the generic manufacturer copy that had been imported wholesale. Structured data was added for all products including availability, price, and aggregate review rating.",
      },
      {
        type: "h3",
        text: "Blog Content Strategy",
      },
      {
        type: "p",
        text: "We built a content calendar targeting 'what to wear to a [occasion]' informational queries — a high-intent category where competitors were weak. Each piece linked directly to the most relevant collection pages, passing authority and driving internal traffic. Six articles in this series generated a combined 4,200 monthly organic sessions within three months.",
      },
      {
        type: "callout",
        text: "By month 7, the brand had 50 keywords on page 1 of Google, including three top-3 positions for high-intent occasion dress terms.",
      },
      {
        type: "h2",
        text: "Results After 7 Months",
      },
      {
        type: "ul",
        items: [
          "50 keywords on page 1 (from 0 at project start)",
          "Organic traffic: 0 → 11,400 monthly sessions",
          "Organic revenue: £0 → £22,000/month",
          "3 keywords in top-3 positions for target head terms",
        ],
      },
    ],
  },
  {
    slug: "shopify-pos-multi-store-retailer",
    title: "Shopify POS Integration for a Multi-Site UK Retailer",
    category: "Case Studies",
    description:
      "A five-location independent retailer had disconnected till systems and no unified stock view. We integrated Shopify POS across all sites, unifying inventory and customer data.",
    readTime: "5 min read",
    date: "2024-02-15",
    image:
      "https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "An independent gift and homeware retailer with five stores across the North West had built their online presence on Shopify years ago, but their in-store operation ran on a legacy till system with no connection to their website. Stock levels were manually synced on a weekly basis, online orders frequently oversold products that had sold in-store, and there was no shared customer record between channels.",
      },
      {
        type: "h2",
        text: "The Integration Brief",
      },
      {
        type: "p",
        text: "The retailer needed a unified commerce system: one inventory, one customer record, one reporting view across all five physical locations and the online store. Shopify POS Pro, combined with their existing Shopify online store, was the natural solution — eliminating a separate system and consolidating everything into one platform.",
      },
      {
        type: "h2",
        text: "The Migration",
      },
      {
        type: "p",
        text: "The project involved migrating approximately 4,800 active SKUs from the legacy till system to Shopify, setting location-specific inventory quantities, and configuring hardware (Shopify card readers, receipt printers, and barcode scanners) across all five sites. The migration was staged: two stores first, then the remaining three after a two-week parallel-run period.",
      },
      {
        type: "ul",
        items: [
          "4,800 SKUs migrated with location-specific stock counts",
          "Customer records (12,000+) merged and imported to Shopify",
          "Gift card balances migrated from legacy system",
          "Staff permission levels configured per location",
          "End-of-day reporting set up per store and consolidated",
        ],
      },
      {
        type: "h3",
        text: "Inventory Management",
      },
      {
        type: "p",
        text: "With unified inventory, the retailer could now offer ship-from-store for online orders, fulfilling orders from the closest store with available stock rather than relying solely on their central warehouse. This reduced fulfilment time by an average of 1.2 days and cut postage costs by routing orders to geographically convenient stores.",
      },
      {
        type: "h3",
        text: "Unified Customer Data",
      },
      {
        type: "p",
        text: "For the first time, the retail team could see a customer's full purchase history — whether they'd bought online or in-store. This enabled meaningful personalisation in their email marketing (previously blinded to in-store purchase behaviour) and allowed staff to look up a customer's purchase history at the till.",
      },
      {
        type: "callout",
        text: "Online overselling dropped to zero within the first week of go-live. Previously, the team was processing 8–12 oversell cancellations per week.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Online overselling: reduced to zero",
          "Average fulfilment time: reduced by 1.2 days",
          "Postage cost per order: reduced by 14% through ship-from-store routing",
          "Email marketing revenue up 28% due to full-channel customer data",
        ],
      },
    ],
  },
  {
    slug: "headless-shopify-tech-brand",
    title: "Building a Headless Shopify Store for a Tech Brand",
    category: "Case Studies",
    description:
      "A B2C tech accessories brand needed content flexibility and sub-second load times their standard Shopify theme couldn't deliver. We built a headless Shopify store on Next.js.",
    readTime: "7 min read",
    date: "2024-02-02",
    image:
      "https://images.pexels.com/photos/6006785/pexels-photo-6006785.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#e5e5e5",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "A tech accessories brand selling premium cable management and desk organisation products had a content problem as much as a commerce problem. Their product pages needed rich interactive comparison tables, 3D product configurators, and editorial-quality landing pages — none of which could be delivered within the constraints of a standard Shopify theme. The solution was to decouple the front-end entirely and use Shopify purely as a commerce engine.",
      },
      {
        type: "h2",
        text: "Why Headless?",
      },
      {
        type: "p",
        text: "Headless commerce is not the right solution for most Shopify merchants. The additional complexity, cost, and build time is only justified when specific content or performance requirements genuinely cannot be met by standard Shopify. For this client, the requirements were clear:",
      },
      {
        type: "ul",
        items: [
          "Sub-1-second page load times for all product and category pages",
          "Interactive product configurator with real-time price updates",
          "Full editorial control over landing page layout without developer involvement",
          "Custom checkout extensions beyond what Checkout Extensibility allows",
        ],
      },
      {
        type: "h2",
        text: "The Architecture",
      },
      {
        type: "p",
        text: "We built the front-end on Next.js 14, using the App Router and React Server Components for maximum performance. Shopify's Storefront API (GraphQL) handled all commerce data: products, collections, cart, and checkout. Content (editorial pages, landing pages, blog) was managed in Sanity CMS, chosen for its flexible content modelling and excellent developer experience.",
      },
      {
        type: "h3",
        text: "Cart and Checkout",
      },
      {
        type: "p",
        text: "The cart was built as a client-side component using Shopify's Cart API, with optimistic UI updates for a snappy feel. For checkout, we used Shopify's hosted checkout rather than building a custom implementation — maintaining PCI compliance and reducing build scope significantly. The brand's custom checkout UI extensions handled the branding and trust element requirements.",
      },
      {
        type: "h3",
        text: "The Product Configurator",
      },
      {
        type: "p",
        text: "The interactive cable management configurator allowed customers to build their ideal desk setup by selecting desk size, cable volume, and aesthetic preference. The configurator updated a product bundle in real time, with 3D preview thumbnails generated from a set of pre-rendered asset combinations. Building this in a standard Shopify theme would have been architecturally impossible.",
      },
      {
        type: "callout",
        text: "The headless store achieved a PageSpeed score of 97 on mobile. Product pages load in under 800ms on a standard 4G connection.",
      },
      {
        type: "h2",
        text: "Performance and Business Results",
      },
      {
        type: "ul",
        items: [
          "PageSpeed mobile: 97",
          "LCP: under 800ms on 4G",
          "Conversion rate: 3.8% (up from 2.1% on previous standard theme)",
          "Configurator used by 44% of product page visitors",
          "Bundle AOV £94 vs single-product AOV of £38",
        ],
      },
      {
        type: "quote",
        text: "The configurator changed how people shop with us. Instead of buying one product, they're building their desk setup in one session.",
      },
    ],
  },
  {
    slug: "print-on-demand-shopify-scaling",
    title: "Scaling a Print-on-Demand Business with Shopify",
    category: "Case Studies",
    description:
      "A print-on-demand gifts brand hit a growth ceiling with their existing setup. We restructured their Shopify store, supplier integration, and fulfilment workflow to support 5x order volume.",
    readTime: "5 min read",
    date: "2024-01-20",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "A print-on-demand personalised gifts brand had grown from a side project to £35,000/month entirely organically. Their problem was scale. As order volume grew, their manual process — downloading orders, building a personalisation spreadsheet, uploading to their print supplier's portal — was consuming six hours a day. Peak period (Christmas, Valentine's Day) was near-impossible to manage. They needed infrastructure that could handle 5x their current volume.",
      },
      {
        type: "h2",
        text: "Mapping the Workflow",
      },
      {
        type: "p",
        text: "We spent the first two weeks mapping every step of the order fulfilment process in granular detail, including all the exceptions and edge cases: orders with multiple personalised items, orders that needed proofing before production, late personalisation changes requested by customers, and the retry process for failed prints. The map revealed 23 distinct manual steps — every one of them a candidate for automation.",
      },
      {
        type: "h2",
        text: "The Technical Solution",
      },
      {
        type: "p",
        text: "We built a custom order automation app using Shopify's Admin API. The app listened for new orders, extracted personalisation metafields from each line item, formatted them to the print supplier's API specification, and submitted jobs automatically. Production status updates from the supplier were written back to the Shopify order as timeline notes, giving the customer service team full visibility without leaving Shopify admin.",
      },
      {
        type: "ul",
        items: [
          "Automatic job submission to print supplier API on order confirmation",
          "Proofing workflow: jobs flagged for review held pending staff approval",
          "Customer proof approval via branded email with 1-click confirm/amend",
          "Automatic tracking number import from supplier back to Shopify",
          "Failed print alerts routed to a Slack channel with one-click resubmission",
        ],
      },
      {
        type: "h3",
        text: "Store Restructure",
      },
      {
        type: "p",
        text: "The product catalogue was also restructured. Previously, each personalisation variant was a separate product — meaning a mug available in four colours with text, image, and both options was 12 separate products. We rebuilt using Shopify's variants and metafields properly, collapsing 340 products to 48 while offering more personalisation options per product.",
      },
      {
        type: "callout",
        text: "Order processing time dropped from six hours per day to under 20 minutes of oversight. The Christmas peak that had previously required temporary staff ran smoothly without additional headcount.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Daily order processing: 6 hours → 20 minutes",
          "Successfully handled 5x order volume in the subsequent Christmas peak",
          "Personalisation error rate: reduced by 94%",
          "Product catalogue: 340 products → 48 (more options, less complexity)",
        ],
      },
    ],
  },
  {
    slug: "sports-brand-acos-improvement",
    title: "How We Improved ROAS by 40% for a Shopify Sports Brand",
    category: "Case Studies",
    description:
      "A UK sports nutrition brand was spending £40k/month on paid ads with declining returns. We restructured their campaigns and improved ROAS from 2.1x to 3.0x within 90 days.",
    readTime: "5 min read",
    date: "2025-06-25",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#fef3c7",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A sports nutrition brand spending £40,000/month on Meta and Google ads came to us with a ROAS that had declined steadily from 3.8x to 2.1x over 18 months. The team had been incrementally adjusting budgets and creatives but without a systematic view of what had changed. Our first task was diagnosis before intervention.",
      },
      {
        type: "h2",
        text: "Diagnosing the Decline",
      },
      {
        type: "p",
        text: "A thorough attribution audit revealed several compounding issues: iOS tracking degradation had broken their Meta pixel data, their Google Shopping feed had 340 products with missing attributes suppressing impression share, and their landing pages had not been updated in 18 months while competitors had significantly improved theirs.",
      },
      {
        type: "ul",
        items: [
          "Meta Conversions API was not implemented — losing ~30% of purchase events",
          "Google Shopping suppression rate: 22% of products not serving",
          "Landing page conversion rate: 1.4% (industry average for category: 2.8%)",
          "Customer LTV data not being fed back into bidding algorithms",
        ],
      },
      {
        type: "h2",
        text: "The Fix: Three Parallel Workstreams",
      },
      {
        type: "h3",
        text: "Tracking and Attribution",
      },
      {
        type: "p",
        text: "We implemented Shopify's server-side pixel and Meta Conversions API via GTM, recovering 28% of previously lost purchase event data. The improved signal quality immediately improved Meta's bidding algorithm performance — within two weeks, CPAs dropped by 14% without any creative changes.",
      },
      {
        type: "h3",
        text: "Shopping Feed Remediation",
      },
      {
        type: "p",
        text: "We audited the Google Merchant Centre feed and resolved all attribute issues: missing GTINs, incomplete product categories, and images below minimum size requirements. The suppression rate dropped from 22% to under 2%, adding nearly 260 products back into auction.",
      },
      {
        type: "h3",
        text: "Landing Page Optimisation",
      },
      {
        type: "p",
        text: "We rebuilt the three highest-traffic landing pages with updated social proof, faster load times, and stronger calls-to-action. Conversion rate on these pages improved from 1.4% to 2.7% — directly increasing the value of every click.",
      },
      {
        type: "callout",
        text: "After 90 days, blended ROAS improved from 2.1x to 3.0x — a 40% improvement. At their monthly spend level, this represented an additional £36,000 in attributed revenue per month.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Blended ROAS: 2.1x → 3.0x (+40%)",
          "Meta CPA reduced by 14% through tracking improvement alone",
          "Google Shopping impression share increased by 31%",
          "Landing page conversion rate: 1.4% → 2.7%",
        ],
      },
    ],
  },
  {
    slug: "homeware-shopify-plus-b2b-d2c",
    title: "Running B2B and D2C from One Shopify Plus Store",
    category: "Case Studies",
    description:
      "A UK homeware brand needed to serve trade buyers and retail customers from a single Shopify Plus store — with separate pricing, payment terms, and catalogues for each segment.",
    readTime: "6 min read",
    date: "2025-07-10",
    image:
      "https://images.pexels.com/photos/3051793/pexels-photo-3051793.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#e0e7ff",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "A homeware brand with a trade customer base of 150+ interior designers, architects, and boutique hotels was running two separate Shopify stores — one for retail, one for trade. The duplication was painful: product updates had to be made twice, orders from each store reported separately, and the customer service team had no way to look up a trade customer's order history in the retail store admin.",
      },
      {
        type: "h2",
        text: "The Brief",
      },
      {
        type: "p",
        text: "Consolidate both stores into a single Shopify Plus store that served both segments without compromising the experience for either. Trade buyers should see trade prices, have access to the full commercial catalogue (including items not available at retail), and be able to order on Net 30 terms. Retail customers should see nothing of the trade infrastructure.",
      },
      {
        type: "h2",
        text: "Technical Architecture",
      },
      {
        type: "p",
        text: "We used Shopify Plus's native B2B features for the trade segment: Company accounts with location-specific pricing, payment terms, and catalogue visibility. The retail store ran on the standard Shopify customer model with no changes visible to end consumers.",
      },
      {
        type: "h3",
        text: "Catalogue Segmentation",
      },
      {
        type: "p",
        text: "Approximately 200 SKUs were trade-only — commercial-grade products not sold at retail. We used Shopify's B2B product visibility controls to restrict these to authenticated trade accounts. A retail visitor browsing the site would never see these products; a logged-in trade buyer would see them seamlessly integrated into the standard collection navigation.",
      },
      {
        type: "h3",
        text: "Pricing Structure",
      },
      {
        type: "p",
        text: "Three trade price tiers were configured: standard trade (40% off RRP), preferred partner (48% off), and key account (negotiated fixed pricing). Price lists were assigned at the Company level, with individual contacts inheriting the Company's tier. Prices updated automatically when RRP changed — eliminating the annual price list spreadsheet that had previously required two days of manual work.",
      },
      {
        type: "callout",
        text: "The migration consolidated two separate stores, 2,800 orders per year, and 150+ trade accounts into a single unified admin with no disruption to either customer segment.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Operations overhead reduced: annual price list update from 2 days to 2 hours",
          "Trade order processing time reduced by 55%",
          "Zero customer complaints during or after migration",
          "Trade revenue grew 28% in the first year post-consolidation",
        ],
      },
    ],
  },
  {
    slug: "shopify-speed-audit-results",
    title: "From 32 to 91: Our Shopify Speed Audit in Numbers",
    category: "Case Studies",
    description:
      "A pet food brand had a PageSpeed score of 32 and a bounce rate of 73%. Our speed audit and rebuild brought the score to 91, cut bounce rate by half, and boosted revenue by 19%.",
    readTime: "5 min read",
    date: "2025-07-24",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#ede9fe",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "A premium pet food brand with strong organic rankings and loyal customers had a site performance problem they'd been ignoring for two years. Their PageSpeed score was 32 on mobile. Their bounce rate was 73%. When we told the founder that roughly 7 in 10 visitors were leaving before the page finished loading, the reaction was disbelief followed by urgency. The speed audit became our highest-priority engagement.",
      },
      {
        type: "h2",
        text: "The Audit Process",
      },
      {
        type: "p",
        text: "We ran a full performance audit across all key page types: homepage, collection, product, cart, and blog. Each page was profiled using Lighthouse CLI, WebPageTest, and Chrome DevTools Performance tab. Every blocking resource was identified, its originating app or theme element noted, and its load contribution quantified.",
      },
      {
        type: "h2",
        text: "What We Found",
      },
      {
        type: "ul",
        items: [
          "Homepage: 14 render-blocking scripts, 8 from unused apps",
          "Product pages: hero image 1.4MB uncompressed JPEG",
          "Theme: loading a 240KB custom font file not used in any visible text",
          "Subscription app injecting 180KB of JavaScript on every page",
          "Chat widget loading synchronously, blocking all rendering below it",
        ],
      },
      {
        type: "h2",
        text: "The Remediation",
      },
      {
        type: "p",
        text: "We worked through the issues in order of impact. App removal came first: 9 unused apps were uninstalled, eliminating 6 of the 14 render-blocking scripts immediately. Image optimisation followed: all product and collection images were reprocessed to WebP format at appropriate quality settings, reducing average image size from 980KB to 87KB.",
      },
      {
        type: "h3",
        text: "Theme Optimisation",
      },
      {
        type: "p",
        text: "The custom font file was replaced with a system font stack that matched the brand's aesthetic without any network request. The chat widget was moved to load after the interactive state, eliminating its render-blocking impact entirely. CSS was audited and 34KB of unused rules were removed.",
      },
      {
        type: "h3",
        text: "Subscription App",
      },
      {
        type: "p",
        text: "The subscription app JavaScript was conditionally loaded — only on product pages where subscription options were presented, rather than site-wide. This saved 180KB on every non-product page, including the high-traffic collection pages.",
      },
      {
        type: "callout",
        text: "Final PageSpeed score: 91 on mobile (up from 32). LCP reduced from 8.2s to 1.9s. These numbers directly translated into business results.",
      },
      {
        type: "h2",
        text: "Business Impact",
      },
      {
        type: "ul",
        items: [
          "PageSpeed mobile: 32 → 91",
          "LCP: 8.2s → 1.9s",
          "Bounce rate: 73% → 38%",
          "Revenue up 19% in the month following remediation",
          "Paid social ROAS improved by 27% from better landing page experience",
        ],
      },
    ],
  },
  {
    slug: "kids-toy-brand-shopify-christmas-campaign",
    title: "How a Kids' Toy Brand Nailed Christmas on Shopify",
    category: "Case Studies",
    description:
      "By planning their Shopify store for Christmas six months early, a children's toy brand generated £280k in December — their best trading month by 220% and without a single site outage.",
    readTime: "5 min read",
    date: "2025-08-07",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "For a children's toy brand, Christmas isn't a peak — it's the season. Half their annual revenue lands in six weeks. When they came to us in June, their immediate concern was that the previous Christmas had been a disaster: the site had gone down on Black Friday afternoon, email flows had failed to send at the right time, and they'd run out of their hero product on 18 December, leaving thousands of frustrated parents. We had six months to fix everything.",
      },
      {
        type: "h2",
        text: "The Planning Phase",
      },
      {
        type: "p",
        text: "We began with a post-mortem of the previous Christmas: what went wrong, when, and why. The outage was traced to a third-party app attempting to run a database query on the order table at 11am on Black Friday — recoverable, but entirely preventable. The email failures were a Klaviyo flow misconfiguration. The stockout was a demand forecasting problem, not a Shopify problem.",
      },
      {
        type: "h2",
        text: "Store Preparation",
      },
      {
        type: "ul",
        items: [
          "Removed all non-essential apps for November–December to reduce server-side load",
          "Implemented Shopify's native sale pricing rather than app-based discounting",
          "Pre-built all landing pages for Black Friday, Cyber Monday, and gift guide content",
          "Stress-tested checkout flow with a simulated load of 5x peak order volume",
          "Set up inventory alerts at 20% stock remaining for all hero SKUs",
        ],
      },
      {
        type: "h3",
        text: "Email and Flow Preparation",
      },
      {
        type: "p",
        text: "We rebuilt every Klaviyo flow from scratch with the Christmas calendar mapped in. Black Friday sequences were built and tested in October. A gifting guide email series was scheduled for late November. Post-purchase flows included age-appropriate gift recommendation emails timed for the gift recipient discovery window.",
      },
      {
        type: "h3",
        text: "Inventory Planning",
      },
      {
        type: "p",
        text: "Working with the brand's buying team, we modelled demand scenarios for their top 20 SKUs using the previous two years of sales data. Conservative, expected, and optimistic forecasts were built, and stock orders were placed against the expected scenario with a 15% buffer. A 'low stock' badge was built into the theme to create urgency without deception.",
      },
      {
        type: "callout",
        text: "December revenue: £280,000 — up 220% on the previous year. Zero site outages. Zero stockouts on hero products. Black Friday was their single biggest day ever.",
      },
      {
        type: "h2",
        text: "Christmas Results",
      },
      {
        type: "ul",
        items: [
          "December revenue: £280,000 (+220% year-on-year)",
          "Black Friday single-day revenue: £42,000",
          "Site uptime: 100% throughout peak period",
          "Hero product stockouts: zero",
          "Email revenue contribution in December: 34%",
        ],
      },
    ],
  },
  {
    slug: "shopify-klaviyo-integration-case-study",
    title: "How Klaviyo Integration Generated £200k in Email Revenue",
    category: "Case Studies",
    description:
      "A home fitness brand had 40,000 email subscribers but no automated flows. We built a full Klaviyo integration with Shopify and generated £200k in email-attributed revenue in year one.",
    readTime: "6 min read",
    date: "2025-08-21",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#d1fae5",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A home fitness brand had been growing their email list for three years through a mix of competitions, lead magnets, and checkout opt-ins. The result was a Mailchimp list of 40,000 subscribers that received one campaign email per month, no automated flows, and no integration with Shopify purchase data. They were sitting on one of the most valuable assets in e-commerce — a large, warm audience — and doing almost nothing with it.",
      },
      {
        type: "h2",
        text: "The Migration Plan",
      },
      {
        type: "p",
        text: "We migrated the list from Mailchimp to Klaviyo, connecting Klaviyo to Shopify via the native integration. The migration required careful list hygiene: 40,000 subscribers included a large proportion of unengaged contacts from competition entries. We suppressed anyone who hadn't opened or clicked in 12 months — reducing the active list to 18,000 but significantly improving deliverability.",
      },
      {
        type: "h2",
        text: "Building the Automation Stack",
      },
      {
        type: "p",
        text: "The Klaviyo–Shopify integration unlocked event-based automation using real purchase data. We built 11 flows over six weeks, prioritised by expected revenue contribution.",
      },
      {
        type: "ul",
        items: [
          "Welcome series: 5-email onboarding sequence for new subscribers",
          "Abandoned cart: 3-step sequence (objection handling, not discounting)",
          "Browse abandonment: targeted at high-intent product viewers",
          "Post-purchase: product education + cross-sell based on category purchased",
          "Win-back: 90-day lapsed customer reactivation with tailored offer",
          "Replenishment: reminder emails for consumable products (resistance bands, etc.)",
        ],
      },
      {
        type: "h3",
        text: "Segmentation Strategy",
      },
      {
        type: "p",
        text: "Klaviyo's Shopify integration enabled purchase-behaviour-based segmentation that Mailchimp couldn't support. We created segments for active customers (purchased in last 90 days), lapsed customers, product category purchasers, and high-LTV customers spending over £200. Each campaign was sent to the relevant segment rather than the full list, improving relevance and protecting deliverability.",
      },
      {
        type: "callout",
        text: "Email-attributed revenue in the 12 months post-integration: £201,000. Automated flows contributed 68% of that figure — working around the clock without any additional resource.",
      },
      {
        type: "h2",
        text: "Year One Results",
      },
      {
        type: "ul",
        items: [
          "Email-attributed revenue: £201,000",
          "Automated flow revenue: £137,000 (68% of total)",
          "Welcome series conversion rate: 8.4%",
          "Abandoned cart recovery rate: 12%",
          "Email list deliverability: improved from 78% to 96% inbox placement",
        ],
      },
    ],
  },
  {
    slug: "outdoor-brand-shopify-plus-launch",
    title: "Launching an Outdoor Apparel Brand on Shopify Plus",
    category: "Case Studies",
    description:
      "We built and launched an outdoor apparel brand on Shopify Plus from concept to £400k in year-one revenue, combining custom theme development with a multi-channel go-to-market strategy.",
    readTime: "5 min read",
    date: "2025-09-04",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#e0f2fe",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "An outdoor apparel brand founded by two experienced climbers approached us to build their Shopify store ahead of their first product launch. They had strong product design, a manufacturer relationship developed over two years, and a community of 12,000 Instagram followers built on content alone. What they needed was commerce infrastructure that could convert that audience and scale.",
      },
      {
        type: "h2",
        text: "Why Shopify Plus from Day One",
      },
      {
        type: "p",
        text: "For most brands, Shopify Plus is unnecessary at launch. For this client, there were two compelling reasons to start there: they planned to launch with a wholesale programme from month three, requiring B2B functionality, and they had a US market ambition that needed Shopify Markets' full feature set. Starting on Plus avoided a disruptive migration six months in.",
      },
      {
        type: "h2",
        text: "The Build",
      },
      {
        type: "p",
        text: "We built a custom theme that balanced editorial ambition with e-commerce performance. Outdoor apparel is an aspirational category — the lifestyle story matters as much as the product. We built dedicated 'activity pages' (climbing, trail running, hiking) that led with editorial content and surfaced relevant products contextually rather than sending all traffic to a standard collection grid.",
      },
      {
        type: "ul",
        items: [
          "Custom activity landing pages with editorial + commerce hybrid layout",
          "Fit guide section on every product page with garment measurements",
          "Size recommendation tool using height, weight, and fit preference inputs",
          "Technical spec accordion showing fabric composition and certifications",
          "Community feature on homepage pulling UGC from Instagram via API",
        ],
      },
      {
        type: "h3",
        text: "Launch Strategy",
      },
      {
        type: "p",
        text: "The launch was structured as a pre-order campaign: a landing page captured emails for two weeks before launch, promising first access and a 10% founder discount. 3,800 email subscribers were captured. On launch day, the first-access email went to that list 24 hours before the store opened to the general public. 22% of subscribers purchased within the first 48 hours.",
      },
      {
        type: "callout",
        text: "Year one revenue: £406,000. The pre-order strategy generated £61,000 in the launch week. Wholesale launched in month four and contributed 22% of year-one revenue.",
      },
      {
        type: "h2",
        text: "Year One Results",
      },
      {
        type: "ul",
        items: [
          "Year one revenue: £406,000",
          "Launch week revenue: £61,000 from pre-order list",
          "Wholesale revenue contribution: 22% of annual total",
          "Email list at year end: 22,000 subscribers",
          "Repeat purchase rate: 31% — strong for an apparel brand",
        ],
      },
    ],
  },
  {
    slug: "woocommerce-migration-seo-preservation",
    title: "How We Preserved 100% of Rankings in a WooCommerce to Shopify Migration",
    category: "Case Studies",
    description:
      "Migrating from WooCommerce to Shopify carries significant SEO risk. We moved a garden supplies retailer's 8,000-page site to Shopify with zero ranking loss and zero traffic drop.",
    readTime: "6 min read",
    date: "2025-09-18",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#ffedd5",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Platform migrations are one of the highest-risk SEO events a website can undergo. URL structure changes, missing redirects, and incorrect canonical configurations have wiped out years of ranking progress for brands who got the process wrong. A garden supplies retailer with 8,000 indexed pages and 45,000 monthly organic sessions came to us needing to move from a slow, unmaintainable WooCommerce installation to Shopify — without losing any of the search visibility they'd built over seven years.",
      },
      {
        type: "h2",
        text: "The Pre-Migration Audit",
      },
      {
        type: "p",
        text: "We spent three weeks in audit before a single line of the new site was written. Every indexed URL was mapped, every backlink destination recorded, every structured data implementation documented. The audit produced a 1,400-row spreadsheet that would govern the migration.",
      },
      {
        type: "ul",
        items: [
          "8,034 URLs crawled and categorised (product, collection, blog, other)",
          "Top 500 pages ranked by organic traffic — these were prioritised in the redirect map",
          "1,847 external backlinks pointing to specific URLs — all mapped for preservation",
          "All existing structured data documented for recreation in Shopify",
          "All internal link patterns documented to preserve anchor text and structure",
        ],
      },
      {
        type: "h2",
        text: "URL Strategy",
      },
      {
        type: "p",
        text: "Shopify's URL structure differs from WooCommerce by default: products live at /products/slug, collections at /collections/slug. WooCommerce sites typically have products at /product/slug and categories at /product-category/slug. Every URL needed a redirect, and those redirects needed to be permanent (301) and implemented server-side, not via JavaScript.",
      },
      {
        type: "h3",
        text: "Bulk Redirects",
      },
      {
        type: "p",
        text: "We used Shopify's bulk redirect import tool to implement 7,800+ URL redirects on launch day. A pre-launch validation script checked every redirect against the expected destination before go-live. The script flagged 43 errors — all resolved before the migration completed.",
      },
      {
        type: "h3",
        text: "Crawl Monitoring",
      },
      {
        type: "p",
        text: "Immediately after launch, we ran hourly Screaming Frog crawls for 72 hours, monitoring for 404 errors, redirect chains, and canonicalisation issues. We set up Google Search Console change of address notification and submitted the new sitemap. The GSC crawl budget shifted to the new URL structure within four days.",
      },
      {
        type: "callout",
        text: "Zero ranking loss measured at 30 days post-migration. Organic traffic in the first full month on Shopify was 3% higher than the equivalent month the previous year.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Ranking loss at 30 days: zero pages dropped from first page",
          "Organic traffic: +3% vs same period prior year",
          "Redirect implementation: 7,834 redirects with 100% coverage",
          "GSC coverage errors: resolved within 72 hours of launch",
        ],
      },
    ],
  },
  {
    slug: "shopify-b2b-net-terms-case-study",
    title: "How We Set Up Net 30 Terms and Grew B2B Sales by 200%",
    category: "Case Studies",
    description:
      "A stationery brand was losing wholesale accounts because they couldn't offer payment terms. We implemented Net 30 through Shopify Plus B2B and grew wholesale revenue by 200% in a year.",
    readTime: "5 min read",
    date: "2025-10-02",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#e0e7ff",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "A premium stationery brand had 80 wholesale stockists and had been managing trade orders through a manual invoicing process for three years. Their biggest challenge wasn't order volume — it was that they had lost three significant wholesale accounts in six months because they couldn't offer payment terms. Boutique retailers and corporate buyers both expected 30-day invoicing as standard. Without it, the brand simply wasn't in the conversation for larger accounts.",
      },
      {
        type: "h2",
        text: "The Challenge with Payment Terms",
      },
      {
        type: "p",
        text: "Offering Net 30 terms isn't simply a checkbox in a payment settings panel. It requires credit assessment, accounts receivable management, late payment processes, and integration with accounting software. Shopify Plus's B2B payment terms feature handles the commerce side; we needed to build the surrounding infrastructure to make it operationally viable.",
      },
      {
        type: "h2",
        text: "What We Built",
      },
      {
        type: "p",
        text: "We implemented Shopify Plus B2B with payment terms configured at the Company level. New wholesale accounts were onboarded through a credit application process: the brand collected business details and an estimated monthly order value, and allocated payment terms based on a simple credit scoring model they agreed internally.",
      },
      {
        type: "ul",
        items: [
          "Net 30 terms enabled for approved Company accounts in Shopify Plus",
          "Xero integration: approved B2B orders automatically created invoices in Xero",
          "Automated payment reminder emails at 7 days, 3 days, and 1 day before due date",
          "Overdue account orders automatically placed on hold pending payment",
          "Monthly aged debtors report generated for the finance team",
        ],
      },
      {
        type: "h3",
        text: "Account Tiering",
      },
      {
        type: "p",
        text: "We advised the brand to offer Net 30 only to established accounts (trading for over 6 months) and to require prepayment from new accounts for the first two orders. This mitigated bad debt risk while still offering the terms that larger buyers required. Net 60 was offered to three anchor accounts representing the brand's highest-value wholesale relationships.",
      },
      {
        type: "callout",
        text: "Within 12 months of implementing payment terms, wholesale revenue grew by 200%. The three accounts previously lost were re-won within the first quarter.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Wholesale revenue: +200% year-on-year",
          "Wholesale account count: 80 → 210",
          "Three previously lost accounts re-won within Q1",
          "Bad debt rate: under 0.4% of wholesale revenue (below industry benchmark)",
        ],
      },
    ],
  },
  {
    slug: "shopify-personalisation-nosto-case-study",
    title: "How Personalisation with Nosto Increased AOV by 28%",
    category: "Case Studies",
    description:
      "A beauty retailer with 50,000 monthly visitors was showing the same products to every customer. We implemented Nosto personalisation on Shopify and grew AOV from £47 to £60.",
    readTime: "5 min read",
    date: "2025-10-16",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#cffafe",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A multi-brand beauty retailer carrying 800+ SKUs was treating every visitor identically: the same homepage hero, the same featured products, the same 'you might also like' recommendations regardless of browsing history. With 50,000 monthly visitors and a broad product catalogue spanning skincare, haircare, and colour cosmetics, the missed personalisation opportunity was significant. They'd heard about Nosto but weren't sure if the investment was justified.",
      },
      {
        type: "h2",
        text: "The Business Case",
      },
      {
        type: "p",
        text: "Before recommending Nosto, we ran three weeks of baseline measurement. We tracked which product category each session was primarily engaging with and cross-referenced with what was actually surfaced to them on the homepage and in recommendations. The data showed that 62% of visitors were seeing featured products from categories they had never interacted with — a direct relevance problem.",
      },
      {
        type: "h2",
        text: "Nosto Implementation",
      },
      {
        type: "p",
        text: "We integrated Nosto with the Shopify store over four weeks. The integration used Nosto's Shopify app, supplemented by custom event tracking for category affinity scoring. We placed personalisation slots across six key locations in the customer journey.",
      },
      {
        type: "ul",
        items: [
          "Homepage hero product carousel: personalised by category affinity",
          "Collection page: personalised product ranking within results",
          "Product page: 'complete the routine' recommendations based on product category",
          "Cart drawer: cross-sell recommendations based on cart contents",
          "Post-purchase email: product recommendations in day-7 follow-up",
          "Exit-intent popup: personalised offer based on browsed category",
        ],
      },
      {
        type: "h3",
        text: "Category Affinity Logic",
      },
      {
        type: "p",
        text: "Nosto's default recommendation engine works well, but we customised the affinity model to account for the brand's specific category structure. A customer browsing retinol serums would be classified as 'skincare, anti-ageing' — triggering a homepage experience centred on that category's hero products rather than the generic bestseller carousel.",
      },
      {
        type: "h3",
        text: "Measuring Incrementality",
      },
      {
        type: "p",
        text: "We ran Nosto's built-in A/B testing with a 20% holdout group seeing non-personalised recommendations for the first 60 days. This gave us a clean incrementality measurement rather than relying on click-attributed revenue, which can overstate personalisation's contribution.",
      },
      {
        type: "callout",
        text: "The holdout test showed a 28% AOV uplift for personalised visitors vs control. AOV moved from £47 to £60 — representing an additional £195,000 in annual revenue on their session volume.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "AOV: £47 → £60 (+28%)",
          "Incremental annual revenue: £195,000",
          "Cart cross-sell click rate: 18% (vs 4% on previous static recommendations)",
          "Exit-intent personalised offer conversion rate: 6.2%",
        ],
      },
    ],
  },
  {
    slug: "fashion-retailer-instagram-shopify",
    title: "How a Fashion Retailer Drove £300k from Instagram Shopping",
    category: "Case Studies",
    description:
      "A UK fashion retailer had an engaged Instagram following but no Instagram Shopping setup. We integrated Shopify with Meta Commerce and generated £300k in Instagram-attributed revenue in year one.",
    readTime: "5 min read",
    date: "2025-10-30",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ffd6de",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "A womenswear retailer with 95,000 Instagram followers and a highly engaged audience was generating almost no revenue from the platform. They were posting five times a week, receiving strong engagement on product content, but had no shoppable posts and their bio link pointed to a homepage that was not optimised for social traffic. The gap between their social following and their social revenue was one of the largest we'd seen.",
      },
      {
        type: "h2",
        text: "Setting Up Instagram Shopping",
      },
      {
        type: "p",
        text: "The first step was connecting their Shopify store to Meta Commerce Manager and setting up a product catalogue. Their catalogue had 420 active products, of which 380 were eligible for Instagram Shopping — the remaining 40 were excluded due to compliance issues with Meta's commerce policy (primarily branded goods requiring eligibility verification).",
      },
      {
        type: "ul",
        items: [
          "Meta Commerce Manager connected to Shopify product catalogue",
          "380 products submitted and approved for Instagram Shopping",
          "Product catalogue synced in real time via Shopify's Meta channel",
          "Collection sets created in Commerce Manager for seasonal campaigns",
          "Instagram Checkout enabled for direct in-app purchasing",
        ],
      },
      {
        type: "h2",
        text: "Content Strategy",
      },
      {
        type: "p",
        text: "Instagram Shopping only works if the content strategy supports it. We advised the brand on a shoppable content framework: every product post and Reel featuring a specific item should have that item tagged; collection posts should tag multiple items to give viewers options; Stories should use the product link sticker on all product-featuring content.",
      },
      {
        type: "h3",
        text: "Shoppable Reels",
      },
      {
        type: "p",
        text: "We worked with the brand to produce a weekly 'new arrivals' Reel format that featured three to five items styled as an outfit. Tagging each individual item in the Reel meant a viewer could tap any piece to view and purchase it directly. This format consistently outperformed static posts on both reach and product link taps.",
      },
      {
        type: "h3",
        text: "Link in Bio Optimisation",
      },
      {
        type: "p",
        text: "The bio link was replaced with a custom Shopify landing page that mirrored the most recently posted content — effectively a shoppable version of their feed. Visitors from Instagram landed on a page where every item they'd just seen was immediately purchasable without searching. The landing page converted at 5.2% versus 1.8% on the previous homepage destination.",
      },
      {
        type: "callout",
        text: "Instagram became the brand's second-largest revenue channel within nine months, generating £300,000 in attributed revenue in year one.",
      },
      {
        type: "h2",
        text: "Year One Results",
      },
      {
        type: "ul",
        items: [
          "Instagram-attributed revenue: £300,000",
          "Instagram Shopping clicks: 180,000 in year one",
          "Bio link landing page conversion rate: 5.2% (vs 1.8% previously)",
          "Instagram now second-largest acquisition channel by revenue",
          "Follower count grew from 95k to 148k during the period",
        ],
      },
      {
        type: "quote",
        text: "We always knew our Instagram audience was warm — we just weren't making it easy for them to buy. Now every post does the work.",
      },
    ],
  },
];

export default posts;
