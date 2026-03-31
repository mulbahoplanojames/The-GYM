import { useEffect, useRef } from "react";

export default function RefDemo1() {
  const countRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // console.log("This is the input ref form the useRef", countRef);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-blue-800 p-20 text-white gap-6">
      <h1 className="text-2xl pb-6">Working with the useRef hook</h1>

      <input type="text" ref={inputRef} />
    </div>
  );
}
