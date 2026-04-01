import ChefClaud from "./components/chef-claud.tsx";
import CreateDonor from "./components/effects/create-donor.tsx";
import EffectsDemo1 from "./components/effects/effects-demo1.tsx";
import MemeGenerator from "./components/effects/meme-generator.tsx";
import Header from "./components/layout/header.tsx";
import ReducerMain from "./components/reducers/reducer-main.tsx";
import RefDemo1 from "./components/refs/ref-demo.tsx";
import Soundpads from "./components/states/soundpads.tsx";
import StateDemo1 from "./components/states/state-tom-jerry.tsx";
import StateDemo2 from "./components/states/state-todolist.tsx";
import CartContextProvider from "./context/cart-context.tsx";
import ShoppingCartContextProvider from "./context/reducer-shopping-cart-context.tsx";
import UserContextProvider from "./context/user-context.tsx";
import { padsData } from "./data/pads.ts";
import UseLayoutEffectMain from "./components/useLayoutEffect/useLayoutEffect-main.tsx";
import UsememoMain from "./components/useMemo/usememo-main.tsx";

export default function App() {
  return (
    <ShoppingCartContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <div className="bg-[#fafaf8] w-full min-h-screen">
            <Header />
            <main className="flex-1">
              <ChefClaud />
              <StateDemo1 />
              <StateDemo2 />
              <EffectsDemo1 />
              <CreateDonor />
              <Soundpads padsData={padsData} />
              <MemeGenerator />
              <div className="border-5 border-red-500 my-5"></div>
              <RefDemo1 />
              <div className="border-5 border-red-500 my-5"></div>
              <ReducerMain />
              <div className="border-5 border-red-500 my-5"></div>
              <UseLayoutEffectMain />
              <div className="border-5 border-slate-800 my-5"></div>
              <UsememoMain />
            </main>
          </div>
        </UserContextProvider>
      </CartContextProvider>
    </ShoppingCartContextProvider>
  );
}
