import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    verifyToken();
  }, [isAuthenticated]);

  const verifyToken = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/verifyToken", {
        method: "GET",
        credentials: 'include', // Include session cookies
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);

    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <ToastContainer />
      <div className="w-full min-h-screen bg-gray-500">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
