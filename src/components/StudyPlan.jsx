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
    <section id="plan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16"
        >
          Plan de <span className="text-pink-600">Estudio</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="flex-1 px-8">
                <div className={`text-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-400 text-white rounded-full text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
              
              <div className="w-1 h-24 bg-pink-200 hidden md:block"></div>
              
              <div className="flex-1 px-8"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyPlan;