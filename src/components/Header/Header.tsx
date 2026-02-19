import { Language } from '../../types';

interface HeaderProps {
  title: string;
  tagline: string;
  language: Language;
  onLanguageToggle: () => void;
}

export function Header({ title, tagline, language, onLanguageToggle }: HeaderProps) {
  return (
    <header className="bg-[var(--navy-dark)] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
            <p className="text-sm md:text-base text-gray-300">{tagline}</p>
          </div>
          <button
            onClick={onLanguageToggle}
            className="px-4 py-2 bg-[var(--sky-blue)] hover:bg-blue-600 rounded-lg font-medium transition-colors"
            aria-label="Toggle language"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </header>
  );
}
