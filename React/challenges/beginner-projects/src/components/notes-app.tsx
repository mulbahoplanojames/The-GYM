import { useReducer, useState, type FormEvent } from "react";

type Notes = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

type Action = {
  type: "ADD_NOTE" | "DELETE_NOTE" | "UPDATE_NOTE";
  payload: Notes;
};

function noteReducer(state: Notes[], action: Action): Notes[] {
  switch (action.type) {
    case "ADD_NOTE":
      return [action.payload, ...state];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.id);
    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note,
      );
    default:
      return state;
  }
}

export default function NotesApp() {
  const [state, dispatch] = useReducer(noteReducer, [] as Notes[]);

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10">
      {/* Header & Form */}
      <section className="bg-yellow-900/40 border-yellow-700/50 border-2 rounded-2xl shadow-2xl p-8 backdrop-blur-sm transition-all hover:border-yellow-600/60">
        <div className="flex items-center gap-3 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
            <line x1="9" y1="9" x2="10" y2="9" />
          </svg>
          <h1 className="text-3xl font-bold text-yellow-100">Quick Notes</h1>
        </div>

        <form onSubmit={handleAddNote} className="space-y-4">
          <input
            type="text"
            placeholder="Note Title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full bg-yellow-950/50 border-yellow-700/50 text-yellow-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all placeholder:text-yellow-700"
          />
          <textarea
            placeholder="Write something extra special..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={4}
            className="w-full bg-yellow-950/50 border-yellow-700/50 text-yellow-50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all placeholder:text-yellow-700 resize-none"
          />
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-yellow-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:rotate-90 transition-transform duration-300"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add New Note
          </button>
        </form>
      </section>
      {/* Notes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {state.length === 0 ? (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="bg-yellow-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-yellow-700/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-700"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <p className="text-yellow-700 font-medium italic">
              Your thoughts are waiting to be captured...
            </p>
          </div>
        ) : (
          state.map((note) => (
            <div
              key={note.id}
              className="group relative bg-yellow-950/40 border border-yellow-700/30 rounded-2xl p-6 hover:bg-yellow-900/30 transition-all duration-300 hover:border-yellow-600/50 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-yellow-100 line-clamp-1">
                  {note.title}
                </h3>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="p-2 text-yellow-700 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
              <p className="text-yellow-50/70 mb-6 line-clamp-4 leading-relaxed font-light">
                {note.content}
              </p>
              <div className="flex items-center gap-2 text-yellow-700 text-xs font-semibold uppercase tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {note.createdAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
