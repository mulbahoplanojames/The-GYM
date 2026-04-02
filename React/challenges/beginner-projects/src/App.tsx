import NotesApp from "./components/notes-app";
import RandomUsers from "./components/random-user";
import Todos from "./components/todos";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-800 p-10">
      <Todos />
      <RandomUsers />
      <NotesApp />
    </div>
  );
}
