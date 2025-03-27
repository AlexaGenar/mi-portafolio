"use client"

import Image from "next/image"
import Link from "next/link" 
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react' 
import { ModeToggle } from "../components/mode-toggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
       <div className="flex justify-between items-center mb-8">
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
          className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        
        {/* Título principal con gradiente */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Sobre mí
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
                Front End Engineer
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Desarrollo de interfaces modernas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Optimización de rendimiento web</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Diseño responsive y accesible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Integración de APIs y servicios</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
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
          
          {/* Columna derecha con texto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
                Soy una <span className="font-medium text-pink-500">desarrolladora Front End</span> apasionada 
                por crear experiencias digitales que combinan <span className="font-medium text-purple-500">diseño 
                atractivo</span> con <span className="font-medium text-pink-500">funcionalidad intuitiva</span>.
              </p>
              
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Mi enfoque se centra en construir interfaces que no solo se vean bien, 
                sino que también sean accesibles, rápidas y fáciles de usar. Me encanta 
                experimentar con nuevas tecnologías y encontrar soluciones creativas a 
                problemas complejos.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                Cuando no estoy codificando, me encontrarás explorando nuevos lugares, 
                leyendo sobre diseño y tecnología, o aprendiendo nuevas habilidades para 
                seguir creciendo profesionalmente.
              </p>
            </div>
            
            {/* Contenido adicional sobre mí */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-50 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Mi ética profesional</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creo firmemente en la importancia de la <span className="font-medium text-pink-500">colaboración</span> y 
                la <span className="font-medium text-purple-500">comunicación clara</span> durante todo el proceso de desarrollo.
                Mi objetivo es crear productos digitales que no solo cumplan con los requisitos técnicos, 
                sino que también proporcionen una experiencia excepcional para los usuarios finales.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Actividades personales</h3>
              <p className="text-gray-600 dark:text-gray-300">
                En mi tiempo libre disfruto de mi familia, los viajes y los deportes como voleibol. 
                Estas actividades me ayudan a mantener una perspectiva fresca 
                y creativa que llevo a mis proyectos profesionales.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}