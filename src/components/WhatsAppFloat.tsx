import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = "https://wa.me/5492610000000?text=Hola%20Flash%20Fotocabinas,%20quiero%20consultar%20por%20un%20evento";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden sm:block bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
        💬 ¡Escribinos para cotizar!
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#22C55E] hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 animate-pulse-green group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
