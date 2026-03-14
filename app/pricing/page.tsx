import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import { Check, Tag } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent Shopify development pricing. Packages starting from £2,500 for new stores to £9,500+ for enterprise solutions.",
};

const faqs = [
  {
    question: "What's included in each package?",
    answer:
      "Each package includes design, development, testing, and deployment. The difference lies in complexity, number of pages, and level of customisation. All packages include mobile responsiveness and basic SEO.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We typically split payments into milestones: 50% upfront, 25% at design approval, and 25% at launch. For larger projects, we can discuss custom payment arrangements.",
  },
  {
    question: "What if I need something not listed?",
    answer:
      "Our packages are starting points. We create custom quotes for every project based on your specific needs. Contact us for a free consultation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Starter projects typically take 2-3 weeks, Growth projects 4-6 weeks, and Enterprise projects 8-12 weeks. Timeline depends on feedback speed and scope complexity.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! We offer monthly retainer packages for ongoing support, maintenance, and feature development. Rates start from £500/month.",
  },
  {
    question: "Can you help with an existing Shopify store?",
    answer:
      "Absolutely. We work with both new and existing stores. We can audit your current setup and recommend improvements or take over ongoing development.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge={{ icon: Tag, text: "No Hidden Costs" }}
        title="Transparent Pricing"
        description="Clear, upfront pricing with no hidden costs. Choose the package that fits your needs, or contact us for a custom quote."
        background="pink"
        shapeColors={{ topRight: "pink" }}
      />

      {/* Pricing Cards */}
      <Section>
        <PricingGrid />

      </Section>

      {/* What's Included */}
      <Section background="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Included in Every Project
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Regardless of the package you choose, every project comes with these
            essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Responsive Design",
            "Speed Optimisation",
            "SEO Foundation",
            "Browser Testing",
            "Training Session",
            "Documentation",
            "14-Day Bug Fixes",
            "Launch Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
            >
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground-dark font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <FAQSection faqs={faqs} />
    </>
  );
}
