import { useOutletContext } from "react-router-dom";
import type { Products } from "../../../../types/types";

export default function Reviews() {
  const { singleProduct } = useOutletContext<{ singleProduct: Products }>();
  console.log(singleProduct);
  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Reviews</h1>
        <div className="mt-2">
          {singleProduct?.reviews?.map((review) => (
            <div
              key={review.reviewerEmail}
              className="border border-gray-200 p-4"
            >
              <p>Reviewer: {review.reviewerName}</p>
              <p>Comment: {review.comment}</p>
              <p>Rating: {review?.rating}</p>
              <p>Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
