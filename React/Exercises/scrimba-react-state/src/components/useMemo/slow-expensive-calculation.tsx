import { useState } from "react";

function slowFunction(num: number) {
  console.log("Running slow function...");

  // Simulate heavy calculation
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

export default function SlowExpensiveCalculation() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  console.log("SlowExpensiveCalculation re-rendering...");

  // This will run on every re-render, including when "text" changes
  const result = slowFunction(number);

  return (
    <div className="flex flex-col gap-6 p-10 bg-red-600/20 border-white border-2">
      <h1 className="text-2xl font-bold mb-2">Slow Expensive Calculation</h1>
      <div>
        <label className="block mb-2 font-medium">Input Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border-2 border-white mr-4 outline-none px-2 text-white"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Type here to experience lag:
        </label>
        <input
          type="text"
          placeholder="Typing triggers slow function!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-white outline-none w-full max-w-sm mb-2  p-1 text-white"
        />
        <p className="text-white text-base">Current text: {text}</p>
      </div>

      <p className="text-white pb-2 font-bold text-xl">
        Calculation Result: <span className="text-red-400">{result}</span>
      </p>

      <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/50">
        <p className="text-sm font-mono italic">
          ⚠️ Performance Issue: Every keystroke in the text input updates the
          "text" state, which re-renders this entire component, causing
          "slowFunction" to run again.
        </p>
      </div>
    </div>
  );
}
