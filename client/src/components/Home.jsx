import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";


function Home() {
    const { isAuthenticated } = useContext(UserContext);
    return (
        <div className="flex flex-col items-center justify-center pt-36 text-3xl text-white uppercase font-semibold">
            {isAuthenticated ? "Welcome to the Employee Management System " : "Please login to access the Employee Management System"}
            {isAuthenticated ? "" : <Link to="/login" className="text-gray-800 mt-12 underline underline-offset-8">Login</Link>}
        </div>
    )
}

export default Home;