import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Categories } from './components/Categories';
import { DevelopmentNotice } from './components/DevelopmentNotice';
import { Footer } from './components/Footer';
import { Service, Category } from './types';

function App() {
  const { language, toggleLanguage, t } = useLanguage('fr');

  const services: Service[] = [
    { title: t.services.rental, icon: '⚡' },
    { title: t.services.delivery, icon: '🚚' },
    { title: t.services.installation, icon: '🔧' },
    { title: t.services.maintenance, icon: '🛠️' }
  ];

  const categories: Category[] = [
    { title: t.categories.generators, color: 'bg-orange-500' },
    { title: t.categories.gps, color: 'bg-blue-500' },
    { title: t.categories.tools, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={t.title} 
        tagline={t.tagline} 
        language={language} 
        onLanguageToggle={toggleLanguage} 
      />
      
      <Hero 
        tagline={t.tagline} 
        description={t.description}
        whatsappLabel={t.whatsapp}
        phoneLabel={t.phone}
        emailLabel={t.email}
      />
      
      <Services title={t.services.title} services={services} />
      
      <Categories title={t.categories.title} categories={categories} />
      
      <DevelopmentNotice message={t.note} />
      
      <Footer language={language} />
    </div>
  );
}

export default App;
