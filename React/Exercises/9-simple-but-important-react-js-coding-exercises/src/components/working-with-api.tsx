import { useEffect, useState } from "react";

export default function WorkingWithApi() {
  const [loading, setLoading] = useState(false);
  const [randomData, setRandomData] = useState<any[]>([]);

  useEffect(() => {
    const handleFetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://randomuser.me/api/0.8/?results=10",
        );
        const result = await response.json();
        setRandomData(result.results.map((r: any) => r.user));
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, []);

  return (
    <div className="p-10 bg-blue-400/20 border-blue-300 rounded-[40px] border-2 ">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {randomData.slice(0, 6).map((item, index) => (
            <div
              key={item.email || index}
              className=" p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center"
            >
              <img
                src={item.picture.large}
                alt={item.name.first}
                className="w-24 h-24 rounded-full mb-4 border-4 border-slate-50 shadow-inner"
              />
              <h3 className="text-xl font-semibold text-white capitalize">
                {item.name.first} {item.name.last}
              </h3>
              <p className="text-white text-sm font-medium mb-1 truncate w-full">
                {item.email}
              </p>
              <p className="text-white text-sm">{item.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
