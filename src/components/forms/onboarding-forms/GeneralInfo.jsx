import React from "react";
// import GroupField from "./fields/GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import GroupField from "../fields/GroupField";

const GeneralInfo = () => {
  const navigate = useNavigate();
  const initialValues = {
    speech: "",
    project: "",
    perspective: "",
  };
  const validationSchema = Yup.object().shape({
    speech: Yup.string().required("Please enter  speech"),
    perspective: Yup.string().required("Please enter writing perspective"),
    project: Yup.string().required("Please enter project"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/onboarding/form/company-info");
  };
  return (
    <div className="w-[70%] rounded-r-lg px-20 2xl:px-24 3xl:px-28 4xl:px-32 py-16">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-dark-blue text-3xl font-medium">
          General Information
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
              label={"Speech"}
              type={"text"}
              placeholder={"write here"}
              id={"speech"}
              name={"speech"}
              value={props.values.speech}
              errors={props.errors.speech}
              onChange={props.handleChange}
            />
            <GroupField
              label={" Writing Perspective"}
              placeholder={"write here"}
              type={"text"}
              id={"perspective"}
              name={"perspective"}
              value={props.values.perspective}
              errors={props.errors.perspective}
              onChange={props.handleChange}
            />
            <GroupField
              label={"Project"}
              type={"text"}
              id={"project"}
              name={"project"}
              placeholder={"write here"}
              value={props.values.project}
              errors={props.errors.project}
              onChange={props.handleChange}
            />

            <div className="">
              <button
                className="bg-custom-yellow border-none text-dark-blue text-lg font-medium px-10 py-2 rounded-md cursor-pointer shadow-md"
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

export default GeneralInfo;
