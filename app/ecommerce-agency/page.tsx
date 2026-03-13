import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Target,
  TrendingUp,
  Palette,
  ArrowLeftRight,
  Search,
  Headphones,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecommerce Agency | Flex Commerce",
  description:
    "Unlock the full potential of your digital store with tailored strategies, cutting-edge technology, and unparalleled industry insight from the leading ecommerce experts.",
};

const services = [
  {
    icon: Target,
    title: "Ecommerce Strategy & Consulting",
    description:
      "Market analysis, competitor benchmarking, and custom roadmaps to guide your business growth.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimisation",
    description:
      "User behavior analysis, A/B testing, and data-driven improvements to boost your sales.",
  },
  {
    icon: Palette,
    title: "Website Design & Development",
    description:
      "Responsive design, UX/UI optimisation, and custom functionality tailored to your brand.",
  },
  {
    icon: ArrowLeftRight,
    title: "Platform Migration",
    description:
      "Safe data transfer and system integration with minimal downtime when switching platforms.",
  },
  {
    icon: Search,
    title: "SEO & Online Marketing",
    description:
      "Keyword research, content creation, PPC campaigns, and social media marketing.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description:
      "Security updates, feature enhancements, and continuous support for your store.",
  },
];

const benefits = [
  "Long-term partnership approach",
  "Flexible support without lengthy contracts",
  "Transparent, detailed quotations",
  "In-house team (no outsourcing)",
  "Shopify and Shopify Plus expertise",
  "Consistent 5-star service ratings",
];

export default function EcommerceAgencyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-dark mb-6">
            Ecommerce Agency: Elevate Your Online Business
          </h1>
          <p className="text-xl text-foreground mb-8 max-w-2xl">
            Unlock the full potential of your digital store with tailored
            strategies, cutting-edge technology, and unparalleled industry
            insight from the leading ecommerce experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/quote" size="lg" variant="cta">
              Get A Quote
            </Button>
            <Button href="/contact" size="lg" variant="outline" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our Ecommerce Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            End-to-end solutions to help your online business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                {service.title}
              </h3>
              <p className="text-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Choose Flex Commerce?
            </h2>
            <p className="text-lg text-foreground mb-8">
              We&apos;re not just another agency. We&apos;re your long-term
              partner in ecommerce success, dedicated to helping your business
              grow.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#ef436b] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 lg:p-12">
            <blockquote className="text-xl text-foreground-dark mb-6 leading-relaxed">
              &ldquo;Partnering with Flex was a game-changer for our business.
              Their expert team and personalised approach made all the
              difference in our digital success.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-lg font-semibold text-gray-600">
                G
              </div>
              <div>
                <p className="font-semibold text-foreground-dark">Gregory</p>
                <p className="text-sm text-foreground">Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Locations */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            With offices in Manchester and Liverpool, we&apos;re perfectly
            positioned to serve brands across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="/shopify-agency-manchester"
            className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-black/10 transition-colors">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
              Manchester
            </h3>
            <p className="text-foreground text-sm">
              First Floor, Swan Buildings, 20 Swan Street, Manchester
            </p>
          </a>

          <a
            href="/shopify-agency-liverpool"
            className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-black/10 transition-colors">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-foreground-dark mb-2 group-hover:text-black transition-colors">
              Liverpool
            </h3>
            <p className="text-foreground text-sm">
              Level One, Basecamp Liverpool, 49 Jamaica Street, Liverpool
            </p>
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Ecommerce Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" size="lg" variant="cta">
              Get A Quote
            </Button>
            <Button href="/contact" size="lg" variant="outline-light" icon={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
