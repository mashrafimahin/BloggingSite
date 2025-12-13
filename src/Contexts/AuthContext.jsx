// initializtions
import React, { useContext, useEffect, useState } from "react";
import app from "../Server/FireBase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
  // state
  const [userId, setUserId] = useState(null);

  // context
  const { CreateUser, FetchUser } = useContext(DataContext);

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

  // logout
  const LogOut = () => {
    signOut(auth);
    setUserId(null);
  };

  // window mount and set usesr id
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
    });
  }, [auth]);

  // on window mount fetch user info
  useEffect(() => {
    FetchUser(userId);
  }, [userId]);

  return (
    <AuthContext.Provider value={{ userId, SignUp, SignIn, LogOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
