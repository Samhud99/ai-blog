import { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "understanding-transformer-architecture",
    title: "Understanding the Transformer Architecture",
    excerpt:
      "A deep dive into the architecture that powers modern language models, from attention mechanisms to positional encoding.",
    date: "January 15 2026",
    readingTime: "12 min",
    tags: ["models", "research"],
  },
  {
    slug: "emergent-abilities-in-large-language-models",
    title: "Emergent Abilities in Large Language Models",
    excerpt:
      "Exploring the unexpected capabilities that arise in language models as they scale, and what this means for AI development.",
    date: "January 8 2026",
    readingTime: "9 min",
    tags: ["models", "research"],
  },
  {
    slug: "the-alignment-problem",
    title: "The Alignment Problem: Why It Matters",
    excerpt:
      "An accessible introduction to AI alignment, the challenge of ensuring AI systems pursue goals that benefit humanity.",
    date: "December 28 2025",
    readingTime: "15 min",
    tags: ["alignment", "essays"],
  },
  {
    slug: "retrieval-augmented-generation",
    title: "Retrieval-Augmented Generation Explained",
    excerpt:
      "How combining retrieval systems with language models creates more accurate and grounded AI responses.",
    date: "December 20 2025",
    readingTime: "8 min",
    tags: ["models", "research"],
  },
  {
    slug: "scaling-laws-and-their-implications",
    title: "Scaling Laws and Their Implications",
    excerpt:
      "What happens when you make models bigger, train on more data, and use more compute? The surprising predictability of scaling.",
    date: "December 12 2025",
    readingTime: "11 min",
    tags: ["research"],
  },
  {
    slug: "on-machine-consciousness",
    title: "On Machine Consciousness",
    excerpt:
      "Examining the philosophical questions around AI consciousness and whether current systems have any form of experience.",
    date: "December 5 2025",
    readingTime: "18 min",
    tags: ["essays", "alignment"],
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
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
