import React from "react";
import GroupField from "./fields/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const TextInfoForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    project: "",
    keyword: "",
  };
  const validationSchema = Yup.object().shape({
    project: Yup.string().required("Please enter your project"),
    keyword: Yup.string().required("Please enter keyword"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/register/form/contact-details");
  };
  return (
    <>
      <div className="w-[70%]  rounded-r-lg px-32 py-16">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-dark-blue text-3xl font-medium">
            Information About the Text
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
            <Form className="w-full flex flex-col gap-5 mt-4">
              <GroupField
                label={"Your Project"}
                type={"text"}
                placeholder={"Your project name"}
                id={"project"}
                name={"project"}
                value={props.values.project}
                errors={props.errors.project}
                onChange={props.handleChange}
              />

              <GroupField
                label={"Desired Keyword"}
                type={"text"}
                id={"keyword"}
                name={"keyword"}
                value={props.values.keyword}
                errors={props.errors.keyword}
                onChange={props.handleChange}
              />
              <div className="">
                <button className="bg-blue-900 border-none text-white text-lg font-normal px-10 py-2 rounded-md cursor-pointer shadow-md"
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
  );
};

export default TextInfoForm;
