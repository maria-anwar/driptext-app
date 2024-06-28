import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import GroupField from "../fields/GroupField";
import GroupTextArea from "../fields/GroupTextArea";

const CompanyInfo = () => {
  const navigate = useNavigate();
  const initialValues = {
    companyInfo: "",
    companyAttributes: "",
    services: "",
  };
  const validationSchema = Yup.object().shape({
    companyInfo: Yup.string().required("Please enter company information"),
    companyAttributes: Yup.string().required("Please enter company's attributes"),
    services: Yup.string().required("Please enter company's services"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/onboarding/form/customers-info");
  };
  return (
    <div className="w-[70%] rounded-r-lg px-24 2xl:px-28 4xl:px-32 py-16">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-dark-blue text-3xl font-medium">
          Company Information
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
          <Form className="w-full flex flex-col gap-5 4xl:gap-6 mt-4">
            <GroupTextArea
              label={"Background information about the company"}
              type={"text"}
              placeholder={"Explain a sentence what you do as a company, what you offer and how it helps the customer."}
              id={"companyInfo"}
              name={"companyInfo"}
              value={props.values.companyInfo}
              errors={props.errors.companyInfo}
              onChange={props.handleChange}
            />
           
            <GroupTextArea
              label={"Which attributes best describe you as a company/your products/your services?"}
              type={"text"}
              placeholder={"Please give us as many attributes as you woulld like readers to perceive about you and your company in bullet points."}
              id={"companyAttributes"}
              name={"companyAttributes"}
              value={props.values.companyAttributes}
              errors={props.errors.companyAttributes}
              onChange={props.handleChange}
            />
             <GroupTextArea
              label={"What are your services?"}
              type={"text"}
              placeholder={"Please list all servicesoffered online here."}
              id={"services"}
              name={"services"}
              value={props.values.services}
              errors={props.errors.services}
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

export default CompanyInfo;
