"use client"

import { motion } from "framer-motion"
import { ModeToggle } from "./components/mode-toggle"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-xl font-bold no-underline">
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
            Génesis Gómez
          </h1>
          <p className="text-2xl mt-2 font-light tracking-tight text-gray-600">
            Front End Engineer
          </p>
        </motion.div>
        
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Columna izquierda con información */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl font-light leading-relaxed text-gray-600">
                Bienvenido a mi <span className="font-medium text-pink-500">portafolio profesional</span>. 
                Soy una desarrolladora enfocada en construir
                <span className="font-medium text-purple-500"> aplicaciones web</span> que sean
                tan <span className="font-medium text-pink-500">hermosas como eficientes</span>.
              </p>
              
              <p className="mt-6">
                Mi pasión es crear experiencias digitales que no solo se vean bien,
                sino que también sean intuitivas, accesibles y optimizadas para el rendimiento.
                Siempre estoy aprendiendo nuevas tecnologías y metodologías para mejorar
                mis habilidades y ofrecer soluciones innovadoras.
              </p>
            </div>
            
            {/* Navegación principal como enlaces idénticos a la imagen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Explora mi trabajo</h3>
              
              {/* Contenedor centrado para los botones */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start ml-10">
                <a 
                  href="/about" 
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-4 px-8 rounded-full shadow-md transition-all duration-300 w-48 text-center no-underline z-10 relative"
                >
                  Sobre mí
                </a>
                <a 
                  href="/experience" 
                  className="inline-block bg-white text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                >
                  Experiencia
                </a>
                <a 
                  href="/projects" 
                  className="inline-block bg-white text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                >
                  Proyectos
                </a>
                <a 
                  href="/curriculum" 
                  className="inline-block bg-white text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                >
                  Curriculum
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Columna derecha con foto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Foto con efectos visuales */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 transform -rotate-6 rounded-full" />
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64 mx-auto">
                {/* Usamos un div con gradiente en lugar de una imagen que no existe */}
                <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
                  <span className="text-white text-opacity-30 text-4xl font-light">GG</span>
                </div>
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
            
            {/* Tarjeta de tecnologías */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-16 bg-white shadow-lg rounded-xl p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologías Favoritas</h3>
              
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "GraphQL"].map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-pink-700 border border-pink-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}