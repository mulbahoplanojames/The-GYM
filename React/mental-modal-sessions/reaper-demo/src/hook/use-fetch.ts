import { useState } from "react";
import type { Post } from "../types/types";

export const useFetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [refetch, setRefetch] = useState<boolean>(false);

  const fetchPosts = async (postUrl: string) => {
    try {
      setLoading(true);
      const res = await fetch(postUrl);
      const data = await res.json();
      if (!res.ok) {
        setPosts([]);
        if (res.status === 404) {
          throw new Error("Post not found");
        }
        if (res.status === 500) {
          throw new Error("Internal server error");
        }
        if (res.status === 400) {
          throw new Error("Bad request");
        }
        throw new Error(`An error occurred: ${res.status}`);
      }
      setPosts(data);
      setRefetch(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setError(errorMessage);
      setLoading(false);
      setRefetch(false);
    } finally {
      setLoading(false);
      setRefetch(false);
    }
  };

  return { posts, loading, setError, error, refetch, setRefetch, fetchPosts };
};
