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

const cityLocation = locations.find((l) => l.id === "cambridge")!;

const whyChooseCards = [
  {
    title: "Tech-Forward Approach",
    description:
      "Cambridge demands precision and innovation. We bring a methodical, data-driven approach to Shopify development that meets the high standards of the tech capital.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Cpu",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers who understand complex integrations and enterprise-level requirements.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Revenue Growth",
    description:
      "£50M+ generated for UK brands. We measure success in commercial outcomes — conversion rate, AOV, and lifetime customer value.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Nationwide Coverage",
    description:
      "Remote-first from our Manchester and Liverpool offices, serving Cambridge and East Anglia brands with no compromise on quality.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Globe",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Cambridge | Shopify Plus Experts East Anglia",
  description:
    "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, integrations & ongoing support for innovative UK brands.",
  alternates: {
    canonical: "/shopify-agency-cambridge",
  },
  openGraph: {
    title: "Shopify Agency Cambridge | Shopify Plus Experts East Anglia",
    description:
      "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, integrations & ongoing support for innovative UK brands.",
    url: "/shopify-agency-cambridge",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-cambridge.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Cambridge - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Cambridge | Shopify Plus Experts East Anglia",
    description:
      "Expert Shopify & Shopify Plus agency serving Cambridge and East Anglia. Custom development, integrations & ongoing support.",
    images: ["/images/og-cambridge.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce for Cambridge and East Anglia brands with complex product ranges and technical requirements.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes that reflect your Cambridge brand's technical precision and commercial ambitions.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & other platforms — rigorous data integrity throughout.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and API integrations built to handle the sophisticated operational needs of Cambridge businesses.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Performance-first development and Core Web Vitals optimisation to keep Cambridge customers engaged and converting.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Technical support retainers for Cambridge businesses that need reliable, expert-level Shopify management.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Raspberry Pi",
  "Cambridge Audio",
  "Domino's Pizza",
  "Joules",
  "Tesco",
  "Marshall Amplification",
];

const serviceAreas = [
  "Cambridge",
  "Peterborough",
  "Norwich",
  "Ipswich",
  "Ely",
  "Newmarket",
  "Huntingdon",
  "Bedford",
  "Milton Keynes",
  "Luton",
  "Colchester",
  "Chelmsford",
  "Stevenage",
  "Northampton",
];

const faqs = [
  {
    question: "How do you work with Cambridge clients without a local office?",
    answer:
      "We collaborate remotely using structured video calls, shared project management tools, and async communication via Slack. Cambridge brands appreciate the disciplined approach — clear sprint goals, documented decisions, and regular progress reviews. Our team operates on UK time with fast response rates throughout the working day.",
  },
  {
    question: "Do you have experience with tech-sector and B2B Cambridge businesses?",
    answer:
      "Yes. Cambridge has a unique mix of university spin-outs, B2B tech companies, and consumer electronics brands. We've built Shopify stores for businesses with complex product configurations, subscription models, and sophisticated ERP integrations. We're comfortable with technically demanding briefs.",
  },
  {
    question: "Can you integrate Shopify with Cambridge businesses' existing systems?",
    answer:
      "Absolutely. We have deep experience integrating Shopify with ERP systems, CRM platforms, logistics providers, and custom inventory tools. Cambridge's tech businesses often have bespoke internal systems, and we build the bridges needed to make Shopify work seamlessly within that ecosystem.",
  },
  {
    question: "What does a typical Cambridge Shopify project investment look like?",
    answer:
      "A theme customisation typically starts from £7,500. A full bespoke Shopify Plus build with integrations usually ranges from £15,000–£40,000 depending on complexity. We provide detailed, transparent quotes after a discovery session — no surprises and no vague day-rate estimates.",
  },
  {
    question: "Can you help Cambridge brands sell internationally?",
    answer:
      "Yes. Shopify Plus's multi-currency and multi-market features are ideal for Cambridge brands — particularly those in tech and consumer goods — looking to sell to customers in the US, Europe, and Asia Pacific. We've helped East Anglia brands configure international storefronts with localised pricing and checkout experiences.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-cambridge#localbusiness`,
      name: `${siteConfig.name} Cambridge`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-cambridge`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Expert Shopify and Shopify Plus agency serving Cambridge and East Anglia. Custom development, integrations and ongoing support for innovative UK brands.",
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
          name: "Shopify Agency Cambridge",
          item: `${siteConfig.url}/shopify-agency-cambridge`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Cambridge`,
        "@id": `${siteConfig.url}/shopify-agency-cambridge#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dr Sarah Mitchell",
      },
      reviewBody:
        "Flex Commerce understood our technically complex product range immediately. The Shopify Plus build they delivered handles our configuration options flawlessly and the store performs exceptionally. Revenue has increased 72% in the first quarter.",
      datePublished: "2024-10-28",
    },
  ],
};

export default function CambridgePage() {
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
                Serving Cambridge &amp; East Anglia
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Cambridge
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Cambridge and East Anglia. Whether you&apos;re a
                tech spin-out from the Science Park, an innovative consumer
                brand, or an established B2B retailer, we build Shopify
                experiences that perform at the level Cambridge businesses
                expect.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester and Liverpool, we work with Cambridge brands
                entirely remotely — using the kind of structured, data-driven
                approach that resonates with the region&apos;s innovation
                culture. Our certified Shopify Plus developers bring complex
                integration experience, precision development, and commercial
                rigour to every project.
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
            Why Choose Our Cambridge Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Cambridge is the UK&apos;s innovation capital — home to world-class
            research institutions, pioneering tech companies, and a culture of
            excellence that runs through every sector. Brands here don&apos;t
            accept mediocrity, and neither do we.
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
              Ready to build something exceptional?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Cambridge brand scale on
              Shopify Plus.
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
            Shopify Services for Cambridge Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development built for Cambridge and East Anglia
            businesses with high standards and complex requirements.
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

      {/* Why Cambridge Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Cambridge Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Cambridge is home to businesses that set exceptionally high bars —
            from Raspberry Pi&apos;s global hardware brand to Cambridge
            Audio&apos;s premium consumer electronics. Shopify Plus offers the
            technical flexibility, reliable infrastructure, and developer
            ecosystem that Cambridge businesses need to operate at scale without
            engineering overhead consuming valuable resources.
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
        quote="Flex Commerce understood our technically complex product range immediately. The Shopify Plus build they delivered handles our configuration options flawlessly and the store performs exceptionally. Revenue has increased 72% in the first quarter and the team has been a genuine pleasure to work with."
        author="Dr Sarah Mitchell"
        role="Founder, Cambridge Tech Retailer"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Cambridge &amp; East Anglia
          </h2>
          <p className="text-foreground mb-6">
            Our remote team serves businesses across Cambridgeshire, Norfolk,
            Suffolk, and the wider East Anglia region. Distance is no barrier
            — we deliver the same quality of Shopify development for a
            Cambridge startup as for a London enterprise brand. Clear
            communication, precise delivery, and measurable results.
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
        imageAlt="Cambridge Shopify agency working with innovative East Anglia brands"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=0.1000%2C52.1800%2C0.1600%2C52.2200&layer=mapnik&marker=52.2053%2C0.1218"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Cambridge — Flex Commerce serves Cambridge and East Anglia brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
