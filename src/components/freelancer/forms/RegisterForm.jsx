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
    fname: Yup.string().required("Bitte geben Sie den Vornamen ein"),
    lname: Yup.string().required("Bitte geben Sie den Nachnamen ein"),
    email: Yup.string().email().required("Bitte geben Sie Ihre E-Mail-Adresse ein"),
    phone: Yup.string().required("Bitte geben Sie Ihre Telefonnummer ein"),
    street: Yup.string().required("Bitte geben Sie Ihre Straße ein"),
    postcode: Yup.string().required("Bitte geben Sie Ihre Postleitzahl ein"),
    city: Yup.string().required("Bitte geben Sie Ihre Stadt ein"),
    country: Yup.string().required("Bitte geben Sie Ihr Land ein"),
    iban: Yup.string().required("Bitte geben Sie Ihre IBAN ein"),
    company: Yup.string().required("Bitte geben Sie den Namen Ihres Unternehmens ein"),
    vatId: Yup.string().when(["vatRegulation"], ([vatRegulation], schema) => {
      if (vatRegulation === "CY Ltd (19%)" || vatRegulation === "Reverse charge (0%)") {
        return schema.required("USt-IdNr. ist erforderlich");
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
                  1. Persönliche Daten:
                </h2>
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
            
                  <GroupField
                    label={"Vorname"}
                    placeholder={"Dein Vorname"}
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
                    label={"Nachname"}
                    placeholder={"Dein Nachname"}
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
                    label={"E-Mail"}
                    placeholder={"Deine E-Mail-Adresse"}
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
                    label={"Telefon"}
                    placeholder={"Deine Telefonnummer"}
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
                  label={"Straße"}
                  placeholder={"Deine Straße"}
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
                    label={"PLZ"}
                    placeholder={"Deine PLZ"}
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
                    label={"Stadt"}
                    placeholder={"Deine Stadt"}
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
                  label={"Land"}
                  placeholder={"Dein Land"}
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
                  2. Informationen zur Abrechnung:
                </h2>
                <GroupField
                  label={"IBAN"}
                  placeholder={"Esp. DE68500105178297336485"}
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
                  label={"USt.-Regelung"}
                  type={"text"}
                  id={"vatRegulation"}
                  name={"vatRegulation"}
                  placeholder={""}
                  option1={"Kleinunternehmer (0%)"}
                  option2={"CY Ltd (19%)"}
                  option3={"Non-EU Ausland (0%)"}
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
                  3.  Firmendaten (falls notwendig):
                </h2>
                <GroupField
                  label={"Firmenname"}
                  placeholder={"Name deiner Firma"}
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
                  label={"USt-IdNr"}
                  placeholder={"Esp. DE238443776"}
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
                    {loading ? 'Wird gesendet' : 'Jetzt absenden'}
                  </button>
              
                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm font-normal text-center">
              Bitte überprüfe deine Daten vor dem Absenden auf Richtigkeit.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
