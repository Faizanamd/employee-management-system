import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";


function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useContext(UserContext); 
    return (
        <nav className={`flex items-center justify-between bg-gray-600 text-white px-12 py-4 ${isAuthenticated? 'flex': 'hidden'}`}>
            <div className="left flex items-center gap-6  ">
                <NavLink
                    to={'/'}
                    className={({ isActive }) => `text-xl  px-3 py-2 rounded-lg text-white hover:cursor-pointer ${isActive ? 'bg-transparent underline-offset-4 underline ' : 'bg-gray-400'}`}>
                    Home
                </NavLink>

                <NavLink
                    to={'/addnew'}
                    className={({ isActive }) => `text-xl  px-3 py-2 rounded-lg text-white hover:cursor-pointer ${isActive ? 'bg-transparent underline-offset-4 underline ' : 'bg-gray-400'}`}>
                    New Employee
                </NavLink>

                <NavLink
                    to={'/emplist'}
                    className={({ isActive }) => `text-xl  px-3 py-2 rounded-lg text-white hover:cursor-pointer ${isActive ? 'bg-transparent underline-offset-4 underline ' : 'bg-gray-400'}`}>
                    Employee List
                </NavLink>
            </div>
            <div className="right flex items-center gap-12  ">
                <h1 className="underline underline-offset-4 text-xl">Faizan Ahmad</h1>
                <button onClick={(e) => setIsAuthenticated(false)} >Logout</button>
            </div>

        </nav>
    )
}

export default Navbar;