"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'
import { ModeToggle } from "../components/mode-toggle"

const experiences = [
  {
    year: "Presente",
    title: "Estudiante de Cuarto Año",
    company: "Universidad Nacional",
    description: "Cursando el cuarto año de la carrera de Ingeniería Informática con especialización en desarrollo web."
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
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
          className="absolute -top-24 -right-24 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-300 dark:to-purple-400 transform -rotate-6 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
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
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200 dark:bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 dark:bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
            </div>
            
            {/* Tarjeta de habilidades */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Génesis Gómez</h2>
              <p className="text-lg bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-medium">
                Estudiante de Ingeniería Informática
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Desarrollo web front-end</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Diseño de experiencia de usuario</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Investigación académica</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Trabajo en equipo y liderazgo</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["HTML/CSS", "JavaScript", "React", "Figma", "Git"].map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 text-center sm:text-left">
                Mi <span className="font-medium text-pink-500">recorrido académico</span> y 
                <span className="font-medium text-purple-500"> experiencias formativas</span> que han 
                moldeado mi perfil profesional en desarrollo.
              </p>
            </div>
            
            {/* Timeline de experiencia */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Mi Trayectoria Académica</h3>
              
              <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6 sm:pl-10 ml-4 sm:ml-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                    className="mb-10 relative"
                  >
                    <div className="absolute -left-16 mt-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{2025 - index}</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-50 dark:border-gray-700">
                      <span className="text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {experience.year}
                      </span>
                      <h4 className="text-lg font-bold mt-1 text-gray-900 dark:text-white">{experience.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                      <p className="mt-2 text-gray-500 dark:text-gray-400">{experience.description}</p>
                      
                      {/* Tecnologías usadas en cada experiencia */}
                      <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                        {index === 0 && (
                          ["Algoritmos", "Bases de Datos", "Desarrollo Web"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                              {tech}
                            </span>
                          ))
                        )}
                        {index === 1 && (
                          ["JavaScript", "React", "Node.js", "Metodología de Investigación"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                              {tech}
                            </span>
                          ))
                        )}
                        {index === 2 && (
                          ["HTML", "CSS", "WordPress", "UI/UX"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}