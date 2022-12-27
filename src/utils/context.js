import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "./useFetch";

let AppContext = React.createContext();

let AppProvider = ({ children }) => {
  let [showAlert, setShowAlert] = useState(false);
  let [alertText, setAlertText] = useState([]);
  let [alertType, setAlertType] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  let {data,isPending} = useFetch( process.env.REACT_APP_API_URL +"/profile/" +window.localStorage.getItem("token"));

  useEffect(() => {
    setShowAlert(false);
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        data,
        isPending,
        showAlert,
        setShowAlert,
        alertText,
        setAlertText,
        alertType,
        setAlertType,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export let useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
