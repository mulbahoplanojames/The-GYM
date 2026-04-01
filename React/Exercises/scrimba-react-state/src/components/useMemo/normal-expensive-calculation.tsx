import { useMemo, useState } from "react";

function slowFunction(num: number) {
  console.log("Running slow function...");

  // Simulate heavy calculation
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

// Separating the text state into its own component prevents
// parent re-renders when the text changes.
function TextInput() {
  const [text, setText] = useState("");

  console.log("TextInput component re-rendering...");

  return (
    <div>
      <label className="block mb-2 font-medium">Type here (no lag!):</label>
      <input
        type="text"
        placeholder="Typing logic is now isolated!"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-white outline-none w-full max-w-sm mb-2 p-1 text-white bg-transparent"
      />
      <p className="text-white text-base">Current text: {text}</p>
    </div>
  );
}

export default function NormalExpensiveCalculation() {
  const [number, setNumber] = useState(0);

  console.log("NormalExpensiveCalculation re-rendering...");

  // Fixed: added 'return' to slowFunction and ensured it runs only when 'number' changes
  const result = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div className="flex flex-col gap-6 p-10 bg-emerald-900/30 border-emerald-500 border-2 mt-5 rounded-xl">
      <h1 className="text-2xl font-bold mb-2 text-emerald-400">
        Optimized Expensive Calculation
      </h1>

      <div>
        <label className="block mb-2 font-medium">Input Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border-2 border-white mr-4 outline-none px-2 text-white bg-transparent"
        />
      </div>

      <TextInput />

      <p className="text-white pb-2 font-bold text-xl">
        Calculation Result: <span className="text-emerald-400">{result}</span>
      </p>

      <div className="bg-emerald-900/40 p-4 rounded-lg border border-emerald-500/50">
        <p className="text-sm font-mono italic text-emerald-200">
          ✅ Fixed: The text state is moved to a child component. Now, typing
          only re-renders the "TextInput" component.
          "NormalExpensiveCalculation" and "slowFunction" stay idle!
        </p>
      </div>
    </div>
  );
}
