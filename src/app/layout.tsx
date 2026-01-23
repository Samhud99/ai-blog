import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI - All Vibe, No Code",
    template: "%s | All Vibe, No Code",
  },
  description:
    "Exploring how AI development tools are reshaping software economics, defensibility, and the balance of power between vendors and buyers.",
  openGraph: {
    title: "All Vibe, No Code",
    description:
      "Exploring how AI development tools are reshaping software economics, defensibility, and the balance of power between vendors and buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div className="flex min-h-screen">
          <div className="fixed left-0 top-0 h-full p-8">
            <Sidebar />
          </div>
          <main id="main-content" className="flex-1 lg:ml-64 relative" role="main">
            {/* Mobile: Horizontal banner image */}
            <div className="lg:hidden px-4 pt-4">
              <Image
                src="/desk-horizontal.png"
                alt=""
                width={800}
                height={200}
                className="w-full h-auto max-h-24 object-cover object-center opacity-80"
                aria-hidden="true"
                priority
              />
            </div>

            {/* Desktop: Vertical image top right */}
            <div className="hidden lg:block absolute top-8 right-8 opacity-70 pointer-events-none">
              <Image
                src="/desk-vertical.png"
                alt=""
                width={200}
                height={400}
                className="object-contain"
                aria-hidden="true"
                priority
              />
            </div>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
