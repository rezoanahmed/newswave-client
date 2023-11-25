import Lottie from "lottie-react";
import useAuth from "../hooks/useAuth";
import Loading from "../../public/Loading.json"
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <Lottie animationData={Loading} className="h-[75vh]"></Lottie>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;