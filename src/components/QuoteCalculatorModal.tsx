import React, { useState } from 'react';
import { X, Calculator, MessageSquare, Check } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: 'totem' | '360' | 'combo';
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService = 'totem',
}) => {
  const [service, setService] = useState<'totem' | '360' | 'combo'>(initialService);
  const [hours, setHours] = useState<number>(2);
  const [location, setLocation] = useState<string>('Gran Mendoza');
  const [guests, setGuests] = useState<string>('50-100');
  const [extras, setExtras] = useState<string[]>([]);

  if (!isOpen) return null;

  const basePrices = {
    totem: 45000,
    360: 55000,
    combo: 85000,
  };

  const extraItems = [
    { id: 'libro', label: 'Libro de Firmas Artesanal + Copias ($8.000)', price: 8000 },
    { id: 'cotillon', label: 'Cotillón VIP Temático ($10.000)', price: 10000 },
    { id: 'pantalla', label: 'Proyección en Pantalla Gigante ($12.000)', price: 12000 },
  ];

  const toggleExtra = (id: string) => {
    if (extras.includes(id)) {
      setExtras(extras.filter((e) => e !== id));
    } else {
      setExtras([...extras, id]);
    }
  };

  // Calculate estimated price
  const calculateTotal = () => {
    let base = basePrices[service] * hours;
    if (hours >= 3) base *= 0.9; // 10% discount for 3+ hours
    const extrasTotal = extras.reduce((sum, extraId) => {
      const item = extraItems.find((i) => i.id === extraId);
      return sum + (item ? item.price : 0);
    }, 0);
    return Math.round(base + extrasTotal);
  };

  const total = calculateTotal();

  const handleSendToWhatsApp = () => {
    const serviceName = service === 'totem' ? 'Tótem Fotográfico' : service === '360' ? 'Plataforma 360°' : 'Super Combo VIP';
    const text = `Hola Flash Fotocabinas! Calculé mi presupuesto estimado en la web:\n- Servicio: ${serviceName}\n- Duración: ${hours} Horas\n- Ubicación: ${location}\n- Invitados: ${guests}\n- Extras: ${extras.length > 0 ? extras.join(', ') : 'Ninguno'}\n- Estimado: $${total.toLocaleString('es-AR')}\n\n¿Me confirman disponibilidad para reservar?`;
    
    const url = `https://wa.me/5492610000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#DC2626]/10 text-[#DC2626] rounded-2xl flex items-center justify-center">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 font-montserrat">
              Calculadora de Presupuesto
            </h3>
            <p className="text-slate-500 text-xs">
              Estimá el costo exacto según el tipo de servicio y horas
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              1. Seleccioná el Servicio:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'totem', label: 'Tótem Fotográfico', sub: 'Fotos Ilimitadas' },
                { id: '360', label: 'Plataforma 360°', sub: 'Videos Slow-Mo' },
                { id: 'combo', label: 'Combo VIP', sub: 'Tótem + 360° + Cotillón' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    service === s.id
                      ? 'border-[#DC2626] bg-red-50/50 ring-2 ring-[#DC2626]/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-slate-900 text-sm">{s.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hours Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              2. Duración del Servicio:
            </label>
            <div className="flex items-center gap-3">
              {[2, 3, 4, 5].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHours(h)}
                  className={`flex-1 py-3 rounded-2xl font-bold text-sm border transition-all cursor-pointer ${
                    hours === h
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {h} Horas
                </button>
              ))}
            </div>
            {hours >= 3 && (
              <span className="text-[11px] text-emerald-600 font-bold mt-1.5 inline-block">
                🎉 ¡10% de descuento aplicado por contratar 3+ horas!
              </span>
            )}
          </div>

          {/* Location & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                3. Zona del Evento:
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-800"
              >
                <option value="Gran Mendoza">Gran Mendoza</option>
                <option value="Maipú / Luján de Cuyo">Maipú / Luján de Cuyo</option>
                <option value="Zona Este">Zona Este (San Martín, Junín)</option>
                <option value="Valle de Uco">Valle de Uco</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                4. Cantidad de Invitados:
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-800"
              >
                <option value="Hasta 50">Hasta 50 personas</option>
                <option value="50-100">50 a 100 personas</option>
                <option value="100-200">100 a 200 personas</option>
                <option value="Más de 200">Más de 200 personas</option>
              </select>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              5. Adicionales Opcionales:
            </label>
            <div className="space-y-2">
              {extraItems.map((item) => {
                const isSelected = extras.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleExtra(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#22C55E] bg-emerald-50 text-emerald-950'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isSelected ? 'bg-[#22C55E] border-[#22C55E] text-white' : 'border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Total Display */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase block">Presupuesto Estimado</span>
              <span className="text-2xl sm:text-3xl font-black text-[#FACC15] font-montserrat">
                ${total.toLocaleString('es-AR')}
              </span>
            </div>
            <button
              onClick={handleSendToWhatsApp}
              className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Enviar Cotización a WA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
