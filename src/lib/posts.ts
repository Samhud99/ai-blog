import { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "when-building-gets-easy-whats-left-to-defend",
    title: "When Building Gets Easy, What's Left to Defend?",
    excerpt:
      "The first thing you realise after building using AI… is that any of the hundreds of millions of people using AI can build the exact same thing.",
    date: "January 2026",
    tags: ["defensibility", "software"],
  },
  {
    slug: "beyond-the-hype-on-demand-code-generation",
    title:
      "Beyond the Hype: How On-Demand Code Generation Is Reshaping Software Defensibility and Value Creation",
    excerpt:
      "A world of virtually unlimited on demand code changes the nature of value creation in the software industry.",
    date: "January 2026",
    tags: ["introduction", "software"],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByTag(tag: string): Post[] {
  if (tag === "all") return getAllPosts();
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getTagCounts(): Record<string, number> {
  const counts: Record<string, number> = { all: posts.length };
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}
