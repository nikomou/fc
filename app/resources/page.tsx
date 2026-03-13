import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/home/CTASection";
import { ArrowRight, BookOpen, Video, FileText, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Shopify guides, tutorials, and insights from the Flex Commerce team. Learn how to grow your ecommerce business.",
};

const categories = [
  { name: "All", count: 12 },
  { name: "Guides", count: 5 },
  { name: "Case Studies", count: 3 },
  { name: "Tips & Tricks", count: 4 },
];

const resources = [
  {
    title: "The Ultimate Shopify Plus Migration Checklist",
    category: "Guides",
    description:
      "Everything you need to know before, during, and after migrating to Shopify Plus.",
    icon: FileText,
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "Optimising Your Shopify Store for Speed",
    category: "Tips & Tricks",
    description:
      "Practical tips to improve your store's loading time and Core Web Vitals scores.",
    icon: BookOpen,
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "How We Increased Conversions by 40%",
    category: "Case Studies",
    description:
      "A deep dive into the strategies we used to boost conversion rates for a fashion brand.",
    icon: FileText,
    readTime: "5 min read",
    href: "#",
  },
  {
    title: "Getting Started with Shopify Flow",
    category: "Guides",
    description:
      "Learn how to automate your Shopify Plus store with Flow workflows.",
    icon: Video,
    readTime: "15 min read",
    href: "#",
  },
  {
    title: "Email Marketing Best Practices for Ecommerce",
    category: "Tips & Tricks",
    description:
      "Strategies to improve your email marketing ROI using Klaviyo and Shopify.",
    icon: BookOpen,
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "B2B Ecommerce on Shopify Plus",
    category: "Guides",
    description:
      "How to set up and optimise your wholesale portal on Shopify Plus.",
    icon: FileText,
    readTime: "12 min read",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background-alt via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground-dark mb-6">
              Resources
            </h1>
            <p className="text-xl text-foreground">
              Guides, tutorials, and insights to help you succeed with Shopify.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <Section>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-full text-sm font-medium bg-background-alt hover:bg-accent hover:text-white transition-colors"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {resource.category}
                  </span>
                  <span className="text-xs text-foreground">
                    {resource.readTime}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-foreground text-sm mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Checklists CTA */}
      <Section background="alt">
        <div className="text-center">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckSquare className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">
            Interactive Checklists
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
            25+ actionable checklists covering store setup, migrations, marketing, and more. Track your progress as you go.
          </p>
          <Link
            href="/checklists"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-colors"
          >
            Browse Checklists
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>


      <CTASection />
    </>
  );
}
