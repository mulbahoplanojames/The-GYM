import TravelCard from "./travel-card";
import { travelRecord } from "../../data/travelRecord.json";
import type { TravelRecord } from "../../types/types";

export default function Travel() {
  return (
    <div className="container mx-auto pb-20">
      {/* {travelRecord.map((travel: TravelRecord) => (
        <TravelCard travel={travel} />
      ))} */}
      {travelRecord.map((travel: TravelRecord, idx: number) => (
        <TravelCard
          travel={travel}
          isLast={idx === travelRecord.length - 1}
          key={idx}
        />
      ))}
    </div>
  );
}
