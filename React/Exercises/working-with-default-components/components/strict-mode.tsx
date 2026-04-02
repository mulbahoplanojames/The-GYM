import React from "react";

export default function StrictMode() {
  return (
    <div className="p-10 bg-yellow-800/30 border-yellow-700 border-2 rounded-xl shadow-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">StrictMode</h1>
      <p className="text-slate-400">This is a strict mode component</p>
      <p className="text-slate-400">
        A StrictMode is a component that is use to check for potential problems
        in the component tree.
      </p>
    </div>
  );
}
