import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCertificate, FaUsers } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from './animations';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-pink-25 to-amber-25 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-amber-100 to-transparent rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            <span className="text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text">
              Sobre el
            </span>{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
              Curso
            </span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 mb-16 leading-relaxed max-w-4xl mx-auto font-light"
          >
            Nuestro curso de{" "}
            <span className="font-semibold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">
              Pastelería Creativa
            </span>{" "}
            está diseñado para transformar tu amor por los postres en una habilidad profesional. 
            Aprenderás desde las técnicas básicas hasta las más avanzadas decoraciones, 
            trabajando con ingredientes premium y herramientas profesionales.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-amber-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <FaUser className="text-5xl text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4 relative z-10">Instructores Expertos</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Aprende de chefs pasteleros con más de 15 años de experiencia en repostería artesanal
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-pink-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <FaCertificate className="text-5xl text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4 relative z-10">Certificación Oficial</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Obtén tu certificado profesional avalado por la Asociación de Pasteleros Creativos
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-purple-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <FaUsers className="text-5xl text-transparent bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4 relative z-10">Clases Personalizadas</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Grupos reducidos de máximo 8 personas para una atención completamente personalizada
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;