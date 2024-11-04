import { useState, useEffect } from "react";
import { GroupField } from "./GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

//https://driptext-api.vercel.app/api/users/create

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [roleID, setRoleID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/roles/list`
        );
        const data = response.data.data; // Adjust this line based on the actual structure

        if (Array.isArray(data)) {
          data.forEach((value) => {
            if (value.title === "leads") {
              setRoleID(value);
            }
          });
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "Error";
        setError(true);
        setErrorMesssage(errorMessage);
      }
    };

    fetchData();
  }, []);

  const initialValues = {
    project: "",
    keyword: "",
    email: "",
    fname: "",
    lname: "",
  };
  const validationSchema = Yup.object().shape({
    project: Yup.string().required("Please enter your project"),
    keyword: Yup.string().required("Please enter keyword"),
    email: Yup.string().email().required("Please enter your email"),
    fname: Yup.string().required("Please enter your first name"),
    lname: Yup.string().required("Please enter your last name"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    const registerData = {
      firstName: values.fname,
      lastName: values.lname,
      email: values.email,
      roleId: roleID._id,
      projectName: values.project,
      keywords: values.keyword,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/users/emailCheck`,
        { email: values.email }
      );
      if (response.status === 200) {
        const response = await axios.post(
          `${import.meta.env.VITE_DB_URL}/users/create`,
          registerData
        );
        setLoading(false);
        navigate("/onboarding-probetext", {
          state: {
            projectName: values.project,
            projectId: response.data.project._id,
            userId: response.data.data._id,
          },
        });
      } else {
        setErrorMesssage(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.response?.data?.message || error.message || "Error";
      setError(true);
      setErrorMesssage(errorMessage);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10 mt-6 mb-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. Information About the Text
                </h2>
                <GroupField
                  label={"Your Project"}
                  placeholder={"example.com"}
                  id={"project"}
                  name={"project"}
                  value={props.values.project}
                  errors={props.errors.project}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                <GroupField
                  label={"Desired Keyword"}
                  placeholder={"example keyword"}
                  id={"keyword"}
                  name={"keyword"}
                  value={props.values.keyword}
                  errors={props.errors.keyword}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Contact details of the invoice receipient
                </h2>
                <GroupField
                  label={"Email"}
                  placeholder={"Your email address"}
                  id={"email"}
                  name={"email"}
                  value={props.values.email}
                  errors={props.errors.email}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"First Name"}
                    placeholder={"Your first name"}
                    id={"fname"}
                    name={"fname"}
                    value={props.values.fname}
                    errors={props.errors.fname}
                    onChange={(e) => {
                      props.handleChange(e);
                      setError(false);
                      setErrorMesssage("");
                    }}
                  />
                  <GroupField
                    label={"Last Name"}
                    placeholder={"Your last name"}
                    id={"lname"}
                    name={"lname"}
                    value={props.values.lname}
                    errors={props.errors.lname}
                    onChange={(e) => {
                      props.handleChange(e);
                      setError(false);
                      setErrorMesssage("");
                    }}
                  />
                </div>

            
                <button
                    className={`${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    } border-none text-white font-medium text-base w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-solid rounded-full border-t-transparent animate-spin" />
                      </div>
                    ) : (
                      "Submit Order"
                    )}
                  </button>
               
                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm font-medium">
                By submitting the order, I agree to the{" "}
                <Link className="text-[#63B4D0]">
                  general terms and conditions
                </Link>{" "}
                terms and conditions of DripText Ltd. and understand that our
                offers are aimed exclusively at commercial customers. All prices
                are exclusive of VAT. Sales only to entrepreneurs, tradespeople,
                associations, authorities or self-employed persons (§ 14 BGB).
                No sales to consumers within the meaning of § 13 BGB.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
