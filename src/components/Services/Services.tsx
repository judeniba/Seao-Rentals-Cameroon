import { Service } from '../../types';

interface ServicesProps {
  title: string;
  services: Service[];
}

export function Services({ title, services }: ServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[var(--navy-dark)]">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-[var(--sky-blue)] transition-colors"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-[var(--navy-dark)]">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
