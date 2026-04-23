import { useOutletContext } from "react-router-dom";
import type { Products } from "../../../../types/types";

export default function Images() {
  const { singleProduct } = useOutletContext<{ singleProduct: Products }>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {singleProduct?.images?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${singleProduct?.title} - ${index}`}
          className="w-full h-48 object-cover rounded-lg border border-gray-200"
        />
      ))}
    </div>
  );
}
