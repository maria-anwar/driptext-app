import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../views/auth/useAuth.jsx";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
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
    email: Yup.string().email().required(t("signIn.errors.emailRequired")),
    password: Yup.string()
      .min(8, t("signIn.errors.passwordMinLength"))
      .required(t("signIn.errors.passwordRequired")),
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
      const expirationTime = Date.now() + 12 * 60 * 60 * 1000;
      localStorage.setItem(
        "key",
        JSON.stringify({
          token: response.data.token,
          role: response.data.data.user.role.title,
          expiration: expirationTime,
        })
      );
      
      const userId = 
      {
        userId:response.data.data.user._id
      }
      const res = await axios.post(
        `${import.meta.env.VITE_DB_URL}/language/getLanguage`,
         userId
      );
      localStorage.setItem("Userlanguage", res.data.language.language);

      const role = response.data.data.user.role.title.toLowerCase();
      if (role === "freelancer") {
        navigate("/freelancer-dashboard");
      } else {
        navigate("/client-dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Fehler beim Einloggen";
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
                {t("signIn.emailLabel")}
              </Typography>
              <Input
                size="lg"
                id="email"
                value={props.values.email}
                name="email"
                type="email"
                placeholder={t("signIn.emailPlaceholder")}
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
                {t("signIn.passwordLabel")}
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
                  placeholder={t("signIn.passwordPlaceholder")}
                  className="outline-none ring-1 ring-black border-none focus:ring-2 focus:ring-black"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                  icon={passwordVisible ?  faEyeSlash: faEye}
                />{" "}
              </div>
              {props.errors.password && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.password}
                </div>
              )}
            </div>
            <div className="flex items-center justify-end mt-6">
              {/* <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  id="save-password"
                  name="save-password"
                />
                <Typography variant="small" className="font-medium text-gray-900">

                  Save password
                </Typography>
              </div> */}
              <Typography variant="small" className="font-medium text-gray-900">
                <Link to="/auth/lost/request">
                  {t("signIn.forgotPassword")}
                </Link>
              </Typography>
            </div>
            <Button
              className={`mt-6 bg-custom-black hover:bg-custom-black/90 text-white text-sm ${
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
                t("signIn.signInButton")
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
        <a
          href="https://driptext.de/impressum/"
          target="_blank"
          className="hover:underline"
        >
          {t("signIn.links.imprint")}
        </a>
        <a
          href="https://driptext.de/datenschutz/"
          target="_blank"
          className=" hover:underline"
        >
          {t("signIn.links.privacyPolicy")}
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
