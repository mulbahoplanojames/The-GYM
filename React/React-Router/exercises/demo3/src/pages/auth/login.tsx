import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const defaultAccounts = [
  {
    email: "admin@gmail.com",
    password: "admin@123",
    role: "admin",
  },
  {
    email: "user@gmail.com",
    password: "user@123",
    role: "user",
  },
];

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isUserExist = defaultAccounts.find(
      (account) =>
        account.email === user.email && account.password === user.password,
    );

    if (isUserExist) {
      console.log("User exists");
      if (isUserExist.role === "admin") {
        navigate("/admin/dashboard");
      } else if (isUserExist.role === "user") {
        navigate("/user/dashboard");
      } else {
        navigate("/auth/login");
      }
    } else {
      console.log("User does not exist");
    }

    console.log(user);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg shadow-lg p-6 rounded-md ">
        <Link to="/">
          <ArrowBigLeft className="mb-4" />
        </Link>
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Username"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-full"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-amber-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
