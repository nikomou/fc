# Flex Commerce — Site Structure & Internal Linking Strategy

**Last updated:** March 2026

---

## 1. Full URL Hierarchy

```
https://flexcommerce.co.uk/
│
├── (Commercial — Service Pages)
│   ├── /shopify-plus
│   ├── /shopify-theme-development
│   ├── /shopify-app-development
│   ├── /shopify-integrations
│   │   ├── /shopify-integrations/klaviyo          [planned]
│   │   ├── /shopify-integrations/yotpo            [planned]
│   │   ├── /shopify-integrations/gorgias          [planned]
│   │   ├── /shopify-integrations/nosto            [planned]
│   │   ├── /shopify-integrations/brightpearl      [planned]
│   │   └── /shopify-integrations/klevu            [planned]
│   ├── /shopify-migration
│   ├── /shopify-seo
│   ├── /shopify-speed-optimisation
│   ├── /shopify-store-audit
│   ├── /shopify-support
│   ├── /shopify-maintenance
│   ├── /shopify-ai
│   ├── /automations
│   └── /ecommerce-agency
│
├── (Commercial — Migration Pages)
│   ├── /woocommerce-to-shopify-migration
│   ├── /magento-to-shopify-migration
│   ├── /bigcommerce-to-shopify-migration
│   ├── /squarespace-to-shopify-migration
│   ├── /webflow-to-shopify-migration
│   └── /salesforce-to-shopify-migration
│
├── (Commercial — Location Pages)
│   ├── /shopify-agency-manchester          [live]
│   ├── /shopify-agency-liverpool           [live]
│   ├── /shopify-agency-london              [planned — Priority 1]
│   ├── /shopify-agency-birmingham          [planned — Priority 1]
│   ├── /shopify-agency-leeds               [planned — Priority 1]
│   ├── /shopify-agency-bristol             [planned — Priority 1]
│   ├── /shopify-agency-edinburgh           [planned — Priority 2]
│   ├── /shopify-agency-glasgow             [planned — Priority 2]
│   ├── /shopify-agency-newcastle           [planned — Priority 2]
│   └── /shopify-agency-cambridge           [planned — Priority 2]
│
├── (Commercial — Industry Vertical Pages)  [all planned]
│   ├── /shopify-for-fashion
│   ├── /shopify-for-health-beauty
│   ├── /shopify-for-b2b
│   ├── /shopify-for-food-drink
│   ├── /shopify-for-luxury
│   ├── /shopify-for-sports-fitness
│   └── /shopify-for-home-garden
│
├── /shopify-services                       (service hub/index)
│
├── /work                                   (case studies index)
│   ├── /work/[case-study-slug-1]
│   ├── /work/[case-study-slug-2]
│   └── /work/[case-study-slug-n]
│
├── /about
│   ├── /about (overview)
│   └── /about/team                         [planned]
│       ├── /about/team/[name-1]            [planned]
│       ├── /about/team/[name-2]            [planned]
│       └── /about/team/[name-n]            [planned]
│
├── /pricing
│
├── /partners
│
├── /resources                              (content hub index)
│
├── /articles                               (blog — 256 posts)
│   └── /articles/[slug]
│
├── /guides                                 (how-to guides — 60+)
│   └── /guides/[slug]
│
├── /checklists                             (checklists — 30+)
│   └── /checklists/[slug]
│
├── /quote
├── /contact
├── /privacy
└── /terms
```

---

## 2. Content Pillars

The site's topical authority is built around five content pillars. Every page should map to exactly one pillar. Internal links should flow both within pillars and from pillars to commercial pages.

### Pillar 1: Shopify Plus & Enterprise
**Commercial pages:** `/shopify-plus`, `/shopify-app-development`, `/shopify-ai`, `/automations`
**Supporting content topics:**
- Shopify Plus vs Shopify Advanced
- Shopify Plus features and pricing
- Shopify Plus checkout customisation
- Shopify Plus Flow automation
- Shopify headless commerce
- Shopify Plus for specific industries
- Shopify Plus Multipass

**Target audience:** Heads of Ecommerce, CTOs, Ecommerce Directors at £2M+ revenue brands

---

### Pillar 2: Platform Migrations
**Commercial pages:** `/shopify-migration`, all 6 `/[platform]-to-shopify-migration` pages
**Supporting content topics:**
- Platform comparison articles (WooCommerce vs Shopify, Magento vs Shopify, etc.)
- Migration process guides
- Migration checklists
- "Why migrate to Shopify?" content
- Post-migration SEO guides
- Migration cost and timeline content

**Target audience:** IT leads, CTOs, Ecommerce Managers considering platform switch

---

### Pillar 3: Shopify Design & Development
**Commercial pages:** `/shopify-theme-development`, `/shopify-integrations`, integration sub-pages
**Supporting content topics:**
- Shopify theme customisation guides
- Shopify Liquid development
- Shopify custom app development
- Integration setup guides (Klaviyo, Yotpo, Gorgias, etc.)
- Shopify performance and speed guides

**Target audience:** Marketing managers, Ecommerce Managers, Technical leads

---

### Pillar 4: Shopify Growth & SEO
**Commercial pages:** `/shopify-seo`, `/shopify-speed-optimisation`, `/shopify-store-audit`, `/shopify-support`, `/shopify-maintenance`
**Supporting content topics:**
- Shopify SEO guides and checklists
- Shopify CRO guides
- Shopify speed optimisation guides
- Shopify analytics and reporting guides
- Support retainer content

**Target audience:** Marketing Managers, Ecommerce Managers, Digital Directors

---

### Pillar 5: Local Ecommerce (UK)
**Commercial pages:** All 10 location pages, `/ecommerce-agency`
**Supporting content topics:**
- City-specific ecommerce brand content
- Regional ecommerce market articles
- Local industry spotlights
- "Why Manchester/Liverpool brands choose Shopify" content

**Target audience:** UK businesses searching for local agency support

---

## 3. Internal Linking Strategy

### 3.1 Principles

1. **Every content page links to at least one commercial page.** No article, guide, or checklist is published without a contextual link to a relevant service or migration page.
2. **Every commercial page links to 2–3 supporting content pieces.** Service pages should link to their most relevant guides and articles.
3. **Location pages link to all service pages.** The services grid on each location page links to the main service pages.
4. **Use descriptive anchor text.** "Learn more about our Shopify migration service" not "click here".
5. **Hub pages link to all spoke pages.** `/shopify-migration` links to all 6 platform-specific migration pages. `/shopify-integrations` links to all integration sub-pages.
6. **Breadcrumbs are implemented on all pages** (both visible UI and BreadcrumbList schema).

### 3.2 Commercial Page Internal Link Map

| Page | Must Link To | May Link To |
|---|---|---|
| `/shopify-plus` | `/shopify-theme-development`, `/shopify-app-development`, `/shopify-ai` | `/shopify-for-fashion`, `/work/[relevant-case-study]` |
| `/shopify-theme-development` | `/shopify-plus`, `/shopify-integrations` | `/shopify-speed-optimisation`, `/work/[relevant-case-study]` |
| `/shopify-app-development` | `/shopify-plus`, `/shopify-integrations` | `/automations`, `/work/[relevant-case-study]` |
| `/shopify-migration` | All 6 `/[platform]-to-shopify-migration` pages | `/shopify-plus`, `/shopify-seo` |
| `/woocommerce-to-shopify-migration` | `/shopify-migration`, `/shopify-plus` | `/shopify-seo`, `/guides/how-to-migrate-from-woocommerce-to-shopify` |
| `/magento-to-shopify-migration` | `/shopify-migration`, `/shopify-plus` | `/shopify-seo`, `/guides/how-to-migrate-from-magento-to-shopify` |
| `/shopify-seo` | `/shopify-speed-optimisation`, `/shopify-store-audit` | `/shopify-plus`, relevant guides |
| `/shopify-speed-optimisation` | `/shopify-seo`, `/shopify-store-audit` | `/shopify-plus`, relevant guides |
| `/shopify-store-audit` | `/shopify-seo`, `/shopify-speed-optimisation` | `/shopify-support`, `/pricing` |
| `/shopify-support` | `/shopify-maintenance`, `/shopify-store-audit` | `/pricing`, `/contact` |
| `/shopify-agency-manchester` | All service pages, `/shopify-agency-liverpool` | `/work`, `/articles/manchester-ecommerce-brands-2026` |
| `/shopify-agency-liverpool` | All service pages, `/shopify-agency-manchester` | `/work`, local content |
| `/shopify-agency-london` | All service pages | `/shopify-agency-manchester`, `/shopify-agency-birmingham` |

### 3.3 Content Page Internal Link Rules

**Articles:**
- Minimum 3 internal links per article
- At least 1 link must go to a commercial service or migration page
- At least 1 link must go to another article or guide (pillar depth)
- Anchor text: use keyword-rich, descriptive text

**Guides:**
- Minimum 3 internal links per guide
- At least 1 link must go to a commercial service page with CTA framing
- Example: "If you'd prefer to let our experts handle this, see our [Shopify migration service](/shopify-migration)."

**Checklists:**
- Minimum 2 internal links per checklist
- At least 1 link to a relevant service page
- At least 1 link to a related guide or article

### 3.4 Orphan Page Prevention

Pages that must never be orphaned (no internal links pointing to them):
- Case study pages — must be linked from `/work` index and from relevant service pages
- Team member profiles — must be linked from `/about/team` index and from authored articles
- Integration sub-pages — must be linked from `/shopify-integrations` parent
- Industry vertical pages — must be linked from homepage services section and from `/shopify-services`

Run a monthly orphan page check using Screaming Frog.

---

## 4. Schema Markup by Page Type

### 4.1 Homepage (`/`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://flexcommerce.co.uk/#organization",
      "name": "Flex Commerce",
      "url": "https://flexcommerce.co.uk",
      "logo": { "@type": "ImageObject", "url": "https://flexcommerce.co.uk/images/flex-logo.svg" },
      "description": "Shopify Plus agency in Manchester and Liverpool. Custom Shopify development, migrations, SEO and ongoing support for ambitious UK ecommerce brands.",
      "email": "hello@flexcommerce.co.uk",
      "telephone": "+44-161-883-7830",
      "sameAs": [
        "https://linkedin.com/company/flexcommerce",
        "https://twitter.com/flexcommerce",
        "https://instagram.com/flexcommerce"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Shopify Services",
        "itemListElement": [/* service offers */]
      }
    },
    { "@type": "WebSite", "@id": "https://flexcommerce.co.uk/#website", ... },
    { "@type": "LocalBusiness" /* Manchester */ },
    { "@type": "LocalBusiness" /* Liverpool */ }
  ]
}
```

### 4.2 Service Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "ProfessionalService"],
      "name": "Shopify Plus Development",
      "provider": { "@id": "https://flexcommerce.co.uk/#organization" },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "description": "...",
      "url": "https://flexcommerce.co.uk/shopify-plus"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://flexcommerce.co.uk" },
        { "@type": "ListItem", "position": 2, "name": "Shopify Plus", "item": "https://flexcommerce.co.uk/shopify-plus" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [/* FAQ items */]
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "itemReviewed": { "@id": "https://flexcommerce.co.uk/#organization" }
    }
  ]
}
```

### 4.3 Migration Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "WooCommerce to Shopify Migration",
      "provider": { "@id": "https://flexcommerce.co.uk/#organization" },
      "description": "..."
    },
    {
      "@type": "HowTo",
      "name": "How to Migrate from WooCommerce to Shopify",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Audit your WooCommerce store", "text": "..." },
        { "@type": "HowToStep", "position": 2, "name": "Export your data", "text": "..." }
      ]
    },
    { "@type": "BreadcrumbList", ... },
    { "@type": "FAQPage", ... }
  ]
}
```

### 4.4 Location Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://flexcommerce.co.uk/shopify-agency-manchester#localbusiness",
      "name": "Flex Commerce Manchester",
      "description": "...",
      "email": "hello@flexcommerce.co.uk",
      "telephone": "+44-161-883-7830",
      "address": { "@type": "PostalAddress", ... },
      "geo": { "@type": "GeoCoordinates", ... },
      "openingHoursSpecification": { ... },
      "aggregateRating": { "@type": "AggregateRating", ... },
      "areaServed": [{ "@type": "City", "name": "Manchester" }, ...]
    },
    { "@type": "BreadcrumbList", ... },
    { "@type": "FAQPage", ... },
    { "@type": "Review", ... }
  ]
}
```

### 4.5 Article Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "WooCommerce vs Shopify 2026",
      "author": {
        "@type": "Person",
        "name": "[Author Name]",
        "url": "https://flexcommerce.co.uk/about/team/[slug]"
      },
      "publisher": { "@id": "https://flexcommerce.co.uk/#organization" },
      "datePublished": "2026-04-01",
      "dateModified": "2026-04-01",
      "image": "https://flexcommerce.co.uk/images/articles/[slug]-og.png",
      "url": "https://flexcommerce.co.uk/articles/woocommerce-vs-shopify-2026"
    },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

### 4.6 Guide Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "How to Migrate from WooCommerce to Shopify",
      "description": "...",
      "step": [/* HowToStep array */],
      "author": { "@type": "Person", "name": "[Author Name]", ... }
    },
    {
      "@type": "Article",
      "headline": "...",
      "author": { ... },
      "publisher": { "@id": "https://flexcommerce.co.uk/#organization" }
    },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

### 4.7 Team Member Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "[Team Member Name]",
        "jobTitle": "[Job Title]",
        "worksFor": { "@id": "https://flexcommerce.co.uk/#organization" },
        "url": "https://flexcommerce.co.uk/about/team/[slug]",
        "image": "https://flexcommerce.co.uk/images/team/[name].jpg",
        "sameAs": [
          "https://linkedin.com/in/[linkedin-handle]",
          "https://twitter.com/[twitter-handle]"
        ]
      }
    }
  ]
}
```

### 4.8 Case Study Pages

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://flexcommerce.co.uk/work/[slug]#article",
      "headline": "[Case Study Title]",
      "author": { "@id": "https://flexcommerce.co.uk/#organization" },
      "publisher": { "@id": "https://flexcommerce.co.uk/#organization" },
      "datePublished": "...",
      "about": {
        "@type": "Service",
        "name": "[Service Used]"
      }
    },
    {
      "@type": "Review",
      "itemReviewed": { "@id": "https://flexcommerce.co.uk/#organization" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "[Client Name or 'Anonymous']" },
      "reviewBody": "[Testimonial quote]"
    },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

---

## 5. Navigation & Information Architecture Recommendations

### 5.1 Header Megamenu (Current)

The existing 3-column megamenu is well-structured. Recommended additions:

**Development column** — add:
- Shopify AI (currently missing from megamenu)
- Automations (currently missing from megamenu)

**Growth & Support column** — add:
- Ecommerce Consultancy link (pointing to `/ecommerce-agency`)

**Locations column** — remains good; ensure all 10 cities appear once pages are built.

### 5.2 Footer Links

The footer should include a structured sitemap for SEO:

```
Services
├── Shopify Plus
├── Theme Development
├── App Development
├── Integrations
├── Migrations
├── Shopify SEO
├── Speed Optimisation
├── Store Audit
├── Support
└── Maintenance

Migrations
├── WooCommerce to Shopify
├── Magento to Shopify
├── BigCommerce to Shopify
├── Squarespace to Shopify
├── Webflow to Shopify
└── Salesforce to Shopify

Locations
├── Manchester
├── Liverpool
├── London
├── Birmingham
├── Leeds
└── [+ 5 more]

Resources
├── Articles
├── Guides
├── Checklists
└── Work

Company
├── About
├── Team
├── Pricing
├── Partners
├── Contact
├── Privacy Policy
└── Terms
```

### 5.3 Resources Hub (`/resources`)

The `/resources` page should act as a well-signposted content index with:
- Featured/latest articles (3 most recent)
- Featured guides (categorised by pillar)
- Checklists grid
- Case studies teaser (2–3 latest)
- Search box for filtering content

This page should be internally linked from the homepage, footer, and all content pages.

---

## 6. URL Conventions

| Page type | Convention | Example |
|---|---|---|
| Service | `/[service-name]` | `/shopify-plus` |
| Migration | `/[origin]-to-shopify-migration` | `/woocommerce-to-shopify-migration` |
| Location | `/shopify-agency-[city]` | `/shopify-agency-manchester` |
| Integration | `/shopify-integrations/[partner]` | `/shopify-integrations/klaviyo` |
| Industry | `/shopify-for-[industry]` | `/shopify-for-fashion` |
| Article | `/articles/[descriptive-slug]` | `/articles/woocommerce-vs-shopify-2026` |
| Guide | `/guides/how-to-[action]` | `/guides/how-to-migrate-from-woocommerce-to-shopify` |
| Checklist | `/checklists/[descriptive-slug]` | `/checklists/shopify-migration-checklist` |
| Case study | `/work/[client-or-project-slug]` | `/work/manchester-fashion-brand` |
| Team member | `/about/team/[first-name-last-name]` | `/about/team/james-wilson` |

**Rules:**
- All URLs lowercase, hyphen-separated
- No trailing slashes (or consistent trailing slashes — pick one and enforce site-wide)
- No stop words in URLs where they add no keyword value
- URLs should include primary keyword where possible

---

## 7. Duplicate Content Prevention

| Risk | Prevention |
|---|---|
| Location pages with near-identical copy | Unique copy per city: local brand names, local ecommerce ecosystem references, city-specific service areas, unique testimonials |
| Migration pages with overlapping content | Each page focuses on platform-specific pain points, migration steps, and data types unique to that platform |
| Guide and article overlap | Guides = actionable step-by-step; Articles = strategic/analysis. Never publish the same intent twice |
| Pagination (articles, guides) | Ensure `?page=2` etc. use `rel="canonical"` pointing to the base page, or use `rel="next"` / `rel="prev"` |
| Tag/category pages | Noindex tag/category archive pages unless they have substantial unique content |

---

## 8. Crawl Budget Considerations

With 250+ articles, 60+ guides, 30+ checklists, and 10 location pages, crawl efficiency is important.

- Ensure sitemap.xml includes all canonical URLs and excludes paginated/filtered URLs
- Verify Cloudflare Pages is not generating duplicate URLs with/without trailing slashes
- Keep `robots.txt` clean — disallow `/api/` routes and any admin paths
- Use `next/image` for all images (already in place) to ensure WebP delivery and lazy loading
- Monitor "Crawled - currently not indexed" report in GSC and investigate causes promptly
