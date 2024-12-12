// types
import {
  arrivalsType,
  BudgetType,
  CategoryType,
  MenuCategoryType,
  MenuListType,
  newCollectionType,
  SaleType,
} from "./types";

export const categoryData: CategoryType[] = [
  {
    id: 1,
    image: "/Images/home/category/category_1.jpg",
    title: "TOPS",
    priceInfo: "Starts from INR 899",
  },
  {
    id: 2,
    image: "/Images/home/category/category_2.jpg",
    title: "CO-ORDS",
    priceInfo: "Starts from INR 899",
  },
  {
    id: 3,
    image: "/Images/home/category/category_3.jpg",
    title: "JACKETS",
    priceInfo: "Starts from INR 899",
  },
  {
    id: 4,
    image: "/Images/home/category/category_4.jpg",
    title: "JUMPSUITS",
    priceInfo: "Starts from INR 899",
  },
  {
    id: 5,
    image: "/Images/home/category/category_5.jpg",
    title: "LINGERIE",
    priceInfo: "Starts from INR 899",
  },
  {
    id: 6,
    image: "/Images/home/category/category_6.jpg",
    title: "T-SHIRTS",
    priceInfo: "Starts from INR 899",
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
    title: `NEW ARRIVALS`,
    price: 899,
    image: "/Images/home/newCollection/one.png",
  },
  {
    id: 2,
    title: `SUMMER'24 WORDROBE`,
    price: 899,
    image: "/Images/home/newCollection/two.png",
  },
];

export const arrivalsData: arrivalsType = {
  left: [
    {
      id: 1,
      image: "/Images/home/arrivals/arrivals_1.jpg",
    },
    {
      id: 2,
      image: "/Images/home/arrivals/arrivals_2.jpg",
    },
    {
      id: 3,
      image: "/Images/home/arrivals/arrivals_3.jpg",
    },
  ],
  right: [
    {
      id: 4,
      image: "/Images/home/arrivals/arrivals_4.jpg",
    },
    {
      id: 5,
      image: "/Images/home/arrivals/arrivals_5.jpg",
    },
  ],
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
