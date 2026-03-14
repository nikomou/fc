# Flex Commerce - SEO Action Plan

**Generated:** 13 March 2026
**Based on:** Full site audit report (report.md)
**Priority system:** P0 = blocking / broken | P1 = high impact | P2 = medium impact | P3 = low effort / maintenance

---

## P0 - Fix Immediately (Blocking Issues)

These items are broken and actively harming SEO and social sharing right now.

---

### P0-1: Create missing OG images

**Impact:** All social shares across the entire site are broken - no image renders when any page is shared on LinkedIn, Twitter/X, Facebook, Slack, etc.

**Files affected:**
- `/public/images/og-image.png` (referenced by root layout - applies to all pages)
- `/public/images/og-manchester.png` (referenced by `/shopify-agency-manchester`)
- `/public/images/og-liverpool.png` (referenced by `/shopify-agency-liverpool`)

**Spec:** 1200x630px PNG, branded with Flex Commerce logo and page context. The `/images/og-image.png` file is the most urgent as it is the fallback for every page.

**Tool:** Canva, Figma, or any image editor. Can also use `next/og` (Vercel OG) to generate them dynamically.

---

### P0-2: Deploy missing routes to the live site

**Impact:** Three pages that are internally linked from the homepage return 404. This breaks user journeys and prevents Google from indexing key content.

**Missing routes on live site:**
- `/shopify-services` - linked by "View All Services" button on homepage and location pages
- `/shopify-theme-development` - linked from location pages and services grid
- `/articles` - linked from homepage LatestPosts component and navigation

**Action:** Run a full deployment. Check `docker-compose` build process or hosting platform (Vercel/Netlify) for any build errors preventing these routes from rendering.

```bash
docker-compose up -d
docker logs fc --tail 50
```

---

### P0-3: Fix the root layout canonical override

**File:** `/app/layout.tsx` line 56-58

**Current (broken):**
```typescript
alternates: {
  canonical: siteConfig.url,
},
```

**Problem:** This sets `https://flexcommerce.co.uk` as the canonical for EVERY page that does not override it. Pages like `/shopify-plus`, `/pricing`, and `/about` inherit this and tell Google their canonical is the homepage URL.

**Fix:** Remove the canonical from the root layout entirely. Each page should set its own canonical.

```typescript
// Remove this block from layout.tsx metadata:
// alternates: {
//   canonical: siteConfig.url,
// },
```

Then add to each page that lacks one:

**`/app/shopify-plus/page.tsx`:**
```typescript
alternates: {
  canonical: "/shopify-plus",
},
```

**`/app/pricing/page.tsx`:**
```typescript
alternates: {
  canonical: "/pricing",
},
```

**`/app/about/page.tsx`:**
```typescript
alternates: {
  canonical: "/about",
},
```

---

### P0-4: Fix dynamic title scaling bug

**File:** `/app/layout.tsx` lines 15-17

**Current (will break when more locations are added):**
```typescript
title: {
  default: `Shopify Plus Agency ${locations.map(l => l.name).join(" & ")} | ${siteConfig.name}`,
  template: `%s | ${siteConfig.name}`,
},
```

**Fix:** Hard-code the homepage title to reference only the two physical offices:
```typescript
title: {
  default: `Shopify Plus Agency Manchester & Liverpool | ${siteConfig.name}`,
  template: `%s | ${siteConfig.name}`,
},
description: `Shopify Plus agency in Manchester & Liverpool helping ambitious brands scale with custom ecommerce design, development & ongoing support. Free quote today.`,
```

Also update the OG title and Twitter title in the same metadata object to match.

---

## P1 - High Impact (Complete Within 2 Weeks)

---

### P1-1: Fix short title tags across service and utility pages

These pages are under-optimised for search because their titles are too short and under-describe the page's purpose.

| File | Current Title | Recommended Title | Chars |
|------|--------------|-------------------|-------|
| `/app/shopify-plus/page.tsx` | `Shopify Plus Development` | `Shopify Plus Agency UK \| Expert Development & Support` | 54 |
| `/app/shopify-services/page.tsx` | `Shopify Development Services` | `Shopify Development Services UK \| Flex Commerce` | 49 |
| `/app/pricing/page.tsx` | `Pricing` | `Shopify Development Pricing Plans \| Flex Commerce` | 50 |
| `/app/about/page.tsx` | `About Us` | `About Flex Commerce \| Shopify Plus Agency Manchester` | 54 |
| `/app/shopify-agency-manchester/page.tsx` | `Manchester Shopify Agency \| Shopify Plus Experts` | `Manchester Shopify Agency \| Shopify Plus Development` | 53 |

**How to implement:** Each uses the `title` metadata export. Since these use the root template (`%s | Flex Commerce`), the title string you provide is the `%s` part - do NOT include "| Flex Commerce" in the string, Next.js will append it.

Example for `/app/pricing/page.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Shopify Development Pricing Plans",
  // ...
};
```
Rendered: `Shopify Development Pricing Plans | Flex Commerce` (49 chars)

---

### P1-2: Fix the Articles page title (too long)

**File:** `/app/articles/page.tsx`

**Current:** `Ecommerce Articles | Shopify Tips, Guides & Case Studies | Flex Commerce` (72 chars)

Note: This page sets its own full title string, bypassing the template. Shorten to:

```typescript
export const metadata: Metadata = {
  title: "Ecommerce Articles & Shopify Guides | Flex Commerce",
  // ...
};
```
Length: 52 characters.

---

### P1-3: Add missing page canonicals and OG tags to service pages

**`/app/shopify-plus/page.tsx`** - add to existing metadata:
```typescript
export const metadata: Metadata = {
  title: "Shopify Plus Agency UK | Expert Development & Support",
  description: "Enterprise-grade Shopify Plus solutions for high-growth UK brands. Custom checkout, flow automation & scalable architecture. Talk to our Plus experts today.",
  alternates: {
    canonical: "/shopify-plus",
  },
  openGraph: {
    title: "Shopify Plus Agency UK | Flex Commerce",
    description: "Enterprise-grade Shopify Plus solutions for high-growth UK brands. Custom checkout, flow automation & scalable architecture.",
    url: "/shopify-plus",
    siteName: "Flex Commerce",
    images: [{ url: "/images/og-shopify-plus.png", width: 1200, height: 630, alt: "Shopify Plus Agency UK - Flex Commerce" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Plus Agency UK | Flex Commerce",
    description: "Enterprise-grade Shopify Plus solutions for high-growth UK brands.",
    images: ["/images/og-shopify-plus.png"],
  },
};
```

Apply the same pattern to: `/app/pricing/page.tsx`, `/app/about/page.tsx`, `/app/shopify-services/page.tsx`

---

### P1-4: Add FAQPage schema to Pricing page

The pricing page has 6 FAQs and no structured data. This is an easy rich result win.

**File:** `/app/pricing/page.tsx`

Add above the default export:

```typescript
const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's included in each Shopify development package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each package includes design, development, testing, and deployment. The difference lies in complexity, number of pages, and level of customisation. All packages include mobile responsiveness and basic SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer payment plans for Shopify development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We typically split payments into milestones: 50% upfront, 25% at design approval, and 25% at launch. For larger projects, we can discuss custom payment arrangements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical Shopify project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter projects typically take 2-3 weeks, Growth projects 4-6 weeks, and Enterprise projects 8-12 weeks. Timeline depends on feedback speed and scope complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing Shopify maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer monthly retainer packages for ongoing support, maintenance, and feature development. Rates start from £500/month.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with an existing Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work with both new and existing stores. We can audit your current setup and recommend improvements or take over ongoing development.",
      },
    },
  ],
};

const pricingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://flexcommerce.co.uk" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://flexcommerce.co.uk/pricing" },
  ],
};
```

Then inside the component return, before `<PageHero>`:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingBreadcrumbSchema) }} />
```

---

### P1-5: Add page-level schema to Shopify Plus page

**File:** `/app/shopify-plus/page.tsx`

```typescript
const shopifyPlusSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://flexcommerce.co.uk/shopify-plus#service",
      name: "Shopify Plus Development",
      description: "Enterprise-grade Shopify Plus solutions for high-growth brands. Custom checkout, advanced automation, and scalable architecture.",
      provider: {
        "@type": "Organization",
        name: "Flex Commerce",
        url: "https://flexcommerce.co.uk",
      },
      serviceType: "Shopify Plus Development",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify Plus Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Checkout Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Flow Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Store Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "B2B Wholesale Features" } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://flexcommerce.co.uk" },
        { "@type": "ListItem", position: 2, name: "Shopify Plus", item: "https://flexcommerce.co.uk/shopify-plus" },
      ],
    },
  ],
};
```

---

### P1-6: Fix the dual LocalBusiness schema conflict

The root layout emits LocalBusiness schema for Manchester and Liverpool. The individual location pages also emit LocalBusiness schema (richer version) via inline `<script>` tags. This results in duplicate schema on location pages.

**Fix:** Edit `/app/layout.tsx` to remove the LocalBusiness entries from the global `locationSchemas` array. Keep the Organization, WebSite, and Service types in the root layout only.

Before (in layout.tsx):
```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    ...locationSchemas,          // <-- remove this line
    { "@type": "WebSite", ... },
    { "@type": "Service", ... },
  ],
};
```

After:
```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... },
    { "@type": "Service", ... },
  ],
};
```

The page-level schemas on the location pages are richer and correct - they should be the single source of truth.

---

## P2 - Medium Impact (Complete Within 4 Weeks)

---

### P2-1: Generate a dynamic sitemap

**File to create:** `/app/sitemap.ts`

With 180+ pages across guides, checklists, location pages, service pages, and articles, Google needs a sitemap to crawl efficiently. Without one, less-prominent pages (guides, checklists) may go months without being indexed.

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flexcommerce.co.uk';

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/shopify-services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/shopify-plus`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/shopify-theme-development`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/shopify-agency-manchester`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/shopify-agency-liverpool`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/pricing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles`, priority: 0.8, changeFrequency: 'weekly' as const },
    // ... add all other static pages
  ];

  return staticPages.map(page => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
```

---

### P2-2: Create a robots.txt file

**File to create:** `/public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /quote/

Sitemap: https://flexcommerce.co.uk/sitemap.xml
```

---

### P2-3: Improve H1 tags on service pages

| Page | Current H1 | Recommended H1 |
|------|-----------|----------------|
| /shopify-plus | Shopify Plus Development | Shopify Plus Development Agency for High-Growth Brands |
| /shopify-services | Shopify Development Services | Full-Service Shopify Development Agency |
| /pricing | Transparent Pricing | Shopify Development Pricing |
| /about | About Flex Commerce | About Flex Commerce - Shopify Plus Agency |
| /articles | Insights to help your store grow | Shopify Ecommerce Articles & Guides |

H1 is set via the `title` prop on `PageHero`. Update the prop value in each page.

---

### P2-4: Strengthen meta descriptions for short pages

Pages with descriptions under 140 characters:

**`/app/shopify-plus/page.tsx`** (currently 128 chars):
```typescript
description: "Enterprise-grade Shopify Plus solutions for high-growth UK brands. Custom checkout, flow automation & scalable architecture. Talk to our certified Plus experts today.",
```
Length: 168 chars - trim to: "Enterprise-grade Shopify Plus solutions for high-growth UK brands. Custom checkout, automation & scalable architecture. Talk to our Plus experts." (148 chars)

**`/app/shopify-agency-manchester/page.tsx`** (currently 129 chars):
```typescript
description: "Award-winning Shopify & Shopify Plus agency in Manchester city centre. Custom development, theme design & migrations for ambitious brands. Free quote today.",
```
Length: 158 chars

**`/app/about/page.tsx`** (currently 140 chars):
```typescript
description: "Learn about Flex Commerce - a Shopify Plus agency in Manchester & Liverpool. We've helped 100+ brands grow with expert Shopify design & development.",
```
Length: 149 chars

---

### P2-5: Add schema to the About page

**File:** `/app/about/page.tsx`

```typescript
const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://flexcommerce.co.uk/about#webpage",
      url: "https://flexcommerce.co.uk/about",
      name: "About Flex Commerce - Shopify Plus Agency",
      description: "Learn about Flex Commerce, a Shopify Plus agency in Manchester and Liverpool founded in 2016.",
      isPartOf: { "@id": "https://flexcommerce.co.uk/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://flexcommerce.co.uk" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://flexcommerce.co.uk/about" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://flexcommerce.co.uk/#organization",
      name: "Flex Commerce",
      url: "https://flexcommerce.co.uk",
      foundingDate: "2016",
      description: "Shopify Plus agency based in Manchester and Liverpool helping ambitious brands build exceptional ecommerce experiences.",
      email: "hello@flexcommerce.co.uk",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "10-20" },
    },
  ],
};
```

---

### P2-6: Add ItemList schema to the Articles page

**File:** `/app/articles/page.tsx`

Import blog posts and generate schema:

```typescript
const articlesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ecommerce Articles & Shopify Guides | Flex Commerce",
  url: "https://flexcommerce.co.uk/articles",
  description: "Expert ecommerce insights from the Flex Commerce team.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: blogPosts.slice(0, 10).map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://flexcommerce.co.uk/articles/${post.slug}`,
      name: post.title,
    })),
  },
};
```

---

### P2-7: Add `email` and `description` to root Organization schema

**File:** `/app/layout.tsx`

Update the Organization node in `jsonLd`:

```typescript
{
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,                              // add this
  description: "Shopify Plus agency in Manchester & Liverpool helping ambitious brands build exceptional ecommerce experiences.",  // add this
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/images/flex-logo.svg`,
  },
  // ... rest of schema
}
```

---

### P2-8: Change `lang="en"` to `lang="en-GB"`

**File:** `/app/layout.tsx` line 178

```tsx
// Before:
<html lang="en" className={inter.className}>

// After:
<html lang="en-GB" className={inter.className}>
```

---

## P3 - Low Effort / Housekeeping (Rolling)

---

### P3-1: Add `twitter:site` to root metadata

**File:** `/app/layout.tsx`

```typescript
twitter: {
  card: "summary_large_image",
  site: "@flexcommerce",        // add this
  creator: "@flexcommerce",     // add this
  title: `...`,
  // ...
},
```

---

### P3-2: Add BreadcrumbList schema to Theme Development page

**File:** `/app/shopify-theme-development/page.tsx`

```typescript
const themeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://flexcommerce.co.uk" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://flexcommerce.co.uk/shopify-services" },
    { "@type": "ListItem", position: 3, name: "Theme Development", item: "https://flexcommerce.co.uk/shopify-theme-development" },
  ],
};
```

---

### P3-3: Verify Liverpool phone number is intentional

**File:** `/lib/constants.ts` lines 35-37

Liverpool location uses `"0161 883 7830"` which is a Manchester area code (0161). If Liverpool has a separate number, update constants.ts. The phone number appears in:
- Liverpool LocalBusiness schema (`telephone` field)
- Liverpool page hero contact card
- Liverpool OG image alt text (indirectly via siteConfig)

---

### P3-4: Dynamically calculate years of experience on About page

**File:** `/app/about/page.tsx`

```typescript
const yearsExperience = new Date().getFullYear() - 2016;

const stats = [
  { value: "£50M+", label: "Revenue Generated" },
  { value: "127+", label: "Projects Delivered" },
  { value: `${yearsExperience}+`, label: "Years Experience" },  // dynamic
  { value: "2", label: "UK Offices" },
];
```

---

### P3-5: Add `SiteLinksSearchBox` potential via WebSite schema

If Google indexes the site well, a `potentialAction` on the WebSite schema can enable a search box in SERPs for branded queries.

**File:** `/app/layout.tsx` - update the WebSite schema node:

```typescript
{
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
},
```

Only add this if a `/search` route exists or is planned.

---

### P3-6: Add testimonial company names

**File:** `/lib/constants.ts` and location page schemas

The single testimonial in constants.ts has an empty `company` field. The location page inline reviews have company name in the `role` field (e.g. "Ecommerce Director, Manchester Fashion Brand") but the Review schema `itemReviewed` should ideally link to a real business.

Update the Review schema `author` to include more detail:
```typescript
author: {
  "@type": "Person",
  name: "Rebecca Taylor",
  jobTitle: "Ecommerce Director",
},
```

---

## Implementation Priority Matrix

| Task | Impact | Effort | Do First? |
|------|--------|--------|-----------|
| P0-1: Create OG images | Critical | Low | Yes - immediately |
| P0-2: Deploy missing routes | Critical | Low | Yes - immediately |
| P0-3: Fix root canonical | High | Very Low | Yes - today |
| P0-4: Fix title scaling bug | High | Very Low | Yes - today |
| P1-1: Fix short title tags | High | Low | Yes - this week |
| P1-2: Fix Articles title | High | Very Low | Yes - this week |
| P1-3: Add OG to service pages | High | Low | Yes - this week |
| P1-4: Pricing FAQPage schema | High | Low | Yes - this week |
| P1-5: Shopify Plus schema | Medium | Low | Next week |
| P1-6: Fix dual schema conflict | Medium | Low | Next week |
| P2-1: Generate sitemap | High | Medium | Week 2 |
| P2-2: Create robots.txt | Medium | Very Low | Week 2 |
| P2-3: Improve H1 tags | Medium | Low | Week 2 |
| P2-4: Strengthen meta descs | Medium | Low | Week 2 |
| P2-5: About page schema | Medium | Medium | Week 3 |
| P2-6: Articles ItemList schema | Medium | Medium | Week 3 |
| P2-7: Org schema email/desc | Low | Very Low | Week 3 |
| P2-8: lang="en-GB" | Low | Very Low | Week 3 |
| P3-1 through P3-6 | Low | Low | Rolling |

---

## Estimated Impact Projections

Implementing P0 and P1 items should yield:

- Social click-through rate improvement from fixing OG images (currently 0% image render rate on all shares)
- Crawl budget improvement once sitemap is live (currently no sitemap for 180+ pages)
- Rich result eligibility for FAQPage schema on Pricing and location pages (FAQ snippets in SERPs)
- Correction of canonical signals preventing Google from conflating all service pages with the homepage
- Recovery of `/shopify-services`, `/shopify-theme-development`, and `/articles` traffic once deployed

The location pages (Manchester and Liverpool) are already well-optimised and should maintain or improve rankings with the OG image fix and dual-schema cleanup.

The biggest organic opportunity is the content already built: 80+ guides, 25+ checklists. These pages are not yet indexed (no sitemap, some not deployed). Getting them indexed with proper schema and internal linking to service pages could drive significant long-tail traffic.
