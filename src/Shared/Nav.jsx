import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png"


const Nav = () => {

    const navTitles = <>
        <li><NavLink className={({ isActive }) => isActive ? 'bg-fuchsia-100 dark:text-purple-900 font-bold' : "font-bold"} to="/">Home</NavLink></li>


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navTitles}
                        </ul>
                    </div>
                    <a className="btn btn-ghost gap-0 flex items-end">
                        <img src={logo} alt="" className="w-10 md:w-16" />
                        <p className="text-2xl md:text-5xl font-semibold  gap-0 text-fuchsia-400">ob<span className="text-fuchsia-600">Vista</span></p>
                    </a>

                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navTitles}
                    </ul>
                </div> */}
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navTitles}
                        </ul>
                    </div>
                    <Link to="/login" className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Login</span>
                    
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;