import { CONTACT_INFO } from '../../constants/config';

interface HeroProps {
  tagline: string;
  description: string;
  whatsappLabel: string;
  phoneLabel: string;
  emailLabel: string;
}

export function Hero({ tagline, description, whatsappLabel, phoneLabel, emailLabel }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--navy-dark)] to-gray-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{tagline}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
          >
            {whatsappLabel}
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-6 py-3 bg-[var(--vibrant-orange)] hover:bg-orange-600 rounded-lg font-medium transition-colors"
          >
            {phoneLabel}
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-6 py-3 bg-[var(--sky-blue)] hover:bg-blue-600 rounded-lg font-medium transition-colors"
          >
            {emailLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
