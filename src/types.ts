/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'seafood' | 'steak' | 'desserts' | 'wine' | 'cocktails' | 'specials';
  image: string;
  popular?: boolean;
  chefRecommended?: boolean;
  dietary?: ('gluten-free' | 'vegan' | 'vegetarian' | 'nut-free' | 'dairy-free')[];
  pairing?: string; // Luxury wine pairing advice
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Michelin Guide Critic", "Verified Guest"
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface PrivateDiningPackage {
  id: string;
  title: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

export interface Award {
  id: string;
  year: string;
  title: string;
  organization: string;
  iconName: string; // e.g., "Award", "Star", "Shield"
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'interior' | 'dishes' | 'cellar' | 'behind-scenes';
  description: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  occasion: string;
  message?: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  url: string;
}
