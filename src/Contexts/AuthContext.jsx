// initializtions
import React from "react";
import app from "../Server/FireBase";
import { getAuth } from "firebase/auth";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext(null);

// Context Wrapper
function AuthProvider(props) {
  // instances
  const auth = getAuth(app);

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
