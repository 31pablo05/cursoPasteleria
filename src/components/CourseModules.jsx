import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaPalette, FaMagic, FaGem } from 'react-icons/fa';

const CourseModules = () => {
  const modules = [
    {
      title: "Fundamentos de Pastelería",
      description: "Aprende las bases técnicas, ingredientes esenciales y equipamiento profesional. Domina las masas básicas y técnicas fundamentales.",
      icon: <FaPalette />,
      weeks: "Semanas 1-2",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Técnicas de Decoración",
      description: "Domina el arte del decorado con cremas, fondant y técnicas de glaseado. Crea diseños únicos y profesionales.",
      icon: <FaMagic />,
      weeks: "Semanas 3-4",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Repostería Artística",
      description: "Crea obras maestras comestibles con técnicas avanzadas de modelado. Desarrolla tu estilo artístico único.",
      icon: <FaGem />,
      weeks: "Semanas 5-6",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section id="modules" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-30"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 bg-gradient-to-r from-blue-100 to-transparent rounded-full opacity-20"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text">
            Módulos del
          </span>{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
            Curso
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative overflow-hidden"
            >
              {/* Background card with gradient */}
              <div className={`bg-gradient-to-br ${module.bgColor} p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                
                {/* Animated background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating icon with enhanced animation */}
                <motion.div
                  className="relative z-10 mb-6 sm:mb-8"
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.2,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                >
                  <div className={`text-4xl sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r ${module.color} bg-clip-text mx-auto mb-4 sm:mb-6 relative`}>
                    {module.icon}
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${module.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  </div>
                </motion.div>

                {/* Week badge with animation */}
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className={`inline-block bg-gradient-to-r ${module.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg relative z-10`}
                >
                  {module.weeks}
                </motion.span>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  {module.description}
                </p>

                {/* Decorative corner elements */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-2 border-current opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-2 border-current opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* External glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12 sm:mt-14 lg:mt-16"
        >
          <Link
            to="contact"
            smooth={true}
            duration={800}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ¡Inscríbete Ahora! 🎂
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseModules;