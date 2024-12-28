// types
import {
  arrivalsType,
  BudgetType,
  CategoryType,
  HeroType,
  MenuCategoryType,
  MenuListType,
  newCollectionType,
  paymentMethodType,
  SaleType,
  SectionType,
  userAddressType,
} from "./types";

export const bannerText: string =
  "USE FIRST15 TO GET 15% DISCOUNT ON YOUR FIRST ORDER";

export const heroData: HeroType = {
  id: 1,
  desktopImage: "/Images/home/hero/hero_desktop.png",
  mobileImage: "/Images/home/hero/hero_mobile.png",
  href: "/listing",
  altText: "hero image",
};

export const sectionData: SectionType[] = [
  {
    id: 1,
    href: "/women",
    desktopImage: "/Images/home/section/section_desktop_women.png",
    mobileImage: "/Images/home/section/section_mobile_women.png",
    altText: "Women section image",
  },
  {
    id: 2,
    href: "/men",
    desktopImage: "/Images/home/section/section_desktop_men.png",
    mobileImage: "/Images/home/section/section_mobile_men.png",
    altText: "Men section image",
  },
];

export const categoryData: CategoryType[] = [
  {
    id: 1,
    href: "/category/tops",
    desktopImage: "/Images/home/category/category_desktop_1.png",
    mobileImage: "/Images/home/category/category_mobile_1.png",
    altText: "tops image",
  },
  {
    id: 2,
    href: "/category/coords",
    desktopImage: "/Images/home/category/category_desktop_2.png",
    mobileImage: "/Images/home/category/category_mobile_2.png",
    altText: "coords image",
  },
  {
    id: 3,
    href: "/category/jackets",
    desktopImage: "/Images/home/category/category_desktop_3.png",
    mobileImage: "/Images/home/category/category_mobile_3.png",
    altText: "jackets image",
  },
  {
    id: 4,
    href: "/category/jumpsuits",
    desktopImage: "/Images/home/category/category_desktop_4.png",
    mobileImage: "/Images/home/category/category_mobile_4.png",
    altText: "jumpsuits image",
  },
  {
    id: 5,
    href: "/category/lingerie",
    desktopImage: "/Images/home/category/category_desktop_5.png",
    mobileImage: "/Images/home/category/category_mobile_5.png",
    altText: "lingerie image",
  },
  {
    id: 6,
    href: "/category/tshirts",
    desktopImage: "/Images/home/category/category_desktop_6.png",
    mobileImage: "/Images/home/category/category_mobile_6.png",
    altText: "tshirts image",
  },
];

export const saleData: SaleType[] = [
  {
    id: 1,
    image: "/Images/home/sale/sale_1.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 2,
    image: "/Images/home/sale/sale_2.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 3,
    image: "/Images/home/sale/sale_3.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 4,
    image: "/Images/home/sale/sale_4.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 5,
    image: "/Images/home/sale/sale_5.png",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
];

export const newCollectionData: newCollectionType[] = [
  {
    id: 1,
    href: "/new-collections",
    desktopImage: "/Images/home/newCollection/newCollection_desktop_1.png",
    mobileImage: "/Images/home/newCollection/newCollection_mobile_1.png",
    altText: "New Collections image",
  },
  {
    id: 2,
    href: "/new-collections",
    desktopImage: "/Images/home/newCollection/newCollection_desktop_2.png",
    mobileImage: "/Images/home/newCollection/newCollection_mobile_2.png",
    altText: "New Collections image",
  },
];

export const arrivalsData: arrivalsType = {
  id: 1,
  href: "/new-arrivals",
  desktopImage: "/Images/home/arrivals/arrivals_desktop_main.png",
  mobileImage: "/Images/home/arrivals/arrivals_mobile_main.png",
  altText: "New arrivals image",
};

export const budgetData: BudgetType[] = [
  {
    id: 1,
    image: "/Images/home/budget/budget_1.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 2,
    image: "/Images/home/budget/budget_2.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 3,
    image: "/Images/home/budget/budget_3.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 4,
    image: "/Images/home/budget/budget_4.png",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 5,
    image: "/Images/home/budget/budget_5.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
  {
    id: 6,
    image: "/Images/home/budget/budget_6.jpg",
    rating: "4.8",
    title: "Men Oversized Tshirt",
    newPrice: "500",
    oldPrice: "899",
    off: "37",
  },
];

export const menuCategoryList: MenuCategoryType = {
  women: [
    { id: 1, name: "Tops" },
    { id: 2, name: "Bottoms" },
    { id: 3, name: "Jump/Body suits" },
    { id: 4, name: "Dresses" },
    { id: 5, name: "Jewelry" },
    { id: 6, name: "Winters" },
    { id: 7, name: "Jackets" },
    { id: 8, name: "Lingerie" },
  ],
  men: [
    { id: 9, name: "Tops" },
    { id: 10, name: "Bottoms" },
    { id: 11, name: "Jump/Body suits" },
    { id: 12, name: "Dresses" },
    { id: 13, name: "Jewelry" },
    { id: 14, name: "Winters" },
    { id: 15, name: "Jackets" },
    { id: 16, name: "Lingerie" },
  ],
  trends: [
    { id: 17, name: "Tops" },
    { id: 18, name: "Bottoms" },
    { id: 19, name: "Jump/Body suits" },
    { id: 20, name: "Dresses" },
    { id: 21, name: "Jewelry" },
    { id: 22, name: "Winters" },
    { id: 23, name: "Jackets" },
    { id: 24, name: "Lingerie" },
  ],
};

export const womenMenuData: MenuListType = {
  centerImage: "/Images/menu/menu-women.png",
  tops: [
    {
      id: 1,
      name: "Blouses",
    },
    {
      id: 2,
      name: "Tshirts",
    },
    {
      id: 3,
      name: "Shirts",
    },
    {
      id: 4,
      name: "Tank Tops",
    },
  ],
  bottoms: [
    {
      id: 5,
      name: "Shorts",
    },
    {
      id: 6,
      name: "Skirts",
    },
    {
      id: 7,
      name: "Jeans",
    },
    {
      id: 8,
      name: "Trousers",
    },
  ],
  bodySuits: [
    {
      id: 9,
      name: "Jump Suits",
    },
    {
      id: 10,
      name: "Body Suits",
    },
    {
      id: 11,
      name: "Play Suits",
    },
  ],
  dresses: [
    {
      id: 12,
      name: "Maxi",
    },
    {
      id: 13,
      name: "Midi",
    },
    {
      id: 14,
      name: "Mini",
    },
    {
      id: 15,
      name: "Bodycon",
    },
  ],
  jewelry: [
    {
      id: 16,
      name: "Earrings",
    },
    {
      id: 17,
      name: "Necklace",
    },
    {
      id: 18,
      name: "Ring",
    },
    {
      id: 19,
      name: "Bracelet",
    },
    {
      id: 20,
      name: "Charm",
    },
  ],
  winters: [
    {
      id: 21,
      name: "Sweaters",
    },
    {
      id: 22,
      name: "Cardigans",
    },
    {
      id: 23,
      name: "Sweatshirts",
    },
    {
      id: 24,
      name: "Coats",
    },
    {
      id: 25,
      name: "Winter coords",
    },
    {
      id: 26,
      name: "Winter dresses",
    },
  ],
  jackets: [
    {
      id: 27,
      name: "Winter Jackets",
    },
    {
      id: 28,
      name: "Shrugs",
    },
    {
      id: 29,
      name: "Blazers",
    },
    {
      id: 30,
      name: "Casual Jackets",
    },
    {
      id: 31,
      name: "Winter coords",
    },
    {
      id: 32,
      name: "Winter coords",
    },
  ],
  lingerie: [
    {
      id: 33,
      name: "Bra",
    },
    {
      id: 34,
      name: "Bralette",
    },
    {
      id: 35,
      name: "Panties",
    },
    {
      id: 36,
      name: "Baby-dolls",
    },
    {
      id: 37,
      name: "Slip dresses",
    },
    {
      id: 38,
      name: "Matching sets",
    },
  ],
};

export const menMenuData: MenuListType = {
  centerImage: "/Images/menu/menu-men.png",
  tops: [
    {
      id: 1,
      name: "Blouses",
    },
    {
      id: 2,
      name: "Tshirts",
    },
    {
      id: 3,
      name: "Shirts",
    },
    {
      id: 4,
      name: "Tank Tops",
    },
  ],
  bottoms: [
    {
      id: 5,
      name: "Shorts",
    },
    {
      id: 6,
      name: "Skirts",
    },
    {
      id: 7,
      name: "Jeans",
    },
    {
      id: 8,
      name: "Trousers",
    },
  ],
  bodySuits: [
    {
      id: 9,
      name: "Jump Suits",
    },
    {
      id: 10,
      name: "Body Suits",
    },
    {
      id: 11,
      name: "Play Suits",
    },
  ],
  dresses: [
    {
      id: 12,
      name: "Maxi",
    },
    {
      id: 13,
      name: "Midi",
    },
    {
      id: 14,
      name: "Mini",
    },
    {
      id: 15,
      name: "Bodycon",
    },
  ],
  jewelry: [
    {
      id: 16,
      name: "Earrings",
    },
    {
      id: 17,
      name: "Necklace",
    },
    {
      id: 18,
      name: "Ring",
    },
    {
      id: 19,
      name: "Bracelet",
    },
    {
      id: 20,
      name: "Charm",
    },
  ],
  winters: [
    {
      id: 21,
      name: "Sweaters",
    },
    {
      id: 22,
      name: "Cardigans",
    },
    {
      id: 23,
      name: "Sweatshirts",
    },
    {
      id: 24,
      name: "Coats",
    },
    {
      id: 25,
      name: "Winter coords",
    },
    {
      id: 26,
      name: "Winter dresses",
    },
  ],
  jackets: [
    {
      id: 27,
      name: "Winter Jackets",
    },
    {
      id: 28,
      name: "Shrugs",
    },
    {
      id: 29,
      name: "Blazers",
    },
    {
      id: 30,
      name: "Casual Jackets",
    },
    {
      id: 31,
      name: "Winter coords",
    },
    {
      id: 32,
      name: "Winter coords",
    },
  ],
  lingerie: [
    {
      id: 33,
      name: "Bra",
    },
    {
      id: 34,
      name: "Bralette",
    },
    {
      id: 35,
      name: "Panties",
    },
    {
      id: 36,
      name: "Baby-dolls",
    },
    {
      id: 37,
      name: "Slip dresses",
    },
    {
      id: 38,
      name: "Matching sets",
    },
  ],
};

export const paymentMethodData: paymentMethodType[] = [
  {
    id: 1,
    image: "/Images/delivery/payment/delivery-payment-1.png",
    name: "UPI",
    value: "upi",
  },
  {
    id: 2,
    image: "/Images/delivery/payment/delivery-payment-2.png",
    name: "Razorpay",
    value: "razorpay",
  },
  {
    id: 3,
    image: "/Images/delivery/payment/delivery-payment-3.png",
    name: "Netbanking",
    value: "netbanking",
  },
  {
    id: 4,
    image: "/Images/delivery/payment/delivery-payment-4.png",
    name: "Cash on delivery",
    value: "cod",
    info: "This will cost you additional INR 200*",
  },
];

export const userAddressData: userAddressType[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91-9876543210",
    email: "rahulsharma@gmail.com",
    addressLine1: "House no. 30",
    addressLine2: "Street no. 54",
    addressLine3: "Near public school",
    city: "Gurgaon",
    state: "Haryana",
    country: "India",
    pincode: "122331",
  },
  {
    id: 2,
    name: "Rahul verma",
    phone: "+91-9876543210",
    email: "rahulvarma@gmail.com",
    addressLine1: "House no. 40",
    addressLine2: "Street no. 44",
    addressLine3: "Near public school",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "123456",
  },
];
