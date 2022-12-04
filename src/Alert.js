import { useEffect, useState } from "react";

const Alert = ({alertText,alertType}) => {
    let [isShown,setIsShown] = useState(true)
    useEffect(()=>{
        let timer  = setTimeout(() => {
            setIsShown(false)
        }, 3000);
        return () => clearTimeout(timer)
    },[])
    return isShown && <div className={`alert ${alertType}`}>{alertText}</div>
}
 
export default Alert;