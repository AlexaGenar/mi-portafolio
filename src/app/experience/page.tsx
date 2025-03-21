"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'
import { ModeToggle } from "../components/mode-toggle"

const experiences = [
  {
    year: "2025 - Presente",
    title: "Front End Engineer",
    company: "Empresa Tecnológica",
    description: "Desarrollo de aplicaciones web utilizando React, TypeScript y Next.js."
  },
  {
    year: "2020 - 2022",
    title: "Desarrolladora Web",
    company: "Agencia Digital",
    description: "Creación de sitios web para diversos clientes utilizando HTML, CSS y JavaScript."
  },
  {
    year: "2019 - 2020",
    title: "Practicante de Desarrollo",
    company: "Startup Innovadora",
    description: "Apoyo en el desarrollo de componentes de interfaz de usuario."
  }
]

export default function ExperiencePage() {
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
            Experiencia
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
                  alt="Génesis Gómez"
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
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Desarrollo de interfaces modernas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Optimización de rendimiento web</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Diseño responsive y accesible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Integración de APIs y servicios</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Columna derecha con texto y timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl font-light leading-relaxed text-gray-600">
                Mi <span className="font-medium text-pink-500">trayectoria profesional</span> en el 
                desarrollo Front End y <span className="font-medium text-purple-500">proyectos 
                destacados</span>.
              </p>
            </div>
            
            {/* Timeline de experiencia */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-8">Mi Trayectoria Profesional</h3>
              
              <div className="relative border-l-2 border-gray-200 pl-10 ml-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                    className="mb-10 relative"
                  >
                    <div className="absolute -left-16 mt-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{2025 - index}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-50">
                      <span className="text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {experience.year}
                      </span>
                      <h4 className="text-lg font-bold mt-1">{experience.title}</h4>
                      <p className="text-gray-600">{experience.company}</p>
                      <p className="mt-2 text-gray-500">{experience.description}</p>
                      
                      {/* Tecnologías usadas en cada experiencia */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {index === 0 && (
                          ["React", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {tech}
                            </span>
                          ))
                        )}
                        {index === 1 && (
                          ["HTML", "CSS", "JavaScript", "WordPress"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {tech}
                            </span>
                          ))
                        )}
                        {index === 2 && (
                          ["HTML", "CSS", "JavaScript", "jQuery"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {tech}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Botón de proyectos con movimiento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}