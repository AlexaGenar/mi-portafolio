"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ModeToggle } from "../components/mode-toggle"
import ProjectCard from "../components/projects/projectsCard"



export default function ProjectsPage() {
  
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
                <p className="text-gray-600 dark:text-gray-300">
                  Estos proyectos representan mi experiencia y capacidades técnicas en el desarrollo
                  front-end. Cada proyecto demuestra diferentes habilidades y tecnologías.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
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
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
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
                  title="SAD-Municipal"
                  description= {
                  <> 
                  <p>La Municipalidad de Nandayure, en el área de Recursos Humanos, gestionaba todas sus actividades de forma manual utilizando papel. 
                  Para mejorar la eficiencia y organización, se desarrolló un sistema de gestión que permite ordenar diversas solicitudes, como vacaciones, boletas de pago y constancias salariales.
                  Además, el sistema facilita la gestión de documentos y la automatización de procesos administrativos. </p>
                    <p>Mi contribución al proyecto fue en el área del front-end, donde me encargué de diseñar e implementar las interfaces de usuario de los distintos módulos, como la gestión de solicitudes y documentos. Mi enfoque estuvo en garantizar la usabilidad y accesibilidad del sistema para los usuarios finales dentro de la municipalidad.</p> 
                       <p>El sistema fue desarrollado utilizando tecnologías modernas de desarrollo web, como Next.js, React y Tailwind CSS, para garantizar una interfaz de usuario dinámica, atractiva y eficiente. Estas tecnologías permiten una experiencia de usuario fluida y un diseño responsivo adecuado para los requerimientos de la municipalidad.</p> 
                       </>
                       }
                  image="/sad_municipal.png"
                  technologies={["Next.js", "TypeScript", "Tailwind CSS", "React", "MySQL", "Nest.js"]}
                  demoUrl="https://rrhh-nandayure.vercel.app/auth/login"
                  repoUrl="https://github.com/JosePabloSG/NandayureFrontend.git"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <ProjectCard
                  title="Innovacion y Conocimiento"
                  description={
                    <>
                      <p>
                        El proyecto consiste en el diseño e implementación de una base de datos para una universidad ficticia llamada Universidad Innovación y Conocimiento.
                        La base de datos tiene como objetivo gestionar la información académica y administrativa de la universidad, incluyendo datos de estudiantes, cursos, inscripciones, calificaciones, recursos académicos y reportes estadísticos.
                      </p>
                      <ul>
                        <li><strong>Mejora en la Gestión Académica</strong> </li>
                        <li><strong>Optimización de Recursos Académicos</strong> </li>
                        <li><strong>Datos Precisos para la Toma de Decisiones</strong> </li>
                        <li><strong>Planificación Efectiva</strong> </li>
                      </ul>
                      <p>Mi contribución al proyecto fue en el área del front-end, donde me encargué principalmente del diseño y la implementación de la interfaz de usuario, asegurando que fuera fácil de usar y eficiente. Además, contribuyó significativamente en el diseño y la implementación de la base de datos, asegurando que esta cumpliera con los requisitos necesarios para una correcta gestión de la información académica y administrativa de la universidad.</p>
                      <p>El sistema fue desarrollado utilizando tecnologías modernas de desarrollo web, como <strong>Next.js</strong>, <strong>React</strong> y <strong>Tailwind CSS</strong>, para garantizar una interfaz de usuario dinámica, atractiva y eficiente. Estas tecnologías permiten una experiencia de usuario fluida y un diseño responsivo adecuado para los requerimientos de la universidad.</p>
                    </>
                  }
                  image="/inv.png"
                  technologies={["React", "TypeScript", "Tailwind CSS", "SQL Server"]}
                  demoUrl=""
                  repoUrl="https://github.com/JosePabloSG/Universidad-Innovacion-y-Conocimiento.git"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <ProjectCard
                  title="Alerta de Desbordamiento del Rio"
                  description= {
                    <> 
                    <p>Este proyecto fue desarrollado como trabajo final del curso de Arquitectura de Computadores (EIF205) 
                      en la Universidad Nacional de Costa Rica (UNA), bajo la guía del profesor Ing. Jose Abraham Benavides Vargas.
                       La aplicación tiene como objetivo detectar los niveles de un río y emitir alertas en caso de que se requiera una evacuación preventiva.
                       Los datos son recolectados mediante sensores conectados a un Arduino, que envía la información a una base de datos no relacional.
                       Estos datos son posteriormente enlazados y visualizados en una aplicación web que facilita el monitoreo en tiempo real.</p>
                      <p>La motivación del proyecto surge a raíz de la problemática de las inundaciones y desbordes de ríos en zonas rurales, como fue el caso de Aguas Zarcas. 
                        En este tipo de situaciones, las comunidades se ven expuestas a riesgos graves debido a fenómenos naturales como lluvias intensas, que pueden destruir viviendas y poner en peligro vidas humanas. 
                        El propósito principal de esta solución es brindar una herramienta de monitoreo accesible a estas comunidades para que puedan actuar de forma preventiva.</p> 
                         <p>Como estudiante, participé activamente en el desarrollo del prototipo físico utilizando Arduino, asegurándome de que los datos recolectados por los sensores fueran transmitidos 
                          correctamente hacia la aplicación web. También contribuí en la construcción de la maqueta del sistema y colaboré en el diseño de la interfaz de la página web.</p> 
                         </>
                         }
                  image="/arq.png"
                  technologies={["Html", "JavaScript","Css",  "Arduino UNO ", "Protoboard"]}
                  demoUrl="https://joseabh.github.io/AppAlertaRio/"
                  repoUrl="https://github.com/JoseABH/AppAlertaRio" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

