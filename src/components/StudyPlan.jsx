import React from 'react';
import { motion } from 'framer-motion';

const StudyPlan = () => {
  const steps = [
    { title: "Evaluación inicial", description: "Conocemos tu nivel y expectativas" },
    { title: "Técnicas básicas", description: "Fundamentos de masas y cremas" },
    { title: "Decoración creativa", description: "Desarrollo de tu estilo único" },
    { title: "Proyecto final", description: "Creación de tu obra maestra" }
  ];

  return (
    <section id="plan" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-amber-800 mb-12 sm:mb-14 lg:mb-16"
        >
          Plan de <span className="text-pink-600">Estudio</span>
        </motion.h2>

        {/* Mobile and Tablet Layout */}
        <div className="block lg:hidden max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-8 sm:mb-10"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 sm:h-20 bg-pink-200"></div>
              )}
              
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Step number */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full text-lg sm:text-xl font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-pink-50 to-rose-50 p-4 sm:p-6 rounded-xl border border-pink-100">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-pink-200"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content side */}
                <div className="flex-1 px-8">
                  <div className={`bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg border border-pink-100 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl xl:text-3xl font-bold text-amber-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Central step indicator */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full text-2xl font-bold shadow-xl z-10">
                  {index + 1}
                </div>
                
                {/* Empty side for spacing */}
                <div className="flex-1 px-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyPlan;