"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ThemeTest() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Importante para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  return (
    <div className="p-4 border rounded mt-4">
      <p>Tema actual: <strong>{theme}</strong></p>
      <div className="mt-2 flex gap-2">
        <button 
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button 
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button 
          className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme("system")}
        >
          System
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Este es un componente de prueba para verificar si next-themes está funcionando correctamente.
      </p>
    </div>
  )
}