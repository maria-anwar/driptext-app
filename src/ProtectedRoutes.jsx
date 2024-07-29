
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ( element) => {
  const user = useSelector((state) => state.user.user); 
  const { token } = user.token;
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
