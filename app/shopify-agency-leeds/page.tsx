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

const cityLocation = locations.find((l) => l.id === "leeds")!;

const whyChooseCards = [
  {
    title: "Yorkshire Ecommerce Experts",
    description:
      "We understand Yorkshire's commercial landscape — from Leeds fashion brands and Harrogate independents to Hull-based industrial traders.",
    circle: "/images/circles/circle-green.svg",
    color: "#5fcf80",
    icon: "Shield",
  },
  {
    title: "Shopify Plus Partners",
    description:
      "Official Shopify & Shopify Plus partners with certified developers who've scaled brands across the North of England.",
    circle: "/images/circles/circle-blue.svg",
    color: "#5b8fb9",
    icon: "Award",
  },
  {
    title: "Proven Results",
    description:
      "Measurable growth in conversion rate, AOV, and organic traffic. We track results and report transparently throughout every engagement.",
    circle: "/images/circles/circle-pink.svg",
    color: "#ef436b",
    icon: "TrendingUp",
  },
  {
    title: "Agile Delivery",
    description:
      "Structured sprints and clear milestones mean your Yorkshire brand gets live faster — and evolves rapidly after launch.",
    circle: "/images/circles/circle-yellow.svg",
    color: "#f5d76e",
    icon: "Zap",
  },
];

export const metadata: Metadata = {
  title: "Shopify Agency Leeds | Shopify Plus Experts Yorkshire",
  description:
    "Leading Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations from certified Shopify Plus partners.",
  alternates: {
    canonical: "/shopify-agency-leeds",
  },
  openGraph: {
    title: "Shopify Agency Leeds | Shopify Plus Experts Yorkshire",
    description:
      "Leading Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations from certified Shopify Plus partners.",
    url: "/shopify-agency-leeds",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-leeds.png",
        width: 1200,
        height: 630,
        alt: `Shopify Plus Agency Leeds - ${siteConfig.name}`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Agency Leeds | Shopify Plus Experts Yorkshire",
    description:
      "Leading Shopify & Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design & migrations.",
    images: ["/images/og-leeds.png"],
  },
};

const services = [
  {
    title: "Shopify Plus",
    description:
      "Enterprise ecommerce solutions for high-growth Yorkshire brands ready to scale across the UK and beyond.",
    href: "/shopify-plus",
    icon: Zap,
    color: "#f59e0b",
  },
  {
    title: "Theme Development",
    description:
      "Bespoke Shopify themes built to convert Yorkshire shoppers and reflect your brand's unique personality.",
    href: "/shopify-theme-development",
    icon: Palette,
    color: "#ef436b",
  },
  {
    title: "Migrations",
    description:
      "Seamless migration to Shopify from WooCommerce, Magento & legacy platforms — zero data loss guaranteed.",
    href: "/shopify-migration",
    icon: ArrowRightLeft,
    color: "#8b5cf6",
  },
  {
    title: "App Development",
    description:
      "Custom Shopify apps and integrations tailored to the needs of your Leeds or Yorkshire business.",
    href: "/shopify-app-development",
    icon: Code,
    color: "#10b981",
  },
  {
    title: "Speed Optimisation",
    description:
      "Improve Core Web Vitals and load times so Yorkshire shoppers don't bounce before they buy.",
    href: "/shopify-speed-optimisation",
    icon: Gauge,
    color: "#0ea5e9",
  },
  {
    title: "Ongoing Support",
    description:
      "Flexible monthly retainers to keep your Leeds ecommerce store running, growing, and converting.",
    href: "/shopify-support",
    icon: Headphones,
    color: "#64748b",
  },
];

const localBrands = [
  "Marks & Spencer",
  "Next",
  "Asda",
  "White Stuff",
  "Lakeland",
  "Yorkshire Tea",
];

const serviceAreas = [
  "Leeds",
  "Bradford",
  "Sheffield",
  "York",
  "Harrogate",
  "Wakefield",
  "Huddersfield",
  "Halifax",
  "Doncaster",
  "Rotherham",
  "Hull",
  "Barnsley",
  "Scarborough",
  "Selby",
];

const faqs = [
  {
    question: "How does working with a remote Leeds Shopify agency work?",
    answer:
      "We use video calls, Slack, and shared project management tools to collaborate with Leeds clients just as effectively as if we were local. You'll have a dedicated project manager, regular check-in calls, and full visibility of project progress at all times. Being based in Manchester, we're just an hour's drive from Leeds and happy to meet in person for key milestones.",
  },
  {
    question: "Can we meet in person if needed?",
    answer:
      "Yes. Our Manchester office is easily accessible from Leeds — just 45 minutes on the train. We're happy to host face-to-face meetings there, or our team can come to Leeds for important workshops, project kickoffs, or reviews. We're genuinely close neighbours.",
  },
  {
    question: "Do you have experience with Yorkshire retail and fashion brands?",
    answer:
      "Absolutely. Yorkshire has a long heritage in fashion and retail, with brands like Next, Marks & Spencer, and White Stuff having strong Yorkshire roots. We understand the market, the customer expectations, and the operational complexity that comes with scaling a retail brand — and we bring that understanding to every Leeds project.",
  },
  {
    question: "Can you help with Shopify Plus migrations from Magento?",
    answer:
      "Yes. We're experienced Shopify Plus partners with a proven migration process. Whether you're migrating from Magento 1, Magento 2, or WooCommerce, we handle product data, customer records, order history, and URL redirects — ensuring a smooth transition with minimal business disruption.",
  },
  {
    question: "What are your project turnaround times for Leeds clients?",
    answer:
      "A theme customisation or small build typically takes 2–4 weeks. A bespoke Shopify Plus store with integrations usually runs 8–12 weeks. We provide a detailed project plan and timeline during the discovery phase so you know exactly what to expect — no surprise delays.",
  },
];

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/shopify-agency-leeds#localbusiness`,
      name: `${siteConfig.name} Leeds`,
      image: `${siteConfig.url}/images/flex-logo.svg`,
      url: `${siteConfig.url}/shopify-agency-leeds`,
      telephone: `+44-161-883-7830`,
      email: siteConfig.email,
      description:
        "Leading Shopify and Shopify Plus agency serving Leeds and Yorkshire. Custom development, theme design and migrations from certified Shopify Plus partners.",
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
          name: "Shopify Agency Leeds",
          item: `${siteConfig.url}/shopify-agency-leeds`,
        },
      ],
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} Leeds`,
        "@id": `${siteConfig.url}/shopify-agency-leeds#localbusiness`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Tom Whitfield",
      },
      reviewBody:
        "Flex Commerce migrated our Leeds fashion brand from WooCommerce to Shopify Plus seamlessly. The new store is faster, easier to manage, and our conversion rate has jumped 44% since launch.",
      datePublished: "2024-09-12",
    },
  ],
};

export default function LeedsPage() {
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
                Serving Leeds &amp; Yorkshire
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Shopify Agency Leeds
              </h1>
              <p className="text-xl text-foreground mb-4">
                We&apos;re a leading Shopify and{" "}
                <Link
                  href="/shopify-plus"
                  className="text-[#ef436b] hover:underline"
                >
                  Shopify Plus
                </Link>{" "}
                agency serving Leeds and Yorkshire. From established fashion
                retailers in the city centre to independent brands in Harrogate
                and Sheffield, we help ambitious Yorkshire businesses build
                ecommerce stores that genuinely perform.
              </p>
              <p className="text-foreground mb-6">
                Based in Manchester — just 45 minutes from Leeds — we offer
                all the benefits of a local agency with the scale and expertise
                of a Shopify Plus partner. Our certified developers deliver
                bespoke themes, complex migrations, and custom app builds. 50+
                UK brands have grown their online revenue with us, and we bring
                all of that experience to Yorkshire.
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
            Why Choose Our Leeds Shopify Agency?
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Yorkshire has produced some of the UK&apos;s most successful retail
            brands — Marks & Spencer, Next, Asda, and Yorkshire Tea all have
            deep roots here. We&apos;re proud to support the next generation of
            ambitious Yorkshire brands on their journey to national and
            international success.
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
              Ready to grow your Yorkshire ecommerce brand?
            </h2>
            <p className="text-lg text-gray-300">
              Let&apos;s discuss how we can help your Leeds brand succeed online
              and scale across the UK.
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
            Shopify Services for Leeds Brands
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Full-service Shopify development for Yorkshire businesses at every
            stage of growth.
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

      {/* Why Leeds Brands Choose Shopify */}
      <Section>
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Yorkshire Brands Choose Shopify
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Yorkshire has a remarkable track record in retail. Brands like
            Next, Asda, and Marks & Spencer — all with strong Yorkshire roots —
            have shown the world how to scale a retail operation. Shopify Plus
            gives the next generation of Leeds and Yorkshire brands the
            platform, flexibility, and infrastructure to follow in their
            footsteps.
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
        quote="Flex Commerce migrated our Leeds fashion brand from WooCommerce to Shopify Plus seamlessly. The new store is faster, easier to manage, and our conversion rate has jumped 44% since launch. The team felt like a genuine extension of our own."
        author="Tom Whitfield"
        role="Director, Leeds Fashion Retailer"
      />

      {/* Service Areas */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serving Yorkshire &amp; Beyond
          </h2>
          <p className="text-foreground mb-6">
            Our Manchester base means we&apos;re just 45 minutes from Leeds
            and well-positioned to serve the entire Yorkshire region. We cover
            West Yorkshire, South Yorkshire, East Riding, and North Yorkshire —
            with the same level of service and expertise for every brand,
            regardless of where they&apos;re based.
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
        imageAlt="Leeds Shopify agency supporting Yorkshire ecommerce brands"
        overlayColor="linear-gradient(135deg, #ef436b 0%, #c0392b 100%)"
      />

      {/* Map */}
      <section className="relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-1.5800%2C53.7700%2C-1.5000%2C53.8300&layer=mapnik&marker=53.8008%2C-1.5491"
          className="w-full h-80 md:h-96 border-0"
          title="Map of Leeds — Flex Commerce serves Leeds and Yorkshire brands"
          loading="lazy"
        />
      </section>
    </>
  );
}
