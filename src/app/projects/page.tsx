import Image from "next/image"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
 from "@/app/components/ui/card"
import { Button } from "../components/ui/button"
import { Badge, ExternalLink, Github } from "lucide-react"
import { ModeToggle } from "../components/mode-toggle"


export default function ProjectsPage() {
  return (
    <div className="space-y-8">
       <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>
        <ModeToggle />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Mis Proyectos</h1>
        <p className="text-lg text-muted-foreground">
          Una selección de proyectos en los que he trabajado, mostrando mis habilidades y experiencia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="E-commerce Moderno"
          description="Tienda en línea con carrito de compras, autenticación de usuarios y pasarela de pagos."
          image="/placeholder.svg?height=300&width=600"
          technologies={["Next.js", "TypeScript", "Tailwind CSS", "Stripe"]}
          demoUrl="https://ejemplo.com"
          repoUrl="https://github.com/usuario/proyecto"
        />

        <ProjectCard
          title="Dashboard Analítico"
          description="Panel de control para visualización de datos con gráficos interactivos y filtros avanzados."
          image="/placeholder.svg?height=300&width=600"
          technologies={["React", "TypeScript", "D3.js", "Material UI"]}
          demoUrl="https://ejemplo.com"
          repoUrl="https://github.com/usuario/proyecto"
        />

        <ProjectCard
          title="Aplicación de Tareas"
          description="Aplicación para gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios."
          image="/placeholder.svg?height=300&width=600"
          technologies={["React", "Redux", "Firebase", "CSS Modules"]}
          demoUrl="https://ejemplo.com"
          repoUrl="https://github.com/usuario/proyecto"
        />

        <ProjectCard
          title="Portafolio Personal"
          description="Sitio web personal para mostrar proyectos y experiencia profesional."
          image="/placeholder.svg?height=300&width=600"
          technologies={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
          demoUrl="https://ejemplo.com"
          repoUrl="https://github.com/usuario/proyecto"
        />
      </div>

      <div className="flex justify-center pt-8">
        <Button asChild>
          <Link href="/curriculum">Ver mi currículum</Link>
        </Button>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  repoUrl,
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  repoUrl: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild size="sm" variant="outline">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

