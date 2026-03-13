import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import {
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Cog,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Plus Development",
  description:
    "Enterprise-grade Shopify Plus solutions for high-growth brands. Custom checkout, advanced automation, and scalable architecture.",
};

const features = [
  {
    icon: Zap,
    title: "Custom Checkout",
    description:
      "Tailored checkout experiences that reduce abandonment and increase conversions.",
  },
  {
    icon: Cog,
    title: "Scripts & Automation",
    description:
      "Automated workflows with Shopify Scripts and Flow for seamless operations.",
  },
  {
    icon: Globe,
    title: "Multi-Store Management",
    description:
      "Expansion stores for different markets, languages, and currencies.",
  },
  {
    icon: Users,
    title: "B2B & Wholesale",
    description:
      "Dedicated B2B channels with custom pricing and ordering experiences.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced security features and compliance for high-volume stores.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Infrastructure built to handle flash sales and rapid growth.",
  },
];

const benefits = [
  "Unlimited staff accounts",
  "Advanced analytics & reporting",
  "Dedicated support from Shopify",
  "Higher API call limits",
  "Launchpad for campaign management",
  "Avalara tax automation",
  "Organization management",
  "Lower transaction fees",
];

export default function ShopifyPlusPage() {
  return (
    <>
      <PageHero
        badge={{ icon: Zap, text: "Enterprise Ecommerce" }}
        title="Shopify Plus Development"
        description="Enterprise-grade Shopify solutions for high-growth brands. Unlock the full potential of Shopify Plus with our expert team."
        primaryCta={{ text: "Get Started", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        shapeColors={{ topRight: "yellow", bottomLeft: "blue" }}
      />

      {/* Features */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Shopify Plus Capabilities
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We help you leverage every feature of Shopify Plus to grow your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">
              Why Shopify Plus?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Shopify Plus is the enterprise ecommerce platform built for
              high-growth brands. It provides the tools, features, and support
              you need to scale without limits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">99.99%</div>
              <p className="text-lg text-foreground-dark font-medium mb-2">
                Uptime Guarantee
              </p>
              <p className="text-foreground">
                Shopify Plus offers industry-leading reliability for your
                mission-critical ecommerce operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Our Shopify Plus Process
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A proven approach for Shopify Plus implementations and migrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment",
              description:
                "We analyze your current setup and identify opportunities.",
            },
            {
              step: "02",
              title: "Planning",
              description:
                "We create a detailed roadmap for your Shopify Plus build.",
            },
            {
              step: "03",
              title: "Development",
              description:
                "We build your custom Shopify Plus solution with care.",
            },
            {
              step: "04",
              title: "Optimisation",
              description:
                "We continuously optimise for performance and growth.",
            },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="text-5xl font-bold text-accent/20 mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                {phase.title}
              </h3>
              <p className="text-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
