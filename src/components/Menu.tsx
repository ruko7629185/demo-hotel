/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, Wine, ShieldCheck, Heart } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  isDark: boolean;
}

export default function Menu({ isDark }: MenuProps) {
  const [activeTab, setActiveTab] = useState<'all' | MenuItem['category']>('starters');

  const categories: { label: string; id: 'all' | MenuItem['category'] }[] = [
    { label: 'Starters', id: 'starters' },
    { label: 'Main Course', id: 'mains' },
    { label: 'Seafood', id: 'seafood' },
    { label: 'Steak', id: 'steak' },
    { label: 'Desserts', id: 'desserts' },
    { label: 'Cellar Wines', id: 'wine' },
    { label: 'Craft Cocktails', id: 'cocktails' },
    { label: 'Chef Specials', id: 'specials' },
  ];

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  const getDietaryLabel = (tag: string) => {
    switch (tag) {
      case 'vegan': return 'VG';
      case 'vegetarian': return 'V';
      case 'gluten-free': return 'GF';
      case 'nut-free': return 'NF';
      case 'dairy-free': return 'DF';
      default: return '';
    }
  };

  return (
    <section
      id="menu"
      className={`py-24 md:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[#151515]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            gastronomic selections
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            The Summer Tasting Menu
          </h2>
          <p className={`text-xs md:text-sm font-light tracking-widest uppercase mt-4 ${
            isDark ? 'text-gray-400' : 'text-luxury-light'
          }`}>
            Curated by Marcus Vance • Currencies in USD
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Navigation / Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 md:mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? 'bg-gold border-gold text-white shadow-md shadow-gold/20'
                  : isDark
                    ? 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white hover:bg-white/5'
                    : 'border-luxury-dark/10 text-luxury-light hover:border-gold/30 hover:text-gold hover:bg-gold-light/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-luxury-dark/40 border-white/5 hover:border-gold/30'
                    : 'bg-[#F7F4EE]/40 border-luxury-dark/5 hover:border-gold/30 shadow-sm hover:shadow-md'
                }`}
              >
                
                {/* Image zoom wrapper */}
                <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category mini watermark on top left */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-md rounded-sm text-[8px] tracking-widest text-white/80 uppercase font-mono">
                    {item.category}
                  </span>
                </div>

                {/* Content details */}
                <div className="flex flex-col justify-between flex-1">
                  
                  <div>
                    {/* Header: Name, Badges, Price */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`text-lg md:text-xl font-serif font-medium tracking-wide ${
                          isDark ? 'text-white' : 'text-luxury-dark'
                        }`}>
                          {item.name}
                        </h3>
                        
                        {/* Badges */}
                        {item.chefRecommended && (
                          <span className="px-2 py-0.5 bg-gold/10 text-gold border border-gold/20 rounded-full text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Recommended</span>
                          </span>
                        )}
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-black text-[#F1E5C6] border border-gold/10 rounded-full text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <Star className="w-2.5 h-2.5 fill-[#F1E5C6]" />
                            <span>Popular</span>
                          </span>
                        )}
                      </div>
                      
                      {/* Price */}
                      <span className="text-lg font-serif font-medium text-gold tracking-wide">
                        ${item.price}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className={`text-xs md:text-sm font-light leading-relaxed mb-4 ${
                      isDark ? 'text-gray-400' : 'text-luxury-light'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Footnote: Dietary labels & wine pairing advice */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gold/10">
                    {/* Wine Pairing */}
                    {item.pairing ? (
                      <div className="flex items-center space-x-1.5 text-[10px] tracking-wide">
                        <Wine className="w-3.5 h-3.5 text-gold" />
                        <span className={isDark ? 'text-gray-400' : 'text-luxury-light'}>Sommelier Pairing: </span>
                        <span className="text-gold font-serif italic font-medium">{item.pairing}</span>
                      </div>
                    ) : (
                      <div className="text-[10px] text-gray-400 flex items-center space-x-1">
                        <ShieldCheck className="w-3 h-3 text-gold/60" />
                        <span>Sustainably Foraged</span>
                      </div>
                    )}

                    {/* Dietary Badges */}
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex items-center space-x-1">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className={`w-6 h-6 rounded-full border flex items-center justify-center text-[8px] font-mono font-bold uppercase ${
                              isDark
                                ? 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                                : 'border-luxury-dark/10 text-luxury-light hover:text-luxury-dark hover:border-luxury-dark/20'
                            }`}
                            title={tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          >
                            {getDietaryLabel(tag)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Disclaimer / dietary note */}
        <div className={`mt-16 text-center text-xs font-light max-w-xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-500' : 'text-luxury-light'
        }`}>
          * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please notify your service expert regarding any specific food allergies or dietary strictures.
        </div>

      </div>
    </section>
  );
}
