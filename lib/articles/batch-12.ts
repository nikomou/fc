import type { BlogPost } from "../blog-types";

const batch12: BlogPost[] = [
  {
    slug: "shopify-vs-shopify-plus",
    title: "Shopify vs Shopify Plus: Which Plan Do You Actually Need?",
    category: "Guides",
    description:
      "A clear breakdown of Shopify vs Shopify Plus — what you get, what it costs, and how to know when it's time to upgrade. Written for UK merchants.",
    readTime: "9 min read",
    date: "2026-03-12",
    image: "/images/articles/pexels-3944405.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    accent: "#ef436b",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "If you're turning over somewhere between £500k and £3M online and you've started hearing about Shopify Plus, this article is for you. The question 'do we need Plus?' comes up constantly in conversations with UK merchants, and the honest answer is: sometimes yes, often not yet, occasionally not at all. Here's a clear-eyed breakdown of exactly what you get at each level and what actually justifies the jump.",
      },
      {
        type: "h2",
        text: "What Shopify Plus Actually Is",
      },
      {
        type: "p",
        text: "Shopify Plus is not simply 'enterprise Shopify' with a fancier dashboard. It is a fundamentally different tier with features that are architecturally unavailable on lower plans. The specific additions are worth knowing in detail rather than in generalities.",
      },
      {
        type: "ul",
        items: [
          "Unlimited staff accounts: standard plans cap you at 2 to 15 depending on tier; Plus removes the limit entirely",
          "9 expansion stores: run up to nine additional storefronts (different markets, brands, or a B2B channel) under a single Plus subscription",
          "Checkout extensibility: the only plan on which you can customise the checkout experience using Shopify's UI extensions and app blocks",
          "Shopify Flow: a no-code automation builder for operational workflows, available exclusively to Plus merchants",
          "Launchpad: schedule product launches, flash sales, and price changes in advance with a single click",
          "Multipass: single sign-on capability for integrating external authentication systems into your storefront",
          "Native B2B features: dedicated wholesale storefront with company accounts, customer-specific pricing, and net payment terms",
          "Dedicated Merchant Success Manager: a named Shopify contact assigned to your account",
        ],
      },
      {
        type: "p",
        text: "These are not incremental quality-of-life improvements. Checkout extensibility, Flow, and the B2B channel are structural capabilities that change what your business can do operationally. That distinction is what makes the pricing conversation real.",
      },
      {
        type: "h2",
        text: "Pricing Comparison",
      },
      {
        type: "p",
        text: "Standard Shopify plans in the UK are priced at £25/month for Basic, £65/month for Shopify, and £344/month for Advanced, all billed monthly. Annual billing reduces each of these meaningfully.",
      },
      {
        type: "p",
        text: "Shopify Plus operates on a different model entirely. The entry price is $2,500/month, which at current exchange rates is approximately £2,000/month. This flat rate applies when your monthly revenue through Shopify is below $800,000 (roughly £630,000/month). Above that threshold, the fee switches to a revenue-share model at 0.25% of monthly Shopify revenue, capped at $40,000/month (approximately £31,500/month).",
      },
      {
        type: "p",
        text: "So the gap between Shopify Advanced at £344/month and Shopify Plus at approximately £2,000/month is roughly £1,650/month, or about £20,000/year. That premium needs to justify itself through either cost savings elsewhere or direct revenue enablement. In many cases it does. In some cases it doesn't, yet.",
      },
      {
        type: "h2",
        text: "The Checkout Difference",
      },
      {
        type: "p",
        text: "The single most commercially significant feature in Shopify Plus is checkout extensibility, and it is not available on any other plan. On standard Shopify, the checkout experience is locked: you cannot add custom fields, inject custom upsell blocks, change the layout, or embed branded trust signals between checkout steps.",
      },
      {
        type: "p",
        text: "On Shopify Plus, checkout extensibility lets you build a checkout that is genuinely tailored to your brand and your customers. In practice this means: post-purchase upsell offers presented after payment but before the thank-you page; custom fields to capture delivery preferences, gift messages, or B2B reference numbers; loyalty programme integration showing point balances and redemption options inline; and one-click checkout flows for repeat customers using stored payment methods.",
      },
      {
        type: "p",
        text: "For brands with a meaningful conversion rate optimisation programme, checkout extensibility alone is frequently the deciding factor. A 0.3% improvement in checkout conversion on a £2M/year store is worth £6,000/year in additional revenue. At scale, the numbers get considerably more significant.",
      },
      {
        type: "h2",
        text: "Transaction Fees",
      },
      {
        type: "p",
        text: "If you process payments through a third-party gateway rather than Shopify Payments, transaction fees are a real consideration. On the Advanced plan, Shopify charges 0.5% per transaction when using a third-party processor. On Shopify Plus, that drops to 0.15%.",
      },
      {
        type: "p",
        text: "At £3M annual GMV processed through a third-party gateway, the difference is 0.35% multiplied by £3M, which is £10,500/year. That saving alone covers more than half the annual premium of Plus over Advanced. At higher volumes the arithmetic becomes even more favourable. This is worth modelling against your actual payment mix before making the decision.",
      },
      {
        type: "h2",
        text: "Automation with Shopify Flow",
      },
      {
        type: "p",
        text: "Shopify Flow is a no-code workflow automation tool available exclusively on Shopify Plus. It operates on a trigger, condition, and action model: something happens in your store, Flow checks whether certain conditions are met, then takes an action automatically.",
      },
      {
        type: "p",
        text: "Practical examples include: automatically tagging customers as VIP when their lifetime spend exceeds £1,000; holding high-risk orders for manual review before fulfilment and sending a Slack notification to your operations team; triggering a restock notification email when inventory for a best-seller drops below ten units; applying a loyalty discount automatically when a customer reaches a qualifying spend threshold at checkout. These workflows replace manual processes and the junior staff time that goes with them.",
      },
      {
        type: "h2",
        text: "International Selling",
      },
      {
        type: "p",
        text: "Shopify Markets, which allows you to sell to multiple countries with localised pricing, currencies, and languages, is available across all Shopify plans including Basic. So if you want to sell in euros or dollars alongside sterling, you do not need Plus for that.",
      },
      {
        type: "p",
        text: "What Plus adds is the ability to run up to nine expansion stores: fully independent storefronts with their own domains, themes, product catalogues, and checkout flows. These are appropriate for brands running genuinely separate market experiences, distinct sub-brands, or a wholesale channel that needs to feel separate from the consumer store. For most brands selling into two or three markets, Shopify Markets on a standard plan is sufficient. For brands with complex international operations, expansion stores change what's achievable.",
      },
      {
        type: "h2",
        text: "When You Should Stay on Standard Shopify",
      },
      {
        type: "p",
        text: "This is the part where many agencies hedge. We won't. There are clear situations where Plus is not the right call right now, and recommending it anyway would be doing you a disservice.",
      },
      {
        type: "ul",
        items: [
          "Your GMV is under £1M per year: the economics rarely stack up below this threshold",
          "You sell in a single market and have no plans to expand internationally",
          "Your checkout conversion is fine and you have no active CRO programme that checkout extensibility would feed",
          "You have no automation requirements that couldn't be handled by a basic Shopify flow or a third-party app like Mechanic",
          "You have no B2B or wholesale channel and none is on your roadmap",
        ],
      },
      {
        type: "p",
        text: "In all of these scenarios, Shopify Advanced at £344/month is a capable, well-featured platform that will support substantial growth. Upgrading to Plus before the business case is clear is an unnecessary cost.",
      },
      {
        type: "h2",
        text: "When to Upgrade to Shopify Plus",
      },
      {
        type: "p",
        text: "These are the specific triggers that make the upgrade decision clear rather than speculative:",
      },
      {
        type: "ul",
        items: [
          "GMV consistently above £1M per year, particularly when approaching £2M",
          "You have an active CRO programme and the checkout is a conversion bottleneck you cannot currently address",
          "You're building or have an active B2B or wholesale channel that needs customer-specific pricing",
          "You need more than 15 staff accounts, or your team is growing quickly enough that the cap creates friction",
          "You're expanding into two or more international markets with genuinely different storefront requirements",
          "Your operations team is spending significant time on manual processes that Flow could automate",
          "You're processing meaningful volume through a third-party gateway and the transaction fee saving on Plus is material",
        ],
      },
      {
        type: "h2",
        text: "The ROI Calculation",
      },
      {
        type: "p",
        text: "At what GMV does Shopify Plus pay for itself? Let's work through a realistic scenario for a UK DTC brand.",
      },
      {
        type: "p",
        text: "Assume a brand processing £150,000/month (£1.8M/year) in GMV through a third-party payment gateway. The transaction fee saving going from Advanced (0.5%) to Plus (0.15%) is £525/month. The Plus premium over Advanced is approximately £1,650/month. So the transaction fee saving alone covers 32% of the premium. The remaining £1,125/month needs to come from either checkout conversion improvements, operational efficiency from Flow automation, or the commercial value of the Plus-only features.",
      },
      {
        type: "p",
        text: "For this brand, a 0.1% improvement in checkout conversion on £150k monthly GMV is worth £150/month. Modest Flow automations saving two hours of manual operations work per week at £30/hour is worth £240/month. Combined with the transaction fee saving, you're at £915/month of recoverable value against a £1,650/month premium. The full ROI requires either higher GMV, a more active CRO programme, or greater operational automation needs. At £250,000/month GMV, the same calculation produces a clear positive return.",
      },
      {
        type: "callout",
        text: "Thinking about upgrading to Shopify Plus? Talk to our team for a free consultation at /shopify-plus.",
      },
    ],
  },
  {
    slug: "shopify-advanced-vs-shopify-plus",
    title: "Shopify Advanced vs Shopify Plus: The Key Differences Explained",
    category: "Guides",
    description:
      "Shopify Advanced costs £344/month. Shopify Plus starts at ~£2,000/month. Here's exactly what the difference buys you — and when it's worth it.",
    readTime: "8 min read",
    date: "2026-03-11",
    image: "/images/articles/pexels-3182812.webp",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    accent: "#3b82f6",
    author: "Sam Clarke",
    authorRole: "Shopify Plus Specialist",
    content: [
      {
        type: "p",
        text: "For scaling UK merchants, the Shopify Advanced versus Shopify Plus decision is one of the most consequential platform choices they'll make. At first glance the gap between £344/month and approximately £2,000/month looks enormous. But at the right revenue level and with the right operational requirements, Plus is not just justifiable. It is materially better for your business. The problem is that 'the right revenue level' and 'the right requirements' are not the same for every brand, and getting this wrong in either direction is costly.",
      },
      {
        type: "p",
        text: "This article covers every meaningful difference between the two plans, with direct guidance on which profile of merchant belongs on each one.",
      },
      {
        type: "h2",
        text: "Side-by-Side Feature Comparison",
      },
      {
        type: "p",
        text: "Here is a precise breakdown of what changes between Shopify Advanced and Shopify Plus:",
      },
      {
        type: "ul",
        items: [
          "Checkout extensibility: Advanced — not available. Plus — full access to checkout UI extensions, app blocks, and branded checkout customisation",
          "Shopify Flow: Advanced — not available. Plus — unlimited no-code automation workflows",
          "Launchpad: Advanced — not available. Plus — schedule product launches, price changes, and campaign activations",
          "Multipass: Advanced — not available. Plus — single sign-on integration for external authentication",
          "Native B2B channel: Advanced — not available. Plus — dedicated wholesale storefront with company accounts and custom pricing",
          "Expansion stores: Advanced — not available. Plus — up to 9 additional storefronts under one subscription",
          "Inventory locations: Advanced — 10 locations. Plus — up to 200 locations",
          "Staff accounts: Advanced — 15. Plus — unlimited",
          "Third-party transaction fee: Advanced — 0.5%. Plus — 0.15%",
          "Dedicated Merchant Success Manager: Advanced — no. Plus — yes, a named Shopify contact assigned to your account",
          "Priority support and faster SLA: Advanced — standard support. Plus — priority routing and dedicated Plus support team",
        ],
      },
      {
        type: "h2",
        text: "The Checkout Customisation Gap",
      },
      {
        type: "p",
        text: "The most commercially significant difference between Advanced and Plus is checkout extensibility, and it warrants detailed attention. On Shopify Advanced, the checkout is largely fixed. You can change colours, logo, and a few basic settings, but you cannot add custom fields, inject upsell offers between checkout steps, display loyalty point balances, or build any branded trust content into the flow itself.",
      },
      {
        type: "p",
        text: "On Shopify Plus, checkout extensibility gives you full control using Shopify's app block framework. You can build post-purchase upsells that appear after payment is taken but before the confirmation screen, achieving the revenue uplift of a pop-up upsell without the friction of interrupting the checkout. You can add custom input fields for gift messages, delivery instructions, or B2B purchase order numbers. You can display trust signals, loyalty balances, and promotional messaging inline within the checkout steps themselves. For brands with an active CRO programme, this is the single most valuable feature in the entire Plus tier.",
      },
      {
        type: "h2",
        text: "Transaction Fee Difference",
      },
      {
        type: "p",
        text: "If you use Shopify Payments as your gateway, this section is largely irrelevant to you. But if you use a third-party processor, the transaction fee difference between Advanced and Plus is worth calculating precisely.",
      },
      {
        type: "p",
        text: "On Advanced, Shopify charges 0.5% on all transactions processed through third-party gateways. On Plus, that rate drops to 0.15%. At £100,000/month GMV processed through a third-party processor, the difference is 0.35% multiplied by £100,000, which is £350/month. That is £4,200/year. At £200,000/month GMV the saving is £700/month, or £8,400/year. At £300,000/month it is £1,050/month, which on its own covers 64% of the Plus premium over Advanced. Run this calculation against your actual payment volumes and processor mix before making the upgrade decision.",
      },
      {
        type: "h2",
        text: "Automation Capabilities",
      },
      {
        type: "p",
        text: "Shopify Advanced has no native automation builder. You can use basic Shopify automations for a handful of pre-built triggers, and you can integrate third-party tools like Zapier or Mechanic for some workflow automation needs. But these options are limited in scope and add cost and complexity.",
      },
      {
        type: "p",
        text: "Shopify Plus includes Shopify Flow natively at no additional cost. Flow handles unlimited custom workflows: auto-tagging customers based on purchase behaviour, holding fraud-risk orders for review, sending internal Slack notifications for specific order types, triggering loyalty events, hiding out-of-stock products from collections automatically. Alongside Flow, Plus includes Launchpad for scheduling campaigns: you can programme a flash sale to go live at midnight, apply a sitewide discount, swap hero images, and revert everything 48 hours later, all configured in advance with no manual intervention required.",
      },
      {
        type: "h2",
        text: "B2B and Wholesale",
      },
      {
        type: "p",
        text: "Shopify Advanced has no native B2B functionality. If you want to run a wholesale operation alongside your consumer store on Advanced, your options are: use a third-party app like Wholesale Club or Wholesale Gorilla (typically £50-£100/month, with limitations), build a separate password-protected storefront with custom pricing logic, or manage wholesale orders manually.",
      },
      {
        type: "p",
        text: "Shopify Plus includes a native B2B channel that is architecturally separate from your consumer store, sharing inventory but allowing fully independent pricing, payment terms, and storefront experience. Company profiles support multiple locations and contacts. You can assign different price lists to different accounts. Net 30, 60, and 90 payment terms are handled natively with automated invoice generation. For brands doing any meaningful wholesale volume, the native B2B channel alone is frequently the trigger for upgrading from Advanced to Plus.",
      },
      {
        type: "h2",
        text: "Support and SLA",
      },
      {
        type: "p",
        text: "Shopify Advanced gives you access to standard Shopify support: 24/7 live chat, email, and phone, which is genuinely good for a SaaS platform of this scale. On Shopify Plus, support is prioritised: tickets from Plus merchants are routed to a dedicated Plus support team with faster response commitments. More significantly, Plus merchants are assigned a Merchant Success Manager, a named Shopify contact who can provide strategic guidance on platform usage, connect you with relevant partners, and act as an escalation path when issues arise.",
      },
      {
        type: "p",
        text: "For most merchants, the practical difference in day-to-day support quality between Advanced and Plus is modest. The MSM relationship becomes more valuable the more complex your operation and the more actively you want to use Shopify's partner ecosystem for growth.",
      },
      {
        type: "h2",
        text: "Which One Is Right for You?",
      },
      {
        type: "p",
        text: "Shopify Advanced is the right choice if your annual GMV is below £2M, you sell in a single market, your checkout conversion rate is healthy and not a current focus, you have no B2B channel, and your staff account count is below 15. Advanced is a capable, well-featured plan that supports substantial growth without the Plus overhead.",
      },
      {
        type: "p",
        text: "Shopify Plus is worth the premium if your GMV is consistently above £2M, you have an active CRO programme and the checkout is a conversion lever you want to pull, you run or are planning a B2B or wholesale operation, you need more than 15 staff accounts, you are expanding into multiple international markets with genuinely distinct storefront needs, or you process significant volume through a third-party gateway where the 0.35% transaction fee difference pays for a meaningful portion of the upgrade. Any one of these conditions makes the conversation worth having. Two or more make it straightforward.",
      },
      {
        type: "callout",
        text: "Already on Advanced and considering the upgrade? Get a free Shopify Plus consultation at /shopify-plus.",
      },
    ],
  },
  {
    slug: "shopify-basic-vs-shopify-plus",
    title: "Shopify Basic vs Shopify Plus: What Changes When You Scale Up?",
    category: "Guides",
    description:
      "Shopify Basic is £25/month. Shopify Plus is ~£2,000/month. We explain what changes across the full journey — and what triggers each upgrade decision.",
    readTime: "8 min read",
    date: "2026-03-09",
    image: "/images/articles/pexels-5632371.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d1b33 50%, #3d1a20 100%)",
    accent: "#8b5cf6",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Most UK merchants start on Shopify Basic. It is the sensible place to begin: low commitment, low cost, and more than capable of powering a store in its early stages. Very few businesses need Shopify Plus from day one. But the distance between Basic and Plus is significant, and understanding what changes at each step of the journey helps you make the right call at the right time rather than either upgrading too early or staying behind longer than your business can afford.",
      },
      {
        type: "h2",
        text: "What Shopify Basic Gives You",
      },
      {
        type: "p",
        text: "Shopify Basic costs £25/month billed monthly, or a lower monthly rate on an annual contract. For that you get: 2 staff accounts, basic sales reports, online store with unlimited products, discount codes, abandoned cart recovery, and Shopify Payments with a card processing rate of 1.9% plus 25p for UK cards. If you use a third-party payment gateway instead of Shopify Payments, Shopify charges an additional 2.0% transaction fee on top of your gateway's own fees.",
      },
      {
        type: "p",
        text: "Basic is well-suited for: new stores testing a product or market, side projects and hobby businesses, DTC brands in their first year, and any store where the founder is the sole operator and the product catalogue is manageable. At this stage, the platform's limitations are rarely the constraint on growth.",
      },
      {
        type: "h2",
        text: "When Basic Starts Showing Cracks",
      },
      {
        type: "p",
        text: "Basic's limitations become tangible at a specific set of pressure points. The two-staff-account cap is the first one most growing businesses hit: as soon as you hire a customer service person, a marketing manager, or a part-time warehouse assistant who needs admin access, you're bumping against the ceiling. The basic reporting also starts to feel restrictive once you're trying to run meaningful analysis on customer behaviour, channel attribution, or product performance.",
      },
      {
        type: "p",
        text: "The other pressure point is the 2.0% third-party transaction fee. At low volumes this is manageable. At £50,000/month GMV processed through a third-party gateway, that fee is £1,000/month. That's real money that could be paying for platform upgrades or marketing spend.",
      },
      {
        type: "h2",
        text: "The Middle Tiers",
      },
      {
        type: "p",
        text: "Between Basic and Plus sit two plans worth understanding. Shopify (the mid-tier plan) costs £65/month and adds 5 staff accounts, professional reports, and a reduced transaction fee of 1.0% for third-party gateways. Shopify Advanced costs £344/month and adds up to 15 staff accounts, advanced reporting with custom report builder, third-party calculated shipping rates, and a third-party transaction fee of just 0.5%.",
      },
      {
        type: "p",
        text: "The progression from Basic to Shopify to Advanced broadly tracks three phases: launch and early traction, growth with a small team, and scaling with reporting and operational complexity needs. Most businesses spend meaningful time at the Advanced level before the Plus conversation becomes relevant.",
      },
      {
        type: "h2",
        text: "What Shopify Plus Adds That Nothing Below Can Match",
      },
      {
        type: "p",
        text: "Shopify Plus is a different product tier, not just an upgraded plan. The features it includes are architecturally unavailable below it, not simply unlocked by paying more. Here is precisely what you gain:",
      },
      {
        type: "ul",
        items: [
          "Checkout extensibility: customise your checkout using Shopify's UI extension framework. Not available on any standard plan.",
          "Shopify Flow: no-code automation builder for operational workflows. Plus-exclusive.",
          "Launchpad: schedule campaign activations, flash sales, and price changes in advance. Plus-exclusive.",
          "Multipass: single sign-on integration for external authentication. Plus-exclusive.",
          "Native B2B channel: dedicated wholesale storefront with company accounts and net payment terms. Plus-exclusive.",
          "9 expansion stores: up to nine additional storefronts under one subscription. Plus-exclusive.",
          "0.15% third-party transaction fee: down from 0.5% on Advanced.",
          "Unlimited staff accounts: remove the cap entirely.",
          "Dedicated Merchant Success Manager: a named Shopify contact for your account.",
        ],
      },
      {
        type: "h2",
        text: "The Cost Reality at Scale",
      },
      {
        type: "p",
        text: "Transaction fees are where the cost comparison between Basic and Plus becomes most stark when modelled at real volumes. Take a brand processing £50,000/month through a third-party payment gateway. On Basic, the 2.0% fee is £1,000/month. On Advanced, the 0.5% fee is £250/month. On Plus, the 0.15% fee is £75/month.",
      },
      {
        type: "p",
        text: "At this volume, the difference between Basic and Plus in transaction fees alone is £925/month, which is £11,100/year. The Plus plan costs approximately £2,000/month. So at £50,000/month GMV on a third-party gateway, the transaction fee saving covers 46% of the Plus premium over Basic. That is not a trivial offset. At £100,000/month GMV the transaction fee saving versus Basic is £1,850/month, which more than covers the upgrade from Advanced (£344/month) to Plus (£2,000/month) when you factor in the full cost stack.",
      },
      {
        type: "h2",
        text: "Who Is Shopify Basic Right For?",
      },
      {
        type: "p",
        text: "Basic is the correct starting point for the majority of new Shopify stores. Specifically, it suits: startups and early-stage DTC brands with GMV below £500,000 per year; single-operator businesses where the founder handles all admin; brands testing a market before committing to infrastructure investment; side projects, seasonal businesses, and stores where ecommerce is a secondary revenue channel; and subscription box brands in their early stages where Recharge or similar handles the complexity and the core Shopify admin needs are minimal.",
      },
      {
        type: "h2",
        text: "Who Needs Shopify Plus?",
      },
      {
        type: "p",
        text: "The profile of a business that genuinely needs Shopify Plus is fairly specific. Brands with annual GMV consistently above £1M, where the operational complexity justifies the platform cost and the Plus features have clear commercial application. Multi-market retailers needing genuinely separate storefronts for different regions, not just localised pricing through Shopify Markets. B2B and wholesale operations where the native B2B channel is the most cost-effective way to manage trade customers alongside a consumer store. Brands with active CRO programmes where checkout extensibility is the lever needed to improve conversion. And businesses where manual operational processes, order management tasks, fraud workflows, or customer tagging, are consuming meaningful staff time that Flow could automate.",
      },
      {
        type: "h2",
        text: "The Upgrade Path",
      },
      {
        type: "p",
        text: "The sensible progression for most UK merchants looks like this: launch on Basic, stay there until you hit either the staff account cap or your third-party transaction fees become a noticeable cost, then move to Shopify mid-tier. As reporting needs grow and you want more granular analytics to inform decisions, upgrade to Advanced. Consider Plus seriously when any one of the following is true: your GMV is consistently above £1M, you need checkout customisation, you are building a B2B channel, or your operations team needs automation that Advanced cannot provide.",
      },
      {
        type: "p",
        text: "What you should avoid is upgrading to Plus as a status signal or because a competitor has done it. Plus is only valuable if you are using the features it provides. A brand on Plus that does not use Flow, does not have a CRO programme touching checkout, and runs a single consumer store with a single market is paying approximately £20,000/year for features it does not need. The upgrade should be driven by a clear, quantified business case, not aspiration.",
      },
      {
        type: "callout",
        text: "If you're approaching the point where Shopify Plus makes sense, talk to our team about the upgrade at /shopify-plus.",
      },
    ],
  },
];

export default batch12;
