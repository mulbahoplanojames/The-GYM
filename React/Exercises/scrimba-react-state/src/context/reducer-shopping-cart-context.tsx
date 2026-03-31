import React, { createContext, useContext, useReducer } from "react";

type Cart = {
  id: number;
  title: string;
  description?: string;
  price: number;
  qty: number;
};

const ShoppingCartActions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_QTY: "INCREASE_QTY",
  DECREASE_QTY: "DECREASE_QTY",
} as const;

type ShoppingCartAction =
  | { type: typeof ShoppingCartActions.ADD_ITEM; payload: Cart }
  | { type: typeof ShoppingCartActions.REMOVE_ITEM; payload: { id: number } }
  | { type: typeof ShoppingCartActions.INCREASE_QTY; payload: { id: number } }
  | { type: typeof ShoppingCartActions.DECREASE_QTY; payload: { id: number } };

interface ShoppingCartContextType {
  state: Cart[];
  dispatch: React.Dispatch<ShoppingCartAction>;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

const shoppingCartReducer = (state: Cart[], action: ShoppingCartAction) => {
  switch (action.type) {
    case ShoppingCartActions.ADD_ITEM: {
      return [...state, action.payload];
    }
    case ShoppingCartActions.REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case ShoppingCartActions.INCREASE_QTY: {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
      );
    }
    case ShoppingCartActions.DECREASE_QTY: {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item,
      );
    }
    default: {
      return state;
    }
  }
};

export default function ShoppingCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(shoppingCartReducer, [] as Cart[]);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }
  return context;
}
