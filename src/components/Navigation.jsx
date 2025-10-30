import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGift, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: 'hero', label: 'Inicio' },
    { to: 'about', label: 'Sobre el Curso' },
    { to: 'modules', label: 'Módulos' },
    { to: 'plan', label: 'Plan de Estudio' },
    { to: 'contact', label: 'Contacto' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGift className="text-xl sm:text-2xl text-amber-700" />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800 whitespace-nowrap">
                Pastelería Creativa
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  className="relative text-gray-700 hover:text-pink-600 cursor-pointer transition-all duration-300 font-semibold text-sm xl:text-base px-4 py-2.5 rounded-xl hover:bg-pink-50 group"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="hidden sm:block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-bold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-pink-300 relative overflow-hidden group"
            >
              <span className="relative z-10">¡Inscríbete!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fuera del nav para tener su propio stacking context */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 lg:hidden"
              style={{ zIndex: 999998 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 max-w-[85vw] h-full lg:hidden"
              style={{ zIndex: 999999 }}
            >
              <div className="p-4 pt-6">
                {/* Bloque único para todo el menú móvil */}
                <div className="w-full bg-pink-50 rounded-3xl shadow-xl border border-pink-100 flex flex-col items-stretch p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-1.5 rounded-xl">
                        <FaGift className="text-lg text-white" />
                      </div>
                      <div>
                        <span className="text-base font-bold text-amber-800 block leading-tight">
                          Pastelería
                        </span>
                        <span className="text-xs text-amber-600 font-medium">
                          Creativa
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={closeMenu}
                      className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaTimes className="text-base" />
                    </button>
                  </div>

                  {/* Botones navegación */}
                  <div className="flex flex-col gap-2 mb-3">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.07 }}
                      >
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={800}
                          onClick={closeMenu}
                          className="block px-3 py-2 text-gray-800 hover:text-pink-600 bg-white rounded-xl cursor-pointer transition-all duration-200 font-semibold border border-pink-100 hover:border-pink-300 text-sm text-center shadow-sm"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botón Inscribite Ahora */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-3"
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={800}
                      onClick={closeMenu}
                      className="block w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-4 py-3 rounded-xl text-center font-bold text-base transition-all duration-200 cursor-pointer shadow-md border border-pink-300"
                    >
                      ¡Inscríbete Ahora!
                    </Link>
                  </motion.div>

                  {/* Footer preguntas */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center bg-pink-100 rounded-xl p-3 shadow-sm border border-pink-200"
                  >
                    <p className="text-xs text-gray-600 font-medium mb-1">
                      ¿Tienes preguntas?
                    </p>
                    <a 
                      href="tel:+15551234567"
                      className="text-base font-bold text-pink-600 bg-white px-3 py-1.5 rounded-lg inline-block hover:bg-pink-50 transition-colors duration-200 transform hover:scale-105 shadow-sm"
                    >
                      📞 +1 (555) 123-4567
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;