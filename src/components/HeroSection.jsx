import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGift, FaPlay, FaClock, FaUsers, FaCertificate } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/vidreposteria.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/75 via-amber-900/65 to-rose-900/75"></div>
      </div>

      {/* Enhanced Background decorative elements over video */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-15 blur-xl"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-20 blur-lg"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-15 blur-lg"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full blur-2xl opacity-40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <FaGift className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white drop-shadow-2xl mx-auto mb-3 sm:mb-4 relative z-10" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
        >
          <span className="text-white drop-shadow-2xl block sm:inline">
            Curso Profesional de
          </span>
          <br className="hidden sm:block" />
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-yellow-300 drop-shadow-2xl block sm:inline"
          >
            Pastelería Creativa
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg px-2 sm:px-4"
        >
          ✨ Descubre el arte de la repostería profesional y convierte tu pasión en una 
          <span className="font-semibold text-yellow-300"> habilidad extraordinaria</span> ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4"
        >
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="group relative w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 sm:gap-3 shadow-2xl hover:shadow-pink-500/25 backdrop-blur-sm border border-white/20"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaPlay />
              </motion.div>
              <span className="whitespace-nowrap">Comenzar mi Viaje</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="group relative w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 cursor-pointer shadow-2xl"
            >
              <span className="whitespace-nowrap">Más Información</span>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 text-white px-2"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/20"
          >
            <FaClock className="text-yellow-300 text-sm sm:text-lg md:text-xl flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium">6 semanas</span>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/20"
          >
            <FaUsers className="text-yellow-300 text-sm sm:text-lg md:text-xl flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium">Grupos pequeños</span>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-white/20"
          >
            <FaCertificate className="text-yellow-300 text-sm sm:text-lg md:text-xl flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium">Certificación</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;