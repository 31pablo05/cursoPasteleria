import React from 'react';import React from 'react';

import Navigation from './components/Navigation';import Navigation from './components/Navigation';

import HeroSection from './components/HeroSection';import HeroSection from './components/HeroSection';

import AboutSection from './components/AboutSection';import AboutSection from './components/AboutSection';

import CourseModules from './components/CourseModules';import CourseModules from './components/CourseModules';

import StudyPlan from './components/StudyPlan';import StudyPlan from './components/StudyPlan';

import Testimonials from './components/Testimonials';import Testimonials from './components/Testimonials';

import CertificateSection from './components/CertificateSection';import CertificateSection from './components/CertificateSection';

import ContactSection from './components/ContactSection';import ContactSection from './components/ContactSection';

import Footer from './components/Footer';import Footer from './components/Footer';

import './App.css';import './App.css';



function App() {function App() {

  return (  return (

    <div className="App">    <div className="App">

      <Navigation />      <Navigation />

      <HeroSection />      <HeroSection />

      <AboutSection />      <AboutSection />

      <CourseModules />      <CourseModules />

      <StudyPlan />      <StudyPlan />

      <Testimonials />      <Testimonials />

      <CertificateSection />      <CertificateSection />

      <ContactSection />      <ContactSection />

      <Footer />      <Footer />

    </div>    </div>

  );  );

}}



export default App;export default App;

// Enhanced About Section Component
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

// Enhanced Course Modules Component
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

// Study Plan Component
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

// Enhanced Testimonials Component
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

// Certificate Demo Section Component
const CertificateSection = () => {
  return (
    <section id="certificate" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-100 to-transparent rounded-full opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-amber-100 to-transparent rounded-full opacity-30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text">
            Tu Certificado
          </span>{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
            Oficial
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="relative group cursor-pointer"
          >
            {/* Certificate mockup */}
            <div className="bg-gradient-to-br from-white via-cream-50 to-amber-25 p-12 md:p-16 rounded-3xl shadow-2xl border-8 border-gradient-to-r from-amber-300 to-yellow-400 relative overflow-hidden">
              {/* Decorative border elements */}
              <div className="absolute inset-0 border-4 border-amber-200 rounded-2xl m-4"></div>
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-amber-300 rounded-full"></div>
              <div className="absolute top-4 right-4 w-16 h-16 border-4 border-amber-300 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-amber-300 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-amber-300 rounded-full"></div>

              {/* Header */}
              <div className="text-center mb-8 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <FaAward className="text-6xl text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text mx-auto" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">CERTIFICADO DE FINALIZACIÓN</h3>
                <p className="text-lg text-amber-600 font-semibold">Pastelería Creativa Profesional</p>
              </div>

              {/* Main content */}
              <div className="text-center mb-8 relative z-10">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Se certifica que
                </p>
                <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-2xl mb-6">
                  <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
                    [Tu Nombre Aquí]
                  </h4>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  ha completado satisfactoriamente el curso de
                </p>
                <h5 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text mb-6">
                  PASTELERÍA CREATIVA PROFESIONAL
                </h5>
                <p className="text-gray-600">
                  Demostrando competencia en técnicas avanzadas de repostería,
                  decoración artística y presentación profesional
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end relative z-10">
                <div className="text-center">
                  <div className="border-t-2 border-amber-400 w-32 mb-2"></div>
                  <p className="text-sm text-gray-600 font-semibold">Chef Instructor</p>
                  <p className="text-xs text-gray-500">María Elena Pastrana</p>
                </div>
                
                <div className="text-center">
                  <FaShieldAlt className="text-4xl text-amber-500 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Certificación Oficial</p>
                </div>
                
                <div className="text-center">
                  <div className="border-t-2 border-amber-400 w-32 mb-2"></div>
                  <p className="text-sm text-gray-600 font-semibold">Fecha</p>
                  <p className="text-xs text-gray-500">Enero 2025</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-10">
                <FaGem className="text-6xl text-amber-400" />
              </div>
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10">
                <FaGem className="text-6xl text-amber-400" />
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-700 mb-6">
            Al completar el curso, recibirás un certificado oficial que acredita tus nuevas habilidades
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <FaCertificate className="text-amber-500" />
              <span className="font-semibold text-gray-700">Avalado Profesionalmente</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <FaAward className="text-pink-500" />
              <span className="font-semibold text-gray-700">Reconocimiento Nacional</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-lg">
              <FaShieldAlt className="text-purple-500" />
              <span className="font-semibold text-gray-700">Verificación Digital</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16"
        >
          ¡Comienza tu <span className="text-pink-600">Aventura</span> hoy!
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            {...fadeInLeft}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-green-500" />
                <span className="text-lg text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-pink-500" />
                <span className="text-lg text-gray-700">info@pasteleriacreativa.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaInstagram className="text-2xl text-purple-500" />
                <span className="text-lg text-gray-700">@pasteleriacreativa</span>
              </div>
              <div className="flex items-center gap-4">
                <FaFacebook className="text-2xl text-blue-500" />
                <span className="text-lg text-gray-700">Pastelería Creativa</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-2xl">
              <h4 className="text-xl font-bold text-amber-800 mb-4">Próxima Convocatoria</h4>
              <p className="text-gray-700 mb-4">
                <strong>Inicio:</strong> 15 de Noviembre, 2024<br />
                <strong>Modalidad:</strong> Presencial<br />
                <strong>Duración:</strong> 6 semanas<br />
                <strong>Horario:</strong> Martes y Jueves, 6:00 PM - 9:00 PM
              </p>
              <p className="text-pink-600 font-semibold">¡Cupos limitados disponibles!</p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInRight}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-pink-50 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Solicita más información</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Cuéntanos sobre tu experiencia en pastelería y expectativas del curso"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <FaGift className="text-4xl text-amber-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-amber-800">Pastelería Creativa</h3>
            <p className="text-gray-600 mt-2">Transformando pasiones en arte comestible</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            <a href="#" className="text-2xl text-green-500 hover:text-green-600 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-2xl text-purple-500 hover:text-purple-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl text-blue-500 hover:text-blue-600 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl text-pink-500 hover:text-pink-600 transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-pink-200 pt-8"
          >
            <p className="text-gray-600 mb-3">
              © 2024 Pastelería Creativa. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500">
              <span>Desarrollado con ❤️ por</span>
              <a 
                href="https://devcraftpablo.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-pink-600 hover:text-pink-700 transition-colors duration-300 hover:underline"
              >
                Pablo Proboste
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Desarrollador Web Full Stack</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Navigation Component
const Navigation = () => {
  const navItems = [
    { to: 'hero', label: 'Inicio' },
    { to: 'about', label: 'Sobre el Curso' },
    { to: 'modules', label: 'Módulos' },
    { to: 'plan', label: 'Plan de Estudio' },
    { to: 'testimonials', label: 'Testimonios' },
    { to: 'certificate', label: 'Certificado' },
    { to: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FaGift className="text-2xl text-amber-700" />
            <span className="text-xl font-bold text-amber-800">Pastelería Creativa</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                className="text-gray-700 hover:text-pink-600 cursor-pointer transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer"
          >
            ¡Inscríbete!
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CourseModules />
      <StudyPlan />
      <Testimonials />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;