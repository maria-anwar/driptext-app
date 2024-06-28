import React from "react";
import { GroupField } from "./GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate,Link } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
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
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate('/onboarding');
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
            <div className="xl:hidden w-full bg-dark-blue xxxs:flex xxxs:flex-col gap-8 px-3 xs:px-4 xs:py-10 sm:px-6 md:px-9 md:py-14 lg:px-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-white text-lg font-semibold">
                  1. Information About the Text
                </h2>
                <GroupField
                  label={"Your Project"}
                  placeholder={"Your project name"}
                  id={'project'}
                  name={'project'}
                  value={props.values.project}
                  errors={props.errors.project}
                  onChange={props.handleChange}
                  
                />
                <GroupField
                  label={"Desired Keyword"}
                  placeholder={"Your desired keyword"}
                  id={'keyword'}
                  name={'keyword'}
                  value={props.values.keyword}
                  errors={props.errors.keyword}
                  onChange={props.handleChange}
                 

                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white text-lg font-semibold">
                  2. Contact details of the invoice receipient
                </h2>
                <GroupField
                  label={"Email"}
                  placeholder={"Your email address"}
                  id={'email'}
                  name={'email'}
                  value={props.values.email}
                  errors={props.errors.email}
                  onChange={props.handleChange}
                 

                />
                <GroupField
                  label={"First Name"}
                  placeholder={"Your first name"}
                  id={'fname'}
                  name={'fname'}
                  value={props.values.fname}
                  errors={props.errors.fname}
                  onChange={props.handleChange}
                />

                <GroupField
                  label={"Last Name"}
                  placeholder={"Your last name"}
                  id={'lname'}
                  name={'lname'}
                  value={props.values.lname}
                  errors={props.errors.lname}
                  onChange={props.handleChange}                
                />
                <div className="w-full bg-custom-yellow flex justify-center py-2 pt-1.5 mt-1">
                  <button className="border-none text-dark-blue font-medium text-lg cursor-pointer" type="submit">
                    Submit Order
                  </button>
                </div>
              </div>
              <p className="text-white text-xs">By submitting the order, I agree to the <Link className="text-blue-500">general terms and conditions</Link> terms and conditions of DripText Ltd. and understand that our offers are aimed exclusively at commercial customers. All prices are exclusive of VAT. Sales only to entrepreneurs, tradespeople, associations, authorities or self-employed persons (§ 14 BGB). No sales to consumers within the meaning of § 13 BGB.</p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
