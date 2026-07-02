/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Compass, ArrowDown, Award, Star } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Cinematic Background Image with Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          animate={{ scale: [1.02, 1.08] }}
          transition={{
            duration: 18,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920"
            alt="Cinematic Fine Dining Table Setting"
            className="w-full h-full object-cover object-center opacity-70 filter brightness-[0.7] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Radial Dark Gradient Overlay for optimal typographic contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-luxury-dark/95 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center text-white flex flex-col items-center">
        
        {/* Editorial Sub-header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-2 mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-black/40 backdrop-blur-md"
        >
          <div className="flex space-x-0.5">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <Star className="w-3 h-3 text-gold fill-gold" />
            <Star className="w-3 h-3 text-gold fill-gold" />
          </div>
          <span className="text-[10px] tracking-[0.3em] font-medium uppercase text-gold">
            three Michelin-Star Excellence
          </span>
        </motion.div>

        {/* Primary Luxury Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide mb-6 leading-[1.1] max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            An Extraordinary
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block text-stroke-gold italic font-medium tracking-normal mt-2"
          >
            Dining Experience
          </motion.span>
        </h1>

        {/* Premium Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg font-light tracking-[0.15em] text-[#D1CFC9] max-w-2xl mb-12 leading-relaxed"
        >
          Seasonal ingredients, handcrafted dishes, unforgettable evenings.
        </motion.p>

        {/* Action Callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate('reservations')}
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Table</span>
          </button>
          
          <button
            onClick={() => onNavigate('menu')}
            className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-gold hover:bg-white/5 text-white hover:text-gold text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Menu</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Award Medallion on bottom-left for larger screens */}
      <div className="absolute bottom-12 left-12 z-20 hidden xl:flex items-center space-x-3 text-white/60 text-xs tracking-wider">
        <div className="p-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          <Award className="w-5 h-5 text-gold" />
        </div>
        <div>
          <p className="font-serif italic font-medium text-white text-sm">Les Grandes Tables du Monde</p>
          <p className="text-[10px] text-gray-400 font-sans tracking-widest uppercase">Member Since 2021</p>
        </div>
      </div>

      {/* Scrolling Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={() => onNavigate('about')}
          className="flex flex-col items-center text-white/40 hover:text-gold transition-colors duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-gold" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
