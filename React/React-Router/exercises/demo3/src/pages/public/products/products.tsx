import { Link } from "react-router-dom";
import { useProducts } from "../../../hooks/products";
import type { Products } from "../../../types/types";

export default function Products() {
  const { products, error, loading } = useProducts();
  console.log(products);
  return (
    <div className="container mx-auto py-14 px-2">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      {loading ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {Array.from({ length: 12 }).map((_, idx) => (
            <ProductsSkeleton key={idx} />
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product: Products) => (
            <div key={product.id} className="border border-gray-200 p-4">
              <img
                src={product.thumbnail || "src/assets/hero.png"}
                alt={product.title}
                className="aspect-square object-cover"
              />
              <h2 className="text-xl font-bold py-2">{product.title}</h2>
              <p className="my-2 line-clamp-3">{product.description}</p>
              <div className="flex justify-between items-center gap-x-2 mb-3">
                <p className="py-2">{product.price}</p>
                <p className="py-2">{product.rating}</p>
                <p className="py-2">{product.stock}</p>
              </div>
              <Link
                to={`/products/${product.id}`}
                className="bg-amber-600 text-white px-4 py-2"
              >
                Add to Cart
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ProductsSkeleton = () => {
  return (
    <div className="border border-gray-200 p-4">
      <div className="aspect-square h-44 w-full bg-slate-100 object-cover" />
      <h2 className="text-xl w-full h-6 bg-slate-100 my-3 font-bold py-2"></h2>
      <p className="my-2 line-clamp-3 bg-slate-100 h-4 w-[85%]"></p>
      <p className="my-2 line-clamp-3 bg-slate-100 h-4  w-[85%] "></p>
      <p className="my-2 line-clamp-3 bg-slate-100 h-4  w-[85%]"></p>
      <div className="flex justify-between items-center gap-x-2 my-2">
        <p className="py-2 h-4 bg-slate-100 w-30"></p>
        <p className="py-2 h-4 bg-slate-100 w-30"></p>
        <p className="py-2 h-4 bg-slate-100 w-30"></p>
      </div>
      <button className="bg-slate-100 text-white px-16 py-4 mt-3"></button>
    </div>
  );
};
