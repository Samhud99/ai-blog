export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  tags: string[];
  content?: string;
}

export interface PostMetadata {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  published?: boolean;
}

export type Category = "all" | "models" | "alignment" | "research" | "essays";
