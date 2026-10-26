"use client";

import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";

const links = [
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About Me" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <TransitionLink href="/" label="Home" className="logo">
        JP<span>.</span>
      </TransitionLink>

      <div className="nav-links">
        {links.map((l) => (
          <TransitionLink
            key={l.href}
            href={l.href}
            label={l.label}
            className={pathname === l.href ? "active" : ""}
          >
            {l.label}
          </TransitionLink>
        ))}
      </div>

      <a href="mailto:joshpangilinan14@gmail.com" className="nav-contact">
        Let's talk ↗
      </a>
    </nav>
  );
}