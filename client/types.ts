export interface CategoryType {
  id: number;
  image: string;
  title: string;
  priceInfo: string;
}

export interface SaleType {
  id: number;
  image: string;
  rating: string;
  title: string;
  newPrice: string;
  oldPrice: string;
  off: string;
}

export interface arrivalsItem {
  id: number;
  image: string;
}

export interface arrivalsType {
  left?: arrivalsItem[]; // 'left' is optional
  right?: arrivalsItem[]; // 'right' is optional
}
