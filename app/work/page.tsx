import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Briefcase } from "lucide-react";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our portfolio of Shopify projects. See how we've helped brands create exceptional ecommerce experiences.",
};

const projects = [
  {
    slug: "fashion-brand-co",
    title: "Fashion Brand Co",
    category: "Fashion & Apparel",
    headline: "Increased conversion rate for a fashion retailer by 40%",
    description:
      "Complete Shopify Plus migration with custom theme development and advanced filtering system. We rebuilt their product discovery experience from the ground up, cutting time-to-purchase significantly.",
    stats: [
      { value: "+40%", label: "Conversion Rate" },
      { value: "2x", label: "Faster Page Load" },
      { value: "3 months", label: "Project Timeline" },
    ],
    image: "/images/work/fashion-brand-co.jpg",
  },
  {
    slug: "tech-accessories-ltd",
    title: "Tech Accessories Ltd",
    category: "Electronics",
    headline: "Grew average order value for a tech accessories brand by 60%",
    description:
      "Custom Shopify theme with product configurator and subscription functionality. Smart upsell logic and bundle builder drove a significant lift in AOV from day one.",
    stats: [
      { value: "+60%", label: "Avg. Order Value" },
      { value: "-25%", label: "Cart Abandonment" },
      { value: "£1.2M", label: "Added Revenue" },
    ],
    image: "/images/work/tech-accessories-ltd.jpg",
  },
  {
    slug: "organic-beauty-co",
    title: "Organic Beauty Co",
    category: "Beauty & Cosmetics",
    headline: "Migrated a beauty brand from WooCommerce with zero ranking loss",
    description:
      "Migration from WooCommerce with full SEO preservation and a custom checkout flow. Every redirect mapped, every ranking held — and a faster, better-looking store on the other side.",
    stats: [
      { value: "+28%", label: "Organic Rankings" },
      { value: "100%", label: "Uptime During Migration" },
      { value: "+28%", label: "Organic Traffic (6 months post)" },
    ],
    image: "/images/work/organic-beauty-co.jpg",
  },
  {
    slug: "home-essentials",
    title: "Home Essentials",
    category: "Home & Living",
    headline: "Launched a home goods brand across 5 markets, tripling B2B sales",
    description:
      "Shopify Plus build with multi-currency support, localised storefronts, and a wholesale B2B portal. A single platform powering five markets and two sales channels simultaneously.",
    stats: [
      { value: "5", label: "Markets Launched" },
      { value: "3x", label: "B2B Sales Growth" },
      { value: "4 currencies", label: "Supported" },
    ],
    image: "/images/work/home-essentials.jpg",
  },
  {
    slug: "athletic-wear-brand",
    title: "Athletic Wear Brand",
    category: "Sportswear",
    headline: "Improved page speed by 65% for a sportswear brand",
    description:
      "High-performance theme optimisation and streamlined app stack for a sportswear brand running heavy image content. Core Web Vitals went green across the board.",
    stats: [
      { value: "+65%", label: "Page Speed" },
      { value: "-40%", label: "Operational Time" },
      { value: "98", label: "PageSpeed Score" },
    ],
    image: "/images/work/athletic-wear-brand.jpg",
  },
  {
    slug: "gourmet-food-store",
    title: "Gourmet Food Store",
    category: "Food & Beverage",
    headline: "Grew email revenue by 200% for a subscription food brand",
    description:
      "Custom subscription box functionality with deep Klaviyo integration and personalised marketing flows. Retention improved dramatically once the post-purchase experience was rebuilt.",
    stats: [
      { value: "+200%", label: "Email Revenue" },
      { value: "75%", label: "Subscription Retention" },
      { value: "£420k", label: "Recurring Annual Revenue" },
    ],
    image: "/images/work/gourmet-food-store.jpg",
  },
];

const workPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Our Work", item: `${siteConfig.url}/work` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Flex Commerce Portfolio",
      description: "Case studies from Flex Commerce — Shopify Plus agency",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        item: `${siteConfig.url}/work/${p.slug}`,
      })),
    },
  ],
};

function ShowcaseRow({ project, flip }: { project: typeof projects[0]; flip: boolean }) {
  return (
    <div className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-8 lg:gap-16 items-center`}>
      <div className="w-full md:w-3/5 relative rounded-2xl overflow-hidden aspect-[4/3] group flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-black/25" />
        <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="w-full md:w-2/5 flex flex-col gap-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-snug">
          {project.headline}
        </h3>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-bold text-[#ef436b] leading-tight">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workPageSchema) }}
      />

      {/* Hero */}
      <PageHero
        background="yellow"
        badge={{ icon: Briefcase, text: "Our Portfolio" }}
        title="Our Work"
        description="We've helped brands across industries create Shopify stores that convert. Here are some of our favourite projects."
        shapeColors={{ topRight: "yellow" }}
      />

      {/* Featured top */}
      <Section>
        <ShowcaseRow project={projects[0]} flip={false} />
      </Section>

      {/* Card grid */}
      <Section background="alt">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative rounded-xl overflow-hidden flex flex-col min-h-[460px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/75" />
              <div className="relative p-6 flex flex-col gap-4 flex-1">
                <span className="self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                  {project.category}
                </span>
                <p className="text-white font-semibold text-xl leading-snug flex-1">
                  {project.headline}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {project.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-bold text-[#ef436b]">{stat.value}</div>
                      <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured bottom */}
      <Section>
        <div className="space-y-24">
          <ShowcaseRow project={projects[3]} flip={false} />
          <ShowcaseRow project={projects[5]} flip={true} />
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
    </>
  );
}
