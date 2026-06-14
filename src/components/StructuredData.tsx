import React from 'react';
import { BRANCHES, MENU_ITEMS, RESTAURANT_HOURS } from '../data';

export default function StructuredData() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Shrimp Time',
    description: 'Restaurant de fruits de mer à La Marsa et L\'Aouina. Menu frais, réservation WhatsApp.',
    image: 'https://shrimptime.vercel.app/logo.png',
    url: 'https://shrimptime.vercel.app',
    telephone: BRANCHES[0].phone,
    email: 'shrimptime270@gmail.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.4',
      reviewCount: '394',
      bestRating: '5',
    },
    servesCuisine: 'Seafood',
    priceRange: '€€',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '12:00', closes: '23:30' },
    ],
    address: BRANCHES.map((b) => ({
      '@type': 'PostalAddress',
      streetAddress: b.address,
      addressLocality: b.name,
      addressCountry: 'TN',
    })),
    hasMenu: {
      '@type': 'Menu',
      name: 'Notre Menu',
      hasMenuItem: MENU_ITEMS.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: { '@type': 'Offer', price: item.price, priceCurrency: 'TND' },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
