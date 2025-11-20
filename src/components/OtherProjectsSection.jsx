import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    image: "/assets/carrete-case-2.jpg", // Placeholder, user should replace with painting/keychain image
    title: "Cuadros Personalizados",
    description: "Inmortaliza a tu mascota en un lienzo único pintado a mano. Una obra de arte para decorar tu hogar."
  },
  {
    id: 2,
    image: "/assets/carrete-case-1.svg", // Placeholder
    title: "Llaveros Exclusivos",
    description: "Lleva un pequeño recuerdo a todas partes. Llaveros detallados y resistentes con la cara de tu peludo."
  }
];

const OtherProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="w-full bg-[#F8F7FF] py-20 md:py-32 relative">
      <div className="container mx-auto px-8 md:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side - Navigation & Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center gap-4 md:gap-8">
            {/* Left Arrow */}
            <button 
                onClick={prevProject}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 focus:outline-none shrink-0"
                aria-label="Previous Project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] bg-white p-4 shadow-xl rounded-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentIndex}
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover rounded"
                    />
                </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button 
                onClick={nextProject}
                className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 focus:outline-none shrink-0"
                aria-label="Next Project"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a103c] mb-4">
                {projects[currentIndex].title}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                {projects[currentIndex].description}
            </p>
            <p className="text-gray-500 text-base mt-4 italic">
                "Hacemos eterno el amor por tu mejor amigo."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OtherProjectsSection;
