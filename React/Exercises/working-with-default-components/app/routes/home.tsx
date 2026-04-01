import FragmentsCom from "components/fragments-com";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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
      <FragmentsCom />
    </div>
  );
}
