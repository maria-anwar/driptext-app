import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import GroupTextArea from "../fields/GroupTextArea";

const TargetCustomers = () => {
  const navigate = useNavigate();
  const initialValues = {
    content: "",
    customers: "",
  };
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Above information is required"),
    customers: Yup.string().required("Above information is required"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/onboarding/form/content-info");
  };
  return (
    <div className="w-[70%] rounded-r-lg px-24 2xl:px-28 4xl:px-32 py-16">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-dark-blue text-3xl font-medium">
        Information About the Target Customers
        </h2>
        <p className="text-gray-500 font-normal">
          Tell us a bit about your Project to get started
        </p>
        <hr className="my-6" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form className="w-full flex flex-col gap-5 4xl:gap-7 mt-4">
            <GroupTextArea
             label={"Who is the content written for? "}
             type={"text"}
             placeholder={"Please describe the target group as precisely as possible"}
             id={"content"}
             name={"content"}
             value={props.values.content}
             errors={props.errors.content}
             onChange={props.handleChange}
            />
             <GroupTextArea
             label={"Customers we want to address have an interest in..."}
             type={"text"}
             placeholder={"Please list here in bullet points which problems you solve for customers."}
             id={"customers"}
             name={"customers"}
             value={props.values.customers}
             errors={props.errors.customers}
             onChange={props.handleChange}
            />
          
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
  );
};

export default TargetCustomers;
