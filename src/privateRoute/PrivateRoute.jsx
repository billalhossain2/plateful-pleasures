import { useContext } from "react";
import { userContext } from "../Contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(userContext)

  const location = useLocation();
  const path = location.pathname;

  if(loading){
    return <div className="flex justify-center mt-20"><span class="loading loading-spinner text-secondary"></span></div>
  }

  if(!user){
    return <Navigate to="/login" state={{from:path}}></Navigate>
  }
  return children;
}

export default PrivateRoute