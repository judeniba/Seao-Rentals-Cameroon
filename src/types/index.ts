export type Language = 'fr' | 'en';

export interface Translations {
  title: string;
  tagline: string;
  description: string;
  contact: string;
  whatsapp: string;
  phone: string;
  email: string;
  services: {
    title: string;
    rental: string;
    delivery: string;
    installation: string;
    maintenance: string;
  };
  categories: {
    title: string;
    generators: string;
    gps: string;
    tools: string;
    all: string;
  };
  note: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Category {
  title: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsappNumber: string;
}
