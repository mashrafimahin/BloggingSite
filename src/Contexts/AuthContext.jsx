// initializtions
import React, { useContext } from "react";
import app from "../Server/FireBase";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// import context
import { DataContext } from "./DataContext";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext(null);

// Context Wrapper
function AuthProvider(props) {
  // context
  const { CreateUser } = useContext(DataContext);

  // instances
  const auth = getAuth(app);

  // sign up
  const SignUp = async (data) => {
    try {
      createUserWithEmailAndPassword(auth, data.email, data.password).then(
        (user) => CreateUser(user.user.uid, data)
      );
    } catch (e) {
      console.log(e);
      alert("Something went wrong. Please try again later");
    }
  };

  // sign in
  const SignIn = async (data) => {
    try {
      signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (e) {
      alert("Something went wrong. Please try again later");
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ SignUp, SignIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
