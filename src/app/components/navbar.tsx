"use client"

import Link from "next/link"
import { useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between py-4 px-6 relative z-40">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}