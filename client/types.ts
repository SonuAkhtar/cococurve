export interface bannerType {
  text: string;
}

export interface buttonType {
  text: string;
}

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

export interface newCollectionType {
  id: number;
  image: string;
}

export interface arrivalsItem {
  id: number;
  image: string;
}

export interface arrivalsType {
  left?: arrivalsItem[];
  right?: arrivalsItem[];
}

export interface BudgetType {
  id: number;
  image: string;
  rating: string;
  title: string;
  newPrice: string;
  oldPrice: string;
  off: string;
}
