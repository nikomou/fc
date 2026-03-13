import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Briefcase } from "lucide-react";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our portfolio of Shopify projects. See how we've helped brands create exceptional ecommerce experiences.",
};

const projects = [
  {
    title: "Fashion Brand Co",
    category: "Fashion & Apparel",
    headline: "Increased conversion rate for a fashion retailer by 40%",
    description:
      "Complete Shopify Plus migration with custom theme development and advanced filtering system.",
    results: ["40% increase in conversion rate", "2x faster page load times"],
  },
  {
    title: "Tech Accessories Ltd",
    category: "Electronics",
    headline: "Grew average order value for a tech accessories brand by 60%",
    description:
      "Custom Shopify theme with product configurator and subscription functionality.",
    results: ["60% increase in average order value", "Reduced cart abandonment by 25%"],
  },
  {
    title: "Organic Beauty Co",
    category: "Beauty & Cosmetics",
    headline: "Migrated a beauty brand from WooCommerce with zero ranking loss",
    description:
      "Migration from WooCommerce with full SEO preservation and custom checkout flow.",
    results: ["Zero downtime migration", "Preserved 100% of search rankings"],
  },
  {
    title: "Home Essentials",
    category: "Home & Living",
    headline: "Launched a home goods brand across 5 markets, tripling B2B sales",
    description:
      "Shopify Plus build with multi-currency support and wholesale B2B portal.",
    results: ["Launched in 5 markets", "B2B sales increased 3x"],
  },
  {
    title: "Athletic Wear Brand",
    category: "Sportswear",
    headline: "Improved page speed by 65% for a sportswear brand",
    description:
      "High-performance theme optimisation and app integration for inventory management.",
    results: ["Page speed improved by 65%", "Reduced operational time by 40%"],
  },
  {
    title: "Gourmet Food Store",
    category: "Food & Beverage",
    headline: "Grew email revenue by 200% for a subscription food brand",
    description:
      "Custom subscription box functionality with Klaviyo integration for personalised marketing.",
    results: ["75% subscription retention", "Email revenue up 200%"],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge={{ icon: Briefcase, text: "Our Portfolio" }}
        title="Our Work"
        description="We've helped brands across industries create Shopify stores that convert. Here are some of our favourite projects."
        shapeColors={{ topRight: "yellow" }}
      />

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200"
            >
              <div className="px-6 py-8 flex flex-col justify-between gap-6 min-h-[130px]">
                <p className="text-white font-semibold text-3xl leading-snug">
                  {project.headline}
                </p>
                <p className="text-white text-sm">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ef436b]" />
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
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven approach that delivers results, every time.
          </p>
        </div>
        <ProcessSteps
          steps={[
            { step: "01", title: "Discovery", description: "We learn about your brand, goals, and challenges." },
            { step: "02", title: "Strategy", description: "We create a roadmap tailored to your needs." },
            { step: "03", title: "Build", description: "We design and develop your Shopify store." },
            { step: "04", title: "Launch & Grow", description: "We launch, monitor, and optimise for growth." },
          ]}
        />
      </Section>
    </>
  );
}
