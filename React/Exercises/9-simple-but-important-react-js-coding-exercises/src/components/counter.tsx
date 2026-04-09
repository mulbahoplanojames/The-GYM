import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
} as const;

type Action = {
  type: (typeof ACTIONS)[keyof typeof ACTIONS];
};

type State = {
  count: number;
};

const countReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default function Counter() {
  const [countState, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-orange-400/20 border-orange-300 border-2 rounded-4xl">
      <h1 className="text-4xl font-bold mb-6 text-orange-600 font-mono">
        {countState.count}
      </h1>

      <div className="flex gap-4">
        <button
          className="bg-green-700 font-bold text-white py-2 px-6 cursor-pointer rounded-full transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          Add
        </button>
        <button
          className="bg-red-700 font-bold text-white py-2 px-6 cursor-pointer rounded-full transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
          Minus
        </button>
        <button
          className="bg-slate-700 font-bold text-white py-2 px-6 cursor-pointer rounded-full transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: ACTIONS.RESET })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
