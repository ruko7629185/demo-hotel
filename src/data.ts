/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Testimonial, PrivateDiningPackage, Award, TimelineEvent, GalleryItem, InstagramPost } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Diver Scallops',
    description: 'Pan-seared Atlantic diver scallops, caramelized sunchoke velouté, pickled chanterelles, black truffle foam, and a touch of hazelnut oil.',
    price: 28,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?auto=format&fit=crop&q=80&w=800',
    chefRecommended: true,
    dietary: ['gluten-free', 'nut-free'],
    pairing: 'Kistler Chardonnay'
  },
  {
    id: 'starter-2',
    name: 'Foie Gras Torchon',
    description: 'Cured Hudson Valley foie gras torchon, caramelized mission fig preserve, aged balsamic pearls, toasted house brioche.',
    price: 32,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['nut-free'],
    pairing: 'Sauternes Châteaux d\'Yquem'
  },
  {
    id: 'starter-3',
    name: 'Heritage Heirloom Tomato & Consommé',
    description: 'Compressed heirloom garden tomatoes, crystal-clear tomato-basil water, whipped goat cheese snow, fresh micro-basil.',
    price: 24,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegetarian', 'gluten-free', 'nut-free'],
    pairing: 'Sancerre Sauvignon Blanc'
  },

  // --- MAIN COURSE ---
  {
    id: 'main-1',
    name: 'Roasted Poulet Rouge',
    description: 'Truffle-butter roasted heritage organic chicken breast, creamed savoy cabbage, caramelized cipollini onion, rich natural thyme reduction.',
    price: 48,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    dietary: ['gluten-free', 'nut-free'],
    pairing: 'Pinot Noir, Domaine de la Romanée-Conti'
  },
  {
    id: 'main-2',
    name: 'Chanterelle Agnolotti',
    description: 'Handmade delicate pasta envelopes stuffed with roasted chanterelle mushrooms, local goat cheese, pecorino romano, and a glossy brown butter emulsion.',
    price: 42,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['vegetarian', 'nut-free'],
    pairing: 'Gavi di Gavi, Cortese'
  },

  // --- SEAFOOD ---
  {
    id: 'seafood-1',
    name: 'Chilean Sea Bass',
    description: 'Pan-roasted line-caught bass, yuzu beurre blanc, tender baby bok choy, toasted white sesame seeds, braised ginger.',
    price: 54,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    chefRecommended: true,
    dietary: ['gluten-free', 'dairy-free'],
    pairing: 'Puligny-Montrachet'
  },
  {
    id: 'seafood-2',
    name: 'Brittany Blue Lobster',
    description: 'Poached Brittany blue lobster tail, rich saffron-infused butter emulsion, charred sea asparagus, fingerling potato confit.',
    price: 72,
    category: 'seafood',
    image: 'https://images.unsplash.com/photo-1559742811-82410b49c405?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['gluten-free', 'nut-free'],
    pairing: 'Dom Pérignon Champagne'
  },

  // --- STEAK ---
  {
    id: 'steak-1',
    name: 'Japanese A5 Wagyu Striploin',
    description: '4oz of melt-in-the-mouth A5 Wagyu from Kagoshima, seared perfectly, accompanied by a rich roasted bone marrow jus and local wild watercress.',
    price: 145,
    category: 'steak',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    popular: true,
    chefRecommended: true,
    dietary: ['gluten-free', 'nut-free', 'dairy-free'],
    pairing: 'Château Margaux 2015'
  },
  {
    id: 'steak-2',
    name: '45-Day Aged Porterhouse',
    description: '18oz premium cut charcoal grilled with salt flakes, basted in roasted garlic-herb tallow, served with caramelized black garlic reduction.',
    price: 95,
    category: 'steak',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    dietary: ['gluten-free', 'nut-free'],
    pairing: 'Napa Valley Cabernet Sauvignon'
  },

  // --- DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Valrhona Chocolate Soufflé',
    description: 'Indulgent baked chocolate soufflé using single-origin Valrhona dark chocolate, warm Grand Marnier infusion, served with real vanilla bean crème anglaise.',
    price: 18,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['vegetarian', 'nut-free'],
    pairing: 'Tawny Port 20 Year Old'
  },
  {
    id: 'dessert-2',
    name: 'Meyer Lemon Tart',
    description: 'Crispy sweet pastry shell, silky Meyer lemon curd, fluffy toasted Italian meringue peaks, and a splash of champagne sabayon.',
    price: 16,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegetarian', 'nut-free'],
    pairing: 'Moscato d\'Asti'
  },
  {
    id: 'dessert-3',
    name: 'Tahitian Vanilla Panna Cotta',
    description: 'Silky panna cotta infused with premium Tahitian vanilla pods, layered with wild lavender gelée, topped with fresh field berries.',
    price: 15,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800',
    dietary: ['vegetarian', 'gluten-free', 'nut-free'],
    pairing: 'Eiswein Riesling'
  },

  // --- WINE ---
  {
    id: 'wine-1',
    name: 'Dom Pérignon Brut Champagne',
    description: '2012 Vintage. Luminous structure, light notes of brioche, fresh citrus, chalky mineral undertones, and persistent bubbles.',
    price: 85,
    category: 'wine',
    image: 'https://images.unsplash.com/photo-1594488210350-f05cc582c407?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['vegan', 'gluten-free', 'nut-free']
  },
  {
    id: 'wine-2',
    name: 'Château Margaux Bordeaux',
    description: '2015 Vintage. Masterpiece of red blend, offering exquisite black currant aromatics, structural cedar wood, and ultra-silky tannins.',
    price: 180,
    category: 'wine',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    chefRecommended: true,
    dietary: ['vegan', 'gluten-free', 'nut-free']
  },

  // --- COCKTAILS ---
  {
    id: 'cocktail-1',
    name: 'The Saffron Old Fashioned',
    description: 'Woodford Reserve Bourbon infused with Iranian saffron, Demerara sugar, custom orange bitters, smoked with hickory wood under a glass dome.',
    price: 26,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    chefRecommended: true,
    dietary: ['vegan', 'gluten-free', 'nut-free']
  },
  {
    id: 'cocktail-2',
    name: 'Golden Hour Elixir',
    description: 'Premium Hendrick\'s Gin, lavender-infused botanical tonic, fresh pressed lime juice, finished with floating edible 24-karat gold leaves.',
    price: 24,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    popular: true,
    dietary: ['vegan', 'gluten-free', 'nut-free']
  },

  // --- CHEF SPECIALS ---
  {
    id: 'special-1',
    name: 'The Golden Osetra Caviar Service',
    description: '30g of sustainably harvested Golden Osetra Caviar, traditional accompaniments: warm house blinis, grated organic egg white, egg yolk, crème fraîche, chives, mother-of-pearl spoon.',
    price: 180,
    category: 'specials',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=800',
    chefRecommended: true,
    dietary: ['gluten-free', 'nut-free']
  },
  {
    id: 'special-2',
    name: 'Chef’s 7-Course Signature Degustation',
    description: 'A bespoke gastronomic journey custom-crafted daily by Executive Chef Marcus Vance, showcasing rare seasonal ingredients, custom artisan pairings.',
    price: 225,
    category: 'specials',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    popular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Elizabeth Vance',
    role: 'The Michelin Guide Critic',
    rating: 5,
    comment: 'An absolute masterpiece of culinary theatre. Executive Chef Marcus Vance has somehow combined standard heritage roots with daring technical gastronomy. The A5 Wagyu is a religious experience, and the hospitality is simply world-class.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    date: 'April 2026'
  },
  {
    id: 't-2',
    name: 'Raymond Blanc',
    role: 'Gourmet Traveler Editor',
    rating: 5,
    comment: 'L\'Étoile delivers the rarest element in modern dining: perfect silence and meticulous balance. Every scallop, every drop of velouté, and every glass pairing feels completely indispensable. Truly exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    date: 'May 2026'
  },
  {
    id: 't-3',
    name: 'Dr. Evelyn Martinez',
    role: 'Loyal Patron / Connoisseur',
    rating: 5,
    comment: 'We celebrate all our family’s milestones here. The Private Cellar dining room is spectacular, and the wine recommendation from their master sommelier remains unmatched. Understated luxury at its finest.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    date: 'June 2026'
  }
];

export const PRIVATE_DINING_PACKAGES: PrivateDiningPackage[] = [
  {
    id: 'p-1',
    title: 'The Obsidian Boardroom',
    description: 'A secluded, soundproof executive sanctuary designed for high-profile corporate luncheons, board retreats, or private high-table meetings.',
    capacity: '12 – 24 Guests',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    features: ['High-definition integrated streaming presentation arrays', 'Custom 5-course curated tasting menus', 'Dedicated butler and operations director', 'Direct secure private entrance']
  },
  {
    id: 'p-2',
    title: 'The Laurent-Perrier Salon',
    description: 'An expansive editorial dining room ideal for intimate wedding rehearsal dinners, birthday celebrations, or luxury brand activations.',
    capacity: '30 – 80 Guests',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    features: ['Customized floral architecture and tablescaping options', 'Live acoustic instrumentation integration', 'Bespoke hand-calligraphed menu prints', 'Champagne reception bar on arrival']
  },
  {
    id: 'p-3',
    title: 'The Grand Sommelier Cellar',
    description: 'Set inside our private 20,000-bottle subterranean cave. Surrounded by decades of rare vintages, experience ultimate intimacy.',
    capacity: '2 – 10 Guests',
    image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    features: ['Exclusive vertical wine flight pairing menus', 'Personalized master sommelier-guided lecture', 'Gourmet caviar and cheese service', 'Custom monogrammed leather menu keepsakes']
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a-1',
    year: '2024 - 2026',
    title: 'Three Michelin Stars',
    organization: 'The Michelin Guide',
    iconName: 'Award'
  },
  {
    id: 'a-2',
    year: '2025',
    title: 'No. 8 World’s Best Restaurant',
    organization: 'The World\'s 50 Best Restaurants',
    iconName: 'Star'
  },
  {
    id: 'a-3',
    year: '2025',
    title: 'Grand Award of Excellence',
    organization: 'Wine Spectator',
    iconName: 'Shield'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2018',
    title: 'The Seed of Inspiration',
    description: 'Chef Marcus Vance gathers vintage French cookbooks, partnering with regional biodynamic farms to build a modern, high-end farm-to-table fine dining vision.'
  },
  {
    year: '2020',
    title: 'L\'Étoile is Born',
    description: 'We opened our signature glass doors under dark starlight, immediately gaining critical praise for our minimalist architectural aesthetic and innovative scallop preparations.'
  },
  {
    year: '2022',
    title: 'The Second Star Arrives',
    description: 'Recognized for our meticulous standards, our subterranean wine cellar was expanded to house over 20,000 rare vintages, earning our second Michelin star.'
  },
  {
    year: '2025',
    title: 'Culinary Sovereignty',
    description: 'Awarded the elusive Third Michelin Star. Inducted into the elite circles of global gastronomy, representing the peak of craftsmanship, luxury, and warm hospitality.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    title: 'Plating Perfection',
    category: 'dishes',
    description: 'Chef Vance adding the final micro-herbs to the A5 Kagoshima Wagyu Striploin.'
  },
  {
    id: 'g-2',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=800',
    title: 'The Dining Room',
    category: 'interior',
    description: 'Subtle ambient lights cast warm glows over custom Belgian linen-clothed tables.'
  },
  {
    id: 'g-3',
    image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=800',
    title: 'The Subterranean Vault',
    category: 'cellar',
    description: 'Over 20,000 carefully curated vintages from historic grand cru domains.'
  },
  {
    id: 'g-4',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    title: 'The Flame Art',
    category: 'behind-scenes',
    description: 'Our culinary artists controlling direct fire on aged heritage cuts.'
  },
  {
    id: 'g-5',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    title: 'Smoked Masterpiece',
    category: 'dishes',
    description: 'Woodford Reserve Saffron Old Fashioned served under an oak smoke-filled dome.'
  },
  {
    id: 'g-6',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    title: 'The Master Sommelier',
    category: 'behind-scenes',
    description: 'Pre-tasting an exceptional Grand Cru vintage before guest presentation.'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    likes: '1.4k',
    comments: '42',
    caption: 'Truffle-infused Wagyu perfection. Sourced directly from Kagoshima, served with bone marrow jus.',
    url: 'https://instagram.com/'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1594488210350-f05cc582c407?auto=format&fit=crop&q=80&w=600',
    likes: '924',
    comments: '18',
    caption: 'Luminous bubbles, warm brioche scent. Commencing an unforgettable evening with Dom Pérignon Brut 2012.',
    url: 'https://instagram.com/'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=600',
    likes: '2.1k',
    comments: '88',
    caption: 'A view of our golden hour table arrangements. Where minimal architecture meets culinary theater.',
    url: 'https://instagram.com/'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
    likes: '811',
    comments: '29',
    caption: 'Saffron wood-smoke infusion in real-time. Crafting luxury with precision of smell.',
    url: 'https://instagram.com/'
  }
];
