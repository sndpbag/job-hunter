import { Link, NavLink } from "react-router-dom";
import logo from '../assets/image/logo/logo.webp';
import { LuLogIn } from "react-icons/lu";
import { FaCloudUploadAlt } from "react-icons/fa";


const Navbar = () => {

    //  nav links
    const links = <>
        <li><NavLink className="text-[#001f2c] hover:text-[#1ca774] hover:bg-[#F1F5F8] text-sm" to='/'>Home</NavLink></li>

        <li><NavLink className="text-[#001f2c] hover:text-[#1ca774] hover:bg-[#F1F5F8] text-sm" to='/about'>Service</NavLink></li>
        <li><NavLink className="text-[#001f2c] hover:text-[#1ca774] hover:bg-[#F1F5F8] text-sm" to='/s'>about</NavLink></li>
        <li><NavLink className="text-[#001f2c] hover:text-[#1ca774] hover:bg-[#F1F5F8] text-sm" to='/l'>sndp</NavLink></li>

    </>




    return (
        <div className="navbar bg-[#F1F5F8] ">
            <div className="navbar-start w-60">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        {links}
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                <img src={logo} alt="" className="w-[160px] h-[43px]" />
                </a>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-5 mr-5">
                <Link to="/login" className="text-[13px] font-semibold text-[#001f2c] flex items-center space-x-2 hover:text-[#1ca774]"> <LuLogIn className="font-bold text-lg"></LuLogIn> <span>Sing In</span></Link>
                <a className="btn bg-[#1ca774] text-white text-[13px] px-5 py-[14px] font-semibold flex items-center space-x-1"> <FaCloudUploadAlt className="text-lg" /><span>Upload Resume</span></a>
            </div>
        </div>
    );
};

export default Navbar;