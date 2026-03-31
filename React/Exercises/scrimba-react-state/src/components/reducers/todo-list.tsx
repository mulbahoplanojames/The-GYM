import { useReducer, useState } from "react";

enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  CLEAR_COMPLETED = "CLEAR_COMPLETED",
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO: {
      return [...state, action.payload];
    }
    case TodoActionType.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case TodoActionType.TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    case TodoActionType.CLEAR_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }
    default: {
      return state;
    }
  }
};

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  return (
    <div className="bg-slate-600 text-white mx-auto container px-4 py-6 rounded-2xl my-8">
      <h1>Todo List</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-white"
      />
      <button
        onClick={() =>
          dispatch({
            type: TodoActionType.ADD_TODO,
            payload: { id: Date.now(), text, completed: false },
          })
        }
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex gap-4 ${todo.completed ? "line-through" : ""}`}
          >
            {todo.text}{" "}
            <button
              onClick={() =>
                dispatch({ type: TodoActionType.DELETE_TODO, payload: todo })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({ type: TodoActionType.TOGGLE_TODO, payload: todo })
              }
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
