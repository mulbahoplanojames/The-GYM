import { Link } from "react-router-dom";
import posts from "../../../data/posts.json";
import type { Posts } from "../../../types/types";

export default function Posts() {
  return (
    <div className="grid container mx-auto px-2  py-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
      {posts.map((post: Posts) => (
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
  );
}
