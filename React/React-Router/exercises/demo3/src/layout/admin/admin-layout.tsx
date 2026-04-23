import { Outlet } from "react-router-dom";
import Header from "./header";
import AdminSidebar from "./admin-sidebar";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <AdminSidebar />
      <main className="ml-64 pt-24 px-8 pb-12">
        <Outlet />
      </main>
    </div>
  );
}
