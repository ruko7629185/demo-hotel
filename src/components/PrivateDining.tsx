/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Sparkles, Check, ArrowRight, Star } from 'lucide-react';
import { PRIVATE_DINING_PACKAGES } from '../data';

interface PrivateDiningProps {
  isDark: boolean;
  onSelectOccasion: (occasion: string) => void;
}

export default function PrivateDining({ isDark, onSelectOccasion }: PrivateDiningProps) {
  return (
    <section
      id="private-dining"
      className={`py-24 md:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[#151515]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            exclusive events & salons
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            Private Dining & Curated Salons
          </h2>
          <p className={`text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mt-4 ${
            isDark ? 'text-gray-400' : 'text-luxury-light'
          }`}>
            From corporate board retreats to candlelit wedding feasts, our custom spatial arrangements offer ultimate discretion, bespoke tablescaping, and dedicated butler hospitality.
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Private Dining Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRIVATE_DINING_PACKAGES.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={pkg.id}
              className={`flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 group hover:shadow-2xl ${
                isDark
                  ? 'bg-luxury-dark/40 border-white/5 hover:border-gold/30 hover:bg-luxury-dark/60'
                  : 'bg-[#F7F4EE]/30 border-luxury-dark/5 hover:border-gold/30 hover:bg-white shadow-sm'
              }`}
            >
              {/* Photo cover with zoom */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                {/* Capacity badge */}
                <span className="absolute bottom-4 left-4 px-3.5 py-1 bg-gold text-white text-[10px] uppercase font-bold tracking-widest rounded-sm flex items-center gap-1.5 shadow-md">
                  <Users className="w-3.5 h-3.5" />
                  <span>{pkg.capacity}</span>
                </span>
              </div>

              {/* Package Details */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-serif font-medium tracking-wide mb-3 ${
                    isDark ? 'text-white' : 'text-luxury-dark'
                  }`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs md:text-sm font-light leading-relaxed mb-6 ${
                    isDark ? 'text-gray-400' : 'text-luxury-light'
                  }`}>
                    {pkg.description}
                  </p>

                  {/* Bullet points features list */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-light">
                        <div className="p-0.5 rounded-full bg-gold/10 text-gold mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={isDark ? 'text-gray-300' : 'text-[#444444]'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Event booking CTA button */}
                <button
                  onClick={() => onSelectOccasion(pkg.title)}
                  className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-bold rounded-sm border transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    isDark
                      ? 'border-gold/30 text-gold hover:bg-gold hover:text-white hover:border-gold'
                      : 'border-gold text-gold hover:bg-gold hover:text-white shadow-sm'
                  }`}
                >
                  <span>Inquire for Salon</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Catering Offer Block */}
        <div className={`mt-20 p-8 md:p-12 rounded-2xl border flex flex-col lg:flex-row items-center justify-between gap-8 ${
          isDark 
            ? 'bg-luxury-gray/40 border-white/5' 
            : 'bg-[#F7F4EE] border-luxury-dark/5 shadow-md'
        }`}>
          <div className="space-y-3 text-center lg:text-left">
            <span className="px-2 py-0.5 bg-gold/10 text-gold border border-gold/20 rounded-full text-[9px] uppercase tracking-wider font-semibold inline-flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>luxury mobile service</span>
            </span>
            <h3 className={`text-xl md:text-2xl font-serif font-light tracking-wide ${
              isDark ? 'text-white' : 'text-luxury-dark'
            }`}>
              Bespoke Off-Site Fine Dining & Catering
            </h3>
            <p className={`text-xs md:text-sm font-light max-w-xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-luxury-light'
            }`}>
              Bring the culinary theater of Marcus Vance to your private estate, megayacht, or corporate gala. We deploy our culinary teams, master sommeliers, and custom tablescaping directly to you.
            </p>
          </div>
          
          <button
            onClick={() => onSelectOccasion('Luxury Off-Site Catering')}
            className="px-8 py-4 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.25em] uppercase font-semibold rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 shrink-0 cursor-pointer"
          >
            Inquire for Catering
          </button>
        </div>

      </div>
    </section>
  );
}
