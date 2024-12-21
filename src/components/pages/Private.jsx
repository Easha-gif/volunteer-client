import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const {users ,loading} = useContext(AuthContext)
    const location = useLocation()
if(loading){
    return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
}


if(!users){
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>


}
    return children
};

export default Private;