export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; text: string };

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
  content: ContentBlock[];
};
