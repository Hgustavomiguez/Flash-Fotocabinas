import React from 'react';
import { MessageSquare, Calculator, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote }) => {
  const whatsappUrl = "https://wa.me/5492610000000?text=Hola%20Flash%20Fotocabinas,%20quiero%20reservar%20mi%20fecha";

  return (
    <section className="py-20 bg-gradient-to-r from-[#DC2626] to-red-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(250,204,21,0.2),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <span className="bg-[#FACC15] text-slate-900 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4 inline-block shadow-md">
          <Sparkles className="w-3.5 h-3.5 inline-block mr-1 text-slate-900" />
          Asegurá tu fecha hoy
        </span>

        <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight font-montserrat leading-tight">
          ¿Listo para darle la mejor animación a tu evento?
        </h2>

        <p className="text-red-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Escribinos por WhatsApp y recibí asesoramiento personalizado e instantáneo. Congelá la tarifa de tu tótem o plataforma 360°.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-emerald-600 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-xl transition-all active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Hablar por WhatsApp Ahora</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-base font-bold py-4 px-8 rounded-2xl shadow-xl transition-all cursor-pointer"
          >
            <Calculator className="w-5 h-5 text-[#FACC15]" />
            <span>Calcular Presupuesto Exacto</span>
          </button>
        </div>
      </div>
    </section>
  );
};
