import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, MessageSquare } from 'lucide-react';

export const AvailabilityChecker: React.FC = () => {
  const [date, setDate] = useState('');
  const [zone, setZone] = useState('Gran Mendoza');
  const [type, setType] = useState('Casamiento / Boda');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  const getWaUrl = () => {
    const waText = `Hola Flash Fotocabinas! Verifiqué en la web la fecha ${date || 'próxima'} para un ${type} en ${zone}. ¿Cómo podemos reservar?`;
    return `https://wa.me/5492610000000?text=${encodeURIComponent(waText)}`;
  };

  return (
    <section id="disponibilidad" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="bg-[#22C55E]/10 text-[#22C55E] font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
              Verificador en Vivo
            </span>
            <h2 className="text-3xl font-black mb-3 font-montserrat">
              ¿Tenés fecha para tu Evento?
            </h2>
            <p className="text-slate-400 text-sm">
              Consultá la disponibilidad técnica en tiempo real para tu zona en Mendoza.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FACC15]" /> Fecha del Evento
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FACC15]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DC2626]" /> Ubicación / Zona
              </label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FACC15]"
              >
                <option value="Gran Mendoza">Gran Mendoza (Capital, Godoy Cruz, Guaymallén)</option>
                <option value="Maipú / Luján de Cuyo">Maipú / Luján de Cuyo (Chacras, Ruta 60)</option>
                <option value="Zona Este (San Martín, Junín, Rivadavia)">Zona Este (San Martín, Junín, Rivadavia)</option>
                <option value="Valle de Uco (Tupungato, Tunuyán)">Valle de Uco (Tupungato, Tunuyán)</option>
                <option value="Otra zona">Otra zona de Mendoza</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Tipo de Fiesta
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FACC15]"
              >
                <option value="Casamiento / Boda">Casamiento / Boda</option>
                <option value="Cumpleaños de 15">Cumpleaños de 15</option>
                <option value="Cumpleaños Adultos">Cumpleaños Adultos</option>
                <option value="Evento Empresarial">Evento Empresarial / Bodega</option>
                <option value="Egresados">Egresados / Graduación</option>
              </select>
            </div>

            <div className="md:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full bg-[#DC2626] hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-base cursor-pointer"
              >
                Verificar Disponibilidad de Fecha
              </button>
            </div>
          </form>

          {checked && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
              <p className="text-emerald-400 font-bold text-base">
                ¡Excelente noticia! Tenemos cupo disponible para la fecha {date || 'consultada'} en {zone} ({type}).
              </p>
              <p className="text-slate-300 text-xs">
                Las fechas para temporada alta de bodas y 15 años se agotan con anticipación. Asegurá tu reserva con un congelamiento de tarifa.
              </p>
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all mt-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Bloquear Fecha por WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
