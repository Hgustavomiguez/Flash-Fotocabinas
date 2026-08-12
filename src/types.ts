export interface StripDesign {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  preset: 'boda' | 'quince' | 'fiesta' | 'corpo';
}

export interface QuoteData {
  service: 'totem' | '360' | 'combo';
  hours: number;
  location: string;
  guests: number;
  extras: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'totem' | '360' | 'bodas' | 'cumples';
  imageUrl: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
