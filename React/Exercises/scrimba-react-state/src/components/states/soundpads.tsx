import type { Pad } from "../../types/types";
import { useState } from "react";

export default function Soundpads({ padsData }: { padsData: Pad[] }) {
  const [pads, setPads] = useState(padsData);

  const handlePadToggle = (id: number) => {
    console.log(id);
    setPads((prevPads) =>
      prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad)),
    );
  };

  return (
    <div className="bg-slate-950">
      <div className="grid grid-cols-4 gap-4 py-12 px-20 container mx-auto ">
        {pads.map((pad) => (
          <div
            key={pad.id}
            className={`w-40 h-32  rounded-lg cursor-pointer flex items-center justify-center ${pad.on ? "opacity-100 border-2 border-white" : "opacity-20"}`}
            style={{ backgroundColor: pad.color }}
            onClick={() => handlePadToggle(pad.id)}
          >
            <p className="text-center text-xl text-white">{pad.sound}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
