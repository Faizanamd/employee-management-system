import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password and confirm password should be same")
            setPassword("");
            confirmPassword("");
        } else {
            // alert("Regsitered successfully");
            const userdata = {
                username,
                email,
                password,
            };
            const response = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userdata),
            })
            if (!response.ok) {
                toast.error("Something went wrong")
            }
            const result = await response.json();
            console.log(result)
            if (result.status) {
                toast.success(result.message)
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                navigate("/login")
            } else {
                toast.error(result.message)
            }
            console.log(userdata)

        }

    }

    return (
        <div className="flex justify-center  pt-24 ">
            <div className="bg-gray-400 px-6 py-4 rounded-2xl flex flex-col gap-3  ">
                <h1 className="text-center  text-2xl font-semibold text-white">Regsiter </h1>
                <div className="flex items-center  justify-between gap-3   ">
                    <label className="text-xl font-semibold" htmlFor="">Name</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-[300px]  px-2 py-2 rounded-lg outline-none" type="text" name="" placeholder="Name" id="" />
                </div>
                <div className="flex items-center justify-between gap-3   ">
                    <label className="text-xl font-semibold" htmlFor="">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[300px]  px-2 py-2 rounded-lg outline-none" type="email" name="" placeholder="Email" id="" />
                </div>
                <div className="flex items-center justify-between  gap-3   ">
                    <label className="text-xl font-semibold" htmlFor="">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-[300px]  px-2 py-2 rounded-lg outline-none" type="password" name="" placeholder="password" id="" />
                </div>
                <div className="flex items-center  gap-3   ">
                    <label className="text-xl font-semibold" htmlFor="">Confirm Password</label>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-[300px]  px-2 py-2 rounded-lg outline-none" type="password" name="" placeholder="Confirm password" id="" />
                </div>
                <input onClick={(e) => hanldeSubmit(e)} className="text-2xl font-semibold bg-gray-800 text-white py-2 rounded-xl hover:cursor-pointer" type="Submit" value="Submit" />
                <p className="text-end text-lg text-white">Already regsitered? <Link className="text-xl text-black font-semibold underline underline-offset-2" to={"/login"}>Login</Link></p>
            </div>

        </div>
    )
}

export default Register;