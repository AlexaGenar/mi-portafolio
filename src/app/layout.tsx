// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { SocialLinks } from "./components/social-links"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Génesis Gómez | Front End Engineer",
  description: "Portfolio personal de Génesis Gómez, Front End Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
              {children}
            </div>
            <footer className="py-6 border-t">
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