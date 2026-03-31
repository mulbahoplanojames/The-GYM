import { createContext } from "react";

interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "James",
  age: 25,
  email: "james@gmail.com",
};

export const UserContext = createContext<User | null>(null);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
