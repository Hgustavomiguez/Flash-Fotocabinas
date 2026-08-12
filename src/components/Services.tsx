import React from 'react';
import { Camera, Video, Bolt, Check, ArrowRight, Award, Printer, Clock, Users } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: 'totem' | '360' | 'combo') => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicios" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#DC2626]/10 text-[#DC2626] font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
            Nuestras Experiencias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight font-montserrat">
            Todo lo que necesitas para que tu evento sea memorable
          </h2>
          <div className="w-24 h-1.5 bg-[#FACC15] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Equipamiento fotográfico de alta tecnología con impresoras térmicas pro, iluminación LED y personal dedicado en Mendoza.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Tótem Fotográfico */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#DC2626]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#DC2626] transition-colors duration-300">
                  <Camera className="w-8 h-8 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="bg-[#FACC15] text-slate-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Más Popular
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 font-montserrat">Tótem Fotográfico</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                El clásico infaltable. Tus invitados posan, el tótem toma la ráfaga de fotos e imprime al instante en papel fotográfico de alta durabilidad.
              </p>

              <div className="border-t border-slate-100 pt-6 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Incluye:</p>
                <ul className="space-y-3 text-slate-700 text-sm font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Tiras de fotos ilimitadas durante el evento</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Diseño de plantilla personalizada (Nombres, Fecha, Logo)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Cámara DSLR / HD y flash de estudio</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Impresión térmica ultra rápida (10 segundos)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Galería digital con descarga en HD</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => onSelectService('totem')} 
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#DC2626] text-white py-3.5 rounded-2xl font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Cotizar Tótem Fotográfico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Plataforma 360° */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#DC2626]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#DC2626] transition-colors duration-300">
                  <Video className="w-8 h-8 text-[#DC2626] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="bg-[#FACC15] text-slate-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Tendencia 2024
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 font-montserrat">Plataforma 360°</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Tus invitados suben a la plataforma mientras el brazo giratorio graba un video dinámico en cámara lenta con música y efectos listos para redes.
              </p>

              <div className="border-t border-slate-100 pt-6 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Incluye:</p>
                <ul className="space-y-3 text-slate-700 text-sm font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Videos grabados en HD con efecto Slow Motion</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Iluminación LED profesional 360°</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Descarga inmediata mediante código QR</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>Música a elección + marco gráfico</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span>2 Operadores técnicos guiando la plataforma</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => onSelectService('360')} 
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#DC2626] text-white py-3.5 rounded-2xl font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Cotizar Plataforma 360°</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Combo VIP */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border border-slate-700 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#FACC15] rounded-2xl flex items-center justify-center text-slate-900">
                  <Bolt className="w-8 h-8 fill-current" />
                </div>
                <span className="bg-[#DC2626] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                  SUPER COMBO VIP
                </span>
              </div>

              <h3 className="text-2xl font-black mb-3 text-white font-montserrat">Combo Tótem + 360° + Cotillón</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                La experiencia definitiva para no dejar nada afuera. Combina impresiones físicas en vivo, videos virales 360° y cotillón temático con descuento exclusivo.
              </p>

              <div className="border-t border-slate-700 pt-6 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Beneficios VIP:</p>
                <ul className="space-y-3 text-slate-200 text-sm font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                    <span>Servicio completo de Tótem e Impresiones Ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                    <span>Servicio completo de Plataforma 360° con QR</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                    <span>Valija de Cotillón Premium (Gorras, anteojos, props)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                    <span>Libro de Firmas de regalo con copias para los novios</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FACC15] mt-0.5 flex-shrink-0" />
                    <span>Descuento especial por paquete combinado</span>
                  </li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => onSelectService('combo')} 
              className="w-full flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-yellow-400 text-slate-900 py-3.5 rounded-2xl font-black transition-all shadow-lg cursor-pointer"
            >
              <span>Cotizar Combo VIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-slate-900 font-black text-2xl lg:text-3xl mb-1 font-montserrat">Mendoza</p>
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">Gran Mendoza & Zona Este</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-3">
              <Printer className="w-6 h-6" />
            </div>
            <p className="text-slate-900 font-black text-2xl lg:text-3xl mb-1 font-montserrat">100% HD</p>
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">Impresión Térmica Duradera</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-slate-900 font-black text-2xl lg:text-3xl mb-1 font-montserrat">Puntualidad</p>
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">Instalación 1h Antes</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-slate-900 font-black text-2xl lg:text-3xl mb-1 font-montserrat">Operadores</p>
            <p className="text-xs text-slate-500 font-extrabold uppercase tracking-wider">Asistencia Técnica VIP</p>
          </div>
        </div>
      </div>
    </section>
  );
};
