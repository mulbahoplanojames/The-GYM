import { useEffect, useState } from "react";

interface Donor {
  blood_type: string;
  city: string;
  id: number;
  last_donation_date: string;
  name: string;
  phone: string;
}

export default function EffectsDemo1() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [cityFilter, setCityFilter] = useState("");
  const [bloodTypeFilter, setBloodTypeFilter] = useState("");

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch("/api/donors");
        const result = await response.json();
        setDonors(result.data);
        // console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  // console.log(donors);

  // Filter donors based on city and blood type
  const filteredDonors = donors.filter((donor) => {
    const matchesCity =
      cityFilter === "" ||
      donor.city.toLowerCase().includes(cityFilter.toLowerCase());
    const matchesBloodType =
      bloodTypeFilter === "" ||
      donor.blood_type.toLowerCase().includes(bloodTypeFilter.toLowerCase());
    return matchesCity && matchesBloodType;
  });

  const uniqueCities = [...new Set(donors.map((donor) => donor.city))].sort();
  const uniqueBloodTypes = [
    ...new Set(donors.map((donor) => donor.blood_type)),
  ].sort();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Interval");
  //   }, 1000);
  //   return () => {
  //     console.log("Cleaning up interval");
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="bg-orange-600 p-20 text-white">
      <h1 className="text-2xl pb-5 text-white">Testing the UseEffect Hook</h1>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by City
            </label>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
            >
              <option value="">All Cities</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Blood Type
            </label>
            <select
              value={bloodTypeFilter}
              onChange={(e) => setBloodTypeFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
            >
              <option value="">All Blood Types</option>
              {uniqueBloodTypes.map((bloodType) => (
                <option key={bloodType} value={bloodType}>
                  {bloodType}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-4 gap-4 mt-10">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <div className="animate-pulse flex space-x-4">
                <div className="h-10 bg-gray-300 rounded w-1/2"></div>
                <div className="h-10 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="mt-4 animate-pulse flex space-x-4">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-10">
          {filteredDonors.slice(0, 12).map((donor) => (
            <div key={donor.id} className="bg-white p-5 rounded-lg shadow-md">
              <h1 className="text-lg font-bold text-gray-900">{donor.name}</h1>
              <p className="text-sm text-gray-500">{donor.city}</p>
              <p className="text-sm text-gray-500">{donor.phone}</p>
              <p className="text-sm font-semibold text-red-600">
                Blood Type: {donor.blood_type}
              </p>
              <p className="text-sm text-gray-500">
                Last Donation Date: {donor.last_donation_date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
