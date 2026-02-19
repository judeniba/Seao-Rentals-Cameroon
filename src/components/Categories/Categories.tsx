import { Category } from '../../types';

interface CategoriesProps {
  title: string;
  categories: Category[];
}

export function Categories({ title, categories }: CategoriesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[var(--navy-dark)]">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.title}
              className={`${category.color} text-white p-8 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
