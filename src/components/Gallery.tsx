import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Casamiento en Bodega Los Toneles',
      location: 'Guaymallén, Mendoza',
      category: 'bodas',
      imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
      badge: 'Tótem + Impresiones',
    },
    {
      id: '2',
      title: 'Plataforma 360° en Quinta La Querencia',
      location: 'Maipú, Mendoza',
      category: '360',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
      badge: 'Video 360° Slow Mo',
    },
    {
      id: '3',
      title: 'Fiesta de 15 en Salón Palmares',
      location: 'Godoy Cruz, Mendoza',
      category: 'cumples',
      imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
      badge: 'Mis 15 VIP',
    },
    {
      id: '4',
      title: 'Tótem Fotográfico en San Martín',
      location: 'Zona Este, Mendoza',
      category: 'totem',
      imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800',
      badge: 'Impresiones Ilimitadas',
    },
    {
      id: '5',
      title: 'Boda en Finca Don Bosco',
      location: 'Luján de Cuyo, Mendoza',
      category: 'bodas',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
      badge: 'Tótem + Cotillón',
    },
    {
      id: '6',
      title: '360° Fiesta de Fin de Año Corporativa',
      location: 'Ciudad de Mendoza',
      category: '360',
      imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      badge: 'Video Viral QR',
    },
  ];

  const filteredItems = activeCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-[#DC2626]/10 text-[#DC2626] font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
            Momentos Flash
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight font-montserrat">
            Nuestra Experiencia en Acción
          </h2>
          <div className="w-24 h-1.5 bg-[#FACC15] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Mirá cómo disfrutaron nuestros clientes en los mejores salones, bodegas y eventos de Mendoza.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos los Eventos' },
            { id: 'totem', label: 'Tótem Fotográfico' },
            { id: '360', label: 'Plataforma 360°' },
            { id: 'bodas', label: 'Bodas & Casamientos' },
            { id: 'cumples', label: 'Cumpleaños de 15' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              <span className="absolute top-3 left-3 bg-[#FACC15] text-slate-900 text-[11px] font-black px-3 py-1 rounded-full shadow">
                {item.badge}
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-bold text-sm leading-snug mb-1 group-hover:text-[#FACC15] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#DC2626]" /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-slate-900 rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-red-600 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-white">
              <span className="bg-[#FACC15] text-slate-900 font-bold text-xs px-3 py-1 rounded-full inline-block mb-3">
                {selectedImage.badge}
              </span>
              <h3 className="text-xl font-bold font-montserrat mb-1">{selectedImage.title}</h3>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#DC2626]" /> {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
