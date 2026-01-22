import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <article className="max-w-2xl">
        <ArticleHeader
          title={post.title}
          date={post.date}
          tags={post.tags}
          readingTime={post.readingTime}
        />

        <div className="prose">
          <p>
            This is where your article content will appear. You can integrate
            this with MDX, a headless CMS, or any content source of your choice.
          </p>

          <h2>Getting Started</h2>
          <p>
            To add real content to your articles, consider using one of these
            approaches:
          </p>
          <ul>
            <li>
              <strong>MDX</strong> — Write articles in Markdown with JSX
              components
            </li>
            <li>
              <strong>Contentlayer</strong> — Type-safe content management
            </li>
            <li>
              <strong>Headless CMS</strong> — Sanity, Contentful, or similar
            </li>
          </ul>

          <blockquote>
            The best way to predict the future is to invent it.
          </blockquote>

          <p>
            Each approach has its merits. MDX offers the most flexibility for
            developers who want to embed interactive components. A headless CMS
            works well for teams with non-technical writers.
          </p>
        </div>

        <nav className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="text-sm text-text-muted hover:text-coral transition-colors">
            ← Back to archive
          </Link>
        </nav>
      </article>
    </div>
  );
}
