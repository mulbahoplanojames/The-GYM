import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => (
  <div className="bg-green-700/40 p-4 md:p-6 mb-3 md:mb-4 h-24 md:h-28 flex items-center justify-end shrink-0">
    <div className="text-white text-2xl md:text-3xl lg:text-4xl font-light text-right overflow-hidden break-all">
      {value}
    </div>
  </div>
);

export default Display;
