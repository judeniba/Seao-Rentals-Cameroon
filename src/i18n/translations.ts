import { Language, Translations } from '../types';

export const translations: Record<Language, Translations> = {
  fr: {
    title: 'SEAO-RENTALS Cameroun',
    tagline: 'Votre énergie, notre engagement',
    description: 'Location professionnelle de générateurs, trackers GPS et outils avec livraison sur site, installation et maintenance 24/7 à travers le Cameroun.',
    contact: 'Nous contacter',
    whatsapp: 'WhatsApp',
    phone: 'Téléphone',
    email: 'Email',
    services: {
      title: 'Nos Services',
      rental: 'Location de Générateurs',
      delivery: 'Livraison Rapide sur Site',
      installation: 'Installation Professionnelle',
      maintenance: 'Maintenance 24/7'
    },
    categories: {
      title: 'Nos Équipements',
      generators: 'Générateurs',
      gps: 'Trackers GPS',
      tools: 'Outils',
      all: 'Tous les Services'
    },
    note: 'Plateforme en cours de développement. Contactez-nous pour plus d\'informations.'
  },
  en: {
    title: 'SEAO-RENTALS Cameroon',
    tagline: 'Your energy, our commitment',
    description: 'Professional equipment rental for generators, GPS trackers, and tools with on-site delivery, installation, and 24/7 maintenance services across Cameroon.',
    contact: 'Contact Us',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    email: 'Email',
    services: {
      title: 'Our Services',
      rental: 'Generator Rental',
      delivery: 'Fast On-Site Delivery',
      installation: 'Professional Installation',
      maintenance: '24/7 Maintenance'
    },
    categories: {
      title: 'Our Equipment',
      generators: 'Generators',
      gps: 'GPS Trackers',
      tools: 'Tools',
      all: 'All Services'
    },
    note: 'Platform under development. Contact us for more information.'
  }
};
