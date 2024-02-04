/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import AuthService from "../services/AuthServices";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function

  const login = async (username, password) => {
    try {
      // replace this with a real authentication call
      const resData = await AuthService.loginService(username, password);
      console.log(resData);
      if(resData.access_token){
        setIsAuthenticated(AuthService.getCurrentUser())
      }
    } catch (error) {
      setIsAuthenticated(false);
      throw new Error(error);
    }
  };

  const logout = () => {
    // Perform logout logic, (invalidate session, clear token)
    AuthService.logoutService();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
