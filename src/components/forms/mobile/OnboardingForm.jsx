import React from "react";
import { GroupField } from "./GroupField";
import { GroupTextArea } from "./GroupTextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const OnboardingForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    speech: "",
    project: "",
    perspective: "",
    companyInfo: "",
    companyAttributes: "",
    services: "",
    content: "",
    customers: "",
    contentPurpose: "",
    brand: "",
  };
  const validationSchema = Yup.object().shape({
    speech: Yup.string().required("Please enter  speech"),
    perspective: Yup.string().required("Please enter writing perspective"),
    project: Yup.string().required("Please enter project"),
    companyInfo: Yup.string().required("Please enter company information"),
    companyAttributes: Yup.string().required(
      "Please enter company's attributes"
    ),
    services: Yup.string().required("Please enter company's services"),
    content: Yup.string().required("Above information is required"),
    customers: Yup.string().required("Above information is required"),
    contentPurpose: Yup.string().required("Above information is required"),
    brand: Yup.string().required("Above information is required"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/success");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <div className="xl:hidden w-full bg-dark-blue flex flex-col gap-8 px-3 xs:px-4 xs:py-10 sm:px-6 md:px-9 md:py-14 lg:px-10">
            <div className="flex flex-col gap-3 xs:gap-5">
              <h2 className="text-white text-lg font-semibold">
                1. General Information
              </h2>
              <GroupField
                label={"Speech"}
                type={"text"}
                id={"speech"}
                name={"speech"}
                placeholder={"write here"}
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
            </div>
            <div className="flex flex-col gap-3 xs:gap-5">
              <h2 className="text-white text-lg font-semibold">
                2. Company Information
              </h2>
              <GroupTextArea
                label={"Background information about the company"}
                type={"text"}
                placeholder={
                  "Explain a sentence what you do as a company, what you offer and how it helps the customer."
                }
                id={"companyInfo"}
                name={"companyInfo"}
                value={props.values.companyInfo}
                errors={props.errors.companyInfo}
                onChange={props.handleChange}
              />

              <GroupTextArea
                label={
                  "Which attributes best describe you as a company/your products/your services?"
                }
                type={"text"}
                placeholder={
                  "Please give us as many attributes as you woulld like readers to perceive about you and your company in bullet points."
                }
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
             
            </div>
            <div className="flex flex-col gap-3 xs:gap-5">
              <h2 className="text-white text-lg font-semibold">
                3. Information About the Target Customers
              </h2>
              <GroupTextArea
                label={"Who is the content written for? "}
                type={"text"}
                placeholder={
                  "Please describe the target group as precisely as possible"
                }
                id={"content"}
                name={"content"}
                value={props.values.content}
                errors={props.errors.content}
                onChange={props.handleChange}
              />
              <GroupTextArea
                label={"Customers we want to address have an interest in..."}
                type={"text"}
                placeholder={
                  "Please list here in bullet points which problems you solve for customers."
                }
                id={"customers"}
                name={"customers"}
                value={props.values.customers}
                errors={props.errors.customers}
                onChange={props.handleChange}
              />
            </div>
            <div className="flex flex-col gap-3 xs:gap-5">
              <h2 className="text-white text-lg font-semibold">
                4. Aim of the Content
              </h2>
              <GroupTextArea
                label={"What is the purpose of the content?"}
                type={"text"}
                placeholder={
                  "Please briefly describe here how organic customers/readers should ideally react when thye land on your site."
                }
                id={"contentPurpose"}
                name={"contentPurpose"}
                value={props.values.contentPurpose}
                errors={props.errors.contentPurpose}
                onChange={props.handleChange}
              />
              <GroupTextArea
                label={"Information about your brand and your content"}
                type={"text"}
                placeholder={
                  "Please give us bullet points on how potential readers should describe the content they consume"
                }
                id={"brand"}
                name={"brand"}
                value={props.values.brand}
                errors={props.errors.brand}
                onChange={props.handleChange}
              />
               <div className="w-full bg-custom-yellow flex justify-center py-2 pt-1.5 mt-1">
                <button
                  className="border-none text-dark-blue font-medium text-lg cursor-pointer"
                  type="submit"
                >
                  Submit Order
                </button>
              </div>
            </div>
            <p className="text-white text-xs">
              By submitting the order, I agree to the{" "}
              <Link className="text-blue-500">
                general terms and conditions
              </Link>{" "}
              terms and conditions of DripText Ltd. and understand that our
              offers are aimed exclusively at commercial customers. All prices
              are exclusive of VAT. Sales only to entrepreneurs, tradespeople,
              associations, authorities or self-employed persons (§ 14 BGB). No
              sales to consumers within the meaning of § 13 BGB.
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OnboardingForm;
