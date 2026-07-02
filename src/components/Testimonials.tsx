/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  isDark: boolean;
}

export default function Testimonials({ isDark }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className={`py-24 md:py-32 transition-colors duration-500 relative overflow-hidden ${
        isDark ? 'bg-[#151515]' : 'bg-white'
      }`}
    >
      {/* Decorative background visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <Quote className="w-96 h-96 text-gold" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            patron experiences
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            Whispers of Praise
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Dynamic Reviews Badge (Google / Tripadvisor) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-center sm:text-left">
          <div className={`p-4 rounded-xl border flex items-center gap-4 ${
            isDark ? 'bg-luxury-dark/60 border-white/5' : 'bg-[#F7F4EE]/60 border-luxury-dark/5 shadow-sm'
          }`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className="w-8 h-8 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center space-x-0.5 mb-1">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              </div>
              <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
                4.9 / 5.0 Rating <span className="font-light text-gray-400 font-sans tracking-wide">• 428 Verified Guest Reviews</span>
              </p>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-4 ${
            isDark ? 'bg-luxury-dark/60 border-white/5' : 'bg-[#F7F4EE]/60 border-luxury-dark/5 shadow-sm'
          }`}>
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
              O
            </div>
            <div>
              <div className="flex items-center space-x-0.5 mb-1">
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              </div>
              <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
                Excellent Rating <span className="font-light text-gray-400 font-sans tracking-wide">• Opentable Diner Choice 2026</span>
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 md:p-14 rounded-2xl border text-center ${
                isDark 
                  ? 'bg-luxury-gray/40 border-white/5' 
                  : 'bg-[#F7F4EE]/30 border-luxury-dark/5 shadow-md'
              }`}
            >
              
              {/* Giant Gold Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-gold opacity-50" />
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {Array.from({ length: activeReview.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className={`text-lg md:text-2xl font-serif font-light leading-relaxed mb-8 italic ${
                isDark ? 'text-gray-200' : 'text-luxury-dark'
              }`}>
                "{activeReview.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center justify-center">
                <img
                  src={activeReview.image}
                  alt={activeReview.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 mb-3 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                
                <cite className={`text-sm font-semibold tracking-wider uppercase not-italic ${
                  isDark ? 'text-white' : 'text-luxury-dark'
                }`}>
                  {activeReview.name}
                </cite>
                
                <span className="text-[11px] tracking-widest text-gold uppercase font-mono mt-1">
                  {activeReview.role} • {activeReview.date}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className={`p-3 rounded-full border transition-all hover:text-gold cursor-pointer ${
                isDark
                  ? 'border-white/10 text-white hover:bg-white/5'
                  : 'border-luxury-dark/10 text-luxury-dark hover:bg-gold-light/20'
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination dots indicators */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-gold w-6' : 'bg-gold/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`p-3 rounded-full border transition-all hover:text-gold cursor-pointer ${
                isDark
                  ? 'border-white/10 text-white hover:bg-white/5'
                  : 'border-luxury-dark/10 text-luxury-dark hover:bg-gold-light/20'
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
