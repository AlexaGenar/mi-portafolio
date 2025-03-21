"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItemProps {
  href: string
  children: ReactNode
}

export function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className="group flex items-center py-1">
      <motion.div
        className="flex items-center"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <motion.span
          className={cn("block h-px bg-gray-800 mr-2", isActive ? "w-6" : "w-4")}
          initial={{ width: isActive ? 24 : 16 }}
          whileHover={{ width: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.span
          className={cn(
            "text-base font-medium text-black",
            isActive ? "font-semibold" : ""
          )}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Link>
  )
}