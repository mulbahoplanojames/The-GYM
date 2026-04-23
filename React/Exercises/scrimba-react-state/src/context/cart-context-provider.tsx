import React, { useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import type { Cart } from "./cart-context";

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
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
