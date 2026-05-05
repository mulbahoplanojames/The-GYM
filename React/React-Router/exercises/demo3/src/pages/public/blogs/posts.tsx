import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import posts from "../../../data/posts.json";
import type { Posts } from "../../../types/types";

export default function Posts() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const [searchParam, setSearchParam] = useSearchParams();
  let category = searchParam.get("category");

  const clearSearch = () => {
    if (category) {
      setSearchParam({});
      category = "";
    }
  };

  return (
    <div className="container mx-auto px-2 py-14">
      {/* add search input */}

      <div className="flex gap-x-2">
        <input
          type="text"
          placeholder="Search by category"
          value={searchParam.get("category") || ""}
          onChange={(e) => setSearchParam({ category: e.target.value })}
          className="w-full flex-1 px-4 py-2 mb-4 border border-gray-200"
        />
        {searchParam.get("category") && (
          <button
            onClick={clearSearch}
            className="px-5 py-1 bg-black text-white mt-3"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
        {posts
          .filter((post: Posts) => post.category.includes(category || ""))
          .map((post: Posts) => (
            <div key={post.id} className="shadow-lg p-4">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full bg-slate-200 mb-4"
              />
              <h2 className="text-2xl font-bold pb-2 ">{post.title}</h2>
              <p className="text-gray-600">{post.category}</p>
              <Link
                to={`/blog/${post.category}/${post.id}`}
                className="px-5 py-2 bg-black text-white mt-3 block w-32 "
              >
                Read More
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
