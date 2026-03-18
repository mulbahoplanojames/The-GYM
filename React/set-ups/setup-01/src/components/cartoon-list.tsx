import type { CartoonListType } from "../types/types";

export default function CartoonList({
  title,
  year,
  image,
  description,
}: CartoonListType) {
  title = "James";
  return (
    <div>
      <div className="border bg-slate-100">
        <img src={image} alt={title} className="w-full h-44" />
        <h1 className="text-xl py-3 font-bold text-blue-600">{title}</h1>
        <p className="text-slate-600">{description}</p>
        <p className="text-slate-600">{year}</p>
      </div>
    </div>
  );
}
