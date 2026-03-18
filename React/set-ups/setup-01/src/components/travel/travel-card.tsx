import { MapPin } from "lucide-react";
import type { TravelRecord } from "../../types/types";

export default function TravelCard({
  travel,
  isLast,
}: {
  travel: TravelRecord;
  isLast: boolean;
}) {
  return (
    <div className="md:px-24">
      <div
        className={`  py-4 ${!isLast ? "border-b border-b-gray-400" : ""}  grid grid-cols-4 gap-4`}
      >
        <div className="col-span-1 h-60 rounded-2xl overflow-hidden">
          <img
            src={travel.image}
            alt={travel.destination}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="col-span-3 h-fit">
          <div className="flex gap-8">
            <p className="flex gap-2 items-center">
              <MapPin className="text-red-600" />
              <span className="text-xl uppercase font-extralight">
                {travel.country}
              </span>
            </p>

            <p className="underline text-lg cursor-pointer font-extralight text-gray-400">
              View on Google Maps
            </p>
          </div>

          <h1 className="text-5xl pt-3 pb-8 font-bold">{travel.destination}</h1>
          <p className="font-bold pb-3">
            {travel.startDate} - {travel.endDate}
          </p>
          <p>{travel.description}</p>
        </div>
      </div>
    </div>
  );
}
