import React, { createContext } from "react";

export type Cart = {
  id: number;
  title: string;
  description: string;
  price: number;
  availabilityStatus: string;
  brand: string;
  category: string;
  discountPercentage: number;
  images: string[];
}[];

export const CartContext = createContext<{
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}>({
  cart: [],
  setCart: () => {},
});
