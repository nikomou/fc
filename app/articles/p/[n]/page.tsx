import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, PenLine } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Pagination } from "@/components/ui/Pagination";
import { getPaginatedPosts, formatDate } from "@/lib/blog";

const SITE = "https://flexcommerce.co.uk";

interface Props {
  params: Promise<{ n: string }>;
}

export async function generateStaticParams() {
  const { totalPages } = getPaginatedPosts(1);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    n: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { n } = await params;
  const page = Number(n);
  const { totalPages } = getPaginatedPosts(1);

  if (isNaN(page) || page < 2 || page > totalPages) return {};

  const canonical = `${SITE}/articles/page/${page}`;
  const prev = page === 2 ? `${SITE}/articles` : `${SITE}/articles/page/${page - 1}`;
  const next = page < totalPages ? `${SITE}/articles/page/${page + 1}` : undefined;

  return {
    title: `Ecommerce Articles, Page ${page} | Flex Commerce`,
    description: `Browse page ${page} of ecommerce articles from the Flex Commerce team. Shopify guides, conversion tips, case studies, and platform news.`,
    alternates: { canonical },
    openGraph: {
      title: `Ecommerce Articles, Page ${page} | Flex Commerce`,
      description: `Browse page ${page} of ecommerce articles from the Flex Commerce team.`,
      url: canonical,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Guides:           { bg: "#fef3c7", text: "#92400e" },
  "Tips & Tricks":  { bg: "#d1fae5", text: "#065f46" },
  "Case Studies":   { bg: "#ede9fe", text: "#5b21b6" },
};

export default async function ArticlesPageN({ params }: Props) {
  const { n } = await params;
  const page = Number(n);
  const { posts, totalPages } = getPaginatedPosts(page);

  // Diagnostic — remove after debugging
  if (isNaN(page) || page < 2 || page > totalPages || posts.length === 0) {
    notFound();
  }

  const prev = page === 2 ? `${SITE}/articles` : `${SITE}/articles/page/${page - 1}`;
  const next = page < totalPages ? `${SITE}/articles/page/${page + 1}` : undefined;

  return (
    <>
      <link rel="prev" href={prev} />
      {next && <link rel="next" href={next} />}

      <PageHero
        background="purple"
        badge={{ icon: PenLine, text: "Ecommerce Articles" }}
        title={`Articles, Page ${page}`}
        description="Shopify guides, conversion tips, case studies, and ecommerce news from the Flex Commerce team."
        shapeColors={{ topRight: "purple" }}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => {
            const c = categoryColors[post.category] ?? { bg: "#f1f5f9", text: "#1e293b" };
            return (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
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
                  <h3 className="text-white font-bold text-lg leading-snug mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    Read more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} />
      </Section>
    </>
  );
}
