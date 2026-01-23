import Image from "next/image";
import { ArticleRow } from "@/components/blog/ArticleRow";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen p-8 lg:p-16 relative">
      {/* Desktop: Small vertical image on right side */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 opacity-80 pointer-events-none">
        <Image
          src="/desk-vertical.png"
          alt=""
          width={140}
          height={280}
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <header className="mb-8 lg:mb-16 max-w-2xl">
        <p className="section-label mb-4">Archive</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-bold text-coral">
          All Vibe, No Code
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Exploring how AI development tools are reshaping software economics,
          defensibility, and the balance of power between vendors and buyers.
        </p>
      </header>

      {/* Mobile: Horizontal banner image */}
      <div className="lg:hidden mb-12 opacity-90">
        <Image
          src="/desk-horizontal.png"
          alt=""
          width={600}
          height={300}
          className="w-full h-auto max-w-md"
          aria-hidden="true"
        />
      </div>

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
