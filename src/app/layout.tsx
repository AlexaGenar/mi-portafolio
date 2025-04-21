import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { SocialLinks } from "./components/social-links"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Génesis Gómez | Frontend Developer",
  description: "Portfolio personal de Génesis Gómez, Front End Engineer",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
             <div className="container mx-auto px-4">
             {children}
             </div>
            </div>
            <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4 flex justify-center">
                <SocialLinks />
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}