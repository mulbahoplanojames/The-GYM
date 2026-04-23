import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-6 py-3 w-full">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-amber-600">Fetch</span>All
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-2 rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/20"
              placeholder="Search across OS..."
              type="text"
            />
          </div>
          <img
            alt="User profile avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-container/20"
            data-alt="portrait of a professional man in a minimal office setting with soft natural light and blurred background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhWG9j2opJ1NeoNNOcnegEGtSSAV3BF4WBJAO5mVzMi1ZijR82qG8TcCi1I20HNZCEVwHye9a5HYGV1PFWcamwKte0huWfc52egQ7lXfQwMRrpu4TqauGbyPg7fHzJ6-W6nN9ukAMT8_-bTNjpuzGkI6g9GeV0sJhGEhDy1WXYaGsCW0VvFEzo5tc0t0d5umZ7DvKFe-T1dicAlinjj7gZpvCIRBRbri2fRT8U6N4BjFMqnp8EsTdD2gSg9DENngbTaN1dVVThOMI"
          />
        </div>
      </div>
    </nav>
  );
}
