import { useState } from "react";
import { useFetch } from "../hook/use-fetch";
import type { Post } from "../types/types";

export default function Posts() {
  const [userInpuPosttUrl, setUserInpuPosttUrl] = useState<string>("");
  const { posts, loading, error, setError, refetch, setRefetch, fetchPosts } =
    useFetch();
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log(posts);
  console.log(error);

  const handleSubmit = () => {
    if (!userInpuPosttUrl.trim()) {
      setError("Please enter a post URL");
      return;
    }
    setError("");
    fetchPosts(userInpuPosttUrl);
  };

  const handleRefetch = () => {
    setError("");
    const atcualUrl = "https://jsonplaceholder.typicode.com/posts";
    setRefetch(true);
    fetchPosts(atcualUrl);
  };

  console.log("Eror", error);

  return (
    <div className="bg-green-600/20 border-2 border-green-600/60 p-10">
      <div className="flex  gap-4">
        <input
          type="text"
          placeholder="Enter post URL"
          value={userInpuPosttUrl}
          onChange={(e) => setUserInpuPosttUrl(e.target.value)}
          className="border-2 border-green-600/60 p-2 outline-none flex-1 text-white"
        />
        {!error && (
          <button
            className="border-2 border-green-600/60 py-2 px-5 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        {error && (
          <button
            disabled={loading || refetch}
            className="border-2 border-green-600/60 py-2 px-5 text-white"
            onClick={handleRefetch}
          >
            Retry
          </button>
        )}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {posts.length > 0 ? (
            <div>
              {posts.slice(0, 10).map((post: Post) => (
                <div className="" key={post.id}>
                  <p className="text-white py-2">{post.title}</p>
                </div>
              ))}
            </div>
          ) : null}
        </>
      )}
      {error && <p className="text-red-500 pt-4 text-xl">{error}</p>}
    </div>
  );
}
