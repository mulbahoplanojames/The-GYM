import {
  BookDashedIcon,
  CalendarIcon,
  CheckCheck,
  HeartCrack,
  LogOut,
  MessageCircleCheckIcon,
  PlaneLandingIcon,
  Settings,
  ShoppingBag,
  WalletIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const navLinks = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: BookDashedIcon,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckCheck,
  },
  {
    title: "Travel Planner",
    href: "/travel-planner",
    icon: PlaneLandingIcon,
  },
  {
    title: "Store",
    href: "/store",
    icon: ShoppingBag,
  },
  {
    title: "Expense",
    href: "/expense",
    icon: WalletIcon,
  },
  {
    title: "Calendar Task",
    href: "/calendar-task",
    icon: CalendarIcon,
  },
  {
    title: "Medical",
    href: "/medical",
    icon: HeartCrack,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageCircleCheckIcon,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-50 dark:bg-slate-950 w-64 pt-20 border-r border-slate-200 dark:border-slate-800">
      <div className="px-4 mb-6">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Account</p>
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user?.name || "Admin"}</p>
            <p className="text-[10px] text-slate-500 truncate capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
        {navLinks.map((link) => (
          <NavLink
            key={link.title}
            to={link.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-200 dark:shadow-none"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-white"
                      : "text-amber-600 dark:text-amber-400"
                  }`}
                />
                <span className="text-sm font-semibold">{link.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200 font-semibold text-sm"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
