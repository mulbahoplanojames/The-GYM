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
    setCurrentPage(1);
    fetchPosts(userInpuPosttUrl);
  };

  const handleRefetch = () => {
    setError("");
    const atcualUrl = "https://jsonplaceholder.typicode.com/posts";
    setRefetch(true);
    setCurrentPage(1);
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
        // Add pagination of 10 posts at a time when the user clicks on the next button, it should display the next 10 posts and so on until the end of the posts 100 posts, when the user clicks on the previous button, it should display the previous 10 posts and so on until the beginning of the posts 100 posts
        <>
          {posts.length > 0 ? (
            <div className="space-y-4">
              <div className="grid gap-2">
                {posts
                  .slice((currentPage - 1) * 10, currentPage * 10)
                  .map((post: Post) => (
                    <div
                      className="border border-green-600/30 p-4 rounded bg-slate-800/50"
                      key={post.id}
                    >
                      <h3 className="text-green-400 font-semibold">
                        Post #{post.id}
                      </h3>
                      <p className="text-white">{post.title}</p>
                    </div>
                  ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-green-600/30">
                <p className="text-white">
                  Page{" "}
                  <span className="text-green-400 font-bold">
                    {currentPage}
                  </span>{" "}
                  of {Math.ceil(posts.length / 10)}
                </p>
                <div className="flex gap-4">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="border-2 border-green-600/60 py-2 px-5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-green-600/10 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentPage === Math.ceil(posts.length / 10)}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="border-2 border-green-600/60 py-2 px-5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-green-600/10 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
      {error && <p className="text-red-500 pt-4 text-xl">{error}</p>}
    </div>
  );
}
