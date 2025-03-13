"use client"

import Link from "next/link"
//import { usePathname } from "next/navigation"
//import { cn } from "@/lib/utils"
import { useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
//import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"



export default function Navbar() {
  //const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>

      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>
    </nav>
  )
}

