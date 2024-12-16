import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { persistor} from './redux/store.js';
import { logout } from './redux/userSlice.js';


const ProtectedRoute = ({ element, allowedRoles }) => {
  const dispatch = useDispatch();
  const storedDataString = localStorage.getItem("key");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  if (!storedData || !storedData.token || Date.now() > storedData.expiration) {
    localStorage.removeItem("key");
    persistor.purge();
    dispatch(logout());
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(storedData.role.toLowerCase())) {
    localStorage.removeItem("key");
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
