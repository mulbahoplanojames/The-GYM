import { Link, useParams } from "react-router-dom";
import posts from "../../data/posts.json";
import { ArrowBigLeft } from "lucide-react";

export default function SinglePost() {
  //   console.log(posts);

  const { category, postId } = useParams();
  //   const param = useParams();
  //   console.log(param);

  const post = posts.find((p) => p.id === postId && p.category === category);

  //   console.log(post);

  return (
    <div className="container mx-auto px-2">
      <Link to={"/blog"}>
        <ArrowBigLeft />
      </Link>
      <div className="h-110 bg-slate-200 mb-6 mt-4 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full" />
      </div>
      <h1 className="text-2xl pb-3 font-bold">{post.title}</h1>
      <p className="pb-4">{post.category}</p>
      <p className="pb-4">{post.content}</p>
    </div>
  );
}
