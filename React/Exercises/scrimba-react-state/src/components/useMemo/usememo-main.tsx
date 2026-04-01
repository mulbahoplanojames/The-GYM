import NormalExpensiveCalculation from "./normal-expensive-calculation";
import SlowExpensiveCalculation from "./slow-expensive-calculation";

export default function UsememoMain() {
  return (
    <div className="bg-blue-950 p-10 text-white">
      <h1 className="text-2xl font-bold mb-4">Working with the useMemo Hook</h1>

      <SlowExpensiveCalculation />
      <NormalExpensiveCalculation />
    </div>
  );
}
