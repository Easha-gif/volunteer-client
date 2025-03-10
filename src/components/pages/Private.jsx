
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Private = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()
if(loading){
    return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>
}


if(!user){
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>


}
    return children
};

export default Private;