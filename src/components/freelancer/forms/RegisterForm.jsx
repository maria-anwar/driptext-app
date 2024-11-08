import React, { useState } from "react";
import { GroupField } from "../../client-forms/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
// import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "../../client-forms/GroupDropdownField";
import { CountryDropdownField } from "../../client-forms/CountryDropdownField";
import { setUser } from '../../../redux/userSlice';
import axios from "axios";


const RegisterForm = () => {
  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    street: "",
    postcode: "",
    city: "",
    country: "",
    iban: "",
    vatRegulation: 'Small business owner (0%)',
    company: "",
    vatId: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("please enter first name"),
    lname: Yup.string().required("please enter last name"),
    email: Yup.string().email().required("please enter your email"),
    phone: Yup.string().required("please enter phone number"),
    street: Yup.string().required("please enter your street"),
    postcode: Yup.string().required("please enter your postal code"),
    city: Yup.string().required("please enter your city"),
    country: Yup.string().required("please enter your country"),
    iban: Yup.string().required("please entert your IBAN"),
    company: Yup.string().required("please enter your company name"),
    vatId: Yup.string().when(["vatRegulation"], ([vatRegulation], schema) => {
      if (vatRegulation === "CY Ltd (19%)" || vatRegulation === "Reverse charge (0%)") {
        return schema.required("VAT ID is required");
      }
      return schema.notRequired();
    }),    
  });
  const onSubmit = async (values) => {
    setLoading(true);
    const registerData = {
      firstName: values.fname,
      lastName: values.lname,
      email: values.email,
      country: values.country,
      companyName: values.company,
      vatId: values.vatId,
      iban: values.iban,
      vatRegulation: values.vatRegulation,
      street: values.street,
      postCode: values.postcode,
      city: values.city,
      phone:values.phone,
    
    }

    try {
      await axios.post(`${import.meta.env.VITE_DB_URL}/freelancer/create`, registerData);
      setLoading(false);
       window.location.href = "https://driptext.de/danke-freelancer/";
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
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10  mb-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. Personal data:
                </h2>
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
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"e-mail"}
                    placeholder={"Your email address"}
                    type={"email"}
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
                  <GroupField
                    label={"phone"}
                    placeholder={"Your phone number"}
                    id={"phone"}
                    name={"phone"}
                    value={props.values.phone}
                    errors={props.errors.phone}
                    onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                  />
                </div>
                <GroupField
                  label={"Street"}
                  placeholder={"Your street"}
                  type={"text"}
                  id={"street"}
                  name={"street"}
                  value={props.values.street}
                  errors={props.errors.street}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"Postcode"}
                    placeholder={"Your postal code"}
                    id={"postcode"}
                    name={"postcode"}
                    value={props.values.postcode}
                    errors={props.errors.postcode}
                    onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                  />
                  <GroupField
                    label={"City"}
                    placeholder={"Your city"}
                    id={"city"}
                    name={"city"}
                    value={props.values.city}
                    errors={props.errors.city}
                    onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                  />
                </div>
                <GroupField
                  label={"Country"}
                  placeholder={"Your country"}
                  type={"text"}
                  id={"country"}
                  name={"country"}
                  value={props.values.country}
                  errors={props.errors.country}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Billing information:
                </h2>
                <GroupField
                  label={"IBAN"}
                  placeholder={"Example: DE68500105178297336485"}
                  type={"text"}
                  id={"iban"}
                  name={"iban"}
                  value={props.values.iban}
                  errors={props.errors.iban}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                <GroupDropdownField
                  label={"VAT regulation"}
                  type={"text"}
                  id={"vatRegulation"}
                  name={"vatRegulation"}
                  placeholder={""}
                  option1={"Small business owner (0%)"}
                  option2={"CY Ltd (19%)"}
                  option3={"Non-EU country (0%)"}
                  option4={"Reverse charge (0%)"}
                  value={props.values.vatRegulation}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  3. Company details (if necessary):
                </h2>
                <GroupField
                  label={"Company name"}
                  placeholder={"Name of your company"}
                  type={"text"}
                  id={"company"}
                  name={"company"}
                  value={props.values.company}
                  errors={props.errors.company}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                {props.values.vatRegulation === "CY Ltd (19%)" || props.values.vatRegulation === "Reverse charge (0%)" ? (
                  <GroupField
                  label={"VAT ID No."}
                  placeholder={"Example: DE238443776"}
                  id={"vatId"}
                  name={"vatId"}
                  value={props.values.vatId}
                  errors={props.errors.vatId}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
                ): null}
               
               <button
                    className={`${
                      loading ? "cursor-not-allowed" : "cursor-pointer"
                    } border-none text-white font-medium text-base w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
                    disabled={loading}
                  >
                      {loading? 'Submitting' :'Submit Now'}
                  </button>
              
                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm font-normal text-center">
                Please check that your data is correct before submitting.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
