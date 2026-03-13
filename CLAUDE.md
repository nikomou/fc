# Flex Commerce - Project Instructions

## Project Overview
Next.js 14 website for Flex Commerce, a Shopify Plus agency based in Manchester and Liverpool.

**Note:** Brand name is masked as "Fxxx" in code while working in public.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Docker (dev server on port 3002)

## Running the Project
```bash
docker-compose up -d    # Start dev server on localhost:3030
docker-compose down     # Stop dev server
docker logs fc --tail 20  # Check logs
```

## Custom Skills

### @seo-auditor
When the user asks for an SEO audit, analyze the following for the specified page(s):

**Check these elements:**
1. **Title tag** - Length (50-60 chars ideal), keyword placement
2. **Meta description** - Length (150-160 chars), compelling copy, keywords
3. **H1 tag** - One per page, includes primary keyword
4. **Heading hierarchy** - Proper H1 > H2 > H3 structure
5. **Image alt tags** - Descriptive, include keywords where natural
6. **Internal linking** - Links to other relevant pages
7. **Canonical URL** - Present and correct
8. **Open Graph tags** - Title, description, image
9. **Structured data** - JSON-LD schema (LocalBusiness, Organization, etc.)
10. **Mobile-friendliness** - Responsive design
11. **Page speed considerations** - Image optimization, lazy loading

**Output format:**
- ✅ What's good (table format)
- ⚠️ Issues to address (table with priority)
- 🔧 Specific code fixes to recommend

### @lighthouse
Run a Lighthouse audit using the CLI if available, or provide manual performance recommendations.

## Brand Colors
- CTA Pink: #ef436b
- Star Yellow: rgb(255, 206, 93)
- Background Alt: #e5e5e5
- Dark sections: #1a1a1a

## Key Files
- `/lib/constants.ts` - Site config, navigation, locations array, pricing
- `/components/layout/Header.tsx` - Main navigation with 3-column megamenu (Development, Growth & Support, Locations)
- `/components/layout/Footer.tsx` - Footer links
- `/app/layout.tsx` - Root layout with default metadata and dynamic LocalBusiness schema

## Reusable Components
- `/components/ui/TestimonialCard.tsx` - Dark testimonial section with quote icon, used on homepage (StatsBar) and location pages
- `/components/ui/TrustBadge.tsx` - "50+ happy clients" with real avatars + star rating, props: `dark`, `align`, `showRating`
- `/components/ui/ValueCard.tsx` - Card with colored circle + icon, accepts string icon names for Server Components
- `/components/ui/Section.tsx` - Section wrapper with `background` prop ("white" | "alt" | "dark")
- `/components/ui/Button.tsx` - Button with variants: `primary`, `secondary`, `outline`, `outline-light`, `solid-light`, `cta`, `ghost`

## Location Pages
Template: `/app/shopify-agency-manchester/page.tsx`

Each location page includes:
- SEO metadata (title, description, canonical, OpenGraph, Twitter)
- JSON-LD schema: LocalBusiness, BreadcrumbList, FAQPage, Review
- Hero with office details card
- "Why Choose" section with ValueCards
- Services section (dark background, white cards)
- "Why [City] Brands Choose Shopify" section
- TestimonialCard
- Service areas for local SEO
- FAQs
- OpenStreetMap embed

**Existing locations:** Manchester, Liverpool
**Pending locations:** London, Edinburgh, Bristol, Leeds, Cambridge, Birmingham, Glasgow, Newcastle

## Service Pages
**Existing:** `/shopify-plus`
**Pending:**
- `/shopify-theme-development`
- `/shopify-app-development`
- `/shopify-integrations`
- `/shopify-migration`
- `/shopify-seo`
- `/shopify-speed-optimization`
- `/shopify-store-audit`
- `/shopify-support`
- `/shopify-maintenance`

## Navigation Structure
Header megamenu has 3 columns:
1. **Development:** Shopify Plus, Theme Development, App Development, Integrations, Migrations
2. **Growth & Support:** Shopify SEO, Speed Optimisation, Store Audit, Ongoing Support, Maintenance
3. **Locations:** 10 UK cities in 2-column grid

## Images
- Client avatars: `/public/images/clients/avatars/client-[1-4].png` (80x80px)
- Client logos: `/public/images/clients/`
- Partner logos: `/public/images/partners/`
- Circle SVGs for ValueCards: `/public/images/circles/`

## Schema Notes
Location pages use dynamic schema from `/lib/constants.ts` locations array. Each location needs:
- streetAddress, addressLocality, postalCode, addressCountry
- phone
- geo coordinates (latitude, longitude)

**Schema enhancements pending:**
- Add `email` to LocalBusiness
- Add `description` to LocalBusiness
- Add `sameAs` for social profiles
