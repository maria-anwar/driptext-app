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
import { useTranslation } from "react-i18next";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfrimPasswordVisible] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");

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
    password: Yup.string()
      .min(8, t("forgotPasswordPage.forgotPasswordForm.password.error"))
      .required(t("forgotPasswordPage.forgotPasswordForm.password.required")),

    reEnterPass: Yup.string()
      .min(8, t("forgotPasswordPage.forgotPasswordForm.reEnterPassword.error"))
      .required(
        t("forgotPasswordPage.forgotPasswordForm.reEnterPassword.required")
      ),
  });

  const onSubmit = async (values) => {
    setError(false);
    let passwordValue = {
      password: values.password,
      confirmPassword: values.reEnterPass,
    };

    if (values.password !== values.reEnterPass) {
      const errorMessage = t(
        "forgotPasswordPage.forgotPasswordForm.errorMessages.passwordMismatch"
      );
      setError(true);
      setErrorMesssage(errorMessage);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/auth/reset/password/${token}`,
        passwordValue
      );
      localStorage.removeItem("key");
      localStorage.removeItem("auth");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        t("forgotPasswordPage.forgotPasswordForm.errorMessages.generalError");
      setError(true);
      setErrorMesssage(errorMessage);
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
                {t("forgotPasswordPage.forgotPasswordForm.password.label")}
              </Typography>
              <div className="relative">
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
                  placeholder={t(
                    "forgotPasswordPage.forgotPasswordForm.password.placeholder"
                  )}
                  className="outline-none ring-1 ring-black border-none focus:ring-2 focus:ring-black"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  icon={passwordVisible ? faEye : faEyeSlash}
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
                {t(
                  "forgotPasswordPage.forgotPasswordForm.reEnterPassword.label"
                )}
              </Typography>
              <div className="relative">
                <Input
                  id="reEnterPass"
                  name="reEnterPass"
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={props.values.reEnterPass}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                  size="lg"
                  placeholder={t(
                    "forgotPasswordPage.forgotPasswordForm.reEnterPassword.placeholder"
                  )}
                  className="outline-none ring-1 ring-black border-none focus:ring-2 focus:ring-black"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfrimPasswordVisibility}
                  icon={confirmPasswordVisible ? faEye : faEyeSlash}
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
              {t("forgotPasswordPage.forgotPasswordForm.submitButton")}
            </Button>
            {error && (
              <div id="email" className="mt-4 text-sm text-red-500">
                {errorMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
