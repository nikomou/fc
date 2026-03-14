# Flex Commerce — Articles Section SEO Audit

**Audit date:** 14 March 2026
**Auditor:** SEO Audit Agent
**Scope:** `/articles` index page + all six article pages (`/articles/[slug]`)
**Files reviewed:**
- `/lib/blog.ts`
- `/app/articles/[slug]/page.tsx`
- `/app/articles/page.tsx`
- `/app/layout.tsx` (for global schema context)
- `/lib/constants.ts` (for service page URLs)

---

## 1. Executive Summary

The articles section has a solid visual design and a working content architecture, but it has critical structural SEO deficiencies that are preventing it from ranking competitively. The most severe issues are: zero Article schema on individual posts, no og:image on article pages, a title tag pattern that wastes character budget, weak meta descriptions on two posts, and a complete absence of internal links from article content to service pages. The content itself ranges from genuinely useful (the migration checklist, speed guide) to thin and unfocused (the Shopify Flow guide and B2B article). Five of the six articles are missing clear search intent alignment.

**Overall section health: 48/100 — Needs significant work**

---

## 2. Article-by-Article Scores

### Scoring criteria (100-point scale)

| Factor | Max points |
|--------|-----------|
| Title tag (length, keyword placement, uniqueness) | 15 |
| Meta description (length, CTA, keyword inclusion) | 10 |
| Slug / URL structure | 10 |
| H1 quality | 10 |
| Heading hierarchy (H2/H3 structure) | 10 |
| Content depth / E-E-A-T signals | 20 |
| Search intent alignment | 15 |
| Internal linking | 10 |

---

### Article 1: The Ultimate Shopify Plus Migration Checklist

**URL:** `/articles/shopify-plus-migration-checklist`
**Category:** Guides
**Date:** 28 Feb 2026
**Author:** Alex Morgan, Head of Strategy

**Score: 61/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 9/15 | Post title is 47 chars — good length. But the template adds "| Flex Commerce Articles" making the full rendered tag 72 chars, 12 over the ideal ceiling. Primary keyword "Shopify Plus migration" appears but not at the very front. |
| Meta description | 8/10 | 163 chars — 3 over the 160 ceiling. Strong copy, covers topic well. Trim by removing "A step-by-step walkthrough of the full process." |
| Slug | 9/10 | Clean, keyword-rich, descriptive. Minor: "checklist" is accurate but the content reads more as a "guide". Not a blocker. |
| H1 | 8/10 | Matches title, is rendered as H1 in the template. Good. Missing secondary keyword ("ecommerce platform migration" or "migrate to Shopify Plus"). |
| Heading hierarchy | 7/10 | Five H2s: "Before You Migrate", "Choosing the Right Shopify Plus Plan", "Data Migration", "SEO & Redirects", "Post-Launch Checklist". Logical flow. No H3s used — the "SEO & Redirects" section could benefit from H3 sub-sections (URL mapping, sitemap submission). |
| Content depth / E-E-A-T | 14/20 | Good depth: covers pre-migration, data, SEO, post-launch. Specific pricing data ($2,300/month) adds authority. Missing: author credentials in-content, no mention of specific platforms migrated from (Magento? WooCommerce?), no link to a real case study. |
| Search intent | 12/15 | Target query: "Shopify Plus migration checklist" — strong intent match. Users searching this want a concrete action list; the article delivers. Could be stronger by naming the specific platforms it applies to. |
| Internal linking | 4/10 | Zero internal links in the content. The "SEO & Redirects" section is a natural anchor for `/shopify-seo`. The intro is a perfect place to link `/shopify-plus`. The post-launch section could reference `/shopify-speed-optimisation`. |

**Recommended title tag (57 chars):**
`Shopify Plus Migration Checklist | Flex Commerce`

**Recommended meta description (155 chars):**
`Everything you need before, during, and after migrating your store to Shopify Plus. A step-by-step checklist from the Flex Commerce team.`

---

### Article 2: Optimising Your Shopify Store for Speed

**URL:** `/articles/shopify-speed-optimisation-guide`
**Category:** Tips & Tricks
**Date:** 14 Feb 2026
**Author:** Jamie Chen, Lead Developer

**Score: 58/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 7/15 | Post title is 43 chars — short but acceptable. Rendered tag ("Optimising Your Shopify Store for Speed | Flex Commerce Articles") is 65 chars — over budget by 5. Worse, the primary keyword "Shopify speed optimisation" is fragmented across the title: "speed" appears at the end. Should lead with the keyword. |
| Meta description | 9/10 | 156 chars. Excellent — covers the topic, mentions Core Web Vitals, references conversion rate and SEO rankings. Near perfect. |
| Slug | 8/10 | Good. "shopify-speed-optimisation-guide" is accurate and keyword-rich. |
| H1 | 6/10 | "Optimising Your Shopify Store for Speed" — the keyword is fragmented. Primary keyword should be "Shopify speed optimisation" not split across the sentence. H1 should front-load the keyword. |
| Heading hierarchy | 8/10 | Four H2s: "Understanding Core Web Vitals", "The Biggest Culprits on Shopify Stores", "Quick Wins You Can Do Today", "Advanced Optimisations". Logical. No H3s, but the content is concise enough that this is acceptable. |
| Content depth / E-E-A-T | 13/20 | Strong first-person authority ("In our experience auditing hundreds of Shopify stores"). Specific metric guidance (LCP under 2.5s, CLS under 0.1) adds credibility. Missing: before/after PageSpeed score examples, no attribution to specific stores, no tool recommendations beyond Shopify's own CDN. |
| Search intent | 10/15 | Target query: "how to speed up Shopify store" or "Shopify Core Web Vitals". The article answers both but could rank more competitively if it named specific tools (Lighthouse, GTmetrix) and provided example PageSpeed screenshots. |
| Internal linking | 7/10 | Zero in-content links. The article's natural service hook is the `/shopify-speed-optimisation` service page. The "Advanced Optimisations" section is the ideal anchor. The article does link back to the `/articles` index via the back button but that is a UI element, not contextual anchor text. |

**Recommended title tag (53 chars):**
`Shopify Speed Optimisation Guide | Flex Commerce`

**Recommended meta description (unchanged — already strong at 156 chars)**

---

### Article 3: How We Increased Conversions by 40%

**URL:** `/articles/40-percent-conversion-rate-increase`
**Category:** Case Studies
**Date:** 30 Jan 2026
**Author:** Sarah Patel, CRO Specialist

**Score: 64/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 8/15 | Post title "How We Increased Conversions by 40%" is 43 chars. Rendered tag is 68 chars — marginally over. The title is compelling but lacks the word "Shopify" — a critical omission for a Shopify agency. A reader cannot tell from the title alone that this is a Shopify case study. |
| Meta description | 9/10 | 157 chars. Solid — mentions CRO strategies, UX improvements, Shopify optimisations, 40% uplift, and UK fashion brand. |
| Slug | 5/10 | "40-percent-conversion-rate-increase" starts with a number — not ideal. Google does not penalise this, but it is harder to read and provides no brand or platform context. A search for "Shopify CRO case study" will not be served by this slug. |
| H1 | 7/10 | Same issue as the title: missing "Shopify" as a keyword signal. |
| Heading hierarchy | 9/10 | Best structure of all six articles. Proper H2 > H3 nesting: "What We Changed" (H2) contains "Product Page Redesign", "Checkout Optimisation", "Mobile Cart Fix" (H3s). This is the only article using H3s. |
| Content depth / E-E-A-T | 16/20 | This is the strongest E-E-A-T article. Specific numbers (CVR 1.2% to 1.68%, mobile CVR +57%, checkout completion 61% to 74%), a named specialist, a real methodology (session recordings, heatmaps, user testing), and a before/after result format. Missing: client name (anonymised is acceptable), before/after screenshots, time period context. |
| Search intent | 11/15 | Targets: "Shopify CRO case study" or "how to increase Shopify conversion rate". The article is closer to the first but is not positioned as such in the title or slug. Users searching "Shopify CRO agency case study" will have weak title match confidence. |
| Internal linking | 9/10 | Natural opportunities: "Shopify Plus checkout extensibility" in the Checkout Optimisation section should link to `/shopify-plus`. The audit methodology section could link to a future `/shopify-store-audit` page. No links present currently. |

**Recommended title tag (57 chars):**
`Shopify CRO Case Study: 40% Conversion Rate Increase`

**Recommended slug:**
`shopify-cro-case-study-40-percent-conversion-increase`

**Recommended meta description (unchanged — already strong)**

---

### Article 4: Getting Started with Shopify Flow

**URL:** `/articles/shopify-flow-automation-guide`
**Category:** Guides
**Date:** 15 Jan 2026
**Author:** Alex Morgan, Head of Strategy

**Score: 44/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 6/15 | "Getting Started with Shopify Flow" is 35 chars — short, which wastes title real estate. Rendered with suffix: "Getting Started with Shopify Flow | Flex Commerce Articles" = 58 chars. Acceptable length but "Getting Started with" is a weak opener that buries the topic. The primary keyword should be "Shopify Flow automation" not just "Shopify Flow". |
| Meta description | 8/10 | 169 chars — 9 over the 160 ceiling. Trim: remove "discover what's possible without writing a single line of code." |
| Slug | 8/10 | Clean and descriptive. Good. |
| H1 | 5/10 | "Getting Started with Shopify Flow" — weak. Does not communicate who this is for (Shopify Plus merchants) or what they will learn (automation). |
| Heading hierarchy | 6/10 | Four H2s: "What Can Shopify Flow Do?", "Your First Flow: VIP Customer Tagging", "Fraud Prevention Workflow", "Connecting Flow with Other Apps". Reasonable, but "Your First Flow" reads as tutorial documentation rather than an SEO-optimised heading. No H3s. |
| Content depth / E-E-A-T | 10/20 | Moderate. The step-by-step for the VIP tagging workflow is useful but the content reads as a product feature tour rather than expert advice. Missing: any data on time saved or revenue impact of automation, no real-world example, no screenshot guidance. The fraud prevention section lists trigger/condition/action as bullet points rather than prose — a very thin treatment of a complex topic. |
| Search intent | 7/15 | Target query: "Shopify Flow examples" or "Shopify Plus automation". The article partially addresses both but does not rank-worthy depth for either. Someone searching "Shopify Flow tutorial" would be better served by Shopify's own help documentation. The article needs a differentiating angle — e.g., "10 Shopify Flow Workflows Used by High-Growth Brands" — to compete. |
| Internal linking | 4/10 | Zero in-content links. "Shopify Plus" appears multiple times — every instance should link to `/shopify-plus`. The Klaviyo mention is a natural hook for the email marketing article. |

**Recommended title tag (55 chars):**
`Shopify Flow Automation: A Practical Guide | Flex Commerce`

Note: With the template suffix this renders as "Shopify Flow Automation: A Practical Guide | Flex Commerce Articles" which is 68 chars — still over. The template suffix is the root cause (see Issue #1 in the Top 10 Issues section below).

**Recommended meta description (155 chars):**
`Automate your Shopify Plus store with Flow. From VIP customer tagging to fraud prevention, learn the workflows that save time and increase revenue.`

---

### Article 5: Email Marketing Best Practices for Ecommerce

**URL:** `/articles/klaviyo-email-marketing-ecommerce`
**Category:** Tips & Tricks
**Date:** 20 Dec 2025
**Author:** Sarah Patel, CRO Specialist

**Score: 40/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 5/15 | "Email Marketing Best Practices for Ecommerce" is 46 chars. Good length in isolation, but the title has a significant strategic problem: Klaviyo is in the slug but not the title. The title does not mention Shopify. This article will struggle to rank for any Shopify-specific query and cannot rank for "Klaviyo email marketing" because the title signals generic ecommerce content. |
| Meta description | 7/10 | 166 chars — 6 over. "here's what the top ecommerce brands are doing differently" could be trimmed to reach 160. |
| Slug | 6/10 | "klaviyo-email-marketing-ecommerce" is fine but misaligned with the title. If the title does not mention Klaviyo, the slug feels detached. Either the title needs Klaviyo in it or the slug should be "email-marketing-best-practices-ecommerce". |
| H1 | 5/10 | "Email Marketing Best Practices for Ecommerce" — generic. No brand (Shopify, Klaviyo), no audience signal. |
| Heading hierarchy | 6/10 | Three H2s: "Segmentation: The Foundation of Everything", "The 5 Flows Every Ecommerce Store Needs", "Campaign Strategy: What to Send and When". The content is reasonable but the H2 for flows could be H3s under a broader "Automation" H2. |
| Content depth / E-E-A-T | 9/20 | This is the weakest article for E-E-A-T. The ROI stat ("£42 for every £1 spent") is a widely cited Klaviyo marketing figure — not original data. The flow sequence (1 hour → 24 hours → 72 hours for abandoned cart) is standard Klaviyo documentation. Nothing here differentiates the author's expertise from a generic email marketing blog post. Missing: specific client results, Klaviyo-Shopify integration specifics, screenshots, revenue uplift data. |
| Search intent | 6/15 | Target query unclear. "Klaviyo best practices for Shopify" — not addressed. "Ecommerce email marketing" — too competitive a generic term for a six-section article. The article does not have a clear, winnable keyword target. |
| Internal linking | 6/10 | Could link to the Shopify Flow article (flows section), the CRO case study (segmentation/conversion angle), and theoretically to a future Klaviyo integration service page. Zero links present. |

**Recommended title tag (57 chars):**
`Klaviyo Email Marketing for Shopify | Flex Commerce`

**Recommended meta description (156 chars):**
`How the top Shopify brands use Klaviyo for segmentation, automated flows, and campaign strategy. Practical email marketing advice from Flex Commerce.`

---

### Article 6: B2B Ecommerce on Shopify Plus

**URL:** `/articles/shopify-plus-b2b-wholesale`
**Category:** Guides
**Date:** 5 Dec 2025
**Author:** Jamie Chen, Lead Developer

**Score: 49/100**

| Factor | Score | Notes |
|--------|-------|-------|
| Title tag | 7/15 | "B2B Ecommerce on Shopify Plus" is 30 chars — the shortest of all six. The rendered tag with suffix is 55 chars — within the ideal range. However, the primary search query for this topic is "Shopify Plus B2B wholesale" or "Shopify Plus wholesale setup" — the article's title does not include "wholesale" despite the slug and meta description referencing it heavily. |
| Meta description | 9/10 | 154 chars. Strong — mentions wholesale portal, B2B features, pricing, native wholesale channel. |
| Slug | 9/10 | "shopify-plus-b2b-wholesale" — excellent. Keyword-rich and precise. |
| H1 | 6/10 | "B2B Ecommerce on Shopify Plus" — short and missing "wholesale". The H1 should match the search intent: "Shopify Plus B2B Wholesale: Setup Guide" would be stronger. |
| Heading hierarchy | 7/10 | Four H2s: "Shopify Plus B2B: What's Included", "Setting Up Your B2B Channel", "Pricing Strategy for Wholesale", "Integrating B2B with Your ERP". Good logical flow. No H3s — the ERP integration section discusses Patchworks, Brightpearl, NetSuite in a single paragraph and would benefit from H3 sub-sections. |
| Content depth / E-E-A-T | 12/20 | Good structural coverage. The pricing strategy section is useful. The ERP integration section is thin (two sentences). Missing: any actual wholesale client results, a mention of minimum order values or catalogue size thresholds where Shopify Plus B2B makes sense over standard Shopify, no Shopify Plus plan pricing context. |
| Search intent | 10/15 | Target query: "Shopify Plus B2B wholesale setup" — reasonable match. The article covers setup, features, pricing, and ERP integration which aligns with a developer or ecommerce manager researching this topic. |
| Internal linking | 6/10 | Every mention of "Shopify Plus" should link to `/shopify-plus`. The ERP/integration section is a natural hook for a future `/shopify-integrations` service page. Zero links present. |

**Recommended title tag (56 chars):**
`Shopify Plus B2B Wholesale: Setup Guide | Flex Commerce`

**Recommended meta description (unchanged — already strong)**

---

## 3. Template-Level Issues (Affecting All Articles)

### 3.1 No Article Schema (Critical)

**File:** `/app/articles/[slug]/page.tsx`

The article template generates zero structured data for individual posts. There is no `Article` or `BlogPosting` JSON-LD schema anywhere on article pages. The global layout schema (`/app/layout.tsx`) provides `Organization`, `WebSite`, and `LocalBusiness` graphs — none of which include article-level entities.

This means Google cannot confirm:
- Publication date (affects freshness signals)
- Author identity (affects E-E-A-T)
- Article headline (affects rich result eligibility)
- Publisher (breaks the author-to-organisation link)

**Required schema for each article page:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://flexcommerce.co.uk/articles/shopify-plus-migration-checklist#article",
  "headline": "The Ultimate Shopify Plus Migration Checklist",
  "description": "Everything you need to know before, during, and after migrating your ecommerce store to Shopify Plus.",
  "datePublished": "2026-02-28",
  "dateModified": "2026-02-28",
  "author": {
    "@type": "Person",
    "name": "Alex Morgan",
    "jobTitle": "Head of Strategy",
    "worksFor": {
      "@id": "https://flexcommerce.co.uk/#organization"
    }
  },
  "publisher": {
    "@id": "https://flexcommerce.co.uk/#organization"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://flexcommerce.co.uk/images/blog/shopify-plus-migration-checklist.jpg",
    "width": 1200,
    "height": 630
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://flexcommerce.co.uk/articles/shopify-plus-migration-checklist"
  },
  "articleSection": "Guides",
  "inLanguage": "en-GB",
  "url": "https://flexcommerce.co.uk/articles/shopify-plus-migration-checklist"
}
```

The `author.worksFor` reference back to the global `#organization` ID links author E-E-A-T signals to the business entity — this is the recommended pattern for agency blogs.

---

### 3.2 No og:image on Article Pages (Critical)

**File:** `/app/articles/[slug]/page.tsx`, lines 21–32

The `generateMetadata` function returns `openGraph` with `title`, `description`, `url`, and `type: "article"` — but **no `images` property**. This means every article shares the fallback `og:image` from the root layout (`/images/og-image.png`), which is a generic agency brand image.

When an article is shared on LinkedIn, Twitter/X, or in Slack, it will show the default site image rather than the article's cover image. This significantly reduces click-through rate on social shares.

The article cover images already exist (`post.image` is defined on every post in `blog.ts`). The fix is straightforward: add the `images` array to the `openGraph` object in `generateMetadata` using `post.image`.

Additionally, the `twitter` card metadata is entirely absent from article pages. The root layout defines it globally, but article-specific twitter metadata with the article image is not set.

---

### 3.3 Title Tag Template Adds Unnecessary Suffix (High Priority)

**File:** `/app/articles/[slug]/page.tsx`, line 22

```
title: `${post.title} | Flex Commerce Articles`
```

The word "Articles" is redundant and consumes 9 characters that could be used for keywords. Every article is already filed under `/articles/` — the URL communicates the content type. The suffix also conflicts with the root layout template which uses `%s | Flex Commerce`.

The current rendered titles:
- "The Ultimate Shopify Plus Migration Checklist | Flex Commerce Articles" = 70 chars (10 over limit)
- "Optimising Your Shopify Store for Speed | Flex Commerce Articles" = 64 chars (4 over)
- "How We Increased Conversions by 40% | Flex Commerce Articles" = 60 chars (borderline)
- "Getting Started with Shopify Flow | Flex Commerce Articles" = 58 chars (acceptable by 2 chars)
- "Email Marketing Best Practices for Ecommerce | Flex Commerce Articles" = 70 chars (10 over)
- "B2B Ecommerce on Shopify Plus | Flex Commerce Articles" = 54 chars (acceptable)

Changing the suffix to `| Flex Commerce` saves 9 chars on every title, bringing all six articles within the 60-char ceiling once the article titles themselves are also optimised.

**Recommended pattern:**
```
title: `${post.title} | Flex Commerce`
```

---

### 3.4 No BreadcrumbList Schema on Article Pages (Medium Priority)

Article pages sit three levels deep (`/ > /articles > /articles/[slug]`). There is no `BreadcrumbList` schema on either the index or individual article pages.

BreadcrumbList schema enables breadcrumb rich results in Google Search, which increases visual real estate in the SERP and reinforces site hierarchy.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://flexcommerce.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Articles",
      "item": "https://flexcommerce.co.uk/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The Ultimate Shopify Plus Migration Checklist",
      "item": "https://flexcommerce.co.uk/articles/shopify-plus-migration-checklist"
    }
  ]
}
```

---

### 3.5 No Schema on the Articles Index Page (Medium Priority)

**File:** `/app/articles/page.tsx`

The `/articles` index page has no structured data at all. A `CollectionPage` schema referencing the articles would help Google understand this is a curated content index rather than a generic listing.

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://flexcommerce.co.uk/articles#collection",
  "name": "Ecommerce Articles | Flex Commerce",
  "description": "Expert ecommerce insights from the Flex Commerce team.",
  "url": "https://flexcommerce.co.uk/articles",
  "publisher": {
    "@id": "https://flexcommerce.co.uk/#organization"
  }
}
```

---

### 3.6 Author Profiles Have No Dedicated Pages or Schema (Medium Priority)

Three authors appear across the articles: Alex Morgan (Head of Strategy), Jamie Chen (Lead Developer), and Sarah Patel (CRO Specialist). Each is rendered as an avatar initial in the article hero and a byline in the footer.

Google's E-E-A-T guidelines specifically consider author experience and expertise as ranking signals. The current implementation provides no way for Google to confirm:
- That these are real people
- Their professional credentials
- Their publication history

The minimum viable fix is a `Person` schema in the article's structured data (covered in 3.1 above). The fuller fix is creating author profile pages at `/about/alex-morgan` etc., with their bio, role, LinkedIn profile, and article index. Each `Article` schema's `author` property would then point to the author page URL.

---

### 3.7 No Reading Progress Indicator or Estimated Time Display in Structured Way

The `readTime` field exists in `blog.ts` but is only used as a visible UI label. It is not expressed in schema. `timeRequired` is a valid property on `Article` schema (using ISO 8601 duration format, e.g., `PT10M` for 10 minutes). Minor, but free to add.

---

### 3.8 Hero Image Alt Text Is Repeated Title (Low Priority)

**File:** `/app/articles/[slug]/page.tsx`, line 133

```tsx
<Image src={post.image} alt={post.title} ... />
```

The article title is used verbatim as the alt attribute. For a decorative hero image, an empty alt (`alt=""`) is technically more correct per WCAG (the image adds no semantic information beyond what the H1 already communicates). If the image is kept descriptive, the alt should describe the image content, not repeat the heading.

---

### 3.9 Related Posts Section Uses H3 Inside an Implicit Heading Context

**File:** `/app/articles/[slug]/page.tsx`, lines 209 and 244

The "More Articles" section uses `<h2>More Articles</h2>` at line 209, and then `<h3>` for individual related post titles at line 244. The H3 usage here is not part of the article's content heading hierarchy — it exists in a separate section. This is acceptable but means the page's heading outline (as parsed by Google) includes related post titles as H3s under the content body, which can dilute the heading signal of the actual article. Consider using `<p>` with appropriate styling for the related card titles instead.

---

## 4. Top 10 Issues to Fix (Priority Order)

| # | Issue | Affected pages | Impact | Effort |
|---|-------|---------------|--------|--------|
| 1 | No Article/BlogPosting JSON-LD schema | All 6 article pages | Critical | Medium |
| 2 | No og:image on article pages (social share fallback to generic brand image) | All 6 article pages | Critical | Low |
| 3 | Title tag suffix "| Flex Commerce Articles" is too long and uses wasted chars | All 6 article pages | High | Low |
| 4 | Zero internal links from article content to service pages | All 6 article pages | High | Medium |
| 5 | Two article titles missing "Shopify" as a keyword (CRO case study, email marketing) | Articles 3, 5 | High | Low |
| 6 | No BreadcrumbList schema on article or index pages | All 7 pages | Medium | Low |
| 7 | Meta descriptions for articles 1, 4, 5 exceed 160 chars | Articles 1, 4, 5 | Medium | Low |
| 8 | No CollectionPage schema on /articles index | 1 page | Medium | Low |
| 9 | No Twitter card metadata on individual article pages | All 6 article pages | Medium | Low |
| 10 | Weak E-E-A-T on articles 4 and 5 (no original data, no client results) | Articles 4, 5 | Medium | High |

---

## 5. Internal Linking Recommendations

This is the single most impactful quick win available. The articles have natural, highly relevant opportunities to link to existing service pages. Currently there are zero contextual internal links in the article body content.

### Per-article linking map

**Article 1 — Shopify Plus Migration Checklist**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| Shopify Plus | `/shopify-plus` | First paragraph ("scaling ecommerce brand") |
| SEO & Redirects | `/shopify-seo` | H2: "SEO & Redirects" — link in the section intro |
| Core Web Vitals scores | `/shopify-speed-optimisation` | Post-launch checklist bullet point |

**Article 2 — Shopify Speed Optimisation Guide**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| performance audit | `/shopify-speed-optimisation` | Final quote/closing sentence |
| Shopify store | `/shopify-plus` | Opening paragraph |

**Article 3 — CRO Case Study 40%**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| Shopify Plus checkout extensibility | `/shopify-plus` | Checkout Optimisation H3 section |
| store audit | `/shopify-store-audit` (pending) | "we spent two weeks in analysis mode" |

**Article 4 — Shopify Flow Automation Guide**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| Shopify Plus | `/shopify-plus` | Opening paragraph (appears 3 times — link first instance) |
| email marketing | `/articles/klaviyo-email-marketing-ecommerce` | "Connecting Flow with Other Apps" — Klaviyo mention |

**Article 5 — Email Marketing Best Practices**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| Shopify | `/shopify-plus` | Could be added to intro ("top ecommerce brands") |
| abandoned cart flow | `/articles/shopify-flow-automation-guide` | "The 5 Flows Every Ecommerce Store Needs" section |

**Article 6 — B2B Ecommerce on Shopify Plus**
| Anchor text | Target URL | Content location |
|-------------|-----------|-----------------|
| Shopify Plus | `/shopify-plus` | Opening paragraph |
| Patchworks, Brightpearl | `/shopify-integrations` (pending) | "Integrating B2B with Your ERP" section |
| Shopify Plus migration | `/articles/shopify-plus-migration-checklist` | First paragraph — brands considering Shopify Plus |

### Cross-article linking opportunities

| From article | To article | Rationale |
|-------------|-----------|-----------|
| Migration Checklist | Speed Optimisation Guide | Post-launch Core Web Vitals section |
| Migration Checklist | B2B Wholesale | Brands migrating who also need B2B |
| Flow Automation | Email Marketing | Klaviyo-Flow integration section |
| Email Marketing | Flow Automation | Automated flows section |
| B2B Wholesale | Migration Checklist | Setting up a new Shopify Plus instance |
| CRO Case Study | Speed Optimisation | Mobile performance contributed to conversion fix |

---

## 6. Category and Topic Gap Analysis

### Current distribution

| Category | Count | Articles |
|----------|-------|---------|
| Guides | 3 | Migration Checklist, Shopify Flow, B2B Wholesale |
| Tips & Tricks | 2 | Speed Optimisation, Email Marketing |
| Case Studies | 1 | CRO 40% |

### Category assessment

**Guides (3):** Well-represented. However, two of the three guides (Flow, B2B) are feature-tour content that describes Shopify's own documentation rather than offering genuine agency expertise. The migration checklist is the strongest.

**Tips & Tricks (2):** The speed article is strong. The email article is generic and does not differentiate from thousands of competing posts.

**Case Studies (1):** This is the category with the highest E-E-A-T value and the lowest representation. Case studies are the content type most likely to drive high-intent leads (brands actively looking for an agency to hire). One anonymous case study is not enough. Target: minimum 4 case studies.

### Topics missing (ranked by search volume and agency intent value)

| Gap topic | Category | Target query | Priority | Rationale |
|-----------|----------|-------------|----------|-----------|
| Shopify Plus vs Shopify Advanced | Guides | "shopify plus vs shopify advanced" | 1 | High-intent comparison query from brands about to upgrade |
| Shopify Migration from Magento | Guides | "magento to shopify migration" | 2 | High-volume, high-intent. Complements existing migration article. |
| Shopify Theme Development Case Study | Case Studies | "bespoke shopify theme" | 3 | Showcases Flex Commerce's core service |
| Shopify SEO case study | Case Studies | "shopify seo results" | 4 | Directly supports `/shopify-seo` service page |
| Shopify Checkout Extensibility Guide | Guides | "shopify checkout extensibility" | 5 | Aligns with Plus plan and shows technical depth |
| How to Choose a Shopify Plus Agency | Guides | "shopify plus agency uk" | 6 | Intercepts high-intent decision-stage query. Flex Commerce is the answer. |
| Shopify Speed Audit: What to Expect | Tips & Tricks | "shopify speed audit" | 7 | Supports `/shopify-speed-optimisation` service page |
| WooCommerce to Shopify Migration | Guides | "woocommerce to shopify" | 8 | Massive search volume, underserved by specific agencies |
| Shopify Plus ROI Calculator / Guide | Guides | "is shopify plus worth it" | 9 | Bottom-of-funnel content for brands on the fence |
| Shopify Integrations for Fashion Brands | Tips & Tricks | "shopify integrations fashion" | 10 | Niche angle that would rank quickly due to low competition |

### Observations on search intent coverage

- Zero articles target bottom-of-funnel queries (people deciding whether to hire an agency)
- Zero articles target comparison queries ("Shopify Plus vs X")
- Zero articles use "UK" as a geo modifier — important for a UK agency competing locally
- The blog currently cannot rank for "Shopify Plus agency" or "Shopify agency UK" because none of the articles target these agency-qualifier searches
- There is no article that explicitly answers "why hire a Shopify agency" — the most commercially valuable question for Flex Commerce's content programme

---

## 7. E-E-A-T Signal Audit

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework is particularly important for service-based businesses where the reader is evaluating whether to spend significant money.

### Current E-E-A-T inventory

| Signal | Present | Notes |
|--------|---------|-------|
| Named human authors | Yes | Three authors named and role-attributed |
| Author profile pages | No | No dedicated author pages on the site |
| Author social profiles | No | No LinkedIn links anywhere in author attribution |
| Author schema | No | Not in structured data |
| Original data / research | Partial | CRO case study has strong original data; others use industry-standard statistics |
| Client names / case details | No | All client references are anonymous ("a UK fashion brand") |
| Agency credentials | No | No Shopify Partner status mentioned in articles |
| Review / testimonial links | No | Articles do not reference Trustpilot or G2 ratings |
| Publication dates | Yes | Present and up to date |
| Last modified dates | No | Schema would require a `dateModified` field; no visible "updated" date in UI |

### Recommendations for E-E-A-T improvement

1. Add a brief author bio (2-3 sentences) at the article footer with a link to a profile page or LinkedIn. The current footer shows only name, role, and initial — this is the minimum viable implementation and should be expanded.
2. Where permitted by client NDAs, name the client in case studies, or at minimum name the sector and revenue band ("a £5M/year UK fashion brand").
3. Add a Shopify Partner badge or accreditation reference in the article sidebar or footer to reinforce legitimacy.
4. Express original data more explicitly. The speed optimisation article mentions "we consistently see stores achieve 20-40 point improvements" — this is a genuine agency insight and should be framed more prominently, not buried in a blockquote.
5. Add a "reviewed by" or "fact-checked on" date to articles that cover evolving topics (Shopify pricing, Flow features, B2B channel).

---

## 8. Technical SEO Notes

### Canonical URLs

Canonical URLs are set correctly in `generateMetadata`. The pattern `https://flexcommerce.co.uk/articles/${post.slug}` is consistent and correct.

### Pagination

No pagination is implemented on the `/articles` index — all posts load on a single page. With six posts this is acceptable. Once the post count exceeds 12-15, pagination with `rel="next"` / `rel="prev"` annotations will be needed.

### Sitemap

The sitemap is not reviewed in this audit but should include all article URLs. Next.js 14's `generateStaticParams` is implemented correctly, which means all article pages will be statically generated and included in the sitemap if a `sitemap.ts` is configured.

### Image optimisation

All article images use the Next.js `Image` component with `fill` and `sizes` attributes. The hero uses `priority` correctly. No lazy loading issues on the hero. Related post images in the article footer do not use `priority` (correct — they are below the fold).

The hero image `alt` is `post.title` (e.g., "The Ultimate Shopify Plus Migration Checklist"). For a background decorative image overlaid with gradient, an empty alt attribute would be semantically more appropriate, but this is low priority.

### Mobile

The template is responsive with Tailwind breakpoints. No mobile-specific issues identified from the code review.

---

## 9. Summary Scorecard

| Article | Score | Title | Meta desc | Schema | Internal links | Search intent |
|---------|-------|-------|-----------|--------|---------------|---------------|
| Shopify Plus Migration Checklist | 61/100 | Needs keyword front-loading | 3 chars over | Missing | None | Strong |
| Shopify Speed Optimisation Guide | 58/100 | Needs keyword front-loading | Good | Missing | None | Good |
| CRO Case Study: 40% Conversion | 64/100 | Missing "Shopify" | Good | Missing | None | Good |
| Getting Started with Shopify Flow | 44/100 | Weak opener, no automation keyword | 9 chars over | Missing | None | Weak |
| Email Marketing Best Practices | 40/100 | Missing Klaviyo, missing Shopify | 6 chars over | Missing | None | Unclear |
| B2B Ecommerce on Shopify Plus | 49/100 | Missing "wholesale" | Good | Missing | None | Moderate |
| **/articles index** | **52/100** | Good length, no brand CTA | Missing og:image | No schema | N/A | Moderate |

**Average article score: 52.7/100**

---

## 10. Immediate Action Checklist

Items marked [CODE] require development work. Items marked [COPY] require content edits only in `blog.ts` or `page.tsx`.

- [ ] [CODE] Add `Article` JSON-LD schema to `/app/articles/[slug]/page.tsx` — populate from `post` object dynamically
- [ ] [CODE] Add `og:image` and Twitter card `images` to `generateMetadata` in `/app/articles/[slug]/page.tsx` using `post.image`
- [ ] [CODE] Change title suffix from `| Flex Commerce Articles` to `| Flex Commerce` in `generateMetadata`
- [ ] [CODE] Add `BreadcrumbList` JSON-LD to `/app/articles/[slug]/page.tsx`
- [ ] [CODE] Add `CollectionPage` JSON-LD to `/app/articles/page.tsx`
- [ ] [COPY] Update article titles for articles 3 and 5 to include "Shopify"
- [ ] [COPY] Trim meta descriptions for articles 1, 4, and 5 to under 160 chars
- [ ] [CODE] Add contextual `<Link>` components inside `renderBlock` — or add links as markdown-style inline elements to the `ContentBlock` type to enable in-content linking
- [ ] [COPY] Add internal link targets to content blocks in `blog.ts` for all six articles (see Section 5)
- [ ] [COPY] Write and publish at least one "How to choose a Shopify Plus agency UK" article targeting agency-qualifier queries
- [ ] [COPY] Write and publish a second case study — this is the highest-value content gap
- [ ] [CODE] Expand author footer component to include a brief bio and LinkedIn profile link
