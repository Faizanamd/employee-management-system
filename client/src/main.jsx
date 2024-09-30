import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import AddEmp from './components/AddEmp.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import UserContext from './context/UserContext.js'

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '', element: <Home /> },
      {
        path: 'addnew', element:
          <ProtectedRoute isAuthenticated={false}>

            <AddEmp />
          </ProtectedRoute>
      },
      {
        path: "emplist", element:
          <ProtectedRoute isAuthenticated={false}>
            <EmployeeList />
          </ProtectedRoute>
      },
      { path: "login", element: <Login /> },
      { path: 'regsiter', element: <Register /> }
    ]
  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
