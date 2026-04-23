import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/layout";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-10 py-3">
          <h1 className="font-bold text-2xl">Tom</h1>

          <menu className="inline-flex space-x-12">
            {navLinks.map((link) => (
              <Link to={link.to} key={link.label}>
                {link.label}
              </Link>
            ))}
          </menu>
        </nav>
      </header>
    </>
  );
}
