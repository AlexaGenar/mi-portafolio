import Link from "next/link"
import { ExperienceCard } from "../components/experiencie/experiecie"
import { ModeToggle } from "../components/mode-toggle"


export default function ExperiencePage() {
  return (
    <div className="space-y-8">
       <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>
        <ModeToggle />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Experiencia Profesional</h1>
        <p className="text-lg text-gray-600">
          Mi trayectoria profesional en el desarrollo Front End y proyectos destacados.
        </p>
      </div>
      <div className="space-y-6">
        <ExperienceCard
          title="Front End Engineer"
          company="Empresa Tecnológica"
          period="2022 - Presente"
          description="Desarrollo de aplicaciones web utilizando React, TypeScript y Next.js. Implementación de interfaces de usuario responsivas y accesibles siguiendo las mejores prácticas de desarrollo."
          technologies={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
        />
        <ExperienceCard
          title="Desarrolladora Web"
          company="Agencia Digital"
          period="2020 - 2022"
          description="Creación de sitios web para diversos clientes utilizando HTML, CSS y JavaScript. Colaboración con diseñadores para implementar interfaces atractivas y funcionales."
          technologies={["HTML", "CSS", "JavaScript", "WordPress"]}
        />
        <ExperienceCard
          title="Practicante de Desarrollo"
          company="Startup Innovadora"
          period="2019 - 2020"
          description="Apoyo en el desarrollo de componentes de interfaz de usuario y corrección de errores en aplicaciones web existentes."
          technologies={["HTML", "CSS", "JavaScript", "jQuery"]}
        />
      </div>
      <div className="flex justify-center pt-8">
        <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Ver mis proyectos
        </Link>
      </div>
    </div>
  )
}