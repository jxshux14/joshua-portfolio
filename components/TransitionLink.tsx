"use client";

import Link from "next/link";
import { useTransitionNav } from "./TransitionProvider";

export default function TransitionLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const go = useTransitionNav();

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        go(href, label);
      }}
    >
      {children}
    </Link>
  );
}