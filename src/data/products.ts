import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    title: "Shoes",
    price: 100,
    description: "Nice running shoes",
    images: ["https://placehold.co/200"],
    category: { id: 1, name: "Clothes" },
  },
  {
    id: 2,
    title: "Shirt",
    price: 50,
    description: "Casual shirt",
    images: ["https://placehold.co/200"],
    category: { id: 1, name: "Clothes" },
  },
];
