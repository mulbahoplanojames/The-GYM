import {
  BookDashedIcon,
  CalendarIcon,
  CheckCheck,
  HeartCrack,
  MessageCircleCheckIcon,
  PlaneLandingIcon,
  Settings,
  ShoppingBag,
  WalletIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Dashboard",
    href: "/admin",
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
  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-slate-50 dark:bg-slate-950 w-64 pt-20 border-r border-slate-200 dark:border-slate-800">
      <nav className="flex-1 space-y-1">
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
    </aside>
  );
}
