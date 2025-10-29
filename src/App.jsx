import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CourseModules from './components/CourseModules';
import StudyPlan from './components/StudyPlan';
import Testimonials from './components/Testimonials';
import CertificateSection from './components/CertificateSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

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