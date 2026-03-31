import { Plus } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getRecipeFromMistral } from "../utils/get-recipes";

export default function ChefClaud() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleGetRecipe = async () => {
    setIsLoading(true);
    try {
      const recipeText = await getRecipeFromMistral(ingredients);
      if (recipeText) {
        setRecipe(recipeText);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setIsLoading(false);
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

      {ingredients.length > 0 && (
        <p className="text-center mt-10 text-lg font-semibold">
          You have {ingredients.length} Ingredients on your list
        </p>
      )}

      <ul className="mt-6">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>

      <div className="">
        {ingredients.length > 3 && (
          <button
            disabled={isLoading}
            onClick={handleGetRecipe}
            className="bg-black text-white flex items-center shadow-2xl justify-center rounded-lg px-8 py-2 mt-5 gap-2 cursor-pointer hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Generating..." : "Get Recipe"}
          </button>
        )}
      </div>

      {recipe && (
        <section className="mt-14 bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-20 text-slate-800">
          <div className="prose prose-slate marker:text-black max-w-none">
            <ReactMarkdown>
              {recipe}
            </ReactMarkdown>
          </div>
        </section>
      )}
    </div>
  );
}
