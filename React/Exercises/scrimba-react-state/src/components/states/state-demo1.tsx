import { useState } from "react";

import TomJerryCard from "../ui/tom-jerry-card";

export default function StateDemo1() {
  const [isTom, setIsTom] = useState({
    showTom: true,
    isTomHappy: true,
  });
  const [isJerry, setIsJerry] = useState({
    showJerry: true,
    isJerryHappy: true,
  });

  interface Movie {
    name: string;
    description: string;
    date: string;
  }

  const [myMovies, setMyMovies] = useState<Movie>({
    name: "",
    description: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(myMovies);
  };

  return (
    <div className="bg-amber-400 p-20 grid md:grid-cols-2 grid-cols-1 gap-6">
      {/* Card one for Tom and jerry  */}
      <TomJerryCard
        isTom={isTom}
        setIsTom={setIsTom}
        isJerry={isJerry}
        setIsJerry={setIsJerry}
      />
      {/* Card two for form  */}
      <div className="bg-white p-6 rounded-2xl h-fit">
        <h1 className="font-black pb-4">
          Submittig information about my Cartoon Movies
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="movieName" className="block pb-1">
              Movie Name
            </label>
            <input
              value={myMovies.name}
              onChange={(e) =>
                setMyMovies({ ...myMovies, name: e.target.value })
              }
              required
              type="text"
              className="shadow-2xl border-2 w-full rounded-2xl px-4 py-2 outline-0"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="moviwDescription" className="block pb-1">
              Movie Desciption
            </label>
            <textarea
              value={myMovies.description}
              required
              onChange={(e) =>
                setMyMovies({ ...myMovies, description: e.target.value })
              }
              name="moviwDescription"
              id="moviwDescription"
              className="shadow-2xl border-2 w-full rounded-2xl px-4 py-2 outline-0"
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="mmovieDate" className="block pb-1">
              Date to Watch Movie
            </label>
            <input
              value={myMovies.date}
              required
              onChange={(e) =>
                setMyMovies({ ...myMovies, date: e.target.value })
              }
              type="datetime-local"
              className="shadow-2xl border-2 w-full rounded-2xl px-4 py-2 outline-0"
            />
          </div>
          <button className="bg-yellow-500 py-1 px-5 rounded-4xl mt-4 cursor-pointer hover:opacity-60">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
