import React, { Activity, useState } from "react";

export default function ActivityCom() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-10 bg-yellow-800/30 border-yellow-700 border-2 rounded-xl shadow-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">ActivityCom</h1>
      <p className="text-slate-400">This is an activity component</p>
      <p className="text-slate-400">
        An activity component is a component that is use to hide or show
        components based on certain conditions.
      </p>

      <Activity mode={isVisible ? "visible" : "hidden"}>
        <h1>The data is being display</h1>
      </Activity>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
