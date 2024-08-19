import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('key')

  useEffect(() => {
    user ? navigate("/client-dashboard"):navigate("/")
  }, [user, navigate]);
};

export default useAuth;
