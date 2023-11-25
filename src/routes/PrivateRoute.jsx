import Lottie from "lottie-react";
import useAuth from "../hooks/useAuth";
import Loading from "../../public/Loading.json"
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <Lottie animationData={Loading} className="h-[75vh]"></Lottie>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;