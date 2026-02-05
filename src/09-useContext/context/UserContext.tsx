import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";

// interface UserContextProps {
//   children: React.ReactNode;
// }

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  // Properties
  authStatus: AuthStatus;
  user: User | null;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

const UserContext = createContext({} as UserContextProps);

// HOC: High Order Component
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log(userId);
    return true;
  };

  const handleLogout = () => {};

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
