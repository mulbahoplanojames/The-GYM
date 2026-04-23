import { useEffect, useState } from "react";
import type { Products } from "../types/types";

export const useProducts = (id?: number) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [singleProduct, setSingleProduct] = useState<Products | null>(null);
  const [error, setError] = useState(null);
  const [singleProductError, setSingleProductError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [singleProductLoading, setSingleProductLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
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

        setProducts(data.products);
      } catch (error) {
        error instanceof Error
          ? setError(error.message)
          : setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSingleProduct = async (id: number) => {
      setSingleProductLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 404) {
            setSingleProductError("Product not found");
          }
          if (response.status === 500) {
            setSingleProductError("Internal server error");
          }
          if (response.status === 401) {
            setSingleProductError("Unauthorized");
          }
        }

        setSingleProduct(data);
      } catch (error) {
        error instanceof Error
          ? setSingleProductError(error.message)
          : setSingleProductError("An unknown error occurred");
      } finally {
        setSingleProductLoading(false);
      }
    };
    fetchSingleProduct(id);
  }, [id]);

  return {
    products,
    singleProduct,
    error,
    loading,
    singleProductError,
    singleProductLoading,
  };
};
