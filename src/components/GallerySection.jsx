import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "assets/carrete-case-1.svg",
  "assets/carrete-case-2.jpg",
  "assets/carrete-case-1.svg",
  "assets/carrete-case-2.jpg",
  "assets/carrete-case-1.svg",
  "assets/carrete-case-2.jpg",
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full bg-white py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side - Carousel */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          
          {/* Carousel Container */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
               {/* Left Arrow */}
               <button 
                 onClick={prevImage}
                 className="pointer-events-auto w-12 h-12 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
                 aria-label="Previous Image"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                 </svg>
               </button>

               {/* Right Arrow */}
               <button 
                 onClick={nextImage}
                 className="pointer-events-auto w-12 h-12 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 focus:outline-none"
                 aria-label="Next Image"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                 </svg>
               </button>
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-lg md:text-2xl font-light leading-relaxed">
              Plasma tus momentos más especiales en un forro único.
            </p>
            <p className="text-gray-800 text-xl md:text-3xl font-medium leading-relaxed mt-4">
              Personaliza tu historia, lleva contigo recuerdos inolvidables.
            </p>
          </motion.div>
          
          {/* Optional: Another CTA or decorative element could go here */}
          <motion.div
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: '100px' }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             className="h-1 bg-brand-pink rounded-full mx-auto md:mx-0 mt-4"
          ></motion.div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
