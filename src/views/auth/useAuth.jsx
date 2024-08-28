import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedDataString = localStorage.getItem("key");
    const storedData = storedDataString ? JSON.parse(storedDataString) : null;

    if (!storedData || !storedData.token || Date.now() > storedData.expiration) {
      if (location.pathname !== "/") {
        localStorage.removeItem("key");
        navigate("/");
      }
    } else {
      const role = storedData.role.toLowerCase();

      if (role === 'freelancer' && location.pathname !== "/freelancer-dashboard") {
        navigate("/freelancer-dashboard");
      } else if (['client', 'leads'].includes(role) && location.pathname !== "/client-dashboard") {
        navigate("/client-dashboard");
      }
    }
  }, [navigate, location.pathname]);
};

export default useAuth;
