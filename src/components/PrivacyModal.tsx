/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, ShieldCheck, Scale, Star } from 'lucide-react';

interface PrivacyModalProps {
  isDark: boolean;
  activeSheet: 'privacy' | 'terms' | null;
  onCloseSheet: () => void;
}

export default function PrivacyModal({ isDark, activeSheet, onCloseSheet }: PrivacyModalProps) {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('letoile-cookies-accepted');
    if (!accepted) {
      // Trigger banner after a brief luxury delay
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('letoile-cookies-accepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <>
      {/* 1. ELEGANT FLOATING COOKIE CONSENT BANNER */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50"
          >
            <div className={`p-6 rounded-2xl border shadow-2xl flex flex-col gap-4 relative overflow-hidden ${
              isDark 
                ? 'bg-luxury-gray/95 backdrop-blur-md border-white/10 text-white' 
                : 'bg-[#F7F4EE]/95 backdrop-blur-md border-[#C9A227]/20 text-luxury-dark'
            }`}>
              
              {/* Gold Accent Strip */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />

              <div className="flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider">
                    Culinary Cookie Files
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-luxury-light'
                  }`}>
                    L'Étoile uses cookies and secure identifiers to customize your booking flow, preserve dark-theme selections, and study gourmet analytics. By continuing, you agree to our policies.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 mt-1">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className={`px-4 py-2 text-[10px] tracking-wider uppercase font-medium rounded-md transition-colors ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-luxury-light hover:text-luxury-dark'
                  }`}
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptCookies}
                  className="px-5 py-2.5 bg-gold hover:bg-gold-hover text-white text-[10px] tracking-wider uppercase font-bold rounded-md shadow-md shadow-gold/15 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Accept All
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. REGULATION DOCUMENTS SHEET MODAL OVERLAY */}
      <AnimatePresence>
        {activeSheet !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-2xl max-h-[85vh] rounded-2xl border flex flex-col overflow-hidden relative ${
                isDark 
                  ? 'bg-luxury-dark border-white/10 text-white shadow-2xl shadow-black/80' 
                  : 'bg-[#F7F4EE] border-luxury-dark/10 text-luxury-dark shadow-2xl shadow-luxury-dark/20'
              }`}
            >
              
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-gold/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {activeSheet === 'privacy' 
                    ? <ShieldCheck className="w-5 h-5 text-gold" /> 
                    : <Scale className="w-5 h-5 text-gold" />
                  }
                  <h3 className="text-lg md:text-xl font-serif tracking-wide">
                    {activeSheet === 'privacy' ? 'Privacy Policy & Data Rights' : 'Terms & Luxury Conditions'}
                  </h3>
                </div>

                <button
                  onClick={onCloseSheet}
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    isDark ? 'border-white/10 hover:bg-white/5' : 'border-luxury-dark/10 hover:bg-luxury-dark/5'
                  }`}
                  aria-label="Close document sheet"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrolling Content Box */}
              <div className={`p-6 md:p-8 overflow-y-auto text-xs sm:text-sm font-light leading-relaxed space-y-6 scrollbar-thin ${
                isDark ? 'text-gray-300' : 'text-luxury-light'
              }`}>
                
                {activeSheet === 'privacy' ? (
                  // --- PRIVACY DETAILS ---
                  <>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-[10px] tracking-widest text-gold uppercase font-mono font-bold">L'Étoile Privacy Mandate • v2026.1</span>
                    </div>

                    <p>
                      Your privacy is an essential tenet of the L'Étoile fine-dining experience. This document outlines how our culinary and digital concierge teams collect, protect, and process the personal information you submit to us through our secure website.
                    </p>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>1. Personal Identifiers We Collect</h4>
                    <p>
                      When securing a table or subscribing to our culinary dispatch, we collect specific details required to fulfill your reservation:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Your full name to designate guest seating.</li>
                      <li>Contact email and phone coordinates to transmit confirmation tickets and immediate SMS delay notifications.</li>
                      <li>Dietary concerns, allergies, or physical accommodation requests to customize the kitchen’s preparation profiles.</li>
                      <li>Historical meal preferences, special occasions, and seating designations.</li>
                    </ul>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>2. Data Security & Discretion</h4>
                    <p>
                      We utilize enterprise-grade SSL socket tunnels and private Firestore databases to encrypt all patron data. Your identifiers are never leased, exchanged, or disclosed to external marketing brokers. Only authorized culinary chefs and concierge supervisors gain access to your files.
                    </p>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>3. Your Legal & Consent Rights</h4>
                    <p>
                      You preserve the absolute right to demand the erasure of your reservation history or contact metadata at any time. To exercise your rights, please contact our privacy desk directly at <strong className="text-gold">privacy@letoile-dining.com</strong>.
                    </p>
                  </>
                ) : (
                  // --- TERMS DETAILS ---
                  <>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-[10px] tracking-widest text-gold uppercase font-mono font-bold">Patron Dining Covenants • v2026.1</span>
                    </div>

                    <p>
                      By accessing this site, requesting private salon spaces, or securing table arrangements, you agree to comply with the terms of our physical restaurant guidelines.
                    </p>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>1. The Reservation Guarantee & Holds</h4>
                    <p>
                      Due to our limited seating capacity, table holds are released exactly 15 minutes past your scheduled reservation time. If your party is delayed, please dial our concierge immediately. No-shows or cancellations within 24 hours of booking may be subject to a standard holding charge depending on specific peak-hour slots.
                    </p>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>2. Code of Conduct & Dress Standard</h4>
                    <p>
                      L'Étoile implements a formal elegant dress code to preserve our Michelin-star visual atmosphere. Gentlemen are required to wear tailored jackets or formal blazers. Athletic footwear, sportswear, caps, or torn denim items are strictly prohibited in our main dining salons.
                    </p>

                    <h4 className={`text-xs uppercase tracking-wider font-bold text-gold`}>3. Liability Limit & Sourcing Disclaimer</h4>
                    <p>
                      While our master culinary team exerts supreme caution to prevent cross-allergen contamination, L'Étoile cannot guarantee 100% allergen-free environments given our extensive usage of natural seeds, tree nuts, and dairy fats. Patrons hold the final responsibility to alert staff about severe food allergies.
                    </p>
                  </>
                )}

              </div>

              {/* Footer Banner */}
              <div className="p-6 border-t border-gold/10 flex justify-end">
                <button
                  onClick={onCloseSheet}
                  className="px-6 py-2.5 bg-gold hover:bg-gold-hover text-white text-xs tracking-wider uppercase font-bold rounded-md transition-all cursor-pointer"
                >
                  I Understand
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
