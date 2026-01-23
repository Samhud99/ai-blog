import { ArticleRow } from "@/components/blog/ArticleRow";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16">
      {/* Header */}
      <header className="mb-12 lg:mb-16 max-w-2xl">
        <p className="section-label mb-4">Archive</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-bold text-coral">
          All Vibe, No Code
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Exploring how AI development tools are reshaping software economics,
          defensibility, and the balance of power between vendors and buyers.
        </p>
      </header>

      {/* Article list */}
      <section aria-label="Articles">
        {posts.map((post) => (
          <ArticleRow
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </section>
    </div>
  );
}
