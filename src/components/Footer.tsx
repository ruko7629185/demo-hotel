/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Mail, Send, Check, AlertCircle, Instagram, Youtube, Facebook, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  onNavigate: (sectionId: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export default function Footer({ isDark, onNavigate, onOpenPolicy }: FooterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMsg('Please specify an email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email.');
      return;
    }

    setStatus('loading');

    // Simulate luxury API response
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer
      id="footer-main"
      className={`pt-16 pb-12 transition-colors duration-500 border-t ${
        isDark 
          ? 'bg-[#0A0A0A] border-white/5 text-gray-400' 
          : 'bg-[#FAF8F5] border-luxury-dark/5 text-luxury-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-gold/10">
          
          {/* Column 1: Brand pitch */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className={`text-xl font-serif tracking-[0.15em] font-light ${
                isDark ? 'text-white' : 'text-luxury-dark'
              }`}>
                L'ÉTOILE
              </span>
            </div>
            <p className="text-xs font-light leading-relaxed max-w-sm">
              An extraordinary fine-dining journey celebrating regional biodynamics, artisanal fire-cooking, and elite European service standards. Inducted with three Michelin stars.
            </p>
            
            {/* Social channels icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gold/20 hover:border-gold text-gold transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gold/20 hover:border-gold text-gold transition-colors"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gold/20 hover:border-gold text-gold transition-colors"
                aria-label="Youtube Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold text-gold`}>
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-light">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-gold transition-colors cursor-pointer">Home</button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-gold transition-colors cursor-pointer">About</button>
              <button onClick={() => onNavigate('menu')} className="text-left hover:text-gold transition-colors cursor-pointer">Menu</button>
              <button onClick={() => onNavigate('private-dining')} className="text-left hover:text-gold transition-colors cursor-pointer">Salons</button>
              <button onClick={() => onNavigate('chef')} className="text-left hover:text-gold transition-colors cursor-pointer">Chef</button>
              <button onClick={() => onNavigate('gallery')} className="text-left hover:text-gold transition-colors cursor-pointer">Gallery</button>
              <button onClick={() => onNavigate('testimonials')} className="text-left hover:text-gold transition-colors cursor-pointer">Reviews</button>
              <button onClick={() => onNavigate('reservations')} className="text-left hover:text-gold transition-colors cursor-pointer">Booking</button>
            </div>
          </div>

          {/* Column 3: Hours recap */}
          <div className="md:col-span-2 space-y-4 text-xs font-light">
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold text-gold`}>
              Concierge Desk
            </h4>
            <p>
              Daily Service<br />
              <span className={isDark ? 'text-white font-medium' : 'text-luxury-dark font-medium'}>
                5:00 PM – 11:30 PM
              </span>
            </p>
            <p>
              Direct Dial<br />
              <a href="tel:+13105550190" className="text-gold hover:underline">
                +1 (310) 555-0190
              </a>
            </p>
          </div>

          {/* Column 4: Newsletter subscription */}
          <div className="md:col-span-3 space-y-4">
            <h4 className={`text-xs uppercase tracking-[0.2em] font-bold text-gold`}>
              The Culinary Dispatch
            </h4>
            <p className="text-xs font-light leading-relaxed">
              Subscribe to receive exclusive invitations to seasonal vertical wine flights and Michelin-chef degustation previews.
            </p>

            {/* Newsletter form with validator states */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="elizabeth.vance@example.com"
                  className={`w-full px-4 py-3 pr-12 rounded-lg border text-xs focus:outline-none focus:ring-1 focus:ring-gold transition-all ${
                    status === 'error'
                      ? 'border-red-500/50 bg-red-500/5 text-red-400'
                      : isDark
                        ? 'bg-luxury-dark/50 border-white/10 text-white placeholder-gray-500'
                        : 'bg-white border-luxury-dark/10 text-luxury-dark placeholder-gray-400'
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-gold hover:bg-gold-hover disabled:bg-gold/40 text-white rounded-md transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  {status === 'loading' ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Status responses */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2 text-emerald-500 text-xs font-medium"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Inscribed successfully. Thank you.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2 text-red-500 text-xs font-medium"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Bottom Bar: copyright and regulation sheets */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
          <p className="text-gray-500">
            © {new Date().getFullYear()} L'Étoile Beverly Hills. All culinary and architectural rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-gold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-gold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-gold" />
              <span>Terms of Service</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
