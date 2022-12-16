import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

let AppContext = React.createContext()

let AppProvider = ({ children }) => {
  let [showAlert, setShowAlert] = useState(false);
  let [alertText, setAlertText] = useState([]);
  let [alertType, setAlertType] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  const location = useLocation()

 useEffect(() => {
    setShowAlert(false)
  }, [location])
  
  return <AppContext.Provider value={{showAlert,setShowAlert,alertText,setAlertText,alertType,setAlertType,isLoading,setIsLoading}}>{children}</AppContext.Provider>
}

export let useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }