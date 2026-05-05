import { Link, useLocation } from "react-router-dom";
import { PublicNavlink } from "../../data/navigations";
import { useAuth } from "../../context/auth-context";

export default function Navbar() {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const dashboardPath = user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="flex justify-between items-center gap-4 py-4 px-10 shadow-sm border-b border-slate-100">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-amber-600">Fetch</span>All
        </Link>

        <menu className="hidden md:flex items-center space-x-8">
          {PublicNavlink.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                to={link.path}
                key={link.label}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive ? "text-amber-600 font-bold" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </menu>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                to={dashboardPath}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors px-4"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="py-2 px-6 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="py-2 px-6 rounded-full border border-slate-200 text-sm font-semibold hover:bg-slate-50 transition-all"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="py-2 px-6 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
