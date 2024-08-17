import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("key");

  if (!token) {
    // If the token is expired or missing, redirect to login and perform re-login
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
