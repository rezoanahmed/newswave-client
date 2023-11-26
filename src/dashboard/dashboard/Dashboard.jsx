import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

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
                    <NavLink>Admin Panel Home</NavLink>
                    <NavLink>Manage Users</NavLink>
                    <NavLink>Manage Articles</NavLink>
                    <NavLink>Payments</NavLink>
                </div>
                <div className="divider"></div>
                <div className="p-8 flex flex-col gap-2">
                    <NavLink>Author Home</NavLink>
                    <NavLink>Premium Articles</NavLink>
                    <NavLink>Manage Articles</NavLink>
                    <NavLink>Articles Status</NavLink>
                </div>
            </div>

            <div className="flex-1 bg-base-100">

            </div>
        </div>
    );
};

export default Dashboard;