/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Compass, Star, ArrowLeft } from 'lucide-react';

interface Page404Props {
  isDark: boolean;
  onGoHome: () => void;
}

export default function Page404({ isDark, onGoHome }: Page404Props) {
  return (
    <div className={`min-h-screen flex items-center justify-center p-6 text-center transition-colors duration-500 relative overflow-hidden ${
      isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
    }`}>
      {/* Decorative stars halo background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
        <Star className="w-96 h-96 text-gold fill-gold mx-auto mt-24" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        
        {/* Logo Mark */}
        <div className="flex items-center space-x-1.5 mb-8">
          <Star className="w-5 h-5 text-gold fill-gold animate-spin" style={{ animationDuration: '6s' }} />
          <span className={`text-xl font-serif tracking-[0.2em] uppercase font-light ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            L'ÉTOILE
          </span>
        </div>

        {/* 404 Code */}
        <h1 className="text-8xl sm:text-9xl font-serif font-light text-stroke-gold italic tracking-widest text-gold mb-4 leading-none">
          404
        </h1>

        <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
          pathway not found
        </span>

        <h2 className={`text-2xl sm:text-3xl font-serif font-light mb-4 ${
          isDark ? 'text-white' : 'text-luxury-dark'
        }`}>
          This Culinary Trail is Hidden
        </h2>

        <p className={`text-sm font-light leading-relaxed mb-10 max-w-sm ${
          isDark ? 'text-gray-400' : 'text-luxury-light'
        }`}>
          The pathway you requested does not correspond to our active tasting menu or private salon blueprints. Let us lead you back to our primary table.
        </p>

        {/* Home Button CTA */}
        <button
          onClick={onGoHome}
          className="px-8 py-4.5 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.25em] uppercase font-bold rounded-lg shadow-xl shadow-gold/20 flex items-center justify-center space-x-2.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to L'Étoile Home</span>
        </button>

      </div>
    </div>
  );
}
