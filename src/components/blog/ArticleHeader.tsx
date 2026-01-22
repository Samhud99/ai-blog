interface ArticleHeaderProps {
  title: string;
  date: string;
  tags: string[];
  readingTime?: string;
}

export function ArticleHeader({
  title,
  date,
  tags,
  readingTime,
}: ArticleHeaderProps) {
  return (
    <header className="mb-12 pb-8 border-b border-border">
      <div className="flex items-center gap-4 mb-4 text-sm text-text-muted">
        <time>{date}</time>
        {readingTime && (
          <>
            <span>·</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
        {title}
      </h1>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
