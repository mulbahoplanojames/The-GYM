import { useOutletContext } from "react-router-dom";
import type { Products } from "../../../../types/types";

export default function ProductDetails() {
  const { singleProduct } = useOutletContext<{ singleProduct: Products }>();
  console.log(singleProduct);
  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <div className="">
          <p>Brand: {singleProduct?.brand}</p>
          <p>Category: {singleProduct?.category}</p>
          <p>Discount Percentage: {singleProduct?.discountPercentage}</p>
        </div>
      </div>
    </>
  );
}
