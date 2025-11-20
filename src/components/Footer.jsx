import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white w-full py-16 border-t border-gray-100">
      <div className="container mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
        
        {/* Column 1: Logo & Contact */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="w-16 md:w-20">
             {/* Using logo-2.svg which seems to be the icon */}
             <img src="/assets/logo-2.svg" alt="Logo Icon" className="w-full h-auto" />
          </div>
          <div className="text-gray-600 text-sm space-y-2">
            <p className="font-medium">+57 318 8041255</p>
            <p>Correo: contacto@angelicasantamilla.com</p>
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            {/* Facebook */}
            <a href="#" className="text-[#880D1E] hover:text-[#DD2D4A] transition-colors">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-[#880D1E] hover:text-[#DD2D4A] transition-colors">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Información */}
        <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-[#1a103c] font-bold text-lg">Información</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Proceso de Compra</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Política de Privacidad</a></li>
            </ul>
        </div>

        {/* Column 3: Ayuda */}
        <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-[#1a103c] font-bold text-lg">Ayuda</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Envíos y Devoluciones</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#DD2D4A] transition-colors">Rastrea tu pedido</a></li>
            </ul>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="w-full text-center mt-12 pt-8 border-t border-gray-100 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Angelica Santamilla Art. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
