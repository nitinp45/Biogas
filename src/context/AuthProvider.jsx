import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("role");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (role) => {
    setUser(role);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
