import { Trash } from "lucide-react";
import React, { use, useState } from "react";
import { type Cart, CartContext } from "../../context/cart-context";

interface TaskType {
  id: number;
  title: string;
}

export default function StateDemo2() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showCart, setShowCart] = useState(false);

  let cart: Cart | null = null;
  if (showCart) {
    cart = use(CartContext);
  }

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: inputValue.trim(),
        },
      ]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-green-400 p-20  ">
      <form
        onSubmit={handleAddTodo}
        className="flex gap-2 justify-center container mx-auto "
      >
        <input
          type="text"
          required
          className="border-2 grow shadow-2xl rounded-4xl h-10 px-4 outline-none max-w-150 min-w-70 "
          placeholder="Add Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black px-5 py-2 rounded-2xl cursor-pointer hover:opacity-80"
        >
          Add
        </button>
        <button
          type="button"
          onClick={toggleCart}
          className="bg-blue-500 text-white px-5 py-2 rounded-2xl cursor-pointer hover:opacity-80"
        >
          {showCart ? "Hide Cart" : "Show Cart"}
        </button>
      </form>

      {showCart && cart && (
        <div className="mt-8 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2 border-b pb-1">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        {tasks.map((task) => (
          <li className="flex justify-between items-center mb-3" key={task.id}>
            <span>{task.title}</span>{" "}
            <span
              className="py-2 px-3 bg-red-400 text-white ml-4 rounded-lg cursor-pointer"
              onClick={() => handleRemoveTask(task.id)}
            >
              <Trash className="size-4" />
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}
