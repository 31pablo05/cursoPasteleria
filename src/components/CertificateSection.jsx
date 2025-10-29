import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaMedal, FaTrophy, FaCheckCircle } from 'react-icons/fa';

const CertificateSection = () => {
  const certificationFeatures = [
    {
      icon: FaCertificate,
      title: "Certificación Oficial",
      description: "Certificado reconocido por la industria culinaria nacional",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: FaAward,
      title: "Avalado por Expertos",
      description: "Respaldado por chefs profesionales y pasteleros reconocidos",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: FaMedal,
      title: "Validez Internacional",
      description: "Certificación válida en múltiples países y establecimientos",
      color: "from-green-400 to-teal-500"
    }
  ];

  const requirements = [
    "Completar todos los módulos del curso",
    "Realizar las prácticas evaluatorias",
    "Presentar proyecto final",
    "Obtener calificación mínima del 80%",
    "Asistir a las sesiones en vivo"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-purple-400/15 to-pink-400/15 rounded-full"
          animate={{ rotate: -360, y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTrophy className="text-8xl text-yellow-400 mx-auto mb-6" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              Obtén tu
            </span>
            <br />
            <span className="text-white">
              Certificación Profesional
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Al completar nuestro curso, recibirás una certificación oficial que 
            <span className="text-yellow-400 font-semibold"> validará tus habilidades </span>
            como pastelero profesional ante empleadores y clientes
          </p>
        </motion.div>

        {/* Certification features */}
        <div className="grid md:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
          {certificationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className={`text-6xl mx-auto mb-6 text-transparent bg-gradient-to-r ${feature.color} bg-clip-text`} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate preview and requirements */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Certificate mockup */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gradient-to-br from-white to-gray-100 p-12 rounded-3xl shadow-2xl border-8 border-yellow-400 relative overflow-hidden"
            >
              {/* Certificate decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-4 border-yellow-400 rounded-full" />
              <div className="absolute top-4 right-4 w-12 h-12 border-4 border-yellow-400 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-yellow-400 rounded-full" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-yellow-400 rounded-full" />
              
              <div className="text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCertificate className="text-6xl text-yellow-500 mx-auto mb-6" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  CERTIFICADO PROFESIONAL
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  en Pastelería y Repostería Avanzada
                </p>
                
                <div className="border-t-2 border-gray-300 pt-6">
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    [Tu Nombre Aquí]
                  </p>
                  <p className="text-gray-600 mb-4">
                    Ha completado satisfactoriamente el programa de certificación
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Fecha: [Fecha]</span>
                    <span>ID: [Número]</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold text-white mb-8">
              Requisitos para la
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text"> Certificación</span>
            </h3>
            
            <div className="space-y-6">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCheckCircle className="text-green-400 text-2xl flex-shrink-0" />
                  </motion.div>
                  <p className="text-white text-lg font-medium">
                    {requirement}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl border border-yellow-400/30"
            >
              <div className="text-center">
                <FaMedal className="text-5xl text-yellow-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-4">
                  ¡Tu Futuro Profesional Te Espera!
                </h4>
                <p className="text-gray-300 text-lg">
                  Esta certificación te abrirá las puertas a nuevas oportunidades 
                  laborales y te permitirá destacar en la industria culinaria
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;