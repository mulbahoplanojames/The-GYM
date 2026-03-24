import ChefClaud from "./components/chef-claud.tsx";
import EffectsDemo1 from "./components/effects/effects-demo1.tsx";
import Header from "./components/layout/header.tsx";
import StateDemo1 from "./components/states/state-demo1.tsx";
import StateDemo2 from "./components/states/state-demo2.tsx";

export default function App() {
  return (
    <div className="bg-[#fafaf8] w-full min-h-screen">
      <Header />
      <main className="flex-1">
        <ChefClaud />
        <StateDemo1 />
        <StateDemo2 />
        <EffectsDemo1 />
      </main>
    </div>
  );
}
