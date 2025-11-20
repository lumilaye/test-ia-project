import React from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import OtherProjectsSection from './components/OtherProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <OtherProjectsSection />
      <Footer />
    </div>
  )
}

export default App
