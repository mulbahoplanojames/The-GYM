import { Outlet } from "react-router-dom";
import Header from "./header";
import UserSidebar from "./user-sidebar";

export default function UserLayout() {
  return (
    <div>
      <Header />
      <UserSidebar />
      <main className="ml-64 pt-24 px-8 pb-12">
        <Outlet />
      </main>
    </div>
  );
}
