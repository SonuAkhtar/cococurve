// API Response Data Type -----Start-----
export interface ApiRespDataType {
  heroData: HeroType;
  sectionData: SectionType[];
  saleData: SaleType[];
  newCollectionData: newCollectionType[];
  arrivalsData: arrivalsType;
  budgetData: BudgetType[];
  categoryData: CategoryType[];
  paymentMethodData: paymentMethodType[];
  userAddressCardData: userAddressCardType[];
  bannerData: BannerType;
  menuCategoryList: MenuCategoryType;
}
// API Response Data Type -----End-----

// Components Type -----Start-----
export interface BannerType {
  bannerText: string;
}
export interface HeroType {
  id: number;
  desktopImage: string;
  mobileImage: string;
  href: string;
  altText: string;
}

export interface SectionType {
  id: number;
  href: string;
  desktopImage: string;
  mobileImage: string;
  altText: string;
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
  href: string;
  desktopImage: string;
  mobileImage: string;
  altText: string;
}

export interface arrivalsType {
  id: number;
  href: string;
  desktopImage: string;
  mobileImage: string;
  altText: string;
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

export interface CategoryType {
  id: number;
  href: string;
  desktopImage: string;
  mobileImage: string;
  altText: string;
}

export interface paymentMethodType {
  id: number;
  image: string;
  name: string;
  value: string;
  info?: string;
}

export interface userAddressCardType {
  id: number;
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface userAddressInputType {
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
// Components Type -----Start-----

// Navbar Menu Type -----Start-----
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
// Navbar Menu Type -----Start-----

// components/pages Props Type -----Start-----
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

export interface paymentCardPropsType {
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
  data: paymentMethodType;
}

export interface addressCardPropsType {
  id: number;
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
// components/pages Props Type -----Start-----

// Redux Type -----Start-----
export interface RootStateType {
  delivery: {
    addressAdded: boolean;
  };
}
// Redux Type -----End-----
