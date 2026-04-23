import { useEffect, useState } from "react";
import type { Recipe, RecipeResponse } from "../types/types";

export const useRecipes = (id) => {
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [singleRecipe, setSingleRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 404) {
            setError("Recipes not found");
          }
          if (response.status === 500) {
            setError("Internal server error");
          }
          if (response.status === 401) {
            setError("Unauthorized");
          }
        }

        setRecipes(data.recipes);
      } catch (error) {
        error instanceof Error
          ? setError(error.message)
          : setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    const fetchSingleRecipe = async (id: number) => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 404) {
            setError("Recipes not found");
          }
          if (response.status === 500) {
            setError("Internal server error");
          }
          if (response.status === 401) {
            setError("Unauthorized");
          }
        }

        setSingleRecipe(data.recipes);
      } catch (error) {
        error instanceof Error
          ? setError(error.message)
          : setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleRecipe(id);
  }, [id]);

  return { recipes, singleRecipe, error, loading };
};
