import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Thinking Machines and its author.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <article className="max-w-2xl">
        <header className="mb-12">
          <p className="section-label mb-4">Appendix</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            About this publication.
          </h1>
        </header>

        <div className="prose">
          <p>
            Thinking Machines is a collection of essays exploring the rapidly
            evolving landscape of artificial intelligence. Here, we examine the
            technical foundations, philosophical implications, and practical
            applications of machine learning and neural networks.
          </p>

          <p>
            The goal is to make complex AI concepts accessible without
            oversimplifying them. Whether you&apos;re a researcher, engineer, or
            curious observer, you&apos;ll find thoughtful analysis that respects
            your intelligence while remaining approachable.
          </p>

          <h2>Topics</h2>
          <ul>
            <li>Large language models and their capabilities</li>
            <li>AI safety and alignment research</li>
            <li>Machine learning fundamentals</li>
            <li>The intersection of AI and society</li>
            <li>Technical deep dives into architectures and algorithms</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For inquiries, corrections, or suggestions, reach out via{" "}
            <a href="mailto:hello@example.com">email</a>.
          </p>
        </div>
      </article>
    </div>
  );
}
