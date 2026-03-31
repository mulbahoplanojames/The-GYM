import InfiniteEffect from "./components/infinite-effect-loop";
import Counter from "./components/stale-closure-bug";
import Logger from "./components/stale-effect-dependency";

export default function App() {
  return (
    <>
      <Counter />
      <Logger />
      {/* <InfiniteEffect /> */}
    </>
  );
}
