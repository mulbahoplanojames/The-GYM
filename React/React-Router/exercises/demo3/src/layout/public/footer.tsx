import { Link } from "react-router-dom";
import { PublicNavlink } from "../../data/navigations";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center gap-4 py-3 px-10 ">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-amber-600">Fetch</span>All
        </Link>

        <div className="space-x-20">
          {PublicNavlink.map((link) => {
            return (
              <Link
                to={link.path}
                key={link.label}
                className={`hover:text-amber-600`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 py-5 px-10 ">
        <p>
          Copyright &copy; {new Date().getFullYear()} FetchAll. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
