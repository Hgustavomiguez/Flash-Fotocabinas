import React from 'react';
import { Bolt, CheckCircle2, Calculator, MessageSquare, Star, Camera, Video, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const whatsappUrl = "https://wa.me/5492610000000?text=Hola%20Flash%20Fotocabinas,%20quiero%20consultar%20fecha%20y%20precios";

  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-40 lg:pb-28 px-4 overflow-hidden relative bg-gradient-to-b from-slate-50/60 via-white to-white">
      {/* Ambient Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DC2626]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-slate-900 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-6 shadow-sm border border-yellow-300">
            <Bolt className="w-4 h-4 text-slate-900 fill-current" />
            <span>⚡ El entretenimiento #1 para eventos en Mendoza</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight font-montserrat">
            Transformamos tu fiesta en un{' '}
            <span className="text-[#DC2626] relative inline-block">
              recuerdo inolvidable
              <svg className="absolute left-0 -bottom-2 w-full h-3 text-[#FACC15]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>{' '}
            al instante
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Tótem fotográfico con impresiones ilimitadas y Plataforma 360° para bodas, cumpleaños y eventos corporativos en Mendoza y Zona Este.
          </p>

          {/* Value Proposition Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>Fotos Ilimitadas</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>Videos 360° Slow-Mo</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>Personalización 100%</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white text-lg sm:text-xl font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 animate-pulse-green"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
              <span>Consultar Fecha por WhatsApp</span>
            </a>

            <button 
              onClick={onOpenQuote} 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-base font-bold py-4 px-6 rounded-2xl shadow-md transition-all border border-slate-800 cursor-pointer"
            >
              <Calculator className="w-5 h-5 text-[#FACC15]" />
              Calculadora de Presupuesto
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-600 text-sm font-medium">
            <div className="flex text-[#FACC15]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">+150 eventos animados</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Mendoza, Maipú, San Martín</span>
          </div>
        </div>

        {/* Right Image Showcase Grid */}
        <div className="lg:col-span-5 relative">
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-8">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                  alt="Evento Mendoza Flash Fotocabinas" 
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                  <Camera className="w-3.5 h-3.5 text-[#DC2626]" /> Tótem HD
                </span>
              </div>

              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600" 
                  alt="Tiras de fotos de recuerdo" 
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-[#FACC15] text-slate-900 font-bold text-xs px-2.5 py-1 rounded-full shadow">
                  Impresión en 10 seg
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" 
                  alt="Plataforma 360 en Mendoza" 
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-[#DC2626] text-white font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                  <Video className="w-3.5 h-3.5" /> Videos 360°
                </span>
              </div>

              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600" 
                  alt="Diversión Flash Fotocabinas" 
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow border border-slate-700">
                  Cotillón VIP
                </span>
              </div>
            </div>

            {/* Ambient Glow Effect */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#DC2626]/15 blur-3xl rounded-full pointer-events-none"></div>
          </div>

          {/* Floating Guarantee Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-slate-900">Reserva Segura</div>
              <div className="text-xs text-slate-500">Contrato digital y asistencia VIP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
