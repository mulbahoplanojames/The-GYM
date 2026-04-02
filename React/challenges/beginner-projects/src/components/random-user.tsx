import { useEffect, useState } from "react";

type RandomUser = {
  email: string;
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    country: string;
  };
  picture: { large: string; medium: string; thumbnail: string };
};

export default function RandomUsers() {
  const [loading, setLoading] = useState(false);
  const [randomUser, setRandomUser] = useState<RandomUser | null>(null);

  useEffect(() => {
    handleGetRandomUsers();
  }, []);

  const handleGetRandomUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setRandomUser(data.results[0]);
    } catch (error) {
      console.log("Error getting the random user", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-green-900 border-green-700 border-2 rounded-xl shadow-lg my-8">
      <button
        onClick={handleGetRandomUsers}
        disabled={loading}
        className="bg-green-600 hover:bg-green-500 py-2 px-6 rounded-xl text-white font-bold transition-colors cursor-pointer whitespace-nowrap"
      >
        {loading ? "Generating..." : " Generate New User"}
      </button>

      <div className="border-green-600 border-2 rounded-xl shadow-lg my-8 p-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white h-52 rounded-3xl overflow-hidden border-white border-2">
            <img
              src={randomUser?.picture.large}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-2">
            <p className="text-white text-2xl font-bold pb-2  ">
              Name: {randomUser ? randomUser?.name.first : "No user"}{" "}
              {randomUser ? randomUser?.name.last : "No user"}
            </p>
            <p className="text-white text-2xl font-bold pb-2">
              Email: {randomUser ? randomUser?.email : "No user"}
            </p>
            <p className="text-white text-2xl font-bold pb-2">
              Gender: {randomUser ? randomUser?.gender : "No user"}
            </p>
            <p className="text-white text-2xl font-bold pb-2">
              Country: {randomUser ? randomUser?.location.country : "No user"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
