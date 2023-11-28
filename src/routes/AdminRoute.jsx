import { useState } from "react";
import useAuth from "../../src/hooks/useAuth";
import useAxiosPublic from "../hooks/useAxios";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`http://localhost:3000/user/${user.email}`)
            .then(data => {
                setUserInfo(data.data)
            })
    },[axiosPublic,user, userInfo])
    // console.log(userInfo?.role);

    if (userInfo?.role == "admin") {
        return children;
    }
    return <Navigate to='/login'></Navigate>;


};

export default AdminRoute;