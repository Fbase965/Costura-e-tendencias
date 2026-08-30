export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductSize {
  name: string;
  dimensions: string;
  priceEstimate?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'quarto' | 'cortinados' | 'sala' | 'banho' | 'cozinha' | 'infantil';
  categoryLabel: string;
  priceDisplay: string;
  priceNum?: number;
  originalPrice?: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  composition: string;
  careInstructions: string[];
  features: string[];
  sizes: ProductSize[];
  colors: ProductColor[];
  customizable: boolean;
  featured?: boolean;
}

export interface FabricSwatch {
  id: string;
  name: string;
  composition: string;
  weight: string;
  texture: string;
  idealFor: string;
  image: string;
  colors: { name: string; hex: string }[];
}

export interface CurtainConfig {
  room: string;
  headingType: 'onda' | 'franzido' | 'ilhos' | 'prega';
  fabricType: 'linho' | 'translucido' | 'semi-opaco' | 'blackout' | 'veludo';
  widthCm: number;
  heightCm: number;
  dropStyle: 'rente' | 'tocar' | 'arrasto';
  lining: boolean;
  notes: string;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  categoryLabel: string;
  image: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  customNotes?: string;
  priceDisplay: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  verified: boolean;
}
