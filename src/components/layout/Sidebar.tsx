"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  page: string;
}

const contents: NavItem[] = [
  { label: "Archive", href: "/", page: "1" },
];

const appendices: NavItem[] = [
  { label: "About", href: "/about", page: "2" },
];

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={`flex items-baseline text-text ${isActive ? "" : "opacity-70 hover:opacity-100"}`}
      aria-current={isActive ? "page" : undefined}
    >
      <span>{item.label}</span>
      <span className="dotted-leader" aria-hidden="true" />
      <span className="tabular-nums text-sm">{item.page}</span>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 pr-8 hidden lg:block" aria-label="Site navigation">
      <nav className="sticky top-8 space-y-8">
        {/* Table of Contents header */}
        <div>
          <Link
            href="/"
            className="section-label block mb-4 text-text-muted hover:text-text transition-colors"
          >
            Table of Contents
          </Link>
        </div>

        {/* Contents section */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <span className="section-label">Contents</span>
            <span className="section-label">Page</span>
          </div>
          <div className="space-y-2">
            {contents.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>

        {/* Appendices section */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <span className="section-label">Appendices</span>
            <span className="section-label">Page</span>
          </div>
          <div className="space-y-2">
            {appendices.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-8 mt-8 border-t border-border text-sm text-text-muted">
          <p>The Business Impact of AI</p>
          <p className="mt-2">By Sam Hudson</p>
        </div>
      </nav>
    </aside>
  );
}
