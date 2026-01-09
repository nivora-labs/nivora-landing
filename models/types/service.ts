export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  cta: string;
  cards: ServiceCard[];
}

