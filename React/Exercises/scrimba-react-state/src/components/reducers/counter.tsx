import { useReducer } from "react";
import { useShoppingCart } from "../../context/reducer-shopping-cart-context";

enum ACTIONS {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  SET_STEP = "SET_STEP",
}

type Action = {
  type: ACTIONS;
  payload?: number;
};

const countReducer = (state, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT: {
      return {
        ...state,
        count: state.count + state.step,
      };
    }
    case ACTIONS.DECREMENT: {
      return {
        ...state,
        count: state.count - state.step,
      };
    }
    case ACTIONS.SET_STEP: {
      return {
        ...state,
        step: Number(action.payload) || 0,
      };
    }
    case ACTIONS.RESET: {
      return {
        count: 0,
        step: 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0, step: 1 });
  const { state: cartState } = useShoppingCart();
  return (
    <div className="mt-6 border-2 bg-slate-800 p-10 rounded-2xl">
      <h1 className="text-2xl font-bold">Simple counter using UseReducer</h1>

      <p className="mt-4">Count: {state.count}</p>

      <div className="mb-4 flex flex-col gap-1">
        <label htmlFor="step" className="text-sm mb-2">
          Increment/Decrement by:
        </label>
        <input
          id="step"
          className="p-2 rounded w-32 border-2 border-white text-white outline-none mb-2"
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.SET_STEP,
              payload: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
          className="bg-green-500 px-4 py-2 rounded-xl cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
          className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.RESET })}
          className="bg-blue-500 px-4 py-2 rounded-xl cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
