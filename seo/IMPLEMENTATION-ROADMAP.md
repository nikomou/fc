# Flex Commerce — SEO Implementation Roadmap

**Period:** April 2026 – March 2027 (52 weeks)
**Last updated:** March 2026

---

## Roadmap Overview

| Phase | Weeks | Focus | Expected Outcome |
|---|---|---|---|
| Phase 1: Foundation | Weeks 1–8 | Technical fixes, on-page optimisation, local SEO setup | Clean technical baseline; GBP verified; core pages optimised |
| Phase 2: Content Launch | Weeks 9–20 | Service page depth, migration pages, first content wave | Ranking movement on commercial terms; migration traffic |
| Phase 3: Authority Building | Weeks 21–36 | Link building, case studies, E-E-A-T content, location expansion | Domain authority increase; ranking in top 10 for target terms |
| Phase 4: Scale & Compound | Weeks 37–52 | Content velocity, industry verticals, integration pages, GEO | Compounding organic growth; 200+ keywords in top 10 |

---

## Phase 1: Foundation (Weeks 1–8)

**Goal:** Ensure the technical foundation is solid and nothing is blocking ranking performance. Quick wins on existing pages before investing in new content.

### Week 1–2: Technical SEO Audit & Fixes

**SEO tasks:**
- [ ] Verify XML sitemap is generated at build time and submit to Google Search Console
- [ ] Verify XML sitemap is submitted to Bing Webmaster Tools
- [ ] Confirm robots.txt is accessible at `https://flexcommerce.co.uk/robots.txt` with correct directives
- [ ] Change root HTML `lang="en"` to `lang="en-GB"` in `/app/layout.tsx`
- [ ] Add `email` and `description` fields to root Organization schema in `/app/layout.tsx`
- [ ] Add `sameAs` array to root Organization schema (LinkedIn, Twitter, Instagram URLs)
- [ ] Audit all `<Image>` alt text across site — ensure all images have descriptive, keyword-relevant alt text
- [ ] Verify canonical tags are set on all pages (service, location, migration, content)
- [ ] Test all structured data in Google's Rich Results Test tool
- [ ] Set up Google Search Console (verify ownership via DNS/HTML tag on Cloudflare)
- [ ] Set up Bing Webmaster Tools

**Developer tasks:**
- [ ] Confirm Cloudflare Pages is serving correct HTTP status codes (200, not 404) for all static routes
- [ ] Confirm no redirect chains (check with Screaming Frog or similar)
- [ ] Confirm HTTPS is enforced with HSTS header on Cloudflare
- [ ] Confirm Cloudflare caching headers are set correctly for static assets

**Deliverable:** SEO technical health score > 90 (measured via Screaming Frog or Semrush site audit)

---

### Week 3–4: On-Page Optimisation — Service Pages

For each of the 12 service pages, review and update:

**Pages:**
- `/shopify-plus`
- `/shopify-theme-development`
- `/shopify-app-development`
- `/shopify-integrations`
- `/shopify-migration`
- `/shopify-seo`
- `/shopify-speed-optimisation`
- `/shopify-store-audit`
- `/shopify-support`
- `/shopify-maintenance`
- `/shopify-ai`
- `/automations`

**Checklist per service page:**
- [ ] Title tag: 50–60 characters, primary keyword first
- [ ] Meta description: 150–160 characters, includes keyword + CTA
- [ ] H1: One per page, exact or close-match primary keyword
- [ ] Word count: Minimum 1,200 words (aim for 1,500–2,000)
- [ ] Subheadings (H2/H3): Include secondary keywords naturally
- [ ] Add BreadcrumbList JSON-LD schema
- [ ] Add FAQPage JSON-LD schema (minimum 4 FAQs per service page)
- [ ] Add `ProfessionalService` or `Service` schema with `provider` linking to Organisation
- [ ] Internal links: Minimum 3 links to related service/location pages
- [ ] CTA: Clear primary CTA (Get a Quote) + secondary CTA (View Work)
- [ ] Add trust signals: Shopify Partner badge, client logos, testimonial excerpt
- [ ] Custom OpenGraph image per service page

**Deliverable:** All 12 service pages optimised to standard

---

### Week 5–6: On-Page Optimisation — Migration Pages

For each of the 6 migration pages:

**Pages:**
- `/woocommerce-to-shopify-migration`
- `/magento-to-shopify-migration`
- `/bigcommerce-to-shopify-migration`
- `/squarespace-to-shopify-migration`
- `/webflow-to-shopify-migration`
- `/salesforce-to-shopify-migration`

**Checklist per migration page:**
- [ ] H1: "[Platform] to Shopify Migration" or "[Platform] to Shopify: [benefit]"
- [ ] Word count: Minimum 1,500 words (migration pages have high commercial intent — justify the length)
- [ ] Migration process section (numbered steps)
- [ ] HowTo schema (map to migration steps)
- [ ] FAQPage schema (migration-specific questions)
- [ ] BreadcrumbList schema
- [ ] "Why migrate?" section with platform-specific pain points
- [ ] "What we migrate" section (products, customers, orders, SEO URLs, redirects)
- [ ] Pricing/timeline section (transparent — differentiator)
- [ ] CTA: "Get a free migration quote"
- [ ] Link to `/shopify-migration` parent page
- [ ] Link to 2–3 related articles (migration guides)

**Deliverable:** All 6 migration pages optimised to standard

---

### Week 7–8: Local SEO Setup

**Google Business Profile:**
- [ ] Claim/verify Manchester GBP listing (if not already done)
- [ ] Claim/verify Liverpool GBP listing (if not already done)
- [ ] Complete all GBP fields: business name, address, phone, website, hours, category (Web Design Agency + E-Commerce Agency)
- [ ] Upload 10+ photos per GBP listing (office, team, work)
- [ ] Add all services to GBP service menu
- [ ] Write 2–3 GBP posts for each location (introductory posts with CTA)
- [ ] Pre-populate GBP Q&A for both locations

**Local citations:**
- [ ] Submit to Yell.com (both locations)
- [ ] Submit to Bing Places (both locations)
- [ ] Submit to Apple Maps Connect (both locations)
- [ ] Verify Trustpilot profile is claimed and linked from website
- [ ] Create Clutch profile with accurate NAP data
- [ ] Register with Manchester Digital member directory
- [ ] Register with Baltic Creative directory (Liverpool)

**Review generation:**
- [ ] Set up a review request email sequence for new project completions
- [ ] Add Trustpilot review request link to project delivery email templates
- [ ] Target: 5 new verified Trustpilot reviews in Phase 1

**Deliverable:** Both GBP profiles verified, complete, and active. 8+ citation sources with consistent NAP.

---

## Phase 2: Content Launch (Weeks 9–20)

**Goal:** Publish high-priority commercial content to begin ranking for migration and service terms. Build topical authority in the Shopify agency niche.

### Week 9–10: Cornerstone Content Publication

Publish the evergreen priority articles identified in the Content Calendar:

- [ ] "Shopify Plus Agency UK: How to Choose the Right Partner" (2,500 words)
- [ ] "WooCommerce vs Shopify 2026" (2,000 words)
- [ ] "Magento vs Shopify Plus" (2,000 words)
- [ ] "Shopify Plus Pricing UK 2026" (1,500 words)

**For each:**
- [ ] All schema applied (Article, BreadcrumbList)
- [ ] Named author with profile link
- [ ] Internal links to relevant service/migration pages
- [ ] Social share to LinkedIn and Twitter
- [ ] Submit URL to Search Console for indexing

---

### Week 11–12: Case Study Publication

Publish minimum 2 full case studies (1,000+ words each):

**Template per case study:**
- Client industry + location (name if permitted)
- Challenge: What was the problem?
- Approach: What did Flex Commerce do?
- Results: Specific metrics (conversion rate %, revenue £, speed score improvement)
- Timeline
- Services used (with links)
- Testimonial quote
- Case study-specific schema (Article, Review)

- [ ] Case Study 1 published at `/work/[slug]`
- [ ] Case Study 2 published at `/work/[slug]`
- [ ] `/work` index page updated with new entries
- [ ] Case studies linked from relevant service pages

---

### Week 13–16: Location Page Launch (Round 1)

Launch the 4 highest-volume location pages that are not yet live:

- [ ] `/shopify-agency-london` — full template, LocalBusiness schema, map embed
- [ ] `/shopify-agency-birmingham` — full template, LocalBusiness schema, map embed
- [ ] `/shopify-agency-leeds` — full template, LocalBusiness schema, map embed
- [ ] `/shopify-agency-bristol` — full template, LocalBusiness schema, map embed

**Each page must follow the Manchester template exactly, including:**
- Hero with office details card (note "virtual office" if no physical presence)
- WhyChoose section with ValueCards (city-specific copy)
- Services section (city-specific framing)
- "Why [City] Brands Choose Shopify" section (name local brands)
- TestimonialCard
- Service areas for local SEO (surrounding towns/boroughs)
- FAQs (city-specific)
- OpenStreetMap embed
- LocalBusiness JSON-LD, BreadcrumbList, FAQPage, Review schemas

---

### Week 17–20: Content Calendar Execution (Months 1–2)

Execute April and May content calendar:

**April content (Month 1):**
- [ ] 4 articles published
- [ ] 2 guides published
- [ ] 1 checklist published

**May content (Month 2):**
- [ ] 4 articles published
- [ ] 2 guides published
- [ ] 1 checklist published

**Quality gate:** Each piece reviewed against content quality standards before publishing.

---

## Phase 3: Authority Building (Weeks 21–36)

**Goal:** Earn 40+ referring domains. Rank in top 10 for primary location and service terms. Expand content to all 10 locations.

### Week 21–24: Link Building Sprint

**Outreach targets:**

- [ ] Guest post pitch to Klaviyo blog (partner blog — high authority)
- [ ] Guest post pitch to Yotpo blog (partner blog)
- [ ] Guest post pitch to Gorgias blog (partner blog)
- [ ] Pitch to Internet Retailing (commentary on UK ecommerce migration trends — use research article from Month 5)
- [ ] Submit to Clutch.co (agency directory — high authority link)
- [ ] Submit to G2.com (agency listing)
- [ ] Submit to DesignRush agency directory
- [ ] Submit to TopAgencies.com
- [ ] Outreach to eCommerce MasterPlan podcast (UK ecommerce podcast)
- [ ] Outreach to 2X eCommerce podcast
- [ ] Connect with Manchester Digital for member spotlight

**Templates to prepare:**
- Guest post pitch email template
- Resource link request template
- Partner directory submission template

---

### Week 25–28: Location Page Launch (Round 2)

Launch remaining 4 location pages:

- [ ] `/shopify-agency-edinburgh`
- [ ] `/shopify-agency-glasgow`
- [ ] `/shopify-agency-newcastle`
- [ ] `/shopify-agency-cambridge`

(Verify that `/shopify-agency-manchester` and `/shopify-agency-liverpool` are already live and optimised from existing build.)

---

### Week 29–32: E-E-A-T Deep Work

**Team pages:**
- [ ] Create `/about/team` index page listing all team members
- [ ] Create individual profile pages for minimum 4 team members at `/about/team/[name]`
- [ ] Each profile: headshot, bio (300+ words), certifications, LinkedIn link
- [ ] Add `Person` + `ProfilePage` schema to each team member page
- [ ] Update all published articles to include named author with link to team profile

**Case studies (Round 2):**
- [ ] Publish Case Study 3
- [ ] Publish Case Study 4
- [ ] Add case study links from relevant service pages

**Reviews:**
- [ ] Reach target of 15 Trustpilot reviews
- [ ] Add `aggregateRating` schema to all service pages (once 10+ reviews)
- [ ] Add `Review` schema excerpts (3 per page) to Manchester and Liverpool location pages

---

### Week 33–36: Industry Vertical Pages

Create 3 industry vertical pages (highest priority first):

- [ ] `/shopify-for-fashion` — target "shopify fashion agency uk" (110/month)
- [ ] `/shopify-for-health-beauty` — target "shopify health beauty agency" (90/month)
- [ ] `/shopify-for-b2b` — target "shopify b2b agency" (140/month)

**Each page structure:**
- Industry-specific H1 and meta
- Industry challenges section
- How Flex Commerce solves them
- Relevant case studies / social proof
- Service links
- Client logos (industry-specific where possible)
- FAQPage schema
- `Service` schema with `audience` property
- Minimum 1,500 words

---

## Phase 4: Scale & Compound (Weeks 37–52)

**Goal:** Compound content investment. Reach 200+ keywords in top 10. Establish topical authority across all Shopify service clusters.

### Week 37–40: Partner Integration Pages

Build dedicated integration sub-pages under `/shopify-integrations/`:

- [ ] `/shopify-integrations/klaviyo` — target "shopify klaviyo integration" (260/month)
- [ ] `/shopify-integrations/yotpo` — target "shopify yotpo integration" (170/month)
- [ ] `/shopify-integrations/gorgias` — target "shopify gorgias integration" (140/month)
- [ ] `/shopify-integrations/nosto` — target "shopify nosto personalisation" (90/month)
- [ ] `/shopify-integrations/brightpearl` — target "shopify brightpearl integration" (110/month)
- [ ] `/shopify-integrations/klevu` — target "shopify klevu integration" (70/month)

Add `IntegrationPartner` breadcrumb chain and internal links from `/shopify-integrations` parent.

---

### Week 41–44: Content Calendar Execution (Months 7–9)

Execute July, August, September content calendar items as planned. Prioritise:

- [ ] Platform comparison articles (BigCommerce vs Shopify, Salesforce vs Shopify)
- [ ] Case Study 5 and 6
- [ ] Original research publication: "UK Ecommerce Migration Report 2026"
- [ ] Shopify headless commerce guide

---

### Week 45–48: GEO (Generative Engine Optimisation)

- [ ] Monitor brand mentions in ChatGPT, Perplexity, Google AI Overviews (monthly tracking spreadsheet)
- [ ] Ensure all team member profiles have `sameAs` LinkedIn links in schema
- [ ] Ensure all case studies contain specific, quotable metrics
- [ ] Ensure original research ("UK Ecommerce Migration Report") has dedicated landing page with downloadable PDF
- [ ] Submit data-led content to HARO/Qwoted as expert sources
- [ ] Prepare "best Shopify Plus agencies UK" response brief for AI citations (ensure Clutch, G2, and Google reviews are strong)

---

### Week 49–52: Review, Refresh & 2027 Planning

- [ ] Run full site crawl — identify and fix crawl errors, broken links, redirect chains
- [ ] Identify top 20 pages by organic impressions in Search Console — refresh with updated content
- [ ] Update all "2026" references in article titles to "2027" where applicable
- [ ] Conduct keyword gap audit — compare current rankings to target keyword list
- [ ] Review backlink profile — disavow any spammy links acquired
- [ ] Draft 2027 SEO strategy and content calendar
- [ ] Review KPI dashboard against Year 1 targets

---

## Monthly Recurring Tasks

These tasks run every month throughout the year:

| Task | Owner | Time |
|---|---|---|
| Publish 4 articles | Content team | Monthly |
| Publish 2 guides | Content team | Monthly |
| Publish 1 checklist | Content team | Monthly |
| GBP posts (both locations) | Marketing | Weekly |
| Respond to GBP reviews | Account manager | Within 24h |
| Search Console check (impressions, errors, CWV) | SEO lead | Weekly |
| Backlink monitoring (new links, lost links) | SEO lead | Monthly |
| Rank tracking — top 50 keywords | SEO lead | Weekly |
| Review request emails (post-project) | Account manager | Per project |
| Social sharing of new content | Marketing | Per publish |
| Internal link audit (new content → old; old → new) | SEO lead | Monthly |

---

## Tools & Tracking Stack

| Tool | Purpose | Priority |
|---|---|---|
| Google Search Console | Ranking, indexation, CWV, errors | Essential |
| Google Analytics 4 | Traffic, conversions, attribution | Essential |
| Bing Webmaster Tools | Bing indexation and ranking | High |
| Ahrefs or Semrush | Keyword research, rank tracking, backlink analysis | High |
| Screaming Frog | Technical crawl, on-page audit | High |
| Google Business Profile | Local SEO management | Essential |
| Trustpilot | Review collection and display | High |
| Notion or Airtable | Content calendar management | Medium |
| PageSpeed Insights | CWV monitoring per page | Medium |

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Google algorithm update (e.g., Helpful Content) | Medium | High | Maintain content quality standards; no AI-only content published without expert review |
| Competitor gains strong Manchester/Liverpool local SEO | Medium | High | Monitor Velstar ranking weekly; refresh location pages quarterly |
| Link building outreach fails to generate results | Medium | Medium | Diversify channels: partner blogs, PR, directories, event sponsorship |
| Team bandwidth constrains content output | High | Medium | Prepare content briefs 4 weeks in advance; consider freelance writers with Shopify knowledge |
| Negative reviews affect GBP ranking | Low | High | Proactive review monitoring; rapid response protocol within 24 hours |
| Technical issues on Cloudflare Pages deployment | Low | High | Add Screaming Frog post-deploy check to CI process |
