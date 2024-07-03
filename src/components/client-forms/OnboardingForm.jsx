import React from "react";
import { GroupField } from "./GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { GroupTextArea } from "./GroupTextArea";
import { GroupDropdownField } from "./GroupDropdownField";

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
    speech: Yup.string().required("please select speech"),
    perspective: Yup.string().required("please enter writing perspective"),
    project: Yup.string().required("please enter project"),
    companyInfo: Yup.string().required("please enter company information"),
    companyAttributes: Yup.string().required(
      "Please enter company's attributes"
    ),
    services: Yup.string().required("please enter company's services"),
    content: Yup.string().required("above information is required"),
    customers: Yup.string().required("above information is required"),
    contentPurpose: Yup.string().required("above information is required"),
    brand: Yup.string().required("above information is required"),
  });
  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/thankyou-page");
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
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10 mt-6 mb-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. General Information
                </h2>
                <GroupDropdownField
                  label={"Speech"}
                  type={"text"}
                  id={"speech"}
                  name={"speech"}
                  placeholder={""}
                  option1={'She'}
                  option2={'You (capitalized)'}
                  option3={'you (lowercase)'}
                  option4={'you'}
                  option5={'no direct address'}
                  value={props.values.speech}
                  errors={props.errors.speech}
                  onChange={props.handleChange}

                />
                <GroupDropdownField
                 label={" Writing Perspective"}
                 placeholder={"write here"}
                 type={"text"}
                 id={"perspective"}
                 name={"perspective"}
                 value={props.values.perspective}
                 errors={props.errors.perspective}
                 onChange={props.handleChange}
                  option1={'we/our shop/our company'}
                  option2={'the company/shop'}
                  option3={'the editorial office'}
                  option4={'I'}
                  option5={'neutral'}
                  option6={'uniform/but fundamentally irrelevant'}
                  

                />
                <GroupField
                  label={"Project"}
                  type={"text"}
                  id={"project"}
                  name={"project"}
                  placeholder={"example.com"}
                  value={props.values.project}
                  errors={props.errors.project}
                  onChange={props.handleChange}
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Company Information
                </h2>
                <GroupTextArea
                  label={"Background information about the company"}
                  type={"text"}
                  placeholder={
                    "Please describe here, ideally in just one sentence, what you do as a company, what you offer and how it helps the customer."
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

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
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

              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
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
                <div className="w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl">
                  <button
                    className="border-none text-white font-medium text-base cursor-pointer "
                    type="submit"
                  >
                    Submit Order
                  </button>
                </div>
              </div>
              <p className="text-custom-black text-sm 3xl:text-base font-medium text-center">
                Please check that your data is correct before submitting
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OnboardingForm;
