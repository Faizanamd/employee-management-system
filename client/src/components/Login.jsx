import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        }
        const response = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        if (!response.ok) {
            toast.error("Something went wrong")
        }
        const result = await response.json();
        if (result.status) {
            toast.success(result.message)
            setIsAuthenticated(true);
            setPassword("");
            setEmail("");
            navigate("/")
        } else {
            toast.error(result.message)
        }
    }
    return (
        <div className="flex justify-center pt-40">
            <div className="flex flex-col gap-6 bg-gray-400 px-6 py-4 rounded-xl">
                <h1 className="text-center text-3xl font-semibold text-white uppercase " >Login</h1>
                <div className="flex items-center justify-between gap-2">
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[300px] outline-none px-2 py-1 rounded-md" placeholder="Email" type="email" name="" id="" />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[300px] outline-none px-2 py-1 rounded-md" placeholder="Password" type="password" name="" id="" />
                </div>
                <input onClick={(e) => handleLogin(e)} className="w-full bg-gray-800 rounded-lg py-2 text-white font-semibold" type="submit" value="Submit" />
                <p className="text-end text-lg text-white">Don't have an account? <Link className="text-xl text-black font-semibold underline underline-offset-2" to={"/regsiter"}>Regsiter</Link></p>
            </div>
        </div>
    )
}

export default Login;