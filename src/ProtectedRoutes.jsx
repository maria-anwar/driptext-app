import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("key");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
