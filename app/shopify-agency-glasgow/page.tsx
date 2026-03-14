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

const cityLocation = locations.find((l) => l.id === "glasgow")!;

const whyChooseCards = [
  {
    title: "Scottish Ecommerce Experts",
    description:
      "We understand the Glasgow market — Scotland's commercial capital, with a culture of grit, innovation, and brand loyalty that runs deep.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers who've delivered for ambitious Scottish brands at every scale.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Revenue Growth",
    description:
      "£50M+ generated for UK brands. Measurable improvements in conversion rate, AOV, and organic traffic for every client we work with.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Full UK Coverage",
    description:
      "Remote-first from Manchester and Liverpool, we serve Glasgow brands with the same commitment as our local Manchester clients.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Globe",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Glasgow | Shopify Plus Experts Scotland",
  description:
    "Expert Shopify & Shopify Plus agency serving Glasgow and the West of Scotland. Custom development, theme design & migrations for Scottish brands.",
  alternates: {
    canonical: "/shopify-agency-glasgow",
  },
  openGraph: {
    title: "Shopify Agency Glasgow | Shopify Plus Experts Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Glasgow and the West of Scotland. Custom development, theme design & migrations for Scottish brands.",
    url: "/shopify-agency-glasgow",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-glasgow.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Glasgow - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Glasgow | Shopify Plus Experts Scotland",
    description:
      "Expert Shopify & Shopify Plus agency serving Glasgow and the West of Scotland. Custom development, theme design & migrations.",
    images: ["/images/og-glasgow.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for ambitious Glasgow and Scottish brands ready to scale nationally and globally.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes that capture Glasgow's confident commercial character and convert Scottish shoppers.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & legacy platforms — meticulous data handling throughout.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations tailored to the specific needs of your Glasgow business.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals so Glasgow shoppers stay on your site, find what they want, and checkout.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible support retainers for Glasgow brands that need reliable, expert Shopify management.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Brewdog",
  "AG Barr",
  "Loch Fyne",
  "Scottish Widows",
  "Tunnock's",
  "Mackintosh",
];

const serviceAreas = [
  "Glasgow",
  "Paisley",
  "Hamilton",
  "East Kilbride",
  "Clydebank",
  "Motherwell",
  "Airdrie",
  "Coatbridge",
  "Dunfermline",
  "Edinburgh",
  "Stirling",
  "Perth",
  "Inverness",
  "Dundee",
];

const faqs = [
  {
    question: "How does working with a remote Glasgow Shopify agency work?",
    answer:
      "We collaborate with Glasgow brands using video calls, Slack, and shared project management platforms. You'll have a dedicated project manager and structured check-ins throughout the project. Our team operates on UK time — same as Glasgow — so responses are fast and communication is always clear and direct.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Yes. Our Manchester and Liverpool offices are both accessible from Glasgow — Manchester is around 3.5 hours by train. We're also happy to travel to Glasgow for important project milestones, workshops, or kickoff sessions. In practice, most Glasgow clients prefer the efficiency of structured remote collaboration.",
  },
  {
    question: "Do you understand the Glasgow and West of Scotland market?",
    answer:
      "Absolutely. Glasgow is Scotland's commercial engine — a city with a strong independent retail scene, major brand presence, and a consumer culture that values authenticity and quality. We've worked with Scottish brands across fashion, food & drink, lifestyle, and heritage goods, and we understand what resonates with Scottish customers.",
  },
  {
    question: "Can you help Glasgow brands sell internationally?",
    answer:
      "Yes. Shopify Plus's multi-currency and multi-market features are ideal for Scottish brands looking to reach customers in the US, Europe, and beyond. Scottish provenance is a genuine selling point globally — Irn-Bru, Tunnock's, and premium whisky brands have all demonstrated the international appetite for Scottish products.",
  },
  {
    question: "What size Glasgow businesses do you work with?",
    answer:
      "We work with Glasgow businesses of every size — from independent brands launching their first Shopify store to established Scottish companies migrating to Shopify Plus and scaling to multi-million-pound revenue. Our service packages flex to match your budget and growth stage.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-glasgow#localbusiness`,
      name: `${siteConfig.name} Glasgow`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-glasgow`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Expert Shopify and Shopify Plus agency serving Glasgow and the West of Scotland. Custom development, theme design and migrations for Scottish brands.",
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
          name: "Shopify Agency Glasgow",
          item: `${siteConfig.url}/shopify-agency-glasgow`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Glasgow`,
        "@id": `${siteConfig.url}/shopify-agency-glasgow#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Callum Fraser",
      },
      reviewBody:
        "Flex Commerce built us a Shopify Plus store that genuinely reflects our Glasgow brand's character. The remote process was slick, communication was excellent, and the results have been fantastic — our Scottish customer base has grown 55% in six months.",
      datePublished: "2024-11-02",
    },
  ],
};

export default function GlasgowPage() {
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
                Serving Glasgow &amp; West of Scotland
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Glasgow
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Glasgow and the West of Scotland. Scotland&apos;s
                commercial capital deserves an agency that matches its ambition
                — and we deliver bespoke ecommerce experiences that convert
                Scottish shoppers and drive real revenue growth.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester and Liverpool, we work remotely with Glasgow
                brands every day. Our certified Shopify Plus developers bring
                full-service capability across theme builds, platform migrations,
                and custom app development. 50+ UK brands have grown their online
                revenue with us, and we bring that depth of experience to every
                Glasgow project.
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
            Why Choose Our Glasgow Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Glasgow is Scotland&apos;s commercial powerhouse — a city with a
            proud heritage of industry, creativity, and ambition. Brands like
            AG Barr, Tunnock&apos;s, and Brewdog have built iconic Scottish
            products known across the world. We help the next generation of
            Glasgow brands do the same.
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
              Ready to grow your Scottish ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Glasgow business succeed
              online and scale beyond Scotland.
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
            Shopify Services for Glasgow Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Scottish businesses at every
            stage of growth — from launch to Shopify Plus scale.
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

      {/* Why Glasgow Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Glasgow Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Scotland has a proud tradition of world-class products — from Irn-Bru
            and Tunnock&apos;s to premium whisky and heritage textiles. Brands
            like Brewdog and AG Barr have demonstrated the global appetite for
            quality Scottish products. Shopify Plus gives Glasgow&apos;s next
            generation of ambitious brands the platform and scalability to reach
            that same international audience.
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
        quote="Flex Commerce built us a Shopify Plus store that genuinely reflects our Glasgow brand's character. The remote process was slick, communication was excellent, and the results have been fantastic — our Scottish customer base has grown 55% in six months and we're now selling across the UK."
        author="Callum Fraser"
        role="Head of Digital, Glasgow Lifestyle Brand"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Glasgow &amp; Central Scotland
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across Glasgow, the Central Belt,
            and throughout Scotland. Whether you&apos;re in the West End, the
            Merchant City, or further out in Ayrshire or Renfrewshire, we
            deliver the same quality of Shopify development through seamless
            remote collaboration. Distance is no barrier.
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
        imageAlt="Glasgow Shopify agency helping Scottish ecommerce brands grow"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-4.2900%2C55.8300%2C-4.2000%2C55.8900&layer=mapnik&marker=55.8642%2C-4.2518"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Glasgow — Flex Commerce serves Glasgow and Scottish brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
