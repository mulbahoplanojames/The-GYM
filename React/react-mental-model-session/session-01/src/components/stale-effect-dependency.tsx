import { useEffect, useRef, useState } from "react";

export default function Logger() {
  console.log("Rendering Logger");

  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Latest count from interval:", countRef.current);
    }, 1000);

    return () => {
      console.log("I am clearing the effect");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="p-4 border rounded shadow-sm">
      <p>Count: {count}</p>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  );
}
