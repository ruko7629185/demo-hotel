/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Send, Heart, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [copiedText, setCopiedText] = useState(false);

  const hours = [
    { days: 'Monday – Thursday', time: '5:30 PM – 10:30 PM' },
    { days: 'Friday – Saturday', time: '5:00 PM – 11:30 PM' },
    { days: 'Sunday', time: '5:00 PM – 10:00 PM' },
    { days: 'Holiday Hours', time: 'Closed July 4th & Dec 25th' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('8485 Wilshire Blvd, Beverly Hills, CA 90211');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <section
      id="contact"
      className={`py-24 md:py-32 transition-colors duration-500 relative ${
        isDark ? 'bg-[#151515]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            locate & connect
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            Concierge & Location
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-24">
          
          {/* Left Column: Opening hours & details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold">reservation desk</span>
              
              <div className="space-y-6">
                
                {/* MapPin / Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/15 text-gold rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                      isDark ? 'text-white' : 'text-luxury-dark'
                    }`}>Address</h4>
                    <p className={`text-xs md:text-sm font-light mb-1 ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>
                      8485 Wilshire Blvd, Beverly Hills, CA 90211
                    </p>
                    <button
                      onClick={handleCopy}
                      className="text-gold text-xs underline font-medium cursor-pointer"
                    >
                      {copiedText ? 'Copied to clipboard' : 'Copy address'}
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/15 text-gold rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                      isDark ? 'text-white' : 'text-luxury-dark'
                    }`}>Phone Inquiries</h4>
                    <p className={`text-xs md:text-sm font-light mb-1 ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>
                      Direct desk: <a href="tel:+13105550190" className="text-gold hover:underline">+1 (310) 555-0190</a>
                    </p>
                    <p className="text-[11px] text-gray-500 font-sans tracking-wide">concierge answers daily from 1:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/15 text-gold rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                      isDark ? 'text-white' : 'text-luxury-dark'
                    }`}>Concierge Inbox</h4>
                    <p className={`text-xs md:text-sm font-light ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>
                      <a href="mailto:concierge@letoile-dining.com" className="text-gold hover:underline">concierge@letoile-dining.com</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Opening Hours Grid */}
            <div className={`p-8 rounded-xl border ${
              isDark ? 'bg-luxury-gray/40 border-white/5' : 'bg-[#F7F4EE]/40 border-luxury-dark/5 shadow-sm'
            }`}>
              <h3 className={`text-xs font-bold uppercase tracking-[0.25em] mb-6 text-gold flex items-center gap-2`}>
                <Clock className="w-4 h-4 text-gold" />
                <span>Hours of Gastronomy</span>
              </h3>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gold/10 last:border-0 last:pb-0">
                    <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-luxury-dark'}`}>{item.days}</span>
                    <span className={`text-xs font-light ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Custom Google Map Canvas */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className={`relative h-full rounded-2xl overflow-hidden border flex flex-col justify-center items-center min-h-[350px] ${
              isDark ? 'bg-luxury-dark/40 border-white/5' : 'bg-[#F7F4EE]/40 border-luxury-dark/5 shadow-md'
            }`}>
              
              {/* Custom Architectural Map Blueprint vector look */}
              <div className="absolute inset-0 opacity-40 select-none pointer-events-none">
                {/* SVG pattern overlay mimicking neighborhood streets */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                  <g stroke={isDark ? '#FFFFFF' : '#111111'} strokeWidth="1" opacity="0.15" fill="none">
                    <line x1="0" y1="100" x2="1000" y2="100" />
                    <line x1="0" y1="280" x2="1000" y2="280" strokeWidth="3" />
                    <line x1="0" y1="450" x2="1000" y2="450" />
                    <line x1="150" y1="0" x2="150" y2="1000" />
                    <line x1="420" y1="0" x2="420" y2="1000" strokeWidth="4" />
                    <line x1="780" y1="0" x2="780" y2="1000" />
                    {/* Diagonals */}
                    <line x1="0" y1="0" x2="800" y2="800" strokeWidth="0.5" />
                    <circle cx="420" cy="280" r="140" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>

              {/* Central Map Marker */}
              <div className="z-10 flex flex-col items-center text-center p-6">
                
                <div className="relative mb-4">
                  {/* Glowing halo circles */}
                  <div className="absolute -inset-4 bg-gold/10 rounded-full animate-ping pointer-events-none" />
                  <div className="absolute -inset-8 bg-gold/5 rounded-full animate-pulse pointer-events-none" />
                  
                  <div className="w-16 h-16 bg-gold text-white flex items-center justify-center rounded-full shadow-lg border border-white/20 relative z-10">
                    <Navigation className="w-7 h-7 fill-white rotate-45" />
                  </div>
                </div>

                <h3 className={`text-lg font-serif tracking-wide mb-1 ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
                  L'Étoile Beverly Hills
                </h3>
                
                <p className={`text-xs font-light max-w-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-luxury-light'}`}>
                  Conveniently situated along the luxury corridors of Wilshire Boulevard. Valet parking service is active upon arrival.
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://maps.google.com/?q=8485+Wilshire+Blvd,+Beverly+Hills,+CA+90211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-gold hover:bg-gold-hover text-white text-xs tracking-wider uppercase font-bold rounded-sm flex items-center space-x-2 shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  
                  <button
                    onClick={handleCopy}
                    className={`px-5 py-3 border text-xs tracking-wider uppercase font-bold rounded-sm transition-colors cursor-pointer ${
                      isDark
                        ? 'border-white/10 text-white hover:bg-white/5'
                        : 'border-luxury-dark/10 text-luxury-dark hover:bg-luxury-dark/5'
                    }`}
                  >
                    {copiedText ? 'Copied' : 'Copy Coordinates'}
                  </button>
                </div>

              </div>

              {/* Bottom satellite status info */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-[9px] text-gray-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>VALET VALIDATION SECURE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Instagram Feed Section */}
        <div className="pt-16 border-t border-gold/15">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-2">
              live instagram feed
            </span>
            <h3 className={`text-2xl md:text-3xl font-serif font-light ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
              @LetoileFineDining
            </h3>
          </div>

          {/* Insta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                key={post.id}
                className="relative rounded-xl overflow-hidden group aspect-square shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Photo */}
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover stats overlays */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  
                  {/* Icons line */}
                  <div className="flex items-center space-x-6 mb-3">
                    <span className="flex items-center space-x-1.5 text-sm font-semibold text-[#FFEDED]">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 text-sm font-semibold text-white">
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{post.comments}</span>
                    </span>
                  </div>

                  {/* Caption */}
                  <p className="text-[10px] text-gray-300 text-center font-light leading-relaxed line-clamp-2">
                    {post.caption}
                  </p>

                  <Instagram className="w-5 h-5 text-gold absolute bottom-4" />

                </div>

              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
