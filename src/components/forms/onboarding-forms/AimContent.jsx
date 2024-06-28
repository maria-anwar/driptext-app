import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import GroupTextArea from "../fields/GroupTextArea";

const AimContent = () => {
  const navigate = useNavigate();
  const initialValues = {
    contentPurpose: "",
    brand: "",
  };
  const validationSchema = Yup.object().shape({
    contentPurpose: Yup.string().required("Above information is required"),
    brand: Yup.string().required("Above information is required"),
  });

  const onSubmit = (values) => {
    console.log("Im Clicked");
    navigate("/register/form/contact-details");
  };
  return (
    <div className="w-[70%] rounded-r-lg px-24 2xl:px-28 4xl:px-32 py-16">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-dark-blue text-3xl font-medium">
        Aim of the Content
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
             label={"What is the purpose of the content?"}
             type={"text"}
             placeholder={"Please briefly describe here how organic customers/readers should ideally react when thye land on your site."}
             id={"contentPurpose"}
             name={"contentPurpose"}
             value={props.values.contentPurpose}
             errors={props.errors.contentPurpose}
             onChange={props.handleChange}
            />
             <GroupTextArea
             label={"Information about your brand and your content"}
             type={"text"}
             placeholder={"Please give us bullet points on how potential readers should describe the content they consume"}
             id={"brand"}
             name={"brand"}
             value={props.values.brand}
             errors={props.errors.brand}
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

export default AimContent;
