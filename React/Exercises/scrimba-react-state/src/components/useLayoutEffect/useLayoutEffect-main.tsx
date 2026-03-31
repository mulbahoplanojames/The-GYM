import TooltipWithEffect from "./TooltipWithEffect";
import TooltipWithLayoutEffect from "./TooltipWithLayoutEffect";

export default function UseLayoutEffectMain() {
  let now = performance.now();
  while (performance.now() - now < 2000) {
    // Blocking the main thread
  }
  return (
    <div className="bg-blue-950 p-10 text-white">
      <h1 className="text-2xl font-bold mb-4">
        Working with the useLayoutEffect Hook
      </h1>
      <TooltipWithEffect />
      <TooltipWithLayoutEffect />
    </div>
  );
}
