import FragmentsCom from "components/fragments-com";
import type { Route } from "./+types/home";
import { Profiler, Suspense, type ProfilerOnRenderCallback } from "react";
import ProfiderCom from "components/profiler-com";
import ExpensiveComponent from "components/expensive-component";
import StrictMode from "components/strict-mode";
import SuspenseCom from "components/suspense-com";
import ActivityCom from "components/activity-com";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const onRenderCallback: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) => {
  console.log("id", id);
  console.log("phase", phase);
  console.log("actualDuration", actualDuration);
  console.log("baseDuration", baseDuration);
  console.log("startTime", startTime);
  console.log("commitTime", commitTime);
};

// console.log(onRenderCallback);

export default function Home() {
  return (
    <div className="p-10 space-y-6">
      <div className="p-10 bg-slate-800/30 border-slate-700 rounded-xl shadow-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Gym</h1>
        <p className="text-slate-400">
          This Exercise is with working with default component built into React
          Js{" "}
        </p>
      </div>
      <Profiler id="fragments-com" onRender={onRenderCallback}>
        <FragmentsCom />
      </Profiler>
      <Profiler id="profider-com" onRender={onRenderCallback}>
        <ProfiderCom />
      </Profiler>
      <Profiler id="ExpensiveComponent" onRender={onRenderCallback}>
        <ExpensiveComponent num={10} />
      </Profiler>
      <StrictMode />
      <SuspenseCom />
      <ActivityCom />
    </div>
  );
}
