import { useState } from "react";

function AddEmp() {
    const [email, setEmail] = useState(false);
    
    return (
        <div className="flex justify-center pt-16">
            <form className="flex flex-col gap-4 bg-gray-400 px-6 py-6 rounded-2xl w-96">
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="name" className="text-xl text-white font-semibold">Name</label>
                    <input type="text" className="px-2 py-1 text-xl outline-none w-full rounded-lg" placeholder="Name" name="name" id="name" />
                </div>
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="email" className="text-xl text-white font-semibold">Email</label>
                    <input className="px-2 py-1 text-xl outline-none w-full rounded-lg" type="email" placeholder="Email" name="email" id="email" />
                    <p className={`${email ? 'text-red-400 block' : 'hidden'}`}>Email already exists</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="mobile" className="text-xl text-white font-semibold">Mobile_No.</label>
                    <input className="px-2 py-1 text-xl outline-none w-full rounded-lg" type="number" name="mobile" id="mobile" placeholder="mobile number" />
                </div>
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="designation" className="text-xl text-white font-semibold">Designation</label>
                    <select name="designation" id="designation" className="px-2 py-1 text-xl w-full rounded-lg outline-none">
                        <option value="select">Select</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="gender" className="text-xl text-white font-semibold">Gender</label>
                    <div className="flex items-center gap-2">
                        <label className="text-white">Male</label>
                        <input type="radio" name="gender" value="Male" className="form-radio" />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-white">Female</label>
                        <input type="radio" name="gender" value="Female" className="form-radio" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="course" className="text-xl text-white font-semibold">Course</label>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="btech" name="btech" className="form-checkbox" />
                            <label htmlFor="btech" className="text-white">B.Tech</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="bca" name="bca" className="form-checkbox" />
                            <label htmlFor="bca" className="text-white">BCA</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="mca" name="mca" className="form-checkbox" />
                            <label htmlFor="mca" className="text-white">MCA</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="bsc" name="bsc" className="form-checkbox" />
                            <label htmlFor="bsc" className="text-white">BSC</label>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center gap-4">
                    <label htmlFor="image" className="text-xl text-white font-semibold">Image</label>
                    <input type="file" name="image" id="image" className="text-white" />
                </div>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4">Submit</button>
            </form>
        </div>
    );
}

export default AddEmp;
