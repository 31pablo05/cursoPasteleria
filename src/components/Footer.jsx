import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCookie, FaCubes, FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    course: [
      { name: "Sobre el Curso", to: "about" },
      { name: "Módulos", to: "modules" },
      { name: "Plan de Estudio", to: "study-plan" },
      { name: "Certificación", to: "certificate" }
    ],
    info: [
      { name: "Testimonios", to: "testimonials" },
      { name: "Contacto", to: "contact" },
      { name: "Política de Privacidad", to: "#" },
      { name: "Términos y Condiciones", to: "#" }
    ]
  };

  const socialLinks = [
    { icon: FaInstagram, color: "hover:text-pink-400", href: "#" },
    { icon: FaFacebook, color: "hover:text-blue-400", href: "#" },
    { icon: FaWhatsapp, color: "hover:text-green-400", href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-36 sm:w-40 lg:w-48 h-36 sm:h-40 lg:h-48 bg-gradient-to-l from-blue-500/8 to-indigo-500/8 rounded-full"
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="pt-16 sm:pt-18 lg:pt-20 pb-8 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaCookie className="text-3xl sm:text-4xl text-pink-400" />
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: -15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaCubes className="text-3xl sm:text-4xl text-purple-400" />
                  </motion.div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Curso de Pastelería
                </h3>
              </motion.div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
                Transformamos tu pasión por la repostería en una 
                <span className="text-pink-400 font-semibold"> carrera profesional exitosa</span>. 
                Únete a nuestra comunidad de pasteleros apasionados y da el primer paso hacia tu futuro culinario.
              </p>

              {/* Contact info */}
              <div className="space-y-3 sm:space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaEnvelope className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">info@cursopasteleria.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaMapMarkerAlt className="text-red-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">123 Calle Dulce, Ciudad Pastelera</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Course links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 relative">
                Nuestro Curso
                <div className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.course.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Info links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 relative">
                Información
                <div className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.info.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.to.startsWith('#') ? (
                      <a
                        href={link.to}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social media and newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 py-8 sm:py-10 lg:py-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
            
            {/* Social media */}
            <div className="text-center lg:text-left">
              <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                ¡Síguenos en redes sociales para más contenido!
              </h4>
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700`}
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-purple-700"
            >
              <FaArrowUp className="text-lg sm:text-xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-800 py-6 sm:py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <span>© {currentYear} Curso de Pastelería. Hecho con</span>
              <motion.span
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              <span>para pasteleros apasionados.</span>
              <span>Desarrollado por{' '}
                <a
                  href="https://devcraftpablo.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline font-semibold"
                >
                  Pablo Proboste
                </a>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Términos de Uso
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;