import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/Section";
import {
  blogPosts,
  getBlogPost,
  getBlogPostContent,
  getLatestPosts,
  formatDate,
} from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Flex Commerce`,
    description: post.description,
    alternates: {
      canonical: `https://flexcommerce.co.uk/articles/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://flexcommerce.co.uk/articles/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-5 rounded-xl bg-[#fff5f7] border border-[#fce7ef] text-gray-700 leading-relaxed">
      <span className="font-semibold text-[#ef436b] block mb-1 text-sm uppercase tracking-wide">
        Key insight
      </span>
      {children}
    </div>
  );
}

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div
        className="relative w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

const mdxComponents = {
  Callout,
  ArticleImage,
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold text-[#1a1a1a] mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-[#1a1a1a] mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-700 leading-relaxed mb-5">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-5 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-5 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex gap-3 text-gray-700 leading-relaxed">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ef436b] flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="my-8 pl-6 border-l-4 border-[#ef436b] italic text-gray-600 text-lg leading-relaxed">
      {children}
    </blockquote>
  ),
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "#fef3c7", text: "#92400e" },
  "Tips & Tricks": { bg: "#d1fae5", text: "#065f46" },
  "Case Studies": { bg: "#ede9fe", text: "#5b21b6" },
};

export default async function ArticlePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = getBlogPostContent(slug);
  if (!content) notFound();

  const related = getLatestPosts(4)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Flex Commerce",
      url: "https://flexcommerce.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://flexcommerce.co.uk/articles/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div
        className="relative pt-32 pb-16 flex flex-col justify-end"
        style={{ minHeight: "460px" }}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: post.gradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: c.bg, color: c.text }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-white font-medium text-sm">{post.author}</p>
              <p className="text-white/60 text-xs">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-100">
            {post.description}
          </p>

          <div className="prose-custom">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* Author footer */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">{post.author}</p>
              <p className="text-gray-500 text-sm">
                {post.authorRole}, Flex Commerce
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related posts */}
      {related.length > 0 && (
        <Section background="alt">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              More Articles
            </h2>
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#1a1a1a] transition-colors"
            >
              View all posts
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((rp) => {
              const rc = categoryColors[rp.category] ?? {
                bg: "#f1f5f9",
                text: "#1e293b",
              };
              return (
                <Link
                  key={rp.slug}
                  href={`/articles/${rp.slug}`}
                  className="group relative rounded-2xl overflow-hidden flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300"
                  style={{ minHeight: "240px" }}
                >
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div
                    className="absolute inset-0 opacity-55"
                    style={{ background: rp.gradient }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="relative p-5">
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{ backgroundColor: rc.bg, color: rc.text }}
                    >
                      {rp.category}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mb-2">
                      {rp.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white transition-colors">
                      Read more
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      )}
    </>
  );
}
