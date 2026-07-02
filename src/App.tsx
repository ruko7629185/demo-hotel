/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Chef from './components/Chef';
import PrivateDining from './components/PrivateDining';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import PrivacyModal from './components/PrivacyModal';
import Page404 from './components/Page404';

export default function App() {
  const [isDark, setIsDark] = useState(true); // Default to a sophisticated dark mode for luxury
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledOccasion, setPrefilledOccasion] = useState('');
  const [activeSheet, setActiveSheet] = useState<'privacy' | 'terms' | null>(null);
  const [show404, setShow404] = useState(false);

  // Scrollspy effect: highlights the active section on scroll
  useEffect(() => {
    if (show404) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const sections = [
        'home',
        'about',
        'menu',
        'private-dining',
        'chef',
        'gallery',
        'testimonials',
        'reservations',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [show404]);

  // Navigate function: scrolls smoothly to targeted section ID
  const handleNavigate = (sectionId: string) => {
    if (show404) {
      setShow404(false);
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      }
    }, 150);
  };

  // Pre-fill trigger from Private Dining cards
  const handleSelectOccasion = (occasion: string) => {
    setPrefilledOccasion(occasion);
    handleNavigate('reservations');
  };

  // Handle demo visual toggle for 404 page
  const handleToggle404 = () => {
    setShow404(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={isDark ? 'dark bg-[#0D0D0D] text-white' : 'bg-[#F7F4EE] text-luxury-dark'}>
      
      {show404 ? (
        // --- 404 EXQUISITE VISUAL DEMO ---
        <Page404 isDark={isDark} onGoHome={() => handleNavigate('home')} />
      ) : (
        // --- MAIN LUXURY EXPERIENCE VIEW ---
        <div className="min-h-screen flex flex-col justify-between">
          
          {/* Transparent-Solid Active Header Navbar */}
          <Navbar
            isDark={isDark}
            setIsDark={setIsDark}
            onNavigate={handleNavigate}
            activeSection={activeSection}
          />

          <main className="flex-grow">
            {/* 1. Cinematic Full-screen Hero Banner */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Editorial philosophy introduction & chronological timeline */}
            <About isDark={isDark} />

            {/* 3. Interactive menu selections with Sommelier pairings */}
            <Menu isDark={isDark} />

            {/* 4. Executive Chef Marcus Vance biography & signature recipes */}
            <Chef isDark={isDark} />

            {/* 5. Private Salons packages and custom catering features */}
            <PrivateDining isDark={isDark} onSelectOccasion={handleSelectOccasion} />

            {/* 6. Pinterest-style masonry Gallery & Full-screen Lightbox */}
            <Gallery isDark={isDark} />

            {/* 7. Patron experience sliders & Google ratings trusts */}
            <Testimonials isDark={isDark} />

            {/* 8. Premium validating Reservation booking system */}
            <ReservationForm
              isDark={isDark}
              prefilledOccasion={prefilledOccasion}
              setPrefilledOccasion={setPrefilledOccasion}
            />

            {/* 9. Direct contact, concierge channels, valet parking map, and instagram feed */}
            <Contact isDark={isDark} />
          </main>

          {/* Minimal Elegant Footer & Newsletter dispatch */}
          <Footer
            isDark={isDark}
            onNavigate={handleNavigate}
            onOpenPolicy={setActiveSheet}
          />

          {/* Floating WhatsApp concierge & Scroll to booking Desk */}
          <FloatingWidgets isDark={isDark} onNavigate={handleNavigate} />

          {/* Cookie banner accept and Privacy regulations slides modals */}
          <PrivacyModal
            isDark={isDark}
            activeSheet={activeSheet}
            onCloseSheet={() => setActiveSheet(null)}
          />

          {/* Demo Pathway Switcher (Allows developer/user to inspect the beautiful 404 page) */}
          <div className="fixed bottom-6 left-6 z-40">
            <button
              onClick={handleToggle404}
              className={`px-3 py-1.5 bg-gold/10 hover:bg-gold/20 text-gold text-[9px] tracking-widest uppercase font-bold rounded-md border border-gold/20 backdrop-blur-md shadow-md hover:scale-105 transition-all cursor-pointer`}
              title="Test L'Étoile 404 Viewport Page"
            >
              Test 404 View
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
