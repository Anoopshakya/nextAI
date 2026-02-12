
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { LogisticsModule } from './components/LogisticsModule';
import { ProcessTimeline } from './components/ProcessTimeline';
import { KPISection } from './components/KPISection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="services" className="py-24 bg-slate-950/50">
          <ServicesGrid />
        </div>

        <div id="logistics" className="py-24">
          <LogisticsModule />
        </div>

        <KPISection />

        <div id="process" className="py-24 bg-slate-950/50">
          <ProcessTimeline />
        </div>

        <div id="contact" className="py-24">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
