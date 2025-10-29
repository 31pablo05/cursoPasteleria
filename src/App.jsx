import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaEnvelope, 
  FaClock, 
  FaUsers, 
  FaCertificate, 
  FaPlay,
  FaUser,
  FaGift,
  FaCookie,
  FaHeart,
  FaStar
} from 'react-icons/fa';

// Animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-25"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <FaGift className="text-6xl text-amber-700 mx-auto mb-4" />
        </motion.div>

        <motion.h1 
          {...fadeInUp}
          className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 leading-tight"
        >
          Pastelería <span className="text-pink-600">Creativa</span>
        </motion.h1>

        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          Descubre el arte de la repostería profesional y convierte tu pasión en una habilidad extraordinaria
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <FaPlay />
            Comenzar mi Viaje
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            Más Información
          </Link>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex justify-center gap-8 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <FaClock className="text-amber-600" />
            <span>6 semanas</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-amber-600" />
            <span>Grupos pequeños</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCertificate className="text-amber-600" />
            <span>Certificación</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-amber-800 mb-8"
          >
            Sobre el <span className="text-pink-600">Curso</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 mb-12 leading-relaxed"
          >
            Nuestro curso de Pastelería Creativa está diseñado para transformar tu amor por los postres 
            en una habilidad profesional. Aprenderás desde las técnicas básicas hasta las más avanzadas 
            decoraciones, trabajando con ingredientes premium y herramientas profesionales.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="bg-amber-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <FaUser className="text-4xl text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Instructores Expertos</h3>
              <p className="text-gray-600">
                Aprende de chefs pasteleros con más de 15 años de experiencia en repostería artesanal
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <FaCertificate className="text-4xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Certificación Oficial</h3>
              <p className="text-gray-600">
                Obtén tu certificado profesional avalado por la Asociación de Pasteleros Creativos
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-yellow-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <FaUsers className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Clases Personalizadas</h3>
              <p className="text-gray-600">
                Grupos reducidos de máximo 8 personas para una atención completamente personalizada
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Course Modules Component
const CourseModules = () => {
  const modules = [
    {
      title: "Fundamentos de Pastelería",
      description: "Aprende las bases técnicas, ingredientes esenciales y equipamiento profesional",
      icon: <FaGift />,
      weeks: "Semanas 1-2"
    },
    {
      title: "Técnicas de Decoración",
      description: "Domina el arte del decorado con cremas, fondant y técnicas de glaseado",
      icon: <FaHeart />,
      weeks: "Semanas 3-4"
    },
    {
      title: "Repostería Artística",
      description: "Crea obras maestras comestibles con técnicas avanzadas de modelado",
      icon: <FaCookie />,
      weeks: "Semanas 5-6"
    }
  ];

  return (
    <section id="modules" className="py-20 bg-gradient-to-b from-amber-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16"
        >
          Módulos del <span className="text-pink-600">Curso</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-pink-500 mb-6">{module.icon}</div>
              <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {module.weeks}
              </span>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">{module.title}</h3>
              <p className="text-gray-600 leading-relaxed">{module.description}</p>
            </motion.div>
          ))}
        </div>
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

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante graduada",
      content: "Este curso cambió mi vida. Ahora tengo mi propia pastelería y mis creaciones son reconocidas en toda la ciudad.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Chef profesional",
      content: "Las técnicas que aprendí aquí elevaron mi carrera culinaria a un nivel completamente nuevo. Increíble experiencia.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora",
      content: "Comenzé como hobby y terminé abriendo mi negocio. Los instructores son excepcionales y el ambiente es perfecto.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-pink-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16"
        >
          Lo que dicen nuestros <span className="text-pink-600">Estudiantes</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-amber-800 text-lg">{testimonial.name}</h4>
                <p className="text-pink-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
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
            <p className="text-gray-600">
              © 2024 Pastelería Creativa. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Desarrollado con ❤️ para amantes de la repostería
            </p>
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
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;