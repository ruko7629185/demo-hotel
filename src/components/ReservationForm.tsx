/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, Phone, Clock, Users, Gift, MessageSquare, Star, Sparkles, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationFormProps {
  isDark: boolean;
  prefilledOccasion: string;
  setPrefilledOccasion: (val: string) => void;
}

export default function ReservationForm({ isDark, prefilledOccasion, setPrefilledOccasion }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:30',
    occasion: 'None',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationResult, setReservationResult] = useState<Reservation | null>(null);

  // Sync prefilled occasion from parent
  useEffect(() => {
    if (prefilledOccasion) {
      setFormData((prev) => ({ ...prev, occasion: prefilledOccasion }));
    }
  }, [prefilledOccasion]);

  const occasions = [
    { label: 'Standard Dining', value: 'None' },
    { label: 'Anniversary', value: 'Anniversary' },
    { label: 'Corporate Event', value: 'The Obsidian Boardroom' },
    { label: 'Wedding Celebration', value: 'The Laurent-Perrier Salon' },
    { label: 'Cellar Experience', value: 'The Grand Sommelier Cellar' },
    { label: 'Birthday Gathering', value: 'Birthday Party' },
    { label: 'Romantic Dinner', value: 'Romance' },
    { label: 'Luxury Off-Site Catering', value: 'Luxury Off-Site Catering' },
  ];

  const timeSlots = [
    { label: '5:00 PM', value: '17:00' },
    { label: '5:30 PM', value: '17:30' },
    { label: '6:00 PM', value: '18:00' },
    { label: '6:30 PM', value: '18:30' },
    { label: '7:00 PM', value: '19:00' },
    { label: '7:30 PM (Peak)', value: '19:30' },
    { label: '8:00 PM (Peak)', value: '20:00' },
    { label: '8:30 PM', value: '20:30' },
    { label: '9:00 PM', value: '21:00' },
    { label: '9:30 PM', value: '21:30' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required for reservation SMS alerts.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      tempErrors.phone = 'Please provide a complete phone number.';
    }
    if (!formData.date) tempErrors.date = 'Please select a dining date.';
    
    // Validate date is not in the past
    if (formData.date) {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) {
        tempErrors.date = 'We cannot accommodate travel back in time.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API response lag
    setTimeout(() => {
      const confirmationCode = `LET-${Math.floor(100000 + Math.random() * 900000)}`;
      const newReservation: Reservation = {
        id: confirmationCode,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: parseInt(formData.guests),
        date: formData.date,
        time: formData.time,
        occasion: formData.occasion,
        message: formData.message,
        createdAt: new Date().toISOString(),
        status: 'confirmed'
      };

      setReservationResult(newReservation);
      setIsSubmitting(false);
      // Clean up parent state
      setPrefilledOccasion('');
    }, 2000);
  };

  const resetForm = () => {
    setReservationResult(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '19:30',
      occasion: 'None',
      message: '',
    });
  };

  return (
    <section
      id="reservations"
      className={`py-24 md:py-32 transition-colors duration-500 relative ${
        isDark ? 'bg-[#0D0D0D]' : 'bg-[#F7F4EE]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-4">
            secure your table
          </span>
          <h2 className={`text-3xl md:text-5xl font-serif font-light tracking-wide ${
            isDark ? 'text-white' : 'text-luxury-dark'
          }`}>
            An Invitation to Indulgence
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Dynamic Card Container */}
        <div className={`p-8 md:p-12 rounded-2xl border relative overflow-hidden ${
          isDark 
            ? 'bg-luxury-gray/40 border-white/5' 
            : 'bg-white border-luxury-dark/5 shadow-2xl shadow-luxury-dark/5'
        }`}>
          
          <AnimatePresence mode="wait">
            {!reservationResult ? (
              // --- FORM STEP ---
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Intro parameters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gold/10 text-xs font-light">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                    <span className={isDark ? 'text-gray-400' : 'text-luxury-light'}>
                      Smart Scheduling: Holds are released 15 minutes past bookings.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold shrink-0" />
                    <span className={isDark ? 'text-gray-400' : 'text-luxury-light'}>
                      Dress Code: Formal elegant attire. Jackets required for gentlemen.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Elizabeth Vance"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.name
                            ? 'border-red-500 bg-red-500/5 text-red-400'
                            : isDark
                              ? 'bg-luxury-dark/40 border-white/10 text-white placeholder-gray-500'
                              : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark placeholder-gray-400'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elizabeth.vance@example.com"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.email
                            ? 'border-red-500 bg-red-500/5 text-red-400'
                            : isDark
                              ? 'bg-luxury-dark/40 border-white/10 text-white placeholder-gray-500'
                              : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark placeholder-gray-400'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (310) 555-0190"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.phone
                            ? 'border-red-500 bg-red-500/5 text-red-400'
                            : isDark
                              ? 'bg-luxury-dark/40 border-white/10 text-white placeholder-gray-500'
                              : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark placeholder-gray-400'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Guests field */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold appearance-none ${
                          isDark
                            ? 'bg-luxury-dark/40 border-white/10 text-white'
                            : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark'
                        }`}
                      >
                        {Array.from({ length: 12 }).map((_, idx) => (
                          <option key={idx + 1} value={idx + 1}>
                            {idx + 1} {idx === 0 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                        <option value="15">Private Party (15 Guests)</option>
                        <option value="20">Exclusive Event (20+ Guests)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date field */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.date
                            ? 'border-red-500 bg-red-500/5 text-red-400'
                            : isDark
                              ? 'bg-luxury-dark/40 border-white/10 text-white'
                              : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 text-[11px] flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Available Dinner Seating
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold appearance-none ${
                          isDark
                            ? 'bg-luxury-dark/40 border-white/10 text-white'
                            : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark'
                        }`}
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occasions dropdown */}
                  <div className="space-y-2 md:col-span-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Special Occasion / Experience Selected
                    </label>
                    <div className="relative">
                      <Gift className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold appearance-none ${
                          isDark
                            ? 'bg-luxury-dark/40 border-white/10 text-white'
                            : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark'
                        }`}
                      >
                        {occasions.map((occ) => (
                          <option key={occ.value} value={occ.value}>
                            {occ.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message/Requests */}
                  <div className="space-y-2 md:col-span-2">
                    <label className={`text-xs uppercase tracking-wider font-semibold block ${
                      isDark ? 'text-gray-300' : 'text-luxury-dark'
                    }`}>
                      Culinary Requests or Dietary Strictures
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gold" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please inform us of severe dietary restrictions (e.g. tree nuts, shellfishes), tableside floral requests, or specific seat placement desires."
                        className={`w-full pl-12 pr-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold ${
                          isDark
                            ? 'bg-luxury-dark/40 border-white/10 text-white placeholder-gray-500'
                            : 'bg-[#F7F4EE]/50 border-luxury-dark/10 text-luxury-dark placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 bg-gold hover:bg-gold-hover disabled:bg-gold/60 text-white text-xs tracking-[0.25em] uppercase font-bold rounded-lg shadow-xl shadow-gold/20 flex items-center justify-center space-x-3 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>transmitting request...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Confirm Reservation</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // --- CONFIRMATION CARD SUCCESS STATE ---
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 relative"
              >
                {/* Micro gold flakes decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-2">
                  <Star className="w-5 h-5 text-gold fill-gold animate-bounce" />
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold animate-pulse" />
                </div>

                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                </div>

                <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold block mb-2">
                  confirmed invitation
                </span>
                
                <h3 className={`text-2xl md:text-3xl font-serif font-light mb-2 ${
                  isDark ? 'text-white' : 'text-luxury-dark'
                }`}>
                  Your Table Awaits At L'Étoile
                </h3>
                
                <p className={`text-sm font-light max-w-lg mx-auto mb-10 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-luxury-light'
                }`}>
                  An invitation token and SMS notification have been transmitted to <strong className="text-gold font-medium">{reservationResult.email}</strong>. See reservation details below:
                </p>

                {/* Digital Ticket Layout */}
                <div className={`max-w-md mx-auto rounded-xl border-2 border-dashed border-gold/30 p-6 relative overflow-hidden text-left bg-gradient-to-br ${
                  isDark ? 'from-luxury-dark/80 to-[#1e1d1a]/20' : 'from-[#FAF8F5] to-white'
                }`}>
                  
                  {/* Decorative Ticket Corners */}
                  <div className={`absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full border border-gold/20 ${
                    isDark ? 'bg-[#151515]' : 'bg-[#FAF8F5]'
                  }`} />
                  <div className={`absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full border border-gold/20 ${
                    isDark ? 'bg-[#151515]' : 'bg-[#FAF8F5]'
                  }`} />

                  <div className="flex justify-between items-center pb-4 border-b border-gold/10">
                    <div>
                      <span className="text-[8px] tracking-widest text-gold uppercase font-mono font-bold block">CONFIRMATION TOKEN</span>
                      <span className={`text-lg font-mono font-bold ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
                        {reservationResult.id}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] tracking-widest text-gold uppercase font-mono font-bold block">TABLE SEATING</span>
                      <span className={`text-sm font-semibold uppercase ${isDark ? 'text-white' : 'text-luxury-dark'}`}>
                        Table 14 - Alcove Garden
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 py-5 border-b border-gold/10 text-xs font-light">
                    <div>
                      <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">PATRON NAME</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-luxury-dark'}`}>{reservationResult.name}</p>
                    </div>
                    <div>
                      <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">PARTY SIZE</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-luxury-dark'}`}>{reservationResult.guests} Guests</p>
                    </div>
                    <div>
                      <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">DINING DATE</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-luxury-dark'}`}>{new Date(reservationResult.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div>
                      <p className="text-gold text-[9px] tracking-widest uppercase mb-0.5">SEATING HOUR</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-luxury-dark'}`}>{timeSlots.find(t => t.value === reservationResult.time)?.label || reservationResult.time}</p>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    {/* Simulated elegant barcode */}
                    <div className="w-full h-8 flex justify-center space-x-1.5 opacity-60">
                      {[1,3,1,2,4,2,3,1,2,4,1,3,2,1,2,4,2,1,3,1].map((val, i) => (
                        <div key={i} className={`h-full bg-gold`} style={{ width: `${val}px` }} />
                      ))}
                    </div>
                    <span className="text-[8px] tracking-[0.4em] text-gold uppercase font-mono mt-2 block">
                      SECURE CHECK-IN PASSPORT
                    </span>
                  </div>

                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs tracking-widest uppercase font-bold rounded-sm shadow-md cursor-pointer"
                  >
                    Reserve Another Table
                  </button>
                  <a
                    href={`mailto:${reservationResult.email}?subject=My L'Étoile Reservation Ticket: ${reservationResult.id}`}
                    className={`px-6 py-3.5 border text-xs tracking-widest uppercase font-bold rounded-sm transition-all cursor-pointer ${
                      isDark
                        ? 'border-white/10 text-white hover:bg-white/5'
                        : 'border-luxury-dark/10 text-luxury-dark hover:bg-luxury-dark/5'
                    }`}
                  >
                    Save Digital Invitation
                  </a>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
