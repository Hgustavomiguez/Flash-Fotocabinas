import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PhotoStripSimulator } from './components/PhotoStripSimulator';
import { Gallery } from './components/Gallery';
import { AvailabilityChecker } from './components/AvailabilityChecker';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'totem' | '360' | 'combo'>('totem');

  const handleOpenQuote = (service: 'totem' | '360' | 'combo' = 'totem') => {
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FACC15] selection:text-slate-900">
      <Navbar onOpenQuote={() => handleOpenQuote('totem')} />
      
      <main>
        <Hero onOpenQuote={() => handleOpenQuote('totem')} />
        <Services onSelectService={(service) => handleOpenQuote(service)} />
        <PhotoStripSimulator />
        <Gallery />
        <AvailabilityChecker />
        <FAQ />
        <CTASection onOpenQuote={() => handleOpenQuote('totem')} />
      </main>

      <Footer />
      <WhatsAppFloat />

      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
