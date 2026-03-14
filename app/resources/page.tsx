import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, ClipboardList, Library, Newspaper } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { getLatestPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resources | Shopify Guides, Checklists & Articles | Flex Commerce",
  description:
    "Free Shopify resources from Flex Commerce — guides, interactive checklists, and expert articles to help you grow your ecommerce store.",
  alternates: { canonical: "https://flexcommerce.co.uk/resources" },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Guides:          { bg: "#fef3c7", text: "#92400e" },
  "Tips & Tricks": { bg: "#d1fae5", text: "#065f46" },
  "Case Studies":  { bg: "#ede9fe", text: "#5b21b6" },
};

const resourceTypes = [
  {
    icon: Newspaper,
    iconBg: "#fce7ef",
    iconColor: "#9f1239",
    title: "Articles",
    description: "In-depth articles on Shopify strategy, CRO, SEO, and ecommerce growth.",
    href: "/articles",
    cta: "Browse articles",
  },
  {
    icon: BookOpen,
    iconBg: "#fef3c7",
    iconColor: "#92400e",
    title: "How-to Guides",
    description: "Step-by-step guides covering every aspect of running a Shopify store.",
    href: "/guides",
    cta: "Browse guides",
  },
  {
    icon: ClipboardList,
    iconBg: "#ede9fe",
    iconColor: "#5b21b6",
    title: "Checklists",
    description: "25+ interactive checklists for store setup, migrations, marketing, and more.",
    href: "/checklists",
    cta: "Browse checklists",
  },
];

export default function ResourcesPage() {
  const posts = getLatestPosts(6);

  return (
    <>
      <PageHero
        badge={{ icon: Library, text: "Free Resources" }}
        title="Resources"
        description="Guides, checklists, and expert articles to help you get the most from Shopify."
        shapeColors={{ topRight: "green" }}
      />

      {/* Resource type cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resourceTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Link
                key={type.title}
                href={type.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: type.iconBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: type.iconColor }} />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{type.title}</h3>
                <p className="text-sm text-gray-500 flex-1 mb-4">{type.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#ef436b]">
                  {type.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Latest Articles */}
      <Section background="alt">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Latest
            </p>
            <h2 className="text-3xl font-bold text-[#1a1a1a]">Articles</h2>
          </div>
          <Button href="/articles" variant="outline" className="hidden sm:inline-flex">
            View all articles
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => {
            const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
            return (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="group relative rounded-2xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300"
                style={{ minHeight: "260px" }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
                <div className="absolute inset-0 opacity-55" style={{ background: post.gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="relative p-5">
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                    style={{ backgroundColor: c.bg, color: c.text }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-2">{post.title}</h3>
                  <span className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read more
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button href="/articles" variant="outline">View all articles</Button>
        </div>
      </Section>
    </>
  );
}
