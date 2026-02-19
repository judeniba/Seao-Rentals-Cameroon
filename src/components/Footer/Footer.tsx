import { Language } from '../../types';
import { COMPANY_NAME, CONTACT_INFO, CURRENT_YEAR } from '../../constants/config';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const copyright = language === 'fr' ? 'Tous droits réservés' : 'All rights reserved';

  return (
    <footer className="bg-[var(--navy-dark)] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          <strong>{COMPANY_NAME}</strong>
        </p>
        <p className="text-gray-300 text-sm mb-4">
          📞 {CONTACT_INFO.phone} | 📧 {CONTACT_INFO.email}
        </p>
        <p className="text-gray-400 text-sm">
          © {CURRENT_YEAR} SEAO-RENTALS. {copyright}.
        </p>
      </div>
    </footer>
  );
}
