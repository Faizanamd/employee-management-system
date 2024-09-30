

function EmployeeList() {
    return (
        <div className="px-20 pt-16 flex flex-col ">
            <div className="flex items-center justify-between ">
                <h1 className="text-white text-2xl font-semibold ">Total Employee: <span className="text-bold">4</span></h1>
                <div className="flex items-center ">
                    <input type="search" className="w-[300px] px-4 py-2 text-xl rounded-l-lg outline-none" placeholder="Enter username" />
                    <button className="rounded-r-lg py-2 text-xl bg-gray-400 font-semibold px-4">Search</button>
                </div>
            </div>
            <div>
  <table className="w-full mt-8 table-fixed">
    <thead className="bg-gray-400 text-white text-center">
      <tr>
        <th className="py-4 w-10">Sr.No</th>
        <th className="py-4 w-24">Image</th>
        <th className="py-4 w-32">Name</th>
        <th className="py-4 w-48">Email</th>
        <th className="py-4 w-32">Mobile No.</th>
        <th className="py-4 w-32">Designation</th>
        <th className="py-4 w-24">Gender</th>
        <th className="py-4 w-32">Course</th>
        <th className="py-4 w-32">Create Date</th>
        <th className="py-4 w-36">Action</th>
      </tr>
    </thead>
    <tbody className="text-center text-white">
      <tr>
        <td className="py-4">1</td>
        <td className="py-4 w-20 h-20">
          <img
            className="w-16 h-16 object-cover mx-auto rounded-full"
            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
            alt="Profile"
          />
        </td>
        <td className="py-4">Faizan Ahmad</td>
        <td className="py-4">faizan@example.com</td>
        <td className="py-4">1234567890</td>
        <td className="py-4">Web Developer</td>
        <td className="py-4">Male</td>
        <td className="py-4">B.Tech</td>
        <td className="py-4">12/12/2021</td>
        <td className="py-4 flex items-center gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>




        </div>
    )
}

export default EmployeeList;