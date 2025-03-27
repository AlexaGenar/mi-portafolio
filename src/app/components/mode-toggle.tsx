"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Manejar hidratación
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleTheme = () => {
    console.log("Toggle theme clicked, current theme:", theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-200 rounded-full"></div>
  }
  
  return (
    <div className="relative z-50 pointer-events-auto">
      <button
        onClick={toggleTheme}
        className="relative w-12 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 flex items-center transition-colors cursor-pointer"
        style={{ zIndex: 9999 }}
        aria-label="Toggle theme"
        type="button"
      >
        {/* Círculo deslizante */}
        <div 
          className={`
            absolute left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300
            flex items-center justify-center
            ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
          `}
        >
          {/* Iconos dentro del círculo */}
          <Sun className={`h-3 w-3 text-yellow-500 absolute transition-opacity duration-200 ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
          <Moon className={`h-3 w-3 text-slate-700 absolute transition-opacity duration-200 ${theme === "light" ? "opacity-100" : "opacity-0"}`} />
        </div>
      </button>
    </div>
  )
}