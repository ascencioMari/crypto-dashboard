/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useState, createContext } from "react";

function useLogin() {
  //Init user session state
  const [session, setSession] = useState(null);

  //Update user session
  const login = (callback, user) => {
    setSession(user);
    callback();
  };

  return { session, login };
}

//Create authentication context
export const AuthContext = createContext();

//Create user provider and inicial value
export const AuthProvider = ({ children }) => {
  const auth = useLogin();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
