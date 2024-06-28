import React from 'react'
import GroupField from "./fields/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const ContactDetailForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    fname: "",
    lname: "",
  };
  const validationSchema = Yup.object().shape({
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
    <div className="w-[70%] rounded-r-lg px-24 2xl:px-28 4xl:px-32 py-16">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-dark-blue text-3xl font-medium">
           Contact details of the invoice recipient (m/f/d)
          </h2>
          <p className="text-gray-500 font-normal">
            Tell us a bit about your Project to get started with your account
          </p>
          <hr className="my-6" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form className="w-full flex flex-col gap-5 mt-4">
              <GroupField
                 label={"Email"}
                 placeholder={"example@gmail.com"}
                 type={"text"}
                 id={'email'}
                 name={'email'}
                 value={props.values.email}
                 errors={props.errors.email}
                 onChange={props.handleChange}
              />

              <div className='w-full flex gap-4 items-center justify-between'>
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
              </div>
              <div className="">
                <button className="bg-custom-yellow border-none text-dark-blue text-lg font-medium px-10 py-2 rounded-md cursor-pointer shadow-md"
                type="submit"
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default ContactDetailForm