import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxios";
import { useEffect } from "react";

const Dashboard = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`http://localhost:3000/user/${user.email}`)
            .then(data => {
                setUserInfo(data.data)
            })
    },[axiosPublic,user, userInfo])
    return (
        <div className="flex">
            <Helmet>
                <title>News Wave | Admin Panel</title>
            </Helmet>
            <div className="h-screen bg-gray-300 bg-opacity-40 p-4">
                <div>
                    <img src="https://i.ibb.co/BswPp3Q/Untitled-design.png" alt="" className="h-16" />
                </div>
                {
                    userInfo?.role == "admin"?
                    <div className="p-8 flex flex-col gap-2">
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Admin Panel Home</NavLink>
                    <NavLink to='/dashboard/manageusers' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Manage Users</NavLink>
                    <NavLink to='/dashboard/manageall' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Manage All Articles</NavLink>
                    <NavLink to='/dashboard/postapproval' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Post Approval Requests</NavLink>
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Author Requests</NavLink>
                </div>
                :
                <></>
                }
                <div className="divider"></div>
                <div className="p-8 flex flex-col gap-2">
                    <NavLink to='/dashboard/authorhome' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Author Home</NavLink>
                    <NavLink to='/dashboard/manage' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Manage My Articles</NavLink>
                    <NavLink to='/dashboard/add' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Add Articles</NavLink>
                   
                </div>
            </div>

            <div className="flex-1 bg-base-100 m-10">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;