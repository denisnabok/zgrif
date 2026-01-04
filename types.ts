
export interface Service {
  title: string;
  items: string[];
}

export interface Language {
  name: string;
  flag: string;
}

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
  platform: 'Yandex' | 'Google';
}

export interface Advantage {
  title: string;
  description: string;
  icon: string;
}
