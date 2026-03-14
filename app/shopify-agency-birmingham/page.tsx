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

const cityLocation = locations.find((l) => l.id === "birmingham")!;

const whyChooseCards = [
  {
    title: "Midlands Ecommerce Experts",
    description:
      "We understand Birmingham's commercial landscape — from the Jewellery Quarter's independent brands to the Bullring's established retailers.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners delivering enterprise-level ecommerce for Midlands brands with ambition to match.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Results",
    description:
      "£50M+ generated for UK brands. We track and report on the metrics that drive real commercial growth — not just traffic.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Fast Turnaround",
    description:
      "Agile sprints and structured delivery mean Birmingham brands get to market faster without sacrificing build quality.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Birmingham | Shopify Plus Experts Midlands",
  description:
    "Leading Shopify & Shopify Plus agency serving Birmingham and the Midlands. Custom development, theme design & migrations for ambitious Midlands brands.",
  alternates: {
    canonical: "/shopify-agency-birmingham",
  },
  openGraph: {
    title: "Shopify Agency Birmingham | Shopify Plus Experts Midlands",
    description:
      "Leading Shopify & Shopify Plus agency serving Birmingham and the Midlands. Custom development, theme design & migrations for ambitious Midlands brands.",
    url: "/shopify-agency-birmingham",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-birmingham.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Birmingham - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Birmingham | Shopify Plus Experts Midlands",
    description:
      "Leading Shopify & Shopify Plus agency serving Birmingham and the Midlands. Custom development, theme design & migrations.",
    images: ["/images/og-birmingham.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Birmingham and Midlands brands ready to scale nationally.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes that capture Birmingham's commercial energy and convert Midlands shoppers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & legacy platforms — zero disruption to your operation.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations built for the complexity of Midlands retail and wholesale operations.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and page speed so Birmingham shoppers don't bounce before they buy.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers keeping your Birmingham ecommerce store performing at its best, year-round.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Selfridges",
  "JLR",
  "Cadbury",
  "Hotel Chocolat",
  "Gymshark",
  "Brindleyplace",
];

const serviceAreas = [
  "Birmingham",
  "Solihull",
  "Coventry",
  "Wolverhampton",
  "Walsall",
  "West Bromwich",
  "Dudley",
  "Sutton Coldfield",
  "Tamworth",
  "Lichfield",
  "Redditch",
  "Worcester",
  "Leicester",
  "Nottingham",
];

const faqs = [
  {
    question: "How does working with a remote Birmingham Shopify agency work?",
    answer:
      "We collaborate with Birmingham brands via video calls, Slack, and shared project management tools. You'll have a dedicated project manager who's your single point of contact, plus regular structured check-ins. Birmingham to Manchester is just 80 minutes by train, so face-to-face meetings are always an option when it matters.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Absolutely. Our Manchester office is easily accessible from Birmingham by train or the M6. We're also happy to travel to Birmingham for important workshops, project kickoffs, or client presentations. In practice, most of the work happens remotely and clients find it more efficient than traditional agency meetings.",
  },
  {
    question: "Birmingham is the UK's second city — do you understand the scale of ambition here?",
    answer:
      "Very much so. Birmingham is home to brands operating at every scale, from the Jewellery Quarter's independent makers to the global flagships in the Bullring. We've worked with brands across that entire spectrum and we bring the same level of professionalism and commercial rigour to every project, regardless of size.",
  },
  {
    question: "Can you help Birmingham brands migrate from Magento to Shopify Plus?",
    answer:
      "Yes. Magento to Shopify Plus migration is one of our most common engagements. We've done it many times and have a refined process that preserves product data, customer records, order history, SEO equity, and URL structure. Birmingham brands typically see improved site speed and lower total cost of ownership within months of migration.",
  },
  {
    question: "What industries do you serve in the Midlands?",
    answer:
      "We work across all sectors in the Midlands — fashion and apparel, food and drink, automotive accessories, homewares, gifts, health and beauty, and B2B trade catalogues. Birmingham's diverse commercial ecosystem means we've encountered most scenarios, and we bring that breadth of experience to every new client.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-birmingham#localbusiness`,
      name: `${siteConfig.name} Birmingham`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-birmingham`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Leading Shopify and Shopify Plus agency serving Birmingham and the Midlands. Custom development, theme design and migrations for ambitious Midlands brands.",
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
          name: "Shopify Agency Birmingham",
          item: `${siteConfig.url}/shopify-agency-birmingham`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Birmingham`,
        "@id": `${siteConfig.url}/shopify-agency-birmingham#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Marcus Reid",
      },
      reviewBody:
        "Flex Commerce delivered our new Shopify Plus store ahead of schedule and significantly under budget expectations. Their remote process is polished and professional — they felt like part of our Birmingham team from week one. Revenue is up 45% since launch.",
      datePublished: "2024-09-25",
    },
  ],
};

export default function BirminghamPage() {
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
                Serving Birmingham &amp; the Midlands
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Birmingham
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Birmingham and the Midlands. Whether you&apos;re
                a Jewellery Quarter independent, a Solihull lifestyle brand, or
                an established Midlands retailer, we build Shopify stores that
                drive real commercial growth.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester — just 80 minutes from Birmingham by train
                — we bring the full service of a certified Shopify Plus agency
                with remote-first efficiency. Our developers deliver bespoke
                theme builds, Magento migrations, complex integrations, and
                ongoing support. We&apos;ve helped 50+ UK brands grow their
                online revenue, and we bring all of that experience to
                Birmingham.
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
            Why Choose Our Birmingham Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Birmingham is the UK&apos;s second largest city and one of its most
            commercially dynamic. From Cadbury to Gymshark, the Midlands has a
            proud track record of building globally recognised brands — and we
            bring the same ambition and expertise to every project we take on
            in the region.
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
              Ready to grow your Midlands ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Birmingham business scale
              on Shopify Plus.
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
            Shopify Services for Birmingham Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Midlands businesses at every
            stage of growth — from launch to enterprise scale.
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

      {/* Why Birmingham Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Birmingham Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Birmingham and the Midlands have given the world some extraordinary
            consumer brands — from Cadbury&apos;s chocolate to JLR&apos;s
            prestige vehicles, and from Selfridges&apos; Birmingham flagship to
            Gymshark&apos;s Solihull roots. Shopify Plus provides the
            infrastructure for the next generation of Midlands brands to reach
            that same level of global recognition.
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
        quote="Flex Commerce delivered our new Shopify Plus store ahead of schedule. Their remote process is polished and professional — they felt like part of our Birmingham team from week one. Revenue is up 45% since launch and the platform has transformed how we manage our catalogue."
        author="Marcus Reid"
        role="Ecommerce Director, Birmingham Retail Group"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Birmingham &amp; the Midlands
          </h2>
          <p className="text-foreground mb-6">
            Our Manchester base means we&apos;re just 80 minutes from
            Birmingham and well-positioned to serve the entire Midlands region.
            We cover the West Midlands, East Midlands, and beyond — with the
            same level of service and attention for every client, whether
            they&apos;re in the city centre or out in Warwickshire.
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
        imageAlt="Birmingham Shopify agency supporting Midlands ecommerce businesses"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-1.9200%2C52.4500%2C-1.8500%2C52.5100&layer=mapnik&marker=52.4862%2C-1.8904"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Birmingham — Flex Commerce serves Birmingham and Midlands brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
