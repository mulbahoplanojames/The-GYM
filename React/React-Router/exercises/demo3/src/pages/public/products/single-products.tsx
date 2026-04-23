import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/products";
import type { Products } from "../../../types/types";

const singleProductNivLinks = [
  {
    path: "",
    label: "Details",
  },
  {
    path: "reviews",
    label: "Reviews",
  },
  {
    path: "images",
    label: "Images",
  },
];

export default function SingleProduct() {
  const { id } = useParams();
  const { singleProduct, singleProductError, singleProductLoading } =
    useProducts(Number(id));
  console.log("id", id);
  return (
    <div className="container mx-auto py-14 px-2">
      {singleProductLoading ? (
        <SingleProductSkeleton />
      ) : singleProductError ? (
        <p>{singleProductError}</p>
      ) : (
        <>
          <div className="w-full py-2 grid grid-cols-12 gap-6 mb-5">
            <img
              src={singleProduct?.thumbnail}
              alt={singleProduct?.title}
              className="w-full h-64 aspect-video border border-amber-600 col-span-5"
            />
            <div className="col-span-7 pr-3">
              <h1 className="text-3xl font-bold ">{singleProduct?.title}</h1>
              <p className="py-4">{singleProduct?.description}</p>

              <div className="flex items-center justify-between gap-2">
                <p className="">Price: ${singleProduct?.price}</p>
                <p className="">Rating: {singleProduct?.rating}</p>
                <p className="">Stock: {singleProduct?.stock}</p>
              </div>
            </div>
          </div>

          {/* sub nav  */}

          <nav>
            <menu className="flex items-center gap-12">
              {singleProductNivLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      isActive ? "text-amber-600" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </menu>
          </nav>

          <Outlet context={{ singleProduct }} />
        </>
      )}
    </div>
  );
}

const SingleProductSkeleton = () => {
  return (
    <>
      <div className="w-full py-2 grid grid-cols-12 gap-6 mb-5">
        <div className="w-full h-64 aspect-video bg-gray-100 col-span-5" />
        <div className="col-span-7 pr-3">
          <h1 className="text-3xl font-bold  bg-gray-100 h-10 w-full mb-3"></h1>
          <p className="py-4 bg-gray-100 h-4 w-[85%] mb-1"></p>
          <p className="py-4 bg-gray-100 h-4 w-[85%] mb-3"></p>

          <div className="flex items-center justify-between gap-2 mt-3">
            <p className="bg-gray-100 h-4 w-30"></p>
            <p className="bg-gray-100 h-4 w-30"></p>
            <p className="bg-gray-100 h-4 w-30"></p>
          </div>
        </div>
      </div>

      {/* sub nav  */}

      <nav>
        <menu className="flex items-center gap-12">
          {singleProductNivLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) => (isActive ? "text-amber-600" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </menu>
      </nav>
    </>
  );
};
