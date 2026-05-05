import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, User, UserRole } from "../types/auth";

const defaultAccounts = [
  {
    email: "admin@gmail.com",
    password: "admin@123",
    role: "admin" as UserRole,
    name: "Admin User",
  },
  {
    email: "user@gmail.com",
    password: "user@123",
    role: "user" as UserRole,
    name: "Regular User",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("gym_auth_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem("gym_auth_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const foundAccount = defaultAccounts.find(
      (account) => account.email === email && account.password === password,
    );

    if (foundAccount) {
      const { password: _, ...userSession } = foundAccount;
      setUser(userSession);
      localStorage.setItem("gym_auth_user", JSON.stringify(userSession));
      setLoading(false);
      return true;
    }

    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gym_auth_user");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
