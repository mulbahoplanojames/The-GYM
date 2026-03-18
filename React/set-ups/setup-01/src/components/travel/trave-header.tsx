import { Globe } from "lucide-react";
import React from "react";

export default function TravelHeader() {
  return (
    <header
      className="bg-[#F55A5A] text-white flex justify-center items-center py-6 px-4 gap-2 mb-6
    "
    >
      <Globe className="size-12" />
      <h2 className="text-2xl">my travel journal.</h2>
    </header>
  );
}
