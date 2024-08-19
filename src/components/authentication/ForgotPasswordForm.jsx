import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordForm = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfrimPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfrimPasswordVisibility = () => {
    setConfrimPasswordVisible(!confirmPasswordVisible);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("resetToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  console.log(token);

  const initialValues = {
    reEnterPass: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8).required("password is required"),
    reEnterPass: Yup.string().min(8).required("please re-enter your password"),
  });

  const onSubmit = async (values) => {
    let passwordValue = {
      password: values.password,
      confirmPassword: values.reEnterPass,
    };

    if (values.password !== values.reEnterPass) {
      toast.error("Both password not matched");
      return;
    }
    const apiUrl = `https://driptext-api.malhoc.com/api/auth/reset/password/${token}`;
    console.log("API:", apiUrl);
    try {
      const response = await axios.post(apiUrl, passwordValue);
      toast.success("Password set successfully");
      navigate("/");
    } catch (error) {
      toast.error("Error logging");
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
              <ToastContainer />

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  value={props.values.password}
                  onChange={props.handleChange}
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 focus:ring:none"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  icon={passwordVisible ? faEyeSlash : faEye}
                />
              </div>
              {props.errors.password && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.password}
                </div>
              )}
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Re-Enter Password
              </Typography>
              <div className="relative">
                <Input
                  id="reEnterPass"
                  name="reEnterPass"
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={props.values.reEnterPass}
                  onChange={props.handleChange}
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 focus:ring:none"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfrimPasswordVisibility}
                  icon={confirmPasswordVisible ? faEyeSlash : faEye}
                />
              </div>
              {props.errors.reEnterPass && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.reEnterPass}
                </div>
              )}
            </div>
            <Button
              className="mt-6 bg-black text-white text-sm"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
