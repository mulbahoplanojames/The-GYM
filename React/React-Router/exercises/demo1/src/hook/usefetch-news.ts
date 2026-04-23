import { useEffect, useState } from "react";
import type { News } from "../types/types";

export const useFetchNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://actually-relevant-api.onrender.com/api/stories/",
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("News not found");
          } else if (response.status === 500) {
            setError("Internal server error");
          } else {
            setError("Error fetching News");
          }
        }

        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.log(error);
        error instanceof Error
          ? setError(error.message)
          : setError("Error fetching News");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, setNews, loading, error };
};

export const useFetchSingleNew = (slug: string) => {
  const [singleNew, setSingleNew] = useState<News | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSingleNew = async (slug: string) => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://actually-relevant-api.onrender.com/api/stories/${slug}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("News not found");
          } else if (response.status === 500) {
            setError("Internal server error");
          } else {
            setError("Error fetching News");
          }
        }

        const data = await response.json();
        setSingleNew(data);
      } catch (error) {
        console.log(error);
        error instanceof Error
          ? setError(error.message)
          : setError("Error fetching News");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleNew(slug);
  }, [slug]);

  return { singleNew, setSingleNew, loading, error };
};
