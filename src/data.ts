import { MenuItem, Branch } from './types';

export const BRAND_COLORS = {
  navy: '#003359',
  white: '#FFFFFF',
  gold: '#EAD11B',
  green: '#9CB421'
};

export const INSTAGRAM_URL = 'https://www.instagram.com/shrimp_time_tunisia';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'e1',
    name: 'Crevettes Dynamite',
    category: 'entrées',
    price: 28,
    description: 'Crevettes croustillantes dorées à la perfection, enrobées de notre sauce Dynamite secrète, onctueuse et légèrement piquante, parsemées de ciboule fraîche.',
    badge: 'Populaire',
    tags: ['Best-Seller', 'Piquant'],
    image: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e2',
    name: 'Calamars Croquants au Citron',
    category: 'entrées',
    price: 24,
    description: 'Anneaux de calamars tendres panés et servis croustillants avec un quartier de citron bio de Tunisie et notre mayonnaise maison parfumée à l\'ail doux.',
    badge: 'Nouveau',
    tags: ['Croustillant'],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e3',
    name: 'Soupe de Fruits de Mer Safranée',
    category: 'entrées',
    price: 19,
    description: 'Un bouillon marin riche et réconfortant infusé au safran de la Méditerranée, garni de moules, calamars et crevettes, accompagné de croûtons aillés.',
    tags: ['Chaud', 'Traditionnel'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'e4',
    name: 'Salade de Poulpe de Sfax',
    category: 'entrées',
    price: 26,
    description: 'Poulpe local tendre cuit lentement, mariné dans une huile d\'olive extra-vierge parfumée aux herbes fines, coriandre fraîche, oignons rouges et poivrons colorés.',
    badge: 'Signature',
    tags: ['Frais', 'Produit Local'],
    image: 'https://images.unsplash.com/photo-1534080391025-a77c4e5fbfcc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p1',
    name: 'Le Seau "Shrimp Time" Signature',
    category: 'plats',
    price: 53,
    description: 'Notre légendaire seau de fruits de mer garni d\'un généreux mélange de crevettes sauvages, moules fraîches, pinces de crabe et maïs doux cuit à la vapeur. Le tout nappé d\'une sauce de votre choix : Cajun Épicé, Beurre d\'Ail Aromatic ou Coco Curry. Servi chaud avec son riz blanc.',
    badge: 'Signature',
    tags: ['Incontournable', 'À Partager'],
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Pâtes Noires à l\'Encre de Seiche',
    category: 'plats',
    price: 38,
    description: 'Spaghettoni artisanales teintées à l\'encre de seiche naturelle, sautées à la poêle avec des crevettes fraîches decortiquées, des tomates cerises confites et un filet d\'huile d\'olive sauvage au piment doux.',
    tags: ['Gastronomique'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Brochettes de Crevettes Royales',
    category: 'plats',
    price: 48,
    description: 'Grosses crevettes royales tunisiennes grillées au feu de bois de braises, badigeonnées d\'un beurre d\'herbes marines, servies avec un riz safrané parfumé et légumes croquants grillés.',
    badge: 'Populaire',
    tags: ['Grillades'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p4',
    name: 'Pavé de Loup de Mer au Beurre Citronné',
    category: 'plats',
    price: 42,
    description: 'Filet de loup de mer de nos côtes dore sur peau, accompagné d\'une sauce émulsionnée au beurre noisette, jus de citron jaune et câpres de Hammamet. Servi avec purée de pommes de terre à l\'huile d\'olive.',
    tags: ['Frais du Jour'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd1',
    name: 'Fondant Coulant au Chocolat Noir',
    category: 'desserts',
    price: 15,
    description: 'Cœur chocolaté intensément coulant, préparé minute et servi chaud avec une boule de glace artisanale à la vanille de Madagascar.',
    tags: ['Gourmand'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Tiramisu au Citron de Tunisie',
    category: 'desserts',
    price: 14,
    description: 'Une réinterprétation fraîche et acidulée du classique italien, associant une crème mascarpone aérienne à un lemon curd onctueux fait maison à partir de citrons cueillis en Tunisie.',
    badge: 'Nouveau',
    tags: ['Frais', 'Best-Seller'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd3',
    name: 'Crème d\'Amandes à la Fleur d\'Oranger',
    category: 'desserts',
    price: 12,
    description: 'Douceur crémeuse subtilement parfumée à l\'eau de fleur d\'oranger distillée à Nabeul, recouverte d\'amandes effilées de Sfax sablées et torréfiées au miel.',
    tags: ['Tunisian Twist'],
    image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?q=80&w=800&auto=format&fit=crop'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'marsa_zephyr',
    name: 'Shrimp Time — La Marsa (En face de Zephyr)',
    address: 'Avenue Habib Bourguiba (En face de Zephyr), La Marsa, Tunis 2070',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Shrimp+Time+Le+Zephyr+La+Marsa',
    phone: '+21698900372',
    phoneDisplay: '98 900 372',
    hours: 'Mardi - Dimanche : 12:00 - 23:30 (Fermé le Lundi)',
    ambiance: 'Idéalement situé au cœur de La Marsa Plage, juste en face du centre commercial Le Zéphyr. Un espace vibrant et animé pour de superbes moments gourmands.',
    coordinates: { lat: 36.8778, lng: 10.3262 }
  },
  {
    id: 'marsa_plage',
    name: 'Shrimp Time — La Marsa Plage (En face de Kobbet El Haoua)',
    address: 'Avenue de la République (En face de Kobbet El Haoua), La Marsa Plage, Tunis 2070',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Kobbet+El+Haoua+La+Marsa',
    phone: '+21698900372',
    phoneDisplay: '98 900 372',
    hours: 'Mardi - Dimanche : 12:00 - 23:30 (Fermé le Lundi)',
    ambiance: 'Une adresse côtière irrésistible face à l’emblématique Kobbet El Haoua, pour savourer vos seaux de fruits de mer bercés par la brise maritime méditerranéenne.',
    coordinates: { lat: 36.8814, lng: 10.3344 }
  },
  {
    id: 'aouina',
    name: 'Shrimp Time — L\'Aouina (Sous Centre Médical Aïcha)',
    address: 'Avenue Khaled Ibn El Walid (Cité El Wahat, sous Centre Médical Aïcha), L\'Aouina, Tunis 2045',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Centre+Medical+Aicha+L\'Aouina',
    phone: '+21658900792',
    phoneDisplay: '58 900 792',
    hours: 'Mardi - Dimanche : 12:00 - 23:30 (Fermé le Lundi)',
    ambiance: 'Un havre contemporain aux accents bois flotté et lumières tamisées raffinées, niché au rez-de-chaussée sous le pôle médical Aïcha à la Cité El Wahat.',
    coordinates: { lat: 36.8521, lng: 10.2642 }
  }
];
