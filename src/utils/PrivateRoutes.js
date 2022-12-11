import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
const PrivateRoutes = () => {
  let {setShowAlert,setAlertText,setAlertType} = useGlobalContext();
  let auth = { token: window.localStorage.getItem("token") };
  if(!auth.token){
    setShowAlert(true)
    setAlertText([{msg:"Please Signin"}]);
    setAlertType("danger")
  }
  return auth.token ? <Outlet /> : <Navigate to="/login" /> ;
};

export default PrivateRoutes;
