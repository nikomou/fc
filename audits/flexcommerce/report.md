# Flex Commerce - Full Site SEO Audit Report

**Date:** 13 March 2026
**Site:** https://flexcommerce.co.uk
**Tech Stack:** Next.js 14 (App Router), Tailwind CSS
**Auditor:** SEO Auditor

---

## Executive Summary

Flex Commerce has a well-structured Next.js 14 site with strong technical foundations: global schema markup baked into the root layout, OpenGraph configured at the metadata level, and a consistent URL taxonomy. The location pages (Manchester, Liverpool) are the standout performers with full LocalBusiness schema, FAQPage, BreadcrumbList, AggregateRating, and canonical/OG/Twitter tags all correctly implemented.

The most impactful issues are: (1) seven of the nine audited pages have title tags that are either too short or too long, (2) every service page and secondary page is missing a dedicated OG image, (3) the `/shopify-theme-development` page returns a 404 on the live site despite the file existing locally, (4) the `/articles` and `/shopify-services` pages 404 on the live site, suggesting a deployment or routing gap, and (5) the global `og:image` points to `/images/og-image.png` which does not exist in `public/images/`, meaning all social shares are broken sitewide.

**Overall Site Score: 61/100 (Needs Work)**

---

## Page-by-Page Audit

---

### 1. Homepage (/)

**Score: 68/100**

#### Title Tag: 11/15
- Current (rendered): `Shopify Plus Agency Manchester & Liverpool | Flex Commerce`
- Length: 58 characters (within 50-60 target)
- Issue: Dynamically constructed from `locations.map(l => l.name).join(" & ")`. When pending location pages ship, this title will grow to exceed 60 characters (e.g. "Manchester & Liverpool & London & Edinburgh & ...").
- Recommendation: Hard-code to `Shopify Plus Agency Manchester & Liverpool | Flex Commerce` to prevent future breakage.

#### Meta Description: 6/10
- Current: "Shopify Plus Agency in Manchester & Liverpool helping ambitious brands scale with custom ecommerce design, development & ongoing support. Get your free quote today."
- Length: 164 characters (4 over the 160-character target)
- Issue: Dynamically constructed from locations array - same scaling risk as title.
- Recommendation: "Shopify Plus agency in Manchester & Liverpool. Custom ecommerce design, development & ongoing support for ambitious brands. Free quote today."
- New length: 142 characters

#### H1: 12/15
- Current: "Build unforgettable Shopify experiences with Flex"
- Issue: The brand name "Flex" alone is weaker than "Flex Commerce". The primary keyword "Shopify" is present but "Shopify Plus Agency" or "Shopify Agency" is absent. Competitors will be targeting that phrase in their H1.
- Recommendation: "Build unforgettable Shopify experiences with Flex Commerce" or "Shopify Plus Agency Manchester & Liverpool | Flex Commerce"

#### Heading Structure: 10/15
- H1: "Build unforgettable Shopify experiences with Flex" (1 H1 - correct)
- H2: Our Services / Our Locations / (StatsBar section headings)
- Issue: No H2 that explicitly targets the primary keyword "Shopify Plus Agency". The "Trusted By Leading Brands" and partner sections lack headings in the code (they are rendered by sub-components - needs verification).
- Structure is logical and well-nested.

#### Schema Markup: 13/15
- Root layout generates: Organization, WebSite, Service (with OfferCatalog), LocalBusiness x2 (Manchester + Liverpool)
- Organization has `sameAs` with LinkedIn, Twitter, Instagram
- ContactPoint, OpeningHoursSpecification, GeoCoordinates all present
- Issue: Organization schema is missing `email` and `description` fields (noted as pending in CLAUDE.md)
- Issue: `priceRange` is set on LocalBusiness but the Organization node has no pricing context
- Issue: The `Service` schema in root layout duplicates services that individual pages should own
- Missing: `WebPage` schema on homepage itself (location pages have it, homepage does not)
- Missing: `SiteLinksSearchBox` potential (Shopify agency terms have enough volume to warrant it)

#### OG / Twitter: 3/10
- og:title: Matches page title (correct)
- og:description: Set (correct)
- og:image: Set to `/images/og-image.png`
- **CRITICAL: `/images/og-image.png` does not exist in `public/images/`**. The public/images directory contains no `og-image.png` file, only SVGs and other assets. Every social share from the homepage (and all pages using the default image) will serve a broken image.
- og:url: `https://flexcommerce.co.uk/` (correct)
- Twitter card: `summary_large_image` (correct)
- Canonical: `https://flexcommerce.co.uk` (set via `alternates.canonical` in layout)

#### Internal Linking: 8/10
- Homepage links to: /shopify-services, /shopify-agency-manchester, /shopify-agency-liverpool, /shopify-agency-london, /shopify-agency-edinburgh, /shopify-agency-bristol, /shopify-agency-leeds, /shopify-agency-cambridge, /shopify-agency-birmingham, /shopify-agency-glasgow, /shopify-agency-newcastle, /pricing, /work, /about, /articles, /resources, /contact, /quote
- All individual service pages linked via ServicesGrid component
- Issue: "View All Services" button links to `/shopify-services` which 404s on the live site

#### Image SEO: 7/10
- Client logos use descriptive alt text from constants (e.g. "Polaroid - Shopify Plus ecommerce client") - good
- Partner logos use descriptive alt text - good
- Decorative wave/circle SVGs use `aria-hidden="true"` and empty alt - correct
- Hero section: need to verify if there are any hero images without alt text (Hero component not audited)

#### URL Structure: 10/10
- Clean, keyword-relevant root URL

#### Mobile/Technical: 5/5
- `lang="en"` on html element (correct, though `en_GB` would be more precise)
- Inter font loaded with `display: "swap"` (correct)
- `antialiased` body class (correct)
- Viewport meta handled by Next.js automatically

---

### 2. Shopify Services (/shopify-services)

**Score: 62/100**

**Note:** This page returns a 404 on the live site (https://flexcommerce.co.uk/shopify-services). The file exists locally at `/app/shopify-services/page.tsx`. This is a critical deployment issue.

#### Title Tag: 6/15
- Current: `Shopify Development Services | Flex Commerce`
- Length: 44 characters (too short)
- Recommendation: `Shopify Development Services UK | Custom Shopify Agency | Flex Commerce`
- New length: 71 chars - try: `Shopify Development Services | Custom Themes & Shopify Plus` (60 chars)

#### Meta Description: 8/10
- Current: "Full-service Shopify development agency. Custom themes, Shopify Plus, app development, migrations, speed optimisation & ongoing support for UK brands."
- Length: 150 characters (at the target floor)
- Good keyword coverage. Acceptable.

#### H1: 12/15
- Current: "Shopify Development Services"
- Issue: No location signal, no differentiation. "UK" or "Manchester & Liverpool" would add local relevance.
- Recommendation: "Shopify Development Services for UK Brands"

#### Schema Markup: 12/15
- Service schema with OfferCatalog listing all 6 services - good
- BreadcrumbList (Home > Services) - good
- Missing: `WebPage` schema
- Missing: `Review` or `AggregateRating` - this is a high-value commercial page

#### OG / Twitter: 4/10
- og:title and og:description set correctly
- og:image: Falls back to global `/images/og-image.png` (missing file - broken)
- No page-specific OG image
- Canonical: `/shopify-services` (relative) - Next.js will resolve to absolute with metadataBase

#### Critical Issue: Page not deployed
- The `/shopify-services` route is missing from the live site
- All internal links pointing to `/shopify-services` (homepage "View All Services" button, location page buttons) return 404

---

### 3. Shopify Plus (/shopify-plus)

**Score: 58/100**

#### Title Tag: 5/15
- Current: `Shopify Plus Development | Flex Commerce`
- Length: 40 characters (too short, undersells the page)
- Recommendation: `Shopify Plus Agency UK | Expert Shopify Plus Development`
- Length: 56 characters

#### Meta Description: 5/10
- Current: "Enterprise-grade Shopify Plus solutions for high-growth brands. Custom checkout, advanced automation, and scalable architecture."
- Length: 128 characters (22 short of target)
- Missing call to action, missing location signal
- Recommendation: "Enterprise-grade Shopify Plus solutions for high-growth UK brands. Custom checkout, automation & scalable architecture. Talk to our Plus experts today."
- Length: 152 characters

#### H1: 10/15
- Current: "Shopify Plus Development" (from PageHero badge/title)
- Issue: Too generic. No differentiation, no agency/UK signal, no emotional hook.
- Recommendation: "Shopify Plus Development Agency for High-Growth Brands"

#### Heading Structure: 11/15
- H1: "Shopify Plus Development"
- H2: "Shopify Plus Capabilities" / "Why Shopify Plus?" / "Our Shopify Plus Process"
- H3: Custom Checkout / Scripts & Automation / Multi-Store Management / B2B & Wholesale / Enterprise Security / Scalability / Assessment / Planning / Development / Optimisation
- Structure is logical. All H3s are subheadings under H2 context.

#### Schema Markup: 8/15
- No page-level schema defined in `/app/shopify-plus/page.tsx`
- Root layout includes a Service schema for "Shopify Plus Development" globally - but it is too generic
- Missing: Page-specific Service schema with pricing, BreadcrumbList, FAQPage (the page has implicit FAQ content in the benefits list)
- Missing: `WebPage` type

#### OG / Twitter: 3/10
- No `openGraph` in page metadata - falls back to root layout defaults
- og:image: Global `/images/og-image.png` (missing - broken)
- og:url falls back to root (incorrect - should be /shopify-plus)
- No canonical set in page metadata (inherits from root which points to homepage - INCORRECT for a distinct page)

#### Canonical: CRITICAL ISSUE
- No `alternates.canonical` in `/app/shopify-plus/page.tsx`
- Root layout sets canonical to `https://flexcommerce.co.uk` (the homepage URL)
- This means Google sees the Shopify Plus page as canonicalising back to the homepage - a significant duplicate content signal

#### Internal Linking: 7/10
- `RelatedServices` component links to other service pages - good
- CTAs link to /quote and /work
- Issue: No links to location pages from this service page

---

### 4. Shopify Theme Development (/shopify-theme-development)

**Score: 56/100**

**Note:** This page returns a 404 on the live site. File exists locally. Same deployment issue as /shopify-services.

#### Title Tag: 9/15
- Current: `Shopify Theme Development | Custom Themes | Flex Commerce`
- Length: 57 characters (within range)
- Good: keyword "Custom Themes" adds differentiation
- Issue: "Bespoke" or "UK" could add more search relevance

#### Meta Description: 6/10
- Current: "Bespoke Shopify theme development that converts. Custom designs, mobile-first, speed optimised themes built by certified Shopify experts."
- Length: 137 characters (13 short)
- Missing CTA and price anchor
- Recommendation: "Bespoke Shopify theme development that converts. Custom designs, mobile-first & speed optimised. Built by certified Shopify experts. Get a free quote."
- Length: 152 characters

#### H1: 10/15
- Current: "Custom Shopify Theme Development"
- Acceptable. Could add "UK" or "Agency" for stronger brand signal.

#### Schema Markup: 8/15
- Service schema present (inline in page) with name, description, provider, serviceType, areaServed
- Missing: BreadcrumbList
- Missing: FAQPage (page has implicit "Why Custom Over Templates?" FAQ content in the What's Included section)
- Missing: AggregateRating / Review

#### OG / Twitter: 4/10
- og:title and og:description set in page metadata
- og:image: Not set in page metadata, falls back to global broken image
- Canonical: `/shopify-theme-development` set correctly
- No Twitter card in page metadata (falls back to root)

#### Critical Issue: Page not deployed (404 on live site)

---

### 5. Shopify Agency Manchester (/shopify-agency-manchester)

**Score: 79/100**

The best-optimised page on the site.

#### Title Tag: 8/15
- Current: `Manchester Shopify Agency | Shopify Plus Experts`
- Length: 48 characters (2 short of floor)
- The live site rendered a different title: "Shopify Agency Manchester | Custom Shopify Solutions by Flex Commerce" (69 chars, too long) - suggests possible caching from a previous version or the page on the live site differs from the local codebase
- Local code recommendation: `Manchester Shopify Agency | Shopify Plus Development` (52 chars, ideal)

#### Meta Description: 8/10
- Current: "Award-winning Shopify & Shopify Plus agency in Manchester. Custom development, theme design & migrations. Get a free quote today."
- Length: 129 characters (21 short)
- Good CTA ("free quote"), good keyword placement
- Recommendation: "Award-winning Shopify & Shopify Plus agency in Manchester city centre. Custom development, theme design & migrations for ambitious brands. Free quote."
- Length: 150 characters

#### H1: 14/15
- Current: "Shopify Agency Manchester"
- Excellent: exact-match primary keyword, matches title pattern, clean
- Minor: "Shopify Plus Agency Manchester" would capture the higher-intent Plus searchers too

#### Heading Structure: 13/15
- H1: "Shopify Agency Manchester"
- H2: "Why Choose Our Manchester Shopify Agency?" / "Ready to grow your ecommerce business?" / "Shopify Services in Manchester" / "Why Manchester Brands Choose Shopify" / "Serving Greater Manchester & Beyond" / "Frequently Asked Questions"
- H3: Service names (Shopify Plus / Theme Development / Migrations etc.) + FAQ questions
- Structure is logical. FAQ H3s are correctly nested.
- Issue: "Ready to grow your ecommerce business?" CTA section uses H2 which is slightly over-weighted - this is a design callout not a content heading

#### Schema Markup: 15/15
- LocalBusiness with: name, image, url, telephone, email, description, priceRange, PostalAddress (with addressRegion), GeoCoordinates, OpeningHoursSpecification, AggregateRating, areaServed (14 cities)
- BreadcrumbList: Home > Shopify Agency Manchester
- FAQPage with 5 questions
- Review with author, rating, body, datePublished
- All @id anchors correctly formatted

#### OG / Twitter: 9/10
- og:title, og:description set correctly
- og:image: `/images/og-manchester.png` - **this file does not appear to exist** in `public/images/` (the directory only shows `blog/`, `circles/`, `clients/` etc. but no `og-manchester.png`)
- Canonical: `/shopify-agency-manchester` set correctly
- Twitter card: `summary_large_image` set

#### Internal Linking: 9/10
- Links to: /shopify-plus, /shopify-agency-liverpool, /quote, /work, and all 6 service pages
- "View All Services" button links to /shopify-services (404 on live site)
- Good cross-linking to Liverpool page in FAQ answer - genuine E-E-A-T signal

#### Image SEO: 7/10
- Map iframe has a descriptive `title` attribute
- Logo images have alt text from constants
- No hero photography on location pages (text-based layout) - not an issue per se, but a missed opportunity for local imagery that could support local SEO

---

### 6. Shopify Agency Liverpool (/shopify-agency-liverpool)

**Score: 75/100**

#### Title Tag: 10/15
- Current: `Liverpool Shopify Agency | Shopify Plus Experts | Merseyside`
- Length: 60 characters (at ceiling)
- Good: includes city + service + regional modifier
- Minor: "Merseyside" adds character count without much search volume advantage vs "Liverpool"

#### Meta Description: 7/10
- Current: "Leading Shopify & Shopify Plus agency in Liverpool. Custom development, theme design & migrations for Merseyside brands. Free quote."
- Length: 132 characters (18 short)
- Recommendation: "Leading Shopify & Shopify Plus agency in Liverpool city centre. Custom development, theme design & migrations for Merseyside & North West brands. Get a free quote."
- Length: 163 chars - trim: "Leading Shopify & Shopify Plus agency in Liverpool. Custom development, theme design & migrations for Merseyside brands. Free consultation today."
- Length: 146 characters

#### H1: 14/15
- Current: "Shopify Agency Liverpool"
- Same positive assessment as Manchester

#### Schema Markup: 15/15
- Identical strong schema pattern to Manchester page

#### OG / Twitter: 7/10
- og:image: `/images/og-liverpool.png` - **likely missing** (same issue as og-manchester.png)
- The live site WebFetch returned no Open Graph tags for Liverpool - suggests the OG image is missing which may be causing crawlers to not index OG metadata correctly, or the live site is behind the local codebase

#### Critical: Liverpool page missing OG tags on live site
- Live site scan showed no OG tags present
- Local code has them correctly defined
- This suggests either the live site has not been redeployed, or there is a Next.js build/cache issue

---

### 7. Articles (/articles)

**Score: 52/100**

**Note:** This page returns a 404 on the live site. File exists locally.

#### Title Tag: 4/15
- Current (rendered with template): `Ecommerce Articles | Shopify Tips, Guides & Case Studies | Flex Commerce`
- Length: 72 characters (12 over limit)
- This page explicitly sets a full title string and the template is not applied (because the articles page metadata.title is already a full string)
- Recommendation: `Shopify Articles & Guides | Flex Commerce` (41 chars - still short) or `Ecommerce Articles | Shopify Tips & Guides | Flex Commerce` (58 chars)

#### Meta Description: 7/10
- Current: "Expert ecommerce insights from the Flex Commerce team. Shopify guides, conversion optimisation tips, case studies, and platform news to help you grow your store."
- Length: 161 characters (1 over limit)
- Trim: remove "and platform news" or similar to reach 155-160 chars

#### H1: 9/15
- Current: "Insights to help your store grow"
- Issue: No "Shopify", no "ecommerce", no brand name. This H1 provides almost no keyword signal.
- Recommendation: "Shopify Ecommerce Articles, Guides & Tips" or "Ecommerce Articles from the Flex Commerce Team"

#### Schema Markup: 4/15
- No structured data in articles listing page
- Missing: `CollectionPage` or `ItemList` schema linking to individual articles
- Missing: `WebPage` schema
- Missing: `BreadcrumbList`

#### OG / Twitter: 6/10
- og:title and og:description set
- og:image: Not set, falls back to global broken image
- og:url: set to full URL (good - one of few pages to do this)
- Canonical: Full URL set explicitly (good)
- No Twitter card defined (falls back to root)

#### Internal Linking: 5/10
- Articles page lists blog posts from `lib/blog.ts` data
- No category filtering or pagination schema
- No links to related service pages from the articles index

---

### 8. Pricing (/pricing)

**Score: 48/100**

#### Title Tag: 2/15
- Current (rendered with template): `Pricing | Flex Commerce`
- Length: 23 characters (critically short)
- This is one of the most commercially important pages on the site
- Recommendation: `Shopify Development Pricing | Packages from £2,500 | Flex Commerce` (67 chars) or `Shopify Agency Pricing | Flex Commerce` (38 chars) - settle on: `Shopify Development Pricing Plans | Flex Commerce` (49 chars)

#### Meta Description: 6/10
- Current: "Transparent Shopify development pricing. Packages starting from £2,500 for new stores to £9,500+ for enterprise solutions."
- Length: 122 characters (28 short)
- Good: includes price anchor (£2,500) which is a strong differentiator in search snippets
- Recommendation: "Transparent Shopify development pricing with no hidden costs. Packages from £2,500 for new stores to enterprise Shopify Plus solutions. Get your free quote."
- Length: 155 characters

#### H1: 8/15
- Current: "Transparent Pricing" (from PageHero title prop: "Transparent Pricing")
- Issue: No keyword ("Shopify", "development", "agency"). This H1 is completely generic.
- Recommendation: "Shopify Development Pricing"

#### Schema Markup: 3/15
- No page-level schema
- The pricing page has `pricingTiers` data in constants which should power an `Offer` or `PriceSpecification` schema
- Missing: `PricingPage` (WebPage subtype), BreadcrumbList, Offer schema with price ranges
- The live site WebFetch showed WebPage + BreadcrumbList schema, suggesting the live site may have schema that the local codebase does not have, or it was crawled from a cached version

#### OG / Twitter: 2/10
- No OG or Twitter tags in page metadata
- Falls back to global defaults (broken image, wrong URL)

#### Canonical: Not set in page metadata
- Inherits root canonical pointing to homepage - INCORRECT

#### FAQs: Good content, missing schema
- 6 FAQs present in page content
- No FAQPage schema implemented
- Adding FAQPage schema here is a quick win for SERP rich results

---

### 9. About (/about)

**Score: 45/100**

#### Title Tag: 2/15
- Current (rendered with template): `About Us | Flex Commerce`
- Length: 24 characters (critically short)
- Recommendation: `About Flex Commerce | Shopify Plus Agency Manchester & Liverpool` (63 chars) or `About Flex Commerce | Shopify Plus Agency UK` (44 chars) - settle on: `About Flex Commerce | Shopify Plus Experts Manchester` (53 chars)

#### Meta Description: 6/10
- Current: "Learn about Flex Commerce - a Shopify Plus agency based in Manchester and Liverpool, helping brands build exceptional ecommerce experiences."
- Length: 140 characters (10 short)
- Good keyword coverage
- Recommendation: "Learn about Flex Commerce - a Shopify Plus agency in Manchester & Liverpool. We've helped 100+ brands grow with expert Shopify design & development."
- Length: 149 characters

#### H1: 9/15
- Current: "About Flex Commerce"
- Issue: No keyword beyond brand name
- Recommendation: "About Flex Commerce - Shopify Plus Agency"

#### Schema Markup: 4/15
- No page-level schema
- About page is a prime location for Person schema (team members), Organization (richer than root), and possibly AggregateRating
- Missing: WebPage (AboutPage subtype), BreadcrumbList, Organization (page-level, richer than global)

#### OG / Twitter: 2/10
- No OG or Twitter tags in page metadata
- Falls back to broken global defaults
- No canonical set

#### Content: E-E-A-T Concerns
- Stats (£50M+ revenue, 127 projects, 8+ years, 2 UK offices) are good trust signals
- Testimonial from "Gregory, Managing Director" with no company name weakens E-E-A-T
- Team section exists (Team component) but not audited for structured data

---

## Sitewide Technical Issues

### Critical: Missing OG Images
- `/public/images/og-image.png` does not exist
- `/public/images/og-manchester.png` does not exist
- `/public/images/og-liverpool.png` does not exist
- All social sharing will serve broken images or no image sitewide

### Critical: Live Site Deployment Gap
- `/shopify-services` - 404 on live site, exists in codebase
- `/shopify-theme-development` - 404 on live site, exists in codebase
- `/articles` - 404 on live site, exists in codebase (and linked from homepage via LatestPosts)
- This is a significant issue - internal links from the homepage point to non-existent routes

### High: Root Canonical Override
- `app/layout.tsx` sets `alternates.canonical: siteConfig.url` (the homepage URL)
- Pages that do NOT set their own canonical (shopify-plus, pricing, about) will inherit this and self-canonicalise to the homepage
- This tells Google "the canonical version of /shopify-plus is https://flexcommerce.co.uk" - a critical duplicate content signal

### High: Title Tag Scaling Bug
- Homepage title and meta description are dynamically built from the `locations` array
- Currently: "Manchester & Liverpool" (10 locations in constants)
- When all 10 location slugs are live, the title will be: "Shopify Plus Agency Manchester & Liverpool & London & Edinburgh & Glasgow & Bristol & Leeds & Birmingham & Newcastle & Cambridge | Flex Commerce" - far exceeding any reasonable title length
- Fix: Hard-code the title to reference only physical office locations

### Medium: `lang="en"` vs `lang="en-GB"`
- `app/layout.tsx` uses `lang="en"` on the html element
- For a UK-focused site, `lang="en-GB"` is more precise for search engines and assistive technologies

### Medium: Missing Sitemap and Robots.txt
- No `sitemap.ts` or `sitemap.xml` found in the codebase
- No `robots.txt` file found in `public/`
- Next.js 14 supports `app/sitemap.ts` for dynamic sitemap generation
- With 180+ pages (guides, checklists, location pages) a sitemap is critical for crawl efficiency

### Medium: Liverpool Phone Number
- Liverpool location uses Manchester phone number (`0161 883 7830`)
- This is noted in `constants.ts` and affects the LocalBusiness schema for Liverpool
- A Liverpool-specific number or at minimum ensuring this is intentional would strengthen local SEO

### Low: Missing `twitter:site` and `twitter:creator`
- Root layout Twitter card is missing `site` (e.g. `@flexcommerce`) and `creator` handles
- These are not required but improve Twitter/X card rendering

---

## Schema Markup Summary

### What's Working

| Page | Schema Types Present |
|------|---------------------|
| Root (all pages) | Organization, WebSite, Service (OfferCatalog), LocalBusiness x2 |
| /shopify-agency-manchester | LocalBusiness, BreadcrumbList, FAQPage, Review (in page script tag) |
| /shopify-agency-liverpool | LocalBusiness, BreadcrumbList, FAQPage, Review (in page script tag) |
| /shopify-services | Service (OfferCatalog), BreadcrumbList |
| /shopify-theme-development | Service |

### What's Missing

| Page | Missing Schema | Priority |
|------|---------------|----------|
| All pages | WebPage (page-level) | High |
| /shopify-plus | Service (page-level), BreadcrumbList, FAQPage | High |
| /pricing | PricingPage, Offer (with prices), BreadcrumbList, FAQPage | High |
| /about | AboutPage, BreadcrumbList, Organization (enriched), Person (team) | Medium |
| /articles | ItemList (CollectionPage), BreadcrumbList | Medium |
| All service pages | AggregateRating, Review | Medium |
| Root layout | email, description on Organization | Low |

### Dual Schema Conflict
- The Manchester and Liverpool pages output their LocalBusiness schema via an inline `<script>` tag in the page component
- The root layout ALSO outputs LocalBusiness schema for these same locations via the global `jsonLd` object
- This results in duplicate LocalBusiness entries for Manchester and Liverpool on those pages
- The page-level schema is richer (has email, description, AggregateRating, areaServed, Review) but both are present in the DOM
- Recommendation: Remove the LocalBusiness entries from the root layout global schema (keep only Organization, WebSite, Service)

---

## Content & E-E-A-T Assessment

### Strengths
- Client logos from recognisable brands (Polaroid, Gymshark, Fashion Nova, Kylie Cosmetics) - strong E-E-A-T signals
- Partner logos (Klaviyo, Yotpo, Trustpilot, Gorgias) - demonstrates ecosystem credibility
- Specific revenue figures (£50M+ Manchester, £30M+ Liverpool) - verifiable claims build trust
- Office addresses, phone numbers, opening hours - NAP consistency
- FAQs on location pages with local-specific answers
- AggregateRating (5.0 / 50 reviews) on location pages - note: this is hardcoded, not from a live review source

### Weaknesses
- Testimonials use first names only or vague roles ("Managing Director" with no company)
- The single testimonial in constants.ts (Gregory, Managing Director, company: "") is very thin
- No case studies section despite having a /work route
- No author bio or byline on article pages (not audited but confirmed from lib/blog.ts structure)
- About page stats ("8+ years experience") combined with "founded 2016" means 2024 would be ~8 years - this will become inaccurate over time without dynamic calculation

---

## Score Summary

| Page | Score | Key Issues |
|------|-------|------------|
| Homepage | 68/100 | Dynamic title scaling bug, missing OG image, short meta desc |
| /shopify-services | 62/100 | 404 on live site, short title, no page-specific OG image |
| /shopify-plus | 58/100 | Short title, no canonical, no page schema, no OG image |
| /shopify-theme-development | 56/100 | 404 on live site, missing BreadcrumbList, no OG image |
| /shopify-agency-manchester | 79/100 | Title 2 chars short, desc 21 chars short, OG image missing |
| /shopify-agency-liverpool | 75/100 | OG tags absent on live site, desc short, OG image missing |
| /articles | 52/100 | 404 on live site, weak H1, no schema, title too long |
| /pricing | 48/100 | Title critically short, no canonical, no schema, no OG |
| /about | 45/100 | Title critically short, no canonical, no schema, no OG |
| **Average** | **60/100** | |

---

## Heading Structure Reference

### Homepage
```
H1: Build unforgettable Shopify experiences with Flex
  H2: Our Services
    H3: [service names from ServicesGrid]
  H2: Our Locations
  H2: [StatsBar heading - needs verification]
```

### /shopify-agency-manchester
```
H1: Shopify Agency Manchester
  H2: Why Choose Our Manchester Shopify Agency?
    H3: Shopify Partners
    H3: Local Team
    H3: Proven Results
    H3: Fast Turnaround
  H2: Ready to grow your ecommerce business?
  H2: Shopify Services in Manchester
    H3: Shopify Plus
    H3: Theme Development
    H3: Migrations
    H3: App Development
    H3: Speed Optimisation
    H3: Ongoing Support
  H2: Why Manchester Brands Choose Shopify
  H2: Serving Greater Manchester & Beyond
  H2: Frequently Asked Questions
    H3: [5 FAQ questions]
```

### /shopify-plus
```
H1: Shopify Plus Development
  H2: Shopify Plus Capabilities
    H3: Custom Checkout / Scripts & Automation / Multi-Store / B2B / Security / Scalability
  H2: Why Shopify Plus?
  H2: Our Shopify Plus Process
    H3: Assessment / Planning / Development / Optimisation
```

### /pricing
```
H1: Transparent Pricing
  H2: [tier names: Flex Start / Flex Grow / Flex Prime - rendered in PricingGrid component]
  H2: Included in Every Project
  H2: Frequently Asked Questions
    H3: [6 FAQ questions]
```
