/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Calendar, Phone, Star } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ isDark, setIsDark, onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Private Dining', id: 'private-dining' },
    { label: 'Chef Vance', id: 'chef' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Reservations', id: 'reservations' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
              : 'bg-[#F7F4EE]/95 backdrop-blur-md py-4 border-b border-[#C9A227]/10 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left side: Navigation links on desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs tracking-[0.25em] uppercase font-medium">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`transition-colors duration-300 hover:text-gold cursor-pointer relative py-2 ${
                  activeSection === item.id
                    ? 'text-gold'
                    : isScrolled
                      ? isDark ? 'text-white' : 'text-luxury-dark'
                      : 'text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Center: Brand Logo */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="flex items-center justify-center space-x-1">
              <Star className="w-3.5 h-3.5 text-gold fill-gold animate-pulse" />
              <span className={`text-2xl md:text-3xl font-serif tracking-[0.15em] font-light transition-all duration-300 ${
                isScrolled
                  ? isDark ? 'text-white' : 'text-luxury-dark'
                  : 'text-white'
              }`}>
                L'ÉTOILE
              </span>
              <Star className="w-3.5 h-3.5 text-gold fill-gold animate-pulse" />
            </div>
            <span className="text-[7px] tracking-[0.5em] text-gold uppercase font-semibold mt-1">
              three michelin stars
            </span>
          </button>

          {/* Right side: desktop menu & CTA */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex items-center space-x-6 xl:space-x-8 text-xs tracking-[0.25em] uppercase font-medium mr-2">
              {menuItems.slice(4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`transition-colors duration-300 hover:text-gold cursor-pointer relative py-2 ${
                    activeSection === item.id
                      ? 'text-gold'
                      : isScrolled
                        ? isDark ? 'text-white' : 'text-luxury-dark'
                        : 'text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeUnderline2"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Theme switcher */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? isDark 
                    ? 'border-white/10 text-white hover:bg-white/5' 
                    : 'border-[#C9A227]/20 text-luxury-dark hover:bg-gold-light/20'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Elegant Button CTA */}
            <button
              onClick={() => handleItemClick('reservations')}
              className="px-6 py-3 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.2em] uppercase font-medium rounded-sm shadow-md transition-all duration-300 hover:shadow-gold/20 hover:scale-[1.02] cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile controllers (Hamburger & Theme Toggle) */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isScrolled
                  ? isDark 
                    ? 'border-white/10 text-white' 
                    : 'border-[#C9A227]/20 text-luxury-dark'
                  : 'border-white/20 text-white'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled
                  ? isDark ? 'text-white' : 'text-luxury-dark'
                  : 'text-white'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-center px-8 md:px-16 ${
              isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
            }`}
          >
            {/* Background design stars */}
            <div className="absolute top-24 left-10 opacity-5">
              <Star className="w-64 h-64 text-gold fill-gold" />
            </div>

            <div className="flex flex-col space-y-6 z-10 text-left">
              <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold">
                discover l'étoile
              </span>
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`text-2xl md:text-4xl font-serif text-left tracking-wide hover:text-gold transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'text-gold'
                        : isDark ? 'text-white' : 'text-luxury-dark'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="pt-8 border-t border-gold/20 flex flex-col space-y-4">
                <button
                  onClick={() => handleItemClick('reservations')}
                  className="w-full py-4 bg-gold hover:bg-gold-hover text-white text-xs tracking-[0.25em] uppercase font-bold rounded-sm flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table</span>
                </button>
                <a
                  href="tel:+13105550190"
                  className={`w-full py-4 border text-xs tracking-[0.25em] uppercase font-bold rounded-sm flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                    isDark
                      ? 'border-white/10 text-white hover:bg-white/5'
                      : 'border-luxury-dark/10 text-luxury-dark hover:bg-luxury-dark/5'
                  }`}
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call +1 (310) 555-0190</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
