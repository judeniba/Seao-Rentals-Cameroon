import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const content = {
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

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[var(--navy-dark)] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{t.title}</h1>
              <p className="text-sm md:text-base text-gray-300">{t.tagline}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="px-4 py-2 bg-[var(--sky-blue)] hover:bg-blue-600 rounded-lg font-medium transition-colors"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--navy-dark)] to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.tagline}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/237697661092"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
            >
              {t.whatsapp}
            </a>
            <a
              href="tel:+237697661092"
              className="px-6 py-3 bg-[var(--vibrant-orange)] hover:bg-orange-600 rounded-lg font-medium transition-colors"
            >
              {t.phone}
            </a>
            <a
              href="mailto:seaointeralia1@gmail.com"
              className="px-6 py-3 bg-[var(--sky-blue)] hover:bg-blue-600 rounded-lg font-medium transition-colors"
            >
              {t.email}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--navy-dark)]">
            {t.services.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.services.rental, icon: '⚡' },
              { title: t.services.delivery, icon: '🚚' },
              { title: t.services.installation, icon: '🔧' },
              { title: t.services.maintenance, icon: '🛠️' }
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-[var(--sky-blue)] transition-colors"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-[var(--navy-dark)]">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--navy-dark)]">
            {t.categories.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: t.categories.generators, color: 'bg-orange-500' },
              { title: t.categories.gps, color: 'bg-blue-500' },
              { title: t.categories.tools, color: 'bg-green-500' }
            ].map((category, index) => (
              <button
                key={index}
                className={`${category.color} text-white p-8 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Development Notice */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-yellow-800">
            ℹ️ {t.note}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--navy-dark)] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            <strong>SEAO-RENTALS Cameroun</strong>
          </p>
          <p className="text-gray-300 text-sm mb-4">
            📞 +237 697 661 092 | 📧 seaointeralia1@gmail.com
          </p>
          <p className="text-gray-400 text-sm">
            © 2026 SEAO-RENTALS. {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
