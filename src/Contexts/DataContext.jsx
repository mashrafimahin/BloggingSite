// hooks
import React, { useState, useEffect, useMemo, useCallback } from "react";
import app from "../Server/FireBase";
import {
  getDatabase,
  onValue,
  ref,
  query,
  limitToLast,
} from "firebase/database";

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

  // Call FetchData once when provider mounts
  useEffect(() => {
    FetchData();
  }, [FetchData]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ FetchData, data }), [FetchData, data]);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
}

export default React.memo(DataProvider);
