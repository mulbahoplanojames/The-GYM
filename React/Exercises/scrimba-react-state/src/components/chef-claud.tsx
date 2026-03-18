import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function ChefClaud() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="pb-44 pt-20 px-20">
      <form
        className="flex flex-row justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 grow min-w-72 max-w-110 rounded-md shadow-2xl outline-none px-4 h-10 bg-white"
          placeholder="e.g. Cassava"
          aria-label="Add Ingredient"
        />
        <button
          type="submit"
          className="bg-black text-white flex items-center shadow-2xl justify-center rounded-lg px-8 gap-2 cursor-pointer hover:opacity-65"
        >
          <Plus />
          <span> Add Ingredient</span>
        </button>
      </form>

      <ul className="mt-6">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
