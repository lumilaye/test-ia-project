import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="h-screen text-white overflow-hidden relative flex flex-col justify-between">
      {/* Background Stars Layers */}
      <div className="stars-bg">
        <div className="stars-layer stars-small"></div>
        <div className="stars-layer stars-medium"></div>
        <div className="stars-layer stars-large"></div>
        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Header: Logo & Socials */}
      <header className="w-full z-20 pt-12 px-8 md:px-24 flex justify-between items-start">
        <div className="w-48 md:w-64">
          <img src="/assets/logo-integrado.svg" alt="Angelica Santamilla Art" className="w-full h-auto" />
        </div>
        
        <div className="flex space-x-4 mt-2">
          {/* Facebook Icon */}
          <a href="#" className="bg-white text-[#1a103c] rounded-full p-2 hover:bg-gray-200 transition-colors w-8 h-8 flex items-center justify-center">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="bg-white text-[#1a103c] rounded-full p-2 hover:bg-gray-200 transition-colors w-8 h-8 flex items-center justify-center">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center relative z-10 pb-24 md:pb-32">
        
        {/* Left Content - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold leading-tight tracking-wide"
          >
            Convierte a tu <br />
            <span className="text-brand-pink">mejor amigo</span> en arte
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-2xl text-gray-100 font-light leading-snug">
              ¡Lleva a tu perro siempre contigo con nuestros forros personalizados!
            </p>
            <p className="text-brand-iceBlue text-lg md:text-2xl font-medium leading-snug pt-2">
              Tu estilo, tu mascota, tu historia.
            </p>
          </motion.div>

          {/* CTA Button - Softer style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6"
          >
             <button className="px-10 py-3 rounded-full border border-brand-pink text-white text-sm md:text-base font-medium tracking-widest uppercase transition-all duration-300 hover:bg-brand-pink/10 hover:shadow-[0_0_20px_rgba(242,106,141,0.3)] hover:border-brand-pink/80">
                Personalizar
             </button>
          </motion.div>
        </div>

        {/* Right Content - Product Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-10 md:mt-0 relative">
           {/* Subtle glow behind image */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-[80px] -z-10"></div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full flex justify-center md:justify-end"
          >
            <img 
              src="/assets/case-pastor.svg" 
              alt="Case Personalizado Pastor" 
              className="w-auto h-auto max-h-[60vh] drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </main>

      {/* Wave Divider - Organic Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
