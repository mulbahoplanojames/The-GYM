import Counter from "./components/counter";
import CustomComponent from "./components/custom-component";
import HelloWorld from "./components/hello-world";
import ListMapping from "./components/list-mapping";
import TodoApp from "./components/toto-app";
import WorkingWithApi from "./components/working-with-api";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white p-8 space-y-6">
      <HelloWorld />
      <CustomComponent />
      <Counter />
      <ListMapping />
      <WorkingWithApi />
      <TodoApp />
    </div>
  );
}
