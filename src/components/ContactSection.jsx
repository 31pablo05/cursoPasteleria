import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook, FaPaperPlane, FaClock, FaGift } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+1 (555) 123-4567",
      color: "from-green-400 to-green-600",
      action: "Enviar mensaje"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@cursopasteleria.com",
      color: "from-blue-400 to-blue-600",
      action: "Enviar email"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Ubicación",
      content: "123 Calle Dulce, Ciudad Pastelera",
      color: "from-purple-400 to-purple-600",
      action: "Ver ubicación"
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, color: "from-pink-500 to-rose-500", href: "#" },
    { icon: FaFacebook, color: "from-blue-600 to-blue-700", href: "#" },
    { icon: FaWhatsapp, color: "from-green-500 to-green-600", href: "#" }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 bg-gradient-to-l from-blue-500/15 to-indigo-500/15 rounded-full"
          animate={{ rotate: -360, y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
              ¡Comienza Hoy
            </span>
            <br />
            <span className="text-white">
              Tu Aventura Culinaria!
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            ¿Tienes preguntas? ¿Listo para inscribirte? 
            <span className="text-pink-400 font-semibold"> ¡Estamos aquí para ayudarte! </span>
            Contáctanos y da el primer paso hacia tu futuro como pastelero profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/20 shadow-2xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center"
              >
                Envíanos un Mensaje
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-xl lg:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    required
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-xl lg:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tu teléfono"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-xl lg:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tus intereses en pastelería..."
                    rows="5"
                    className="w-full p-3 sm:p-4 bg-white/10 border border-white/30 rounded-xl lg:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl lg:rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Contact methods */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl lg:rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${info.color} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <info.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{info.title}</h4>
                    <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">{info.content}</p>
                    <span className={`text-transparent bg-gradient-to-r ${info.color} bg-clip-text font-semibold group-hover:underline text-sm sm:text-base`}>
                      {info.action} →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 sm:p-8 rounded-2xl lg:rounded-3xl border border-blue-400/30"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaClock className="text-2xl sm:text-3xl text-blue-400" />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Horarios de Atención</h4>
              </div>
              <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                <p><span className="font-semibold text-white">Lunes - Viernes:</span> 9:00 AM - 8:00 PM</p>
                <p><span className="font-semibold text-white">Sábados:</span> 10:00 AM - 6:00 PM</p>
                <p><span className="font-semibold text-white">Domingos:</span> 12:00 PM - 5:00 PM</p>
              </div>
            </motion.div>

            {/* Special offer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 p-6 sm:p-8 rounded-2xl lg:rounded-3xl border border-pink-400/30 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGift className="text-3xl sm:text-4xl text-pink-400 mx-auto mb-3 sm:mb-4" />
              </motion.div>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">¡Oferta Especial!</h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                ¡Contáctanos hoy y recibe un 
                <span className="text-pink-400 font-bold"> 20% de descuento </span>
                en tu matrícula!
              </p>
              <p className="text-xs sm:text-sm text-gray-400">*Válido solo para los primeros 50 estudiantes</p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">¡Síguenos en redes sociales!</h4>
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${social.color} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    <social.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;