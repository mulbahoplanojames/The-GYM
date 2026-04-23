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

const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodosFromLocalStorage = (): Todo[] => {
  const stored = localStorage.getItem("todos");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return parsed.map((todo: Todo & { createdAt: string }) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  }
  return [];
};

const todoReducer = (state: Todo[], action: ACTIONS): Todo[] => {
  let newState: Todo[];

  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO: {
      newState = [...state, action.payload];
      break;
    }
    case TODO_ACTIONS.DELETE_TODO: {
      newState = state.filter((todo) => todo.id !== action.payload);
      break;
    }
    case TODO_ACTIONS.TOGGLE_TODO: {
      newState = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      break;
    }
    default:
      return state;
  }

  saveTodosToLocalStorage(newState);
  return newState;
};

export default function TodoApp() {
  const [todosContent, setTodosContent] = useState<Todo>({
    id: "",
    title: "",
    category: "",
    createdAt: new Date(),
    completed: false,
  });
  const [todoState, dispatch] = useReducer(
    todoReducer,
    loadTodosFromLocalStorage(),
  );
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

    // console.log(todosContent);
  };

  return (
    <div className="p-10 bg-teal-400/20 border-teal-300 rounded-[40px] border-2 ">
      <h1>Todo App</h1>

      <form className="" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add Todo.."
          className="w-full border-2 rounded-2xl outline-none my-3 px-4 py-2"
          value={todosContent.title}
          onChange={(e) =>
            setTodosContent({ ...todosContent, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Add Todo Category"
          className="w-full border-2 rounded-2xl outline-none my-3 px-4 py-2"
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

      <div className="mt-8">
        {todoState.map((todo) => (
          <div
            key={todo.id}
            className={`${todo.completed ? "bg-green-700/50" : "bg-red-700/50"}  flex justify-between items-center p-4 mt-2 rounded-2xl`}
          >
            <div className={`flex flex-col gap-1`}>
              <p className="font-bold text-lg">{todo.title}</p>
              <p className="text-sm">{todo.category}</p>
              <p className="text-xs">{todo.createdAt.toDateString()}</p>
              <p className="text-xs">{todo.completed}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
                className="bg-red-500 py-2 px-5 rounded-2xl cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
                className="bg-blue-500 py-2 px-5 rounded-2xl cursor-pointer"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
