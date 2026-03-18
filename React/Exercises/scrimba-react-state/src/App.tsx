import ChefClaud from "./components/chef-claud.tsx";
import Header from "./components/layout/header.tsx";
import StateDemo1 from "./components/states/state-demo1.tsx";

export default function App() {
  return (
    <div className="bg-[#fafaf8] w-full min-h-screen">
      <Header />
      <main className="flex-1">
        <ChefClaud />
        <StateDemo1 />
      </main>
    </div>
  );
}
