import React, { useState } from "react";
import { GroupField } from "../../client-forms/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
// import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "../../client-forms/GroupDropdownField";
import { CountryDropdownField } from "../../client-forms/CountryDropdownField";

const RegisterForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
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
    vatRegulation: "",
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
    vatId: Yup.string().required("VAT ID is required"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    // setIsSuccess(true);
    window.location.href = "https://driptext.de/danke-probetext/";
    // navigate("https://driptext.de/danke-probetext/");
  };
  const countriesList = [
    {
      id: "1",
      value: "DE",
      name: "Germany",
    },
    {
      id: "2",
      value: "AF",
      name: "Afghanistan",
    },
    {
      id: "3",
      value: "EG",
      name: "Egypt",
    },
    {
      id: "4",
      value: "AL",
      name: "Albania",
    },
    {
      id: "5",
      value: "DZ",
      name: "Algeria",
    },
    {
      id: "6",
      value: "AD",
      name: "Andorra",
    },
    {
      id: "7",
      value: "AO",
      name: "Angola",
    },
    {
      id: "8",
      value: "AG",
      name: "Antigua and Barbuda",
    },
    {
      id: "9",
      value: "GQ",
      name: "Equatorial Guinea",
    },
    {
      id: "10",
      value: "AR",
      name: "Argentina",
    },
    {
      id: "11",
      value: "AM",
      name: "Armenia",
    },
    {
      id: "12",
      value: "AZ",
      name: "Azerbaijan",
    },
    {
      id: "13",
      value: "ET",
      name: "Ethiopia",
    },
    {
      id: "14",
      value: "AU",
      name: "Australia",
    },
    {
      id: "15",
      value: "BS",
      name: "Bahamas",
    },
    {
      id: "16",
      value: "BH",
      name: "Bahrain",
    },
    {
      id: "17",
      value: "BD",
      name: "Bangladesh",
    },
    {
      id: "18",
      value: "BB",
      name: "Barbados",
    },
    {
      id: "19",
      value: "BE",
      name: "Belgium",
    },
    {
      id: "20",
      value: "BZ",
      name: "Belize",
    },
    {
      id: "21",
      value: "BJ",
      name: "Benin",
    },
    {
      id: "22",
      value: "BT",
      name: "Bhutan",
    },
    {
      id: "23",
      value: "BO",
      name: "Bolivia",
    },
    {
      id: "24",
      value: "BA",
      name: "Bosnia and Herzegovina",
    },
    {
      id: "25",
      value: "BW",
      name: "Botswana",
    },
    {
      id: "26",
      value: "BR",
      name: "Brazil",
    },
    {
      id: "27",
      value: "BN",
      name: "Brunei",
    },
    {
      id: "28",
      value: "BG",
      name: "Bulgaria",
    },
    {
      id: "29",
      value: "BF",
      name: "Burkina-Faso",
    },
    {
      id: "30",
      value: "BI",
      name: "Burundi",
    },
  ];
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
                    onChange={props.handleChange}
                  />
                  <GroupField
                    label={"Last Name"}
                    placeholder={"Your last name"}
                    id={"lname"}
                    name={"lname"}
                    value={props.values.lname}
                    errors={props.errors.lname}
                    onChange={props.handleChange}
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
                    onChange={props.handleChange}
                  />
                  <GroupField
                    label={"phone"}
                    placeholder={"Your phone number"}
                    id={"phone"}
                    name={"phone"}
                    value={props.values.phone}
                    errors={props.errors.phone}
                    onChange={props.handleChange}
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
                  onChange={props.handleChange}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"Postcode"}
                    placeholder={"Your postal code"}
                    id={"postcode"}
                    name={"postcode"}
                    value={props.values.postcode}
                    errors={props.errors.postcode}
                    onChange={props.handleChange}
                  />
                  <GroupField
                    label={"City"}
                    placeholder={"Your city"}
                    id={"city"}
                    name={"city"}
                    value={props.values.city}
                    errors={props.errors.city}
                    onChange={props.handleChange}
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
                  onChange={props.handleChange}
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
                  onChange={props.handleChange}
                />
                <GroupDropdownField
                  label={"VAT regulation"}
                  type={"text"}
                  id={"vatRegulation"}
                  name={"vatRegulation"}
                  placeholder={""}
                  option1={"Small business owner (0%)"}
                  option2={"CY Ltd (19%)"}
                  option3={"EU countries (0%)"}
                  option4={"Reverse charge (0%)"}
                  value={props.values.vatRegulation}
                  onChange={props.handleChange}
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
                  onChange={props.handleChange}
                />
                <GroupField
                  label={"VAT ID No."}
                  placeholder={"Example: DE238443776"}
                  id={"vatId"}
                  name={"vatId"}
                  value={props.values.vatId}
                  errors={props.errors.vatId}
                  onChange={props.handleChange}
                />
                <div className="w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl">
                  <button
                    className="border-none text-white font-medium text-base cursor-pointer "
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
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
