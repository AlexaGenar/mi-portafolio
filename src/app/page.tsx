// app/page.tsx
"use client"

import Link from "next/link"
import { ModeToggle } from "./components/mode-toggle"
import { NavLinks } from "./components/navlinks"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 dark:from-pink-800 dark:to-pink-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-2">
          <Link href="/" className="text-xl font-bold">
            Inicio
          </Link>
          <ModeToggle />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="md:w-1/2">
            <div className="mb-12">
              <h1 className="text-3xl font-bold">Génesis Gómez</h1>
              <h2 className="text-xl mb-1">Front End Engineer</h2>
              <p className="text-sm">Una pequeña frase</p>
            </div>
            
            <NavLinks />
         
          </div>
          
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 rounded-full bg-gray-200 border-4 border-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}