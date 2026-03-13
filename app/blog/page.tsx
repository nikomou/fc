import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Ecommerce Blog | Shopify Tips, Guides & Case Studies",
  description:
    "Expert ecommerce insights from the Flex Commerce team. Shopify guides, conversion optimisation tips, case studies, and platform news to help you grow your store.",
  alternates: { canonical: "https://flexcommerce.co.uk/blog" },
  openGraph: {
    title: "Ecommerce Blog | Flex Commerce",
    description:
      "Expert ecommerce insights from the Flex Commerce team. Shopify guides, conversion optimisation tips, case studies, and platform news.",
    url: "https://flexcommerce.co.uk/blog",
    type: "website",
  },
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Guides:           { bg: "#fef3c7", text: "#92400e" },
  "Tips & Tricks":  { bg: "#d1fae5", text: "#065f46" },
  "Case Studies":   { bg: "#ede9fe", text: "#5b21b6" },
};

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const [featured, ...rest] = sorted;

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Ecommerce Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Insights to help your store grow
            </h1>
            <p className="text-lg text-gray-300">
              Shopify guides, conversion tips, case studies, and ecommerce news
              from the Flex Commerce team.
            </p>
          </div>
        </div>
      </section>

      <Section>
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative rounded-2xl overflow-hidden flex flex-col justify-end mb-10 hover:-translate-y-1 transition-transform duration-300"
          style={{ minHeight: "420px" }}
        >
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
          {/* Colour tint overlay */}
          <div className="absolute inset-0 opacity-60" style={{ background: featured.gradient }} />
          {/* Dark gradient for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="relative p-8 md:p-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const c = categoryColors[featured.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
                return (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: c.bg, color: c.text }}
                  >
                    {featured.category}
                  </span>
                );
              })()}
              <span className="text-white/60 text-sm">{featured.readTime}</span>
              <span className="text-white/60 text-sm">{formatDate(featured.date)}</span>
            </div>
            <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-4">
              {featured.title}
            </h2>
            <p className="text-white/75 text-base mb-6 max-w-lg">
              {featured.description}
            </p>
            <span className="inline-flex items-center gap-2 text-white font-medium">
              Read article
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post) => {
            const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative rounded-2xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                />
                <div className="absolute inset-0 opacity-55" style={{ background: post.gradient }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="relative p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      {post.category}
                    </span>
                    <span className="text-white/60 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
