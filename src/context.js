import React, { useState, useContext } from 'react'

let AppContext = React.createContext()

let AppProvider = ({ children }) => {
  let [showAlert, setShowAlert] = useState(false);
  let [alertText, setAlertText] = useState([]);
  let [alertType, setAlertType] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  
  return <AppContext.Provider value={{showAlert,setShowAlert,alertText,setAlertText,alertType,setAlertType,isLoading,setIsLoading}}>{children}</AppContext.Provider>
}

export let useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }