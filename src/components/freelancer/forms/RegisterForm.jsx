import React, { useState } from "react";
import { GroupField } from "../../client-forms/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
// import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "../../client-forms/GroupDropdownField";
import { CountryDropdownField } from "../../client-forms/CountryDropdownField";
import { setUser } from "../../../redux/userSlice";
import axios from "axios";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
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
    vatRegulation: "Small business owner (0%)",
    company: "",
    vatId: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.fname.errorMessage"
      )
    ),
    lname: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.lname.errorMessage"
      )
    ),
    email: Yup.string()
      .email()
      .required(
        t(
          "registerFreelancerPage.registerFormPage.section1.fields.email.errorMessage"
        )
      ),
    phone: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.phone.errorMessage"
      )
    ),
    street: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.street.errorMessage"
      )
    ),
    postcode: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.postcode.errorMessage"
      )
    ),
    city: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.city.errorMessage"
      )
    ),
    country: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section1.fields.country.errorMessage"
      )
    ),
    iban: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section2.fields.iban.errorMessage"
      )
    ),
    company: Yup.string().required(
      t(
        "registerFreelancerPage.registerFormPage.section3.fields.company.errorMessage"
      )
    ),
    vatId: Yup.string().when(["vatRegulation"], ([vatRegulation], schema) => {
      if (
        vatRegulation === "CY Ltd (19%)" ||
        vatRegulation === "Reverse charge (0%)"
      ) {
        return schema.required(
          t(
            "registerFreelancerPage.registerFormPage.section3.fields.vatId.errorMessage"
          )
        );
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
      vatId: values.vatId || "null",
      iban: values.iban,
      vatRegulation: values.vatRegulation,
      street: values.street,
      postCode: values.postcode,
      city: values.city,
      phone: values.phone,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DB_URL}/freelancer/create`,
        registerData
      );
      const userId = 
      {
        userId:response.data.freelancer._id,
        language: "de"
      }
      const res = await axios.post(
        `${import.meta.env.VITE_DB_URL}/language/updateLanguage`,
         userId
      );
      console.log(res);
      localStorage.setItem("Userlanguage", 'de');
      
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
              <div className="flex flex-col gap-y-3  ">
                <h2 className="text-custom-black text-base font-semibold  ">
                  {t("registerFreelancerPage.registerFormPage.section1.title")}
                </h2>
                <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-3 ">
                  <GroupField
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.fname.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.fname.errorMessage"
                    )}
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
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.lname.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.lname.placeholder"
                    )}
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
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.email.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.email.placeholder"
                    )}
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
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.phone.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.phone.placeholder"
                    )}
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
                  label={t(
                    "registerFreelancerPage.registerFormPage.section1.fields.street.label"
                  )}
                  placeholder={t(
                    "registerFreelancerPage.registerFormPage.section1.fields.street.placeholder"
                  )}
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
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.postcode.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.postcode.placeholder"
                    )}
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
                    label={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.city.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section1.fields.city.placeholder"
                    )}
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
                  label={t(
                    "registerFreelancerPage.registerFormPage.section1.fields.country.label"
                  )}
                  placeholder={t(
                    "registerFreelancerPage.registerFormPage.section1.fields.country.placeholder"
                  )}
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

              <div className="flex flex-col gap-y-3 -mt-2  ">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5  ">
                  {t("registerFreelancerPage.registerFormPage.section2.title")}
                </h2>
                <GroupField
                  label={t(
                    "registerFreelancerPage.registerFormPage.section2.fields.iban.label"
                  )}
                  placeholder={t(
                    "registerFreelancerPage.registerFormPage.section2.fields.iban.placeholder"
                  )}
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
                  label={t(
                    "registerFreelancerPage.registerFormPage.section2.fields.vatRegulation.label"
                  )}
                  type={"text"}
                  id={"vatRegulation"}
                  name={"vatRegulation"}
                  placeholder={""}
                  option1={"Small Business (0%)"}
                  option2={"CY Ltd (19%)"}
                  option3={"Non-EU Foreign (0%)"}
                  option4={"Reverse Charge (0%)"}
                  value={props.values.vatRegulation}
                  onChange={(e) => {
                    props.handleChange(e);
                    setError(false);
                    setErrorMesssage("");
                  }}
                />
              </div>

              <div className="flex flex-col gap-y-3   -mt-2">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5  ">
                  {t("registerFreelancerPage.registerFormPage.section3.title")}
                </h2>
                <GroupField
                  label={t(
                    "registerFreelancerPage.registerFormPage.section3.fields.company.label"
                  )}
                  placeholder={t(
                    "registerFreelancerPage.registerFormPage.section3.fields.company.placeholder"
                  )}
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
                {props.values.vatRegulation === "CY Ltd (19%)" ||
                props.values.vatRegulation === "Reverse charge (0%)" ? (
                  <GroupField
                    label={t(
                      "registerFreelancerPage.registerFormPage.section3.fields.vatId.label"
                    )}
                    placeholder={t(
                      "registerFreelancerPage.registerFormPage.section3.fields.vatId.placeholder"
                    )}
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
                ) : null}

                <button
                  className={`${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  } border-none text-white font-medium text-base w-full bg-custom-black hover:bg-custom-black/90 flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl`}
                  disabled={loading}
                >
                  {loading
                    ? t(
                        "registerFreelancerPage.registerFormPage.submitButton.sending"
                      )
                    : t(
                        "registerFreelancerPage.registerFormPage.submitButton.submit"
                      )}
                </button>

                {error && (
                  <div id="email" className="mt-2 text-sm text-red-500">
                    {errorMessage}
                  </div>
                )}
              </div>
              <p className="text-custom-black text-sm font-normal text-center">
                {t("registerFreelancerPage.registerFormPage.dataCheckMessage")}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
