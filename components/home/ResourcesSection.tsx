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

export function ResourcesSection() {
  const posts = getLatestPosts(3);

  return (
    <Section background="alt">
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
          <Button href="/articles" variant="outline">
            View all articles
          </Button>
        </div>
      </div>

      {/* Articles — full width 3-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, i) => {
          const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
          return (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="group relative rounded-2xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300"
              style={{ minHeight: i === 1 ? "340px" : "300px" }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
              />
              <div className="absolute inset-0 opacity-55" style={{ background: post.gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="relative p-6">
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: c.bg, color: c.text }}
                >
                  {post.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-snug mb-3">
                  {post.title}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick links to Guides & Checklists */}
      <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a1a1a] text-sm font-medium text-white hover:bg-black transition-colors"
        >
          All Resources
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#ef436b] hover:text-[#ef436b] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          How-to Guides
        </Link>
        <Link
          href="/checklists"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#ef436b] hover:text-[#ef436b] transition-colors"
        >
          <ClipboardList className="w-3.5 h-3.5" />
          Checklists
        </Link>
      </div>

      <div className="text-center mt-8 sm:hidden">
        <Button href="/articles" variant="outline">
          View all articles
        </Button>
      </div>
    </Section>
  );
}
