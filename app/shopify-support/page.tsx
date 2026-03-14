import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { ServiceCapabilities } from "@/components/ui/ServiceCapabilities";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQSection } from "@/components/ui/FAQSection";
import { siteConfig } from "@/lib/constants";
import {
  Headphones,
  Clock,
  Wrench,
  MessageCircle,
  Shield,
  TrendingUp,
  Check,
  Zap,
  Users,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Support Packages | Retainer Plans | Flex Commerce",
  description:
    "Dedicated Shopify support retainer packages for UK brands. Priority response, bug fixes, feature updates, and expert Shopify guidance when you need it.",
  alternates: {
    canonical: "/shopify-support",
  },
  openGraph: {
    title: "Shopify Support Packages | Retainer Plans | Flex Commerce",
    description:
      "Dedicated Shopify support retainer packages for UK brands. Priority response, bug fixes, feature updates, and expert Shopify guidance when you need it.",
    url: "/shopify-support",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Support Retainer Packages - Flex Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Support Packages | Retainer Plans | Flex Commerce",
    description:
      "Dedicated Shopify support retainer packages for UK brands. Priority response, bug fixes, feature updates, and expert Shopify guidance.",
    images: ["/images/og-image.png"],
  },
};

const features = [
  {
    icon: Clock,
    title: "Priority Response",
    description: "Fast response times with dedicated support channels.",
    color: "#ef436b",
  },
  {
    icon: Wrench,
    title: "Bug Fixes",
    description: "Quick resolution of issues affecting your store.",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    title: "Security Updates",
    description: "Keep your store secure with regular updates and monitoring.",
    color: "#0ea5e9",
  },
  {
    icon: TrendingUp,
    title: "Feature Updates",
    description: "Small enhancements and improvements to your store.",
    color: "#10b981",
  },
  {
    icon: MessageCircle,
    title: "Expert Advice",
    description: "Strategic guidance from experienced Shopify specialists.",
    color: "#f59e0b",
  },
  {
    icon: FileText,
    title: "Monthly Reports",
    description: "Regular updates on work completed and recommendations.",
    color: "#64748b",
  },
];
const capabilityTheme = {
  wave: "/images/wave-blue-corner.svg",
  circle: "/images/circles/circle-blue.svg",
  cardBg: "#f3f8ff",
};


const packages = [
  {
    name: "Essential",
    hours: "5 hours/month",
    features: [
      "Email support",
      "48-hour response time",
      "Bug fixes",
      "Minor updates",
      "Monthly report",
    ],
    popular: false,
  },
  {
    name: "Growth",
    hours: "10 hours/month",
    features: [
      "Email & Slack support",
      "24-hour response time",
      "Bug fixes & updates",
      "Small feature additions",
      "Performance monitoring",
      "Monthly strategy call",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    hours: "20+ hours/month",
    features: [
      "Dedicated Slack channel",
      "4-hour response time",
      "Priority development",
      "Proactive improvements",
      "Quarterly roadmap planning",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

const supportSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Support Packages",
  description: "Dedicated Shopify support retainer packages for UK brands. Priority response, bug fixes, feature updates, and expert Shopify guidance when you need it.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Technical Support",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  url: `${siteConfig.url}/shopify-support`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Shopify Support",
      item: `${siteConfig.url}/shopify-support`,
    },
  ],
};

const faqs = [
  {
    q: "What's the difference between your support and maintenance packages?",
    a: "Our support packages (on this page) provide dedicated hours each month for development work, bug fixes, feature additions, and strategic guidance. Our maintenance service focuses specifically on proactive store health — security monitoring, app updates, backups, and error detection. Many clients combine both. You can view our standalone maintenance service for more detail.",
  },
  {
    q: "How quickly do you respond to support requests?",
    a: "Response times depend on your package. Essential clients receive a 48-hour response by email. Growth clients receive a 24-hour response via email and Slack. Enterprise clients receive a 4-hour response through a dedicated Slack channel. Critical production issues are escalated regardless of plan.",
  },
  {
    q: "Can I roll over unused hours to the next month?",
    a: "Growth and Enterprise clients can carry over up to 50% of unused hours to the following month. This provides flexibility during quieter periods without losing value. Unused hours beyond this threshold expire at the end of the month.",
  },
  {
    q: "Can I upgrade or downgrade my support package?",
    a: "Yes. You can change your package with 30 days' notice. We don't tie you into long-term contracts — our clients stay because of the quality of the service, not because they're locked in.",
  },
  {
    q: "What kind of work is included in support hours?",
    a: "Support hours can be used for bug fixes, theme updates, new feature development, performance improvements, SEO changes, app installations and configuration, strategic advice, and platform updates. We maintain a shared project board so you always have visibility of work in progress and hours consumed.",
  },
  {
    q: "Do you work with Shopify Plus stores on retainer?",
    a: "Yes. A significant portion of our retainer clients are on Shopify Plus. We provide support for custom checkout functions, Shopify Flow automations, B2B configuration, multi-store management, and all other enterprise Shopify features in addition to standard support tasks.",
  },
];

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge={{ icon: Headphones, text: "Ongoing Support" }}
        title="Shopify Support & Maintenance"
        description="Dedicated support packages that keep your store running smoothly. Expert help whenever you need it, from quick fixes to strategic guidance."
        primaryCta={{ text: "View Packages", href: "#packages" }}
        secondaryCta={{ text: "Book a Call", href: "/contact" }}
        showTrustBadge
        shapeColors={{ topRight: "blue", bottomLeft: "blue" }}
      />

      {/* Features */}
      <Section background="alt">
          <ServiceCapabilities
            heading="What&apos;s Included"
            subheading="Comprehensive support to keep your Shopify store at its best."
            items={features}
            theme={capabilityTheme}
          />
      </Section>

      {/* Packages */}
      <Section background="alt" id="packages">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Support Packages
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Flexible packages to match your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl p-8 border-2 ${
                pkg.popular ? "border-[#ef436b]" : "border-gray-100"
              } relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ef436b] text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground-dark mb-2">
                {pkg.name}
              </h3>
              <p className="text-[#ef436b] font-medium mb-6">{pkg.hours}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/quote"
                variant={pkg.popular ? "cta" : "outline"}
                className="w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground mt-8">
          Need something different? <a href="/contact" className="text-[#ef436b] hover:underline">Contact us</a> for a custom package.
        </p>
      </Section>

      {/* Why Support */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Ongoing Support?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Your Shopify store isn&apos;t a &quot;set and forget&quot; asset. Regular maintenance and expert support keeps it performing at its best.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Peace of mind knowing experts have your back</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Issues fixed quickly before they impact sales</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Continuous improvements to stay competitive</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Strategic partner, not just technical support</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#8b5cf6]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Fast Response</h3>
                  <p className="text-sm text-foreground">No waiting days for help. We respond quickly when you need us.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Dedicated Team</h3>
                  <p className="text-sm text-foreground">The same experts who know your store, every time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Proactive Care</h3>
                  <p className="text-sm text-foreground">We spot and fix issues before they become problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Having Flex Commerce on retainer has been invaluable. They respond quickly, understand our business, and have become a true extension of our team. We couldn't run our store without them."
        author="Lisa Morgan"
        role="Operations Director, UK Lifestyle Brand"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for peace of mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss which support package is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Started
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      {/* Internal links */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground-dark mb-4">
            Shopify Support Teams in Manchester & Liverpool
          </h2>
          <p className="text-lg text-foreground">
            Our support team is based in{" "}
            <Link
              href="/shopify-agency-manchester"
              className="text-[#ef436b] hover:underline"
            >
              Manchester
            </Link>{" "}
            and{" "}
            <Link
              href="/shopify-agency-liverpool"
              className="text-[#ef436b] hover:underline"
            >
              Liverpool
            </Link>
            , supporting Shopify merchants across the UK. For proactive uptime
            monitoring and security updates, see our{" "}
            <Link
              href="/shopify-maintenance"
              className="text-[#ef436b] hover:underline"
            >
              Shopify maintenance
            </Link>{" "}
            service.
          </p>
        </div>
      </Section>

      <FAQSection
        faqs={faqs}
        image="/images/articles/pexels-6006785.webp"
        imageAlt="Shopify support team helping ecommerce merchants"
        overlayColor="linear-gradient(135deg, #0ea5e9 0%, #075985 100%)"
      />

      <RelatedServices exclude="Ongoing Support" />
    </>
  );
}
