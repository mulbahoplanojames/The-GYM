import React, { createContext, useEffect, useState } from "react";

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

export const CartContext = createContext<Cart | null>(null);

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setCart(data.products);
      // console.log(data.products);
    };
    fetchProducts();
  }, []);
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
