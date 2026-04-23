import { Link, useLocation } from "react-router-dom";
import { PublicNavlink } from "../../data/navigations";

export default function Navbar() {
  const location = useLocation();
  console.log(location);

  return (
    <header>
      <nav className="flex justify-between items-center gap-4 py-3 px-10 shadow-lg">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-amber-600">Fetch</span>All
        </Link>

        <menu className="inline-block space-x-10">
          {PublicNavlink.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                to={link.path}
                key={link.label}
                className={`hover:text-amber-600 ${isActive ? "text-amber-600  border-b-2 border-amber-600" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </menu>

        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="py-2 px-5 rounded-full border border-amber-500 hover:bg-amber-500"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="py-2 px-5 rounded-full bg-amber-500 hover:bg-amber-600"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
