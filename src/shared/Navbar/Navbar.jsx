
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FiLogOut } from "react-icons/fi"

const Navbar = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()

    }

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/all'>All Articles</NavLink></li>
    <li><NavLink to='/subscriptions'>Subscription</NavLink></li>
    <li><NavLink to='/add'>Add Articles</NavLink></li>
    <li><NavLink to='/myarticles'>My Articles</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/premium'>Premium Articles</NavLink></li>
    </>

    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <NavLink>
                        <img src="https://i.ibb.co/BswPp3Q/Untitled-design.png" alt="Logo" className='h-16 hidden md:block' />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?
                        <div className="flex justify-center items-center gap-2">
                                            <div className="flex-shrink-0 group block">
                                                <div className="flex items-center">
                                                    <img className="inline-block flex-shrink-0 h-[3rem] w-[3rem] rounded-full" src={user.photoURL} />
                                                    <div className="ml-3">
                                                        <h3 className="font-semibold text-gunblack">{user.displayName}</h3>
                                                        <p className="text-xs text-gunblack">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <FiLogOut  onClick={handleLogout} className="text-2xl" title="Log Out"></FiLogOut>

                                        </div>
                        :
                        <NavLink to='/login' className="btn btn-sm bg-gunblack text-white">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;