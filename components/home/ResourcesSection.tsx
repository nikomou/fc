import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, ClipboardList } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getLatestPosts } from "@/lib/blog";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Guides:          { bg: "#fef3c7", text: "#92400e" },
  "Tips & Tricks": { bg: "#d1fae5", text: "#065f46" },
  "Case Studies":  { bg: "#ede9fe", text: "#5b21b6" },
};

const featuredGuides = [
  { title: "How to Migrate to Shopify Plus",              href: "/guides/how-to-migrate-to-shopify-plus" },
  { title: "How to Customise Your Shopify Theme",         href: "/guides/how-to-customise-shopify-theme" },
  { title: "How to Optimise Your Shopify Store for Speed",href: "/guides/how-to-optimise-your-shopify-store-for-speed" },
  { title: "How to Set Up Shopify Markets",               href: "/guides/how-to-set-up-shopify-markets" },
  { title: "How to Set Up Klaviyo on Shopify",            href: "/guides/how-to-set-up-klaviyo-on-shopify" },
  { title: "How to Read Shopify Analytics",               href: "/guides/how-to-read-shopify-analytics" },
];

const featuredChecklists = [
  { title: "Shopify Plus Migration Checklist",      href: "/checklists/shopify-plus-migration-checklist" },
  { title: "Black Friday / BFCM Preparation",       href: "/checklists/shopify-black-friday-checklist" },
  { title: "Shopify CRO Checklist",                 href: "/checklists/shopify-cro-checklist" },
  { title: "Shopify SEO Checklist",                 href: "/checklists/shopify-seo-checklist" },
  { title: "Shopify Speed Optimisation Checklist",  href: "/checklists/shopify-speed-optimisation-checklist" },
  { title: "Shopify Launch Checklist",              href: "/checklists/shopify-launch-checklist" },
];

export function ResourcesSection() {
  const posts = getLatestPosts(3);

  return (
    <Section background="alt">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Knowledge Base
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-dark">
            Resources
          </h2>
        </div>
        <div className="hidden sm:block">
          <Button href="/resources" variant="outline">
            View all resources
          </Button>
        </div>
      </div>

      {/* Two-column layout: Articles left, Lists right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Articles — spans 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Latest Articles
            </h3>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[#1a1a1a] transition-colors"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {posts.map((post) => {
              const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
              return (
                <Link
                  key={post.slug}
                  href={`/articles/${post.slug}`}
                  className="group relative rounded-2xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300"
                  style={{ minHeight: "220px" }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  />
                  <div className="absolute inset-0 opacity-55" style={{ background: post.gradient }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="relative p-4">
                    <span
                      className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      {post.category}
                    </span>
                    <h4 className="text-white font-bold text-sm leading-snug mb-2">
                      {post.title}
                    </h4>
                    <span className="inline-flex items-center text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                      Read more
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Guides + Checklists — right column */}
        <div className="flex flex-col gap-6">

          {/* Guides */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#fef3c7] flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5 text-[#92400e]" />
                </div>
                <h3 className="text-sm font-bold text-[#1a1a1a]">Guides</h3>
              </div>
              <Link
                href="/guides"
                className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-[#1a1a1a] transition-colors"
              >
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <ul className="space-y-1 flex-1">
              {featuredGuides.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f59e0b] flex-shrink-0 group-hover:bg-[#ef436b] transition-colors" />
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Checklists */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#ede9fe] flex items-center justify-center">
                  <ClipboardList className="w-3.5 h-3.5 text-[#5b21b6]" />
                </div>
                <h3 className="text-sm font-bold text-[#1a1a1a]">Checklists</h3>
              </div>
              <Link
                href="/checklists"
                className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-[#1a1a1a] transition-colors"
              >
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <ul className="space-y-1 flex-1">
              {featuredChecklists.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8b5cf6] flex-shrink-0 group-hover:bg-[#ef436b] transition-colors" />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center mt-8 sm:hidden">
        <Button href="/resources" variant="outline">
          View all resources
        </Button>
      </div>
    </Section>
  );
}
