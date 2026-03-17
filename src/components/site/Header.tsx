"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { company } from "@/data/company";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="shell navShell">
        <Link href="/" className="brandMark">
          <span className="brandKicker">Client Website Starter</span>
          <span>{company.name}</span>
        </Link>

        <nav className="mainNav" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "navLink active" : "navLink"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
