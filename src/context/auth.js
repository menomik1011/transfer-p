import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const router = useRouter();

  function login(userId) {
    setUser(userId);
  }

  function logout() {
    fetch("/api/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.messege === "ok") {
          setUser("");
          router.push("/");
        }
      });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
