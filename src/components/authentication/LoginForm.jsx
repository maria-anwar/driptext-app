import React, {  useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../views/auth/useAuth.jsx";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().min(8).required("password is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    let userData = {
      email: values.email,
      password: values.password,
    };

    try {
      setError(false);
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/auth/login`,
        userData
      );
      dispatch(setUser(response?.data));
      const expirationTime = Date.now() + (12 * 60 * 60 * 1000);
      localStorage.setItem(
        "key",
        JSON.stringify({
          token: response.data.token,
          role: response.data.data.user.role.title,
          expiration: expirationTime,
        })
      );

      {
        response.data.data.user.role.title.toLowerCase() == "freelancer"
          ? navigate("/freelancer-dashboard")
          : navigate("/client-dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Error logging";
      setError(true);
      setErrorMesssage(errorMessage);
      setLoading(false);
    }

   
  };

  return (
    <div className="w-full flex flex-col mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Your email
              </Typography>
              <Input
                size="lg"
                id="email"
                value={props.values.email}
                name="email"
                type="email"
                placeholder="jhon@gmail.com"
                onChange={(e) => {
                  props.handleChange(e);
                  setError(false);
                  setErrorMesssage("");
                }}
                className="outline-none ring-1 ring-black border-none focus:ring-2 focus:ring-black"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {props.errors.email && (
                <div id="email" className="-mt-4 text-sm text-red-500">
                  {props.errors.email}
                </div>
              )}

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <div className="relative ">
                <Input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  value={props.values.password}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                  size="lg"
                  placeholder="********"
                  className="outline-none ring-1 ring-black border-none focus:ring-2 focus:ring-black"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  icon={passwordVisible ? faEyeSlash : faEye}
                />{" "}
              </div>
              {props.errors.password && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.password}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-200 rounded focus:ring-blue-500 "
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium"
                >
                  Save password
                </Typography>
              </div>
              <Typography variant="small" className="font-medium text-gray-900">
                <Link to="/auth/lost/request">Forgot Password</Link>
              </Typography>
            </div>
            <Button
              className={`mt-6 bg-black text-white text-sm ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              fullWidth
              type="submit"
            >
            {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-solid rounded-full border-t-transparent animate-spin" />
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
            {error && (
              <div id="email" className="mt-4 text-sm text-red-500">
                {errorMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>


      <div className="xl:hidden w-full flex justify-center gap-2.5 p-4 text-sm text-gray-700  border-gray-200">
        <Link to="/imprint" className="hover:underline">
          Imprint
        </Link>
        <Link to="/privacy-policy" className=" hover:underline">
          Privacy Policy
        </Link>
      </div>
      
    </div>
  );
};

export default LoginForm;
