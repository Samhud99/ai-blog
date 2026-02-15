import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { WhenBuildingGetsEasy } from "@/components/blog/articles/WhenBuildingGetsEasy";
import { BeyondTheHype } from "@/components/blog/articles/BeyondTheHype";
import { AICompetitiveAdvantage } from "@/components/blog/articles/AICompetitiveAdvantage";

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

function getArticleContent(slug: string) {
  switch (slug) {
    case "when-building-gets-easy-whats-left-to-defend":
      return <WhenBuildingGetsEasy />;
    case "beyond-the-hype-on-demand-code-generation":
      return <BeyondTheHype />;
    case "ai-is-a-competitive-advantage":
      return <AICompetitiveAdvantage />;
    default:
      return null;
  }
}

function getArticleImages(slug: string) {
  switch (slug) {
    case "ai-is-a-competitive-advantage":
      return {
        mobile: { src: "/competitive-advantage-mobile.png", width: 320, height: 140 },
        desktop: { src: "/competitive-advantage-desktop.png", width: 336, height: 768 },
      };
    default:
      return {
        mobile: { src: "/desk-mobile.jpg", width: 280, height: 200 },
        desktop: { src: "/desk-illustration.jpg", width: 480, height: 1050 },
      };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = getArticleContent(slug);
  const images = getArticleImages(slug);

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16 overflow-x-hidden">
      <div className="flex">
        {/* Article content */}
        <article className="w-full max-w-2xl overflow-hidden xl:flex-shrink-0">
          <ArticleHeader
            title={post.title}
            date={post.date}
            tags={post.tags}
          />

          {/* Mobile: Centered image */}
          <div className="xl:hidden flex justify-center my-8">
            <Image
              src={images.mobile.src}
              alt=""
              width={images.mobile.width}
              height={images.mobile.height}
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="prose">
            {content}
          </div>

          <nav className="mt-16 pt-8 border-t border-border">
            <Link href="/" className="text-sm text-text-muted hover:text-coral transition-colors">
              ← Back to archive
            </Link>
          </nav>
        </article>

        {/* Desktop: Decorative image on right side */}
        <div className="hidden xl:flex flex-1 justify-center pointer-events-none">
          <Image
            src={images.desktop.src}
            alt=""
            width={images.desktop.width}
            height={images.desktop.height}
            className="object-contain object-top"
            aria-hidden="true"
            priority
          />
        </div>
      </div>
    </div>
  );
}
