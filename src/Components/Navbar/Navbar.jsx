import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const { user,logOut } = useState();

    const handleSignOut = ()=>{
       logOut()
       .then(result=> {
        console.log(result.user)
       })
       .catch(error=> console.log(error))
    }

    const NavLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/career"}>Career</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/src/assets/user.png" />
                    </div>
                </label>
                {
                    user?
                        <button className="btn px-5 bg-[#403F3F] text-white" onClick={handleSignOut}>Sign Out</button>
                        :
                        <NavLink to={"/login"}>
                            <button className="btn px-5 bg-[#403F3F] text-white">Login</button>
                        </NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;