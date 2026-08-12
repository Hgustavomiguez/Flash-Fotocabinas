import React from 'react';
import { Bolt, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand info */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center">
              <Bolt className="w-5 h-5 text-[#FACC15] fill-current" />
            </div>
            <span className="font-black text-xl text-white uppercase font-montserrat tracking-tight">
              Flash <span className="text-[#DC2626]">Fotocabinas</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-6">
            El servicio número uno de alquiler de Tótem Fotográfico, Impresiones Ilimitadas y Plataforma 360° para bodas, 15 años y eventos corporativos en Mendoza y Zona Este.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 hover:bg-[#DC2626] hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 hover:bg-[#DC2626] hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-montserrat">Navegación</h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li><a href="#servicios" className="hover:text-white transition-colors">Nuestros Servicios</a></li>
            <li><a href="#simulador" className="hover:text-white transition-colors">Diseñador de Tiras</a></li>
            <li><a href="#galeria" className="hover:text-white transition-colors">Galería de Eventos</a></li>
            <li><a href="#disponibilidad" className="hover:text-white transition-colors">Verificar Disponibilidad</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Coverage Areas */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-montserrat">Zonas de Cobertura</h4>
          <ul className="space-y-2 text-xs">
            <li>• Gran Mendoza (Capital, Godoy Cruz, Guaymallén)</li>
            <li>• Maipú & Luján de Cuyo</li>
            <li>• Zona Este (San Martín, Junín, Rivadavia)</li>
            <li>• Valle de Uco (Tunuyán, Tupungato)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-montserrat">Contacto Directo</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span className="text-slate-300 font-bold">+54 9 261 000-0000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FACC15]" />
              <span className="text-slate-300">contacto@flashfotocabinas.com.ar</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              <span className="text-slate-300">Mendoza, Argentina</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-slate-900 pt-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Flash Fotocabinas Mendoza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
