import React, { useState } from 'react';
import { Bolt, Wand2, Calculator, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const whatsappUrl = "https://wa.me/5492610000000?text=Hola%20Flash%20Fotocabinas,%20quiero%20cotizar%20mi%20evento";

  return (
    <header id="main-header" className="fixed w-full top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 bg-[#DC2626] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Bolt className="w-6 h-6 text-[#FACC15] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter uppercase text-slate-900 leading-none font-montserrat">
              Flash <span className="text-[#DC2626]">Fotocabinas</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
              Mendoza • Zona Este
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm">
          <a href="#servicios" className="hover:text-[#DC2626] transition-colors">Servicios</a>
          <a href="#simulador" className="hover:text-[#DC2626] transition-colors flex items-center gap-1.5 text-slate-800">
            <Wand2 className="w-4 h-4 text-[#DC2626]" /> Diseñar Tira
          </a>
          <a href="#galeria" className="hover:text-[#DC2626] transition-colors">Galería</a>
          <a href="#disponibilidad" className="hover:text-[#DC2626] transition-colors">Consultar Fecha</a>
          <a href="#faq" className="hover:text-[#DC2626] transition-colors">Preguntas</a>
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onOpenQuote} 
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#DC2626] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#FACC15]" />
            Cotizar Evento
          </button>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#22C55E] text-white px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#16a34a] transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors" 
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
            Servicios
          </a>
          <a href="#simulador" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-[#DC2626] font-bold hover:bg-slate-50 flex items-center gap-2">
            <Wand2 className="w-4 h-4" /> Diseñar Tira Personalizada
          </a>
          <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
            Galería de Fotos
          </a>
          <a href="#disponibilidad" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
            Verificar Disponibilidad de Fecha
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
            Preguntas Frecuentes
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} 
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold text-center shadow-md cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#FACC15]" />
              Cotizar mi Evento
            </button>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2 bg-[#22C55E] text-white py-3 rounded-xl font-bold text-center shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
