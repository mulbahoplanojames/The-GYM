import React, { useReducer, useState } from "react";

type Todo = {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
  completed: boolean;
};

const TODO_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
} as const;

type ACTIONS =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string };

const todoReducer = (state: Todo[], action: ACTIONS) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO: {
      return [...state, action.payload];
    }
    case TODO_ACTIONS.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case TODO_ACTIONS.TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }
    default:
      return state;
  }
};

export default function TodoApp() {
  const [todosContent, setTodosContent] = useState<Todo>({
    id: "",
    title: "",
    category: "",
    createdAt: new Date(),
    completed: false,
  });
  const [todoState, dispatch] = useReducer(todoReducer, [] as Todo[]);
  console.log("Todo State", todoState);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todosContent.title.trim() || !todosContent.category.trim()) {
      alert("Please Enter a value in the Title or Category input field");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        title: todosContent.title,
        category: todosContent.category,
        createdAt: todosContent.createdAt,
        completed: todosContent.completed,
      },
    });
    setTodosContent({
      id: "",
      title: "",
      category: "",
      createdAt: new Date(),
      completed: false,
    });
    console.log(todosContent);
  };

  return (
    <div className="p-10 bg-teal-400/20 border-teal-300 rounded-[40px] border-2 ">
      <h1>Todo App</h1>

      <form className="" onSubmit={handleAddTodo}>
        <input
          type="text"
          // required
          placeholder="Add Todo.."
          className="max-w-4xl min-w-2xl border-2 rounded-2xl outline-none my-3 px-4 py-2"
          value={todosContent.title}
          onChange={(e) =>
            setTodosContent({ ...todosContent, title: e.target.value })
          }
        />
        <input
          type="text"
          // required
          placeholder="Add Todo Category"
          className="max-w-4xl min-w-2xl border-2 rounded-2xl outline-none my-3 px-4 py-2"
          value={todosContent.category}
          onChange={(e) =>
            setTodosContent({ ...todosContent, category: e.target.value })
          }
        />
        <button
          type="submit"
          className="block border-2 border-white py-2 px-5 mt-4 cursor-pointer"
        >
          Add Todo
        </button>
      </form>

      <div>
        {todoState.map((todo) => (
          <div key={todo.id}>
            <div
              className={`${todo.completed ? "line-through text-green-500" : ""}`}
            >
              <p>{todo.title}</p>
              <p>{todo.category}</p>
              <p>{todo.createdAt.toDateString()}</p>
              <p>{todo.completed}</p>
            </div>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              Toggle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
