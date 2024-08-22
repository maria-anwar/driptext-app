import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const storedDataString = localStorage.getItem("key");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  // If no stored data, no token, or session expired, redirect to login
  if (!storedData || !storedData.token || Date.now() > storedData.expiration) {
    localStorage.removeItem("key");
    return <Navigate to="/" replace />;
  }

  // Check if the user's role is among the allowed roles
  if (allowedRoles && !allowedRoles.includes(storedData.role.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  // If everything is okay, render the provided element
  return element;
};

export default ProtectedRoute;
