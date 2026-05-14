export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: {
    id: number;
    name: string;
  };
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  total: number;
}
