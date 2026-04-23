import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg shadow-lg p-6 rounded-md ">
        <Link to="/">
          <ArrowBigLeft className="mb-4" />
        </Link>
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-md p-2"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-full"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-amber-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
