

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext); // Access isAuthenticated from context

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;