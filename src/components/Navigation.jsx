import React from 'react';
import { Link } from 'react-scroll';
import { FaGift } from 'react-icons/fa';

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

export default Navigation;