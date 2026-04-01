import React from "react";

export default function FragmentsCom() {
  return (
    <>
      <div className="p-10 bg-green-800/30 border-green-700 border-2 rounded-xl shadow-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">FragmentsCom</h1>
        <p className="text-slate-400">This is a fragment component</p>
        <p className="text-slate-400">
          A Fragment is just a wripper container that does not render any extra
          element to the DOM
        </p>
      </div>
    </>
  );
}
