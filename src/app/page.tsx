"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ModeToggle } from "./components/mode-toggle"
import ContactModal from "./components/contact/modal"


export default function HomePage() {
  const [openContact, setOpenContact] = useState(false)

  return (
    <>
      
      <ContactModal open={openContact} onOpenChange={setOpenContact} />

      <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Link href="/" className="text-xl font-bold no-underline text-gray-900 dark:text-white">
            Inicio
          </Link>
          <ModeToggle />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Fondos decorativos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          />

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Génesis Gómez
            </h1>
            <p className="text-2xl mt-2 font-light tracking-tight text-gray-600 dark:text-gray-300">
              Frontend Developer
            </p>
          </motion.div>

          {/* Grid principal */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Columna izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
                  Bienvenido a mi <span className="font-medium text-pink-500">portafolio profesional</span>.
                  Soy una desarrolladora enfocada en construir
                  <span className="font-medium text-purple-500"> aplicaciones web</span> que sean
                  tan <span className="font-medium text-pink-500">hermosas como eficientes</span>.
                </p>
                <p className="mt-6 text-gray-700 dark:text-gray-300">
                  Mi pasión es crear experiencias digitales que no solo se vean bien,
                  sino que también sean intuitivas, accesibles y optimizadas para el rendimiento.
                  Siempre estoy aprendiendo nuevas tecnologías y metodologías para mejorar
                  mis habilidades y ofrecer soluciones innovadoras.
                </p>
              </div>

              {/* Botones de navegación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Explora mi trabajo</h3>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start lg:ml-10">
                  <a
                    href="/about"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-4 px-8 rounded-full shadow-md transition-all duration-300 w-48 text-center no-underline z-10 relative"
                  >
                    Sobre mí
                  </a>
                  <a
                    href="/experience"
                    className="inline-block bg-white dark:bg-gray-800 text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 dark:border-pink-800 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                  >
                    Experiencia
                  </a>
                  <a
                    href="/projects"
                    className="inline-block bg-white dark:bg-gray-800 text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 dark:border-pink-800 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                  >
                    Proyectos
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-block bg-white dark:bg-gray-800 text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 dark:border-pink-800 transition-all duration-300 w-48 text-center no-underline z-10 relative"
                  >
                    Descargar CV
                  </a>
                  <button
                    onClick={() => setOpenContact(true)}
                    className="inline-block cursor-pointer bg-white dark:bg-gray-800 text-pink-500 font-medium py-4 px-8 rounded-full shadow-md border border-pink-200 dark:border-pink-800 transition-all duration-300 w-48 text-center z-10 relative"
                  >
                    Contáctame
                  </button>
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-300 dark:to-purple-400 transform -rotate-6 rounded-full" />
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl w-64 h-64 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
                    <span className="text-white text-opacity-30 text-4xl font-light">GG</span>
                  </div>
                </div>

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

              {/* Tecnologías favoritas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-16 mx-auto max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tecnologías Favoritas</h3>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Node.js",
                    "GraphQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 text-pink-700 dark:text-pink-300 border border-pink-100 dark:border-pink-800"
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
    </>
  )
}
