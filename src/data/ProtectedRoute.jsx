import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({isLoggedin , children}){
    let Navigate = useNavigate()
 
    useEffect(() => {
    if (!isLoggedin) {
    console.log('redirect to Login page');

    Navigate('/Login')
  }
    },[isLoggedin ,Navigate ])

    return isLoggedin ? children : null
}
