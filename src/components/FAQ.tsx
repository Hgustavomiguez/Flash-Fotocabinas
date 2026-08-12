import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '¿Cuántas fotos e impresiones se entregan durante el evento?',
      answer: '¡Totalmente ILIMITADAS! Durante todas las horas contratadas de servicio, tus invitados pueden tomarse todas las fotos que quieran y se imprimen copias al instante para cada integrante del grupo.',
    },
    {
      question: '¿Con cuánto tiempo de anticipación llegan al salón para armar el equipo?',
      answer: 'Llegamos con 45 a 60 minutos de anticipación antes del inicio del servicio contratado para realizar la instalación, prueba de luces y calibración de impresoras sin interferir con la fiesta.',
    },
    {
      question: '¿Cómo funciona el servicio de Plataforma 360° y la descarga de videos?',
      answer: 'Los invitados suben a la plataforma y el brazo con cámara graba un video dinámico de 15 segundos con efectos de cámara lenta, aceleración y música. Al bajar, escanean un código QR en nuestro monitor y descargan el video procesado en su celular en menos de 30 segundos.',
    },
    {
      question: '¿Cómo se personaliza el diseño de la tira de fotos?',
      answer: 'Previo al evento nos ponés en contacto con el diseño que te gusta o tus preferencias (nombres, fecha, colores, tipografía, logo). Nuestro equipo crea la plantilla personalizada y te envía muestras digitales para tu aprobación.',
    },
    {
      question: '¿Qué requerimientos técnicos necesita el salón en Mendoza?',
      answer: 'Solo necesitamos una toma de corriente estándar de 220V cercana (a menos de 10 metros) y un espacio plano de 2x2 metros para el Tótem o de 3x3 metros para la Plataforma 360°.',
    },
    {
      question: '¿Qué zonas de Mendoza cubren y hay costo de traslado?',
      answer: 'Cubrimos Gran Mendoza (Capital, Godoy Cruz, Guaymallén, Las Heras), Maipú, Luján de Cuyo y Zona Este (San Martín, Junín, Rivadavia) sin costo adicional. Para Valle de Uco o zonas alejadas se contempla un mínimo adicional por combustible.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-slate-200 text-slate-800 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
            Respuestas Rápidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 font-montserrat">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Resolvé tus dudas en segundos sobre el servicio de fotocabinas e impresiones en Mendoza.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 text-base sm:text-lg hover:text-[#DC2626] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#DC2626]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
