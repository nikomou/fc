import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FAQSection } from "@/components/ui/FAQSection";
import { Button } from "@/components/ui/Button";
import { siteConfig, locations } from "@/lib/constants";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { ValueCard } from "@/components/ui/ValueCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import {
  Phone,
  Mail,
  Clock,
  Zap,
  Palette,
  ArrowRightLeft,
  Code,
  Gauge,
  Headphones,
} from "lucide-react";

const cityLocation = locations.find((l) => l.id === "edinburgh")!;

const whyChooseCards = [
  {
    title: "Scottish Ecommerce Experts",
    description:
      "Deep understanding of the Scottish market — from heritage whisky and textiles brands to Edinburgh's fast-growing tech startup scene.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers ready to scale your Scottish brand to its full potential.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Results",
    description:
      "Measurable revenue growth for ambitious brands. We track the metrics that matter — conversions, AOV, and long-term retention.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Full UK Coverage",
    description:
      "Remote-first from our Manchester and Liverpool offices. Same UK timezone, same dedication — geography is never a barrier.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Globe",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Edinburgh | Shopify Plus Experts Scotland",
  description:
    "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Custom development, theme design & migrations for ambitious Scottish brands.",
  alternates: {
    canonical: "/shopify-agency-edinburgh",
  },
  openGraph: {
    title: "Shopify Agency Edinburgh | Shopify Plus Experts Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Custom development, theme design & migrations for ambitious Scottish brands.",
    url: "/shopify-agency-edinburgh",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-edinburgh.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Edinburgh - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Edinburgh | Shopify Plus Experts Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Edinburgh and Scotland. Custom development, theme design & migrations.",
    images: ["/images/og-edinburgh.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Scottish brands ready to scale.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes that capture your Scottish brand identity and convert visitors into customers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & more — zero data loss, minimal downtime.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations built for the specific needs of your Scottish business.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and load times to keep Scottish shoppers on your store and spending.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers for Edinburgh and Scotland businesses — we're here when you need us.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Brewdog",
  "Tunnock's",
  "Loch Fyne Oysters",
  "AG Barr",
  "Calnaturale",
  "Isle of Harris Gin",
];

const serviceAreas = [
  "Edinburgh",
  "Glasgow",
  "Dundee",
  "Aberdeen",
  "Perth",
  "Stirling",
  "Inverness",
  "St Andrews",
  "Kirkcaldy",
  "Falkirk",
  "Livingston",
  "Paisley",
  "Hamilton",
  "Motherwell",
];

const faqs = [
  {
    question: "How does working with a remote Edinburgh Shopify agency work?",
    answer:
      "We collaborate entirely remotely using video calls, Slack, and shared project management tools. You'll have a dedicated project manager and regular check-ins built into your project plan. Most Edinburgh clients find this approach just as effective — often more so — than working with a local agency. Same UK timezone, fast responses, no commute.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Yes. While we work remotely with Edinburgh clients, we have physical offices in Manchester and Liverpool. We're happy to arrange face-to-face meetings at either location for important project milestones, or our team can travel to Edinburgh when needed.",
  },
  {
    question: "Do you understand the Scottish ecommerce and retail market?",
    answer:
      "Absolutely. We've worked with Scottish brands across food & drink, heritage goods, fashion, and outdoor lifestyle. Scotland has a proud tradition of quality craftsmanship, and we understand how to present that authentically online — from brand storytelling to seamless cross-border shipping integrations.",
  },
  {
    question: "Why should an Edinburgh brand choose Shopify Plus over Magento?",
    answer:
      "Shopify Plus offers significantly lower total cost of ownership than Magento — no server costs, faster updates, and a much simpler developer ecosystem. Edinburgh brands migrating from Magento typically see faster site speeds, reduced maintenance overhead, and better conversion rates within months of launch.",
  },
  {
    question: "Can you help with Scottish brand expansions into international markets?",
    answer:
      "Yes. Shopify Plus's multi-currency, multi-language, and multi-storefront capabilities make it ideal for Scottish brands expanding into Europe, North America, and Asia Pacific. We've helped heritage Scottish brands set up international storefronts that maintain their local character while converting globally.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-edinburgh#localbusiness`,
      name: `${siteConfig.name} Edinburgh`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-edinburgh`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Expert Shopify and Shopify Plus agency serving Edinburgh and Scotland. Custom development, theme design and migrations for ambitious Scottish brands.",
      priceRange: "£££",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityLocation.addressLocality,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: cityLocation.geo.latitude,
        longitude: cityLocation.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shopify Agency Edinburgh",
          item: `${siteConfig.url}/shopify-agency-edinburgh`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Edinburgh`,
        "@id": `${siteConfig.url}/shopify-agency-edinburgh#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Fiona MacLeod",
      },
      reviewBody:
        "Flex Commerce transformed our Edinburgh brand's online presence. The remote process was completely painless and they truly understood our Scottish heritage positioning. Sales have grown 65% since launch.",
      datePublished: "2024-11-08",
    },
  ],
};

export default function EdinburghPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium mb-4">
                Serving Edinburgh &amp; Scotland
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Edinburgh
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Edinburgh and the whole of Scotland. Whether
                you&apos;re a heritage brand in the Old Town or a tech startup
                in Leith, we help ambitious Scottish businesses build ecommerce
                experiences that genuinely convert.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester and Liverpool, we work with Edinburgh brands
                entirely remotely — same UK timezone, fast communication, and
                the full backing of a certified Shopify Plus agency. We&apos;ve
                helped 50+ UK brands grow their online revenue and we bring that
                experience to every Scottish project we take on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/quote" size="lg" variant="cta">
                  Get a Free Quote
                </Button>
                <Button href="/work" variant="outline" size="lg">
                  Our Work
                </Button>
              </div>
              <TrustBadge align="left" showRating={false} />
            </div>
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Get in Touch
              </h3>
              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-gray-400" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-300">Mon–Fri: 9am – 5:30pm</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Choose Our Edinburgh Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Edinburgh is Scotland&apos;s commercial heart — a city with a proud
            heritage of craft, innovation, and ambition. Brands like Brewdog,
            Tunnock&apos;s, and Isle of Harris Gin have shown what Scottish
            products can achieve on the world stage. We&apos;re here to help
            the next generation do the same.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseCards.map((card, index) => (
            <ValueCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Strip */}
      <Section background="dark">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to grow your Scottish ecommerce business?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Edinburgh brand succeed
              online and beyond.
            </p>
          </div>
          <Button href="/quote" variant="cta" size="lg">
            Get a Free Quote
          </Button>
        </div>
      </Section>

      {/* Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Shopify Services for Edinburgh Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Scottish businesses of every
            size and sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4 transition-colors"
                  style={{
                    borderColor: service.color,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button href="/shopify-services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Why Edinburgh Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Edinburgh Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Scotland has a rich tradition of world-class products — from
            premium spirits and artisan foods to innovative technology
            companies. Brands like Brewdog, Isle of Harris Gin, and AG Barr
            have built international followings on Shopify Plus, proving the
            platform can power Scottish heritage brands to global audiences
            with the same conviction they bring to their craft.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {localBrands.map((brand) => (
            <div
              key={brand}
              className="text-xl md:text-2xl font-bold text-gray-300"
            >
              {brand}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/shopify-plus" variant="outline">
            Learn About Shopify Plus
          </Button>
        </div>
      </Section>

      {/* Testimonial */}
      <TestimonialCard
        quote="Flex Commerce transformed our Edinburgh brand's online presence. The remote process was completely painless and they truly understood how to present our Scottish heritage authentically online. Sales have grown 65% since we launched the new store."
        author="Fiona MacLeod"
        role="Managing Director, Edinburgh Retail Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Edinburgh, Scotland &amp; Beyond
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across Edinburgh and the wider
            Scottish market. Whether you&apos;re operating from the Royal Mile,
            the Grassmarket, or a farm in the Highlands, our collaboration
            tools make distance irrelevant. We&apos;re always just a call away
            and on the same page as your team.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-gray-100 rounded-full text-foreground-dark"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-1640777.webp"
        imageAlt="Edinburgh Shopify agency working with Scottish ecommerce brands"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.2100%2C55.9300%2C-3.1600%2C55.9700&layer=mapnik&marker=55.9533%2C-3.1883"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Edinburgh — Flex Commerce serves Edinburgh brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
