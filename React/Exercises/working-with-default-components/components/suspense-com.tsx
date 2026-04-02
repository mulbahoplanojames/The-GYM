import React, { Suspense, lazy } from "react";

// Simulate a delayed lazy import for demonstration purposes
const LazyExpensiveComponent = lazy(() => {
  return new Promise<{ default: React.ComponentType<{ num: number }> }>(
    (resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import("./expensive-component"));
      }, 2000);
    },
  );
});

export default function SuspenseCom() {
  return (
    <div className="p-10 bg-purple-900/40 border-purple-500/50 border-2 rounded-2xl shadow-2xl mx-auto backdrop-blur-sm">
      <h1 className="text-3xl font-extrabold mb-4 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Suspense Mastery
      </h1>
      <p className="text-purple-200 mb-6 font-medium">
        Observe the fallback UI below as the expensive calculation component
        loads asynchronously.
      </p>

      <div className="relative min-h-[160px] flex items-center justify-center bg-black/30 rounded-xl border border-purple-700/30 p-8">
        <Suspense
          fallback={
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-purple-400 animate-pulse font-mono tracking-widest text-xs">
                FETCHING ASYNC COMPONENT...
              </p>
            </div>
          }
        >
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <p className="text-xs text-purple-400/60 mb-3 uppercase tracking-widest font-bold">
              Calculation Result
            </p>
            <div className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <LazyExpensiveComponent num={200} />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
