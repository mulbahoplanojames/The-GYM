import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-4">Page Not Found</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
