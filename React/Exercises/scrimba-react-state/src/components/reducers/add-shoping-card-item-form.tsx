import React, { useState } from "react";
import { useShoppingCart } from "../../context/reducer-shopping-cart-context";

export default function AddShopingCartItemForm() {
  const { dispatch } = useShoppingCart();

  const [cartItem, setCartItem] = useState({
    title: "",
    price: "",
    description: "",
    qty: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCartItem((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        title: cartItem.title,
        price: Number(cartItem.price),
        description: cartItem.description,
        qty: Number(cartItem.qty),
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-orange-600 py-15 px-6 rounded-3xl my-10"
    >
      <h1 className="text-2xl font-black mb-4">
        Working with the UseReducer hook and the UesContext hook
      </h1>

      <h1 className="text-2xl font-black mb-4">Add shopping item </h1>

      <div className="flex justify-between items-center gap-5 my-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={cartItem.title}
          required
          onChange={handleChange}
          className="w-full border-2 border-white rounded-xl px-4 py-2 outline-none"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={cartItem.price}
          required
          onChange={handleChange}
          className="w-full border-2 border-white rounded-xl px-4 py-2 outline-none"
        />
      </div>

      <input
        type="number"
        name="qty"
        placeholder="Quantity"
        required
        value={cartItem.qty}
        onChange={handleChange}
        className="w-full border-2 border-white rounded-xl px-4 py-2 outline-none"
      />

      <textarea
        name="description"
        id=""
        value={cartItem.description}
        onChange={(e) =>
          setCartItem((prev) => ({ ...prev, description: e.target.value }))
        }
        required
        className="w-full border-2 border-white rounded-xl px-4 py-2 outline-none mt-3 "
      ></textarea>
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-xl mt-3 cursor-pointer"
      >
        Add Item
      </button>
    </form>
  );
}
