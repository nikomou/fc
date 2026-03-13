import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { siteConfig } from "@/lib/constants";
import {
  Gauge,
  Image,
  Code,
  Smartphone,
  Zap,
  BarChart3,
  Check,
  TrendingUp,
  Clock,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Speed Optimisation | Core Web Vitals | Flex Commerce",
  description:
    "Speed up your Shopify store and improve Core Web Vitals. Faster load times mean higher conversions. Expert performance optimisation.",
  alternates: {
    canonical: "/shopify-speed-optimisation",
  },
  openGraph: {
    title: "Shopify Speed Optimisation | Core Web Vitals | Flex Commerce",
    description:
      "Speed up your Shopify store and improve Core Web Vitals. Faster load times mean higher conversions. Expert performance optimisation.",
    url: "/shopify-speed-optimisation",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

const optimisations = [
  {
    icon: Image,
    title: "Image Optimisation",
    description: "Compress, resize, and lazy load images for faster page loads.",
    color: "#ef436b",
  },
  {
    icon: Code,
    title: "Code Minification",
    description: "Remove bloat and optimise JavaScript, CSS, and Liquid code.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Third-Party Audit",
    description: "Identify and optimise slow-loading apps and scripts.",
    color: "#0ea5e9",
  },
  {
    icon: Smartphone,
    title: "Mobile Performance",
    description: "Ensure fast load times on mobile devices where most traffic comes from.",
    color: "#10b981",
  },
  {
    icon: BarChart3,
    title: "Core Web Vitals",
    description: "Improve LCP, FID, and CLS scores for better SEO and UX.",
    color: "#f59e0b",
  },
  {
    icon: Clock,
    title: "Caching Strategy",
    description: "Implement effective browser and CDN caching strategies.",
    color: "#64748b",
  },
];

const stats = [
  { value: "53%", label: "of mobile users leave if a page takes over 3 seconds to load" },
  { value: "1s", label: "delay in page load can reduce conversions by 7%" },
  { value: "70%", label: "of consumers say speed impacts their purchase decisions" },
];

const process = [
  {
    step: "01",
    title: "Audit",
    description: "We run comprehensive performance tests and identify bottlenecks.",
  },
  {
    step: "02",
    title: "Prioritise",
    description: "We create a prioritised list of optimisations by impact.",
  },
  {
    step: "03",
    title: "Optimise",
    description: "We implement fixes systematically, testing at each stage.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "We set up monitoring to catch any future regressions.",
  },
];

const speedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopify Speed Optimisation",
  description: "Speed up your Shopify store and improve Core Web Vitals. Faster load times mean higher conversions. Expert performance optimisation.",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  serviceType: "Performance Optimisation",
  areaServed: "United Kingdom",
};

export default function SpeedOptimisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speedSchema) }}
      />

      <PageHero
        badge={{ icon: Gauge, text: "Speed Optimisation" }}
        title="Shopify Speed Optimisation"
        description="Faster stores convert better. We optimise every aspect of your Shopify store for maximum performance and improved Core Web Vitals."
        primaryCta={{ text: "Get Speed Audit", href: "/quote" }}
        secondaryCta={{ text: "View Our Work", href: "/work" }}
        showTrustBadge
        shapeColors={{ topRight: "black", bottomLeft: "black" }}
      />

      {/* Stats */}
      <Section background="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-bold text-[#ef436b] mb-2">{stat.value}</div>
              <p className="text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Optimisations */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-4">
            What We Optimise
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We tackle every factor that affects your store&apos;s performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {optimisations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-4"
                  style={{
                    borderColor: item.color,
                    backgroundColor: `${item.color}10`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Optimisation Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A systematic approach that delivers measurable speed improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((phase, index) => (
            <div key={phase.step} className="relative">
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gray-700" />
              )}
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ef436b] text-white text-2xl font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark mb-6">
              Why Speed Matters
            </h2>
            <p className="text-lg text-foreground mb-8">
              Page speed directly impacts your bottom line. Faster stores see higher conversions, better SEO rankings, and happier customers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Higher conversion rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Better Google rankings</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Lower bounce rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Improved user experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#ef436b] flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Higher customer satisfaction</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#ef436b]/10 to-[#0ea5e9]/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Conversion Boost</h3>
                  <p className="text-sm text-foreground">Our clients typically see 15-30% improvement in conversions after optimisation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-[#ef436b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Core Web Vitals</h3>
                  <p className="text-sm text-foreground">We target green scores across LCP, FID, and CLS metrics.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground-dark mb-1">Revenue Impact</h3>
                  <p className="text-sm text-foreground">Every 100ms improvement in load time increases revenue by 1%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TestimonialCard
        quote="Our page speed score went from 28 to 89 after Flex Commerce's optimisation work. The impact on our conversion rate was immediate - we saw a 25% increase in the first month."
        author="Tom Bradley"
        role="Founder, UK Sports Equipment Brand"
      />

      {/* CTA */}
      <Section background="alt">
        <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Is your store running slow?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free speed audit and find out exactly what&apos;s slowing you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="cta" size="lg">
              Get Free Speed Audit
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
