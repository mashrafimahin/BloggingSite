// hooks
import React, { useState, useEffect, useCallback } from "react";
import app from "../Server/FireBase";
import {
  getDatabase,
  onValue,
  ref,
  query,
  limitToLast,
} from "firebase/database";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = React.createContext(null);

// Provider
function DataProvider(props) {
  // state
  const [data, setData] = useState([]);

  // database
  const db = getDatabase(
    app,
    "https://blogapp-4ea77-default-rtdb.asia-southeast1.firebasedatabase.app"
  );
  const firestoreDb = getFirestore(app);

  // fetch data
  const FetchData = useCallback(async () => {
    try {
      const dataRef = ref(db);
      const limitedQuery = query(dataRef, limitToLast(20));
      onValue(limitedQuery, (snapShot) => {
        const snap = snapShot.val();
        if (snap) {
          setData(Object.values(snap));
        } else {
          console.log("No available data.");
        }
      });
    } catch (e) {
      console.log("Error", e);
    }
  }, [db]);

  // create user data
  const CreateUser = async (uid, userData) => {
    try {
      const userRef = doc(firestoreDb, "users", uid);
      await setDoc(userRef, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        country: userData.country,
        dateOfBirth: userData.dateOfBirth,
      });
    } catch (e) {
      console.log(e);
      alert(
        "Account created successfully but data is corrupted. Please go to profile and update your data."
      );
    }
  };

  // Call FetchData once when provider mounts
  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return (
    <DataContext.Provider value={{ data, CreateUser }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default React.memo(DataProvider);
