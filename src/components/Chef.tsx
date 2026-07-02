/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Award, Compass, Quote, CheckCircle2 } from 'lucide-react';

interface ChefProps {
  isDark: boolean;
}

export default function Chef({ isDark }: ChefProps) {
  const stats = [
    { value: '24+', label: 'Years Culinary Experience' },
    { value: '3', label: 'Michelin Stars Awarded' },
    { value: '100%', label: 'Sourcing Traceability' },
    { value: '14', label: 'Global Culinary Awards' },
  ];

  const signatures = [
    { name: 'Kagoshima A5 Wagyu', desc: 'Basted with roasted garlic herb tallow & served with bone marrow reduction.' },
    { name: 'Brittany Blue Lobster', desc: 'Poached in sweet saffron emulsion with tender sea asparagus.' },
    { name: 'Caramelized Foie Gras Torchon', desc: 'Paired with aged balsamic pearls and toasted house brioche.' },
  ];

  return (
    <section
      id="chef"
      className={`py-24 md:py-32 transition-colors duration-500 overflow-hidden ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            the vision & artistry
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            Executive Chef Marcus Vance
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative group">
            {/* Elegant framing accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40 z-10 pointer-events-none" />
            
            <div className="overflow-hidden rounded-2xl shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
                alt="Executive Chef Marcus Vance Portrait"
                className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Overlay quote card on bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-white">
                <p className="text-xs tracking-widest text-gold uppercase font-semibold mb-2">Marcus Vance</p>
                <p className="text-[11px] font-sans text-gray-300 uppercase tracking-widest">
                  Grand Officier Maître Cuisinier de France
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Biography, Stats & Signature Dishes */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Biography */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold">culinary philosophy</span>
              <h3 className={`text-2xl md:text-3xl font-serif font-light ${
                isDark ? 'text-white' : 'text-luxury-dark'
              }`}>
                "Sovereignty of Taste"
              </h3>
              <p className={`text-sm md:text-base font-light leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-[#444444]'
              }`}>
                Marcus Vance trained under French legends at L’Arpège and Guy Savoy in Paris before moving back to establish his own culinary sanctuary. For Chef Vance, each dish is a meticulous canvas that reconciles classical precision with spontaneous foraging.
              </p>
              <p className={`text-sm font-light leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-luxury-light'
              }`}>
                "Nature is the primary architect; my kitchen is simply a translation chamber. We do not dominate the ingredients; we study their texture, water content, and lipid qualities to design cooking heat profiles that unlock their absolute culinary truth."
              </p>
            </div>

            {/* Signature dishes list */}
            <div className="space-y-4">
              <h4 className={`text-xs uppercase tracking-[0.2em] font-bold text-gold`}>Chef’s Signature Preparations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {signatures.map((sig, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${
                      isDark ? 'bg-luxury-gray/40 border-white/5' : 'bg-white border-luxury-dark/5 shadow-sm'
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      isDark ? 'text-white' : 'text-luxury-dark'
                    }`}>
                      {sig.name}
                    </p>
                    <p className={`text-[11px] font-light leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-luxury-light'
                    }`}>
                      {sig.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gold/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-2xl sm:text-3xl font-serif font-semibold text-gold tracking-tight">{stat.value}</p>
                  <p className={`text-[10px] uppercase tracking-widest font-sans mt-1 ${
                    isDark ? 'text-gray-400' : 'text-luxury-light'
                  }`}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className={`p-6 rounded-xl relative ${
              isDark ? 'bg-luxury-gray/40 border border-white/5' : 'bg-white border border-luxury-dark/5 shadow-sm'
            }`}>
              <Quote className="absolute top-4 right-6 w-12 h-12 text-gold/10 pointer-events-none" />
              <p className={`text-sm md:text-base font-serif italic font-light leading-relaxed text-center text-gold`}>
                "The finest gastronomy occurs when the guest forgets the chef's signature, and simply reconnects with the Earth's quiet, brilliant memory."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
