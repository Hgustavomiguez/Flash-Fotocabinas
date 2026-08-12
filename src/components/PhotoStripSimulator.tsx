import React, { useState } from 'react';
import { Palette, Heart, Sparkles, GlassWater, Building, MessageSquare, Bolt } from 'lucide-react';
import { StripDesign } from '../types';

export const PhotoStripSimulator: React.FC = () => {
  const [design, setDesign] = useState<StripDesign>({
    title: 'Sofía & Lautaro',
    subtitle: '15 • 11 • 2024 — Maipú, Mendoza',
    bgColor: '#FFFFFF',
    textColor: '#1E293B',
    preset: 'boda',
  });

  const presets = [
    {
      id: 'boda',
      label: 'Boda Elegante',
      icon: Heart,
      title: 'Sofía & Lautaro',
      subtitle: '15 • 11 • 2024 — Maipú, Mendoza',
      bgColor: '#FFFFFF',
      textColor: '#1E293B',
    },
    {
      id: 'quince',
      label: 'Mis 15 Neon',
      icon: Sparkles,
      title: 'Valentina #15',
      subtitle: 'Mis 15 Años — Mendoza',
      bgColor: '#0F172A',
      textColor: '#FACC15',
    },
    {
      id: 'fiesta',
      label: 'Cumple30',
      icon: GlassWater,
      title: 'Lucas 30!',
      subtitle: 'Festejo — Zona Este',
      bgColor: '#18181B',
      textColor: '#DC2626',
    },
    {
      id: 'corpo',
      label: 'Bodegas',
      icon: Building,
      title: 'Bodega San Martín',
      subtitle: 'Evento Anual 2024',
      bgColor: '#FDFBF7',
      textColor: '#78350F',
    },
  ];

  const applyPreset = (presetObj: typeof presets[0]) => {
    setDesign({
      title: presetObj.title,
      subtitle: presetObj.subtitle,
      bgColor: presetObj.bgColor,
      textColor: presetObj.textColor,
      preset: presetObj.id as StripDesign['preset'],
    });
  };

  const handleWhatsAppSend = () => {
    const text = `Hola Flash Fotocabinas! Diseñé mi tira de fotos personalizada con el título "${design.title}" y subtítulo "${design.subtitle}". ¿Me pueden asesorar para mi evento?`;
    const url = `https://wa.me/5492610000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#FACC15] text-slate-900 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
            ⚡ Probador de Diseños
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-montserrat">
            Diseñá la Tira de Fotos de tu Evento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Personalizamos el diseño con los nombres, colores, fecha y logo de tu evento. Probá diferentes combinaciones a continuación:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#FACC15]">
              <Palette className="w-5 h-5" />
              <span>Opciones de Diseño</span>
            </h3>

            {/* Presets */}
            <div className="mb-6">
              <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                Seleccionar Estilo Base:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {presets.map((p) => {
                  const Icon = p.icon;
                  const isActive = design.preset === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => applyPreset(p)}
                      className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#FACC15] bg-[#FACC15]/10 text-white'
                          : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-1 ${isActive ? 'text-[#FACC15]' : 'text-slate-400'}`} />
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Text inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                  Texto Principal (Nombres o Evento)
                </label>
                <input
                  type="text"
                  value={design.title}
                  onChange={(e) => setDesign({ ...design, title: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FACC15]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">
                  Subtítulo / Fecha / Lugar
                </label>
                <input
                  type="text"
                  value={design.subtitle}
                  onChange={(e) => setDesign({ ...design, subtitle: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FACC15]"
                />
              </div>
            </div>

            {/* Color Pickers */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  Fondo de la Tira
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={design.bgColor}
                    onChange={(e) => setDesign({ ...design, bgColor: e.target.value })}
                    className="w-10 h-10 rounded-xl bg-transparent border border-slate-700 cursor-pointer"
                  />
                  <span className="text-xs text-slate-400 font-mono uppercase">{design.bgColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  Color del Texto
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={design.textColor}
                    onChange={(e) => setDesign({ ...design, textColor: e.target.value })}
                    className="w-10 h-10 rounded-xl bg-transparent border border-slate-700 cursor-pointer"
                  />
                  <span className="text-xs text-slate-400 font-mono uppercase">{design.textColor}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={handleWhatsAppSend}
                className="w-full flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white py-3.5 px-5 rounded-2xl font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Pedir este Diseño por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Preview Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-[#DC2626] text-white text-xs font-black px-3 py-1 rounded-full shadow-lg z-20 animate-bounce">
                Vista Previa
              </div>

              <div
                className="w-64 p-3 rounded-2xl shadow-2xl transition-all duration-300 border border-slate-700 flex flex-col items-center gap-2.5"
                style={{ backgroundColor: design.bgColor }}
              >
                <div className="flex items-center gap-1.5 pt-1 pb-0.5" style={{ color: design.textColor }}>
                  <Bolt className="w-3.5 h-3.5 text-[#DC2626] fill-current" />
                  <span className="font-black text-[11px] tracking-widest uppercase">Flash Fotocabinas</span>
                </div>

                <div className="w-full h-36 rounded-xl overflow-hidden shadow-inner border border-black/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400"
                    alt="Foto 1"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                    #1
                  </span>
                </div>

                <div className="w-full h-36 rounded-xl overflow-hidden shadow-inner border border-black/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=400"
                    alt="Foto 2"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                    #2
                  </span>
                </div>

                <div className="w-full h-36 rounded-xl overflow-hidden shadow-inner border border-black/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400"
                    alt="Foto 3"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                    #3
                  </span>
                </div>

                <div
                  className="w-full text-center py-2 px-1 border-t border-black/10 mt-1"
                  style={{ color: design.textColor }}
                >
                  <div className="font-black text-sm uppercase tracking-tight leading-snug font-serif">
                    {design.title || 'Tu Evento Aquí'}
                  </div>
                  <div className="text-[10px] opacity-80 font-medium tracking-wide mt-0.5">
                    {design.subtitle || 'Fecha & Lugar'}
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-4">
                * Impreso en papel fotográfico 5x15cm de alta definición.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
