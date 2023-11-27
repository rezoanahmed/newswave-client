import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>News Wave | Admin Panel</title>
            </Helmet>
            <div className="h-screen bg-gray-300 bg-opacity-40 p-4">
                <div>
                    <img src="https://i.ibb.co/BswPp3Q/Untitled-design.png" alt="" className="h-16" />
                </div>
                <div className="p-8 flex flex-col gap-2">
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Admin Panel Home</NavLink>
                    <NavLink to='/' className={({ isActive, isPending }) =>
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
                <div className="divider"></div>
                <div className="p-8 flex flex-col gap-2">
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Author Home</NavLink>
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Premium Articles</NavLink>
                    <NavLink to='/dashboard/manage' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Manage My Articles</NavLink>
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline font-bold" : ""
                    }>Articles Status</NavLink>
                </div>
            </div>

            <div className="flex-1 bg-base-100 m-10">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;