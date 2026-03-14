import type { BlogPost } from "../blog-types";

const posts: BlogPost[] = [
  {
    slug: "luxury-fashion-shopify-plus-build",
    title: "How We Built a Luxury Fashion Store on Shopify Plus",
    category: "Case Studies",
    description: "A luxury fashion label needed a store that matched its brand prestige. Here's how we delivered a bespoke Shopify Plus build that lifted conversion by 42%.",
    readTime: "6 min read",
    date: "2025-06-10",
    image: "/images/articles/pexels-3944405.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#ef436b",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "When a premium UK fashion label approached us, their existing Magento store was costing them more in maintenance than it was making in revenue. Page load times exceeded six seconds on mobile, the checkout was clunky, and the visual experience was nowhere near the brand's positioning in the market. They needed a rebuild — and they needed it done without losing a single day of trading.",
      },
      {
        type: "h2",
        text: "The Challenge",
      },
      {
        type: "p",
        text: "The brand had built a loyal customer base over twelve years with an average order value exceeding £380. Their customers expected a premium experience from the first click to the unboxing. The old platform simply could not deliver that. Beyond performance, they needed custom size guides, a lookbook feature, and a VIP early-access tier for registered customers — none of which were possible out of the box.",
      },
      {
        type: "h2",
        text: "What We Did",
      },
      {
        type: "ul",
        items: [
          "Designed and built a fully custom Shopify Plus theme from a blank canvas — no template shortcuts.",
          "Implemented a custom metafield-driven lookbook that editors could update without a developer.",
          "Built a VIP customer tag system using Shopify Scripts to gate early-access collections.",
          "Created dynamic size guides using product metafields, reducing size-related returns by 18%.",
          "Optimised every image using next-gen formats and lazy loading, achieving a 91 PageSpeed score on mobile.",
          "Integrated Klaviyo flows for post-purchase and abandoned browse sequences.",
        ],
      },
      {
        type: "h2",
        text: "The Migration",
      },
      {
        type: "p",
        text: "We migrated 4,200 products, 22,000 customer records, and the full order history over a single weekend. We used a staging-to-live pipeline with automated redirect mapping, ensuring zero SEO equity was lost in the transition. The cutover happened at 2am on a Sunday — the safest window for a brand with a predominantly UK customer base.",
      },
      {
        type: "quote",
        text: "The new store feels like us. For the first time, our online presence actually matches what we stand for as a brand. The results speak for themselves.",
      },
      {
        type: "h2",
        text: "The Results",
      },
      {
        type: "ul",
        items: [
          "Conversion rate improved from 1.4% to 2.0% — a 42% uplift within 90 days of launch.",
          "Mobile revenue increased by 67% year-on-year in the first quarter post-launch.",
          "Average page load time dropped from 6.2 seconds to 1.8 seconds.",
          "Size-related returns fell by 18% thanks to the dynamic size guide system.",
          "VIP early-access launch generated £34,000 in revenue within 48 hours.",
        ],
      },
      {
        type: "callout",
        text: "Luxury brands often underestimate how much a slow, generic storefront undermines customer trust. Speed and craft are both signals of quality.",
      },
      {
        type: "h2",
        text: "Key Takeaways",
      },
      {
        type: "p",
        text: "This project reinforced a principle we hold across all premium builds: the experience is the brand. Every interaction — from filtering a collection to reading a product description — shapes how a customer perceives your label. Shopify Plus gave us the infrastructure; our custom build gave the brand its identity back.",
      },
    ],
  },
  {
    slug: "50000-product-catalogue-migration",
    title: "Migrating a 50,000 Product Catalogue to Shopify Plus",
    category: "Case Studies",
    description: "A large UK distributor needed to move 50,000 SKUs to Shopify Plus without disruption. We delivered a clean migration in six weeks with zero data loss.",
    readTime: "7 min read",
    date: "2025-05-28",
    image: "/images/articles/pexels-1181467.jpg",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ef436b",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Most Shopify migrations involve a few thousand products, a handful of collections, and a modest customer database. This one was different. A UK-based industrial distributor operating on a legacy WooCommerce instance came to us with 50,000 active SKUs, complex product variants, and a catalogue that had grown organically over a decade with inconsistent data quality. The brief was simple: get it all onto Shopify Plus, cleanly and quickly.",
      },
      {
        type: "h2",
        text: "Auditing the Existing Data",
      },
      {
        type: "p",
        text: "Before writing a single line of migration code, we spent two weeks auditing the WooCommerce database. What we found was a mess of duplicated SKUs, orphaned images, inconsistent category structures, and product attributes using six different naming conventions for the same field. We documented every anomaly before building our data transformation pipeline.",
      },
      {
        type: "h2",
        text: "Our Migration Approach",
      },
      {
        type: "ol",
        items: [
          "Data cleanse: deduplicated 4,200 SKUs, standardised attribute names, and removed 800 discontinued products.",
          "Taxonomy rebuild: redesigned the collection and tag structure to work with Shopify's filtering system.",
          "Image audit: re-compressed and renamed 180,000 product images to match SKUs.",
          "Transformation scripts: wrote Python ETL scripts to convert WooCommerce export formats to Shopify's import schema.",
          "Staged import: ran the full import in batches of 5,000 across 10 days on a staging environment.",
          "Redirect mapping: generated 50,000+ URL redirects to preserve search rankings.",
        ],
      },
      {
        type: "h2",
        text: "Technical Constraints",
      },
      {
        type: "p",
        text: "Shopify Plus has a hard limit of 100 variants per product. Approximately 600 of the client's products exceeded this threshold. For these, we created a custom product-linking metafield system that visually grouped related products in the storefront while keeping each Shopify product object within platform limits.",
      },
      {
        type: "callout",
        text: "Shopify's 100-variant limit catches many large catalogues off guard. Planning your taxonomy before you migrate saves weeks of rework.",
      },
      {
        type: "h2",
        text: "The Go-Live",
      },
      {
        type: "p",
        text: "We ran a parallel operation for 72 hours before cutover, syncing any new orders and product updates from the old WooCommerce store into the Shopify environment. This gave the client confidence that no data would be lost during the transition window. We cut over at midnight on a Friday with zero downtime.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Full 50,000 SKU catalogue live on Shopify Plus within six weeks.",
          "Zero customer-facing downtime during cutover.",
          "Organic search rankings maintained — no significant traffic drop in the 60 days following migration.",
          "Site speed improved from 4.1 seconds to 2.2 seconds average load time.",
          "Internal search conversion improved by 28% thanks to the rebuilt taxonomy and filtering.",
        ],
      },
      {
        type: "h3",
        text: "Lessons From This Project",
      },
      {
        type: "p",
        text: "Large catalogue migrations are won or lost in the planning phase. The actual import is the easy part; it's the data quality work that determines whether the resulting store is maintainable and performant. We now recommend a two-week data audit as a standalone project before any migration engagement of this scale.",
      },
    ],
  },
  {
    slug: "uk-furniture-brand-doubled-revenue",
    title: "How a UK Furniture Brand Doubled Revenue with Shopify",
    category: "Case Studies",
    description: "A mid-sized UK furniture retailer was stuck at £1.2m annual revenue. Our Shopify rebuild and CRO programme pushed them past £2.4m within 14 months.",
    readTime: "5 min read",
    date: "2025-05-15",
    image: "/images/articles/pexels-3182812.jpg",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#10b981",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "A family-run furniture brand based in the East Midlands had been trading online for seven years. Their revenue had plateaued at around £1.2m annually, and despite investing in paid advertising, growth had stalled. When they came to us, their Shopify theme was four years old, their product pages had no structured content, and their checkout abandoned at 78% — well above the industry average.",
      },
      {
        type: "h2",
        text: "Diagnosing the Problem",
      },
      {
        type: "p",
        text: "We started with a full CRO audit using session recordings, heatmaps, and exit surveys. Three issues dominated: customers couldn't visualise products in their own homes, delivery information was buried on a separate page, and the mobile experience was broken for users on iOS Safari. High-intent visitors were arriving and leaving without converting.",
      },
      {
        type: "h2",
        text: "The Rebuild",
      },
      {
        type: "p",
        text: "We rebuilt the store on a new custom theme with furniture retail at its core. Product pages were redesigned around high-resolution room-set photography, a delivery estimator using postcode lookup, and a fabric/finish swatch system powered by product variants. The mobile checkout was rebuilt end-to-end, reducing the steps from seven to three.",
      },
      {
        type: "h2",
        text: "CRO Programme",
      },
      {
        type: "ul",
        items: [
          "A/B tested delivery promise placement — moving it above the fold increased add-to-cart rate by 22%.",
          "Added a 'View in your room' AR feature using Shopify's built-in 3D model support.",
          "Introduced a buy-now-pay-later option via Klarna, increasing AOV by £65.",
          "Rebuilt the mega menu to surface popular collections within two clicks.",
          "Implemented a post-purchase upsell for care products and accessories.",
        ],
      },
      {
        type: "quote",
        text: "We'd been spending more and more on ads but getting diminishing returns. Fixing the site itself was the unlock we didn't know we needed.",
      },
      {
        type: "h2",
        text: "The Results",
      },
      {
        type: "ul",
        items: [
          "Revenue grew from £1.2m to £2.4m in 14 months — a 100% increase.",
          "Checkout abandonment dropped from 78% to 51%.",
          "Mobile conversion rate tripled from 0.6% to 1.9%.",
          "Average order value increased by £115 following Klarna integration and upsell implementation.",
          "Organic traffic grew 45% following a concurrent SEO programme.",
        ],
      },
      {
        type: "callout",
        text: "Doubling revenue is rarely about doubling ad spend. It's usually about fixing what happens after the click.",
      },
    ],
  },
  {
    slug: "sports-nutrition-shopify-plus-scaling",
    title: "Scaling a Sports Nutrition Brand with Shopify Plus",
    category: "Case Studies",
    description: "A fast-growing UK sports nutrition brand was outgrowing standard Shopify. We moved them to Plus and built the infrastructure to support 10x peak traffic.",
    readTime: "6 min read",
    date: "2025-05-02",
    image: "/images/articles/pexels-3760067.jpg",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#8b5cf6",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Sports nutrition is a brutally competitive market. Margins are tight, customer loyalty is hard-won, and product launches can make or break a quarter. Our client — a Manchester-based brand selling protein supplements and performance nutrition — had grown from a bedroom business to £3m annual revenue in three years. But their standard Shopify plan was creaking under the load of new product launches, influencer partnerships, and a growing subscription base.",
      },
      {
        type: "h2",
        text: "Why They Needed Plus",
      },
      {
        type: "ul",
        items: [
          "Checkout script customisation for influencer discount stacking.",
          "Shopify Flow automation for subscription management and loyalty triggers.",
          "Higher API rate limits to support real-time stock syncing with their 3PL warehouse.",
          "Unlimited staff accounts for a growing in-house marketing team.",
          "Launchpad for scheduled product drops with automated pricing and collection changes.",
        ],
      },
      {
        type: "h2",
        text: "The Upgrade Project",
      },
      {
        type: "p",
        text: "Upgrading from standard Shopify to Plus is not simply a plan change — it required rebuilding several integrations that relied on workarounds no longer needed on Plus. We rebuilt the checkout using Checkout Extensibility, added a custom loyalty points display in the cart drawer, and integrated Recharge for subscription management with a custom-designed subscriber portal.",
      },
      {
        type: "h3",
        text: "Product Launch Infrastructure",
      },
      {
        type: "p",
        text: "The brand launches new flavours and products monthly, often tied to athlete partnerships. We built a launch template system using Shopify Launchpad and pre-configured Klaviyo flows, allowing the marketing team to set up a complete product launch — including teaser email sequence, countdown timer, and post-launch review request — without any developer involvement.",
      },
      {
        type: "h2",
        text: "Handling Peak Traffic",
      },
      {
        type: "p",
        text: "Their biggest product drop generated 8,000 simultaneous sessions. On standard Shopify, this would have caused checkout slowdowns and potential order failures. On Plus, the checkout remained stable throughout, processing 340 orders in the first 10 minutes. We also implemented a virtual queue using a third-party app to manage expectation during high-demand drops.",
      },
      {
        type: "quote",
        text: "We used to dread launch days. Now we look forward to them. The infrastructure finally matches our ambition.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "First major product launch post-upgrade generated £180,000 in 24 hours.",
          "Subscription revenue grew from 8% to 31% of total revenue within six months.",
          "Zero checkout failures during peak traffic events.",
          "Marketing team reduced launch preparation time from 3 days to 4 hours.",
          "Overall revenue grew 140% year-on-year following the upgrade.",
        ],
      },
    ],
  },
  {
    slug: "cart-abandonment-reduction-35-percent",
    title: "How We Reduced Cart Abandonment by 35% for a Fashion Brand",
    category: "Case Studies",
    description: "A UK fashion brand was losing thousands of pounds daily to cart abandonment. Our targeted CRO and email programme cut abandonment by 35% in eight weeks.",
    readTime: "5 min read",
    date: "2025-04-19",
    image: "/images/articles/pexels-6214381.jpg",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#0ea5e9",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Cart abandonment is the silent revenue killer for most ecommerce businesses. Our client, a women's fashion brand based in London, was converting at 1.1% against an industry average of 1.8%. Their Google Analytics showed carts being added at healthy rates — the breakdown was happening between cart and completed purchase. We were brought in to find out why and fix it.",
      },
      {
        type: "h2",
        text: "What the Data Showed",
      },
      {
        type: "p",
        text: "Three weeks of session recording analysis and funnel tracking revealed a consistent pattern. Users were dropping off at two specific points: the shipping cost reveal on the cart page, and the account creation prompt on the checkout page. Both were solvable problems — but they required changes the in-house team hadn't prioritised.",
      },
      {
        type: "h2",
        text: "Interventions We Made",
      },
      {
        type: "ol",
        items: [
          "Added a free delivery progress bar to the cart drawer, displayed once users reached 75% of the £50 free delivery threshold.",
          "Replaced the mandatory account creation prompt with a guest checkout as the default path.",
          "Added trust badges (Trustpilot rating, secure payment, free returns) above the checkout button.",
          "Implemented a sticky checkout button on mobile so it remained visible while scrolling product images.",
          "Rebuilt the abandoned cart email sequence from a single email to a three-step flow over 24 hours.",
        ],
      },
      {
        type: "h3",
        text: "The Email Recovery Sequence",
      },
      {
        type: "p",
        text: "The original abandoned cart email went out at one hour with a generic subject line. We rebuilt it as a three-step sequence: a one-hour reminder showing the abandoned items, a six-hour email highlighting the free returns policy, and a 24-hour email with a 10% time-limited discount. Open rates on the new sequence were 41% against 18% for the original single email.",
      },
      {
        type: "callout",
        text: "The guest checkout change alone accounted for 14 percentage points of the abandonment reduction. Never force account creation at checkout.",
      },
      {
        type: "h2",
        text: "Results After Eight Weeks",
      },
      {
        type: "ul",
        items: [
          "Cart abandonment rate fell from 74% to 48% — a 35% reduction.",
          "Checkout completion rate improved from 26% to 52%.",
          "Abandoned cart email recovery generated an additional £12,400 in the first month.",
          "Average order value increased by £18 due to the free delivery progress bar driving higher basket sizes.",
          "Overall store conversion rate improved from 1.1% to 1.7%.",
        ],
      },
      {
        type: "quote",
        text: "I knew we had an abandonment problem but I didn't realise how fixable it was. The changes were logical — we just needed someone to make the case.",
      },
    ],
  },
  {
    slug: "subscription-box-shopify-build",
    title: "Building a Subscription Box Business on Shopify",
    category: "Case Studies",
    description: "A start-up subscription box brand needed a platform that could handle recurring billing, curated product reveals, and a growing member community from day one.",
    readTime: "6 min read",
    date: "2025-04-06",
    image: "/images/articles/pexels-4481259.jpg",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#f59e0b",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Subscription commerce has particular technical demands that generic Shopify themes and apps rarely address well. When this artisan food and drink subscription brand approached us ahead of their launch, they had a clear vision: monthly curated boxes, a subscriber-only content area revealing each month's products, and a frictionless sign-up flow that converted trial visitors into long-term members. We had ten weeks to build it.",
      },
      {
        type: "h2",
        text: "Platform Decisions",
      },
      {
        type: "p",
        text: "We chose Shopify as the foundation with Recharge Payments for subscription management. Recharge gave us the recurring billing infrastructure, subscriber portal, and dunning management that would have taken months to build from scratch. Our job was to build the custom theme layer that made the subscription experience feel native to the brand — not bolted on.",
      },
      {
        type: "h2",
        text: "Key Features Built",
      },
      {
        type: "ul",
        items: [
          "Custom subscription sign-up flow with plan selector, dietary preference capture, and gifting option.",
          "Subscriber portal built on Recharge's API with branded design — no generic Recharge UI in sight.",
          "Monthly 'reveal' content area, locked until dispatch day, using customer tag gating.",
          "Pause and skip functionality prominently surfaced in the portal to reduce churn.",
          "Referral programme integration using ReferralCandy, with credits applied automatically at renewal.",
          "Email flows for new subscribers, box dispatch, renewal reminders, and win-back sequences.",
        ],
      },
      {
        type: "h3",
        text: "The Churn Reduction Architecture",
      },
      {
        type: "p",
        text: "Most subscription businesses underestimate churn in their projections. We built proactive retention into the product from day one: a prominent skip-a-month option (reducing cancellations by directing dissatisfied customers to pause instead), an exit survey on the cancellation flow, and an automated win-back sequence triggered 45 days after cancellation.",
      },
      {
        type: "callout",
        text: "Making it easy to pause is counterintuitive but effective. Customers who pause are far more likely to resume than those who cancel outright.",
      },
      {
        type: "h2",
        text: "Results in Year One",
      },
      {
        type: "ul",
        items: [
          "1,200 active subscribers by month three, exceeding the launch target of 800.",
          "Monthly churn rate held at 4.2% — well below the industry average of 7–10%.",
          "Referral programme drove 22% of new sign-ups by month six.",
          "Average subscriber lifetime value of £312 by end of year one.",
          "Brand ranked in the top three for 'artisan food subscription UK' on Google within six months.",
        ],
      },
      {
        type: "h2",
        text: "Lessons Learned",
      },
      {
        type: "p",
        text: "The subscription model rewards investment in retention infrastructure far more than acquisition. Every percentage point reduction in monthly churn has a compounding effect on lifetime value. Building the subscriber portal and churn reduction flows before launch, rather than retrofitting them later, was the single best decision we made on this project.",
      },
    ],
  },
  {
    slug: "manchester-retailer-global-shopify-markets",
    title: "How a Manchester Retailer Went Global with Shopify Markets",
    category: "Case Studies",
    description: "A Manchester homewares brand was selling only to UK customers despite global demand. Shopify Markets opened six new territories and added £600k in revenue within a year.",
    readTime: "5 min read",
    date: "2025-03-24",
    image: "/images/articles/pexels-3856027.jpg",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#ef436b",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "The brand had been getting enquiries from customers in the US, Australia, Germany, and the UAE for years. They'd been turning them away — or sending them through a clunky currency converter and manual shipping calculator — because building a multi-market Shopify store felt technically daunting. Shopify Markets changed that calculation entirely, and we helped them make the move.",
      },
      {
        type: "h2",
        text: "What Shopify Markets Provides",
      },
      {
        type: "p",
        text: "Shopify Markets allows merchants to sell to multiple countries from a single Shopify store. It handles localised pricing, currency conversion, local payment methods, and market-specific domain or subdirectory structures. For our client, it meant going international without the overhead of maintaining separate stores or installing a complex multi-currency app stack.",
      },
      {
        type: "h2",
        text: "Our Implementation",
      },
      {
        type: "ol",
        items: [
          "Configured six markets: UK (existing), US, Australia, Germany, UAE, and Canada.",
          "Set market-specific pricing manually for the US and Germany to account for competitive positioning and VAT differences.",
          "Enabled local payment methods — iDEAL for Netherlands, BNPL options for Australia.",
          "Implemented geo-redirect with a market selector banner, respecting browser preference.",
          "Localised content for US and German markets — product descriptions, sizing references, and delivery copy.",
          "Configured Avalara for automated US tax calculation across states.",
        ],
      },
      {
        type: "h3",
        text: "Managing International Shipping",
      },
      {
        type: "p",
        text: "Shipping was the client's biggest concern. We integrated their fulfilment provider's API to display real-time carrier rates by market, and configured duty and import tax collection at checkout for relevant markets using Shopify's Delivered Duty Paid feature. This removed the single biggest reason international customers abandon carts: surprise charges on delivery.",
      },
      {
        type: "quote",
        text: "We'd been leaving money on the table for three years. I wish we'd done this sooner — it really wasn't as complicated as we feared.",
      },
      {
        type: "h2",
        text: "Results After 12 Months",
      },
      {
        type: "ul",
        items: [
          "International revenue of £618,000 in the first 12 months — entirely new revenue.",
          "US became the second largest market within six months.",
          "International conversion rate of 2.1%, matching the UK performance.",
          "Cart abandonment on international markets 8% lower than pre-launch estimates.",
          "Zero customer complaints related to unexpected import charges.",
        ],
      },
      {
        type: "callout",
        text: "Shopify Markets has made international expansion accessible for brands of all sizes. If you have customers asking where they can buy from outside the UK, the answer is now straightforward.",
      },
    ],
  },
  {
    slug: "homeware-brand-email-revenue-tripled",
    title: "Tripling Email Revenue for a UK Homeware Brand",
    category: "Case Studies",
    description: "A UK homeware brand was under-leveraging its 80,000-strong email list. Our Klaviyo overhaul tripled email-attributed revenue in just four months.",
    readTime: "5 min read",
    date: "2025-03-11",
    image: "/images/articles/pexels-2220316.jpg",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#f97316",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Email marketing should be the highest-ROI channel for any ecommerce brand. For this homeware retailer, it was generating just 8% of total revenue despite an 80,000-subscriber list built over five years. Their previous agency had been sending weekly broadcast emails — same message, same segment, same underperformance. We rebuilt their entire Klaviyo operation from scratch.",
      },
      {
        type: "h2",
        text: "The Audit Findings",
      },
      {
        type: "ul",
        items: [
          "No automated flows beyond a single welcome email.",
          "No list segmentation — all 80,000 subscribers receiving the same campaigns.",
          "Deliverability health score of 62% due to years of sending to unengaged contacts.",
          "No post-purchase sequence — a huge missed opportunity for a brand with high repeat purchase potential.",
          "Average open rate of 14% — industry average for homeware is 22–26%.",
        ],
      },
      {
        type: "h2",
        text: "What We Built",
      },
      {
        type: "p",
        text: "Before sending a single new email, we spent three weeks on deliverability recovery: suppressing contacts unengaged for over 12 months, validating the list, and warming the domain with a re-engagement campaign. Once deliverability was restored, we built the flow architecture.",
      },
      {
        type: "h3",
        text: "Automated Flow Architecture",
      },
      {
        type: "ul",
        items: [
          "Welcome series: five emails over 14 days introducing the brand, values, and bestsellers.",
          "Abandoned cart: three-step sequence at 1 hour, 6 hours, and 24 hours.",
          "Browse abandonment: triggered for high-value collection visitors who didn't add to cart.",
          "Post-purchase: six-email sequence over 60 days driving reviews, complementary products, and loyalty sign-ups.",
          "Win-back: triggered at 90 days of inactivity with a personalised product recommendation.",
          "VIP flow: triggered when customers crossed the top 10% spend threshold.",
        ],
      },
      {
        type: "h2",
        text: "Campaign Segmentation",
      },
      {
        type: "p",
        text: "Broadcast campaigns were rebuilt around six core segments: new subscribers (under 30 days), active customers (purchased in 90 days), lapsed customers (90–180 days), high-value customers, seasonal buyers (Christmas and summer only), and product-interest segments based on browsing and purchase history.",
      },
      {
        type: "quote",
        text: "We had no idea our email list was this valuable. It was all just sitting there doing nothing.",
      },
      {
        type: "h2",
        text: "Results After Four Months",
      },
      {
        type: "ul",
        items: [
          "Email revenue grew from 8% to 26% of total revenue.",
          "Total email-attributed revenue tripled in absolute terms.",
          "Average open rate improved from 14% to 31%.",
          "Automated flows now account for 44% of all email revenue.",
          "List growth rate increased 35% following the opt-in optimisation work.",
        ],
      },
    ],
  },
  {
    slug: "90-pagespeed-score-shopify",
    title: "How We Achieved a 90+ PageSpeed Score on a Shopify Store",
    category: "Case Studies",
    description: "A Shopify store bloated with apps and unoptimised images was scoring 31 on PageSpeed. We rebuilt the theme and achieved a 92 score without losing any functionality.",
    readTime: "6 min read",
    date: "2025-02-26",
    image: "/images/articles/pexels-3622608.jpg",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#06b6d4",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "A PageSpeed score of 31 is not unusual for a Shopify store that's been live for a few years. Apps accumulate, images go un-optimised, and third-party scripts pile up. For this outdoor clothing brand, the slow site was costing them in both conversion rate and organic rankings — Google had started to demote them in mobile search results. The brief was clear: get above 90 without losing a single feature.",
      },
      {
        type: "h2",
        text: "The Performance Audit",
      },
      {
        type: "p",
        text: "We started with a full Core Web Vitals audit. The Largest Contentful Paint (LCP) was 8.2 seconds — catastrophic. The main culprits were a 3.4MB hero image, seven third-party scripts loading synchronously in the head, and a review app injecting 140KB of CSS that blocked rendering. Total page weight was 9.1MB.",
      },
      {
        type: "h2",
        text: "What We Fixed",
      },
      {
        type: "ol",
        items: [
          "Re-encoded all images to WebP format and implemented responsive image srcsets — saved 2.8MB from the hero alone.",
          "Audited all 14 installed apps and removed 6 that had no measurable revenue impact.",
          "Moved all third-party scripts to load asynchronously after the page paint.",
          "Replaced the review app with a leaner alternative with 60% less JavaScript payload.",
          "Implemented native lazy loading on all below-the-fold images.",
          "Built a custom section for the hero using Liquid to avoid the app dependency entirely.",
          "Removed 40KB of unused CSS from the base theme using PurgeCSS.",
          "Preloaded the LCP image using a resource hint in the theme head.",
        ],
      },
      {
        type: "h3",
        text: "The App Audit",
      },
      {
        type: "p",
        text: "Every app installed on Shopify adds JavaScript and CSS to the storefront whether it's actively used or not. We found three apps that hadn't been used in over a year but were still loading on every page. Removing unused apps is always the highest-leverage action on a performance project — and it's free.",
      },
      {
        type: "callout",
        text: "Reducing page weight from 9.1MB to 2.3MB was the single biggest contributor to the performance improvement. Image optimisation alone is often worth 30–40 PageSpeed points.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "PageSpeed mobile score improved from 31 to 92.",
          "Largest Contentful Paint improved from 8.2 seconds to 1.4 seconds.",
          "Total page weight reduced from 9.1MB to 2.3MB.",
          "Organic search impressions increased 34% in the 60 days following the improvement.",
          "Mobile conversion rate improved from 0.8% to 1.5% within 30 days.",
        ],
      },
      {
        type: "h2",
        text: "Maintaining Performance",
      },
      {
        type: "p",
        text: "We documented a performance budget for the client — maximum JavaScript payload, image size guidelines, and a monthly app audit process. Performance improvements decay over time unless there's a process to protect them. We set up a Lighthouse CI check on their staging environment so any new app installation that degrades performance is flagged before it goes live.",
      },
    ],
  },
  {
    slug: "b2b-wholesale-500k-12-months",
    title: "B2B Wholesale Launch: From Zero to £500k in 12 Months",
    category: "Case Studies",
    description: "A D2C brand wanted to open a B2B wholesale channel without building a separate platform. We launched a Shopify Plus wholesale store that hit £500k revenue in year one.",
    readTime: "6 min read",
    date: "2025-02-13",
    image: "/images/articles/pexels-416778.jpg",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#6366f1",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "A successful D2C skincare brand had been receiving wholesale enquiries from independent retailers and salons for two years. They'd been turning them down because they had no infrastructure to handle wholesale pricing, trade accounts, or minimum order quantities. With Shopify Plus, we built them a fully featured B2B wholesale channel as a dedicated expansion store — sharing the same product catalogue but with a completely different buying experience.",
      },
      {
        type: "h2",
        text: "The B2B Requirements",
      },
      {
        type: "ul",
        items: [
          "Trade account application and approval flow.",
          "Tiered pricing based on customer group (Stockist, Salon Partner, Distributor).",
          "Minimum order quantities enforced at product and order level.",
          "Net 30 payment terms for approved accounts.",
          "Custom order forms for reorders — eliminating the need to browse collections.",
          "Volume discount calculator visible on product pages.",
        ],
      },
      {
        type: "h2",
        text: "Technical Build",
      },
      {
        type: "p",
        text: "We built the B2B store on a Shopify Plus expansion store, keeping it separate from the D2C storefront to avoid pricing leakage and brand confusion. Pricing tiers were managed using customer tags and Shopify Scripts applied at checkout. The trade account application was built as a custom form feeding into a Shopify Flow approval workflow, with approved accounts automatically assigned to the correct pricing tier.",
      },
      {
        type: "h3",
        text: "The Order Form Experience",
      },
      {
        type: "p",
        text: "B2B buyers don't shop like consumers. They know what they want, they want to reorder quickly, and they don't need to browse. We built a custom order form page — essentially a spreadsheet-style product list with quantity inputs — that allowed trade customers to build a complete order in under two minutes. This single feature was cited in every post-launch customer interview as the reason they preferred our client over competitors.",
      },
      {
        type: "quote",
        text: "Our trade customers tell us it's the easiest wholesale portal they use. That's a real competitive advantage — it keeps them coming back.",
      },
      {
        type: "h2",
        text: "Results in Year One",
      },
      {
        type: "ul",
        items: [
          "£512,000 in wholesale revenue in the first 12 months.",
          "248 approved trade accounts by month 12.",
          "Average wholesale order value of £840.",
          "Net 30 default payment terms with 94% on-time payment rate.",
          "B2B channel now accounts for 28% of total brand revenue.",
        ],
      },
      {
        type: "callout",
        text: "Shopify Plus expansion stores are the most underused feature on the platform. A separate B2B store from a single admin is a remarkably powerful setup for brands ready to scale wholesale.",
      },
    ],
  },
  {
    slug: "pet-products-shopify-plus-rebuild",
    title: "Rebuilding a Pet Products Store on Shopify Plus",
    category: "Case Studies",
    description: "A fast-growing UK pet products brand had outgrown its original Shopify theme. We delivered a full Shopify Plus rebuild that improved conversion by 38% within three months.",
    readTime: "5 min read",
    date: "2025-01-31",
    image: "/images/articles/pexels-1552252.jpg",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#10b981",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Five years into trading, this pet products brand had accumulated every symptom of an over-patched store: seven different font families loaded across the site, seven review apps competing for DOM space, product pages built in three different Shopify theme versions, and a checkout that looked nothing like the rest of the brand. Revenue was growing despite the site, not because of it. We were asked to start fresh.",
      },
      {
        type: "h2",
        text: "Discovery and Strategy",
      },
      {
        type: "p",
        text: "We began with three weeks of customer research: session recordings, exit surveys, and interviews with the customer service team about the most common pre-purchase questions. The findings shaped every design decision. Pet owners wanted to know if a product was safe for their pet's breed and age. The existing site offered no guidance — customers were guessing and abandoning.",
      },
      {
        type: "h2",
        text: "The New Store Architecture",
      },
      {
        type: "ul",
        items: [
          "Custom product page layout with breed and age suitability filters driven by metafields.",
          "Ingredient transparency section on every product page, a key trust signal in the pet food category.",
          "Bundle builder allowing customers to create subscription bundles from any combination of products.",
          "Loyalty points visible throughout the journey — in cart, on product pages, and in the account area.",
          "Pet profile system allowing customers to save their pet's details for tailored recommendations.",
        ],
      },
      {
        type: "h3",
        text: "Subscription Integration",
      },
      {
        type: "p",
        text: "The brand's existing subscription base used a legacy app with a poor customer portal. We migrated to Recharge with a custom-designed portal, and introduced a 'subscribe and save' prompt on every product page with dynamic savings calculation. Subscription sign-up rate doubled within eight weeks of launch.",
      },
      {
        type: "callout",
        text: "Pet owners are emotionally invested in making the right choice for their animals. Product pages that answer breed and age suitability questions convert dramatically better than generic descriptions.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Conversion rate improved from 1.9% to 2.6% — a 38% uplift within three months.",
          "Subscription sign-up rate doubled from 12% to 24% of all orders.",
          "Average order value increased by £22 following the bundle builder launch.",
          "Customer satisfaction score (measured via post-purchase survey) improved from 3.8 to 4.7 out of 5.",
          "PageSpeed mobile score improved from 44 to 88.",
        ],
      },
    ],
  },
  {
    slug: "health-wellness-brand-300-percent-growth",
    title: "How a Health & Wellness Brand Grew 300% in 18 Months",
    category: "Case Studies",
    description: "A UK health and wellness start-up used Shopify Plus, targeted SEO, and a rebuilt CRO strategy to grow 300% in 18 months and establish category leadership.",
    readTime: "6 min read",
    date: "2025-01-18",
    image: "/images/articles/pexels-1640777.jpg",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ef436b",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "When we first met this health supplement brand, they had a good product, a small but loyal customer base, and a Shopify store that was doing the bare minimum. Revenue was £420,000 in year one — respectable for a start-up, but well below what the product quality merited. Over 18 months, working across platform, SEO, and CRO, we took them to £1.68m.",
      },
      {
        type: "h2",
        text: "Phase One: Platform and Foundation (Months 1–3)",
      },
      {
        type: "p",
        text: "The existing site had critical technical SEO issues: duplicate collection URLs, no schema markup, and a blog with 40 posts that were all targeting the same three keywords. We rebuilt the Shopify theme with clean semantic HTML, implemented Product and Article schema, fixed the canonical structure, and restructured the content strategy around a keyword cluster model.",
      },
      {
        type: "h2",
        text: "Phase Two: Content and Authority Building (Months 4–9)",
      },
      {
        type: "ul",
        items: [
          "Produced 24 long-form blog posts targeting informational keywords in the supplements category.",
          "Obtained 18 editorial backlinks from health and fitness publications.",
          "Built a 'Research Hub' content area housing clinical study summaries for each product.",
          "Launched a health quiz generating personalised product recommendations and capturing email addresses.",
        ],
      },
      {
        type: "h2",
        text: "Phase Three: CRO and Retention (Months 10–18)",
      },
      {
        type: "p",
        text: "With traffic growing strongly, we turned attention to conversion and retention. We ran a 12-week CRO programme testing product page layouts, checkout flows, and subscription prompts. Simultaneously, we built out a Klaviyo architecture covering the full customer lifecycle from welcome to win-back.",
      },
      {
        type: "h3",
        text: "The Health Quiz",
      },
      {
        type: "p",
        text: "The health quiz became the brand's most important acquisition tool. Embedded on the homepage and driven by paid social traffic, it generated personalised supplement recommendations and captured an email address for every completion. By month 18, the quiz had a 68% completion rate and was converting 11% of completions to purchase — dramatically above the site average.",
      },
      {
        type: "quote",
        text: "The quiz changed our business. It's not just a marketing tool — it's how customers understand what they actually need.",
      },
      {
        type: "h2",
        text: "18-Month Results",
      },
      {
        type: "ul",
        items: [
          "Revenue grew from £420,000 to £1.68m — a 300% increase.",
          "Organic search became the largest traffic channel, overtaking paid social.",
          "Email revenue grew from 6% to 29% of total revenue.",
          "Subscription revenue reached 35% of all orders by month 18.",
          "Domain Rating (Ahrefs) grew from 12 to 41.",
        ],
      },
    ],
  },
  {
    slug: "custom-shopify-app-manufacturing",
    title: "Custom Shopify App Built for a UK Manufacturing Business",
    category: "Case Studies",
    description: "A UK manufacturer needed to give trade customers real-time stock visibility and custom pricing. We built a bespoke Shopify app that transformed their ordering process.",
    readTime: "6 min read",
    date: "2025-01-05",
    image: "/images/articles/pexels-5765873.jpg",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#8b5cf6",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Off-the-shelf Shopify apps solve 80% of problems elegantly. The remaining 20% — especially in manufacturing and industrial supply — often require bespoke solutions. This UK manufacturer of specialist fixings and fasteners had a unique challenge: 1,200 trade customers each with negotiated pricing tiers, real-time stock levels that changed hourly, and a legacy ERP system that had been running the business for 15 years.",
      },
      {
        type: "h2",
        text: "The Problem We Were Solving",
      },
      {
        type: "ul",
        items: [
          "Trade customers needed to see their individually negotiated prices, not standard RRP.",
          "Stock levels in Shopify were always out of date — the ERP was the single source of truth.",
          "Account managers needed to create and send custom quotes directly within the Shopify admin.",
          "Customers needed the ability to order against their negotiated credit terms without paying at checkout.",
        ],
      },
      {
        type: "h2",
        text: "The Architecture We Built",
      },
      {
        type: "p",
        text: "We built a private Shopify app using the Shopify Admin API and App Proxy. The app had two components: a webhook-driven ERP sync running every 15 minutes to update stock levels across 8,000 SKUs, and a customer-facing pricing layer that intercepted the cart and checkout to apply account-specific pricing from the ERP's price list data.",
      },
      {
        type: "h3",
        text: "The Quote Builder",
      },
      {
        type: "p",
        text: "Account managers needed to generate formal PDF quotes from within the Shopify admin. We built a custom Shopify App Extension embedding a quote builder in the admin sidebar. Managers could select products, apply custom line-item pricing, set validity periods, and send the quote as a branded PDF. Customers could accept the quote and convert it to an order in one click.",
      },
      {
        type: "callout",
        text: "Custom Shopify apps are a significant investment but can deliver ROI that no off-the-shelf solution ever could for businesses with genuinely unique operational requirements.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Order processing time reduced from 48 hours to under 4 hours.",
          "Stock accuracy on the Shopify store improved from 61% to 97%.",
          "Accounts receivable improved — 84% of trade orders now paid within agreed terms.",
          "Account manager productivity increased: each manager now handles 40% more accounts.",
          "Customer satisfaction with the ordering process scored 4.6 out of 5 in post-launch survey.",
        ],
      },
      {
        type: "h2",
        text: "Key Technical Considerations",
      },
      {
        type: "p",
        text: "Building a reliable ERP sync required careful attention to Shopify's API rate limits and webhook reliability. We implemented a queue-based update system with retry logic, and built an admin dashboard showing sync health status. The client's IT team can now monitor the integration independently without developer support.",
      },
    ],
  },
  {
    slug: "sap-shopify-plus-integration",
    title: "How We Integrated SAP with Shopify Plus",
    category: "Case Studies",
    description: "A large UK retailer needed their Shopify Plus store connected to SAP for real-time stock, order sync, and financial reporting. Here's how we built it.",
    readTime: "7 min read",
    date: "2024-12-23",
    image: "/images/articles/pexels-3184360.jpg",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    accent: "#0ea5e9",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "SAP integrations are the most technically demanding projects we undertake. When a large UK homewares retailer came to us with 40,000 SKUs, a SAP S/4HANA ERP, and a Shopify Plus store that was manually synced via weekly CSV exports, the operational pain was immense. Stock errors, overselling, and reporting delays were costing them an estimated £80,000 a year in operational waste.",
      },
      {
        type: "h2",
        text: "The Integration Requirements",
      },
      {
        type: "ul",
        items: [
          "Real-time stock level sync from SAP to Shopify (target: under 5 minutes lag).",
          "Bi-directional order sync — Shopify orders flowing to SAP for fulfilment, SAP fulfilment status updating Shopify.",
          "Customer master data sync for B2B accounts.",
          "Product data managed in SAP and pushed to Shopify — including pricing, descriptions, and images.",
          "Financial reconciliation feed for the client's finance team.",
        ],
      },
      {
        type: "h2",
        text: "Architecture Decisions",
      },
      {
        type: "p",
        text: "We chose a middleware architecture rather than direct API-to-API integration. SAP's API layer has rate limiting considerations and complex authentication, and a direct connection creates tight coupling that makes future changes expensive. We used a managed integration platform (Celigo) as the middleware, configured with custom transformation logic for the client's specific SAP configuration.",
      },
      {
        type: "h3",
        text: "Handling Stock in Real Time",
      },
      {
        type: "p",
        text: "SAP stock updates trigger a webhook to our middleware, which transforms the data and calls Shopify's Inventory API. For 40,000 SKUs with multiple warehouse locations, this generates significant event volume. We batched updates intelligently — aggregating changes within a 60-second window before pushing to Shopify — achieving sub-3-minute lag in practice with 99.8% API success rate.",
      },
      {
        type: "h3",
        text: "Order Flow",
      },
      {
        type: "p",
        text: "Every Shopify order triggers an immediate push to SAP, where it enters the standard fulfilment workflow. SAP creates a delivery note and, on despatch, sends a fulfilment confirmation back via middleware to Shopify. Customers receive their shipping confirmation email within minutes of SAP confirming despatch — not on the following morning when a batch process previously ran.",
      },
      {
        type: "callout",
        text: "Middleware architecture adds a layer but dramatically improves resilience and maintainability. A direct SAP-to-Shopify connection is rarely the right choice for complex integrations.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Stock accuracy improved from 78% to 99.1%.",
          "Oversell incidents dropped from 120 per month to under 5.",
          "Order processing time from purchase to SAP reduced from next-day to under 3 minutes.",
          "Finance team saved 12 hours per week previously spent on manual reconciliation.",
          "Estimated annual operational saving of £95,000.",
        ],
      },
    ],
  },
  {
    slug: "beauty-brand-woocommerce-to-shopify",
    title: "A Beauty Brand's Journey from WooCommerce to Shopify Plus",
    category: "Case Studies",
    description: "After years of fighting WooCommerce performance issues, a UK beauty brand made the move to Shopify Plus. Revenue grew 58% in the six months following migration.",
    readTime: "5 min read",
    date: "2024-12-10",
    image: "/images/articles/pexels-1181406.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#ef436b",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "This independent beauty brand had built a loyal following over eight years on WooCommerce. But their hosting bills were growing, their developer costs for maintenance were escalating, and every peak trading period came with anxiety about whether the server would hold. After their third site crash during a promotional event in as many years, they made the decision to move.",
      },
      {
        type: "h2",
        text: "Why They'd Stayed on WooCommerce So Long",
      },
      {
        type: "p",
        text: "The founder had been told that WooCommerce offered more flexibility and lower platform fees. Both are true in narrow circumstances. But after accounting for hosting, plugin licences, developer maintenance, and the cost of downtime events, they were spending more on WooCommerce than a Shopify Plus subscription would have cost — and getting less in return.",
      },
      {
        type: "h2",
        text: "The Migration",
      },
      {
        type: "ul",
        items: [
          "Migrated 1,800 products with all variants, images, and metafields.",
          "Transferred 35,000 customer records with order history and loyalty points balance.",
          "Generated 1,800 URL redirects from WooCommerce permalink structure to Shopify URLs.",
          "Rebuilt the custom loyalty programme using Smile.io with existing point balances imported.",
          "Rebuilt the product review database using Judge.me, preserving all existing review content.",
        ],
      },
      {
        type: "h3",
        text: "Rebuilding the Theme",
      },
      {
        type: "p",
        text: "The WooCommerce theme had accumulated significant technical debt. Rather than try to replicate it, we used the migration as an opportunity to redesign. The new Shopify theme was built around the brand's photography and colour palette, with a new editorial-style homepage, improved collection filtering, and a significantly simplified checkout.",
      },
      {
        type: "quote",
        text: "I used to dread Monday mornings after a weekend promotion. Now I don't think about the site at all — it just works.",
      },
      {
        type: "h2",
        text: "Six-Month Results Post-Migration",
      },
      {
        type: "ul",
        items: [
          "Revenue grew 58% in the six months following migration versus the same period the prior year.",
          "Zero site downtime in the first six months, compared to three critical incidents in the prior year.",
          "Mobile conversion rate improved from 0.9% to 1.8%.",
          "Tech overhead reduced — no hosting costs, no plugin updates, no server management.",
          "Customer satisfaction score improved from 3.9 to 4.6, driven largely by faster site speed.",
        ],
      },
      {
        type: "callout",
        text: "The true cost of WooCommerce is rarely the licence fee. It's the hosting, maintenance, plugin conflicts, and developer time that makes the real comparison unfavourable.",
      },
    ],
  },
  {
    slug: "jewellery-brand-multi-currency-shopify",
    title: "How We Built a Multi-Currency Store for a Jewellery Brand",
    category: "Case Studies",
    description: "A UK jewellery brand was losing international sales due to GBP-only pricing. Our multi-currency Shopify build improved international conversion by 44% within 90 days.",
    readTime: "5 min read",
    date: "2024-11-27",
    image: "/images/articles/pexels-3051793.jpg",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#f59e0b",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Over 35% of this jewellery brand's website traffic came from outside the UK, predominantly the US, EU, and Australia. Yet international conversion was just 0.3% against a UK rate of 1.9%. Exit surveys pointed to a clear reason: customers didn't want to buy in GBP and deal with unknown conversion charges on their card statement. The fix was obvious — the implementation required care.",
      },
      {
        type: "h2",
        text: "The Currency Strategy",
      },
      {
        type: "p",
        text: "We enabled Shopify Payments' multi-currency feature and configured it to auto-detect the customer's location and display prices in their local currency. For the US, EU, and Australia — the three highest-traffic international markets — we set fixed prices rather than relying on automatic FX conversion. This gave the brand control over price points and avoided awkward prices like $47.83 showing in place of a clean $48.",
      },
      {
        type: "h2",
        text: "Implementation Details",
      },
      {
        type: "ul",
        items: [
          "Configured Shopify Markets for UK, US, EU (EUR), and Australia.",
          "Set fixed manual prices for USD, EUR, and AUD for all 380 products.",
          "Built a custom currency selector in the header with flag icons and currency codes.",
          "Configured checkout to settle in the customer's local currency where supported.",
          "Added localised trust signals — US customers see '🇺🇸 Free returns for US orders'.",
          "Configured geo-redirect to auto-switch market on first visit.",
        ],
      },
      {
        type: "h3",
        text: "The Jewellery-Specific Challenges",
      },
      {
        type: "p",
        text: "Jewellery pricing often carries psychological price points — a ring priced at £295 in the UK should be $375 in the US, not a calculated $378.43. We worked through every product in the catalogue to set pricing that maintained brand positioning in each market while remaining commercially sound against the FX rate. This took a full week of careful work but had a significant impact on perceived value.",
      },
      {
        type: "callout",
        text: "Psychological pricing matters in jewellery. A customer considering a $375 ring is in a different headspace to one staring at $378.43 — even if the difference is trivial.",
      },
      {
        type: "h2",
        text: "Results After 90 Days",
      },
      {
        type: "ul",
        items: [
          "International conversion rate improved from 0.3% to 0.43% — a 44% uplift.",
          "US revenue grew 210% in the first quarter post-launch.",
          "EU revenue grew from negligible to £18,000 per month.",
          "Cart abandonment on international sessions reduced by 27%.",
          "Overall revenue grew 34% despite no increase in advertising spend.",
        ],
      },
    ],
  },
  {
    slug: "reducing-support-tickets-shopify",
    title: "Reducing Customer Support Tickets by 60% with Shopify",
    category: "Case Studies",
    description: "A growing Shopify brand was drowning in customer service tickets. We identified the root causes on the storefront and reduced ticket volume by 60% in six weeks.",
    readTime: "5 min read",
    date: "2024-11-14",
    image: "/images/articles/pexels-6006785.jpg",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)",
    accent: "#ef436b",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Customer service tickets are expensive — but they're also signals. Every ticket is a customer who couldn't find an answer on your website. When this outdoor equipment brand came to us, they had a customer service team of six handling 800 tickets per week, 65% of which were asking questions that could and should have been answered on the product page.",
      },
      {
        type: "h2",
        text: "Ticket Analysis",
      },
      {
        type: "p",
        text: "We analysed 1,000 consecutive support tickets and categorised them. The results were revealing: 28% asked about delivery times and costs, 21% asked about sizing and fit, 18% asked about returns policy, 14% asked about product compatibility, and 11% asked about order status. The remaining 8% were genuine issues. Over three-quarters of tickets were answerable with better on-site information.",
      },
      {
        type: "h2",
        text: "Changes Made to the Storefront",
      },
      {
        type: "ol",
        items: [
          "Added a dynamic delivery estimator to every product page using postcode lookup.",
          "Created comprehensive size guides for every product category, linked from the product page.",
          "Added a returns calculator showing the refund window for each specific product based on today's date.",
          "Built a product compatibility section on relevant product pages using metafields.",
          "Added a persistent order tracking widget in the account area, pulling live carrier data.",
          "Implemented a searchable FAQ system embedded on product pages for the top 50 products.",
        ],
      },
      {
        type: "h3",
        text: "The Chatbot Consideration",
      },
      {
        type: "p",
        text: "The client had considered implementing a customer service chatbot. Our recommendation was different: fix the information architecture on the site first. Chatbots answer questions — better product pages prevent the question from arising. Preventing a ticket is always cheaper than answering it, even with automation.",
      },
      {
        type: "callout",
        text: "The majority of customer service tickets are a product design problem, not a staffing problem. Fix the information gap on the website and the ticket volume falls.",
      },
      {
        type: "h2",
        text: "Results After Six Weeks",
      },
      {
        type: "ul",
        items: [
          "Weekly ticket volume fell from 800 to 320 — a 60% reduction.",
          "Average handle time for remaining tickets fell as they were more complex, genuine issues.",
          "Customer satisfaction (CSAT) improved from 3.7 to 4.4, as customers were no longer waiting for answers.",
          "Two customer service positions were redeployed to proactive customer success roles.",
          "Conversion rate improved by 0.3 percentage points as on-site information reduced purchase hesitation.",
        ],
      },
    ],
  },
  {
    slug: "food-drink-email-marketing-success",
    title: "How a Food & Drink Brand Conquered Email Marketing",
    category: "Case Studies",
    description: "A UK artisan food brand had 25,000 subscribers and no email strategy. Within five months, email became their largest revenue channel, generating 34% of total sales.",
    readTime: "5 min read",
    date: "2024-11-01",
    image: "/images/articles/pexels-590016.jpg",
    gradient: "linear-gradient(135deg, #ef436b 0%, #c0392b 100%)",
    accent: "#ef436b",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "Artisan food brands are uniquely positioned for email marketing. They have stories to tell — provenance, craft, seasonality, the people behind the product. Yet this Yorkshire-based food and drink brand was sending a single newsletter once a month with no flows, no segmentation, and no clear strategy. Email was generating 4% of their revenue when it should have been generating 30%.",
      },
      {
        type: "h2",
        text: "Strategy Before Execution",
      },
      {
        type: "p",
        text: "We started by defining the content pillars that would form the backbone of the email programme: product stories, seasonal recipes, behind-the-scenes production content, and customer spotlights. For a food brand, email is as much about building a community as it is about driving transactions. The commercial results follow when the content genuinely engages.",
      },
      {
        type: "h2",
        text: "The Flow Architecture",
      },
      {
        type: "ul",
        items: [
          "Welcome series: four emails over 10 days introducing the founders, the farm, and bestsellers.",
          "Post-purchase: recipe email sent 3 days after delivery for relevant product categories.",
          "Abandoned cart: two-step sequence featuring product story content alongside the commercial prompt.",
          "Seasonal campaigns: pre-built templates for Christmas, Valentine's Day, Easter, and summer gifting.",
          "Win-back: triggered at 120 days inactivity with a 'What we've been making' content email.",
        ],
      },
      {
        type: "h3",
        text: "The Recipe Emails",
      },
      {
        type: "p",
        text: "The post-purchase recipe email — sent three days after delivery, matched to the specific products ordered — became the best-performing automated email in the programme. Open rates of 52% and click rates of 18% were consistently above industry benchmarks. Customers replied with their own photos and variations. The brand was building a genuine community, not just a mailing list.",
      },
      {
        type: "quote",
        text: "Our recipe emails get more replies than anything else we send. Customers share them with friends. It's the best marketing we've ever done.",
      },
      {
        type: "h2",
        text: "Results After Five Months",
      },
      {
        type: "ul",
        items: [
          "Email revenue grew from 4% to 34% of total sales.",
          "Average open rate across all sends improved from 16% to 38%.",
          "Automated flows generate 45% of all email revenue.",
          "Email list grew 28% through a content-driven opt-in strategy.",
          "Customer lifetime value increased 42% for subscribers versus non-subscribers.",
        ],
      },
    ],
  },
  {
    slug: "d2c-sports-brand-shopify-build",
    title: "Building a D2C Sports Brand from Scratch on Shopify",
    category: "Case Studies",
    description: "A challenger sports nutrition brand needed to launch D2C and compete against established names. We built their Shopify store and go-to-market strategy from zero.",
    readTime: "6 min read",
    date: "2024-10-19",
    image: "/images/articles/pexels-669615.jpg",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    accent: "#10b981",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "Most of our projects are rebuilds or migrations. This one was a true greenfield launch. Two founders with backgrounds in professional sport wanted to build a credible challenger brand in the UK protein supplement market — a category dominated by brands with decades of heritage and eight-figure marketing budgets. Our job was to build the platform and the strategy that would give them a fighting chance.",
      },
      {
        type: "h2",
        text: "Platform Architecture",
      },
      {
        type: "p",
        text: "We chose Shopify Plus from day one despite the higher monthly cost. The founders had aggressive growth targets, planned influencer partnerships, and intended to launch subscription products. Starting on standard Shopify and upgrading later would have required a rebuild within 12 months — it was cheaper to start right.",
      },
      {
        type: "h2",
        text: "What We Built",
      },
      {
        type: "ul",
        items: [
          "Custom Shopify Plus theme designed around athlete imagery and science-backed credibility.",
          "Ingredient transparency pages for every product, with cited research sources.",
          "Ambassador portal for the 20 professional athletes who would be promoting the brand.",
          "Subscription programme using Recharge with a custom subscriber portal.",
          "Affiliate programme integrated with Impact.com for influencer and media partnerships.",
          "Product quiz generating personalised stack recommendations.",
        ],
      },
      {
        type: "h3",
        text: "The SEO Foundation",
      },
      {
        type: "p",
        text: "Competing on paid channels in supplements is brutally expensive. We built an SEO content strategy targeting long-tail keywords where the incumbents were weaker — specific ingredient questions, sport-specific nutrition queries, and comparative content. This gave the brand a path to sustainable organic traffic that didn't require outspending established players.",
      },
      {
        type: "callout",
        text: "Launching D2C in a competitive category requires a clear differentiation strategy before a single line of code is written. Brand and platform must be built together, not sequentially.",
      },
      {
        type: "h2",
        text: "First-Year Results",
      },
      {
        type: "ul",
        items: [
          "£780,000 in revenue in year one against a target of £500,000.",
          "14,000 email subscribers by month 12.",
          "Organic search became the largest traffic source by month 9.",
          "Subscription revenue reached 41% of total orders by end of year one.",
          "Brand named in two industry publications as a 'brand to watch'.",
        ],
      },
      {
        type: "h2",
        text: "Key Success Factors",
      },
      {
        type: "p",
        text: "The brand's science-led positioning, combined with genuine athlete endorsements rather than paid influencer deals, built credibility quickly. The ingredient transparency pages were unusual in the category — and they generated significant organic press coverage and backlinks from fitness media. Building trust first, then converting it to revenue, proved to be the right sequencing.",
      },
    ],
  },
  {
    slug: "flash-sale-platform-shopify-plus",
    title: "How We Launched a Flash Sale Platform on Shopify Plus",
    category: "Case Studies",
    description: "A fashion brand wanted to launch a members-only flash sale channel alongside their main store. We built the Shopify Plus architecture to handle high-volume, time-limited drops.",
    readTime: "6 min read",
    date: "2024-10-06",
    image: "/images/articles/pexels-905163.jpg",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    accent: "#f97316",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Flash sales are a proven revenue model — but they're technically demanding. Simultaneously releasing deeply discounted product to a large, expectant audience generates traffic spikes, inventory contention, and checkout stress that standard ecommerce architecture isn't built to handle. This mid-market fashion brand wanted to run weekly flash events to clear end-of-season stock. We built the infrastructure.",
      },
      {
        type: "h2",
        text: "Why a Separate Expansion Store",
      },
      {
        type: "p",
        text: "Running flash sales on the main storefront creates customer confusion — what's full price and what's discounted? It also risks training customers to wait for sales rather than buying at full price. We recommended a separate Shopify Plus expansion store, accessible only to registered members, keeping the flash sale activity contained and preserving full-price positioning on the main site.",
      },
      {
        type: "h2",
        text: "The Technical Architecture",
      },
      {
        type: "ul",
        items: [
          "Expansion store with membership gating — email registration required before access.",
          "Shopify Launchpad configured for timed product releases with automatic price and inventory activation.",
          "Virtual queue app integrated for high-demand events to prevent checkout bottlenecks.",
          "Real-time inventory display on product pages — 'Only 3 left' messaging updated live.",
          "One-click checkout configuration using Shop Pay to minimise abandoned carts during time-pressured events.",
          "Automated post-event email to members who missed stock, offering waitlist sign-up.",
        ],
      },
      {
        type: "h3",
        text: "Managing the Member Experience",
      },
      {
        type: "p",
        text: "Flash sales live or die on email. We built a member communications framework: a 'Sale launching in 48 hours' teaser with preview images, a countdown email 1 hour before launch, and a live notification for members who registered interest in specific products. Urgency is central to flash sale conversion — every element of the communication reinforced the time-limited nature of the event.",
      },
      {
        type: "quote",
        text: "The first sale we ran on the new platform generated £85,000 in 47 minutes. That's when we knew we'd built the right thing.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "First flash sale: £85,000 revenue in under 60 minutes.",
          "18,000 members registered in the first three months.",
          "Average flash sale revenue of £62,000 per event within six months.",
          "Zero checkout failures during any event, including one with 6,000 simultaneous sessions.",
          "Unsold end-of-season stock reduced by 78% versus the prior year.",
        ],
      },
    ],
  },
  {
    slug: "children-clothing-mobile-conversions",
    title: "How a Children's Clothing Brand Improved Mobile Conversions",
    category: "Case Studies",
    description: "A children's clothing brand had 68% of traffic on mobile but a 0.6% mobile conversion rate. Our mobile-first rebuild more than doubled their mobile conversion in 10 weeks.",
    readTime: "5 min read",
    date: "2024-09-23",
    image: "/images/articles/pexels-3183153.jpg",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    accent: "#06b6d4",
    author: "Sarah Patel",
    authorRole: "CRO Specialist",
    content: [
      {
        type: "p",
        text: "Parents shop on their phones. That's simply the reality of the children's clothing category — browsing happens in the margins of daily life, on a sofa or school run. This brand's analytics confirmed it: 68% of sessions were mobile, but mobile was converting at 0.6% against 2.1% on desktop. Tens of thousands of pounds in mobile revenue was being left on the table every month.",
      },
      {
        type: "h2",
        text: "The Mobile Audit",
      },
      {
        type: "p",
        text: "We conducted a full mobile UX audit across the customer journey: homepage, collection browsing, product detail page, cart, and checkout. The issues were numerous but fixable: product images required pinch-to-zoom to see detail, the size selector was tiny and required precise tapping, the cart drawer covered half the screen on smaller devices, and the checkout form had no input autocomplete.",
      },
      {
        type: "h2",
        text: "What We Rebuilt",
      },
      {
        type: "ul",
        items: [
          "Product page image gallery rebuilt with full-screen swipe and automatic zoom on pinch.",
          "Size selector redesigned as large touch targets with a size guide modal accessible in one tap.",
          "Sticky add-to-cart bar implemented that appears once the user scrolls past the native button.",
          "Cart drawer redesigned for mobile — full-screen on small devices with clear close affordance.",
          "Checkout configured with address autocomplete and Apple Pay / Google Pay as prominent payment options.",
          "Collection filters rebuilt as a bottom sheet on mobile rather than a sidebar.",
        ],
      },
      {
        type: "h3",
        text: "Express Checkout Impact",
      },
      {
        type: "p",
        text: "Adding Apple Pay and Google Pay to the product page — not just at checkout — had a dramatic impact. Parents who already had their payment method saved could go from product page to purchase in four taps. These express checkout sessions converted at 4.8% on mobile, far above the standard checkout path. Within six weeks, express checkout accounted for 31% of all mobile orders.",
      },
      {
        type: "callout",
        text: "Apple Pay and Google Pay on mobile aren't just payment options — they're the single highest-converting intervention you can make for a mobile-heavy audience.",
      },
      {
        type: "h2",
        text: "Results After 10 Weeks",
      },
      {
        type: "ul",
        items: [
          "Mobile conversion rate improved from 0.6% to 1.4% — a 133% increase.",
          "Mobile revenue grew by 122% versus the same 10-week period the prior year.",
          "Express checkout (Apple Pay / Google Pay) now accounts for 31% of mobile orders.",
          "Mobile cart abandonment reduced from 82% to 64%.",
          "Customer returns fell 12% following improved product imagery and sizing information.",
        ],
      },
    ],
  },
  {
    slug: "custom-product-configurator-shopify",
    title: "Custom Product Configurator Built on Shopify: A Case Study",
    category: "Case Studies",
    description: "A personalised gift company needed a live product configurator on Shopify. We built a custom React app embedded in the storefront that handles 10,000+ product permutations.",
    readTime: "6 min read",
    date: "2024-09-10",
    image: "/images/articles/pexels-3184291.jpg",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    accent: "#6366f1",
    author: "Jamie Chen",
    authorRole: "Lead Developer",
    content: [
      {
        type: "p",
        text: "Personalised products present a unique ecommerce challenge. The customer needs to visualise their customisation in real time before purchasing, but Shopify's native variant system isn't built for thousands of permutations of colour, text, size, and material. This personalised gift company — selling engraved homeware, custom prints, and monogrammed accessories — needed a solution that felt native and performed on mobile.",
      },
      {
        type: "h2",
        text: "The Requirements",
      },
      {
        type: "ul",
        items: [
          "Live product preview updating in real time as the customer customises.",
          "Text input with font selection and colour picker.",
          "Up to six customisation dimensions per product (size, material, colour, text, font, backing).",
          "Personalisation data stored as line item properties and passed to the production team via order export.",
          "Mobile-first — 72% of their customers shop on mobile.",
          "Fast enough to not impact page load scores.",
        ],
      },
      {
        type: "h2",
        text: "The Technical Approach",
      },
      {
        type: "p",
        text: "We built the configurator as a React app bundled as a Shopify Theme App Extension. This approach allowed us to build a rich, stateful UI without compromising the Liquid-based theme performance. The preview rendered using an HTML Canvas element — drawing the product base image, then compositing the customer's text and chosen options over it in real time.",
      },
      {
        type: "h3",
        text: "Canvas Rendering Performance",
      },
      {
        type: "p",
        text: "Canvas rendering needed to be fast enough to feel live — updates within 200 milliseconds of any input change. We achieved this by pre-loading all font files and base images on page load, and batching canvas redraws using requestAnimationFrame. On mobile, the configurator ran at the same speed as desktop, which was critical given the customer base.",
      },
      {
        type: "callout",
        text: "Building configurators on Shopify requires creative use of Theme App Extensions and Shopify's line item properties API. It's more achievable than most merchants assume.",
      },
      {
        type: "h2",
        text: "Results",
      },
      {
        type: "ul",
        items: [
          "Conversion rate on configurable products improved from 1.1% to 2.8% after the configurator launch.",
          "Average order value increased by £14 as customers added more personalisation options.",
          "Customer service enquiries about personalisation dropped by 45%.",
          "PageSpeed score maintained at 88 — the extension added only 12KB gzipped to the page.",
          "Production error rate on personalised orders fell from 8% to under 1% due to structured data capture.",
        ],
      },
      {
        type: "h2",
        text: "Production Integration",
      },
      {
        type: "p",
        text: "The configurator data needed to reach the production team accurately and efficiently. We built a custom Shopify admin app that extracted line item properties from all personalised orders and generated a structured production sheet, including a rendered preview of each item, in PDF format. This replaced a manual process that had been taking the production team two hours each morning.",
      },
    ],
  },
  {
    slug: "black-friday-10x-traffic-spike",
    title: "How We Handled a 10x Traffic Spike During Black Friday",
    category: "Case Studies",
    description: "A Shopify Plus brand feared their biggest ever Black Friday promotion would crash the site. We prepared the infrastructure and they sailed through 10x normal traffic without issue.",
    readTime: "6 min read",
    date: "2024-08-28",
    image: "/images/articles/pexels-574071.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#ef436b",
    author: "Tom Williams",
    authorRole: "SEO Manager",
    content: [
      {
        type: "p",
        text: "Black Friday is the test that separates robust Shopify stores from fragile ones. For a mid-market lifestyle brand planning their biggest promotional campaign to date — a 30% off sitewide event supported by a £120,000 paid media budget — the stakes were high. A site crash or checkout failure during peak hours could cost more than the entire media spend. We were brought in six weeks before the event to prepare.",
      },
      {
        type: "h2",
        text: "The Pre-Event Audit",
      },
      {
        type: "p",
        text: "Six weeks out, we ran a full performance and infrastructure audit. Three critical risks were identified: a third-party review app that loaded synchronously and would fail under high API load, a custom checkout script that hadn't been tested under concurrent sessions, and a Klaviyo integration that could trigger a cascade of emails simultaneously at event launch, creating a feedback loop on the server.",
      },
      {
        type: "h2",
        text: "Preparation Work",
      },
      {
        type: "ol",
        items: [
          "Replaced the synchronous review app load with an asynchronous deferred load after page interaction.",
          "Load tested the custom checkout script using k6 with simulated concurrent sessions — found and fixed a race condition.",
          "Configured Klaviyo campaign sends to throttle at 10,000 emails per hour rather than instant blast.",
          "Implemented a virtual queue app pre-configured for the event window.",
          "Pre-loaded sale pricing and collection changes in Shopify Launchpad for atomic go-live.",
          "Set up a real-time monitoring dashboard with alerts for checkout error rate and page load time.",
          "Briefed the client's fulfilment partner on anticipated order volume.",
        ],
      },
      {
        type: "h3",
        text: "The Load Test",
      },
      {
        type: "p",
        text: "We ran a simulated Black Friday load test three weeks before the event: 2,000 concurrent virtual users browsing, adding to cart, and completing checkout. The test identified two issues in the checkout script and one in the cart drawer that only manifested under concurrent load. Both were fixed before the event. Shopify Plus itself handled the load without issue — it's the custom code layer that almost always fails first.",
      },
      {
        type: "quote",
        text: "We had done Black Friday before and it had gone badly. Having someone prepare the site properly made all the difference. It was the smoothest event we've ever had.",
      },
      {
        type: "h2",
        text: "The Event Results",
      },
      {
        type: "ul",
        items: [
          "Peak traffic of 10,800 concurrent sessions — 10x their normal daily peak.",
          "Zero checkout failures throughout the entire 24-hour event.",
          "Page load time maintained at 2.1 seconds average even at peak load.",
          "£1.2m in revenue over the Black Friday weekend — the brand's best trading period ever.",
          "Virtual queue handled 3,200 users during the first 15 minutes without any customer-facing errors.",
        ],
      },
    ],
  },
  {
    slug: "bigcommerce-to-shopify-plus-migration-case-study",
    title: "Migrating from BigCommerce to Shopify Plus: A Case Study",
    category: "Case Studies",
    description: "A UK retailer on BigCommerce Enterprise was paying high fees for features Shopify Plus delivered better. Our migration delivered a 47% conversion uplift within 90 days.",
    readTime: "6 min read",
    date: "2024-08-15",
    image: "/images/articles/pexels-3182812.jpg",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    accent: "#8b5cf6",
    author: "Alex Morgan",
    authorRole: "Head of Strategy",
    content: [
      {
        type: "p",
        text: "BigCommerce Enterprise is a capable platform, but it's consistently underwhelming on theme quality, app ecosystem breadth, and checkout conversion rates when compared directly to Shopify Plus. This UK outdoor sports retailer had been on BigCommerce for four years, spending heavily on custom development to compensate for platform limitations. When their contract came up for renewal, they called us to make the case for migration.",
      },
      {
        type: "h2",
        text: "Why They Were Moving",
      },
      {
        type: "ul",
        items: [
          "Custom BigCommerce theme required a dedicated BigCommerce developer — a scarce skill.",
          "The app marketplace was limited compared to Shopify — several integrations they needed didn't exist.",
          "Checkout conversion benchmarks consistently showed Shopify Plus outperforming BigCommerce by 10–15%.",
          "BigCommerce's headless offering required significant developer overhead they couldn't justify.",
          "Their fulfilment partner had native Shopify integration but only a partial BigCommerce connector.",
        ],
      },
      {
        type: "h2",
        text: "The Migration Approach",
      },
      {
        type: "p",
        text: "We ran a 12-week migration project. The product data migration was straightforward — BigCommerce exports cleanly to CSV and we had transformation scripts from previous migrations. The more complex work was rebuilding the custom features they'd paid to have built on BigCommerce: a guided product selector, a trade account application flow, and a custom delivery date picker.",
      },
      {
        type: "h3",
        text: "SEO Continuity",
      },
      {
        type: "p",
        text: "The client had built significant organic rankings over four years and was understandably anxious about SEO continuity. We ran a comprehensive URL mapping exercise across 6,800 product and collection URLs, implemented 301 redirects on day one, and monitored Search Console closely for the 90 days following migration. Organic traffic dipped 4% in week two, then recovered fully by week six.",
      },
      {
        type: "callout",
        text: "A temporary organic traffic dip of 4–8% in the weeks following migration is normal and recoverable. The risk of permanent damage only arises if redirects are missing or incorrect.",
      },
      {
        type: "h2",
        text: "Results After 90 Days",
      },
      {
        type: "ul",
        items: [
          "Conversion rate improved from 1.5% to 2.2% — a 47% uplift.",
          "Checkout completion rate improved by 18 percentage points.",
          "Organic traffic fully recovered by week six post-migration.",
          "Technical development costs reduced by 60% thanks to Shopify's broader app ecosystem.",
          "Fulfilment integration errors dropped to near-zero with the native Shopify connector.",
        ],
      },
      {
        type: "h2",
        text: "Platform Selection Advice",
      },
      {
        type: "p",
        text: "BigCommerce has strengths — particularly for complex B2B scenarios with native features. But for most UK DTC and omnichannel retailers in the £1m–£20m revenue range, Shopify Plus's ecosystem, checkout performance, and developer community represent a decisive advantage. The migration investment typically pays back within six months.",
      },
    ],
  },
  {
    slug: "ugc-cosmetics-brand-sales",
    title: "How a Cosmetics Brand Used UGC to Drive a 45% Sales Lift",
    category: "Case Studies",
    description: "A UK cosmetics brand was creating expensive brand content that wasn't converting. Switching to a UGC-first strategy drove a 45% sales increase and cut content costs by 60%.",
    readTime: "5 min read",
    date: "2024-08-02",
    image: "/images/articles/pexels-3861964.jpg",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    accent: "#f59e0b",
    author: "Emma Clarke",
    authorRole: "Account Director",
    content: [
      {
        type: "p",
        text: "User-generated content outperforms brand content in cosmetics. This is not a hypothesis — it's supported by every piece of data in the category. Buyers want to see how products look on real skin, in real lighting, used by real people who look like them. Yet this independent cosmetics brand was spending £8,000 per month on professional photography that was generating lower click-through rates than competitor UGC content they saw on social feeds.",
      },
      {
        type: "h2",
        text: "Diagnosing the Problem",
      },
      {
        type: "p",
        text: "We audited the brand's content performance across paid social, organic social, and on-site. The correlation was clear: UGC-style content (real customers, natural lighting, genuine reactions) outperformed studio content by 2.4x on click-through and 3.1x on conversion from ad to purchase. The brand's high-production content was beautiful and completely unconvincing to their target customer.",
      },
      {
        type: "h2",
        text: "Building the UGC Programme",
      },
      {
        type: "ol",
        items: [
          "Audited existing customer reviews and identified 200 customers with authentic social content featuring the brand.",
          "Built a UGC rights request flow — an automated email sequence requesting permission to use content commercially.",
          "Created a micro-creator programme: 50 customers with under 5,000 followers paid in product to create monthly content.",
          "Implemented Okendo reviews on Shopify to capture photo and video reviews with purchase verification.",
          "Rebuilt paid social creative strategy around UGC content exclusively for a 90-day test period.",
          "Added a UGC gallery section to all product pages using the Okendo integration.",
        ],
      },
      {
        type: "h3",
        text: "On-Site Implementation",
      },
      {
        type: "p",
        text: "The Shopify product page UGC gallery was built as a custom section using Okendo's widget API. Customers could submit photo and video reviews directly from their post-purchase email. The gallery showed real customers using the products with their verified purchase badge visible — a powerful trust signal that studio photography simply cannot replicate.",
      },
      {
        type: "quote",
        text: "When customers see someone with the same skin tone using the product, they believe it. Studio photography can't do that. UGC is the most honest marketing we've ever done.",
      },
      {
        type: "h2",
        text: "Results After Six Months",
      },
      {
        type: "ul",
        items: [
          "Overall sales grew 45% in the six months following the UGC programme launch.",
          "Paid social ROAS improved from 1.8x to 3.2x.",
          "Content creation costs reduced from £8,000 to £3,200 per month.",
          "Product page conversion rate improved 28% on pages with UGC gallery versus without.",
          "Review volume increased 340% following the post-purchase photo review request implementation.",
        ],
      },
      {
        type: "callout",
        text: "The best cosmetics marketing budget allocation in 2024 is less studio photography and more customer activation. Real results from real customers convert at multiples of brand content.",
      },
    ],
  },
];

export default posts;
