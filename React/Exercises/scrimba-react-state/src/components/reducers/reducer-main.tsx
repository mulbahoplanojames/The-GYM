import { useReducer } from "react";
import Counter from "./counter";
import TodoList from "./todo-list";
import { useShoppingCart } from "../../context/reducer-shopping-cart-context";

export default function ReducerMain() {
  const { state } = useShoppingCart();
  return (
    <div className="bg-purple-800 p-20 text-white gap-6">
      <h1 className="text-2xl mb-4">Working with the useReducer Hook</h1>

      <Counter />
      <TodoList />
      <div className="p-10 bg-slate-950 text-white rounded-2xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {state.map((item) => (
          <div key={item.id} className="border-2 border-white p-3 rounded-3xl">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.qty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
