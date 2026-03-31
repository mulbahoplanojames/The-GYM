import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import AddShopingCartItemForm from "../reducers/add-shoping-card-item-form";

export default function MemeGenerator() {
  const user = useContext(UserContext);
  console.log("This is the user from the user context", user);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [randomId, setRandomId] = useState(1);

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const repsonse = await fetch(`https://api.imgflip.com/get_memes`);
        const data = await repsonse.json();
        setMeme((prevMeme) => ({
          ...prevMeme,
          randomImage: data.data.memes[randomId].url,
        }));
      } catch (error) {
        console.log(`Error Fetching Meme ${error}`);
      }
    };

    fetchMeme();
  }, [randomId]);

  return (
    <div className="bg-green-900 px-20 py-10 text-white">
      <div className="py-6 px-4 ">
        <h1 className="text-4xl font-bold">Meme Generator</h1>
      </div>

      <div className="flex gap-4 mb-4 ">
        <input
          type="text"
          placeholder="Top Text"
          value={meme.topText}
          onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
          className="border-2 rounded-2xl py-2 px-4 outline-none"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
          className="border-2 rounded-2xl py-2 px-4 outline-none"
        />
      </div>

      <div className="w-72 h-64 relative overflow-hidden mb-4">
        <p className="absolute top-0 left-0 right-0 text-center text-shadow-lg text-shadow-black">
          {meme.topText}
        </p>
        <img
          src={meme.randomImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-0 left-0 right-0 text-center text-shadow-lg text-shadow-black">
          {meme.bottomText}
        </p>
      </div>

      <button
        onClick={() => setRandomId(randomId + 1 < 100 ? randomId + 1 : 1)}
        className="bg-blue-500 px-4 py-2 rounded-md cursor-pointer"
      >
        Get New Meme
      </button>

      <AddShopingCartItemForm />
    </div>
  );
}
