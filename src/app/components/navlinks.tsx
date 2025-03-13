"use client"

import Link from "next/link"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Curriculum", href: "/curriculum" },
]

export function NavLinks() {
  return (
    <div className="space-y-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <span className="inline-block w-6 h-px bg-current"></span>
          <span className="font-medium">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}
