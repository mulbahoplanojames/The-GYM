import React from "react";

export default function HomeHeroSection() {
  return (
    <div className="container px-4 mx-auto py-16">
      <h1 className="text-6xl max-w-xl leading-[4.5rem] pb-6">
        <span className="text-amber-600">Fetch</span>All Gym Where you APIs
        meets the <span className="text-amber-600">LEGENDS</span>
      </h1>
      <p className="text-xl max-w-xl pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        numquam quae quidem dignissimos rerum est?
      </p>

      <button className="px-4 py-2 text-xl font-semibold text-white bg-amber-600 rounded-md mt-3 cursor-pointer transition-all hover:bg-amber-700 active:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2">
        Continue
      </button>
    </div>
  );
}
