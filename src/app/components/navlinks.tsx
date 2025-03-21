"use client"

import { NavItem } from "./ui/nav-item"

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
        <NavItem key={item.href} href={item.href}>
          {item.name}
        </NavItem>
      ))}
    </div>
  )
}