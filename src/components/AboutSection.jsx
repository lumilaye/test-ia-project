import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3E8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE4E6] rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 relative"
        >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
                {/* Frame effect */}
                <div className="absolute inset-0 border-2 border-[#8B5CF6] rounded-tl-[100px] rounded-br-[100px] translate-x-4 translate-y-4"></div>
                <img 
                    src="assets/carrete-case-2.jpg" // Placeholder for artist photo
                    alt="Angélica pintando" 
                    className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-xl relative z-10"
                />
            </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
            <h2 className="text-sm font-bold tracking-widest text-[#8B5CF6] uppercase mb-2">
                Detrás del Pincel
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1a103c] mb-6">
                Hola, soy Angélica
            </h3>
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                    Desde pequeña, dos pasiones han movido mi mundo: <span className="font-medium text-[#8B5CF6]">el arte y los animales</span>. 
                </p>
                <p>
                    Crear este espacio fue la forma de unir ambos amores. Entiendo que una mascota no es solo un animal, es familia. Por eso, cada trazo que pinto no es solo color; es un homenaje a ese amor incondicional que nos regalan cada día.
                </p>
                <p>
                    Mi misión es simple: capturar su esencia en una pieza única para que puedas llevar un pedacito de su alma contigo, siempre.
                </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 font-serif italic text-2xl text-[#1a103c] opacity-80">
                Con amor, Angélica.
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
