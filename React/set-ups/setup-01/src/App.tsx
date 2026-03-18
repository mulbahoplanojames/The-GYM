import Header from "./components/header";
import Footer from "./components/footet";
import MoviesList from "./components/movies-list";
import Travel from "./components/travel/travel ";
import TravelHeader from "./components/travel/trave-header";
import CartoonList from "./components/cartoon-list";
import { cartoonMovies } from "./data/cartoonList.json";
import type { CartoonListType } from "./types/types";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-slate-600 text-white px-4 py-16">
        <MoviesList />
      </div>

      <div className="w-full ">
        <TravelHeader />
        <Travel />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-10 py-20">
        {cartoonMovies.map((cartoon: CartoonListType, idx: number) => (
          <CartoonList
            key={idx}
            year={cartoon.year}
            title={cartoon.title}
            description={cartoon.description}
            image={cartoon.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
