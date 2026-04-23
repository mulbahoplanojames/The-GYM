import { BellIcon, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="w-full min-h-screen grid grid-cols-12 bg-gray-950 text-white ">
      <aside className="col-span-2 bg-green-800/40 text-white">
        <div className="py-4 border-b flex justify-center items-center">
          <Link to="/" className="text-2xl">
            Logo
          </Link>
        </div>
      </aside>
      <main className="col-span-10 ">
        <header className="bg-green-800/40  py-3 flex justify-between items-center px-4">
          <Menu />

          <div className="flex items-center gap-4">
            <input
              type="text"
              className="border rounded-2xl py-2 px-3 outline-none"
            />
            <BellIcon />
          </div>
        </header>
      </main>
    </div>
  );
}
