import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
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
          <main id="main-content" className="flex-1 lg:ml-64" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
