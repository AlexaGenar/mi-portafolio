"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from 'lucide-react'
import { ModeToggle } from "../components/mode-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "../components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-xl font-bold">
          Inicio
        </Link>
        <ModeToggle />
      </div>
      <div className="max-w-7xl mx-auto relative">
        {/* Elementos decorativos de fondo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        
        {/* Título principal con gradiente */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Mis Proyectos
          </h1>
        </motion.div>
        
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Columna izquierda con foto y habilidades */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Foto con efectos visuales */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 transform -rotate-6 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt=""
                  width={450}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Elementos decorativos alrededor de la foto */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
            </div>
            
            {/* Tarjeta de habilidades */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 bg-white shadow-lg rounded-xl p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Génesis Gómez</h2>
              <p className="text-lg bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium">
                Front End Engineer
              </p>
              
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Estos proyectos representan mi experiencia y capacidades técnicas en el desarrollo
                  front-end. Cada proyecto demuestra diferentes habilidades y tecnologías.
                </p>
                
                <p className="text-gray-600">
                  Mi enfoque es crear aplicaciones que no sólo funcionen bien sino
                  que también ofrezcan una experiencia de usuario excepcional.
                </p>
              </div>
              
              
            </motion.div>
          </motion.div>
          
          {/* Columna derecha con proyectos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-2xl font-light leading-relaxed text-gray-600">
                Una <span className="font-medium text-pink-500">selección de proyectos</span> en los 
                que he trabajado, mostrando mis <span className="font-medium text-purple-500">habilidades 
                y experiencia</span>.
              </p>
            </div>
            
            {/* Grid de tarjetas de proyectos */}
            <div className="grid gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <ProjectCard
                  title="E-commerce Moderno"
                  description="Tienda en línea con carrito de compras, autenticación de usuarios y pasarela de pagos."
                  image="/placeholder.svg?height=300&width=600"
                  technologies={["Next.js", "TypeScript", "Tailwind CSS", "Stripe"]}
                  demoUrl="https://ejemplo.com"
                  repoUrl="https://github.com/usuario/proyecto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <ProjectCard
                  title="Dashboard Analítico"
                  description="Panel de control para visualización de datos con gráficos interactivos y filtros avanzados."
                  image="/placeholder.svg?height=300&width=600"
                  technologies={["React", "TypeScript", "D3.js", "Material UI"]}
                  demoUrl="https://ejemplo.com"
                  repoUrl="https://github.com/usuario/proyecto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <ProjectCard
                  title="Aplicación de Tareas"
                  description="Aplicación para gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios."
                  image="/placeholder.svg?height=300&width=600"
                  technologies={["React", "Redux", "Firebase", "CSS Modules"]}
                  demoUrl="https://ejemplo.com"
                  repoUrl="https://github.com/usuario/proyecto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <ProjectCard
                  title="Portafolio Personal"
                  description="Sitio web personal para mostrar proyectos y experiencia profesional."
                  image="/placeholder.svg?height=300&width=600"
                  technologies={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                  demoUrl="https://ejemplo.com"
                  repoUrl="https://github.com/usuario/proyecto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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
    <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-pink-800 border border-pink-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild size="sm" variant="outline" className="bg-white hover:bg-gray-50 border-gray-200">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
        <Button asChild size="sm" variant="outline" className="bg-white hover:bg-gray-50 border-gray-200">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}