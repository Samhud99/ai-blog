import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen p-8 lg:p-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-6">404</h1>
        <p className="text-xl opacity-70 mb-8">
          This page doesn&apos;t exist.
        </p>
        <Link href="/" className="text-sm opacity-70 hover:opacity-100">
          ← Return to archive
        </Link>
      </div>
    </div>
  );
}
