/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Star, Shield, HelpCircle, Hourglass, Landmark, Flame } from 'lucide-react';
import { AWARDS, TIMELINE_EVENTS } from '../data';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  // Map award icon names to lucide components
  const getAwardIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-gold" />;
      case 'Star':
        return <Star className="w-6 h-6 text-gold fill-gold" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-gold" />;
      default:
        return <Award className="w-6 h-6 text-gold" />;
    }
  };

  const experienceCards = [
    {
      icon: <Flame className="w-6 h-6 text-gold" />,
      title: 'Artisanal Gastronomy',
      desc: 'Dishes forged over open flames, slow-cooked preserves, and tableside master plating.',
    },
    {
      icon: <Hourglass className="w-6 h-6 text-gold" />,
      title: 'Meticulous Aging',
      desc: '45-day dry-aged heritage cuts and cellar vintages reaching over two decades of maturity.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-gold" />,
      title: 'Architectural Serenity',
      desc: 'Elegant dining rooms, custom Belgian linen, and silent acoustics designed to prioritize flow.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 md:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            our heritage & craft
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            Philosophy of Pure Culinary Theatre
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Narrative & Experience Cards */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[11px] tracking-[0.3em] font-medium uppercase text-gold block">
              established in mcmxcviii
            </span>
            <p className={`text-xl md:text-2xl font-serif font-light leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-[#444444]'
            }`}>
              At L'Étoile, dining is not merely a meal; it is a meticulously choreographed sequence of sensory revelations. We believe in respecting the absolute integrity of raw ingredients.
            </p>
            <p className={`text-sm md:text-base font-light leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-luxury-light'
            }`}>
              Sourcing exclusively from regional biodynamic micro-farms, wild-foraged woodlands, and hand-line fisheries, our kitchen remains a laboratory of elegant restraint. Every reduction, every foam, and every garnish serves a singular focus: to elevate natural flavors into their most expressive, emotional forms.
            </p>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {experienceCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-luxury-gray/40 border-white/5 hover:border-gold/30 hover:bg-luxury-gray/60' 
                      : 'bg-white border-luxury-dark/5 hover:border-gold/30 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="mb-4">{card.icon}</div>
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                    isDark ? 'text-white' : 'text-luxury-dark'
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-luxury-light'
                  }`}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Premium Image & Awards Container */}
          <div className="lg:col-span-5 space-y-12">
            {/* Elegant Image Container with a Gold Accent Frame */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-lg border border-gold/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
                  alt="L'Étoile Fine Dining Architecture Room"
                  className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Awards & Distinctions Banner */}
            <div className={`p-8 rounded-lg border ${
              isDark ? 'bg-luxury-gray/40 border-white/5' : 'bg-white border-luxury-dark/5 shadow-md'
            }`}>
              <h3 className={`text-xs font-bold uppercase tracking-[0.25em] mb-6 text-gold flex items-center gap-2`}>
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span>Accolades & Distinctions</span>
              </h3>
              <div className="space-y-6">
                {AWARDS.map((award) => (
                  <div key={award.id} className="flex items-start gap-4 pb-4 border-b border-gold/10 last:border-0 last:pb-0">
                    <div className="p-2 bg-gold/10 rounded-sm">
                      {getAwardIcon(award.iconName)}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold tracking-wide ${
                        isDark ? 'text-white' : 'text-luxury-dark'
                      }`}>
                        {award.title}
                      </p>
                      <p className={`text-xs font-light ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>
                        {award.organization} • <span className="text-gold italic">{award.year}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Story Timeline Block */}
        <div className={`mt-24 pt-16 border-t border-gold/20`}>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-2">
              our chronological journey
            </span>
            <h3 className={`text-2xl md:text-3xl font-serif font-light ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
              The Timeline of Gastronomic Evolution
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative group">
                {/* Connecting timeline line */}
                <div className="hidden md:block absolute top-[18px] left-[40px] right-[-40px] h-[1px] bg-gold/20 z-0 group-last:hidden" />
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 relative">
                  {/* Year Bubble */}
                  <div className="w-9 h-9 bg-gold text-white flex items-center justify-center rounded-full text-xs font-mono font-bold shadow-md shadow-gold/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {event.year}
                  </div>
                  
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                    isDark ? 'text-white' : 'text-luxury-dark'
                  }`}>
                    {event.title}
                  </h4>
                  <p className={`text-xs font-light leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-luxury-light'
                  }`}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
