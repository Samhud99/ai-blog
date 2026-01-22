import Link from "next/link";

interface ArticleRowProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export function ArticleRow({ slug, title, excerpt, date, tags }: ArticleRowProps) {
  return (
    <article className="article-row">
      <Link href={`/posts/${slug}`} className="block group">
        <div className="flex items-center gap-3 mb-2">
          <time className="text-sm text-text-muted">{date}</time>
          <span className="text-text-muted">·</span>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl italic mb-3 group-hover:text-coral transition-colors">
          {title}
        </h2>
        <p className="text-text-muted leading-relaxed max-w-2xl">
          {excerpt}
        </p>
      </Link>
    </article>
  );
}
