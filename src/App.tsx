import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')

  const content = {
    fr: {
      title: 'SEAO-RENTALS Cameroun',
      subtitle: 'Location Générateurs, GPS & Outils',
      description: 'Plateforme professionnelle de location d\'équipement pour le Cameroun',
      switchLang: 'English'
    },
    en: {
      title: 'SEAO-RENTALS Cameroon',
      subtitle: 'Equipment Rental Platform',
      description: 'Professional equipment rental platform for Cameroon - Generators, GPS trackers, and tools',
      switchLang: 'Français'
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
          <h2 className="text-2xl mb-6">{t.subtitle}</h2>
          <p className="text-lg mb-8">{t.description}</p>
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            {t.switchLang}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
