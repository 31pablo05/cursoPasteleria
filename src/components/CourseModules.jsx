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
    <section id="modules" className="py-24 bg-gradient-to-b from-white via-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-30"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-100 to-transparent rounded-full opacity-20"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-20"
        >
          <span className="text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text">
            Módulos del
          </span>{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
            Curso
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
              <div className={`bg-gradient-to-br ${module.bgColor} p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                
                {/* Animated background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating icon with enhanced animation */}
                <motion.div
                  className="relative z-10 mb-8"
                  whileHover={{ 
                    rotate: 360, 
                    scale: 1.2,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                >
                  <div className={`text-6xl text-transparent bg-gradient-to-r ${module.color} bg-clip-text mx-auto mb-6 relative`}>
                    {module.icon}
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${module.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  </div>
                </motion.div>

                {/* Week badge with animation */}
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className={`inline-block bg-gradient-to-r ${module.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg relative z-10`}
                >
                  {module.weeks}
                </motion.span>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  {module.description}
                </p>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-current opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-current opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* External glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="contact"
            smooth={true}
            duration={800}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
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