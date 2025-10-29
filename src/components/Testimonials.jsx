import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante graduada",
      content: "Este curso cambió mi vida completamente. Ahora tengo mi propia pastelería y mis creaciones son reconocidas en toda la ciudad. ¡Increíble experiencia!",
      rating: 5,
      image: "MG",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      name: "Carlos Rodríguez",
      role: "Chef profesional",
      content: "Las técnicas que aprendí aquí elevaron mi carrera culinaria a un nivel completamente nuevo. Los instructores son excepcionales y el contenido es de primer nivel.",
      rating: 5,
      image: "CR",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora",
      content: "Comenzé como hobby y terminé abriendo mi negocio. Los instructores son excepcionales, el ambiente es perfecto y ahora soy una chef pastelera certificada.",
      rating: 5,
      image: "AM",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-pink-25 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-200 to-transparent rounded-full opacity-20"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-15"
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
          <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            Lo que dicen
          </span>
          <br />
          <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
            nuestros Estudiantes
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              {/* Card container */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden">
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Stars rating */}
                <motion.div 
                  className="flex mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <FaStar className="text-yellow-400 text-2xl mx-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote content */}
                <motion.p 
                  className="text-gray-700 mb-8 text-lg leading-relaxed italic relative z-10 group-hover:text-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  <span className="text-4xl text-pink-300 absolute -top-2 -left-2">"</span>
                  {testimonial.content}
                  <span className="text-4xl text-pink-300 absolute -bottom-4 -right-2">"</span>
                </motion.p>

                {/* Author info */}
                <motion.div 
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  {/* Avatar */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.image}
                  </motion.div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl group-hover:text-gray-900 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className={`text-transparent bg-gradient-to-r ${testimonial.gradient} bg-clip-text font-semibold`}>
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-pink-200 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              {/* External glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="flex justify-center gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                <FaStar className="text-yellow-400 text-3xl" />
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-gray-700 font-semibold">
            ¡Únete a más de{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text font-bold">
              200+ estudiantes satisfechos!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;