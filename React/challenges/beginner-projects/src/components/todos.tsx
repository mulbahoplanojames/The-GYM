import React, { useState, useReducer, useEffect } from "react";

interface Todo {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string };

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return state;
  }
}

function init(initialValue: Todo[]): Todo[] {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : initialValue;
}

export default function Todos() {
  const [state, dispatch] = useReducer(todoReducer, [], init);
  const [todo, setTodo] = useState({
    todoName: "",
    todoCategory: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.todoName.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: `todo-${Date.now()}`,
        name: todo.todoName,
        category: todo.todoCategory,
        completed: false,
      },
    });

    setTodo({
      todoName: "",
      todoCategory: "",
    });
  };

  const handleToggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="p-10 bg-slate-900 border-slate-700 border-2 rounded-xl shadow-lg">
      <form onSubmit={handleAddTodo} className="mb-10 flex flex-wrap gap-4">
        <input
          type="text"
          className="bg-slate-800 border-2 border-slate-600 rounded-xl px-4 py-2 text-white outline-none focus:border-yellow-600 transition-colors flex-1 min-w-[200px]"
          placeholder="Todo name"
          value={todo.todoName}
          onChange={(e) => setTodo({ ...todo, todoName: e.target.value })}
        />
        <select
          name="todoCategory"
          id="todoCategory"
          value={todo.todoCategory}
          onChange={(e) => setTodo({ ...todo, todoCategory: e.target.value })}
          className="bg-slate-800 border-2 border-slate-600 rounded-xl px-4 py-2 text-white outline-none focus:border-yellow-600 transition-colors flex-1 min-w-[200px]"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
        </select>
        <button className="bg-yellow-600 hover:bg-yellow-500 py-2 px-6 rounded-xl text-white font-bold transition-colors cursor-pointer whitespace-nowrap">
          Add Todo
        </button>
      </form>

      <div className="space-y-4">
        {state.length === 0 ? (
          <p className="text-slate-400 text-center">
            No todos yet. Add one above!
          </p>
        ) : (
          state.map((todo) => (
            <div
              key={todo.id}
              className={`p-4 rounded-xl flex justify-between items-center border-2 transition-all ${
                todo.completed
                  ? "bg-slate-800/50 border-green-500/50 opacity-75"
                  : "bg-slate-800 border-slate-700 hover:border-slate-500"
              }`}
            >
              <div className="">
                <p
                  className={`pb-1 font-bold ${
                    todo.completed
                      ? "text-slate-400 line-through"
                      : "text-white"
                  }`}
                >
                  {todo.name}
                </p>
                <p className="text-xs text-yellow-600 uppercase tracking-wider font-semibold">
                  {todo.category || "General"}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggleTodo(todo.id)}
                  className={`py-1.5 px-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    todo.completed
                      ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      : "bg-green-600 text-white hover:bg-green-500"
                  }`}
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white py-1.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
