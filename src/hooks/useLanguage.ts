import { useState, useCallback } from 'react';
import { Language, Translations } from '../types';
import { translations } from '../i18n/translations';

export function useLanguage(initialLanguage: Language = 'fr') {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const t: Translations = translations[language];

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
}
