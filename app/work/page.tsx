import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our portfolio of Shopify projects. See how we've helped brands create exceptional ecommerce experiences.",
};

const projects = [
  {
    title: "Fashion Brand Co",
    category: "Fashion & Apparel",
    description:
      "Complete Shopify Plus migration with custom theme development and advanced filtering system.",
    results: ["40% increase in conversion rate", "2x faster page load times"],
    image: "/images/work/fashion-brand.jpg",
  },
  {
    title: "Tech Accessories Ltd",
    category: "Electronics",
    description:
      "Custom Shopify theme with product configurator and subscription functionality.",
    results: ["60% increase in average order value", "Reduced cart abandonment by 25%"],
    image: "/images/work/tech-accessories.jpg",
  },
  {
    title: "Organic Beauty Co",
    category: "Beauty & Cosmetics",
    description:
      "Migration from WooCommerce with full SEO preservation and custom checkout flow.",
    results: ["Zero downtime migration", "Preserved 100% of search rankings"],
    image: "/images/work/organic-beauty.jpg",
  },
  {
    title: "Home Essentials",
    category: "Home & Living",
    description:
      "Shopify Plus build with multi-currency support and wholesale B2B portal.",
    results: ["Launched in 5 markets", "B2B sales increased 3x"],
    image: "/images/work/home-essentials.jpg",
  },
  {
    title: "Athletic Wear Brand",
    category: "Sportswear",
    description:
      "High-performance theme optimisation and app integration for inventory management.",
    results: ["Page speed improved by 65%", "Reduced operational time by 40%"],
    image: "/images/work/athletic-wear.jpg",
  },
  {
    title: "Gourmet Food Store",
    category: "Food & Beverage",
    description:
      "Custom subscription box functionality with Klaviyo integration for personalised marketing.",
    results: ["75% subscription retention", "Email revenue up 200%"],
    image: "/images/work/gourmet-food.jpg",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background-alt via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              Our Work
            </h1>
            <p className="text-xl text-foreground">
              We&apos;ve helped brands across industries create Shopify stores that
              convert. Here are some of our favorite projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-accent/30">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground-dark mt-2 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "£50M+", label: "Revenue Generated" },
            { value: "40%", label: "Avg. Conversion Lift" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Our Process
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            A proven approach that delivers results, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We learn about your brand, goals, and challenges.",
            },
            {
              step: "02",
              title: "Strategy",
              description: "We create a roadmap tailored to your needs.",
            },
            {
              step: "03",
              title: "Build",
              description: "We design and develop your Shopify store.",
            },
            {
              step: "04",
              title: "Launch & Grow",
              description: "We launch, monitor, and optimize for growth.",
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
