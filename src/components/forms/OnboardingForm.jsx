import React from "react";
import { IoPersonOutline, IoBookSharp, IoBookOutline } from "react-icons/io5";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import GeneralInfo from "./onboarding-forms/GeneralInfo";
import CompanyInfo from "./onboarding-forms/CompanyInfo";
import TargetCustomers from "./onboarding-forms/TargetCustomers";
import AimContent from "./onboarding-forms/AimContent";
import { useNavigate,Link } from 'react-router-dom';

const OnboardingForm = () => {
  return (
    <>
      <div className="w-full flex border rounded-lg shadow-lg">
        <div className="w-[30%] bg-blue-900 rounded-l-lg px-8 py-14 ">
          <div className="w-full flex flex-col gap-8 ">
            <div className="w-full flex items-center">
              <div className="w-[17%] ">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
                  <IoBookOutline size={18} color="blue-900" />
                </div>
              </div>
              <Link to='/content' className="w-[80%] text-white text-md">
                General Information
              </Link>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[17%] ">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
                  <IoPersonOutline size={18} color="blue-900" />
                </div>
              </div>
              <Link className="w-[80%] text-white">Company Information</Link>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[17%] ">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
                  <IoPersonOutline size={18} color="blue-900" />
                </div>
              </div>
              <Link className="w-[80%] text-white">Target Customers Info</Link>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[17%] ">
                <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
                  <IoPersonOutline size={18} color="blue-900" />
                </div>
              </div>
              <Link className="w-[80%] text-white">Content Aim</Link>
            </div>
          </div>
        </div>

        <div className="w-[70%] flex flex-col gap-6 rounded-r-lg px-32 py-16">
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <GeneralInfo/>
              <p className="text-gray-500 font-normal">
                Tell us a bit about your Project to get started
              </p>
              <hr className="my-6" />
            </div>
            {/* <Formik
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
                    <button
                      className="bg-blue-900 border-none text-white text-lg font-normal px-10 py-2 rounded-md cursor-pointer shadow-md"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </Form>
              )}
            </Formik> */}
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <CompanyInfo/>
              <p className="text-gray-500 font-normal">
                Tell us a bit about your Project to get started
              </p>
              <hr className="my-6" />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <TargetCustomers/>
              <p className="text-gray-500 font-normal">
                Tell us a bit about your Project to get started
              </p>
              <hr className="my-6" />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <AimContent/>
              <p className="text-gray-500 font-normal">
                Tell us a bit about your Project to get started
              </p>
              <hr className="my-6" />
            </div>
          </div>
          
        </div>

        {/* <TextInfoForm/> */}
      </div>
    </>
  );
};

export default OnboardingForm;
