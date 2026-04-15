import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  image: string;
  gradient: string;
  accent: string;
  author: string;
  authorRole: string;
};

const articlesDir = path.join(process.cwd(), "content/articles");

function loadAllPosts(): BlogPost[] {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPost, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const blogPosts: BlogPost[] = loadAllPosts();

export const POSTS_PER_PAGE = 12;

export function getPaginatedPosts(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = blogPosts.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  return { posts, totalPages, totalPosts: blogPosts.length };
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostContent(slug: string): string | null {
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return content;
}

export function getLatestPosts(count = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
