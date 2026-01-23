import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About All Vibe, No Code and Sam Hudson.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <article className="max-w-2xl">
        <header className="mb-12">
          <p className="section-label mb-4">Appendix</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            About
          </h1>
        </header>

        <div className="prose">
          <p>
            <strong>All Vibe, No Code</strong> is a blog exploring how AI
            development tools are reshaping software economics, defensibility,
            and the balance of power between vendors and buyers.
          </p>

          <p>
            Writing articles on AI which aim to cut through the noise.
          </p>

          <h2>About the Author</h2>
          <p>
            I&apos;m Sam Hudson. You can find me on{" "}
            <a
              href="https://www.linkedin.com/in/samhudson99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            or check out my work on{" "}
            <a
              href="https://github.com/Samhud99"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
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
