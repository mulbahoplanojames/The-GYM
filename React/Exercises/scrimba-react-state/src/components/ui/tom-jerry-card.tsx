import jerryHappy from "/jerry-happy.jpg";
import jerrySad from "/jerry-mad.jpg";
import tomSad from "/tom-mad.jpg";
import tomHappy from "/tom-happy.jpg";

type TomState = {
  showTom: boolean;
  isTomHappy: boolean;
};

type JerryState = {
  showJerry: boolean;
  isJerryHappy: boolean;
};

type TomJerryCardProps = {
  isTom: TomState;
  setIsTom: React.Dispatch<React.SetStateAction<TomState>>;
  isJerry: JerryState;
  setIsJerry: React.Dispatch<React.SetStateAction<JerryState>>;
};

export default function TomJerryCard({
  isTom,
  setIsTom,
  isJerry,
  setIsJerry,
}: TomJerryCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <h1 className="font-black pb-4">Tom and Jerry Testing State 01</h1>

      <button
        className="py-2 px-4 bg-black text-white rounded-3xl cursor-pointer hover:opacity-55 mr-3"
        onClick={() => setIsTom({ ...isTom, showTom: !isTom.showTom })}
      >
        {isTom.showTom ? "Hide Tom" : "Show Tom"}
      </button>
      <button
        className="py-2 px-4 bg-black text-white rounded-3xl cursor-pointer hover:opacity-55"
        onClick={() =>
          setIsJerry({ ...isJerry, showJerry: !isJerry.showJerry })
        }
      >
        {isJerry.showJerry ? "Hide Jerry" : "Show Jerry"}
      </button>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        {isJerry.showJerry && (
          <div className="border-2 rounded-4xl overflow-hidden">
            <div className="h-32 bg-red-200 overflow-hidden">
              <img
                src={isJerry.isJerryHappy ? jerryHappy : jerrySad}
                alt="Jerry"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-base p-2">Hi, I am jerry</h1>
            <button
              className="py-2 px-4 text-sm m-2 bg-black text-white rounded-3xl cursor-pointer hover:opacity-55"
              onClick={() =>
                setIsJerry({
                  ...isJerry,
                  isJerryHappy: !isJerry.isJerryHappy,
                })
              }
            >
              {isJerry.isJerryHappy ? "Make Jerry Sad" : "Make Jerry Happy"}
            </button>
          </div>
        )}

        {/* Tom Card  */}
        {isTom.showTom && (
          <div className="border-2 rounded-4xl overflow-hidden">
            <div className="h-32 bg-green-200 overflow-hidden">
              <img
                src={isTom.isTomHappy ? tomHappy : tomSad}
                alt="Jerry"
                className="w-full h-full"
              />
            </div>
            <h1 className="text-base p-2">Hi, I am Tom</h1>
            <button
              className="py-2 px-4 text-sm m-2 bg-blue-500 text-white rounded-3xl cursor-pointer hover:opacity-55"
              onClick={() =>
                setIsTom({ ...isTom, isTomHappy: !isTom.isTomHappy })
              }
            >
              {isTom.isTomHappy ? "Make Tom Sad" : "Make Tom Happy"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
