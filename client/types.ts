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
  title: string;
  price: number;
  image: string;
}

export interface arrivalsItem {
  id: number;
  image: string;
}

export interface arrivalsType {
  left: arrivalsItem[];
  right: arrivalsItem[];
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

export interface menuItem {
  id: number;
  name: string;
}

export interface MenuListType {
  centerImage: string;
  tops: menuItem[];
  bottoms: menuItem[];
  bodySuits: menuItem[];
  dresses: menuItem[];
  jewelry: menuItem[];
  winters: menuItem[];
  jackets: menuItem[];
  lingerie: menuItem[];
}

export interface menuCategoryItem {
  id: number;
  name: string;
}

export interface MenuCategoryType {
  women: menuCategoryItem[];
  men: menuCategoryItem[];
  trends: menuCategoryItem[];
}

// ----- Below are the Props type for components/pages -----
export interface bannerPropsType {
  text: string;
}

export interface buttonPropsType {
  text: string;
}

export interface burgerButtonPropsType {
  showMobileMenu: boolean;
  setShowMobileMenu: (showBurger: boolean) => void;
}

export interface desktopMenuPropsType {
  showDesktopMenu: boolean;
  selectedNavItem: string;
}

export interface mobileMenuPropsType {
  showMobileMenu: boolean;
}
