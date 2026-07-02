/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Calendar, ArrowUp, Star } from 'lucide-react';

interface FloatingWidgetsProps {
  isDark: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function FloatingWidgets({ isDark, onNavigate }: FloatingWidgetsProps) {
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 z-40 flex flex-col gap-4 right-6 items-end">
      
      {/* 1. SCROLL TO TOP / STICKY BOOKING BUTTON WIDGET */}
      <AnimatePresence>
        {showStickyBtn && (
          <div className="flex flex-col gap-3">
            
            {/* Scroll back to top */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              onClick={handleScrollTop}
              className={`p-3 rounded-full border shadow-xl transition-all cursor-pointer hover:text-gold ${
                isDark
                  ? 'bg-luxury-gray/95 backdrop-blur-md border-white/10 text-white hover:bg-white/10'
                  : 'bg-white/95 backdrop-blur-md border-luxury-dark/10 text-luxury-dark hover:bg-gold-light/20'
              }`}
              title="Scroll to peak"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>

            {/* Quick Sticky Reserve CTA */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              onClick={() => onNavigate('reservations')}
              className="px-5 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.18em] uppercase font-bold rounded-full shadow-2xl shadow-gold/25 flex items-center space-x-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </motion.button>

          </div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING INSTANT WHATSAPP CONCIERGE BUTTON */}
      <a
        href="https://wa.me/13105550190?text=Hello%20L'Étoile%20Concierge,%20I%20would%20like%20to%20inquire%20about..."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group cursor-pointer"
        title="Chat with Concierge on WhatsApp"
      >
        {/* Animated Background pulse */}
        <div className="absolute inset-0 bg-emerald-600/25 rounded-full animate-ping group-hover:animate-none pointer-events-none" />
        
        <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/15 transition-all duration-300 group-hover:scale-110">
          <MessageSquare className="w-5.5 h-5.5 fill-white" />
        </div>

        {/* Floating text badge on hover */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-black/90 backdrop-blur-md text-white text-[10px] tracking-wider uppercase font-bold rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Desk
        </span>
      </a>

    </div>
  );
}
