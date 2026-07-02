/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, Star, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  isDark: boolean;
}

export default function Gallery({ isDark }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryItem['category']>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: { label: string; id: 'all' | GalleryItem['category'] }[] = [
    { label: 'All Images', id: 'all' },
    { label: 'Artisanal Dishes', id: 'dishes' },
    { label: 'The Salons', id: 'interior' },
    { label: 'Wine Cellar', id: 'cellar' },
    { label: 'Behind The Scenes', id: 'behind-scenes' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    // Find absolute index of item in global array or in current filtered array
    const idx = GALLERY_ITEMS.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (dir: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    let nextIndex = dir === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex >= GALLERY_ITEMS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_ITEMS.length - 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section
      id="gallery"
      className={`py-24 md:py-32 transition-colors duration-500 ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            visual narratives
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            The Gallery of Aesthetics
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? 'text-gold border-b-2 border-gold pb-1.5'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-luxury-light hover:text-gold'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Pinterest Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-zoom-in shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-2xl h-auto min-h-[220px] max-h-[420px] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with smooth metadata slide up */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  {/* Eye Zoom Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-gold/80 text-white rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-gold uppercase font-mono mb-1">
                    {item.category.replace('-', ' ')}
                  </span>
                  
                  <h3 className="text-lg font-serif text-white tracking-wide mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-gray-300 font-light leading-relaxed truncate">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Cinematic Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 md:p-8"
            >
              
              {/* Top Controls Bar */}
              <div className="absolute top-6 left-0 w-full px-6 md:px-12 flex items-center justify-between text-white z-10">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-xs tracking-[0.3em] font-medium uppercase text-gold">
                    L'Étoile Gallery • {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                </div>
                
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content: Left Nav, Image, Right Nav */}
              <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] flex items-center justify-center">
                
                {/* Left Navigation */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-2 md:left-6 p-4 bg-black/50 hover:bg-black/80 hover:text-gold text-white rounded-full border border-white/10 transition-all z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Immersive Image Display */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center px-12 md:px-20"
                >
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].image}
                    alt={GALLERY_ITEMS[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5 select-none"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right Navigation */}
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-2 md:right-6 p-4 bg-black/50 hover:bg-black/80 hover:text-gold text-white rounded-full border border-white/10 transition-all z-10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Bottom Metadata Panel */}
              <div className="mt-6 text-center text-white max-w-xl px-4">
                <span className="px-3.5 py-1 bg-gold/15 text-gold border border-gold/30 text-[9px] uppercase tracking-widest font-bold rounded-sm inline-block mb-3">
                  {GALLERY_ITEMS[lightboxIndex].category.replace('-', ' ')}
                </span>
                
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide mb-2">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {GALLERY_ITEMS[lightboxIndex].description}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
