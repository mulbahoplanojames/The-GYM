import { useAuth } from "../../context/auth-context";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back, <span className="text-amber-600">{user?.name}</span>!
          </h1>
          <p className="text-slate-500 text-sm">
            You have access to the admin dashboard. Here's what you can do:
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm-2.968 10.032a1 1 0 011.414-1.414l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Your Role
            </h3>
            <p className="text-slate-600">
              You are currently logged in as an{" "}
              <span className="font-bold text-amber-600">{user?.role}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
