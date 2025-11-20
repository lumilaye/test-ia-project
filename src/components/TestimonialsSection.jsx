import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    dogName: "Bruno",
    owner: "Camila S.",
    quote: "¡Es idéntico! Capturaron su mirada a la perfección. Lloré de emoción cuando abrí el paquete.",
    realImage: "assets/carrete-case-2.jpg", // Placeholder for real dog
    artImage: "assets/carrete-case-1.svg"  // Placeholder for painted case
  },
  {
    id: 2,
    dogName: "Lola",
    owner: "Andrés M.",
    quote: "El mejor regalo que me he dado. La calidad del detalle es impresionante, parece que me estuviera mirando.",
    realImage: "assets/carrete-case-2.jpg", // Placeholder
    artImage: "assets/carrete-case-1.svg"  // Placeholder
  },
  {
    id: 3,
    dogName: "Rocky",
    owner: "Mariana V.",
    quote: "No es solo un case, es una obra de arte. Me encanta llevar a Rocky conmigo a todas partes.",
    realImage: "assets/carrete-case-2.jpg", // Placeholder
    artImage: "assets/carrete-case-1.svg"  // Placeholder
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#FDF2F8] py-16 md:py-32"> {/* Soft pink background */}
      <div className="container mx-auto px-6 md:px-24">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a103c] mb-6">
            Historias de Amor
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Momentos felices de quienes ya llevan su arte a todas partes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Images Container - Real vs Art */}
              <div className="flex gap-2 mb-6 h-48 overflow-hidden rounded-xl">
                <div className="w-1/2 relative group">
                    <img 
                        src={item.realImage} 
                        alt={`Foto real de ${item.dogName}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 text-center backdrop-blur-sm">
                        Realidad
                    </div>
                </div>
                <div className="w-1/2 relative group">
                    <img 
                        src={item.artImage} 
                        alt={`Arte de ${item.dogName}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#8B5CF6]/80 text-white text-xs py-1 text-center backdrop-blur-sm">
                        Arte
                    </div>
                </div>
              </div>

              {/* Quote */}
              <div className="text-center">
                <div className="flex justify-center mb-4 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{item.quote}"
                </p>
                <h4 className="font-bold text-[#1a103c]">
                  {item.owner} <span className="font-normal text-gray-400 text-sm">dueña de {item.dogName}</span>
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
