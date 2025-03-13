"use client"

import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "../components/mode-toggle"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>
        <ModeToggle />
      </div>
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <Image src="/placeholder.svg?height=256&width=256" alt="Génesis Gómez" fill className="object-cover" />
          </div>
          <div className="space-y-4 flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">Sobre mí</h1>
            <p className="text-lg text-muted-foreground">
              Soy una desarrolladora Front End apasionada por crear experiencias web atractivas y funcionales. Con un
              enfoque en la usabilidad y el diseño centrado en el usuario, me especializo en construir interfaces modernas
              utilizando las últimas tecnologías web.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <h2 className="text-2xl font-semibold">Mi historia</h2>
          <p>
            Mi viaje en el desarrollo web comenzó hace X años cuando descubrí mi pasión por combinar diseño y código.
            Desde entonces, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades y
            mantenerme actualizada con las tendencias de la industria.
          </p>
          <p>
            Me encanta resolver problemas complejos y transformar ideas en experiencias digitales intuitivas. Creo
            firmemente en la importancia de la accesibilidad web y en crear productos que sean inclusivos para todos los
            usuarios.
          </p>
        </div>
      </div>
    </div>
  )
}